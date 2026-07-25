// Location: src/data/lessons/science/information_technology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "it_lesson_information_technology",
  subject: "Information Technology",
  topic: "Information Technology",
  name: "Information Technology",
  icon: "💻",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 20,
    totalPracticeQuestions: 28,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 22,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of computer basics",
    "Knowledge of computer hardware and software",
    "Basic digital literacy",
    "Interest in technology"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more IT lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define information technology and explain its importance",
      indicator: "Student can explain what IT is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the components of an information system",
      indicator: "Student can describe the parts of an information system"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between data and information",
      indicator: "Student can distinguish between data and information"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe computer hardware components",
      indicator: "Student can identify and describe computer hardware"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe computer software types",
      indicator: "Student can distinguish between system and application software"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain computer networks and the internet",
      indicator: "Student can describe how networks and the internet work"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain database concepts",
      indicator: "Student can describe what databases are and how they work"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe cybersecurity concepts",
      indicator: "Student can explain how to protect information systems"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of cloud computing",
      indicator: "Student can describe cloud computing and its benefits"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Describe emerging technologies",
      indicator: "Student can identify new technologies like AI and IoT"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the information processing cycle",
      indicator: "Student can describe the stages of information processing"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain system development life cycle",
      indicator: "Student can describe SDLC phases"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the impact of IT on society",
      indicator: "Student can discuss how IT affects society"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain IT governance and ethics",
      indicator: "Student can describe the ethical use of IT"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe data management and analytics",
      indicator: "Student can explain big data and data analytics"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the role of IT in business",
      indicator: "Student can describe how businesses use IT"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Describe e-commerce and digital marketing",
      indicator: "Student can explain online business and marketing"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain IT project management",
      indicator: "Student can describe project management in IT"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Describe the future of information technology",
      indicator: "Student can discuss future IT trends"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Analyze career opportunities in IT",
      indicator: "Student can describe IT career paths"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Information Technology - The Digital Revolution",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about information technology, its components, and its impact on the world."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Information Technology</h2>
      <p><strong>Information Technology (IT)</strong> is the use of computers, networks, and other technologies to store, retrieve, transmit, and manipulate data. IT has become an essential part of modern life, transforming how we work, communicate, and live.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💻 Key Concepts</h3>
          <ul>
            <li>✓ Information Systems</li>
            <li>✓ Data and Information</li>
            <li>✓ Hardware and Software</li>
            <li>✓ Networks and Internet</li>
            <li>✓ Cybersecurity</li>
            <li>✓ Cloud Computing</li>
            <li>✓ Emerging Technologies</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• 4.9 billion people use the internet</li>
            <li>• The first computer was built in 1945</li>
            <li>• Over 1 billion websites exist</li>
            <li>• 90% of data was created in the last 2 years</li>
            <li>• IT is one of the fastest-growing industries</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why IT Matters</h4>
        <p>Information technology powers almost every aspect of modern life, from communication and entertainment to business and healthcare.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Information Technology?",
        objective: "obj_001",
        text: `
          <h3>Understanding Information Technology</h3>
          <p>Information Technology (IT) is the use of technology to manage and process information.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 IT Components</h4>
              <ul>
                <li>• <strong>Hardware:</strong> Physical devices</li>
                <li>• <strong>Software:</strong> Programs and applications</li>
                <li>• <strong>Networks:</strong> Communication systems</li>
                <li>• <strong>Data:</strong> Raw facts and figures</li>
                <li>• <strong>People:</strong> Users and professionals</li>
                <li>• <strong>Processes:</strong> Procedures and methods</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 IT Applications</h4>
              <ul>
                <li>• <strong>Business:</strong> Management, operations</li>
                <li>• <strong>Education:</strong> E-learning, research</li>
                <li>• <strong>Healthcare:</strong> Records, telemedicine</li>
                <li>• <strong>Entertainment:</strong> Streaming, gaming</li>
                <li>• <strong>Government:</strong> E-government, services</li>
                <li>• <strong>Communication:</strong> Social media, email</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Data vs Information",
        objective: "obj_003",
        text: `
          <h3>Data vs Information</h3>
          <p>Understanding the difference between data and information is fundamental in IT.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Data</h4>
              <ul>
                <li>• Raw facts and figures</li>
                <li>• No meaning on its own</li>
                <li>• Examples:</li>
                <li>• 25, "Jane", "Lagos"</li>
                <li>• Unorganized</li>
                <li>• Input to a system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Information</h4>
              <ul>
                <li>• Processed data</li>
                <li>• Has meaning and context</li>
                <li>• Examples:</li>
                <li>• "Jane is 25 years old and lives in Lagos"</li>
                <li>• Organized</li>
                <li>• Output from a system</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Information Processing Cycle",
        objective: "obj_011",
        text: `
          <h3>Information Processing Cycle</h3>
          <p>The information processing cycle describes how data is transformed into information.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages</h4>
              <ul>
                <li>• <strong>Input:</strong> Entering data</li>
                <li>• <strong>Processing:</strong> Manipulating data</li>
                <li>• <strong>Storage:</strong> Saving data</li>
                <li>• <strong>Output:</strong> Presenting information</li>
                <li>• <strong>Communication:</strong> Sharing information</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Input:</strong> Typing data</li>
                <li>• <strong>Processing:</strong> Calculations</li>
                <li>• <strong>Storage:</strong> Database</li>
                <li>• <strong>Output:</strong> Reports</li>
                <li>• <strong>Communication:</strong> Email, sharing</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Computer Hardware",
        objective: "obj_004",
        text: `
          <h3>Computer Hardware</h3>
          <p>Hardware is the physical components of a computer system.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Internal Hardware</h4>
              <ul>
                <li>• <strong>CPU:</strong> Central Processing Unit (brain)</li>
                <li>• <strong>RAM:</strong> Random Access Memory</li>
                <li>• <strong>ROM:</strong> Read-Only Memory</li>
                <li>• <strong>Motherboard:</strong> Main circuit board</li>
                <li>• <strong>Hard drive:</strong> Storage device</li>
                <li>• <strong>Power supply:</strong> Electricity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 External Hardware</h4>
              <ul>
                <li>• <strong>Monitor:</strong> Display screen</li>
                <li>• <strong>Keyboard:</strong> Input device</li>
                <li>• <strong>Mouse:</strong> Pointing device</li>
                <li>• <strong>Printer:</strong> Output device</li>
                <li>• <strong>Scanner:</strong> Input device</li>
                <li>• <strong>Speakers:</strong> Audio output</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Computer Software",
        objective: "obj_005",
        text: `
          <h3>Computer Software</h3>
          <p>Software is the programs and applications that run on a computer.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 System Software</h4>
              <ul>
                <li>• <strong>Operating systems:</strong> Windows, macOS, Linux</li>
                <li>• <strong>Device drivers:</strong> Hardware control</li>
                <li>• <strong>Utilities:</strong> Antivirus, file management</li>
                <li>• <strong>Servers:</strong> Network services</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Application Software</h4>
              <ul>
                <li>• <strong>Word processors:</strong> Microsoft Word</li>
                <li>• <strong>Spreadsheets:</strong> Excel</li>
                <li>• <strong>Browsers:</strong> Chrome, Firefox</li>
                <li>• <strong>Email clients:</strong> Outlook</li>
                <li>• <strong>Games:</strong> Entertainment</li>
                <li>• <strong>Apps:</strong> Mobile applications</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Computer Networks",
        objective: "obj_006",
        text: `
          <h3>Computer Networks and the Internet</h3>
          <p>Networks connect computers and devices for communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Network Types</h4>
              <ul>
                <li>• <strong>LAN:</strong> Local Area Network</li>
                <li>• <strong>WAN:</strong> Wide Area Network</li>
                <li>• <strong>MAN:</strong> Metropolitan Area Network</li>
                <li>• <strong>PAN:</strong> Personal Area Network</li>
                <li>• <strong>WLAN:</strong> Wireless LAN</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Internet</h4>
              <ul>
                <li>• <strong>Global network</strong> of networks</li>
                <li>• <strong>World Wide Web:</strong> Information system</li>
                <li>• <strong>Protocols:</strong> TCP/IP, HTTP, HTTPS</li>
                <li>• <strong>Services:</strong> Email, web, file sharing</li>
                <li>• <strong>ISP:</strong> Internet Service Provider</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Databases",
        objective: "obj_007",
        text: `
          <h3>Databases</h3>
          <p>Databases are organized collections of data for easy access and management.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Database Concepts</h4>
              <ul>
                <li>• <strong>Relational databases:</strong> Tables and rows</li>
                <li>• <strong>SQL:</strong> Structured Query Language</li>
                <li>• <strong>Primary key:</strong> Unique identifier</li>
                <li>• <strong>Foreign key:</strong> Relationship link</li>
                <li>• <strong>Queries:</strong> Data requests</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Database Management Systems</h4>
              <ul>
                <li>• <strong>MySQL:</strong> Open-source</li>
                <li>• <strong>PostgreSQL:</strong> Advanced</li>
                <li>• <strong>Oracle:</strong> Enterprise</li>
                <li>• <strong>SQLite:</strong> Lightweight</li>
                <li>• <strong>MongoDB:</strong> NoSQL</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Cybersecurity",
        objective: "obj_008",
        text: `
          <h3>Cybersecurity</h3>
          <p>Cybersecurity protects information systems from threats.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Threats</h4>
              <ul>
                <li>• <strong>Malware:</strong> Viruses, worms, trojans</li>
                <li>• <strong>Phishing:</strong> Fake emails</li>
                <li>• <strong>Hacking:</strong> Unauthorized access</li>
                <li>• <strong>Ransomware:</strong> Data encryption</li>
                <li>• <strong>DDoS:</strong> Overload attacks</li>
                <li>• <strong>Social engineering:</strong> Manipulation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Protection</h4>
              <ul>
                <li>• <strong>Firewalls:</strong> Block unauthorized access</li>
                <li>• <strong>Antivirus:</strong> Detect and remove malware</li>
                <li>• <strong>Encryption:</strong> Protect data</li>
                <li>• <strong>Authentication:</strong> Passwords, 2FA</li>
                <li>• <strong>Backups:</strong> Data recovery</li>
                <li>• <strong>Education:</strong> User awareness</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Cloud Computing",
        objective: "obj_009",
        text: `
          <h3>Cloud Computing</h3>
          <p>Cloud computing delivers computing services over the internet.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Service Models</h4>
              <ul>
                <li>• <strong>IaaS:</strong> Infrastructure as a Service</li>
                <li>• <strong>PaaS:</strong> Platform as a Service</li>
                <li>• <strong>SaaS:</strong> Software as a Service</li>
                <li>• Examples:</li>
                <li>• IaaS: AWS, Azure</li>
                <li>• PaaS: Google App Engine</li>
                <li>• SaaS: Google Drive, Office 365</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• <strong>Scalability:</strong> Flexible resources</li>
                <li>• <strong>Cost-effective:</strong> Pay-as-you-go</li>
                <li>• <strong>Accessibility:</strong> Anywhere access</li>
                <li>• <strong>Reliability:</strong> Backup and redundancy</li>
                <li>• <strong>Collaboration:</strong> Teamwork</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Emerging Technologies",
        objective: "obj_010",
        text: `
          <h3>Emerging Technologies</h3>
          <p>New technologies are transforming the IT landscape.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Technologies</h4>
              <ul>
                <li>• <strong>AI:</strong> Artificial Intelligence</li>
                <li>• <strong>Machine Learning:</strong> Learning from data</li>
                <li>• <strong>IoT:</strong> Internet of Things</li>
                <li>• <strong>Blockchain:</strong> Distributed ledger</li>
                <li>• <strong>5G:</strong> Next-gen mobile networks</li>
                <li>• <strong>Quantum computing:</strong> Advanced computing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>AI:</strong> Chatbots, automation</li>
                <li>• <strong>IoT:</strong> Smart homes, wearables</li>
                <li>• <strong>Blockchain:</strong> Cryptocurrency, tracking</li>
                <li>• <strong>5G:</strong> Faster internet</li>
                <li>• <strong>Quantum:</strong> Complex calculations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "IT in Business",
        objective: "obj_016",
        text: `
          <h3>Information Technology in Business</h3>
          <p>IT is essential for modern business operations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Business Applications</h4>
              <ul>
                <li>• <strong>ERP:</strong> Enterprise Resource Planning</li>
                <li>• <strong>CRM:</strong> Customer Relationship Management</li>
                <li>• <strong>SCM:</strong> Supply Chain Management</li>
                <li>• <strong>Business intelligence:</strong> Data analysis</li>
                <li>• <strong>E-commerce:</strong> Online sales</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• <strong>Efficiency:</strong> Automates processes</li>
                <li>• <strong>Productivity:</strong> Faster work</li>
                <li>• <strong>Decision-making:</strong> Better information</li>
                <li>• <strong>Customer service:</strong> Improved</li>
                <li>• <strong>Competitive advantage:</strong> Edge</li>
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
          <h4>💻 Information Technology</h4>
          <ul>
            <li>• IT manages and processes information</li>
            <li>• Hardware + Software + Networks + Data + People</li>
            <li>• Data becomes information through processing</li>
            <li>• IT powers modern society</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Areas</h4>
          <ul>
            <li>• Cybersecurity protects systems</li>
            <li>• Cloud computing delivers services</li>
            <li>• Emerging technologies are transforming IT</li>
            <li>• IT is essential for business success</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Information technology is transforming every aspect of our lives. Understanding IT is essential for success in the modern world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "IT and computer science are the same",
        correction: "IT is about using technology; CS is about creating it",
        explanation: "IT focuses on applying technology; CS focuses on the science behind it."
      },
      {
        id: "mis_002",
        misconception: "The internet and the web are the same",
        correction: "The internet is the network; the web is a service",
        explanation: "The internet is the infrastructure; the web is websites and pages."
      },
      {
        id: "mis_003",
        misconception: "Cloud computing is just storing files online",
        correction: "Cloud computing is much more than storage",
        explanation: "Cloud computing includes processing, storage, and software services."
      },
      {
        id: "mis_004",
        misconception: "IT careers are only for programmers",
        correction: "IT has many career paths",
        explanation: "IT includes management, cybersecurity, networking, data analysis, and more."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business",
        description: "IT powers modern business operations.",
        example: "ERP, CRM, e-commerce"
      },
      {
        id: "app_002",
        title: "Healthcare",
        description: "IT improves patient care.",
        example: "Electronic records, telemedicine"
      },
      {
        id: "app_003",
        title: "Education",
        description: "IT enables digital learning.",
        example: "E-learning, online courses"
      },
      {
        id: "app_004",
        title: "Communication",
        description: "IT connects people.",
        example: "Social media, email, video calls"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Information Technology", definition: "The use of technology to manage and process information." },
    { term: "Data", definition: "Raw facts and figures." },
    { term: "Information", definition: "Processed data with meaning." },
    { term: "Hardware", definition: "Physical components of a computer." },
    { term: "Software", definition: "Programs and applications." },
    { term: "Network", definition: "Connected computers and devices." },
    { term: "Internet", definition: "Global network of networks." },
    { term: "Database", definition: "Organized collection of data." },
    { term: "Cybersecurity", definition: "Protection of information systems." },
    { term: "Cloud Computing", definition: "Computing services over the internet." },
    { term: "AI", definition: "Artificial Intelligence." },
    { term: "IoT", definition: "Internet of Things." },
    { term: "Blockchain", definition: "Distributed ledger technology." },
    { term: "5G", definition: "Fifth-generation mobile networks." },
    { term: "ERP", definition: "Enterprise Resource Planning." },
    { term: "CRM", definition: "Customer Relationship Management." },
    { term: "Firewall", definition: "Security system that blocks unauthorized access." },
    { term: "Encryption", definition: "Encoding data for security." },
    { term: "E-commerce", definition: "Online buying and selling." },
    { term: "Big Data", definition: "Large, complex datasets." }
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
      question: "What is information technology?",
      type: "multiple_choice",
      options: [
        "The study of computers",
        "The use of technology to manage and process information",
        "The construction of computers",
        "The use of the internet"
      ],
      answer: "The use of technology to manage and process information",
      explanation: "IT is the use of technology to manage and process information."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a component of an information system?",
      type: "multiple_choice",
      options: ["Hardware", "Software", "Data", "All of the above"],
      answer: "All of the above",
      explanation: "Hardware, software, and data are all components of an information system."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the difference between data and information?",
      type: "multiple_choice",
      options: [
        "Data is processed; information is raw",
        "Data is raw; information is processed",
        "They are the same",
        "Data is written; information is spoken"
      ],
      answer: "Data is raw; information is processed",
      explanation: "Data is raw facts; information is processed data with meaning."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the CPU?",
      type: "multiple_choice",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Program Unit",
        "Control Processing Unit"
      ],
      answer: "Central Processing Unit",
      explanation: "CPU stands for Central Processing Unit, the brain of the computer."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is system software?",
      type: "multiple_choice",
      options: ["Microsoft Word", "Windows", "Chrome", "Photoshop"],
      answer: "Windows",
      explanation: "Windows is an operating system, which is system software."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the internet?",
      type: "multiple_choice",
      options: [
        "A type of computer",
        "A global network of networks",
        "A software program",
        "A type of website"
      ],
      answer: "A global network of networks",
      explanation: "The internet is a global network of interconnected networks."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a database?",
      type: "multiple_choice",
      options: [
        "A collection of computers",
        "An organized collection of data",
        "A type of software",
        "A type of hardware"
      ],
      answer: "An organized collection of data",
      explanation: "A database is an organized collection of data."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is phishing?",
      type: "multiple_choice",
      options: [
        "A type of software",
        "A cyberattack using fake emails",
        "A type of hardware",
        "A database system"
      ],
      answer: "A cyberattack using fake emails",
      explanation: "Phishing is a cyberattack where fake emails trick people into revealing information."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is cloud computing?",
      type: "multiple_choice",
      options: [
        "Computing in the rain",
        "Computing services delivered over the internet",
        "A type of hardware",
        "A programming language"
      ],
      answer: "Computing services delivered over the internet",
      explanation: "Cloud computing delivers computing services over the internet."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is AI?",
      type: "multiple_choice",
      options: [
        "Artificial Intelligence",
        "Automatic Information",
        "Advanced Integration",
        "Application Interface"
      ],
      answer: "Artificial Intelligence",
      explanation: "AI stands for Artificial Intelligence."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the information processing cycle?",
      type: "multiple_choice",
      options: [
        "Input, Processing, Storage, Output, Communication",
        "Input, Output, Storage",
        "Processing, Storage, Output",
        "Input, Processing, Output"
      ],
      answer: "Input, Processing, Storage, Output, Communication",
      explanation: "The information processing cycle includes input, processing, storage, output, and communication."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is SDLC?",
      type: "multiple_choice",
      options: [
        "System Development Life Cycle",
        "Software Design Life Cycle",
        "System Design Life Cycle",
        "Software Development Life Cycle"
      ],
      answer: "System Development Life Cycle",
      explanation: "SDLC stands for System Development Life Cycle."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How has IT impacted society?",
      type: "multiple_choice",
      options: [
        "Revolutionized communication",
        "Improved healthcare",
        "Changed how we work",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "IT has revolutionized communication, improved healthcare, and changed how we work."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is IT ethics?",
      type: "multiple_choice",
      options: [
        "Rules for using computers",
        "Moral principles in IT",
        "Technical standards",
        "Software licenses"
      ],
      answer: "Moral principles in IT",
      explanation: "IT ethics covers moral principles in the use of information technology."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is big data?",
      type: "multiple_choice",
      options: [
        "Small datasets",
        "Large, complex datasets",
        "A type of software",
        "A type of hardware"
      ],
      answer: "Large, complex datasets",
      explanation: "Big data refers to large, complex datasets that are difficult to process using traditional methods."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_information_technology",
    title: "Information Technology Quiz",
    description: "Test your understanding of information technology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is information technology?",
        type: "short_answer",
        answer_key: "The use of technology to manage and process information",
        explanation: "IT is the use of technology to manage and process information."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one component of an information system.",
        type: "short_answer",
        answer_key: "Hardware (or any valid)",
        explanation: "Hardware, software, and data are components of an information system."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between data and information?",
        type: "short_answer",
        answer_key: "Data is raw; information is processed",
        explanation: "Data is raw facts; information is processed data with meaning."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What does CPU stand for?",
        type: "short_answer",
        answer_key: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is system software?",
        type: "short_answer",
        answer_key: "Software that manages computer systems (e.g., operating systems)",
        explanation: "System software includes operating systems and utilities."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the internet?",
        type: "short_answer",
        answer_key: "A global network of networks",
        explanation: "The internet is a global network of interconnected networks."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a database?",
        type: "short_answer",
        answer_key: "An organized collection of data",
        explanation: "A database is an organized collection of data."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is phishing?",
        type: "short_answer",
        answer_key: "A cyberattack using fake emails",
        explanation: "Phishing uses fake emails to trick people."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is cloud computing?",
        type: "short_answer",
        answer_key: "Computing services delivered over the internet",
        explanation: "Cloud computing delivers services over the internet."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What does AI stand for?",
        type: "short_answer",
        answer_key: "Artificial Intelligence",
        explanation: "AI stands for Artificial Intelligence."
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
        "Understand information technology and its importance",
        "Explain hardware, software, and networks",
        "Describe cybersecurity and cloud computing",
        "Understand emerging technologies"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is information technology?" },
        { time: "5-10 min", activity: "Direct Instruction - IT Components" },
        { time: "10-15 min", activity: "Direct Instruction - Data vs Information" },
        { time: "15-20 min", activity: "Direct Instruction - Hardware and Software" },
        { time: "20-25 min", activity: "Direct Instruction - Networks and Databases" },
        { time: "25-30 min", activity: "Direct Instruction - Cybersecurity" },
        { time: "30-35 min", activity: "Direct Instruction - Cloud Computing and Emerging Tech" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The use of technology to manage and process information",
        prac_002: "All of the above",
        prac_003: "Data is raw; information is processed",
        prac_004: "Central Processing Unit",
        prac_005: "Windows",
        prac_006: "A global network of networks",
        prac_007: "An organized collection of data",
        prac_008: "A cyberattack using fake emails",
        prac_009: "Computing services delivered over the internet",
        prac_010: "Artificial Intelligence",
        prac_011: "Input, Processing, Storage, Output, Communication",
        prac_012: "System Development Life Cycle",
        prac_013: "All of the above",
        prac_014: "Moral principles in IT",
        prac_015: "Large, complex datasets"
      },
      assessment: {
        ass_001: "The use of technology to manage and process information",
        ass_002: "Hardware (or any valid)",
        ass_003: "Data is raw; information is processed",
        ass_004: "Central Processing Unit",
        ass_005: "Software that manages computer systems (e.g., operating systems)",
        ass_006: "A global network of networks",
        ass_007: "An organized collection of data",
        ass_008: "A cyberattack using fake emails",
        ass_009: "Computing services delivered over the internet",
        ass_010: "Artificial Intelligence"
      }
    },
    extensionActivities: [
      "Research cloud computing providers",
      "Study cybersecurity careers",
      "Learn about AI applications",
      "Research IT governance"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research emerging technologies",
        "Study IT project management",
        "Research big data analytics",
        "Study IT strategy"
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
      title: "Information System Components",
      description: "Diagram showing IT system components",
      url: "/diagrams/information-system.png",
      alt: "Information system diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Information Processing Cycle",
      description: "Diagram of the information processing cycle",
      url: "/diagrams/information-processing.png",
      alt: "Information processing cycle diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Cloud Computing",
      description: "Diagram showing cloud computing",
      url: "/diagrams/cloud-computing.png",
      alt: "Cloud computing diagram"
    }
  ]
};