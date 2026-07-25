// Location: src/data/lessons/business/marketing.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bus_lesson_marketing",
  subject: "Marketing",
  topic: "Marketing",
  name: "Marketing",
  icon: "📢",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 17,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of business basics",
    "Interest in marketing",
    "Creativity and communication skills",
    "Understanding of customers"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Bookkeeping",
      file: "business/accounting/bookkeeping.js"
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
      description: "Define marketing and explain its importance",
      indicator: "Student can explain what marketing is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the core concepts of marketing",
      indicator: "Student can describe needs, wants, and demands"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the marketing mix (4 Ps)",
      indicator: "Student can describe product, price, place, and promotion"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the marketing process",
      indicator: "Student can explain the steps in the marketing process"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain market research and its importance",
      indicator: "Student can describe how to conduct market research"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe market segmentation",
      indicator: "Student can explain how to segment markets"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of branding",
      indicator: "Student can describe what a brand is and why it matters"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe advertising and promotion",
      indicator: "Student can explain different promotional strategies"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the importance of customer service",
      indicator: "Student can describe why customer service is essential"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze consumer behavior",
      indicator: "Student can explain factors influencing consumer decisions"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain digital marketing",
      indicator: "Student can describe online marketing strategies"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe social media marketing",
      indicator: "Student can explain how social media is used in marketing"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of marketing ethics",
      indicator: "Student can describe ethical issues in marketing"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the marketing environment",
      indicator: "Student can explain factors affecting marketing"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the role of marketing in business success",
      indicator: "Student can discuss how marketing contributes to business success"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain marketing in Nigeria",
      indicator: "Student can discuss marketing practices in Nigeria"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the future of marketing",
      indicator: "Student can discuss emerging trends in marketing"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Marketing - Reaching Customers",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about marketing, the marketing mix, and how to reach customers effectively."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Marketing</h2>
      <p><strong>Marketing</strong> is the process of creating, communicating, and delivering value to customers. It involves understanding customer needs, developing products, and promoting them effectively. Marketing is essential for business success and customer satisfaction.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📢 Key Concepts</h3>
          <ul>
            <li>✓ The Marketing Mix (4 Ps)</li>
            <li>✓ Market Research</li>
            <li>✓ Market Segmentation</li>
            <li>✓ Branding</li>
            <li>✓ Advertising and Promotion</li>
            <li>✓ Digital Marketing</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Marketing has existed for thousands of years</li>
            <li>• The 4 Ps were introduced in the 1960s</li>
            <li>• Digital marketing is growing rapidly</li>
            <li>• Branding can increase product value</li>
            <li>• Customer service is part of marketing</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Marketing Matters</h4>
        <p>Marketing helps businesses reach customers, build relationships, and grow. It is essential for success in today's competitive market.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Marketing?",
        objective: "obj_001",
        text: `
          <h3>Understanding Marketing</h3>
          <p><strong>Marketing</strong> is the process of identifying, anticipating, and satisfying customer needs profitably.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Needs:</strong> Basic human requirements</li>
                <li>• <strong>Wants:</strong> Desires for specific products</li>
                <li>• <strong>Demands:</strong> Wants backed by purchasing power</li>
                <li>• <strong>Value:</strong> Customer satisfaction</li>
                <li>• <strong>Exchange:</strong> Trading something for value</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Creates awareness</li>
                <li>• Builds relationships</li>
                <li>• Drives sales</li>
                <li>• Builds brands</li>
                <li>• Creates value</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Marketing Mix (4 Ps)",
        objective: "obj_003",
        text: `
          <h3>The Marketing Mix - 4 Ps</h3>
          <p>The <strong>marketing mix</strong> is a framework for developing marketing strategies.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>📌 Product</h4>
              <ul class="text-left">
                <li>• What you sell</li>
                <li>• Design and features</li>
                <li>• Quality and packaging</li>
                <li>• Branding</li>
                <li>• Product variety</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>📌 Price</h4>
              <ul class="text-left">
                <li>• How much you charge</li>
                <li>• Pricing strategy</li>
                <li>• Discounts</li>
                <li>• Payment terms</li>
                <li>• Competitor pricing</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>📌 Place</h4>
              <ul class="text-left">
                <li>• Where you sell</li>
                <li>• Distribution channels</li>
                <li>• Retail locations</li>
                <li>• Online presence</li>
                <li>• Logistics</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded text-center">
              <h4>📌 Promotion</h4>
              <ul class="text-left">
                <li>• How you communicate</li>
                <li>• Advertising</li>
                <li>• Public relations</li>
                <li>• Sales promotion</li>
                <li>• Digital marketing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Market Research",
        objective: "obj_005",
        text: `
          <h3>Market Research</h3>
          <p><strong>Market research</strong> is the process of gathering information about customers and markets.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Research</h4>
              <ul>
                <li>• <strong>Primary research:</strong> Direct data collection</li>
                <li>• <strong>Secondary research:</strong> Using existing data</li>
                <li>• <strong>Quantitative research:</strong> Numerical data</li>
                <li>• <strong>Qualitative research:</strong> Opinions and insights</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Methods</h4>
              <ul>
                <li>• <strong>Surveys:</strong> Questionnaires</li>
                <li>• <strong>Interviews:</strong> One-on-one</li>
                <li>• <strong>Focus groups:</strong> Group discussions</li>
                <li>• <strong>Observations:</strong> Watching behavior</li>
                <li>• <strong>Online research:</strong> Digital tools</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Market Segmentation",
        objective: "obj_006",
        text: `
          <h3>Market Segmentation</h3>
          <p><strong>Market segmentation</strong> is dividing a market into distinct groups of customers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Segmentation</h4>
              <ul>
                <li>• <strong>Demographic:</strong> Age, gender, income</li>
                <li>• <strong>Geographic:</strong> Location, region</li>
                <li>• <strong>Psychographic:</strong> Lifestyle, personality</li>
                <li>• <strong>Behavioral:</strong> Buying behavior</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Target specific customers</li>
                <li>• Develop tailored products</li>
                <li>• Improve marketing effectiveness</li>
                <li>• Increase customer satisfaction</li>
                <li>• Gain competitive advantage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Branding",
        objective: "obj_007",
        text: `
          <h3>Branding</h3>
          <p>A <strong>brand</strong> is a name, symbol, or design that identifies a product or company.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Elements</h4>
              <ul>
                <li>• <strong>Name:</strong> The brand name</li>
                <li>• <strong>Logo:</strong> Visual symbol</li>
                <li>• <strong>Tagline:</strong> Slogan</li>
                <li>• <strong>Identity:</strong> Brand personality</li>
                <li>• <strong>Values:</strong> What the brand stands for</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Customer recognition</li>
                <li>• Loyalty and trust</li>
                <li>• Premium pricing</li>
                <li>• Competitive advantage</li>
                <li>• Brand equity</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Advertising and Promotion",
        objective: "obj_008",
        text: `
          <h3>Advertising and Promotion</h3>
          <p><strong>Advertising</strong> is paid communication to promote products. <strong>Promotion</strong> includes all activities to communicate with customers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Advertising Media</h4>
              <ul>
                <li>• <strong>TV and radio:</strong> Broad reach</li>
                <li>• <strong>Print:</strong> Newspapers, magazines</li>
                <li>• <strong>Outdoor:</strong> Billboards, posters</li>
                <li>• <strong>Digital:</strong> Online ads, social media</li>
                <li>• <strong>Direct:</strong> Email, mail</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Promotional Activities</h4>
              <ul>
                <li>• <strong>Sales promotions:</strong> Discounts, offers</li>
                <li>• <strong>Public relations:</strong> Building image</li>
                <li>• <strong>Personal selling:</strong> Direct sales</li>
                <li>• <strong>Digital marketing:</strong> Online promotion</li>
                <li>• <strong>Events:</strong> Sponsorships, events</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Digital Marketing",
        objective: "obj_011",
        text: `
          <h3>Digital Marketing</h3>
          <p><strong>Digital marketing</strong> is marketing using digital channels and technologies.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Digital Channels</h4>
              <ul>
                <li>• <strong>Websites:</strong> Business websites</li>
                <li>• <strong>Social media:</strong> Facebook, Instagram, Twitter</li>
                <li>• <strong>Search engines:</strong> SEO, SEM</li>
                <li>• <strong>Email:</strong> Email marketing</li>
                <li>• <strong>Mobile:</strong> Apps, SMS</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• Reach global audiences</li>
                <li>• Cost-effective</li>
                <li>• Measurable results</li>
                <li>• Targeted marketing</li>
                <li>• 24/7 availability</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Customer Service",
        objective: "obj_009",
        text: `
          <h3>Customer Service</h3>
          <p><strong>Customer service</strong> is the support provided to customers before, during, and after a purchase.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Responsiveness:</strong> Quick response</li>
                <li>• <strong>Helpfulness:</strong> Solving problems</li>
                <li>• <strong>Friendliness:</strong> Positive attitude</li>
                <li>• <strong>Knowledge:</strong> Product expertise</li>
                <li>• <strong>Follow-up:</strong> After-sales support</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Importance</h4>
              <ul>
                <li>• Customer satisfaction</li>
                <li>• Loyalty and retention</li>
                <li>• Positive reputation</li>
                <li>• Repeat business</li>
                <li>• Word-of-mouth referrals</li>
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
          <h4>📢 Marketing</h4>
          <ul>
            <li>• The marketing mix: Product, Price, Place, Promotion</li>
            <li>• Market research: understanding customers</li>
            <li>• Market segmentation: targeting specific groups</li>
            <li>• Branding: creating identity and value</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Advertising and promotion</li>
            <li>• Digital marketing</li>
            <li>• Customer service</li>
            <li>• Marketing in Nigeria</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Marketing is about understanding and satisfying customer needs. It is essential for business success.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Marketing and advertising are the same",
        correction: "Advertising is just one part of marketing",
        explanation: "Marketing includes research, product development, pricing, distribution, and promotion."
      },
      {
        id: "mis_002",
        misconception: "Marketing is only about selling",
        correction: "Marketing is about creating value for customers",
        explanation: "Marketing focuses on customer needs and satisfaction."
      },
      {
        id: "mis_003",
        misconception: "Marketing is only for businesses",
        correction: "Marketing is used by all types of organizations",
        explanation: "Non-profits, governments, and individuals also use marketing."
      },
      {
        id: "mis_004",
        misconception: "Digital marketing is replacing traditional marketing",
        correction: "Digital and traditional marketing complement each other",
        explanation: "Both are used together for effective marketing."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business Growth",
        description: "Marketing helps businesses grow.",
        example: "Reaching new customers, increasing sales"
      },
      {
        id: "app_002",
        title: "Brand Building",
        description: "Marketing builds brands.",
        example: "Creating brand awareness and loyalty"
      },
      {
        id: "app_003",
        title: "Customer Relationships",
        description: "Marketing builds customer relationships.",
        example: "Customer service, communication"
      },
      {
        id: "app_004",
        title: "Product Success",
        description: "Marketing ensures product success.",
        example: "Product launch, market acceptance"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Marketing", definition: "The process of creating and delivering value to customers." },
    { term: "Marketing Mix", definition: "The 4 Ps: Product, Price, Place, Promotion." },
    { term: "Market Research", definition: "Gathering information about customers and markets." },
    { term: "Market Segmentation", definition: "Dividing a market into distinct groups." },
    { term: "Brand", definition: "A name, symbol, or design identifying a product." },
    { term: "Advertising", definition: "Paid communication to promote products." },
    { term: "Promotion", definition: "Activities to communicate with customers." },
    { term: "Digital Marketing", definition: "Marketing using digital channels." },
    { term: "Customer Service", definition: "Support provided to customers." },
    { term: "Target Market", definition: "The specific group a business aims to reach." },
    { term: "Positioning", definition: "How a product is perceived." },
    { term: "Value", definition: "The benefit customers receive." },
    { term: "Brand Loyalty", definition: "Customer commitment to a brand." },
    { term: "Marketing Strategy", definition: "A plan to achieve marketing goals." },
    { term: "Consumer Behavior", definition: "How consumers make decisions." },
    { term: "Social Media Marketing", definition: "Marketing using social media." },
    { term: "Content Marketing", definition: "Creating valuable content." },
    { term: "SEO", definition: "Search Engine Optimization." },
    { term: "Public Relations", definition: "Building a positive image." },
    { term: "Sales Promotion", definition: "Short-term incentives to encourage purchase." }
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
      question: "What is marketing?",
      type: "multiple_choice",
      options: [
        "The process of selling products",
        "The process of creating and delivering value to customers",
        "The process of managing money",
        "The process of hiring employees"
      ],
      answer: "The process of creating and delivering value to customers",
      explanation: "Marketing is the process of creating and delivering value to customers."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a need in marketing?",
      type: "multiple_choice",
      options: [
        "A basic human requirement",
        "A specific product",
        "A desire for a product",
        "A purchase"
      ],
      answer: "A basic human requirement",
      explanation: "A need is a basic human requirement."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What are the 4 Ps of marketing?",
      type: "multiple_choice",
      options: [
        "Product, Price, Place, Promotion",
        "Product, Price, People, Promotion",
        "Product, Place, People, Profit",
        "Price, Place, Promotion, Profit"
      ],
      answer: "Product, Price, Place, Promotion",
      explanation: "The 4 Ps are Product, Price, Place, and Promotion."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in the marketing process?",
      type: "multiple_choice",
      options: [
        "Promotion",
        "Market research",
        "Pricing",
        "Distribution"
      ],
      answer: "Market research",
      explanation: "Market research is the first step in the marketing process."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is market research?",
      type: "multiple_choice",
      options: [
        "Gathering information about customers and markets",
        "Selling products",
        "Advertising products",
        "Pricing products"
      ],
      answer: "Gathering information about customers and markets",
      explanation: "Market research is gathering information about customers and markets."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is market segmentation?",
      type: "multiple_choice",
      options: [
        "Dividing a market into distinct groups",
        "Selling to all customers",
        "Creating a brand",
        "Setting prices"
      ],
      answer: "Dividing a market into distinct groups",
      explanation: "Market segmentation is dividing a market into distinct groups."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a brand?",
      type: "multiple_choice",
      options: [
        "A name, symbol, or design identifying a product",
        "A type of marketing",
        "A pricing strategy",
        "A distribution channel"
      ],
      answer: "A name, symbol, or design identifying a product",
      explanation: "A brand is a name, symbol, or design identifying a product."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is advertising?",
      type: "multiple_choice",
      options: [
        "Paid communication to promote products",
        "Free promotion",
        "Product development",
        "Market research"
      ],
      answer: "Paid communication to promote products",
      explanation: "Advertising is paid communication to promote products."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why is customer service important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It builds customer satisfaction and loyalty",
        "It only helps large businesses",
        "It is optional"
      ],
      answer: "It builds customer satisfaction and loyalty",
      explanation: "Customer service builds satisfaction and loyalty."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What influences consumer behavior?",
      type: "multiple_choice",
      options: [
        "Culture",
        "Social factors",
        "Personal factors",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Culture, social factors, and personal factors influence consumer behavior."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is digital marketing?",
      type: "multiple_choice",
      options: [
        "Marketing using digital channels",
        "Traditional marketing",
        "Marketing without technology",
        "Print advertising"
      ],
      answer: "Marketing using digital channels",
      explanation: "Digital marketing uses digital channels to reach customers."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is social media marketing?",
      type: "multiple_choice",
      options: [
        "Marketing using social media platforms",
        "Marketing on TV",
        "Print advertising",
        "Email marketing"
      ],
      answer: "Marketing using social media platforms",
      explanation: "Social media marketing uses social media platforms."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is marketing ethics?",
      type: "multiple_choice",
      options: [
        "Ethical issues in marketing",
        "Marketing strategy",
        "Pricing strategy",
        "Distribution strategy"
      ],
      answer: "Ethical issues in marketing",
      explanation: "Marketing ethics deals with ethical issues in marketing."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the marketing environment?",
      type: "multiple_choice",
      options: [
        "Factors affecting marketing",
        "The 4 Ps",
        "Market research",
        "Customer service"
      ],
      answer: "Factors affecting marketing",
      explanation: "The marketing environment includes factors affecting marketing."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does marketing contribute to business success?",
      type: "multiple_choice",
      options: [
        "It has no role",
        "It helps reach customers and build brands",
        "It only helps large businesses",
        "It only helps new businesses"
      ],
      answer: "It helps reach customers and build brands",
      explanation: "Marketing helps reach customers and build brands."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_marketing",
    title: "Marketing Quiz",
    description: "Test your understanding of marketing",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is marketing?",
        type: "short_answer",
        answer_key: "The process of creating and delivering value to customers",
        explanation: "Marketing is the process of creating and delivering value to customers."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a need in marketing?",
        type: "short_answer",
        answer_key: "A basic human requirement",
        explanation: "A need is a basic human requirement."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What are the 4 Ps of marketing?",
        type: "short_answer",
        answer_key: "Product, Price, Place, Promotion",
        explanation: "The 4 Ps are Product, Price, Place, and Promotion."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in the marketing process?",
        type: "short_answer",
        answer_key: "Market research",
        explanation: "Market research is the first step."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is market research?",
        type: "short_answer",
        answer_key: "Gathering information about customers and markets",
        explanation: "Market research is gathering information about customers and markets."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is market segmentation?",
        type: "short_answer",
        answer_key: "Dividing a market into distinct groups",
        explanation: "Market segmentation is dividing a market into distinct groups."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a brand?",
        type: "short_answer",
        answer_key: "A name, symbol, or design identifying a product",
        explanation: "A brand is a name, symbol, or design identifying a product."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is advertising?",
        type: "short_answer",
        answer_key: "Paid communication to promote products",
        explanation: "Advertising is paid communication to promote products."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Why is customer service important?",
        type: "short_answer",
        answer_key: "It builds customer satisfaction and loyalty",
        explanation: "Customer service builds satisfaction and loyalty."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is digital marketing?",
        type: "short_answer",
        answer_key: "Marketing using digital channels",
        explanation: "Digital marketing uses digital channels."
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
        "Understand marketing and its importance",
        "Explain the marketing mix (4 Ps)",
        "Describe market research and segmentation",
        "Understand branding, advertising, and digital marketing"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is marketing?" },
        { time: "5-10 min", activity: "Direct Instruction - The 4 Ps" },
        { time: "10-15 min", activity: "Direct Instruction - Market Research" },
        { time: "15-20 min", activity: "Direct Instruction - Market Segmentation" },
        { time: "20-25 min", activity: "Direct Instruction - Branding" },
        { time: "25-30 min", activity: "Direct Instruction - Advertising and Promotion" },
        { time: "30-35 min", activity: "Direct Instruction - Digital Marketing" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The process of creating and delivering value to customers",
        prac_002: "A basic human requirement",
        prac_003: "Product, Price, Place, Promotion",
        prac_004: "Market research",
        prac_005: "Gathering information about customers and markets",
        prac_006: "Dividing a market into distinct groups",
        prac_007: "A name, symbol, or design identifying a product",
        prac_008: "Paid communication to promote products",
        prac_009: "It builds customer satisfaction and loyalty",
        prac_010: "All of the above",
        prac_011: "Marketing using digital channels",
        prac_012: "Marketing using social media platforms",
        prac_013: "Ethical issues in marketing",
        prac_014: "Factors affecting marketing",
        prac_015: "It helps reach customers and build brands"
      },
      assessment: {
        ass_001: "The process of creating and delivering value to customers",
        ass_002: "A basic human requirement",
        ass_003: "Product, Price, Place, Promotion",
        ass_004: "Market research",
        ass_005: "Gathering information about customers and markets",
        ass_006: "Dividing a market into distinct groups",
        ass_007: "A name, symbol, or design identifying a product",
        ass_008: "Paid communication to promote products",
        ass_009: "It builds customer satisfaction and loyalty",
        ass_010: "Marketing using digital channels"
      }
    },
    extensionActivities: [
      "Create a marketing plan",
      "Research a brand",
      "Analyze an advertisement",
      "Study a marketing campaign"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Create a marketing campaign",
        "Research digital marketing strategies",
        "Analyze consumer behavior",
        "Study marketing ethics"
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
      title: "The 4 Ps of Marketing",
      description: "Diagram showing the marketing mix",
      url: "/diagrams/4ps-marketing.png",
      alt: "4 Ps of marketing diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Marketing Process",
      description: "Diagram showing the marketing process",
      url: "/diagrams/marketing-process.png",
      alt: "Marketing process diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Market Segmentation",
      description: "Diagram showing market segmentation",
      url: "/diagrams/market-segmentation.png",
      alt: "Market segmentation diagram"
    }
  ]
};