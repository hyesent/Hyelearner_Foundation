// Location: src/data/lessons/core/english_language/essay_writing.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_essay_writing",
  subject: "English Language",
  topic: "Essay Writing",
  name: "Essay Writing",
  icon: "✍️",
  grade_level: "JSS1 - SS3",
  estimated_duration: "50 minutes",

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
    "Understanding of sentence structure",
    "Knowledge of grammar rules",
    "Basic vocabulary",
    "Ability to organize ideas"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_punctuation",
      name: "Punctuation",
      file: "core/english_language/punctuation.js"
    },
    {
      id: "eng_lesson_spelling",
      name: "Spelling",
      file: "core/english_language/spelling.js"
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
      description: "Define an essay and identify its basic structure",
      indicator: "Student can explain what an essay is and name its three main parts"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Write a clear topic sentence",
      indicator: "Student can write a topic sentence for a paragraph"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Brainstorm ideas for an essay",
      indicator: "Student can generate ideas using brainstorming techniques"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Write an effective introduction paragraph",
      indicator: "Student can write a hook, background, and thesis statement"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Write well-developed body paragraphs",
      indicator: "Student can write paragraphs with topic sentences and supporting details"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Write a strong conclusion paragraph",
      indicator: "Student can write a conclusion that summarizes and gives final thoughts"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Use transitions to connect ideas",
      indicator: "Student can use transition words effectively"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Write different types of essays (narrative, descriptive, expository, persuasive)",
      indicator: "Student can write essays of different purposes"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Develop a clear thesis statement",
      indicator: "Student can write a strong thesis statement"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Use evidence and examples to support arguments",
      indicator: "Student can support claims with relevant evidence"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Edit and revise essays effectively",
      indicator: "Student can improve essays through self-editing"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Write a complete essay on a given topic",
      indicator: "Student can produce a well-structured essay"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "How to Write a Great Essay",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the step-by-step process of writing effective essays."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is an Essay?</h2>
      <p>An <strong>essay</strong> is a piece of writing that presents a focused argument, idea, or information on a specific topic. Essays are organized, well-structured, and communicate clearly with the reader.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📌 Introduction</h3>
          <p>10% of essay</p>
          <p><strong>Hook → Background → Thesis</strong></p>
          <p><em>"Tell them what you're going to tell them."</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">📌 Body</h3>
          <p>80% of essay</p>
          <p><strong>Topic sentence → Evidence → Explanation</strong></p>
          <p><em>"Tell them."</em></p>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📌 Conclusion</h3>
          <p>10% of essay</p>
          <p><strong>Restate thesis → Summarize → Final thought</strong></p>
          <p><em>"Tell them what you told them."</em></p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-4 rounded mt-4">
        <h4>📊 The Writing Process</h4>
        <ul>
          <li>1️⃣ <strong>Prewriting:</strong> Brainstorm and plan</li>
          <li>2️⃣ <strong>Drafting:</strong> Write the first version</li>
          <li>3️⃣ <strong>Revising:</strong> Improve content and organization</li>
          <li>4️⃣ <strong>Editing:</strong> Fix grammar and mechanics</li>
          <li>5️⃣ <strong>Publishing:</strong> Submit the final version</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Prewriting - Brainstorming",
        objective: "obj_003",
        text: `
          <h3>Brainstorming Techniques</h3>
          <p><strong>Prewriting</strong> is the planning stage before you start writing. It helps you generate and organize ideas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Freewriting</h4>
              <p>Write continuously for 5-10 minutes without stopping. Don't worry about grammar or structure.</p>
              <p><em>"I need to write about pollution... Pollution is bad for the environment... It causes global warming..."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mind Mapping</h4>
              <p>Write the topic in the center and branch out with related ideas.</p>
              <div class="bg-white p-2 rounded text-center">
                <p>🌍 <strong>Environment</strong></p>
                <p>↓ ↓ ↓</p>
                <p>Pollution Climate Waste</p>
                <p>↓ ↓ ↓</p>
                <p>Air, Water, Land Global warming Recycling, Composting</p>
              </div>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Listing</h4>
              <p>Create a list of all ideas related to the topic.</p>
              <ul>
                <li>• Pollution</li>
                <li>• Climate change</li>
                <li>• Waste management</li>
                <li>• Recycling</li>
                <li>• Conservation</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Questioning</h4>
              <p>Use the 5 W's + H to explore the topic.</p>
              <ul>
                <li><strong>What?</strong> What is pollution?</li>
                <li><strong>Who?</strong> Who causes it?</li>
                <li><strong>Where?</strong> Where does it happen?</li>
                <li><strong>When?</strong> When did it start?</li>
                <li><strong>Why?</strong> Why is it a problem?</li>
                <li><strong>How?</strong> How can we fix it?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Writing a Thesis Statement",
        objective: "obj_009",
        text: `
          <h3>Thesis Statement</h3>
          <p>A <strong>thesis statement</strong> is the main idea of your essay. It appears in the introduction and guides the entire essay.</p>
          
          <div class="example-box">
            <strong>📌 Characteristics of a Good Thesis:</strong>
            <ul>
              <li>✓ Specific (not too broad)</li>
              <li>✓ Arguable (states a position)</li>
              <li>✓ Focused (covers what the essay will discuss)</li>
              <li>✓ Clear (easy to understand)</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Good Thesis Examples:</h4>
              <ul>
                <li>"Recycling is essential for protecting our environment."</li>
                <li>"Social media negatively affects teenagers' mental health."</li>
                <li>"Exercise offers numerous health benefits for all ages."</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Poor Thesis Examples:</h4>
              <ul>
                <li>"Pollution is bad." (Too vague)</li>
                <li>"I think recycling is good." (Weak phrasing)</li>
                <li>"This essay is about dogs." (Not arguable)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Formula:</strong>
            <p><strong>Topic + Your Position + Reasons</strong></p>
            <p><em>"[Topic] [position] because [reason 1], [reason 2], and [reason 3]."</em></p>
            <p><strong>Example:</strong> "Schools should implement later start times because it improves student health, increases academic performance, and reduces tardiness."</p>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Writing the Introduction",
        objective: "obj_004",
        text: `
          <h3>The Introduction</h3>
          <p>The <strong>introduction</strong> grabs the reader's attention and presents the thesis statement.</p>
          
          <div class="example-box">
            <strong>📌 Parts of an Introduction:</strong>
            <ul>
              <li><strong>Hook:</strong> An interesting opening to grab attention</li>
              <li><strong>Background:</strong> Context or background information</li>
              <li><strong>Thesis:</strong> The main argument or purpose</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Types of Hooks:</strong>
            <ul>
              <li><strong>Question:</strong> "Have you ever wondered what happens to your trash?"</li>
              <li><strong>Surprising fact:</strong> "Every year, 8 million tons of plastic enter the ocean."</li>
              <li><strong>Quote:</strong> "As Gandhi said, 'Be the change you wish to see in the world.'"</li>
              <li><strong>Story/Example:</strong> "A small town in Japan reduced its waste to zero."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Sample Introduction:</strong>
            <p><em>"Every day, millions of plastic bottles are thrown away. These bottles often end up in landfills or oceans, harming wildlife and polluting our planet. Recycling is essential for protecting our environment and ensuring a sustainable future."</em></p>
            <ul>
              <li><strong>Hook:</strong> "Every day, millions of plastic bottles are thrown away."</li>
              <li><strong>Background:</strong> "These bottles often end up in landfills or oceans..."</li>
              <li><strong>Thesis:</strong> "Recycling is essential for protecting our environment..."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Writing Body Paragraphs",
        objective: "obj_005",
        text: `
          <h3>Body Paragraphs</h3>
          <p>Each <strong>body paragraph</strong> develops one main point that supports the thesis.</p>
          
          <div class="example-box">
            <strong>📌 Structure of a Body Paragraph:</strong>
            <ul>
              <li><strong>Topic Sentence:</strong> States the main point of the paragraph</li>
              <li><strong>Evidence:</strong> Provides facts, examples, or reasons</li>
              <li><strong>Explanation:</strong> Explains how the evidence supports the point</li>
              <li><strong>Concluding Sentence:</strong> Wraps up the paragraph</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 PEEL Method:</strong>
            <ul>
              <li><strong>P</strong> - Point: State your point</li>
              <li><strong>E</strong> - Evidence: Provide evidence</li>
              <li><strong>E</strong> - Explanation: Explain the evidence</li>
              <li><strong>L</strong> - Link: Link back to the thesis</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Sample Body Paragraph:</strong>
            <p><em>"Recycling significantly reduces waste in landfills. According to the Environmental Protection Agency, recycling prevents over 60 million tons of waste from entering landfills each year. This reduction is crucial because landfills release harmful greenhouse gases like methane. By recycling, we can protect our environment and reduce the impact of climate change."</em></p>
            <ul>
              <li><strong>Point:</strong> "Recycling significantly reduces waste in landfills."</li>
              <li><strong>Evidence:</strong> "According to the Environmental Protection Agency..."</li>
              <li><strong>Explanation:</strong> "This reduction is crucial because..."</li>
              <li><strong>Link:</strong> "By recycling, we can protect our environment..."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Writing the Conclusion",
        objective: "obj_006",
        text: `
          <h3>The Conclusion</h3>
          <p>The <strong>conclusion</strong> wraps up the essay and leaves a lasting impression on the reader.</p>
          
          <div class="example-box">
            <strong>📌 Parts of a Conclusion:</strong>
            <ul>
              <li><strong>Restate Thesis:</strong> Restate the thesis in new words</li>
              <li><strong>Summarize Points:</strong> Briefly summarize main arguments</li>
              <li><strong>Final Thought:</strong> Leave the reader with something to think about</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Strategies for Final Thoughts:</strong>
            <ul>
              <li><strong>Call to action:</strong> "Everyone should start recycling today."</li>
              <li><strong>Look to the future:</strong> "A cleaner planet is possible if we all participate."</li>
              <li><strong>Wider implications:</strong> "Recycling is not just about waste; it's about our future."</li>
              <li><strong>Food for thought:</strong> "Imagine a world where nothing goes to waste."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Sample Conclusion:</strong>
            <p><em>"In conclusion, recycling is a powerful tool for protecting our environment. It reduces waste in landfills, saves natural resources, and decreases pollution. By making recycling a part of our daily lives, we can create a cleaner, healthier planet for future generations."</em></p>
            <ul>
              <li><strong>Restate thesis:</strong> "Recycling is a powerful tool..."</li>
              <li><strong>Summarize:</strong> "It reduces waste, saves resources, decreases pollution."</li>
              <li><strong>Final thought:</strong> "By making recycling a part of our daily lives..."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Transitions",
        objective: "obj_007",
        text: `
          <h3>Transitions</h3>
          <p><strong>Transitions</strong> connect ideas and help the reader follow your argument.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Adding Information:</h4>
              <ul>
                <li>in addition</li>
                <li>furthermore</li>
                <li>also</li>
                <li>moreover</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Showing Contrast:</h4>
              <ul>
                <li>however</li>
                <li>on the other hand</li>
                <li>although</li>
                <li>in contrast</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Showing Cause/Effect:</h4>
              <ul>
                <li>therefore</li>
                <li>as a result</li>
                <li>consequently</li>
                <li>thus</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Showing Sequence:</h4>
              <ul>
                <li>first, second, third</li>
                <li>next</li>
                <li>finally</li>
                <li>meanwhile</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples with Transitions:</strong>
            <ul>
              <li>"<strong>First</strong>, recycling reduces waste. <strong>Additionally</strong>, it saves energy. <strong>However</strong>, some people don't recycle. <strong>Therefore</strong>, we need to educate people about its benefits."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Types of Essays",
        objective: "obj_008",
        text: `
          <h3>Essay Types</h3>
          <p>Different purposes require different types of essays.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Narrative Essay</h4>
              <p><strong>Tells a story</strong></p>
              <ul>
                <li>Personal experience</li>
                <li>Use first person (I)</li>
                <li>Descriptive language</li>
                <li>Chronological order</li>
              </ul>
              <p><em>"The day I learned to ride a bike..."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Descriptive Essay</h4>
              <p><strong>Describes a person, place, or thing</strong></p>
              <ul>
                <li>Sensory details</li>
                <li>Vivid language</li>
                <li>Organized by senses</li>
                <li>Creates a picture</li>
              </ul>
              <p><em>"My childhood home was..."</em></p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Expository Essay</h4>
              <p><strong>Explains or informs</strong></p>
              <ul>
                <li>Facts and evidence</li>
                <li>Third person</li>
                <li>Objective tone</li>
                <li>Logical structure</li>
              </ul>
              <p><em>"The causes of climate change..."</em></p>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Persuasive Essay</h4>
              <p><strong>Argues a position</strong></p>
              <ul>
                <li>Strong argument</li>
                <li>Evidence and logic</li>
                <li>Addresses counterarguments</li>
                <li>Call to action</li>
              </ul>
              <p><em>"We should ban single-use plastics..."</em></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Revising and Editing",
        objective: "obj_011",
        text: `
          <h3>Revising and Editing</h3>
          <p><strong>Revising</strong> improves content and organization. <strong>Editing</strong> fixes grammar and mechanics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Revising Checklist:</h4>
              <ul>
                <li>✓ Is my thesis clear?</li>
                <li>✓ Do all paragraphs support the thesis?</li>
                <li>✓ Is my essay well-organized?</li>
                <li>✓ Are my ideas fully developed?</li>
                <li>✓ Do I have strong evidence?</li>
                <li>✓ Is my conclusion effective?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Editing Checklist:</h4>
              <ul>
                <li>✓ Check spelling</li>
                <li>✓ Check grammar</li>
                <li>✓ Check punctuation</li>
                <li>✓ Check sentence structure</li>
                <li>✓ Check word choice</li>
                <li>✓ Read aloud for flow</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Tips for Revising:</strong>
            <ul>
              <li><strong>Read aloud:</strong> Hearing your writing helps catch errors</li>
              <li><strong>Take a break:</strong> Come back with fresh eyes</li>
              <li><strong>Get feedback:</strong> Ask someone else to read it</li>
              <li><strong>Check the thesis:</strong> Make sure your essay stays on track</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>✍️ Essay Structure</h4>
          <ul>
            <li>✓ Introduction (Hook + Background + Thesis)</li>
            <li>✓ Body paragraphs (Topic + Evidence + Explanation)</li>
            <li>✓ Conclusion (Restate + Summarize + Final thought)</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Plan before writing</li>
            <li>✓ Use transitions</li>
            <li>✓ Support your arguments</li>
            <li>✓ Revise and edit</li>
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
        misconception: "An essay must be long to be good",
        correction: "Quality is more important than quantity",
        explanation: "A well-written short essay is better than a poorly written long one."
      },
      {
        id: "mis_002",
        misconception: "The thesis statement must come at the end of the essay",
        correction: "The thesis statement is in the introduction",
        explanation: "The thesis comes early in the essay, usually at the end of the introduction."
      },
      {
        id: "mis_003",
        misconception: "You shouldn't use 'I' in essays",
        correction: "It depends on the type of essay (narrative essays use 'I')",
        explanation: "Personal essays often use first person. Academic essays usually don't."
      },
      {
        id: "mis_004",
        misconception: "Once you write an essay, it's finished",
        correction: "Good essays are revised and edited multiple times",
        explanation: "The writing process includes drafting, revising, and editing."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "School Assignments",
        description: "Essay writing is required in many school subjects.",
        example: "Writing research papers, book reports, and exam essays."
      },
      {
        id: "app_002",
        title: "College Applications",
        description: "Admission essays are important for university applications.",
        example: "Writing personal statements and scholarship essays."
      },
      {
        id: "app_003",
        title: "Workplace Communication",
        description: "Essay writing skills help in professional writing.",
        example: "Writing reports, proposals, and professional emails."
      },
      {
        id: "app_004",
        title: "Public Writing",
        description: "Articles, blog posts, and opinion pieces use essay structure.",
        example: "Writing for blogs, newspapers, or social media."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Essay", definition: "A piece of writing with a focused argument or information." },
    { term: "Thesis Statement", definition: "The main idea or argument of the essay." },
    { term: "Introduction", definition: "The opening paragraph that presents the thesis." },
    { term: "Body Paragraph", definition: "A paragraph that develops a main point." },
    { term: "Conclusion", definition: "The final paragraph that wraps up the essay." },
    { term: "Topic Sentence", definition: "The first sentence of a body paragraph stating the main point." },
    { term: "Hook", definition: "An attention-grabbing opening sentence." },
    { term: "Transition", definition: "A word or phrase that connects ideas." },
    { term: "Evidence", definition: "Facts and examples that support the argument." },
    { term: "Revising", definition: "Improving the content and organization." },
    { term: "Editing", definition: "Correcting grammar and mechanics." },
    { term: "Brainstorming", definition: "Generating ideas before writing." }
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
      question: "What are the three main parts of an essay?",
      type: "multiple_choice",
      options: [
        "Paragraph, Sentence, Word",
        "Introduction, Body, Conclusion",
        "Subject, Verb, Object",
        "Title, Author, Date"
      ],
      answer: "Introduction, Body, Conclusion",
      explanation: "Every essay has an introduction, body paragraphs, and a conclusion."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a topic sentence?",
      type: "multiple_choice",
      options: [
        "The last sentence of a paragraph",
        "The main idea of a paragraph",
        "The title of the essay",
        "The conclusion of the essay"
      ],
      answer: "The main idea of a paragraph",
      explanation: "A topic sentence states the main point of a body paragraph."
    },
    {
      id: "prac_003",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the purpose of a hook?",
      type: "multiple_choice",
      options: [
        "To conclude the essay",
        "To grab the reader's attention",
        "To present the thesis",
        "To list evidence"
      ],
      answer: "To grab the reader's attention",
      explanation: "A hook is an interesting opening that grabs attention."
    },
    {
      id: "prac_004",
      objective: "obj_009",
      difficulty: "medium",
      question: "Which is a good thesis statement?",
      type: "multiple_choice",
      options: [
        "This essay is about pollution.",
        "Pollution is bad for the environment.",
        "Pollution causes climate change, harms wildlife, and damages human health.",
        "I think pollution is a problem."
      ],
      answer: "Pollution causes climate change, harms wildlife, and damages human health.",
      explanation: "This thesis is specific, arguable, and gives reasons."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "What comes after the thesis statement?",
      type: "multiple_choice",
      options: [
        "The conclusion",
        "Body paragraphs",
        "The hook",
        "The title"
      ],
      answer: "Body paragraphs",
      explanation: "After the introduction (with thesis), the body paragraphs follow."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does PEEL stand for?",
      type: "multiple_choice",
      options: [
        "Point, Evidence, Explanation, Link",
        "Paragraph, Example, End, Link",
        "Point, Example, End, Link",
        "Proof, Evidence, Explanation, Link"
      ],
      answer: "Point, Evidence, Explanation, Link",
      explanation: "PEEL is a method for writing body paragraphs."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What should a body paragraph contain?",
      type: "multiple_choice",
      options: [
        "Only evidence",
        "A topic sentence and supporting details",
        "Only the thesis",
        "Only examples"
      ],
      answer: "A topic sentence and supporting details",
      explanation: "Each body paragraph needs a topic sentence and supporting evidence/examples."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the purpose of the conclusion?",
      type: "multiple_choice",
      options: [
        "To introduce new ideas",
        "To wrap up the essay",
        "To present the hook",
        "To list evidence"
      ],
      answer: "To wrap up the essay",
      explanation: "The conclusion summarizes and closes the essay."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What should you do in the conclusion?",
      type: "multiple_choice",
      options: [
        "Add new information",
        "Restate the thesis in new words",
        "Introduce a new argument",
        "Ignore the thesis"
      ],
      answer: "Restate the thesis in new words",
      explanation: "Restate your thesis in the conclusion, but don't copy it word for word."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which transition shows contrast?",
      type: "multiple_choice",
      options: ["therefore", "however", "furthermore", "also"],
      answer: "however",
      explanation: "'However' is used to show contrast between ideas."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which type of essay tells a story?",
      type: "multiple_choice",
      options: ["Narrative", "Descriptive", "Expository", "Persuasive"],
      answer: "Narrative",
      explanation: "Narrative essays tell a story, often from personal experience."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which type of essay uses sensory details?",
      type: "multiple_choice",
      options: ["Narrative", "Descriptive", "Expository", "Persuasive"],
      answer: "Descriptive",
      explanation: "Descriptive essays use sensory details to create a picture."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which type of essay presents facts and information?",
      type: "multiple_choice",
      options: ["Narrative", "Descriptive", "Expository", "Persuasive"],
      answer: "Expository",
      explanation: "Expository essays inform readers with facts and explanations."
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which type of essay argues a position?",
      type: "multiple_choice",
      options: ["Narrative", "Descriptive", "Expository", "Persuasive"],
      answer: "Persuasive",
      explanation: "Persuasive essays argue a position and try to convince the reader."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the difference between revising and editing?",
      type: "multiple_choice",
      options: [
        "They are the same thing",
        "Revising improves content; editing fixes grammar",
        "Revising fixes grammar; editing improves content",
        "Revising is for spelling; editing is for ideas"
      ],
      answer: "Revising improves content; editing fixes grammar",
      explanation: "Revising focuses on content and structure; editing focuses on mechanics."
    },
    {
      id: "prac_016",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a good strategy for revising?",
      type: "multiple_choice",
      options: [
        "Submit immediately",
        "Read your essay aloud",
        "Ignore feedback",
        "Never make changes"
      ],
      answer: "Read your essay aloud",
      explanation: "Reading aloud helps you hear problems with flow and grammar."
    },
    {
      id: "prac_017",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the first step in the writing process?",
      type: "multiple_choice",
      options: [
        "Drafting",
        "Editing",
        "Prewriting/Brainstorming",
        "Publishing"
      ],
      answer: "Prewriting/Brainstorming",
      explanation: "The writing process begins with prewriting (planning)."
    },
    {
      id: "prac_018",
      objective: "obj_012",
      difficulty: "hard",
      question: "What should a well-written essay have?",
      type: "multiple_choice",
      options: [
        "Only opinions",
        "Strong organization and clear ideas",
        "Very long sentences",
        "No transitions"
      ],
      answer: "Strong organization and clear ideas",
      explanation: "Good essays are well-organized and clearly communicate ideas."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_essay_writing",
    title: "Essay Writing Quiz",
    description: "Test your understanding of essay writing skills",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the three main parts of an essay?",
        type: "short_answer",
        answer_key: "Introduction, Body, Conclusion",
        explanation: "Every essay has an introduction, body paragraphs, and a conclusion."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a topic sentence?",
        type: "short_answer",
        answer_key: "The main idea of a paragraph",
        explanation: "A topic sentence states the main point of a body paragraph."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the purpose of a hook?",
        type: "short_answer",
        answer_key: "To grab the reader's attention",
        explanation: "A hook is the opening sentence that captures interest."
      },
      {
        id: "ass_004",
        objective: "obj_009",
        difficulty: "medium",
        question: "What is a thesis statement?",
        type: "short_answer",
        answer_key: "The main argument or purpose of the essay",
        explanation: "The thesis statement presents the main idea of the essay."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What does PEEL stand for?",
        type: "short_answer",
        answer_key: "Point, Evidence, Explanation, Link",
        explanation: "PEEL is a method for writing body paragraphs."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What should be included in a conclusion?",
        type: "short_answer",
        answer_key: "Restate thesis, summarize points, and give a final thought",
        explanation: "A conclusion wraps up the essay with a restatement, summary, and final thought."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "Give an example of a transition word that shows contrast.",
        type: "short_answer",
        answer_key: "however (or but, although, in contrast)",
        explanation: "These words show a contrast between ideas."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What type of essay tells a story from personal experience?",
        type: "short_answer",
        answer_key: "Narrative essay",
        explanation: "Narrative essays tell a story, often using first person."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the difference between revising and editing?",
        type: "short_answer",
        answer_key: "Revising improves content; editing fixes grammar and mechanics",
        explanation: "Revising is about big-picture changes; editing is about details."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the first step in the writing process?",
        type: "short_answer",
        answer_key: "Prewriting (brainstorming and planning)",
        explanation: "The writing process begins with prewriting and planning."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand essay structure",
        "Write effective introductions and conclusions",
        "Develop body paragraphs",
        "Use transitions and revise writing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is an essay?" },
        { time: "5-10 min", activity: "Direct Instruction - Structure" },
        { time: "10-15 min", activity: "Direct Instruction - Thesis and Introduction" },
        { time: "15-20 min", activity: "Direct Instruction - Body Paragraphs" },
        { time: "20-25 min", activity: "Direct Instruction - Conclusions" },
        { time: "25-35 min", activity: "Guided Practice - Essay Writing" },
        { time: "35-45 min", activity: "Independent Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Introduction, Body, Conclusion",
        // ... full answer key
      },
      assessment: {
        ass_001: "Introduction, Body, Conclusion",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Write an essay on a topic of your choice",
      "Peer review someone else's essay",
      "Write a persuasive essay about a school issue",
      "Create an essay outline on any topic"
    ],
    differentiation: {
      struggling: [
        "Provide essay templates",
        "Use graphic organizers",
        "Start with paragraph writing",
        "Provide sentence starters"
      ],
      advanced: [
        "Write research essays",
        "Analyze sample essays",
        "Write for different audiences",
        "Create a writing portfolio"
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
      title: "Essay Structure",
      description: "Diagram showing the structure of an essay",
      url: "/diagrams/essay-structure.png",
      alt: "Essay structure diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "PEEL Method",
      description: "Chart showing the PEEL method for paragraphs",
      url: "/diagrams/peel-method.png",
      alt: "PEEL method chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "The Writing Process",
      description: "Infographic showing the writing process steps",
      url: "/diagrams/writing-process.png",
      alt: "Writing process infographic"
    }
  ]
};