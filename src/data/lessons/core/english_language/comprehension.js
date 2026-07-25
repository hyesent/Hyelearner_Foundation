// Location: src/data/lessons/core/english_language/comprehension.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_comprehension",
  subject: "English Language",
  topic: "Comprehension",
  name: "Reading Comprehension",
  icon: "📖",
  grade_level: "JSS1 - SS3",
  estimated_duration: "45 minutes",

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
    "Basic reading skills",
    "Vocabulary knowledge",
    "Understanding of sentence structure",
    "Ability to identify main ideas"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_summary",
      name: "Summary",
      file: "core/english_language/summary.js"
    },
    {
      id: "eng_lesson_lexis_structure",
      name: "Lexis and Structure",
      file: "core/english_language/lexis_and_structure.js"
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
      description: "Define comprehension and explain its importance",
      indicator: "Student can explain why comprehension is essential for learning"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main idea of a passage",
      indicator: "Student can find the main idea in short texts"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify supporting details in a passage",
      indicator: "Student can distinguish between main ideas and supporting details"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Make inferences from a passage",
      indicator: "Student can read between the lines and make logical conclusions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Answer literal and inferential questions",
      indicator: "Student can answer both direct and implied questions"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify the author's purpose and tone",
      indicator: "Student can determine why the author wrote the text"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Recognize text structure and organization",
      indicator: "Student can identify different text structures (cause/effect, compare/contrast, etc.)"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Analyze and evaluate a passage critically",
      indicator: "Student can form opinions and evaluate arguments"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Summarize and paraphrase passages",
      indicator: "Student can restate passages in their own words"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Apply comprehension strategies to complex texts",
      indicator: "Student can use multiple strategies to understand difficult texts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Reading Comprehension",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn strategies to understand and analyze what you read."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Reading Comprehension?</h2>
      <p><strong>Reading comprehension</strong> is the ability to understand, analyze, and interpret what you read. It's not just about reading words—it's about understanding the meaning behind them.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📖 Level 1</h3>
          <h4>Literal</h4>
          <p>Understanding what is directly stated</p>
          <p class="text-sm"><em>"The sky is blue."</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🧠 Level 2</h3>
          <h4>Inferential</h4>
          <p>Reading between the lines</p>
          <p class="text-sm"><em>"It must be daytime."</em></p>
        </div>
        <div class="bg-purple-50 p-4 rounded text-center">
          <h3 class="text-purple-600">⭐ Level 3</h3>
          <h4>Critical</h4>
          <p>Evaluating and analyzing</p>
          <p class="text-sm"><em>"Why is the sky blue?"</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Comprehension Matters</h4>
        <ul>
          <li>✓ Success in all school subjects</li>
          <li>✓ Understanding instructions and information</li>
          <li>✓ Enjoyment of reading</li>
          <li>✓ Critical thinking skills</li>
          <li>✓ Lifelong learning</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Finding the Main Idea",
        objective: "obj_002",
        text: `
          <h3>Main Idea</h3>
          <p>The <strong>main idea</strong> is the most important point the author wants to communicate. It's the "big picture" of the passage.</p>
          
          <div class="example-box">
            <strong>📌 How to Find the Main Idea:</strong>
            <ul>
              <li>Read the title (often gives a clue)</li>
              <li>Look at the first sentence (often states the main idea)</li>
              <li>Look at the last sentence (often summarizes)</li>
              <li>Ask: "What is this passage mostly about?"</li>
              <li>Ask: "What point is the author making?"</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Passage:</strong>
            <p><em>"Dogs are wonderful pets. They are loyal companions who protect their families. Dogs can be trained to do many things. They provide love and comfort to their owners."</em></p>
            <p><strong>Main Idea:</strong> Dogs are wonderful pets.</p>
            <p><strong>Supporting Details:</strong> They are loyal, protective, trainable, and loving.</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"Recycling is important for the environment. When we recycle, we reduce waste in landfills. We also save natural resources. Recycling helps protect our planet for future generations."</em></p>
            <p><strong>Main Idea:</strong> Recycling is important for the environment.</p>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Identifying Supporting Details",
        objective: "obj_003",
        text: `
          <h3>Supporting Details</h3>
          <p><strong>Supporting details</strong> are facts, examples, and explanations that back up the main idea.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Supporting Details:</h4>
              <ul>
                <li><strong>Facts:</strong> "Water boils at 100°C."</li>
                <li><strong>Examples:</strong> "For instance, ..."</li>
                <li><strong>Reasons:</strong> "Because ..."</li>
                <li><strong>Statistics:</strong> "70% of ..."</li>
                <li><strong>Descriptions:</strong> "It was red and shiny."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practice:</h4>
              <p><em>"Exercise is good for your health. It strengthens your heart. It helps control weight. It reduces stress."</em></p>
              <p><strong>Main Idea:</strong> Exercise is good for health.</p>
              <p><strong>Details:</strong> Strengthens heart, controls weight, reduces stress.</p>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> Details should always relate to and support the main idea. If a detail doesn't support the main idea, it might be irrelevant.
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Making Inferences",
        objective: "obj_004",
        text: `
          <h3>Inferences</h3>
          <p>An <strong>inference</strong> is a conclusion you draw from clues in the text. It's "reading between the lines."</p>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p><strong>Text Clues + Your Knowledge = Inference</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <p><em>"John's eyes were red and puffy. He spoke in a quiet, shaky voice."</em></p>
            <p><strong>Inference:</strong> John has been crying.</p>
            <p><em>Clues:</em> Red/puffy eyes, quiet/shaky voice</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <p><em>"The table was set with fine china. Candles flickered on the table. Soft music played in the background."</em></p>
            <p><strong>Inference:</strong> A special/romantic dinner is about to happen.</p>
            <p><em>Clues:</em> Fine china, candles, soft music</p>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"Sarah grabbed her umbrella and raincoat before leaving the house."</em></p>
            <p><strong>Inference:</strong> It is raining or about to rain.</p>
            <p><em>Clues:</em> Umbrella and raincoat are rain gear.</p>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Author's Purpose and Tone",
        objective: "obj_006",
        text: `
          <h3>Author's Purpose</h3>
          <p>The <strong>author's purpose</strong> is the reason the author wrote the text.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>📌 P.E.E.</h4>
              <p><strong>P</strong>ersuade</p>
              <p><strong>E</strong>ntertain</p>
              <p><strong>E</strong>xplain/Inform</p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>Persuade:</strong> Advertisement</li>
                <li><strong>Entertain:</strong> Story/Novel</li>
                <li><strong>Explain:</strong> Textbook/Article</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Tone Words:</h4>
              <ul>
                <li>Formal/Informal</li>
                <li>Serious/Humorous</li>
                <li>Objective/Subjective</li>
                <li>Angry/Calm</li>
                <li>Optimistic/Pessimistic</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><em>"Our new smartphone has the best camera on the market."</em> → Purpose: <strong>Persuade</strong> (advertisement)</li>
              <li><em>"The sun set over the horizon, painting the sky in shades of orange and pink."</em> → Purpose: <strong>Entertain</strong> (creative writing)</li>
              <li><em>"Photosynthesis is the process by which plants make their own food."</em> → Purpose: <strong>Explain</strong> (educational text)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Text Structure",
        objective: "obj_007",
        text: `
          <h3>Text Structure</h3>
          <p><strong>Text structure</strong> is how the author organizes the information.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Structures:</h4>
              <ul>
                <li><strong>Cause and Effect:</strong> Shows why something happened</li>
                <li><strong>Compare and Contrast:</strong> Shows similarities/differences</li>
                <li><strong>Problem and Solution:</strong> Presents a problem and how to solve it</li>
                <li><strong>Sequence/Chronological:</strong> Step-by-step or time order</li>
                <li><strong>Description:</strong> Gives information about a topic</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Signal Words:</h4>
              <ul>
                <li><strong>Cause/Effect:</strong> because, therefore, as a result</li>
                <li><strong>Compare/Contrast:</strong> however, similarly, unlike</li>
                <li><strong>Problem/Solution:</strong> issue, solve, solution</li>
                <li><strong>Sequence:</strong> first, next, finally, then</li>
                <li><strong>Description:</strong> for example, such as, specifically</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><em>"First, boil the water. Next, add the rice..."</em> → <strong>Sequence</strong></li>
              <li><em>"Cats are independent, while dogs are loyal."</em> → <strong>Compare/Contrast</strong></li>
              <li><em>"Pollution causes global warming. We can reduce it by..."</em> → <strong>Problem/Solution</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Literal vs. Inferential Questions",
        objective: "obj_005",
        text: `
          <h3>Types of Questions</h3>
          <p>Understanding the difference between literal and inferential questions is key to comprehension.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded">
              <h4 class="text-blue-600">📘 Literal Questions</h4>
              <p>Answers are directly stated in the text.</p>
              <ul>
                <li><strong>Who?</strong> - Who did it?</li>
                <li><strong>What?</strong> - What happened?</li>
                <li><strong>When?</strong> - When did it happen?</li>
                <li><strong>Where?</strong> - Where did it happen?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded">
              <h4 class="text-green-600">🧠 Inferential Questions</h4>
              <p>Answers require thinking and interpreting.</p>
              <ul>
                <li><strong>Why?</strong> - Why did it happen?</li>
                <li><strong>How?</strong> - How did it happen?</li>
                <li><strong>What if?</strong> - What would happen if...?</li>
                <li><strong>What does this mean?</strong> - Interpret</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Sample Passage:</strong>
            <p><em>"The tired traveler walked slowly through the desert. He had been walking for three days without water. His lips were cracked and his throat was dry."</em></p>
            <p><strong>Literal:</strong> "How long had the traveler been walking?" → 3 days</p>
            <p><strong>Inferential:</strong> "What will happen to the traveler soon?" → He might collapse or need water</p>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Critical Analysis",
        objective: "obj_008",
        text: `
          <h3>Critical Analysis</h3>
          <p><strong>Critical analysis</strong> goes beyond understanding—it involves evaluating and forming opinions about what you read.</p>
          
          <div class="example-box">
            <strong>📌 Questions to Ask:</strong>
            <ul>
              <li>Is the information accurate?</li>
              <li>Is the author biased?</li>
              <li>What evidence supports the claims?</li>
              <li>Are there other perspectives?</li>
              <li>What is the author's background?</li>
              <li>Is the argument logical?</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <p><em>"Fast food is clearly the best choice for busy people. It's cheap, quick, and always available."</em></p>
            <ul>
              <li><strong>Analysis:</strong> This is biased. It doesn't mention health concerns or alternatives.</li>
              <li><strong>Question:</strong> What about nutrition? What about home-cooked meals?</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> Always ask: "What is not being said?" and "Who benefits from this message?"
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Reading Strategies",
        objective: "obj_010",
        text: `
          <h3>Effective Reading Strategies</h3>
          <p>Use these strategies to improve comprehension.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Before Reading</h4>
              <ul>
                <li>Preview the text</li>
                <li>Read the title</li>
                <li>Look at headings</li>
                <li>Look at images/graphics</li>
                <li>Activate prior knowledge</li>
                <li>Set a purpose for reading</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 During Reading</h4>
              <ul>
                <li>Highlight/underline key points</li>
                <li>Take notes</li>
                <li>Ask questions</li>
                <li>Make predictions</li>
                <li>Visualize what you read</li>
                <li>Look up unknown words</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 After Reading</h4>
              <ul>
                <li>Summarize the main ideas</li>
                <li>Answer questions</li>
                <li>Discuss with others</li>
                <li>Connect to other texts</li>
                <li>Apply what you learned</li>
                <li>Review and reflect</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 SQ3R Method</h4>
              <ul>
                <li><strong>S</strong> - Survey: Preview the text</li>
                <li><strong>Q</strong> - Question: Form questions</li>
                <li><strong>R</strong> - Read: Read actively</li>
                <li><strong>R</strong> - Recite: Summarize in your own words</li>
                <li><strong>R</strong> - Review: Go over what you learned</li>
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
          <h4>📖 Comprehension Skills</h4>
          <ul>
            <li>✓ Find the main idea</li>
            <li>✓ Identify supporting details</li>
            <li>✓ Make inferences</li>
            <li>✓ Understand author's purpose</li>
            <li>✓ Recognize text structure</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Read actively, not passively</li>
            <li>✓ Ask questions as you read</li>
            <li>✓ Use context clues</li>
            <li>✓ Practice regularly</li>
            <li>✓ Discuss what you read</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // SAMPLE PASSAGE FOR PRACTICE
    // ============================================================
    samplePassage: {
      title: "The Importance of Sleep",
      text: `
        <p>Sleep is essential for good health. Many people do not get enough sleep, and this can lead to serious health problems.</p>
        <p>When you sleep, your body repairs itself. Your brain processes information from the day. Sleep helps improve memory and concentration. People who get enough sleep are more alert and productive.</p>
        <p>Lack of sleep can cause many problems. It can make you feel tired and irritable. It can affect your ability to think clearly. Long-term sleep deprivation can lead to heart disease, diabetes, and obesity.</p>
        <p>Experts recommend that teenagers get 8-10 hours of sleep each night. Adults need 7-9 hours. To get better sleep, try to go to bed at the same time every night. Avoid screens before bedtime. Create a calm and dark sleep environment.</p>
        <p>Making sleep a priority is one of the best things you can do for your health. A good night's sleep can improve your mood, your energy, and your overall quality of life.</p>
      `,
      questions: [
        {
          type: "literal",
          question: "How many hours of sleep do experts recommend for teenagers?",
          answer: "8-10 hours"
        },
        {
          type: "literal",
          question: "What are two problems caused by lack of sleep?",
          answer: "Tiredness/irritability and difficulty thinking clearly (or any two from the text)"
        },
        {
          type: "inferential",
          question: "Why is sleep important for brain function?",
          answer: "The brain processes information during sleep and sleep improves memory and concentration."
        },
        {
          type: "inferential",
          question: "What can people do to get better sleep?",
          answer: "Go to bed at the same time, avoid screens before bed, and create a calm, dark environment."
        },
        {
          type: "critical",
          question: "Do you agree that sleep should be a priority? Explain why or why not.",
          answer: "Answers will vary but should show critical thinking."
        }
      ]
    },

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Reading faster means better comprehension",
        correction: "Understanding is more important than speed",
        explanation: "Reading quickly without understanding is not effective. Focus on comprehension first."
      },
      {
        id: "mis_002",
        misconception: "You only need to read the text once",
        correction: "Complex texts may require multiple readings",
        explanation: "Rereading helps clarify meaning and identify details you missed."
      },
      {
        id: "mis_003",
        misconception: "All questions have answers directly in the text",
        correction: "Some questions require inference and critical thinking",
        explanation: "Higher-level questions require you to think beyond what is directly stated."
      },
      {
        id: "mis_004",
        misconception: "Comprehension is only about understanding words",
        correction: "Comprehension involves understanding ideas, making connections, and evaluating",
        explanation: "True comprehension is deep and involves multiple levels of understanding."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Academic Success",
        description: "Comprehension is essential for understanding textbooks and lessons.",
        example: "Students with good comprehension perform better in all subjects."
      },
      {
        id: "app_002",
        title: "Professional Development",
        description: "Workplace requires understanding documents, emails, and instructions.",
        example: "Reading comprehension helps in interpreting contracts and policies."
      },
      {
        id: "app_003",
        title: "Everyday Life",
        description: "We use comprehension daily—from reading news to following recipes.",
        example: "Understanding instructions, forms, and personal documents."
      },
      {
        id: "app_004",
        title: "Critical Thinking",
        description: "Good comprehension enables you to evaluate information and make decisions.",
        example: "Analyzing news sources and making informed decisions."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Comprehension", definition: "The ability to understand and interpret what is read." },
    { term: "Main Idea", definition: "The most important point the author wants to communicate." },
    { term: "Supporting Details", definition: "Facts and examples that support the main idea." },
    { term: "Inference", definition: "A conclusion drawn from clues in the text." },
    { term: "Author's Purpose", definition: "The reason the author wrote the text (persuade, entertain, explain)." },
    { term: "Text Structure", definition: "How information is organized in a text." },
    { term: "Literal Question", definition: "A question with an answer directly stated in the text." },
    { term: "Inferential Question", definition: "A question that requires thinking and interpretation." },
    { term: "Critical Analysis", definition: "Evaluating and forming opinions about a text." },
    { term: "SQ3R", definition: "A reading strategy: Survey, Question, Read, Recite, Review." }
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
      question: "What is reading comprehension?",
      type: "multiple_choice",
      options: [
        "Reading words quickly",
        "Understanding what you read",
        "Memorizing a passage",
        "Reading aloud"
      ],
      answer: "Understanding what you read",
      explanation: "Comprehension is the ability to understand, analyze, and interpret what you read."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the main idea?",
      type: "multiple_choice",
      options: [
        "The title of the text",
        "The most important point of the passage",
        "The first sentence only",
        "Every detail in the text"
      ],
      answer: "The most important point of the passage",
      explanation: "The main idea is the key message the author wants to communicate."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are supporting details?",
      type: "multiple_choice",
      options: [
        "Unnecessary information",
        "Facts and examples that support the main idea",
        "The conclusion of the text",
        "The title of the passage"
      ],
      answer: "Facts and examples that support the main idea",
      explanation: "Supporting details provide evidence and explanation for the main idea."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "medium",
      question: "Read the passage. What is the main idea? 'Recycling helps the environment. It reduces waste in landfills. It saves natural resources. It protects wildlife habitats.'",
      type: "multiple_choice",
      options: [
        "Recycling helps the environment",
        "Recycling reduces waste",
        "Recycling saves resources",
        "Recycling protects wildlife"
      ],
      answer: "Recycling helps the environment",
      explanation: "This is the most general point that all other sentences support."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "medium",
      question: "Which is a supporting detail? Passage: 'Exercise is beneficial. It strengthens muscles. It improves heart health. It reduces stress.'",
      type: "multiple_choice",
      options: [
        "Exercise is beneficial",
        "It strengthens muscles",
        "Exercise is important",
        "Everyone should exercise"
      ],
      answer: "It strengthens muscles",
      explanation: "This is a specific detail that supports the main idea."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Read the text: 'Maria's hands were shaking. Her voice was trembling. She could barely speak.' What can you infer?",
      type: "multiple_choice",
      options: [
        "Maria is happy",
        "Maria is nervous or scared",
        "Maria is excited",
        "Maria is tired"
      ],
      answer: "Maria is nervous or scared",
      explanation: "Shaking hands, trembling voice, and difficulty speaking suggest nervousness or fear."
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Read the text: 'The shelves were empty. The store was dark. The sign said 'Closed Forever.' What can you infer?",
      type: "multiple_choice",
      options: [
        "The store is renovating",
        "The store has closed permanently",
        "The store is out of stock",
        "The store is having a sale"
      ],
      answer: "The store has closed permanently",
      explanation: "Empty shelves, darkness, and 'Closed Forever' suggest the store is permanently closed."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the author's purpose in an advertisement?",
      type: "multiple_choice",
      options: ["To entertain", "To persuade", "To inform", "To describe"],
      answer: "To persuade",
      explanation: "Advertisements aim to persuade people to buy a product or service."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the author's purpose in a textbook?",
      type: "multiple_choice",
      options: ["To entertain", "To persuade", "To explain/inform", "To describe"],
      answer: "To explain/inform",
      explanation: "Textbooks aim to explain concepts and inform students."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "What text structure is: 'First, gather your materials. Next, follow the instructions. Finally, clean up.'?",
      type: "multiple_choice",
      options: [
        "Cause and effect",
        "Compare and contrast",
        "Sequence/Chronological",
        "Problem and solution"
      ],
      answer: "Sequence/Chronological",
      explanation: "The words 'first,' 'next,' and 'finally' indicate a step-by-step sequence."
    },
    {
      id: "prac_011",
      objective: "obj_005",
      difficulty: "hard",
      question: "Read: 'The traveler had been walking for hours in the desert. His water was almost gone. The sun was beating down.' What is an inferential question?",
      type: "multiple_choice",
      options: [
        "How long has he been walking?",
        "What time of day is it?",
        "What will happen to the traveler soon?",
        "Where is the traveler?"
      ],
      answer: "What will happen to the traveler soon?",
      explanation: "This requires inference. He might collapse or die from dehydration."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Read: 'Social media has many benefits. It connects people and shares information. However, it can also be addictive and harmful.' What is the author's tone?",
      type: "multiple_choice",
      options: ["Positive", "Negative", "Neutral/Balanced", "Angry"],
      answer: "Neutral/Balanced",
      explanation: "The author presents both benefits and drawbacks, showing a balanced view."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which is the best summary of: 'Exercise is important for health. It keeps your heart strong. It helps control weight. It reduces stress. Everyone should exercise regularly.'?",
      type: "multiple_choice",
      options: [
        "Exercise is good for the heart.",
        "Exercise helps control weight.",
        "Exercise is important for health and has many benefits.",
        "Everyone should exercise."
      ],
      answer: "Exercise is important for health and has many benefits.",
      explanation: "This summary captures the main idea and includes key details."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which reading strategy helps you understand text before reading?",
      type: "multiple_choice",
      options: [
        "Highlighting important points",
        "Previewing the text",
        "Taking notes",
        "Discussing with others"
      ],
      answer: "Previewing the text",
      explanation: "Previewing (reading the title, headings, and looking at images) happens before reading."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "What does SQ3R stand for?",
      type: "multiple_choice",
      options: [
        "Survey, Question, Read, Recite, Review",
        "Read, Question, Survey, Review, Recite",
        "Survey, Read, Question, Recite, Review",
        "Question, Read, Recite, Review, Survey"
      ],
      answer: "Survey, Question, Read, Recite, Review",
      explanation: "SQ3R is a proven reading comprehension strategy."
    },
    {
      id: "prac_016",
      objective: "obj_008",
      difficulty: "hard",
      question: "Read: 'Everyone should vote. It is a civic duty. People who don't vote have no right to complain about the government.' What is the author's purpose?",
      type: "multiple_choice",
      options: [
        "To inform about voting",
        "To persuade people to vote",
        "To entertain with a story",
        "To describe a voting process"
      ],
      answer: "To persuade people to vote",
      explanation: "The author is strongly encouraging voting and criticizing non-voters."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_comprehension",
    title: "Reading Comprehension Quiz",
    description: "Test your understanding of reading comprehension strategies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is reading comprehension?",
        type: "short_answer",
        answer_key: "The ability to understand, analyze, and interpret what you read",
        explanation: "Comprehension is understanding what you read, not just reading the words."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the main idea of a passage?",
        type: "short_answer",
        answer_key: "The most important point the author wants to communicate",
        explanation: "The main idea is the central message of the text."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "medium",
        question: "Read this passage and state the main idea: 'Water is essential for life. The human body is 60% water. We need water to survive. We should drink eight glasses of water daily.'",
        type: "short_answer",
        answer_key: "Water is essential for life (or Water is important for human survival)",
        explanation: "All sentences support the idea that water is essential for life."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "From the same passage, list two supporting details.",
        type: "short_answer",
        answer_key: "The human body is 60% water. We should drink eight glasses of water daily. (Any two details from the passage)",
        explanation: "Supporting details provide evidence for the main idea."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an inference?",
        type: "short_answer",
        answer_key: "A conclusion drawn from clues in the text",
        explanation: "Inferences are not directly stated but can be figured out from the text."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the author's purpose in a news article?",
        type: "short_answer",
        answer_key: "To inform/explain (or to report facts)",
        explanation: "News articles aim to inform readers about events."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "What text structure uses words like 'however,' 'similarly,' and 'unlike'?",
        type: "short_answer",
        answer_key: "Compare and contrast",
        explanation: "These signal words indicate similarities and differences."
      },
      {
        id: "ass_008",
        objective: "obj_005",
        difficulty: "hard",
        question: "Read: 'The student yawned during class. His eyes were heavy. He struggled to stay awake.' What can you infer?",
        type: "short_answer",
        answer_key: "The student is tired (or has not slept enough)",
        explanation: "Yawning, heavy eyes, and struggling to stay awake suggest tiredness."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Write a one-sentence summary of this passage: 'Recycling is important. It helps the environment. It reduces waste. It saves energy. Everyone should recycle.'",
        type: "short_answer",
        answer_key: "Recycling is important for the environment because it reduces waste and saves energy.",
        explanation: "A good summary captures the main idea and key points concisely."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What does the 'Q' stand for in SQ3R?",
        type: "short_answer",
        answer_key: "Question",
        explanation: "SQ3R stands for Survey, Question, Read, Recite, Review."
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
        "Understand the different levels of comprehension",
        "Find main ideas and supporting details",
        "Make inferences and draw conclusions",
        "Analyze author's purpose and text structure"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is comprehension?" },
        { time: "5-10 min", activity: "Direct Instruction - Main Idea and Details" },
        { time: "10-15 min", activity: "Direct Instruction - Inferences" },
        { time: "15-20 min", activity: "Direct Instruction - Author's Purpose and Text Structure" },
        { time: "20-30 min", activity: "Guided Practice - Reading Passage" },
        { time: "30-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Understanding what you read",
        // ... full answer key
      },
      assessment: {
        ass_001: "The ability to understand, analyze, and interpret what you read",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Read a news article and summarize the main ideas",
      "Create comprehension questions for a passage",
      "Practice making inferences from photos or videos",
      "Analyze the author's purpose in different types of texts"
    ],
    differentiation: {
      struggling: [
        "Start with short, simple passages",
        "Use visual aids and graphic organizers",
        "Provide sentence starters for responses",
        "Practice with partner reading"
      ],
      advanced: [
        "Analyze complex academic texts",
        "Write critical analyses of articles",
        "Compare perspectives across multiple texts",
        "Create advanced comprehension questions"
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
      title: "Levels of Comprehension",
      description: "Diagram showing literal, inferential, and critical levels",
      url: "/diagrams/comprehension-levels.png",
      alt: "Levels of comprehension"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Reading Strategies",
      description: "Chart of effective reading strategies",
      url: "/diagrams/reading-strategies.png",
      alt: "Reading strategies chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "SQ3R Method",
      description: "Infographic explaining the SQ3R method",
      url: "/diagrams/sq3r-method.png",
      alt: "SQ3R method infographic"
    }
  ]
};