// Location: src/data/lessons/science/computer_science/databases.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "cs_lesson_databases",
  subject: "Computer Science",
  topic: "Databases",
  name: "Databases",
  icon: "🗄️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of computer basics",
    "Knowledge of data and information",
    "Basic understanding of spreadsheets"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Programming",
      file: "science/computer_science/programming.js"
    },
    {
      name: "Computer Basics",
      file: "science/computer_science/computer_basics.js"
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
      description: "Define a database and explain its importance",
      indicator: "Student can explain what a database is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between data and information",
      indicator: "Student can differentiate between data and information"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify types of databases",
      indicator: "Student can describe relational, NoSQL, and cloud databases"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the structure of a relational database",
      indicator: "Student can describe tables, rows, columns, and keys"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Define primary key, foreign key, and relationships",
      indicator: "Student can explain keys and relationships between tables"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of database normalization",
      indicator: "Student can describe why normalization is important"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of a Database Management System (DBMS)",
      indicator: "Student can explain what a DBMS does"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain SQL and its basic commands",
      indicator: "Student can describe SELECT, INSERT, UPDATE, DELETE"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe database design principles",
      indicator: "Student can explain how to design a database"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain database relationships (one-to-one, one-to-many, many-to-many)",
      indicator: "Student can describe different types of relationships"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the ACID properties of databases",
      indicator: "Student can describe Atomicity, Consistency, Isolation, Durability"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe data integrity and data consistency",
      indicator: "Student can explain how databases maintain data integrity"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain database security and access control",
      indicator: "Student can describe how databases are secured"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the role of databases in modern applications",
      indicator: "Student can discuss database applications in real-world scenarios"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain emerging database technologies",
      indicator: "Student can describe cloud databases, big data, and NoSQL"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Databases - Storing and Managing Information",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about databases, how they work, and why they are essential for modern applications."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Databases</h2>
      <p>A <strong>database</strong> is an organized collection of data stored electronically. Databases are essential for storing, managing, and retrieving information efficiently. They power everything from banking systems and websites to mobile apps and enterprise software.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🗄️ Key Concepts</h3>
          <ul>
            <li>✓ Data vs Information</li>
            <li>✓ Relational Databases</li>
            <li>✓ Tables, Rows, Columns</li>
            <li>✓ Primary and Foreign Keys</li>
            <li>✓ SQL</li>
            <li>✓ Database Management Systems</li>
            <li>✓ Normalization</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• 90% of the world's data was created in the last 2 years</li>
            <li>• The largest database is over 100 petabytes</li>
            <li>• SQL is the most-used database language</li>
            <li>• Facebook uses multiple database types</li>
            <li>• Databases are used in almost every application</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Databases Matter</h4>
        <p>Databases store and organize the world's information. They are essential for businesses, governments, and daily life.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Data vs Information",
        objective: "obj_002",
        text: `
          <h3>Data vs Information</h3>
          <p>Understanding the difference between data and information is fundamental to databases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Data</h4>
              <ul>
                <li>• Raw, unprocessed facts</li>
                <li>• No context</li>
                <li>• Example: "John", "25", "Engineer"</li>
                <li>• Unorganized</li>
                <li>• Input to a system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Information</h4>
              <ul>
                <li>• Processed, organized data</li>
                <li>• Has context and meaning</li>
                <li>• Example: "John is a 25-year-old Engineer"</li>
                <li>• Organized and meaningful</li>
                <li>• Output from a system</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Data:</strong> 23, "Jane Doe", 456, "London"</li>
              <li><strong>Information:</strong> "Jane Doe is 23 years old, lives in London, and her account number is 456."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Databases",
        objective: "obj_003",
        text: `
          <h3>Types of Databases</h3>
          <p>Different types of databases are designed for different purposes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Relational Databases</h4>
              <ul>
                <li>• Data in tables</li>
                <li>• Relationships between tables</li>
                <li>• SQL for queries</li>
                <li>• Examples: MySQL, PostgreSQL, Oracle</li>
                <li>• Structured data</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 NoSQL Databases</h4>
              <ul>
                <li>• Non-relational</li>
                <li>• Flexible schemas</li>
                <li>• Document-based, key-value, graph</li>
                <li>• Examples: MongoDB, Redis, Neo4j</li>
                <li>• Unstructured data</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Cloud Databases</h4>
              <ul>
                <li>• Hosted in the cloud</li>
                <li>• Scalable</li>
                <li>• Managed service</li>
                <li>• Examples: AWS RDS, Google Cloud SQL</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Distributed Databases</h4>
              <ul>
                <li>• Data across multiple servers</li>
                <li>• High availability</li>
                <li>• Fault-tolerant</li>
                <li>• Examples: Cassandra, Hadoop</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Relational Database Structure",
        objective: "obj_004",
        text: `
          <h3>Relational Database Structure</h3>
          <p>A relational database organizes data into tables with rows and columns.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Tables</h4>
              <ul>
                <li>• <strong>Table:</strong> A collection of related data</li>
                <li>• <strong>Rows (Records):</strong> Individual entries</li>
                <li>• <strong>Columns (Fields):</strong> Attributes of the data</li>
                <li>• Example: Customers table</li>
                <li>• Each table has a name</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example: Students Table</h4>
              <table class="w-full border-collapse text-sm">
                <thead>
                  <tr class="bg-gray-200">
                    <th class="border p-1">ID</th>
                    <th class="border p-1">Name</th>
                    <th class="border p-1">Age</th>
                    <th class="border p-1">Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-1">1</td>
                    <td class="border p-1">Alice</td>
                    <td class="border p-1">20</td>
                    <td class="border p-1">Computer Science</td>
                  </tr>
                  <tr>
                    <td class="border p-1">2</td>
                    <td class="border p-1">Bob</td>
                    <td class="border p-1">22</td>
                    <td class="border p-1">Engineering</td>
                  </tr>
                  <tr>
                    <td class="border p-1">3</td>
                    <td class="border p-1">Charlie</td>
                    <td class="border p-1">21</td>
                    <td class="border p-1">Business</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Primary and Foreign Keys",
        objective: "obj_005",
        text: `
          <h3>Keys and Relationships</h3>
          <p><strong>Keys</strong> are used to identify records and create relationships between tables.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Primary Key</h4>
              <ul>
                <li>• Uniquely identifies a record</li>
                <li>• Must be unique</li>
                <li>• Cannot be NULL</li>
                <li>• Usually an ID field</li>
                <li>• Example: Student ID</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Foreign Key</h4>
              <ul>
                <li>• References a primary key in another table</li>
                <li>• Creates relationships</li>
                <li>• Can be duplicated</li>
                <li>• Can be NULL</li>
                <li>• Example: Course ID in Students table</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Database Relationships",
        objective: "obj_010",
        text: `
          <h3>Types of Relationships</h3>
          <p>Tables can be related in three ways.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 One-to-One</h4>
              <ul>
                <li>• One record matches one record</li>
                <li>• Example: Person → Passport</li>
                <li>• Each person has one passport</li>
                <li>• Each passport belongs to one person</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 One-to-Many</h4>
              <ul>
                <li>• One record matches many records</li>
                <li>• Example: Customer → Orders</li>
                <li>• One customer has many orders</li>
                <li>• Each order belongs to one customer</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Many-to-Many</h4>
              <ul>
                <li>• Many records match many records</li>
                <li>• Example: Students → Courses</li>
                <li>• Many students take many courses</li>
                <li>• Requires a junction table</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Database Normalization",
        objective: "obj_006",
        text: `
          <h3>Database Normalization</h3>
          <p><strong>Normalization</strong> is the process of organizing data to reduce redundancy and improve data integrity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Why Normalize?</h4>
              <ul>
                <li>• Reduce duplicate data</li>
                <li>• Improve data integrity</li>
                <li>• Simplify queries</li>
                <li>• Save storage space</li>
                <li>• Easier maintenance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Normal Forms</h4>
              <ul>
                <li>• <strong>1NF:</strong> Atomic values</li>
                <li>• <strong>2NF:</strong> Remove partial dependencies</li>
                <li>• <strong>3NF:</strong> Remove transitive dependencies</li>
                <li>• <strong>BCNF:</strong> Remove all dependencies</li>
                <li>• Higher forms exist</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Database Relationships</text>
              
              <!-- One-to-One -->
              <g transform="translate(100, 160)">
                <rect x="-50" y="-30" width="40" height="60" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-30" y="5" text-anchor="middle" font-size="10" fill="white">A</text>
                <rect x="10" y="-30" width="40" height="60" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="30" y="5" text-anchor="middle" font-size="10" fill="white">B</text>
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="60" text-anchor="middle" font-size="11" fill="#1565c0">One-to-One</text>
              </g>
              
              <!-- One-to-Many -->
              <g transform="translate(300, 160)">
                <rect x="-50" y="-15" width="40" height="30" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-30" y="5" text-anchor="middle" font-size="10" fill="white">1</text>
                <rect x="10" y="-30" width="40" height="20" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="30" y="-15" text-anchor="middle" font-size="9" fill="white">M</text>
                <rect x="10" y="-5" width="40" height="20" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="30" y="10" text-anchor="middle" font-size="9" fill="white">M</text>
                <rect x="10" y="20" width="40" height="20" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="30" y="35" text-anchor="middle" font-size="9" fill="white">M</text>
                <line x1="-10" y1="0" x2="10" y2="-20" stroke="#1565c0" stroke-width="2"/>
                <line x1="-10" y1="0" x2="10" y2="5" stroke="#1565c0" stroke-width="2"/>
                <line x1="-10" y1="0" x2="10" y2="30" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">One-to-Many</text>
              </g>
              
              <!-- Many-to-Many -->
              <g transform="translate(500, 160)">
                <rect x="-50" y="-30" width="40" height="60" rx="5" fill="#4a90d9" stroke="#1565c0" stroke-width="2"/>
                <text x="-30" y="5" text-anchor="middle" font-size="10" fill="white">M</text>
                <rect x="10" y="-30" width="40" height="60" rx="5" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
                <text x="30" y="5" text-anchor="middle" font-size="10" fill="white">M</text>
                <rect x="-30" y="-10" width="80" height="20" rx="3" fill="#ffb74d" stroke="#ef6c00" stroke-width="1.5"/>
                <text x="0" y="5" text-anchor="middle" font-size="9" fill="#ef6c00">Junction</text>
                <line x1="-10" y1="-15" x2="-10" y2="-10" stroke="#1565c0" stroke-width="2"/>
                <line x1="10" y1="-15" x2="10" y2="-10" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="75" text-anchor="middle" font-size="11" fill="#1565c0">Many-to-Many</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "SQL - Structured Query Language",
        objective: "obj_008",
        text: `
          <h3>SQL (Structured Query Language)</h3>
          <p><strong>SQL</strong> is the standard language for interacting with relational databases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Commands</h4>
              <ul>
                <li>• <strong>SELECT:</strong> Retrieve data</li>
                <li>• <strong>INSERT:</strong> Add new data</li>
                <li>• <strong>UPDATE:</strong> Modify data</li>
                <li>• <strong>DELETE:</strong> Remove data</li>
                <li>• <strong>CREATE:</strong> Create tables</li>
                <li>• <strong>DROP:</strong> Delete tables</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example Queries</h4>
              <ul>
                <li><strong>SELECT * FROM Students;</strong></li>
                <li>• Gets all student records</li>
                <li><strong>SELECT Name, Age FROM Students WHERE Age > 20;</strong></li>
                <li>• Gets students over 20</li>
                <li><strong>INSERT INTO Students VALUES (4, 'Diana', 23, 'Science');</strong></li>
                <li>• Adds a new student</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "DBMS - Database Management System",
        objective: "obj_007",
        text: `
          <h3>Database Management System (DBMS)</h3>
          <p>A <strong>DBMS</strong> is software that manages databases, providing storage, retrieval, security, and administration.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• <strong>Data storage:</strong> Stores data efficiently</li>
                <li>• <strong>Data retrieval:</strong> Quick access to data</li>
                <li>• <strong>Security:</strong> Controls access</li>
                <li>• <strong>Backup:</strong> Prevents data loss</li>
                <li>• <strong>Concurrency:</strong> Multiple users</li>
                <li>• <strong>Data integrity:</strong> Ensures accuracy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>MySQL:</strong> Open-source, popular</li>
                <li><strong>PostgreSQL:</strong> Advanced, open-source</li>
                <li><strong>Oracle:</strong> Enterprise, powerful</li>
                <li><strong>SQL Server:</strong> Microsoft</li>
                <li><strong>SQLite:</strong> Lightweight, embedded</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "ACID Properties",
        objective: "obj_011",
        text: `
          <h3>ACID Properties</h3>
          <p><strong>ACID</strong> properties ensure reliable processing of database transactions.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>A</h4>
              <p><strong>Atomicity</strong></p>
              <ul class="text-left text-sm">
                <li>• Transaction is all or nothing</li>
                <li>• Complete or rollback</li>
                <li>• No partial execution</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>C</h4>
              <p><strong>Consistency</strong></p>
              <ul class="text-left text-sm">
                <li>• Valid state maintained</li>
                <li>• Rules and constraints</li>
                <li>• Data integrity</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>I</h4>
              <p><strong>Isolation</strong></p>
              <ul class="text-left text-sm">
                <li>• Transactions don't interfere</li>
                <li>• Concurrency control</li>
                <li>• Separate and independent</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded text-center">
              <h4>D</h4>
              <p><strong>Durability</strong></p>
              <ul class="text-left text-sm">
                <li>• Permanent changes</li>
                <li>• Survives failures</li>
                <li>• Persistent storage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Database Security",
        objective: "obj_013",
        text: `
          <h3>Database Security</h3>
          <p>Protecting databases from unauthorized access and threats is essential.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Security Measures</h4>
              <ul>
                <li>• <strong>Authentication:</strong> User verification</li>
                <li>• <strong>Authorization:</strong> Access control</li>
                <li>• <strong>Encryption:</strong> Data protection</li>
                <li>• <strong>Auditing:</strong> Monitoring activity</li>
                <li>• <strong>Backup:</strong> Data recovery</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Threats</h4>
              <ul>
                <li>• <strong>SQL Injection:</strong> Malicious queries</li>
                <li>• <strong>Data breaches:</strong> Unauthorized access</li>
                <li>• <strong>Ransomware:</strong> Data encryption</li>
                <li>• <strong>Insider threats:</strong> Internal misuse</li>
                <li>• <strong>DDoS:</strong> Overload attacks</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Real-World Applications",
        objective: "obj_014",
        text: `
          <h3>Database Applications</h3>
          <p>Databases are used in almost every modern application.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Applications</h4>
              <ul>
                <li>• <strong>Banking:</strong> Accounts, transactions</li>
                <li>• <strong>E-commerce:</strong> Products, orders</li>
                <li>• <strong>Healthcare:</strong> Patient records</li>
                <li>• <strong>Education:</strong> Student data, grades</li>
                <li>• <strong>Social media:</strong> User profiles, posts</li>
                <li>• <strong>Government:</strong> Citizen records</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• <strong>Efficiency:</strong> Fast data access</li>
                <li>• <strong>Accuracy:</strong> Data integrity</li>
                <li>• <strong>Security:</strong> Controlled access</li>
                <li>• <strong>Scalability:</strong> Handles growth</li>
                <li>• <strong>Consistency:</strong> Reliable data</li>
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
          <h4>🗄️ Databases</h4>
          <ul>
            <li>• Organized collection of data</li>
            <li>• Relational: Tables with rows and columns</li>
            <li>• Keys: Primary and Foreign</li>
            <li>• SQL: Structured Query Language</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Normalization reduces redundancy</li>
            <li>• ACID ensures reliability</li>
            <li>• Relationships: one-to-one, one-to-many, many-to-many</li>
            <li>• Security is essential</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Databases are the backbone of modern applications. They store and organize the world's information.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Data and information are the same thing",
        correction: "Data is raw facts; information is processed data",
        explanation: "Data becomes information when it has context and meaning."
      },
      {
        id: "mis_002",
        misconception: "All databases are relational",
        correction: "There are many types, including NoSQL and cloud",
        explanation: "NoSQL databases are used for unstructured data."
      },
      {
        id: "mis_003",
        misconception: "SQL and databases are the same",
        correction: "SQL is a language used to interact with databases",
        explanation: "SQL is the query language, databases store the data."
      },
      {
        id: "mis_004",
        misconception: "Normalization makes databases slower",
        correction: "Normalization improves data integrity and reduces redundancy",
        explanation: "Some denormalization is used for performance, but normalization is generally beneficial."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Banking",
        description: "Databases store financial transactions.",
        example: "Account management, transfers"
      },
      {
        id: "app_002",
        title: "E-commerce",
        description: "Databases manage products and orders.",
        example: "Amazon, online shopping"
      },
      {
        id: "app_003",
        title: "Healthcare",
        description: "Databases store patient records.",
        example: "Electronic health records"
      },
      {
        id: "app_004",
        title: "Social Media",
        description: "Databases store user data and content.",
        example: "Posts, profiles, connections"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Database", definition: "Organized collection of data." },
    { term: "Data", definition: "Raw, unprocessed facts." },
    { term: "Information", definition: "Processed, meaningful data." },
    { term: "Relational Database", definition: "Database with tables and relationships." },
    { term: "Table", definition: "Collection of rows and columns." },
    { term: "Primary Key", definition: "Unique identifier for a record." },
    { term: "Foreign Key", definition: "References a primary key in another table." },
    { term: "SQL", definition: "Structured Query Language." },
    { term: "DBMS", definition: "Database Management System." },
    { term: "Normalization", definition: "Organizing data to reduce redundancy." },
    { term: "ACID", definition: "Atomicity, Consistency, Isolation, Durability." },
    { term: "NoSQL", definition: "Non-relational database." },
    { term: "Cloud Database", definition: "Database hosted in the cloud." },
    { term: "Transaction", definition: "A database operation." },
    { term: "Query", definition: "A request for data." },
    { term: "Record", definition: "A row in a table." },
    { term: "Field", definition: "A column in a table." },
    { term: "Data Integrity", definition: "Accuracy and consistency of data." },
    { term: "Scalability", definition: "Ability to handle growth." },
    { term: "SQL Injection", definition: "A security attack on databases." }
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
      question: "What is a database?",
      type: "multiple_choice",
      options: [
        "A collection of computers",
        "An organized collection of data",
        "A type of software",
        "A programming language"
      ],
      answer: "An organized collection of data",
      explanation: "A database is an organized collection of data."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the difference between data and information?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Data is processed; information is raw",
        "Data is raw; information is processed",
        "Data is digital; information is paper"
      ],
      answer: "Data is raw; information is processed",
      explanation: "Data is raw facts; information is data with context."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a relational database?",
      type: "multiple_choice",
      options: [
        "A database with relationships between tables",
        "A database with no structure",
        "A database in the cloud",
        "A database with graphs"
      ],
      answer: "A database with relationships between tables",
      explanation: "Relational databases have tables with relationships between them."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a table in a database?",
      type: "multiple_choice",
      options: [
        "A collection of rows and columns",
        "A type of query",
        "A security feature",
        "A backup file"
      ],
      answer: "A collection of rows and columns",
      explanation: "A table organizes data into rows and columns."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a primary key?",
      type: "multiple_choice",
      options: [
        "A key that references another table",
        "A unique identifier for a record",
        "A key used for encryption",
        "A key that can be duplicated"
      ],
      answer: "A unique identifier for a record",
      explanation: "A primary key uniquely identifies each record."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is database normalization?",
      type: "multiple_choice",
      options: [
        "Organizing data to reduce redundancy",
        "Deleting old data",
        "Backing up the database",
        "Encrypting the database"
      ],
      answer: "Organizing data to reduce redundancy",
      explanation: "Normalization organizes data to reduce redundancy."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a DBMS?",
      type: "multiple_choice",
      options: [
        "A type of database",
        "Software that manages databases",
        "A programming language",
        "A security protocol"
      ],
      answer: "Software that manages databases",
      explanation: "A DBMS is software that manages databases."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What does SQL stand for?",
      type: "multiple_choice",
      options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
        "Sequential Query Language"
      ],
      answer: "Structured Query Language",
      explanation: "SQL stands for Structured Query Language."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a one-to-many relationship?",
      type: "multiple_choice",
      options: [
        "One record matches one record",
        "One record matches many records",
        "Many records match many records",
        "No relationship exists"
      ],
      answer: "One record matches many records",
      explanation: "One-to-many means one record can be related to many records."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "What does ACID stand for?",
      type: "multiple_choice",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Integrity, Data",
        "Atomic, Consistent, Isolated, Durable",
        "Accuracy, Consistency, Integrity, Durability"
      ],
      answer: "Atomicity, Consistency, Isolation, Durability",
      explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is data integrity?",
      type: "multiple_choice",
      options: [
        "Data being encrypted",
        "Data being accurate and consistent",
        "Data being fast to access",
        "Data being in the cloud"
      ],
      answer: "Data being accurate and consistent",
      explanation: "Data integrity means data is accurate and consistent."
    },
    {
      id: "prac_012",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is SQL injection?",
      type: "multiple_choice",
      options: [
        "A type of database backup",
        "A security attack using malicious SQL queries",
        "A type of database index",
        "A database optimization technique"
      ],
      answer: "A security attack using malicious SQL queries",
      explanation: "SQL injection is a security attack using malicious SQL queries."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "How are databases used in healthcare?",
      type: "multiple_choice",
      options: [
        "To store patient records",
        "To manage hospital staff",
        "To track medical supplies",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Databases are used for patient records, staff management, and supplies."
    },
    {
      id: "prac_014",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is NoSQL?",
      type: "multiple_choice",
      options: [
        "A relational database",
        "A non-relational database",
        "A cloud database",
        "A programming language"
      ],
      answer: "A non-relational database",
      explanation: "NoSQL is a non-relational database type."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which SQL command is used to retrieve data?",
      type: "multiple_choice",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      answer: "SELECT",
      explanation: "SELECT is used to retrieve data."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_databases",
    title: "Databases Quiz",
    description: "Test your understanding of databases",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a database?",
        type: "short_answer",
        answer_key: "An organized collection of data",
        explanation: "A database is an organized collection of data."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between data and information?",
        type: "short_answer",
        answer_key: "Data is raw; information is processed",
        explanation: "Data is raw facts; information is data with context."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a relational database?",
        type: "short_answer",
        answer_key: "A database with relationships between tables",
        explanation: "Relational databases organize data in related tables."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a table in a database?",
        type: "short_answer",
        answer_key: "A collection of rows and columns",
        explanation: "Tables organize data into rows and columns."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a primary key?",
        type: "short_answer",
        answer_key: "A unique identifier for a record",
        explanation: "A primary key uniquely identifies records."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is normalization?",
        type: "short_answer",
        answer_key: "Organizing data to reduce redundancy",
        explanation: "Normalization reduces data redundancy."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a DBMS?",
        type: "short_answer",
        answer_key: "Software that manages databases",
        explanation: "A DBMS manages databases."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What does SQL stand for?",
        type: "short_answer",
        answer_key: "Structured Query Language",
        explanation: "SQL stands for Structured Query Language."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a one-to-many relationship?",
        type: "short_answer",
        answer_key: "One record matches many records",
        explanation: "One-to-many means one record can be related to many."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What does ACID stand for?",
        type: "short_answer",
        answer_key: "Atomicity, Consistency, Isolation, Durability",
        explanation: "ACID ensures reliable database transactions."
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
        "Understand databases and their importance",
        "Explain relational database structure",
        "Describe SQL and DBMS",
        "Understand database security and ACID"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a database?" },
        { time: "5-10 min", activity: "Direct Instruction - Data vs Information" },
        { time: "10-15 min", activity: "Direct Instruction - Types of Databases" },
        { time: "15-20 min", activity: "Direct Instruction - Relational Database Structure" },
        { time: "20-25 min", activity: "Direct Instruction - Keys and Relationships" },
        { time: "25-30 min", activity: "Direct Instruction - SQL and DBMS" },
        { time: "30-35 min", activity: "Direct Instruction - ACID and Security" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "An organized collection of data",
        prac_002: "Data is raw; information is processed",
        prac_003: "A database with relationships between tables",
        prac_004: "A collection of rows and columns",
        prac_005: "A unique identifier for a record",
        prac_006: "Organizing data to reduce redundancy",
        prac_007: "Software that manages databases",
        prac_008: "Structured Query Language",
        prac_009: "One record matches many records",
        prac_010: "Atomicity, Consistency, Isolation, Durability",
        prac_011: "Data being accurate and consistent",
        prac_012: "A security attack using malicious SQL queries",
        prac_013: "All of the above",
        prac_014: "A non-relational database",
        prac_015: "SELECT"
      },
      assessment: {
        ass_001: "An organized collection of data",
        ass_002: "Data is raw; information is processed",
        ass_003: "A database with relationships between tables",
        ass_004: "A collection of rows and columns",
        ass_005: "A unique identifier for a record",
        ass_006: "Organizing data to reduce redundancy",
        ass_007: "Software that manages databases",
        ass_008: "Structured Query Language",
        ass_009: "One record matches many records",
        ass_010: "Atomicity, Consistency, Isolation, Durability"
      }
    },
    extensionActivities: [
      "Research MySQL vs PostgreSQL",
      "Learn basic SQL commands",
      "Study database design",
      "Research cloud databases"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research database architecture",
        "Study advanced SQL",
        "Research NoSQL databases",
        "Study database performance optimization"
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
      title: "Database Relationships",
      description: "Diagram showing one-to-one, one-to-many, and many-to-many relationships",
      url: "/diagrams/database-relationships.png",
      alt: "Database relationships diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "SQL Query Example",
      description: "Example of SQL query structure",
      url: "/diagrams/sql-example.png",
      alt: "SQL example diagram"
    }
  ]
};