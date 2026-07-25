// Location: src/data/lessons/business/entrepreneurship.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_entrepreneurship",
  subject: "Entrepreneurship",
  topic: "Entrepreneurship",
  name: "Entrepreneurship",
  icon: "🚀",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 26,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of business basics",
    "Interest in starting a business",
    "Creativity and innovation",
    "Basic business knowledge"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Finance",
      file: "business/finance.js"
    },
    {
      name: "Marketing",
      file: "business/marketing.js"
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
      description: "Define entrepreneurship and explain its importance",
      indicator: "Student can explain what entrepreneurship is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the characteristics of an entrepreneur",
      indicator: "Student can list the key traits of successful entrepreneurs"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the role of entrepreneurship in the economy",
      indicator: "Student can describe how entrepreneurship contributes to economic growth"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the entrepreneurial process",
      indicator: "Student can explain the steps to start a business"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the importance of a business plan",
      indicator: "Student can describe what a business plan is and why it matters"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the sources of business funding",
      indicator: "Student can explain how to finance a business"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of innovation and creativity",
      indicator: "Student can describe how innovation drives entrepreneurship"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the risks and rewards of entrepreneurship",
      indicator: "Student can explain the benefits and challenges of being an entrepreneur"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of market research",
      indicator: "Student can describe how to research a market"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the challenges of entrepreneurship",
      indicator: "Student can discuss the obstacles entrepreneurs face"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the concept of business growth and scaling",
      indicator: "Student can describe how to grow a business"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe the role of technology in entrepreneurship",
      indicator: "Student can explain how technology impacts entrepreneurship"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of networking",
      indicator: "Student can describe how networking helps entrepreneurs"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the relationship between entrepreneurship and society",
      indicator: "Student can discuss the social impact of entrepreneurship"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain social entrepreneurship",
      indicator: "Student can describe social entrepreneurship and its importance"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Describe successful Nigerian entrepreneurs",
      indicator: "Student can discuss Nigerian entrepreneurial success stories"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the importance of resilience",
      indicator: "Student can describe why resilience is key for entrepreneurs"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the future of entrepreneurship",
      indicator: "Student can discuss emerging trends in entrepreneurship"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Entrepreneurship - Starting and Growing a Business",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about entrepreneurship, starting a business, and the entrepreneurial journey."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Entrepreneurship</h2>
      <p><strong>Entrepreneurship</strong> is the process of starting, organizing, and managing a business venture. It involves taking risks and innovating to create value. Entrepreneurs are the driving force behind economic growth, job creation, and innovation.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🚀 Key Concepts</h3>
          <ul>
            <li>✓ Characteristics of Entrepreneurs</li>
            <li>✓ The Entrepreneurial Process</li>
            <li>✓ Business Planning</li>
            <li>✓ Innovation and Creativity</li>
            <li>✓ Sources of Funding</li>
            <li>✓ Risk and Reward</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Small businesses create 60% of jobs</li>
            <li>• Nigeria has a vibrant entrepreneurial culture</li>
            <li>• The fastest-growing economies have strong entrepreneurship</li>
            <li>• Entrepreneurship can be learned</li>
            <li>• Many famous companies started as small businesses</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Entrepreneurship Matters</h4>
        <p>Entrepreneurship creates jobs, drives innovation, and contributes to economic growth. It empowers individuals to create their own opportunities.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Entrepreneurship?",
        objective: "obj_001",
        text: `
          <h3>Understanding Entrepreneurship</h3>
          <p><strong>Entrepreneurship</strong> is the process of identifying opportunities, taking risks, and creating value through business ventures.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Innovation:</strong> Creating new ideas</li>
                <li>• <strong>Risk-taking:</strong> Taking calculated risks</li>
                <li>• <strong>Opportunity recognition:</strong> Finding opportunities</li>
                <li>• <strong>Resource management:</strong> Using resources effectively</li>
                <li>• <strong>Value creation:</strong> Creating value for customers</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Economic growth</li>
                <li>• Job creation</li>
                <li>• Innovation</li>
                <li>• Social change</li>
                <li>• Personal fulfillment</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Characteristics of Entrepreneurs",
        objective: "obj_002",
        text: `
          <h3>Characteristics of Entrepreneurs</h3>
          <p>Successful entrepreneurs share certain key characteristics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Traits</h4>
              <ul>
                <li>• <strong>Passion:</strong> Strong commitment</li>
                <li>• <strong>Resilience:</strong> Overcoming challenges</li>
                <li>• <strong>Creativity:</strong> Innovative thinking</li>
                <li>• <strong>Vision:</strong> Clear direction</li>
                <li>• <strong>Risk-taking:</strong> Willing to take risks</li>
                <li>• <strong>Adaptability:</strong> Adjusting to change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Skills</h4>
              <ul>
                <li>• <strong>Leadership:</strong> Guiding others</li>
                <li>• <strong>Communication:</strong> Effective communication</li>
                <li>• <strong>Decision-making:</strong> Making choices</li>
                <li>• <strong>Problem-solving:</strong> Finding solutions</li>
                <li>• <strong>Networking:</strong> Building relationships</li>
                <li>• <strong>Financial literacy:</strong> Managing money</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Entrepreneurial Process",
        objective: "obj_004",
        text: `
          <h3>The Entrepreneurial Process</h3>
          <p>Starting a business involves several key steps.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps</h4>
              <ul>
                <li>1. <strong>Idea generation:</strong> Finding a business idea</li>
                <li>2. <strong>Opportunity evaluation:</strong> Assessing feasibility</li>
                <li>3. <strong>Market research:</strong> Understanding customers</li>
                <li>4. <strong>Business planning:</strong> Creating a plan</li>
                <li>5. <strong>Funding:</strong> Raising capital</li>
                <li>6. <strong>Launch:</strong> Starting operations</li>
                <li>7. <strong>Growth:</strong> Expanding the business</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Considerations</h4>
              <ul>
                <li>• Market demand</li>
                <li>• Competition</li>
                <li>• Resources needed</li>
                <li>• Legal requirements</li>
                <li>• Financial projections</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Business Plan",
        objective: "obj_005",
        text: `
          <h3>The Business Plan</h3>
          <p>A <strong>business plan</strong> is a document that outlines a business's goals, strategies, and financial projections.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Executive summary:</strong> Overview</li>
                <li>• <strong>Company description:</strong> What the business does</li>
                <li>• <strong>Market analysis:</strong> Target market</li>
                <li>• <strong>Organization:</strong> Management structure</li>
                <li>• <strong>Marketing strategy:</strong> How to reach customers</li>
                <li>• <strong>Financial projections:</strong> Revenue and costs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Guides decision-making</li>
                <li>• Attracts investors</li>
                <li>• Secures loans</li>
                <li>• Measures progress</li>
                <li>• Identifies challenges</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Sources of Funding",
        objective: "obj_006",
        text: `
          <h3>Sources of Funding</h3>
          <p>Entrepreneurs can raise capital from various sources.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Funding Sources</h4>
              <ul>
                <li>• <strong>Personal savings:</strong> Own money</li>
                <li>• <strong>Friends and family:</strong> Loans from relatives</li>
                <li>• <strong>Bank loans:</strong> Loans from banks</li>
                <li>• <strong>Angel investors:</strong> Individual investors</li>
                <li>• <strong>Venture capital:</strong> Investment firms</li>
                <li>• <strong>Government grants:</strong> Government funding</li>
                <li>• <strong>Crowdfunding:</strong> Online fundraising</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Considerations</h4>
              <ul>
                <li>• Amount needed</li>
                <li>• Repayment terms</li>
                <li>• Equity dilution</li>
                <li>• Control and decision-making</li>
                <li>• Time to secure funding</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Innovation and Creativity",
        objective: "obj_007",
        text: `
          <h3>Innovation and Creativity</h3>
          <p><strong>Innovation</strong> is the process of introducing something new. <strong>Creativity</strong> is the ability to generate new ideas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Innovation</h4>
              <ul>
                <li>• <strong>Product innovation:</strong> New products</li>
                <li>• <strong>Process innovation:</strong> New processes</li>
                <li>• <strong>Business model innovation:</strong> New business models</li>
                <li>• <strong>Social innovation:</strong> Social solutions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Fostering Creativity</h4>
              <ul>
                <li>• Open-mindedness</li>
                <li>• Curiosity</li>
                <li>• Collaboration</li>
                <li>• Risk-taking</li>
                <li>• Problem-solving</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Risk and Reward",
        objective: "obj_008",
        text: `
          <h3>Risk and Reward</h3>
          <p>Entrepreneurship involves balancing risks and rewards.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Risks</h4>
              <ul>
                <li>• <strong>Financial risk:</strong> Loss of money</li>
                <li>• <strong>Market risk:</strong> Market changes</li>
                <li>• <strong>Competition:</strong> Competitors</li>
                <li>• <strong>Operational risk:</strong> Day-to-day challenges</li>
                <li>• <strong>Regulatory risk:</strong> Legal issues</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rewards</h4>
              <ul>
                <li>• <strong>Financial rewards:</strong> Profits</li>
                <li>• <strong>Personal satisfaction:</strong> Fulfillment</li>
                <li>• <strong>Freedom:</strong> Independence</li>
                <li>• <strong>Impact:</strong> Making a difference</li>
                <li>• <strong>Growth:</strong> Personal development</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Social Entrepreneurship",
        objective: "obj_015",
        text: `
          <h3>Social Entrepreneurship</h3>
          <p><strong>Social entrepreneurship</strong> is the process of creating businesses that address social problems.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• <strong>Social mission:</strong> Addressing social issues</li>
                <li>• <strong>Innovation:</strong> Creative solutions</li>
                <li>• <strong>Sustainability:</strong> Long-term impact</li>
                <li>• <strong>Community focus:</strong> Serving communities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Non-profits:</strong> Charitable organizations</li>
                <li>• <strong>Social enterprises:</strong> Businesses with social goals</li>
                <li>• <strong>Cooperatives:</strong> Member-owned businesses</li>
                <li>• <strong>Community projects:</strong> Local initiatives</li>
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
          <h4>🚀 Entrepreneurship</h4>
          <ul>
            <li>• The process of starting and managing a business</li>
            <li>• Characteristics: passion, resilience, creativity</li>
            <li>• The entrepreneurial process: idea to growth</li>
            <li>• Business plans guide decision-making</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Sources of funding</li>
            <li>• Innovation and creativity</li>
            <li>• Risk and reward</li>
            <li>• Social entrepreneurship</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Entrepreneurship is about creating value, taking risks, and making a difference. Anyone can become an entrepreneur with the right mindset and skills.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Entrepreneurs are born, not made",
        correction: "Entrepreneurial skills can be learned",
        explanation: "Entrepreneurship is a skill that can be developed through education and experience."
      },
      {
        id: "mis_002",
        misconception: "Entrepreneurship is only for making money",
        correction: "Entrepreneurship can also create social impact",
        explanation: "Social entrepreneurship addresses social problems while creating value."
      },
      {
        id: "mis_003",
        misconception: "Entrepreneurs are lone wolfs",
        correction: "Successful entrepreneurs build teams and networks",
        explanation: "Collaboration is essential for entrepreneurial success."
      },
      {
        id: "mis_004",
        misconception: "Most entrepreneurs succeed quickly",
        correction: "Entrepreneurship requires time and persistence",
        explanation: "Building a successful business takes time and resilience."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Starting a Business",
        description: "Entrepreneurship is the process of starting a business.",
        example: "Creating jobs, providing goods and services"
      },
      {
        id: "app_002",
        title: "Innovation",
        description: "Entrepreneurs drive innovation.",
        example: "New products, new services, new processes"
      },
      {
        id: "app_003",
        title: "Social Change",
        description: "Entrepreneurs can drive social change.",
        example: "Social enterprises, community development"
      },
      {
        id: "app_004",
        title: "Economic Growth",
        description: "Entrepreneurship drives economic growth.",
        example: "Job creation, wealth creation"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Entrepreneurship", definition: "The process of starting and managing a business." },
    { term: "Entrepreneur", definition: "A person who starts and runs a business." },
    { term: "Innovation", definition: "Introducing something new." },
    { term: "Creativity", definition: "The ability to generate new ideas." },
    { term: "Business Plan", definition: "A document outlining a business's goals and strategies." },
    { term: "Risk", definition: "The possibility of loss or failure." },
    { term: "Reward", definition: "The benefits of entrepreneurial success." },
    { term: "Capital", definition: "Money or assets used in business." },
    { term: "Venture Capital", definition: "Investment in new businesses." },
    { term: "Angel Investor", definition: "An individual who invests in startups." },
    { term: "Crowdfunding", definition: "Raising money from many people." },
    { term: "Social Entrepreneurship", definition: "Entrepreneurship with a social mission." },
    { term: "Market Research", definition: "Studying the market." },
    { term: "Scalability", definition: "The ability to grow." },
    { term: "Resilience", definition: "The ability to overcome challenges." },
    { term: "Vision", definition: "A clear direction for the future." },
    { term: "Opportunity", definition: "A chance to create value." },
    { term: "Profit", definition: "Revenue minus expenses." },
    { term: "Sustainability", definition: "Long-term viability." },
    { term: "Mentorship", definition: "Guidance from experienced entrepreneurs." }
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
      question: "What is entrepreneurship?",
      type: "multiple_choice",
      options: [
        "Working for a company",
        "Starting and managing a business",
        "Investing in stocks",
        "Managing a team"
      ],
      answer: "Starting and managing a business",
      explanation: "Entrepreneurship is the process of starting and managing a business."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a key characteristic of an entrepreneur?",
      type: "multiple_choice",
      options: ["Passion", "Fear of risk", "Laziness", "Indecisiveness"],
      answer: "Passion",
      explanation: "Passion is a key characteristic of successful entrepreneurs."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the role of entrepreneurship in the economy?",
      type: "multiple_choice",
      options: [
        "It has no role",
        "It creates jobs and drives growth",
        "It only benefits the entrepreneur",
        "It only benefits large companies"
      ],
      answer: "It creates jobs and drives growth",
      explanation: "Entrepreneurship creates jobs and drives economic growth."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in the entrepreneurial process?",
      type: "multiple_choice",
      options: [
        "Funding",
        "Idea generation",
        "Launch",
        "Growth"
      ],
      answer: "Idea generation",
      explanation: "Idea generation is the first step in the entrepreneurial process."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a business plan?",
      type: "multiple_choice",
      options: [
        "A list of products",
        "A document outlining business goals and strategies",
        "A marketing strategy",
        "A financial statement"
      ],
      answer: "A document outlining business goals and strategies",
      explanation: "A business plan outlines a business's goals and strategies."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a source of funding for entrepreneurs?",
      type: "multiple_choice",
      options: [
        "Personal savings",
        "Bank loans",
        "Venture capital",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Entrepreneurs can use personal savings, bank loans, and venture capital."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is innovation?",
      type: "multiple_choice",
      options: [
        "Copying others",
        "Introducing something new",
        "Following rules",
        "Avoiding change"
      ],
      answer: "Introducing something new",
      explanation: "Innovation is the process of introducing something new."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a risk of entrepreneurship?",
      type: "multiple_choice",
      options: [
        "Financial loss",
        "Personal satisfaction",
        "Freedom",
        "Impact"
      ],
      answer: "Financial loss",
      explanation: "Financial loss is a risk of entrepreneurship."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is market research important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps understand customers",
        "It only helps large businesses",
        "It is optional"
      ],
      answer: "It helps understand customers",
      explanation: "Market research helps entrepreneurs understand their customers."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a challenge of entrepreneurship?",
      type: "multiple_choice",
      options: [
        "Lack of funding",
        "Competition",
        "Uncertainty",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Lack of funding, competition, and uncertainty are challenges."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is business growth?",
      type: "multiple_choice",
      options: [
        "Staying the same",
        "Increasing in size and revenue",
        "Decreasing in size",
        "Closing the business"
      ],
      answer: "Increasing in size and revenue",
      explanation: "Business growth means increasing in size and revenue."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How does technology impact entrepreneurship?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It creates new opportunities",
        "It only helps large businesses",
        "It makes entrepreneurship harder"
      ],
      answer: "It creates new opportunities",
      explanation: "Technology creates new opportunities for entrepreneurs."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "Why is networking important for entrepreneurs?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps build relationships",
        "It only helps large businesses",
        "It is optional"
      ],
      answer: "It helps build relationships",
      explanation: "Networking helps entrepreneurs build valuable relationships."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does entrepreneurship impact society?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It creates jobs and drives innovation",
        "It only benefits entrepreneurs",
        "It harms society"
      ],
      answer: "It creates jobs and drives innovation",
      explanation: "Entrepreneurship creates jobs and drives innovation in society."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is social entrepreneurship?",
      type: "multiple_choice",
      options: [
        "For-profit business only",
        "Business with a social mission",
        "Non-profit organization only",
        "Government program"
      ],
      answer: "Business with a social mission",
      explanation: "Social entrepreneurship is business with a social mission."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_entrepreneurship",
    title: "Entrepreneurship Quiz",
    description: "Test your understanding of entrepreneurship",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is entrepreneurship?",
        type: "short_answer",
        answer_key: "Starting and managing a business",
        explanation: "Entrepreneurship is the process of starting and managing a business."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a key characteristic of an entrepreneur?",
        type: "short_answer",
        answer_key: "Passion (or any valid)",
        explanation: "Passion is a key characteristic of successful entrepreneurs."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the role of entrepreneurship in the economy?",
        type: "short_answer",
        answer_key: "It creates jobs and drives growth",
        explanation: "Entrepreneurship creates jobs and drives economic growth."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in the entrepreneurial process?",
        type: "short_answer",
        answer_key: "Idea generation",
        explanation: "Idea generation is the first step."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a business plan?",
        type: "short_answer",
        answer_key: "A document outlining business goals and strategies",
        explanation: "A business plan outlines a business's goals and strategies."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a source of funding for entrepreneurs?",
        type: "short_answer",
        answer_key: "Personal savings (or any valid)",
        explanation: "Personal savings is a source of funding."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is innovation?",
        type: "short_answer",
        answer_key: "Introducing something new",
        explanation: "Innovation is the process of introducing something new."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a risk of entrepreneurship?",
        type: "short_answer",
        answer_key: "Financial loss (or any valid)",
        explanation: "Financial loss is a risk of entrepreneurship."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a challenge of entrepreneurship?",
        type: "short_answer",
        answer_key: "Lack of funding (or any valid)",
        explanation: "Lack of funding is a challenge."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "What is social entrepreneurship?",
        type: "short_answer",
        answer_key: "Business with a social mission",
        explanation: "Social entrepreneurship is business with a social mission."
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
        "Understand entrepreneurship and its importance",
        "Identify characteristics of entrepreneurs",
        "Explain the entrepreneurial process",
        "Understand funding and social entrepreneurship"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is entrepreneurship?" },
        { time: "5-10 min", activity: "Direct Instruction - Characteristics of Entrepreneurs" },
        { time: "10-15 min", activity: "Direct Instruction - The Entrepreneurial Process" },
        { time: "15-20 min", activity: "Direct Instruction - Business Plans" },
        { time: "20-25 min", activity: "Direct Instruction - Sources of Funding" },
        { time: "25-30 min", activity: "Direct Instruction - Innovation and Creativity" },
        { time: "30-35 min", activity: "Direct Instruction - Risk and Reward" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Starting and managing a business",
        prac_002: "Passion",
        prac_003: "It creates jobs and drives growth",
        prac_004: "Idea generation",
        prac_005: "A document outlining business goals and strategies",
        prac_006: "All of the above",
        prac_007: "Introducing something new",
        prac_008: "Financial loss",
        prac_009: "It helps understand customers",
        prac_010: "All of the above",
        prac_011: "Increasing in size and revenue",
        prac_012: "It creates new opportunities",
        prac_013: "It helps build relationships",
        prac_014: "It creates jobs and drives innovation",
        prac_015: "Business with a social mission"
      },
      assessment: {
        ass_001: "Starting and managing a business",
        ass_002: "Passion (or any valid)",
        ass_003: "It creates jobs and drives growth",
        ass_004: "Idea generation",
        ass_005: "A document outlining business goals and strategies",
        ass_006: "Personal savings (or any valid)",
        ass_007: "Introducing something new",
        ass_008: "Financial loss (or any valid)",
        ass_009: "Lack of funding (or any valid)",
        ass_010: "Business with a social mission"
      }
    },
    extensionActivities: [
      "Research a successful entrepreneur",
      "Create a business idea",
      "Write a business plan",
      "Study social entrepreneurship"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Create a detailed business plan",
        "Research entrepreneurial ecosystems",
        "Study innovation management",
        "Analyze startup failures"
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
      title: "Entrepreneurial Process",
      description: "Diagram showing the entrepreneurial process",
      url: "/diagrams/entrepreneurial-process.png",
      alt: "Entrepreneurial process diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Sources of Funding",
      description: "Diagram showing sources of funding",
      url: "/diagrams/sources-of-funding.png",
      alt: "Sources of funding diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Characteristics of Entrepreneurs",
      description: "Diagram showing entrepreneurial characteristics",
      url: "/diagrams/entrepreneur-characteristics.png",
      alt: "Entrepreneur characteristics diagram"
    }
  ]
};