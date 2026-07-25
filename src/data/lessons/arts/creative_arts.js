// Location: src/data/lessons/arts/creative_arts.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "arts_lesson_creative_arts",
  subject: "Creative Arts",
  topic: "Creative Arts",
  name: "Creative Arts",
  icon: "🎨",
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
    "Understanding of fine arts",
    "Knowledge of music",
    "Understanding of drama",
    "Creativity and imagination"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Arts lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define creative arts and explain their importance",
      indicator: "Student can explain what creative arts are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the different forms of creative arts",
      indicator: "Student can list visual arts, performing arts, and literary arts"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of creativity",
      indicator: "Student can describe what creativity means"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the relationship between creativity and the arts",
      indicator: "Student can describe how creativity is expressed in the arts"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the creative process",
      indicator: "Student can explain the stages of the creative process"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the importance of creative expression",
      indicator: "Student can discuss why creative expression is essential"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of arts in education",
      indicator: "Student can explain how the arts contribute to education"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the connection between arts and culture",
      indicator: "Student can describe how arts reflect and shape culture"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe contemporary creative arts in Nigeria",
      indicator: "Student can explain modern Nigerian creative arts"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the impact of technology on creative arts",
      indicator: "Student can discuss how technology has transformed the arts"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the economic importance of creative arts",
      indicator: "Student can discuss the creative economy"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of arts in social change",
      indicator: "Student can discuss how arts can drive social change"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the concept of interdisciplinary arts",
      indicator: "Student can explain how different art forms combine"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of arts in personal development",
      indicator: "Student can discuss how the arts develop individuals"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the role of arts in national development",
      indicator: "Student can discuss how arts contribute to national development"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the future of creative arts",
      indicator: "Student can discuss emerging trends in creative arts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Creative Arts - Expressing the Human Spirit",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about creative arts, creativity, and their importance in human life."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Creative Arts</h2>
      <p><strong>Creative arts</strong> are forms of artistic expression that involve creativity, imagination, and innovation. They encompass visual arts, performing arts, literary arts, and digital arts. Creative arts are essential for human expression, cultural development, and personal growth.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🎨 Key Concepts</h3>
          <ul>
            <li>✓ Creativity</li>
            <li>✓ Forms of Creative Arts</li>
            <li>✓ Creative Process</li>
            <li>✓ Arts and Culture</li>
            <li>✓ Creative Economy</li>
            <li>✓ Arts in Education</li>
            <li>✓ Interdisciplinary Arts</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The creative economy is one of the fastest-growing sectors</li>
            <li>• Nigeria has a vibrant creative industry</li>
            <li>• Nollywood is the second-largest film industry in the world</li>
            <li>• Nigerian music is globally recognized</li>
            <li>• Arts contribute significantly to the economy</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Creative Arts Matter</h4>
        <p>Creative arts enrich our lives, express human experience, preserve culture, drive innovation, and contribute to economic development.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Creative Arts?",
        objective: "obj_001",
        text: `
          <h3>Understanding Creative Arts</h3>
          <p><strong>Creative arts</strong> are forms of artistic expression that use creativity, skill, and imagination to create works of beauty, meaning, and value.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Categories</h4>
              <ul>
                <li>• <strong>Visual Arts:</strong> Painting, sculpture, photography</li>
                <li>• <strong>Performing Arts:</strong> Music, dance, theatre</li>
                <li>• <strong>Literary Arts:</strong> Poetry, prose, drama</li>
                <li>• <strong>Digital Arts:</strong> Graphic design, animation, digital media</li>
                <li>• <strong>Applied Arts:</strong> Design, craft, architecture</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• <strong>Expression:</strong> Personal and cultural expression</li>
                <li>• <strong>Innovation:</strong> Creativity and innovation</li>
                <li>• <strong>Culture:</strong> Preservation and development of culture</li>
                <li>• <strong>Education:</strong> Learning and development</li>
                <li>• <strong>Economy:</strong> Economic growth and jobs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Forms of Creative Arts",
        objective: "obj_002",
        text: `
          <h3>Forms of Creative Arts</h3>
          <p>Creative arts take many different forms.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Visual Arts</h4>
              <ul>
                <li>• <strong>Painting:</strong> Oil, acrylic, watercolor</li>
                <li>• <strong>Sculpture:</strong> Stone, wood, metal</li>
                <li>• <strong>Photography:</strong> Traditional and digital</li>
                <li>• <strong>Printmaking:</strong> Etching, lithography</li>
                <li>• <strong>Drawing:</strong> Pencil, charcoal, pastel</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Performing Arts</h4>
              <ul>
                <li>• <strong>Theatre:</strong> Drama, musicals</li>
                <li>• <strong>Music:</strong> Vocal, instrumental</li>
                <li>• <strong>Dance:</strong> Traditional, modern, ballet</li>
                <li>• <strong>Performance art:</strong> Live performances</li>
                <li>• <strong>Film:</strong> Movies, documentaries</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Literary Arts</h4>
              <ul>
                <li>• <strong>Poetry:</strong> Traditional, free verse</li>
                <li>• <strong>Prose:</strong> Novels, short stories</li>
                <li>• <strong>Drama:</strong> Playwriting</li>
                <li>• <strong>Creative non-fiction:</strong> Memoir, essays</li>
                <li>• <strong>Oral literature:</strong> Storytelling</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Creativity",
        objective: "obj_003",
        text: `
          <h3>Understanding Creativity</h3>
          <p><strong>Creativity</strong> is the ability to generate new ideas, approaches, and solutions. It is the foundation of all creative arts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Imagination:</strong> Thinking beyond the ordinary</li>
                <li>• <strong>Innovation:</strong> Creating something new</li>
                <li>• <strong>Originality:</strong> Unique expression</li>
                <li>• <strong>Flexibility:</strong> Adapting and changing</li>
                <li>• <strong>Risk-taking:</strong> Trying new things</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Developing Creativity</h4>
              <ul>
                <li>• <strong>Practice:</strong> Regular creative work</li>
                <li>• <strong>Exploration:</strong> Trying new things</li>
                <li>• <strong>Curiosity:</strong> Asking questions</li>
                <li>• <strong>Open-mindedness:</strong> Considering new ideas</li>
                <li>• <strong>Persistence:</strong> Continuing despite challenges</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Creative Process",
        objective: "obj_005",
        text: `
          <h3>The Creative Process</h3>
          <p>The <strong>creative process</strong> involves several stages.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages of Creativity</h4>
              <ul>
                <li>• <strong>Preparation:</strong> Gathering ideas and materials</li>
                <li>• <strong>Incubation:</strong> Allowing ideas to develop</li>
                <li>• <strong>Inspiration:</strong> Moment of insight</li>
                <li>• <strong>Development:</strong> Refining the idea</li>
                <li>• <strong>Execution:</strong> Creating the work</li>
                <li>• <strong>Evaluation:</strong> Assessing the result</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li>• <strong>Preparation:</strong> Researching a topic</li>
                <li>• <strong>Incubation:</strong> Thinking about it over time</li>
                <li>• <strong>Inspiration:</strong> Aha moment</li>
                <li>• <strong>Development:</strong> Outlining and drafting</li>
                <li>• <strong>Execution:</strong> Creating the final work</li>
                <li>• <strong>Evaluation:</strong> Reviewing and revising</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Arts and Culture",
        objective: "obj_008",
        text: `
          <h3>Arts and Culture</h3>
          <p>The arts and culture are deeply interconnected.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Arts Reflect Culture</h4>
              <ul>
                <li>• <strong>Values:</strong> Express cultural beliefs</li>
                <li>• <strong>Traditions:</strong> Preserve customs</li>
                <li>• <strong>Identity:</strong> Express cultural identity</li>
                <li>• <strong>History:</strong> Document historical events</li>
                <li>• <strong>Social issues:</strong> Comment on society</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How Arts Shape Culture</h4>
              <ul>
                <li>• <strong>Innovation:</strong> Introducing new ideas</li>
                <li>• <strong>Change:</strong> Driving social change</li>
                <li>• <strong>Unity:</strong> Bringing people together</li>
                <li>• <strong>Education:</strong> Teaching values</li>
                <li>• <strong>Inspiration:</strong> Inspiring new thinking</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Creative Arts in Nigeria",
        objective: "obj_009",
        text: `
          <h3>Creative Arts in Nigeria</h3>
          <p>Nigeria has a vibrant and growing creative industry.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Creative Industries</h4>
              <ul>
                <li>• <strong>Nollywood:</strong> Second-largest film industry</li>
                <li>• <strong>Nigerian music:</strong> Afrobeats, hip hop, traditional</li>
                <li>• <strong>Fashion:</strong> Traditional and modern design</li>
                <li>• <strong>Visual arts:</strong> Contemporary Nigerian art</li>
                <li>• <strong>Literature:</strong> Nigerian authors</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Figures</h4>
              <ul>
                <li>• <strong>Wole Soyinka:</strong> Nobel Prize in Literature</li>
                <li>• <strong>Chimamanda Adichie:</strong> Author</li>
                <li>• <strong>Fela Kuti:</strong> Music legend</li>
                <li>• <strong>Burna Boy:</strong> International musician</li>
                <li>• <strong>Davido:</strong> Afrobeats artist</li>
                <li>• <strong>El Anatsui:</strong> Visual artist</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Arts in Education",
        objective: "obj_007",
        text: `
          <h3>Arts in Education</h3>
          <p>The arts play a vital role in education.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Benefits of Arts Education</h4>
              <ul>
                <li>• <strong>Creativity:</strong> Developing creative thinking</li>
                <li>• <strong>Cognitive skills:</strong> Enhancing learning</li>
                <li>• <strong>Social skills:</strong> Collaboration and communication</li>
                <li>• <strong>Emotional development:</strong> Self-expression</li>
                <li>• <strong>Cultural awareness:</strong> Understanding diversity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Visual arts:</strong> Developing observation skills</li>
                <li>• <strong>Music:</strong> Enhancing mathematical thinking</li>
                <li>• <strong>Drama:</strong> Building confidence and empathy</li>
                <li>• <strong>Dance:</strong> Physical development</li>
                <li>• <strong>Creative writing:</strong> Literacy and expression</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Creative Economy",
        objective: "obj_011",
        text: `
          <h3>The Creative Economy</h3>
          <p>The <strong>creative economy</strong> is an important sector of the global economy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Sectors</h4>
              <ul>
                <li>• <strong>Entertainment:</strong> Film, music, theatre</li>
                <li>• <strong>Media:</strong> Publishing, broadcasting</li>
                <li>• <strong>Design:</strong> Graphic, fashion, interior</li>
                <li>• <strong>Technology:</strong> Digital media, animation</li>
                <li>• <strong>Tourism:</strong> Cultural tourism</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• <strong>Jobs:</strong> Employment opportunities</li>
                <li>• <strong>GDP:</strong> Economic contribution</li>
                <li>• <strong>Innovation:</strong> Driving innovation</li>
                <li>• <strong>Cultural exports:</strong> Promoting culture</li>
                <li>• <strong>National identity:</strong> Branding the nation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Technology and Creative Arts",
        objective: "obj_010",
        text: `
          <h3>Technology and Creative Arts</h3>
          <p>Technology has transformed the creative arts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Technological Innovations</h4>
              <ul>
                <li>• <strong>Digital art:</strong> Drawing, painting, animation</li>
                <li>• <strong>Recording:</strong> Music production</li>
                <li>• <strong>Photography:</strong> Digital photography</li>
                <li>• <strong>Video production:</strong> Digital filmmaking</li>
                <li>• <strong>Design:</strong> CAD, graphic design</li>
                <li>• <strong>Virtual reality:</strong> Immersive experiences</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Impact</h4>
              <ul>
                <li>• <strong>Accessibility:</strong> More people can create</li>
                <li>• <strong>Distribution:</strong> Global reach</li>
                <li>• <strong>Collaboration:</strong> Remote work</li>
                <li>• <strong>Innovation:</strong> New art forms</li>
                <li>• <strong>Preservation:</strong> Digital preservation</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Arts and Social Change",
        objective: "obj_012",
        text: `
          <h3>Arts and Social Change</h3>
          <p>Arts have the power to drive social change.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Arts Drive Change</h4>
              <ul>
                <li>• <strong>Awareness:</strong> Raising consciousness</li>
                <li>• <strong>Education:</strong> Informing people</li>
                <li>• <strong>Inspiration:</strong> Motivating action</li>
                <li>• <strong>Unity:</strong> Bringing people together</li>
                <li>• <strong>Advocacy:</strong> Campaigning for change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Protest songs:</strong> Music for change</li>
                <li>• <strong>Activist theatre:</strong> Drama for justice</li>
                <li>• <strong>Documentary film:</strong> Exposing issues</li>
                <li>• <strong>Public art:</strong> Community messages</li>
                <li>• <strong>Social media:</strong> Digital activism</li>
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
          <h4>🎨 Creative Arts</h4>
          <ul>
            <li>• Visual, performing, literary, and digital arts</li>
            <li>• Creativity and the creative process</li>
            <li>• Arts and culture are interconnected</li>
            <li>• Technology is transforming the arts</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Arts in education and personal development</li>
            <li>• Creative economy and economic impact</li>
            <li>• Nigerian creative industry</li>
            <li>• Arts as a force for social change</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Creative arts are essential for human expression, cultural development, innovation, and social change. They enrich our lives and build a better world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Creativity is only for artists",
        correction: "Creativity is valuable in all fields",
        explanation: "Creativity is important in science, business, and everyday life."
      },
      {
        id: "mis_002",
        misconception: "The arts are not important",
        correction: "The arts are essential for human development and society",
        explanation: "The arts contribute to education, economy, and well-being."
      },
      {
        id: "mis_003",
        misconception: "Technology is replacing creativity",
        correction: "Technology is expanding creative possibilities",
        explanation: "Technology provides new tools for creative expression."
      },
      {
        id: "mis_004",
        misconception: "Creative arts are only for entertainment",
        correction: "Creative arts have many important functions",
        explanation: "Arts serve educational, social, cultural, and economic purposes."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Creative Industry",
        description: "Creative arts are a major industry.",
        example: "Film, music, fashion, design"
      },
      {
        id: "app_002",
        title: "Education",
        description: "Arts are essential in education.",
        example: "School arts programs, creative learning"
      },
      {
        id: "app_003",
        title: "Community Development",
        description: "Arts build communities.",
        example: "Community arts projects, festivals"
      },
      {
        id: "app_004",
        title: "Social Change",
        description: "Arts drive social change.",
        example: "Activism, awareness campaigns"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Creative Arts", definition: "Forms of artistic expression involving creativity and imagination." },
    { term: "Creativity", definition: "The ability to generate new ideas and solutions." },
    { term: "Visual Arts", definition: "Arts that are primarily visual in nature." },
    { term: "Performing Arts", definition: "Arts that are performed live." },
    { term: "Literary Arts", definition: "Arts involving written or spoken language." },
    { term: "Digital Arts", definition: "Arts created using digital technology." },
    { term: "Creative Process", definition: "The stages involved in creating a work of art." },
    { term: "Creative Economy", definition: "The economic sector based on creative industries." },
    { term: "Innovation", definition: "Introducing something new." },
    { term: "Expression", definition: "Conveying thoughts and feelings." },
    { term: "Culture", definition: "Shared beliefs, values, and practices." },
    { term: "Interdisciplinary Arts", definition: "Combining different art forms." },
    { term: "Nollywood", definition: "The Nigerian film industry." },
    { term: "Afrobeats", definition: "A popular Nigerian music genre." },
    { term: "Cultural Heritage", definition: "Traditions and cultural practices." },
    { term: "Social Change", definition: "Transformation of society." },
    { term: "Inspiration", definition: "A creative influence or insight." },
    { term: "Imagination", definition: "The ability to form new ideas." },
    { term: "Entrepreneurship", definition: "Starting and running creative businesses." },
    { term: "Cultural Identity", definition: "A sense of belonging to a culture." }
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
      question: "What are creative arts?",
      type: "multiple_choice",
      options: [
        "Only visual arts",
        "Forms of artistic expression involving creativity and imagination",
        "Only music",
        "Only theatre"
      ],
      answer: "Forms of artistic expression involving creativity and imagination",
      explanation: "Creative arts are forms of artistic expression involving creativity and imagination."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a form of creative art?",
      type: "multiple_choice",
      options: ["Visual arts", "Performing arts", "Literary arts", "All of the above"],
      answer: "All of the above",
      explanation: "Visual arts, performing arts, and literary arts are all forms of creative arts."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is creativity?",
      type: "multiple_choice",
      options: [
        "Copying others",
        "The ability to generate new ideas",
        "Only for artists",
        "Following rules"
      ],
      answer: "The ability to generate new ideas",
      explanation: "Creativity is the ability to generate new ideas."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "How are creativity and the arts connected?",
      type: "multiple_choice",
      options: [
        "They are not connected",
        "Creativity is expressed through the arts",
        "Arts do not require creativity",
        "Creativity is only for science"
      ],
      answer: "Creativity is expressed through the arts",
      explanation: "Creativity is expressed through the arts."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the first stage of the creative process?",
      type: "multiple_choice",
      options: ["Execution", "Preparation", "Evaluation", "Inspiration"],
      answer: "Preparation",
      explanation: "Preparation is the first stage of the creative process."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Why is creative expression important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It allows people to express themselves",
        "It is only for professionals",
        "It is only for children"
      ],
      answer: "It allows people to express themselves",
      explanation: "Creative expression allows people to express themselves."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the role of arts in education?",
      type: "multiple_choice",
      options: [
        "No role",
        "Developing creativity and learning",
        "Only for entertainment",
        "Only for some students"
      ],
      answer: "Developing creativity and learning",
      explanation: "Arts in education develop creativity and learning."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "How do arts reflect culture?",
      type: "multiple_choice",
      options: [
        "They do not reflect culture",
        "They express cultural values and beliefs",
        "They only reflect individual opinions",
        "They have no connection to culture"
      ],
      answer: "They express cultural values and beliefs",
      explanation: "Arts express cultural values and beliefs."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is Nollywood?",
      type: "multiple_choice",
      options: [
        "A music genre",
        "The Nigerian film industry",
        "A dance style",
        "A fashion brand"
      ],
      answer: "The Nigerian film industry",
      explanation: "Nollywood is the Nigerian film industry."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "How has technology impacted creative arts?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It has created new possibilities",
        "It has destroyed creativity",
        "It is not useful"
      ],
      answer: "It has created new possibilities",
      explanation: "Technology has created new possibilities in the arts."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the creative economy?",
      type: "multiple_choice",
      options: [
        "The economy based on creative industries",
        "A small economic sector",
        "Only the music industry",
        "Only the film industry"
      ],
      answer: "The economy based on creative industries",
      explanation: "The creative economy is based on creative industries."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How can arts drive social change?",
      type: "multiple_choice",
      options: [
        "They cannot",
        "By raising awareness and inspiring action",
        "Only through protests",
        "Only through education"
      ],
      answer: "By raising awareness and inspiring action",
      explanation: "Arts drive social change by raising awareness and inspiring action."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What are interdisciplinary arts?",
      type: "multiple_choice",
      options: [
        "Arts that combine different forms",
        "A single art form",
        "Only visual arts",
        "Only performing arts"
      ],
      answer: "Arts that combine different forms",
      explanation: "Interdisciplinary arts combine different forms."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why are the arts important for personal development?",
      type: "multiple_choice",
      options: [
        "They are not important",
        "They develop creativity and self-expression",
        "They only develop skills",
        "They only entertain"
      ],
      answer: "They develop creativity and self-expression",
      explanation: "Arts develop creativity and self-expression."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How do arts contribute to national development?",
      type: "multiple_choice",
      options: [
        "They have no role",
        "They contribute to the economy and cultural identity",
        "Only through tourism",
        "Only through education"
      ],
      answer: "They contribute to the economy and cultural identity",
      explanation: "Arts contribute to the economy and cultural identity."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_creative_arts",
    title: "Creative Arts Quiz",
    description: "Test your understanding of creative arts",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are creative arts?",
        type: "short_answer",
        answer_key: "Forms of artistic expression involving creativity and imagination",
        explanation: "Creative arts involve creativity and imagination."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one form of creative arts.",
        type: "short_answer",
        answer_key: "Visual arts (or any valid)",
        explanation: "Visual arts are a form of creative arts."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is creativity?",
        type: "short_answer",
        answer_key: "The ability to generate new ideas",
        explanation: "Creativity is the ability to generate new ideas."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the first stage of the creative process?",
        type: "short_answer",
        answer_key: "Preparation",
        explanation: "Preparation is the first stage."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "Why is creative expression important?",
        type: "short_answer",
        answer_key: "It allows people to express themselves",
        explanation: "Creative expression allows people to express themselves."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the role of arts in education?",
        type: "short_answer",
        answer_key: "Developing creativity and learning",
        explanation: "Arts develop creativity and learning."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is Nollywood?",
        type: "short_answer",
        answer_key: "The Nigerian film industry",
        explanation: "Nollywood is the Nigerian film industry."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "How has technology impacted creative arts?",
        type: "short_answer",
        answer_key: "It has created new possibilities",
        explanation: "Technology has created new possibilities."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the creative economy?",
        type: "short_answer",
        answer_key: "The economy based on creative industries",
        explanation: "The creative economy is based on creative industries."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "How can arts drive social change?",
        type: "short_answer",
        answer_key: "By raising awareness and inspiring action",
        explanation: "Arts drive social change by raising awareness."
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
        "Understand creative arts and their forms",
        "Explain creativity and the creative process",
        "Describe the role of arts in education and culture",
        "Understand the creative economy and social change"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are creative arts?" },
        { time: "5-10 min", activity: "Direct Instruction - Forms of Creative Arts" },
        { time: "10-15 min", activity: "Direct Instruction - Creativity" },
        { time: "15-20 min", activity: "Direct Instruction - Creative Process" },
        { time: "20-25 min", activity: "Direct Instruction - Arts and Culture" },
        { time: "25-30 min", activity: "Direct Instruction - Nigerian Creative Industry" },
        { time: "30-35 min", activity: "Direct Instruction - Creative Economy" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Forms of artistic expression involving creativity and imagination",
        prac_002: "All of the above",
        prac_003: "The ability to generate new ideas",
        prac_004: "Creativity is expressed through the arts",
        prac_005: "Preparation",
        prac_006: "It allows people to express themselves",
        prac_007: "Developing creativity and learning",
        prac_008: "They express cultural values and beliefs",
        prac_009: "The Nigerian film industry",
        prac_010: "It has created new possibilities",
        prac_011: "The economy based on creative industries",
        prac_012: "By raising awareness and inspiring action",
        prac_013: "Arts that combine different forms",
        prac_014: "They develop creativity and self-expression",
        prac_015: "They contribute to the economy and cultural identity"
      },
      assessment: {
        ass_001: "Forms of artistic expression involving creativity and imagination",
        ass_002: "Visual arts (or any valid)",
        ass_003: "The ability to generate new ideas",
        ass_004: "Preparation",
        ass_005: "It allows people to express themselves",
        ass_006: "Developing creativity and learning",
        ass_007: "The Nigerian film industry",
        ass_008: "It has created new possibilities",
        ass_009: "The economy based on creative industries",
        ass_010: "By raising awareness and inspiring action"
      }
    },
    extensionActivities: [
      "Create a creative project",
      "Research Nigerian creative industries",
      "Visit a museum or art gallery",
      "Explore creative careers"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research creative economy",
        "Study creative entrepreneurship",
        "Research arts policy",
        "Study interdisciplinary arts"
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
      title: "Forms of Creative Arts",
      description: "Diagram showing forms of creative arts",
      url: "/diagrams/creative-arts-forms.png",
      alt: "Creative arts forms diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "The Creative Process",
      description: "Diagram showing the creative process",
      url: "/diagrams/creative-process.png",
      alt: "Creative process diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Creative Economy",
      description: "Chart showing creative economy sectors",
      url: "/diagrams/creative-economy.png",
      alt: "Creative economy chart"
    }
  ]
};