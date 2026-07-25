// Location: src/data/lessons/core/english_language/idioms.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_idioms",
  subject: "English Language",
  topic: "Idioms",
  name: "Idioms and Expressions",
  icon: "💡",
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
    "Basic vocabulary knowledge",
    "Understanding of figurative language",
    "Reading comprehension skills",
    "Basic grammar knowledge"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_intonation_stress",
      name: "Intonation and Stress",
      file: "core/english_language/intonation_and_stress.js"
    },
    {
      id: "eng_lesson_cloze_passage",
      name: "Cloze Passage",
      file: "core/english_language/cloze_passage.js"
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
      description: "Define idioms and explain their purpose",
      indicator: "Student can explain what idioms are and why they are used"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify common idioms in context",
      indicator: "Student can recognize idioms in sentences"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Use common idioms in simple sentences",
      indicator: "Student can use basic idioms correctly"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the meanings of common idioms",
      indicator: "Student can define and explain common idioms"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use idioms appropriately in different contexts",
      indicator: "Student can use idioms correctly in various situations"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Distinguish between literal and figurative meanings",
      indicator: "Student can explain the difference between literal and figurative language"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify idioms in reading passages",
      indicator: "Student can spot idioms while reading"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Use advanced idioms correctly",
      indicator: "Student can use less common idioms appropriately"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the effect of idioms in writing",
      indicator: "Student can explain how idioms enhance communication"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Create original sentences using idioms",
      indicator: "Student can craft sentences with multiple idioms"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering English Idioms",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn common English idioms and how to use them naturally."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Idioms?</h2>
      <p><strong>Idioms</strong> are phrases or expressions that have a figurative meaning different from their literal meaning. They are used in everyday English and add color and interest to language.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Literal Meaning</h3>
          <p>The actual dictionary meaning of the words.</p>
          <p><em>"It's <strong>raining cats and dogs</strong>."</em></p>
          <p>Literal: Animals falling from the sky</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Figurative Meaning</h3>
          <p>The implied or idiomatic meaning.</p>
          <p><em>"It's <strong>raining cats and dogs</strong>."</em></p>
          <p>Figurative: It's raining very heavily</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Use Idioms?</h4>
        <ul>
          <li>✓ Make language more colorful and interesting</li>
          <li>✓ Show fluency and natural language use</li>
          <li>✓ Express complex ideas concisely</li>
          <li>✓ Connect with native speakers</li>
          <li>✓ Sound more natural and less textbook-like</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Common Idioms - Part 1",
        objective: "obj_002",
        text: `
          <h3>Essential Idioms</h3>
          <p>These are some of the most common idioms in English.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Break the ice</h4>
              <ul>
                <li><strong>Meaning:</strong> To start a conversation</li>
                <li><strong>Example:</strong> "He told a joke to <strong>break the ice</strong>."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Piece of cake</h4>
              <ul>
                <li><strong>Meaning:</strong> Very easy</li>
                <li><strong>Example:</strong> "The exam was a <strong>piece of cake</strong>."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Under the weather</h4>
              <ul>
                <li><strong>Meaning:</strong> Feeling sick</li>
                <li><strong>Example:</strong> "I'm feeling <strong>under the weather</strong> today."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Hit the nail on the head</h4>
              <ul>
                <li><strong>Meaning:</strong> Be exactly right</li>
                <li><strong>Example:</strong> "You <strong>hit the nail on the head</strong> with your answer."</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Cost an arm and a leg</h4>
              <ul>
                <li><strong>Meaning:</strong> Very expensive</li>
                <li><strong>Example:</strong> "That car <strong>cost an arm and a leg</strong>."</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Let the cat out of the bag</h4>
              <ul>
                <li><strong>Meaning:</strong> Reveal a secret</li>
                <li><strong>Example:</strong> "She <strong>let the cat out of the bag</strong> about the surprise party."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Common Idioms - Part 2",
        objective: "obj_004",
        text: `
          <h3>More Essential Idioms</h3>
          <p>Continue learning common idioms used in everyday speech.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Once in a blue moon</h4>
              <ul>
                <li><strong>Meaning:</strong> Very rarely</li>
                <li><strong>Example:</strong> "I go to the cinema <strong>once in a blue moon</strong>."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Spill the beans</h4>
              <ul>
                <li><strong>Meaning:</strong> Reveal a secret</li>
                <li><strong>Example:</strong> "He <strong>spilled the beans</strong> about the party."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Bite the bullet</h4>
              <ul>
                <li><strong>Meaning:</strong> Face a difficult situation</li>
                <li><strong>Example:</strong> "She had to <strong>bite the bullet</strong> and tell the truth."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Burn the midnight oil</h4>
              <ul>
                <li><strong>Meaning:</strong> Work late into the night</li>
                <li><strong>Example:</strong> "He <strong>burned the midnight oil</strong> to finish his project."</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Hit the books</h4>
              <ul>
                <li><strong>Meaning:</strong> Study hard</li>
                <li><strong>Example:</strong> "I need to <strong>hit the books</strong> for my exam."</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Cut corners</h4>
              <ul>
                <li><strong>Meaning:</strong> Do something cheaply or poorly</li>
                <li><strong>Example:</strong> "Don't <strong>cut corners</strong> when writing your essay."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Idioms with Animals",
        objective: "obj_008",
        text: `
          <h3>Animal Idioms</h3>
          <p>Many idioms use animals to create vivid imagery.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The elephant in the room</h4>
              <ul>
                <li><strong>Meaning:</strong> An obvious problem no one wants to discuss</li>
                <li><strong>Example:</strong> "Money was <strong>the elephant in the room</strong> at the meeting."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Black sheep</h4>
              <ul>
                <li><strong>Meaning:</strong> A person who is different from the rest</li>
                <li><strong>Example:</strong> "He is the <strong>black sheep</strong> of the family."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 When pigs fly</h4>
              <ul>
                <li><strong>Meaning:</strong> Something that will never happen</li>
                <li><strong>Example:</strong> "He'll apologize <strong>when pigs fly</strong>."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Hold your horses</h4>
              <ul>
                <li><strong>Meaning:</strong> Wait, be patient</li>
                <li><strong>Example:</strong> "<strong>Hold your horses</strong>, we're not ready yet."</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 A fish out of water</h4>
              <ul>
                <li><strong>Meaning:</strong> Someone in an unfamiliar situation</li>
                <li><strong>Example:</strong> "I felt like <strong>a fish out of water</strong> at the party."</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Let sleeping dogs lie</h4>
              <ul>
                <li><strong>Meaning:</strong> Don't bring up old problems</li>
                <li><strong>Example:</strong> "It's best to <strong>let sleeping dogs lie</strong>."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Idioms with Body Parts",
        objective: "obj_008",
        text: `
          <h3>Body Part Idioms</h3>
          <p>These idioms use parts of the body to express ideas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Break a leg</h4>
              <ul>
                <li><strong>Meaning:</strong> Good luck</li>
                <li><strong>Example:</strong> "<strong>Break a leg</strong> in your performance!"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Keep an eye on</h4>
              <ul>
                <li><strong>Meaning:</strong> Watch or monitor</li>
                <li><strong>Example:</strong> "Please <strong>keep an eye on</strong> the children."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Give someone the cold shoulder</h4>
              <ul>
                <li><strong>Meaning:</strong> Ignore someone</li>
                <li><strong>Example:</strong> "She <strong>gave me the cold shoulder</strong>."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Play it by ear</h4>
              <ul>
                <li><strong>Meaning:</strong> Be flexible; make decisions as you go</li>
                <li><strong>Example:</strong> "We'll <strong>play it by ear</strong> tomorrow."</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Pull someone's leg</h4>
              <ul>
                <li><strong>Meaning:</strong> Joke with someone</li>
                <li><strong>Example:</strong> "I'm just <strong>pulling your leg</strong>."</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Keep your chin up</h4>
              <ul>
                <li><strong>Meaning:</strong> Stay positive</li>
                <li><strong>Example:</strong> "<strong>Keep your chin up</strong>, things will get better."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Idioms with Food",
        objective: "obj_008",
        text: `
          <h3>Food Idioms</h3>
          <p>These idioms use food to express ideas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Piece of cake</h4>
              <ul>
                <li><strong>Meaning:</strong> Very easy</li>
                <li><strong>Example:</strong> "The test was a <strong>piece of cake</strong>."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Spill the beans</h4>
              <ul>
                <li><strong>Meaning:</strong> Reveal a secret</li>
                <li><strong>Example:</strong> "She <strong>spilled the beans</strong> about the surprise."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Take it with a grain of salt</h4>
              <ul>
                <li><strong>Meaning:</strong> Don't take it too seriously</li>
                <li><strong>Example:</strong> "<strong>Take it with a grain of salt</strong>."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 The cream of the crop</h4>
              <ul>
                <li><strong>Meaning:</strong> The best of the best</li>
                <li><strong>Example:</strong> "She is <strong>the cream of the crop</strong>."</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>📌 Butter someone up</h4>
              <ul>
                <li><strong>Meaning:</strong> Flatter someone</li>
                <li><strong>Example:</strong> "He tried to <strong>butter up</strong> his boss."</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Food for thought</h4>
              <ul>
                <li><strong>Meaning:</strong> Something to think about</li>
                <li><strong>Example:</strong> "That's interesting <strong>food for thought</strong>."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Idioms in Context",
        objective: "obj_007",
        text: `
          <h3>Idioms in Sentences</h3>
          <p>See how idioms are used naturally in context.</p>
          
          <div class="example-box">
            <strong>📌 Dialogue 1:</strong>
            <p><strong>Sarah:</strong> "How was your presentation?"</p>
            <p><strong>James:</strong> "It was a <strong>piece of cake</strong>! I was nervous at first, but I <strong>hit the nail on the head</strong> with my arguments."</p>
            <p><strong>Sarah:</strong> "I'm glad it went well. I've been <strong>burning the midnight oil</strong> preparing for mine."</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Dialogue 2:</strong>
            <p><strong>Tom:</strong> "I heard they're going to close the factory."</p>
            <p><strong>Maria:</strong> "I know. It's <strong>the elephant in the room</strong> no one wants to discuss. 500 jobs will be lost."</p>
            <p><strong>Tom:</strong> "Someone needs to <strong>bite the bullet</strong> and tell the workers the truth."</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Paragraph:</strong>
            <p>"John has been <strong>feeling under the weather</strong> all week. He tried to <strong>keep his chin up</strong>, but it was difficult. His mother told him to <strong>take it with a grain of salt</strong> and that he would get better soon. His friends decided to <strong>break the ice</strong> by sending him get-well messages. John realized that having good friends was a blessing."</p>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Literal vs Figurative Meaning",
        objective: "obj_006",
        text: `
          <h3>Understanding Figurative Language</h3>
          <p>It's important to understand the difference between literal and figurative meanings.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Literal vs Figurative:</h4>
              <ul>
                <li><strong>Literal:</strong> "It's raining cats and dogs."</li>
                <li>Actual meaning: Animals are falling from the sky (impossible)</li>
                <li><strong>Figurative:</strong> "It's raining cats and dogs."</li>
                <li>Idiomatic meaning: It's raining heavily</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Examples:</h4>
              <ul>
                <li><strong>Literal:</strong> "He broke the ice."</li>
                <li>He physically broke frozen water</li>
                <li><strong>Figurative:</strong> "He broke the ice."</li>
                <li>He started a conversation</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Practice:</h4>
              <ul>
                <li><strong>Sentence:</strong> "She let the cat out of the bag."</li>
                <li><strong>Literal:</strong> She let a cat escape from a bag</li>
                <li><strong>Figurative:</strong> She revealed a secret</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Why It Matters:</h4>
              <ul>
                <li>Understanding idioms helps with comprehension</li>
                <li>Using idioms correctly shows language proficiency</li>
                <li>Misunderstanding idioms can cause confusion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Using Idioms Effectively",
        objective: "obj_009",
        text: `
          <h3>Tips for Using Idioms</h3>
          <p>Follow these tips to use idioms naturally.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Do:</h4>
              <ul>
                <li>✓ Learn idioms in context</li>
                <li>✓ Use idioms naturally in conversation</li>
                <li>✓ Practice idioms regularly</li>
                <li>✓ Listen for idioms in movies and TV shows</li>
                <li>✓ Read books and articles with idioms</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Don't:</h4>
              <ul>
                <li>✗ Overuse idioms</li>
                <li>✗ Use idioms in formal writing</li>
                <li>✗ Translate idioms literally</li>
                <li>✗ Use idioms you don't fully understand</li>
                <li>✗ Mix up similar idioms</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example of Overusing Idioms:</strong>
            <p><em>"Let's break the ice and then hit the nail on the head. Don't beat around the bush, and don't let the cat out of the bag. We need to bite the bullet and spill the beans about the elephant in the room."</em></p>
            <p>This sounds forced and unnatural! Use idioms sparingly for natural effect.</p>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>💡 Idioms</h4>
          <ul>
            <li>✓ Phrases with figurative meanings</li>
            <li>✓ Different from literal meanings</li>
            <li>✓ Add color to language</li>
            <li>✓ Show language proficiency</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Remember</h4>
          <ul>
            <li>✓ Learn idioms in context</li>
            <li>✓ Use them naturally</li>
            <li>✓ Don't overuse them</li>
            <li>✓ Understand before using</li>
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
        misconception: "Idioms should be taken literally",
        correction: "Idioms have figurative, not literal meanings",
        explanation: "A 'piece of cake' does not mean a slice of dessert; it means something is easy."
      },
      {
        id: "mis_002",
        misconception: "You can use idioms in any situation",
        correction: "Idioms are often informal and may not be appropriate in formal contexts",
        explanation: "Avoid idioms in formal writing like academic essays or business letters."
      },
      {
        id: "mis_003",
        misconception: "All idioms are common in all English-speaking countries",
        correction: "Some idioms are regional or cultural",
        explanation: "An idiom common in the US may be unknown in the UK or Australia."
      },
      {
        id: "mis_004",
        misconception: "You can change the words in an idiom",
        correction: "Idioms are fixed expressions and cannot be changed",
        explanation: "You must say 'piece of cake,' not 'part of cake' or 'slice of cake.'"
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Everyday Conversation",
        description: "Idioms make conversations more colorful and natural.",
        example: "Using idioms shows you understand English at a deeper level."
      },
      {
        id: "app_002",
        title: "Watching Movies and TV",
        description: "Understanding idioms helps you follow movies and shows.",
        example: "Characters often use idioms in dialogue."
      },
      {
        id: "app_003",
        title: "Reading Literature",
        description: "Authors use idioms to create natural dialogue and description.",
        example: "Books, articles, and plays are full of idiomatic expressions."
      },
      {
        id: "app_004",
        title: "Business Communication",
        description: "Many business idioms are used in professional settings.",
        example: "Expressions like 'think outside the box' are common in business."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Idiom", definition: "A phrase with a figurative meaning different from its literal meaning." },
    { term: "Figurative Language", definition: "Language that uses words or expressions with a meaning different from the literal interpretation." },
    { term: "Literal Meaning", definition: "The straightforward, dictionary meaning of words." },
    { term: "Context", definition: "The situation or environment in which words are used." },
    { term: "Collocation", definition: "Words that are often used together naturally." },
    { term: "Expression", definition: "A word or phrase used to communicate an idea." },
    { term: "Proverb", definition: "A short saying that gives advice or expresses a truth." },
    { term: "Slang", definition: "Informal, non-standard vocabulary often used in casual speech." }
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
      question: "What is an idiom?",
      type: "multiple_choice",
      options: [
        "A literal expression",
        "A phrase with a figurative meaning",
        "A type of grammar rule",
        "A formal expression"
      ],
      answer: "A phrase with a figurative meaning",
      explanation: "An idiom is a phrase where the meaning is different from the literal meaning of the words."
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does 'piece of cake' mean?",
      type: "multiple_choice",
      options: ["A dessert", "Very easy", "Very difficult", "A type of food"],
      answer: "Very easy",
      explanation: "'Piece of cake' means something is very easy."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does 'break the ice' mean?",
      type: "multiple_choice",
      options: [
        "Break frozen water",
        "Start a conversation",
        "Make a mistake",
        "End an argument"
      ],
      answer: "Start a conversation",
      explanation: "'Break the ice' means to start a conversation or ease tension."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does 'under the weather' mean?",
      type: "multiple_choice",
      options: ["Outside in the rain", "Feeling sick", "Feeling happy", "Under a tree"],
      answer: "Feeling sick",
      explanation: "'Under the weather' means feeling unwell or sick."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does 'hit the nail on the head' mean?",
      type: "multiple_choice",
      options: [
        "Hurt yourself",
        "Be exactly right",
        "Make a mistake",
        "Build something"
      ],
      answer: "Be exactly right",
      explanation: "'Hit the nail on the head' means to be exactly correct or accurate."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "What does 'cost an arm and a leg' mean?",
      type: "multiple_choice",
      options: [
        "Very expensive",
        "Very cheap",
        "Very painful",
        "Very tiring"
      ],
      answer: "Very expensive",
      explanation: "'Cost an arm and a leg' means something is very expensive."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which sentence uses 'once in a blue moon' correctly?",
      type: "multiple_choice",
      options: [
        "I eat breakfast once in a blue moon.",
        "I go to the cinema once in a blue moon.",
        "I brush my teeth once in a blue moon.",
        "I sleep once in a blue moon."
      ],
      answer: "I go to the cinema once in a blue moon.",
      explanation: "'Once in a blue moon' means very rarely, so it makes sense for going to the cinema."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "In which context would you use 'break a leg'?",
      type: "multiple_choice",
      options: [
        "Before a funeral",
        "Before a performance",
        "After an accident",
        "During a meal"
      ],
      answer: "Before a performance",
      explanation: "'Break a leg' is used to wish someone good luck before a performance."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "In which context would you use 'hold your horses'?",
      type: "multiple_choice",
      options: [
        "At a horse race",
        "When someone is impatient",
        "When someone is sleeping",
        "When someone is eating"
      ],
      answer: "When someone is impatient",
      explanation: "'Hold your horses' means to be patient and wait."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the literal meaning of 'spill the beans'?",
      type: "multiple_choice",
      options: [
        "Drop the beans",
        "Reveal a secret",
        "Cook beans",
        "Plant beans"
      ],
      answer: "Drop the beans",
      explanation: "The literal meaning is to drop or spill beans. The figurative meaning is to reveal a secret."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does 'the elephant in the room' mean?",
      type: "multiple_choice",
      options: [
        "A large animal in a room",
        "An obvious problem no one discusses",
        "A heavy object",
        "An unusual decoration"
      ],
      answer: "An obvious problem no one discusses",
      explanation: "'The elephant in the room' is an obvious problem that people are ignoring or avoiding."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does 'when pigs fly' mean?",
      type: "multiple_choice",
      options: [
        "Something that will happen soon",
        "Something that will never happen",
        "A farm animal",
        "A type of weather"
      ],
      answer: "Something that will never happen",
      explanation: "'When pigs fly' is used to say something will never happen."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does 'burning the midnight oil' mean?",
      type: "multiple_choice",
      options: [
        "Cooking at midnight",
        "Working late into the night",
        "Setting a fire at midnight",
        "Watching TV late"
      ],
      answer: "Working late into the night",
      explanation: "'Burn the midnight oil' means to work or study late at night."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does 'cut corners' mean?",
      type: "multiple_choice",
      options: [
        "Make a geometric shape",
        "Do something cheaply or poorly",
        "Save money",
        "Cut paper"
      ],
      answer: "Do something cheaply or poorly",
      explanation: "'Cut corners' means to do something in a way that saves time or money but sacrifices quality."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why should you avoid using too many idioms?",
      type: "multiple_choice",
      options: [
        "They are too difficult",
        "They can sound unnatural",
        "They are all informal",
        "They are always literal"
      ],
      answer: "They can sound unnatural",
      explanation: "Using too many idioms can make your speech or writing sound forced and unnatural."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence uses idioms correctly?",
      type: "multiple_choice",
      options: [
        "Break a leg, let's study for the exam.",
        "I'm feeling under the weather, so I'll hit the books.",
        "The test was a piece of cake, so I aced it.",
        "I spilled the beans about the weather forecast."
      ],
      answer: "The test was a piece of cake, so I aced it.",
      explanation: "This sentence uses 'piece of cake' correctly to mean the test was easy."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_idioms",
    title: "Idioms Quiz",
    description: "Test your understanding of English idioms",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is an idiom?",
        type: "short_answer",
        answer_key: "A phrase with a figurative meaning different from its literal meaning",
        explanation: "Idioms have non-literal meanings that are understood through common usage."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What does 'piece of cake' mean?",
        type: "short_answer",
        answer_key: "Very easy",
        explanation: "'Piece of cake' is used to describe something that is very easy."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does 'under the weather' mean?",
        type: "short_answer",
        answer_key: "Feeling sick or unwell",
        explanation: "'Under the weather' means feeling ill or not well."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does 'cost an arm and a leg' mean?",
        type: "short_answer",
        answer_key: "Very expensive",
        explanation: "'Cost an arm and a leg' means something is very expensive."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does 'spill the beans' mean?",
        type: "short_answer",
        answer_key: "Reveal a secret",
        explanation: "'Spill the beans' means to reveal secret information."
      },
      {
        id: "ass_006",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does 'the elephant in the room' mean?",
        type: "short_answer",
        answer_key: "An obvious problem that everyone is ignoring",
        explanation: "'The elephant in the room' is a problem that everyone knows about but avoids discussing."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does 'when pigs fly' mean?",
        type: "short_answer",
        answer_key: "Something that will never happen",
        explanation: "'When pigs fly' is used to say that something is impossible or will never happen."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does 'burn the midnight oil' mean?",
        type: "short_answer",
        answer_key: "Work or study late into the night",
        explanation: "'Burn the midnight oil' means to work or study until late at night."
      },
      {
        id: "ass_009",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is the difference between literal and figurative meaning?",
        type: "short_answer",
        answer_key: "Literal meaning is the dictionary definition; figurative meaning is the implied or idiomatic meaning",
        explanation: "Literal meaning is the actual dictionary meaning, while figurative meaning is the non-literal or implied meaning."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Create a sentence using the idiom 'break the ice'.",
        type: "short_answer",
        answer_key: "He told a joke to break the ice at the party. (or similar)",
        explanation: "A correct sentence should use 'break the ice' to mean starting a conversation."
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
        "Understand what idioms are",
        "Learn common idioms",
        "Use idioms appropriately in context"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are idioms?" },
        { time: "5-15 min", activity: "Direct Instruction - Common Idioms" },
        { time: "15-20 min", activity: "Direct Instruction - Animal and Body Part Idioms" },
        { time: "20-25 min", activity: "Direct Instruction - Literal vs Figurative" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A phrase with a figurative meaning",
        // ... full answer key
      },
      assessment: {
        ass_001: "A phrase with a figurative meaning different from its literal meaning",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a poster of 20 common idioms with their meanings",
      "Write a dialogue using at least 10 idioms",
      "Find idioms in song lyrics or movie quotes",
      "Create an idiom matching game for the class"
    ],
    differentiation: {
      struggling: [
        "Start with the most common 5-10 idioms",
        "Use visual aids for each idiom",
        "Practice with sentence completion activities",
        "Provide idiom meaning cards"
      ],
      advanced: [
        "Research idioms from different English-speaking countries",
        "Write a story using idioms appropriately",
        "Analyze idioms in literature",
        "Create an idiom dictionary for classmates"
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
      title: "Common Idioms",
      description: "Chart showing common idioms and their meanings",
      url: "/diagrams/common-idioms.png",
      alt: "Common idioms chart"
    },
    {
      id: "vis_002",
      type: "infographic",
      title: "Animal Idioms",
      description: "Infographic of idioms with animals",
      url: "/diagrams/animal-idioms.png",
      alt: "Animal idioms infographic"
    },
    {
      id: "vis_003",
      type: "poster",
      title: "Idioms in Context",
      description: "Poster showing idioms in example sentences",
      url: "/diagrams/idioms-context.png",
      alt: "Idioms in context poster"
    }
  ]
};