// Location: src/data/lessons/business/business_studies.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_business_studies",
  subject: "Business Studies",
  topic: "Business Studies",
  name: "Business Studies",
  icon: "💼",
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
    "Understanding of basic economics",
    "Interest in business",
    "Basic numeracy skills",
    "Understanding of society"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Commerce",
      file: "business/commerce.js"
    },
    {
      name: "Economics",
      file: "business/economics.js"
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
      description: "Define business studies and explain its importance",
      indicator: "Student can explain what business studies is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of business organizations",
      indicator: "Student can distinguish between sole proprietorship, partnership, and corporation"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of business resources",
      indicator: "Student can describe human, financial, and physical resources"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the functions of a business",
      indicator: "Student can describe production, marketing, finance, and human resources"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the business environment",
      indicator: "Student can explain internal and external factors affecting business"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of entrepreneurship",
      indicator: "Student can describe what it means to be an entrepreneur"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the importance of business ethics",
      indicator: "Student can explain ethical principles in business"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the role of business in society",
      indicator: "Student can describe how businesses contribute to society"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe business communication",
      indicator: "Student can explain effective communication in business"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the challenges of starting a business",
      indicator: "Student can discuss the difficulties entrepreneurs face"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain business planning and strategy",
      indicator: "Student can describe the importance of business planning"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of business growth",
      indicator: "Student can describe strategies for business growth"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the role of technology in business",
      indicator: "Student can explain how technology impacts business"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of corporate social responsibility",
      indicator: "Student can describe CSR and its importance"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of globalization on business",
      indicator: "Student can discuss how globalization affects businesses"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of financial management",
      indicator: "Student can describe key financial management concepts"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Describe business risk management",
      indicator: "Student can explain how businesses manage risk"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the future of business",
      indicator: "Student can discuss emerging trends in business"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Business Studies - The World of Commerce",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about business studies, business organizations, and how businesses operate."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Business Studies</h2>
      <p><strong>Business studies</strong> is the study of how businesses are organized, managed, and operated. It covers topics such as business ownership, management, marketing, finance, and the role of business in society. Understanding business is essential for success in the modern world.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💼 Key Concepts</h3>
          <ul>
            <li>✓ Business Organizations</li>
            <li>✓ Business Functions</li>
            <li>✓ Entrepreneurship</li>
            <li>✓ Business Environment</li>
            <li>✓ Business Ethics</li>
            <li>✓ Corporate Social Responsibility</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The first businesses were formed over 4,000 years ago</li>
            <li>• Nigeria has over 40 million businesses</li>
            <li>• Small businesses employ 60% of the workforce</li>
            <li>• Entrepreneurship is growing globally</li>
            <li>• Business ethics is increasingly important</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Business Studies Matters</h4>
        <p>Business studies helps us understand how businesses work, how to succeed in business, and how business impacts society.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Business Studies?",
        objective: "obj_001",
        text: `
          <h3>Understanding Business Studies</h3>
          <p><strong>Business studies</strong> is the academic study of business operations, management, and organizations. It covers how businesses function and how they interact with the environment.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Areas</h4>
              <ul>
                <li>• <strong>Management:</strong> Leading organizations</li>
                <li>• <strong>Marketing:</strong> Reaching customers</li>
                <li>• <strong>Finance:</strong> Managing money</li>
                <li>• <strong>Human resources:</strong> Managing people</li>
                <li>• <strong>Operations:</strong> Producing goods/services</li>
                <li>• <strong>Strategy:</strong> Planning for success</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Prepares for careers</li>
                <li>• Develops business skills</li>
                <li>• Understanding the economy</li>
                <li>• Entrepreneurial thinking</li>
                <li>• Decision-making skills</li>
                <li>• Financial literacy</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Business Organizations",
        objective: "obj_002",
        text: `
          <h3>Types of Business Organizations</h3>
          <p>Businesses can be organized in different ways.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sole Proprietorship</h4>
              <ul>
                <li>• Owned by one person</li>
                <li>• Simple to set up</li>
                <li>• Full control</li>
                <li>• Unlimited liability</li>
                <li>• All profits to owner</li>
                <li>• Example: Small shops</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Partnership</h4>
              <ul>
                <li>• Two or more owners</li>
                <li>• Shared control</li>
                <li>• Shared profits</li>
                <li>• Joint liability</li>
                <li>• Partnership agreement</li>
                <li>• Example: Law firms</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Corporation</h4>
              <ul>
                <li>• Owned by shareholders</li>
                <li>• Limited liability</li>
                <li>• Professional management</li>
                <li>• Can raise capital easily</li>
                <li>• Complex structure</li>
                <li>• Example: Large companies</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Cooperative</h4>
              <ul>
                <li>• Owned by members</li>
                <li>• Democratic control</li>
                <li>• Shared benefits</li>
                <li>• Member-focused</li>
                <li>• Example: Credit unions</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Franchise</h4>
              <ul>
                <li>• License to operate</li>
                <li>• Use of brand</li>
                <li>• Support from franchisor</li>
                <li>• Pay royalties</li>
                <li>• Example: Fast food chains</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>📌 NGO/Non-Profit</h4>
              <ul>
                <li>• Not for profit</li>
                <li>• Social mission</li>
                <li>• Funded by donations</li>
                <li>• Tax-exempt</li>
                <li>• Example: Charities</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Business Functions",
        objective: "obj_004",
        text: `
          <h3>Functions of a Business</h3>
          <p>Businesses perform several key functions to operate effectively.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Functions</h4>
              <ul>
                <li>• <strong>Production:</strong> Creating goods/services</li>
                <li>• <strong>Marketing:</strong> Promoting and selling</li>
                <li>• <strong>Finance:</strong> Managing money</li>
                <li>• <strong>Human Resources:</strong> Managing people</li>
                <li>• <strong>Operations:</strong> Day-to-day activities</li>
                <li>• <strong>Strategy:</strong> Long-term planning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Production creates value</li>
                <li>• Marketing generates sales</li>
                <li>• Finance ensures viability</li>
                <li>• HR manages talent</li>
                <li>• Operations ensure efficiency</li>
                <li>• Strategy guides direction</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Business Resources",
        objective: "obj_003",
        text: `
          <h3>Business Resources</h3>
          <p>Businesses need various resources to operate.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Human Resources</h4>
              <ul>
                <li>• Employees</li>
                <li>• Managers</li>
                <li>• Skills and expertise</li>
                <li>• Knowledge and experience</li>
                <li>• Creativity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Financial Resources</h4>
              <ul>
                <li>• Capital</li>
                <li>• Cash flow</li>
                <li>• Credit</li>
                <li>• Investments</li>
                <li>• Revenue</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Physical Resources</h4>
              <ul>
                <li>• Buildings</li>
                <li>• Equipment</li>
                <li>• Technology</li>
                <li>• Inventory</li>
                <li>• Supplies</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Entrepreneurship",
        objective: "obj_006",
        text: `
          <h3>Entrepreneurship</h3>
          <p><strong>Entrepreneurship</strong> is the process of starting and running a business.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics</h4>
              <ul>
                <li>• <strong>Innovation:</strong> New ideas</li>
                <li>• <strong>Risk-taking:</strong> Willing to take chances</li>
                <li>• <strong>Vision:</strong> Clear direction</li>
                <li>• <strong>Resilience:</strong> Overcoming challenges</li>
                <li>• <strong>Passion:</strong> Drive and dedication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Steps to Starting a Business</h4>
              <ul>
                <li>1. <strong>Idea generation:</strong> Finding a business idea</li>
                <li>2. <strong>Research:</strong> Testing the market</li>
                <li>3. <strong>Planning:</strong> Writing a business plan</li>
                <li>4. <strong>Funding:</strong> Raising capital</li>
                <li>5. <strong>Launch:</strong> Starting operations</li>
                <li>6. <strong>Growth:</strong> Scaling the business</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Business Environment",
        objective: "obj_005",
        text: `
          <h3>The Business Environment</h3>
          <p>Businesses operate in a complex environment with many factors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Internal Environment</h4>
              <ul>
                <li>• <strong>Employees:</strong> Skills and motivation</li>
                <li>• <strong>Management:</strong> Leadership and decisions</li>
                <li>• <strong>Culture:</strong> Values and norms</li>
                <li>• <strong>Resources:</strong> Available assets</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 External Environment</h4>
              <ul>
                <li>• <strong>Economic:</strong> Market conditions</li>
                <li>• <strong>Political:</strong> Government policies</li>
                <li>• <strong>Social:</strong> Demographic trends</li>
                <li>• <strong>Technological:</strong> Innovation</li>
                <li>• <strong>Legal:</strong> Regulations</li>
                <li>• <strong>Competitive:</strong> Rivals</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Business Ethics",
        objective: "obj_007",
        text: `
          <h3>Business Ethics</h3>
          <p><strong>Business ethics</strong> are moral principles that guide business behavior.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Honesty:</strong> Truthfulness</li>
                <li>• <strong>Integrity:</strong> Moral uprightness</li>
                <li>• <strong>Fairness:</strong> Justice</li>
                <li>• <strong>Transparency:</strong> Openness</li>
                <li>• <strong>Accountability:</strong> Responsibility</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Builds trust</li>
                <li>• Enhances reputation</li>
                <li>• Attracts customers</li>
                <li>• Prevents legal issues</li>
                <li>• Long-term success</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Corporate Social Responsibility",
        objective: "obj_014",
        text: `
          <h3>Corporate Social Responsibility (CSR)</h3>
          <p><strong>CSR</strong> is the commitment of businesses to contribute to sustainable development.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Areas of CSR</h4>
              <ul>
                <li>• <strong>Environmental:</strong> Sustainability</li>
                <li>• <strong>Social:</strong> Community engagement</li>
                <li>• <strong>Economic:</strong> Fair practices</li>
                <li>• <strong>Ethical:</strong> Ethical conduct</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Positive reputation</li>
                <li>• Customer loyalty</li>
                <li>• Employee satisfaction</li>
                <li>• Community support</li>
                <li>• Sustainable success</li>
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
          <h4>💼 Business Studies</h4>
          <ul>
            <li>• Types: sole proprietorship, partnership, corporation</li>
            <li>• Functions: production, marketing, finance, HR</li>
            <li>• Entrepreneurship: starting and running businesses</li>
            <li>• Business environment: internal and external factors</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Business ethics and CSR</li>
            <li>• Business resources</li>
            <li>• Role of business in society</li>
            <li>• Technology and globalization</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Business studies prepares us for the world of commerce and equips us with skills for success.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All businesses are for profit",
        correction: "Some businesses are non-profit organizations",
        explanation: "Non-profits exist for social missions, not profit."
      },
      {
        id: "mis_002",
        misconception: "Entrepreneurs are born, not made",
        correction: "Entrepreneurial skills can be learned",
        explanation: "Education and experience can develop entrepreneurial skills."
      },
      {
        id: "mis_003",
        misconception: "Business ethics is optional",
        correction: "Business ethics is essential for success",
        explanation: "Ethical behavior builds trust and long-term success."
      },
      {
        id: "mis_004",
        misconception: "Small businesses are not important",
        correction: "Small businesses are vital to the economy",
        explanation: "Small businesses employ most workers and drive innovation."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Career Preparation",
        description: "Business studies prepares for careers.",
        example: "Business management, entrepreneurship"
      },
      {
        id: "app_002",
        title: "Starting a Business",
        description: "Business studies helps start businesses.",
        example: "Business planning, funding"
      },
      {
        id: "app_003",
        title: "Financial Literacy",
        description: "Business studies teaches financial skills.",
        example: "Budgeting, investing"
      },
      {
        id: "app_004",
        title: "Understanding the Economy",
        description: "Business studies explains economic principles.",
        example: "Markets, competition"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Business", definition: "An organization that provides goods or services." },
    { term: "Sole Proprietorship", definition: "A business owned by one person." },
    { term: "Partnership", definition: "A business owned by two or more people." },
    { term: "Corporation", definition: "A business owned by shareholders." },
    { term: "Entrepreneur", definition: "A person who starts and runs a business." },
    { term: "Marketing", definition: "The process of promoting and selling products." },
    { term: "Finance", definition: "The management of money." },
    { term: "Human Resources", definition: "The management of employees." },
    { term: "Business Ethics", definition: "Moral principles in business." },
    { term: "CSR", definition: "Corporate Social Responsibility." },
    { term: "Innovation", definition: "Introducing something new." },
    { term: "Strategy", definition: "A plan to achieve goals." },
    { term: "Management", definition: "The process of leading an organization." },
    { term: "Operations", definition: "Day-to-day business activities." },
    { term: "Capital", definition: "Money or assets used in business." },
    { term: "Profit", definition: "Revenue minus expenses." },
    { term: "Revenue", definition: "Income from sales." },
    { term: "Expenses", definition: "Costs of doing business." },
    { term: "Market", definition: "A place where goods and services are exchanged." },
    { term: "Competition", definition: "Rivalry between businesses." }
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
      question: "What is business studies?",
      type: "multiple_choice",
      options: [
        "The study of economics",
        "The study of how businesses are organized and operated",
        "The study of history",
        "The study of geography"
      ],
      answer: "The study of how businesses are organized and operated",
      explanation: "Business studies is the study of how businesses are organized and operated."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a sole proprietorship?",
      type: "multiple_choice",
      options: [
        "A business owned by two or more people",
        "A business owned by one person",
        "A business owned by shareholders",
        "A non-profit organization"
      ],
      answer: "A business owned by one person",
      explanation: "A sole proprietorship is a business owned by one person."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a business resource?",
      type: "multiple_choice",
      options: [
        "Only money",
        "Human, financial, and physical resources",
        "Only employees",
        "Only buildings"
      ],
      answer: "Human, financial, and physical resources",
      explanation: "Business resources include human, financial, and physical resources."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a function of a business?",
      type: "multiple_choice",
      options: ["Production", "Marketing", "Finance", "All of the above"],
      answer: "All of the above",
      explanation: "Production, marketing, and finance are all functions of a business."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the external business environment?",
      type: "multiple_choice",
      options: [
        "Factors inside the business",
        "Factors outside the business",
        "Only employees",
        "Only customers"
      ],
      answer: "Factors outside the business",
      explanation: "The external business environment includes factors outside the business."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is entrepreneurship?",
      type: "multiple_choice",
      options: [
        "Working for a company",
        "Starting and running a business",
        "Investing in stocks",
        "Managing a team"
      ],
      answer: "Starting and running a business",
      explanation: "Entrepreneurship is starting and running a business."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is business ethics?",
      type: "multiple_choice",
      options: [
        "Moral principles in business",
        "Business laws",
        "Business strategies",
        "Business operations"
      ],
      answer: "Moral principles in business",
      explanation: "Business ethics are moral principles that guide business behavior."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the role of business in society?",
      type: "multiple_choice",
      options: [
        "To provide goods and services",
        "To create jobs",
        "To contribute to the economy",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Businesses provide goods, create jobs, and contribute to the economy."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is communication important in business?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It ensures effective operations",
        "It is optional",
        "It only benefits customers"
      ],
      answer: "It ensures effective operations",
      explanation: "Communication ensures effective operations in business."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a challenge of starting a business?",
      type: "multiple_choice",
      options: [
        "Funding",
        "Competition",
        "Regulations",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Funding, competition, and regulations are challenges of starting a business."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a business plan?",
      type: "multiple_choice",
      options: [
        "A document outlining business goals",
        "A financial statement",
        "A marketing strategy",
        "A legal document"
      ],
      answer: "A document outlining business goals",
      explanation: "A business plan outlines business goals and strategies."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How do businesses grow?",
      type: "multiple_choice",
      options: [
        "Through expansion",
        "Through innovation",
        "Through acquisition",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Businesses grow through expansion, innovation, and acquisition."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How does technology impact business?",
      type: "multiple_choice",
      options: [
        "It has no impact",
        "It improves efficiency",
        "It only impacts marketing",
        "It only impacts production"
      ],
      answer: "It improves efficiency",
      explanation: "Technology improves efficiency in business."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is corporate social responsibility?",
      type: "multiple_choice",
      options: [
        "A business strategy",
        "A commitment to sustainable development",
        "A legal requirement",
        "A marketing tactic"
      ],
      answer: "A commitment to sustainable development",
      explanation: "CSR is a commitment to contribute to sustainable development."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does globalization affect business?",
      type: "multiple_choice",
      options: [
        "It has no effect",
        "It expands markets",
        "It reduces competition",
        "It only affects large businesses"
      ],
      answer: "It expands markets",
      explanation: "Globalization expands markets for businesses."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_business_studies",
    title: "Business Studies Quiz",
    description: "Test your understanding of business studies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is business studies?",
        type: "short_answer",
        answer_key: "The study of how businesses are organized and operated",
        explanation: "Business studies is the study of how businesses are organized and operated."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a sole proprietorship?",
        type: "short_answer",
        answer_key: "A business owned by one person",
        explanation: "A sole proprietorship is owned by one person."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are business resources?",
        type: "short_answer",
        answer_key: "Human, financial, and physical resources",
        explanation: "Business resources include human, financial, and physical resources."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a function of a business?",
        type: "short_answer",
        answer_key: "Marketing (or any valid)",
        explanation: "Marketing is a function of a business."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the external business environment?",
        type: "short_answer",
        answer_key: "Factors outside the business",
        explanation: "The external environment includes factors outside the business."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is entrepreneurship?",
        type: "short_answer",
        answer_key: "Starting and running a business",
        explanation: "Entrepreneurship is starting and running a business."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is business ethics?",
        type: "short_answer",
        answer_key: "Moral principles in business",
        explanation: "Business ethics are moral principles in business."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the role of business in society?",
        type: "short_answer",
        answer_key: "To provide goods, create jobs, and contribute to the economy",
        explanation: "Businesses provide goods, create jobs, and contribute to the economy."
      },
      {
        id: "ass_009",
        objective: "obj_014",
        difficulty: "hard",
        question: "What is corporate social responsibility?",
        type: "short_answer",
        answer_key: "A commitment to sustainable development",
        explanation: "CSR is a commitment to contribute to sustainable development."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "How does globalization affect business?",
        type: "short_answer",
        answer_key: "It expands markets",
        explanation: "Globalization expands markets for businesses."
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
        "Understand business studies and its importance",
        "Explain types of business organizations",
        "Describe business functions",
        "Understand entrepreneurship and business ethics"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is business studies?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Business Organizations" },
        { time: "10-15 min", activity: "Direct Instruction - Business Functions" },
        { time: "15-20 min", activity: "Direct Instruction - Business Resources" },
        { time: "20-25 min", activity: "Direct Instruction - Entrepreneurship" },
        { time: "25-30 min", activity: "Direct Instruction - Business Environment" },
        { time: "30-35 min", activity: "Direct Instruction - Business Ethics and CSR" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of how businesses are organized and operated",
        prac_002: "A business owned by one person",
        prac_003: "Human, financial, and physical resources",
        prac_004: "All of the above",
        prac_005: "Factors outside the business",
        prac_006: "Starting and running a business",
        prac_007: "Moral principles in business",
        prac_008: "All of the above",
        prac_009: "It ensures effective operations",
        prac_010: "All of the above",
        prac_011: "A document outlining business goals",
        prac_012: "All of the above",
        prac_013: "It improves efficiency",
        prac_014: "A commitment to sustainable development",
        prac_015: "It expands markets"
      },
      assessment: {
        ass_001: "The study of how businesses are organized and operated",
        ass_002: "A business owned by one person",
        ass_003: "Human, financial, and physical resources",
        ass_004: "Marketing (or any valid)",
        ass_005: "Factors outside the business",
        ass_006: "Starting and running a business",
        ass_007: "Moral principles in business",
        ass_008: "To provide goods, create jobs, and contribute to the economy",
        ass_009: "A commitment to sustainable development",
        ass_010: "It expands markets"
      }
    },
    extensionActivities: [
      "Research a successful business",
      "Create a business idea",
      "Analyze a business case study",
      "Visit a local business"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Create a business plan",
        "Research entrepreneurship",
        "Study business ethics",
        "Analyze business strategies"
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
      title: "Types of Business Organizations",
      description: "Diagram showing types of business organizations",
      url: "/diagrams/business-organizations.png",
      alt: "Business organizations diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Business Functions",
      description: "Diagram showing business functions",
      url: "/diagrams/business-functions.png",
      alt: "Business functions diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Business Environment",
      description: "Diagram showing the business environment",
      url: "/diagrams/business-environment.png",
      alt: "Business environment diagram"
    }
  ]
};