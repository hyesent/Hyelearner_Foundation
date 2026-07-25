// Location: src/data/lessons/core/english_language/summary.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_summary",
  subject: "English Language",
  topic: "Summary",
  name: "Summary Writing",
  icon: "📝",
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
    "Basic reading comprehension skills",
    "Understanding of main ideas and supporting details",
    "Vocabulary knowledge",
    "Ability to write complete sentences"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_lexis_structure",
      name: "Lexis and Structure",
      file: "core/english_language/lexis_and_structure.js"
    },
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
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
      description: "Define summary and explain its purpose",
      indicator: "Student can explain what a summary is and why we write summaries"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the key elements of a good summary",
      indicator: "Student can list the characteristics of an effective summary"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between main ideas and supporting details",
      indicator: "Student can identify what to include and what to leave out"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Summarize short passages in 3-5 sentences",
      indicator: "Student can write concise summaries of short texts"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Paraphrase sentences and paragraphs",
      indicator: "Student can restate information in their own words"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply the GIST strategy for summarizing",
      indicator: "Student can use the GIST method (20-word summary)"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use transition words in summaries",
      indicator: "Student can connect ideas smoothly in a summary"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Summarize longer passages and articles",
      indicator: "Student can write comprehensive summaries of complex texts"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Compare and contrast multiple summaries",
      indicator: "Student can evaluate and improve different summaries"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Apply summary writing in academic contexts",
      indicator: "Student can use summaries for research and studying"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "How to Write Effective Summaries",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the art of summarization with clear strategies and examples."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Summary?</h2>
      <p>A <strong>summary</strong> is a shortened version of a text that contains the most important information in your own words. A good summary is <strong>concise, clear, and complete</strong>.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 What a Summary Is</h3>
          <ul>
            <li>✓ Shorter than the original</li>
            <li>✓ In your own words</li>
            <li>✓ Contains only main ideas</li>
            <li>✓ Objective (no opinions)</li>
            <li>✓ Well-organized</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h3 class="text-red-600">❌ What a Summary Is NOT</h3>
          <ul>
            <li>✗ Copying the original text</li>
            <li>✗ Including all details</li>
            <li>✗ Your opinion or evaluation</li>
            <li>✗ A paraphrase of one paragraph</li>
            <li>✗ A response to the text</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Summarize?</h4>
        <ul>
          <li>✓ Improve reading comprehension</li>
          <li>✓ Study more effectively</li>
          <li>✓ Take better notes</li>
          <li>✓ Share information concisely</li>
          <li>✓ Prepare for exams</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Characteristics of a Good Summary",
        objective: "obj_002",
        text: `
          <h3>What Makes a Good Summary?</h3>
          <p>A good summary has several key characteristics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The 5 C's of Summarizing:</h4>
              <ul>
                <li><strong>Complete:</strong> Includes all main ideas</li>
                <li><strong>Concise:</strong> Short and to the point</li>
                <li><strong>Clear:</strong> Easy to understand</li>
                <li><strong>Coherent:</strong> Well-organized and logical</li>
                <li><strong>Correct:</strong> Accurate and factual</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 What to Include:</h4>
              <ul>
                <li>✓ The main idea of the text</li>
                <li>✓ The most important supporting points</li>
                <li>✓ Key facts and details</li>
                <li>✓ The conclusion if relevant</li>
              </ul>
              <h4 class="mt-2">📌 What to Exclude:</h4>
              <ul>
                <li>✗ Minor details and examples</li>
                <li>✗ Your opinion or evaluation</li>
                <li>✗ Repeated information</li>
                <li>✗ Direct quotes (paraphrase instead)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Steps to Write a Summary",
        objective: "obj_004",
        text: `
          <h3>The Summary Writing Process</h3>
          <p>Follow these steps to write an effective summary.</p>
          
          <div class="example-box">
            <strong>📌 Step 1: Read and Understand</strong>
            <ul>
              <li>Read the passage carefully</li>
              <li>Identify the main idea</li>
              <li>Highlight key points</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Step 2: Take Notes</strong>
            <ul>
              <li>Write down the main ideas</li>
              <li>Note important supporting details</li>
              <li>Mark the author's purpose</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Step 3: Write Your Summary</strong>
            <ul>
              <li>Start with the main idea</li>
              <li>Add key supporting points</li>
              <li>Use your own words</li>
              <li>Keep it brief and focused</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Step 4: Revise and Edit</strong>
            <ul>
              <li>Check for accuracy</li>
              <li>Ensure it's concise</li>
              <li>Remove unnecessary details</li>
              <li>Check grammar and spelling</li>
              <li>Count words if needed</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Paraphrasing",
        objective: "obj_005",
        text: `
          <h3>Paraphrasing</h3>
          <p><strong>Paraphrasing</strong> is restating information in your own words while keeping the original meaning. It's a key skill for summarizing.</p>
          
          <div class="example-box">
            <strong>📌 How to Paraphrase:</strong>
            <ul>
              <li>Read the original text</li>
              <li>Understand the meaning</li>
              <li>Write it in your own words</li>
              <li>Change the sentence structure</li>
              <li>Use synonyms where appropriate</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Original:</h4>
              <p><em>"The use of mobile phones in schools is a controversial topic. Some teachers believe they are distracting, while others think they can be useful learning tools."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Paraphrase:</h4>
              <p><em>"Mobile phone use in schools is debated. While some educators view them as a distraction, others see them as beneficial for learning."</em></p>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Original:</h4>
              <p><em>"Exercise is crucial for maintaining good health. It helps prevent diseases, improves mental well-being, and increases longevity."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Paraphrase:</h4>
              <p><em>"Regular physical activity is essential for health. It reduces disease risk, boosts mental health, and promotes a longer life."</em></p>
            </div>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Paraphrasing is NOT just changing a few words. You need to change the structure and wording while keeping the meaning.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The GIST Strategy",
        objective: "obj_006",
        text: `
          <h3>GIST Strategy</h3>
          <p><strong>GIST</strong> stands for <strong>Generating Interactions between Schemata and Text</strong>. It's a method to summarize any text in exactly 20 words.</p>
          
          <div class="example-box">
            <strong>📌 How to Use GIST:</strong>
            <ul>
              <li><strong>Step 1:</strong> Read the text</li>
              <li><strong>Step 2:</strong> Identify the 5 W's + H (Who, What, When, Where, Why, How)</li>
              <li><strong>Step 3:</strong> Combine answers into a 20-word summary</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <p><em>"On July 20, 1969, American astronaut Neil Armstrong became the first person to walk on the moon. He was part of the Apollo 11 mission. His famous words were: 'That's one small step for man, one giant leap for mankind.'"</em></p>
            
            <p><strong>GIST Summary (20 words):</strong></p>
            <p><em>"In 1969, American astronaut Neil Armstrong from Apollo 11 became the first person to walk on the moon."</em></p>
            
            <p><em>Count: 20 words exactly!</em></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Practice:</strong>
            <p><em>"Recycling is the process of converting waste materials into new objects. It helps reduce pollution and conserve natural resources. Common items that can be recycled include paper, glass, plastic, and metal."</em></p>
            
            <p><strong>Your GIST Summary:</strong></p>
            <p><em>"Recycling converts waste into new materials, reducing pollution and conserving resources like paper, glass, and plastic."</em></p>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Summary Length Guidelines",
        objective: "obj_004",
        text: `
          <h3>How Long Should a Summary Be?</h3>
          <p>The length of a summary depends on the original text and the purpose.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>📄 Short Text</h4>
              <p>1 paragraph</p>
              <p class="text-sm">2-3 sentences</p>
              <p class="text-sm">5-10% of original</p>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>📄 Medium Text</h4>
              <p>1 page article</p>
              <p class="text-sm">1 paragraph</p>
              <p class="text-sm">10-15% of original</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>📄 Long Text</h4>
              <p>Chapter or book</p>
              <p class="text-sm">1-2 paragraphs</p>
              <p class="text-sm">5-10% of original</p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 General Guidelines:</strong>
            <ul>
              <li><strong>For a paragraph:</strong> Summarize in 1-2 sentences</li>
              <li><strong>For a page:</strong> Summarize in 1 paragraph (3-5 sentences)</li>
              <li><strong>For a chapter:</strong> Summarize in 1-2 paragraphs (5-8 sentences)</li>
              <li><strong>For a book:</strong> Summarize in one page</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Using Transition Words in Summaries",
        objective: "obj_007",
        text: `
          <h3>Transition Words</h3>
          <p><strong>Transition words</strong> help connect ideas smoothly in your summary.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Adding Information:</h4>
              <ul>
                <li>first, second, third</li>
                <li>in addition</li>
                <li>furthermore</li>
                <li>also</li>
                <li>moreover</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Showing Sequence:</h4>
              <ul>
                <li>first, then, next</li>
                <li>finally</li>
                <li>subsequently</li>
                <li>after that</li>
                <li>meanwhile</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Showing Contrast:</h4>
              <ul>
                <li>however</li>
                <li>nevertheless</li>
                <li>on the other hand</li>
                <li>in contrast</li>
                <li>although</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Showing Cause/Effect:</h4>
              <ul>
                <li>therefore</li>
                <li>as a result</li>
                <li>consequently</li>
                <li>thus</li>
                <li>because</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Summary with Transitions:</strong>
            <p><em>"First, the article explains the importance of recycling. Additionally, it describes the benefits of reducing waste. Finally, it offers practical tips for recycling at home."</em></p>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Common Mistakes to Avoid",
        objective: "obj_009",
        text: `
          <h3>Summary Writing Errors</h3>
          <p>Avoid these common mistakes when writing summaries.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4 class="text-red-600">❌ Too Long</h4>
              <ul>
                <li>Including too many details</li>
                <li>Writing more than needed</li>
                <li>Using original text's length</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4 class="text-red-600">❌ Too Short</h4>
              <ul>
                <li>Leaving out important ideas</li>
                <li>Being too vague</li>
                <li>Not including key points</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4 class="text-red-600">❌ Copying Directly</h4>
              <ul>
                <li>Using the author's words</li>
                <li>Not paraphrasing</li>
                <li>Copying phrases and sentences</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4 class="text-red-600">❌ Adding Opinion</h4>
              <ul>
                <li>Including personal views</li>
                <li>Evaluating the content</li>
                <li>Adding emotional language</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples of Errors:</strong>
            <ul>
              <li><strong>Too Long:</strong> "The article discusses how recycling is good for the environment because it reduces waste in landfills, saves natural resources like trees, and helps protect wildlife habitats..." (Too detailed)</li>
              <li><strong>Too Short:</strong> "Recycling is good." (Missing key points)</li>
              <li><strong>Copying:</strong> Uses the exact words from the original</li>
              <li><strong>With Opinion:</strong> "Recycling is the best solution to environmental problems." (Adds evaluation)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Academic Summaries",
        objective: "obj_010",
        text: `
          <h3>Summaries in Academic Contexts</h3>
          <p>Summaries are important in academic work for research, studying, and writing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 For Research:</h4>
              <ul>
                <li><strong>Abstracts:</strong> Brief summaries of research papers</li>
                <li><strong>Literature Reviews:</strong> Summaries of multiple studies</li>
                <li><strong>Annotated Bibliographies:</strong> Summary + evaluation of sources</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 For Studying:</h4>
              <ul>
                <li><strong>Study Notes:</strong> Summarizing textbook chapters</li>
                <li><strong>Lecture Summaries:</strong> Condensing lecture notes</li>
                <li><strong>Exam Preparation:</strong> Summarizing key concepts</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Academic Summary:</strong>
            <p><em>"Smith (2020) argues that social media has a significant impact on teenage mental health. The study found that excessive use of social media platforms correlates with increased anxiety and depression. However, moderate use can provide social benefits. The author recommends limiting screen time to improve well-being."</em></p>
          </div>
          
          <div class="warning-box">
            <strong>💡 Academic Summary Tips:</strong>
            <ul>
              <li>✓ Cite the author and source</li>
              <li>✓ Use formal language</li>
              <li>✓ Be objective and accurate</li>
              <li>✓ Include main arguments and findings</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📝 Summary Writing</h4>
          <ul>
            <li>✓ A summary is brief and in your own words</li>
            <li>✓ Include only main ideas</li>
            <li>✓ Use the 5 W's + H</li>
            <li>✓ Paraphrase, don't copy</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Read the passage twice</li>
            <li>✓ Start with the main idea</li>
            <li>✓ Use transition words</li>
            <li>✓ Count your words</li>
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
        misconception: "A summary is the same as a paraphrase",
        correction: "Paraphrasing is rephrasing a shorter text; summarizing is condensing a longer text",
        explanation: "A paraphrase restates a sentence or short passage. A summary condenses a longer text."
      },
      {
        id: "mis_002",
        misconception: "You should include your opinion in a summary",
        correction: "Summaries are objective and don't contain the writer's opinion",
        explanation: "Summaries should only include information from the original text."
      },
      {
        id: "mis_003",
        misconception: "A summary must be the same length as the original",
        correction: "Summaries are shorter than the original text",
        explanation: "Summaries condense information. They should be 5-15% of the original."
      },
      {
        id: "mis_004",
        misconception: "You can copy sentences from the original",
        correction: "Summaries should be in your own words",
        explanation: "Using the author's words is plagiarism. Paraphrase everything."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Academic Success",
        description: "Summaries help you understand and remember course material.",
        example: "Summarize textbook chapters and lecture notes for exams."
      },
      {
        id: "app_002",
        title: "Professional Writing",
        description: "Summaries are used in business reports and presentations.",
        example: "Executive summaries condense reports for busy executives."
      },
      {
        id: "app_003",
        title: "Research",
        description: "Summarizing research helps you understand and evaluate sources.",
        example: "Literature reviews summarize multiple research studies."
      },
      {
        id: "app_004",
        title: "Everyday Communication",
        description: "Summarizing helps you share information effectively.",
        example: "Summarize news stories or books for friends and family."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Summary", definition: "A shortened version of a text in your own words." },
    { term: "Paraphrase", definition: "Restating information in your own words while keeping the meaning." },
    { term: "Main Idea", definition: "The most important point of a text." },
    { term: "Supporting Details", definition: "Information that explains or proves the main idea." },
    { term: "GIST Strategy", definition: "A method to summarize a text in 20 words." },
    { term: "Transition Words", definition: "Words that connect ideas and show relationships." },
    { term: "Objective", definition: "Based on facts, not opinions or feelings." },
    { term: "Concise", definition: "Brief but complete and clear." },
    { term: "Plagiarism", definition: "Using someone else's words or ideas without giving credit." },
    { term: "Abstract", definition: "A brief summary of a research paper." }
  ],

  // ============================================================
  // SAMPLE PASSAGE FOR SUMMARY PRACTICE
  // ============================================================
  summaryPractice: {
    title: "The Benefits of Reading",
    text: `
      <p>Reading is one of the most beneficial activities for personal development. It improves vocabulary and language skills. Reading also enhances critical thinking and analytical abilities. When you read, you exercise your brain, which helps prevent cognitive decline. Reading exposes you to new ideas and different perspectives, making you more empathetic and open-minded. Additionally, reading is a great way to reduce stress and escape from daily pressures. Regular reading can improve focus and concentration. It also boosts creativity and imagination. Despite the benefits, many people spend more time watching television than reading.</p>
      <p>Experts recommend that everyone should read for at least 30 minutes a day to reap the full benefits.</p>
    `,
    sampleSummaries: {
      good: "Reading improves vocabulary, critical thinking, and brain health. It reduces stress, enhances creativity, and broadens perspectives. Experts suggest 30 minutes of daily reading for optimal benefits.",
      poor: "Reading is good. It has many benefits. People should read more. It helps with many things. Reading is important for everyone.",
      excellent: "Reading enhances language skills, critical thinking, and cognitive function while reducing stress. It fosters empathy, creativity, and focus. Regular reading, recommended at 30 minutes daily, offers significant personal development benefits."
    }
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a summary?",
      type: "multiple_choice",
      options: [
        "Copying the original text",
        "A shortened version of a text in your own words",
        "Adding your opinion to a text",
        "Rewriting every sentence"
      ],
      answer: "A shortened version of a text in your own words",
      explanation: "A summary condenses a text using your own words and only the main ideas."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is NOT a characteristic of a good summary?",
      type: "multiple_choice",
      options: ["Concise", "Complete", "In your own words", "Includes your opinion"],
      answer: "Includes your opinion",
      explanation: "Summaries should be objective and not include personal opinions."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What should you include in a summary?",
      type: "multiple_choice",
      options: [
        "Every detail from the text",
        "Only the main ideas",
        "Your personal feelings",
        "Direct quotations"
      ],
      answer: "Only the main ideas",
      explanation: "Summaries should contain only the most important information from the text."
    },
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is a paraphrase of: 'The weather was extremely hot.'?",
      type: "multiple_choice",
      options: [
        "The weather was extremely hot.",
        "It was a very hot day.",
        "The weather was hot, extremely hot.",
        "The weather was not cold."
      ],
      answer: "It was a very hot day.",
      explanation: "This restates the meaning using different words and structure."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Read the passage and choose the best summary: 'Exercise is important for health. It helps control weight. It strengthens the heart. It reduces stress. Experts recommend 30 minutes daily.'",
      type: "multiple_choice",
      options: [
        "Exercise is healthy.",
        "Exercise helps control weight, strengthens the heart, and reduces stress. Experts recommend 30 minutes daily.",
        "Everyone should exercise every day.",
        "Exercise is good for the heart and helps reduce stress."
      ],
      answer: "Exercise helps control weight, strengthens the heart, and reduces stress. Experts recommend 30 minutes daily.",
      explanation: "This includes the main idea and key supporting details concisely."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Paraphrase: 'The students were excited about the field trip.'",
      type: "multiple_choice",
      options: [
        "The students were excited about the field trip.",
        "The field trip made the students happy and eager.",
        "Students were excited, very excited.",
        "The students were not bored by the field trip."
      ],
      answer: "The field trip made the students happy and eager.",
      explanation: "This restates the meaning with different words and structure."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does GIST stand for?",
      type: "multiple_choice",
      options: [
        "Good Ideas Summary Tool",
        "Generating Interactions between Schemata and Text",
        "General Summary Technique",
        "Great Information Summary Tool"
      ],
      answer: "Generating Interactions between Schemata and Text",
      explanation: "GIST is a method to summarize any text in exactly 20 words."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "How many words should a GIST summary be?",
      type: "multiple_choice",
      options: ["10 words", "15 words", "20 words", "25 words"],
      answer: "20 words",
      explanation: "GIST summaries are exactly 20 words long."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which transition word would show sequence in a summary?",
      type: "multiple_choice",
      options: ["however", "therefore", "first", "in addition"],
      answer: "first",
      explanation: "'First' shows sequence or order of events."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which transition word would show contrast in a summary?",
      type: "multiple_choice",
      options: ["also", "however", "furthermore", "first"],
      answer: "however",
      explanation: "'However' shows contrast or opposite ideas."
    },
    {
      id: "prac_011",
      objective: "obj_004",
      difficulty: "hard",
      question: "Choose the best summary: 'The school implemented a new math curriculum. Teachers received special training. Students showed improvement in test scores. The curriculum will continue next year.'",
      type: "multiple_choice",
      options: [
        "The school implemented a new math curriculum.",
        "Teachers were trained and students improved. The new math curriculum will continue.",
        "The new math curriculum was implemented with teacher training, leading to student improvement. It will continue next year.",
        "Students got better at math."
      ],
      answer: "The new math curriculum was implemented with teacher training, leading to student improvement. It will continue next year.",
      explanation: "This includes all main points in a concise, flowing sentence."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What should you do FIRST when writing a summary?",
      type: "multiple_choice",
      options: [
        "Start writing immediately",
        "Read the passage carefully",
        "Check for grammar",
        "Count the words"
      ],
      answer: "Read the passage carefully",
      explanation: "Understanding the text is essential before you can summarize it."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which summary is most effective? Original: 'Climate change is caused by human activity. Burning fossil fuels releases greenhouse gases. These gases trap heat in the atmosphere. This causes global temperatures to rise. The effects include melting ice caps and rising sea levels.'",
      type: "multiple_choice",
      options: [
        "Climate change is caused by humans. Fossil fuels release gases. The gases trap heat. Temperatures rise. Ice caps melt.",
        "Human activity causes climate change. Fossil fuel combustion releases greenhouse gases that trap heat, raising temperatures and causing effects like melting ice caps and sea level rise.",
        "Humans cause climate change. It's bad.",
        "Fossil fuels cause climate change by releasing gases that trap heat and melt ice caps."
      ],
      answer: "Human activity causes climate change. Fossil fuel combustion releases greenhouse gases that trap heat, raising temperatures and causing effects like melting ice caps and sea level rise.",
      explanation: "This is the most complete and well-structured summary."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is wrong with this summary? 'I think that recycling is really important for our environment and everyone should do it.'",
      type: "multiple_choice",
      options: [
        "It's too long",
        "It includes personal opinion",
        "It copies from the original",
        "It's too short"
      ],
      answer: "It includes personal opinion",
      explanation: "Summaries should be objective and not include personal views."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is an academic summary called in a research paper?",
      type: "multiple_choice",
      options: ["Introduction", "Abstract", "Conclusion", "Reference"],
      answer: "Abstract",
      explanation: "An abstract is a brief summary of a research paper."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which type of summary is used in literature reviews?",
      type: "multiple_choice",
      options: [
        "Executive summary",
        "Research summary",
        "Review summary",
        "Narrative summary"
      ],
      answer: "Research summary",
      explanation: "Literature reviews summarize research studies to identify patterns and gaps."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_summary",
    title: "Summary Writing Quiz",
    description: "Test your understanding of summary writing strategies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a summary?",
        type: "short_answer",
        answer_key: "A shortened version of a text in your own words",
        explanation: "A summary condenses the main ideas of a text using your own words."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name two characteristics of a good summary.",
        type: "short_answer",
        answer_key: "Concise and clear (or any two: concise, clear, complete, coherent, correct)",
        explanation: "Good summaries are concise, clear, and include all main ideas."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "medium",
        question: "What should be included in a summary?",
        type: "short_answer",
        answer_key: "The main ideas and most important supporting details",
        explanation: "Include only the most important information from the text."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "What should NOT be included in a summary?",
        type: "short_answer",
        answer_key: "Personal opinions, minor details, or direct quotes",
        explanation: "Summaries should be objective and in your own words."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Paraphrase this: 'The students studied hard for the exam.'",
        type: "short_answer",
        answer_key: "The students prepared thoroughly for the test.",
        explanation: "Accept any reasonable paraphrase that keeps the meaning."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What does GIST stand for?",
        type: "short_answer",
        answer_key: "Generating Interactions between Schemata and Text",
        explanation: "GIST is a method for creating 20-word summaries."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "How many words should a GIST summary contain?",
        type: "short_answer",
        answer_key: "20 words",
        explanation: "GIST summaries are exactly 20 words long."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Give an example of a transition word that shows cause and effect.",
        type: "short_answer",
        answer_key: "therefore, as a result, consequently, thus (any one)",
        explanation: "Cause/effect transitions show the relationship between actions and results."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is wrong with this summary? 'This article was really interesting and I learned a lot about climate change.'",
        type: "short_answer",
        answer_key: "It includes personal opinion and lacks content",
        explanation: "Summaries should be objective and include content from the text."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Write a one-sentence summary of this passage: 'The company introduced flexible working hours. Employees were happier. Productivity increased. Absenteeism decreased. The company plans to continue the policy.'",
        type: "short_answer",
        answer_key: "Flexible working hours increased employee happiness and productivity while reducing absenteeism, so the company will continue the policy.",
        explanation: "This captures all key points concisely in one sentence."
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
        "Understand what a summary is",
        "Identify main ideas and key details",
        "Write effective summaries",
        "Paraphrase information"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a summary?" },
        { time: "5-10 min", activity: "Direct Instruction - Characteristics" },
        { time: "10-15 min", activity: "Direct Instruction - Paraphrasing" },
        { time: "15-20 min", activity: "Direct Instruction - GIST Strategy" },
        { time: "20-30 min", activity: "Guided Practice" },
        { time: "30-40 min", activity: "Independent Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A shortened version of a text in your own words",
        // ... full answer key
      },
      assessment: {
        ass_001: "A shortened version of a text in your own words",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Summarize a newspaper article in 3-5 sentences",
      "Write a GIST summary of a textbook chapter",
      "Summarize a short story or fable",
      "Compare and evaluate different summaries of the same text"
    ],
    differentiation: {
      struggling: [
        "Start with very short passages",
        "Use graphic organizers",
        "Provide sentence frames",
        "Practice with partner summaries"
      ],
      advanced: [
        "Summarize complex academic articles",
        "Write multiple summaries of different lengths",
        "Evaluate and improve peer summaries",
        "Create summary writing guidelines for others"
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
      title: "Summary Writing Process",
      description: "Diagram showing the steps to write a summary",
      url: "/diagrams/summary-process.png",
      alt: "Summary writing process"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Summary vs Paraphrase",
      description: "Chart comparing summaries and paraphrases",
      url: "/diagrams/summary-vs-paraphrase.png",
      alt: "Summary vs paraphrase comparison"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "GIST Strategy Guide",
      description: "Infographic explaining the GIST strategy",
      url: "/diagrams/gist-strategy.png",
      alt: "GIST strategy guide"
    }
  ]
};