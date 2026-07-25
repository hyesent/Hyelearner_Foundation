// Location: src/data/lessons/science/computer_science/programming.js

export default {
  id: "cs_lesson_programming",
  subject: "Computer Science",
  topic: "Programming",
  name: "Programming",
  icon: "⌨️",
  grade_level: "SS1 - SS3",
  estimated_duration: "55 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of computer basics",
    "Basic mathematical skills",
    "Logical thinking ability",
    "Understanding of algorithms"
  ],

  nextLessons: [
    {
      name: "Networking",
      file: "science/computer_science/networking.js"
    }
  ],

  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define programming and explain its importance",
      indicator: "Student can explain what programming is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain what a programming language is",
      indicator: "Student can define a programming language and give examples"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between low-level and high-level languages",
      indicator: "Student can distinguish between low-level and high-level languages"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain the role of compilers and interpreters",
      indicator: "Student can explain what compilers and interpreters do"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the concept of variables and data types",
      indicator: "Student can define variables and explain common data types"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of control structures",
      indicator: "Student can explain conditionals and loops"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of functions and procedures",
      indicator: "Student can explain why functions are used and how they work"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of arrays and data structures",
      indicator: "Student can explain what arrays are and why they are useful"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of object-oriented programming",
      indicator: "Student can explain classes, objects, and basic OOP concepts"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the concept of algorithms",
      indicator: "Student can define algorithms and give examples"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the software development life cycle",
      indicator: "Student can describe the stages of software development"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Write simple programs using pseudocode",
      indicator: "Student can write pseudocode for simple problems"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of recursion",
      indicator: "Student can explain recursion and give examples"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the concept of debugging and testing",
      indicator: "Student can explain why debugging and testing are important"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain sorting and searching algorithms",
      indicator: "Student can explain basic sorting and searching concepts"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of APIs and libraries",
      indicator: "Student can explain what APIs and libraries are"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Analyze the impact of programming on society",
      indicator: "Student can explain how programming has changed the world"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Evaluate different programming languages for different tasks",
      indicator: "Student can explain when to use different programming languages"
    }
  ],

  video: {
    id: "vid_001",
    title: "Programming Fundamentals",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about programming languages, algorithms, and software development."
  },

  content: {
    introduction: `
      <h2>What is Programming?</h2>
      <p><strong>Programming</strong> is the process of creating a set of instructions that tell a computer how to perform a task. It involves writing code in a programming language that the computer can understand and execute.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📝 Algorithm</h3>
          <ul>
            <li>• Step-by-step solution</li>
            <li>• Problem-solving approach</li>
            <li>• Independent of language</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">💻 Code</h3>
          <ul>
            <li>• Written in a language</li>
            <li>• Syntax rules</li>
            <li>• Executed by computer</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📊 Program</h3>
          <ul>
            <li>• Complete code</li>
            <li>• Does specific tasks</li>
            <li>• Used by people</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Programming Process</text>
          
          <!-- Problem -->
          <rect x="40" y="80" width="100" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
          <text x="90" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">Problem</text>
          <text x="90" y="125" text-anchor="middle" font-size="9" fill="#1565c0">What to solve</text>
          
          <!-- Algorithm -->
          <rect x="190" y="80" width="100" height="60" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="5"/>
          <text x="240" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">Algorithm</text>
          <text x="240" y="125" text-anchor="middle" font-size="9" fill="#2e7d32">How to solve</text>
          
          <!-- Code -->
          <rect x="340" y="80" width="100" height="60" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="5"/>
          <text x="390" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#e65100">Code</text>
          <text x="390" y="125" text-anchor="middle" font-size="9" fill="#e65100">Write program</text>
          
          <!-- Execute -->
          <rect x="490" y="80" width="100" height="60" fill="#fce4ec" stroke="#c62828" stroke-width="2" rx="5"/>
          <text x="540" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#c62828">Execute</text>
          <text x="540" y="125" text-anchor="middle" font-size="9" fill="#c62828">Run program</text>
          
          <!-- Arrows -->
          <path d="M140 110 L180 110" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowP)"/>
          <path d="M290 110 L330 110" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowP)"/>
          <path d="M440 110 L480 110" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowP)"/>
          
          <defs>
            <marker id="arrowP" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
            </marker>
          </defs>
          
          <text x="300" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Problem → Algorithm → Code → Execute</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Programming Languages",
        objective: "obj_002",
        text: `
          <h3>Programming Languages</h3>
          <p>A <strong>programming language</strong> is a formal language used to write instructions for a computer.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Low-Level Languages</h4>
              <ul>
                <li><strong>Machine Language:</strong></li>
                <li>• Binary code (0s and 1s)</li>
                <li>• Directly executed by CPU</li>
                <li>• Fast but difficult to understand</li>
                <li><strong>Assembly Language:</strong></li>
                <li>• Uses mnemonic codes</li>
                <li>• Converted to machine code</li>
                <li>• Hardware-specific</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 High-Level Languages</h4>
              <ul>
                <li><strong>Characteristics:</strong></li>
                <li>• Closer to human language</li>
                <li>• Easier to read and write</li>
                <li>• Portable across systems</li>
                <li><strong>Examples:</strong></li>
                <li>• Python, Java, C++</li>
                <li>• JavaScript, Ruby, PHP</li>
                <li>• Swift, Kotlin, Go</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Compilers and Interpreters",
        objective: "obj_004",
        text: `
          <h3>Compilers and Interpreters</h3>
          <p>High-level languages must be converted into machine code for the computer to execute them.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Compiler</h4>
              <ul>
                <li>• Translates entire program at once</li>
                <li>• Creates an executable file</li>
                <li>• Faster execution</li>
                <li>• Examples: C, C++</li>
                <li>• Error checking done once</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Interpreter</h4>
              <ul>
                <li>• Translates line by line</li>
                <li>• No separate executable</li>
                <li>• Slower execution</li>
                <li>• Examples: Python, JavaScript</li>
                <li>• Easier to debug</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Variables and Data Types",
        objective: "obj_005",
        text: `
          <h3>Variables and Data Types</h3>
          <p><strong>Variables</strong> are named storage locations that hold data. <strong>Data types</strong> specify what kind of data a variable can hold.</p>
          
          <div class="example-box">
            <strong>📌 Common Data Types:</strong>
            <ul>
              <li><strong>Integer (int):</strong> Whole numbers</li>
              <li><strong>Float:</strong> Decimal numbers</li>
              <li><strong>String:</strong> Text</li>
              <li><strong>Boolean (bool):</strong> True/False</li>
              <li><strong>Character (char):</strong> Single letter</li>
              <li><strong>Array:</strong> Collection of values</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Variable Declaration Examples:</strong>
            <ul>
              <li>• <strong>Python:</strong> name = "John"</li>
              <li>• <strong>Java:</strong> String name = "John";</li>
              <li>• <strong>C++:</strong> string name = "John";</li>
              <li>• <strong>JavaScript:</strong> let name = "John";</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Control Structures",
        objective: "obj_006",
        text: `
          <h3>Control Structures</h3>
          <p><strong>Control structures</strong> determine the flow of a program.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Conditionals</h4>
              <ul>
                <li><strong>If-Else:</strong></li>
                <li>• if (condition) { // code }</li>
                <li>• else { // code }</li>
                <li><strong>Switch:</strong></li>
                <li>• switch (value) { case 1: ... }</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Loops</h4>
              <ul>
                <li><strong>For Loop:</strong></li>
                <li>• for (i=0; i<10; i++)</li>
                <li><strong>While Loop:</strong></li>
                <li>• while (condition) { }</li>
                <li><strong>Do-While Loop:</strong></li>
                <li>• do { } while (condition)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Pseudocode Examples:</strong>
            <ul>
              <li><strong>If-Else:</strong></li>
              <li>IF age >= 18 THEN</li>
              <li>  PRINT "Adult"</li>
              <li>ELSE</li>
              <li>  PRINT "Minor"</li>
              <li><strong>For Loop:</strong></li>
              <li>FOR i = 1 TO 10 DO</li>
              <li>  PRINT i</li>
              <li>END FOR</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Functions and Procedures",
        objective: "obj_007",
        text: `
          <h3>Functions and Procedures</h3>
          <p><strong>Functions</strong> and <strong>procedures</strong> are reusable blocks of code that perform specific tasks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>• Return a value</li>
                <li>• Can be used in expressions</li>
                <li>• Example: add(a, b)</li>
                <li>• Returns a + b</li>
                <li>• Can be called multiple times</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Procedures</h4>
              <ul>
                <li>• Do not return a value</li>
                <li>• Perform an action</li>
                <li>• Example: printHello()</li>
                <li>• Prints "Hello"</li>
                <li>• May have side effects</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Function:</strong></li>
              <li>function add(a, b) {</li>
              <li>  return a + b;</li>
              <li>}</li>
              <li><strong>Procedure:</strong></li>
              <li>function greet(name) {</li>
              <li>  print("Hello, " + name);</li>
              <li>}</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Arrays and Data Structures",
        objective: "obj_008",
        text: `
          <h3>Arrays</h3>
          <p><strong>Arrays</strong> are collections of items stored in a single variable.</p>
          
          <div class="example-box">
            <strong>📌 Array Concepts:</strong>
            <ul>
              <li>• Indexed from 0</li>
              <li>• Can hold multiple values</li>
              <li>• Same data type (usually)</li>
              <li>• Access by index number</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li>• Python: numbers = [1, 2, 3, 4, 5]</li>
              <li>• Java: int[] numbers = {1, 2, 3, 4, 5};</li>
              <li>• JavaScript: let numbers = [1, 2, 3, 4, 5];</li>
              <li>• Access: numbers[0] = 1</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Common Operations:</strong>
            <ul>
              <li>• Add: append, push</li>
              <li>• Remove: pop, delete</li>
              <li>• Sort: sort()</li>
              <li>• Search: indexOf()</li>
              <li>• Iterate: for loop</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Object-Oriented Programming",
        objective: "obj_009",
        text: `
          <h3>Object-Oriented Programming</h3>
          <p><strong>Object-Oriented Programming (OOP)</strong> is a paradigm that organizes code around objects rather than functions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li><strong>Class:</strong> Blueprint for objects</li>
                <li><strong>Object:</strong> Instance of a class</li>
                <li><strong>Encapsulation:</strong> Hiding internal state</li>
                <li><strong>Inheritance:</strong> Extending classes</li>
                <li><strong>Polymorphism:</strong> Different forms</li>
                <li><strong>Abstraction:</strong> Hiding complexity</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Example</h4>
              <ul>
                <li><strong>Class Definition:</strong></li>
                <li>class Car {</li>
                <li>  constructor(brand) {</li>
                <li>    this.brand = brand;</li>
                <li>  }</li>
                <li>  drive() {</li>
                <li>    print("Driving");</li>
                <li>  }</li>
                <li>}</li>
                <li><strong>Create Object:</strong></li>
                <li>myCar = new Car("Toyota")</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Algorithms and Software Development",
        objective: "obj_010",
        text: `
          <h3>Algorithms and Development</h3>
          <p><strong>Algorithms</strong> are step-by-step instructions for solving a problem.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sorting Algorithms</h4>
              <ul>
                <li><strong>Bubble Sort:</strong> Adjacent comparisons</li>
                <li><strong>Merge Sort:</strong> Divide and conquer</li>
                <li><strong>Quick Sort:</strong> Partition and sort</li>
                <li><strong>Insertion Sort:</strong> Build sorted array</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Searching Algorithms</h4>
              <ul>
                <li><strong>Linear Search:</strong> Check each item</li>
                <li><strong>Binary Search:</strong> Divide and conquer</li>
                <li>• Requires sorted data</li>
                <li>• Much faster than linear</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Software Development Life Cycle:</strong>
            <ul>
              <li>1. <strong>Planning:</strong> Define requirements</li>
              <li>2. <strong>Design:</strong> Plan the architecture</li>
              <li>3. <strong>Implementation:</strong> Write code</li>
              <li>4. <strong>Testing:</strong> Find bugs</li>
              <li>5. <strong>Deployment:</strong> Release to users</li>
              <li>6. <strong>Maintenance:</strong> Fix issues</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⌨️ Programming</h4>
          <ul>
            <li>• Programming is writing instructions</li>
            <li>• High-level vs Low-level languages</li>
            <li>• Compilers and interpreters</li>
            <li>• Variables, data types, functions</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Concepts</h4>
          <ul>
            <li>• Control structures (conditionals, loops)</li>
            <li>• Arrays and data structures</li>
            <li>• Object-Oriented Programming</li>
            <li>• Algorithms and development</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Programming is a skill that involves problem-solving, logical thinking, and creativity.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "You need to memorize syntax to be a programmer",
        correction: "Understanding concepts is more important than memorizing",
        explanation: "Programmers look up syntax regularly; problem-solving is key."
      },
      {
        id: "mis_002",
        misconception: "Programming is only for math geniuses",
        correction: "Programming requires logical thinking, not advanced math",
        explanation: "Basic math and logic are sufficient for most programming."
      },
      {
        id: "mis_003",
        misconception: "One programming language is always the best",
        correction: "Different languages are good for different tasks",
        explanation: "Choose the language based on the problem being solved."
      },
      {
        id: "mis_004",
        misconception: "Programs are always perfect when written",
        correction: "Programs need testing and debugging",
        explanation: "Bugs are common and part of the development process."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Web Development",
        description: "Programming is used to create websites and web applications.",
        example: "HTML, CSS, JavaScript, PHP, Python."
      },
      {
        id: "app_002",
        title: "Mobile Apps",
        description: "Programming is used to create mobile applications.",
        example: "Swift for iOS, Kotlin for Android."
      },
      {
        id: "app_003",
        title: "Artificial Intelligence",
        description: "Programming is used to create AI and machine learning systems.",
        example: "Python, TensorFlow, PyTorch."
      },
      {
        id: "app_004",
        title: "Game Development",
        description: "Programming is used to create video games.",
        example: "C++, Unity, Unreal Engine."
      }
    ]
  },

  keyTerms: [
    { term: "Programming", definition: "The process of writing instructions for a computer." },
    { term: "Programming Language", definition: "A formal language used to write computer programs." },
    { term: "Algorithm", definition: "A step-by-step procedure for solving a problem." },
    { term: "Compiler", definition: "A program that translates entire source code into machine code." },
    { term: "Interpreter", definition: "A program that translates code line by line." },
    { term: "Variable", definition: "A named storage location for data." },
    { term: "Data Type", definition: "The kind of data a variable can hold." },
    { term: "Control Structure", definition: "A statement that controls the flow of a program." },
    { term: "Function", definition: "A block of code that returns a value." },
    { term: "Procedure", definition: "A block of code that performs an action." },
    { term: "Array", definition: "A collection of items stored in a single variable." },
    { term: "Object-Oriented Programming", definition: "A programming paradigm based on objects." },
    { term: "Class", definition: "A blueprint for creating objects." },
    { term: "Object", definition: "An instance of a class." },
    { term: "Bug", definition: "An error in a program." },
    { term: "Debugging", definition: "The process of finding and fixing bugs." },
    { term: "Syntax", definition: "The rules of a programming language." },
    { term: "Pseudocode", definition: "A simplified, informal way of writing code." },
    { term: "API", definition: "Application Programming Interface." },
    { term: "Library", definition: "A collection of reusable code." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is programming?",
      type: "multiple_choice",
      options: [
        "Using a computer",
        "Writing instructions for a computer",
        "Playing video games",
        "Browsing the internet"
      ],
      answer: "Writing instructions for a computer",
      explanation: "Programming is writing instructions for a computer."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a programming language?",
      type: "multiple_choice",
      options: [
        "A language spoken by programmers",
        "A formal language for writing computer programs",
        "A language for writing books",
        "A type of encryption"
      ],
      answer: "A formal language for writing computer programs",
      explanation: "A programming language is a formal language for writing computer programs."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a high-level programming language?",
      type: "multiple_choice",
      options: ["Assembly", "Machine Code", "Python", "Binary"],
      answer: "Python",
      explanation: "Python is a high-level programming language."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the difference between a compiler and an interpreter?",
      type: "multiple_choice",
      options: [
        "Compiler translates entire program; interpreter translates line by line",
        "Interpreter translates entire program; compiler translates line by line",
        "They are the same",
        "Compiler is slower than interpreter"
      ],
      answer: "Compiler translates entire program; interpreter translates line by line",
      explanation: "A compiler translates the entire program; an interpreter translates line by line."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which data type would you use to store a person's name?",
      type: "multiple_choice",
      options: ["Integer", "Float", "String", "Boolean"],
      answer: "String",
      explanation: "Names are stored as strings (text)."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does an if statement do?",
      type: "multiple_choice",
      options: [
        "Repeats code",
        "Executes code conditionally",
        "Creates a variable",
        "Defines a function"
      ],
      answer: "Executes code conditionally",
      explanation: "An if statement executes code based on a condition."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the purpose of a function?",
      type: "multiple_choice",
      options: [
        "To create a variable",
        "To reuse code",
        "To print output",
        "To create a loop"
      ],
      answer: "To reuse code",
      explanation: "Functions allow code reuse and organization."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is an array?",
      type: "multiple_choice",
      options: [
        "A single variable",
        "A collection of items",
        "A type of loop",
        "A type of function"
      ],
      answer: "A collection of items",
      explanation: "An array is a collection of items stored in a single variable."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is Object-Oriented Programming?",
      type: "multiple_choice",
      options: [
        "A style of programming based on objects",
        "A style of programming based on functions",
        "A style of programming based on arrays",
        "A style of programming based on loops"
      ],
      answer: "A style of programming based on objects",
      explanation: "OOP is a programming paradigm based on objects."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is an algorithm?",
      type: "multiple_choice",
      options: [
        "A type of data",
        "A step-by-step procedure",
        "A programming language",
        "A type of computer"
      ],
      answer: "A step-by-step procedure",
      explanation: "An algorithm is a step-by-step procedure for solving a problem."
    },
    {
      id: "prac_011",
      objective: "obj_012",
      difficulty: "hard",
      question: "Write pseudocode to check if a number is even or odd.",
      type: "multiple_choice",
      options: [
        "IF number % 2 == 0 THEN PRINT 'Even' ELSE PRINT 'Odd'",
        "IF number % 2 == 1 THEN PRINT 'Even' ELSE PRINT 'Odd'",
        "IF number / 2 == 0 THEN PRINT 'Even' ELSE PRINT 'Odd'",
        "IF number * 2 == 0 THEN PRINT 'Even' ELSE PRINT 'Odd'"
      ],
      answer: "IF number % 2 == 0 THEN PRINT 'Even' ELSE PRINT 'Odd'",
      explanation: "The modulus operator % checks if a number is divisible by 2."
    },
    {
      id: "prac_012",
      objective: "obj_015",
      difficulty: "hard",
      question: "Which searching algorithm is faster on a sorted list?",
      type: "multiple_choice",
      options: ["Linear Search", "Binary Search", "Both are the same", "Neither"],
      answer: "Binary Search",
      explanation: "Binary search is faster on sorted lists (O(log n) vs O(n))."
    }
  ],

  assessment: {
    id: "assess_programming",
    title: "Programming Quiz",
    description: "Test your understanding of programming concepts",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is programming?",
        type: "short_answer",
        answer_key: "Writing instructions for a computer",
        explanation: "Programming is creating instructions for a computer to execute."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a programming language?",
        type: "short_answer",
        answer_key: "A formal language for writing computer programs",
        explanation: "A programming language is used to write computer programs."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between low-level and high-level languages?",
        type: "short_answer",
        answer_key: "Low-level is closer to machine code; high-level is closer to human language",
        explanation: "Low-level languages are closer to hardware; high-level languages are easier for humans."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the difference between a compiler and an interpreter?",
        type: "short_answer",
        answer_key: "Compiler translates entire program; interpreter translates line by line",
        explanation: "Compilers translate all code at once; interpreters translate line by line."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a variable?",
        type: "short_answer",
        answer_key: "A named storage location for data",
        explanation: "A variable stores data that can be used and changed."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the purpose of a loop?",
        type: "short_answer",
        answer_key: "To repeat code multiple times",
        explanation: "Loops allow code to be executed repeatedly."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the purpose of a function?",
        type: "short_answer",
        answer_key: "To reuse code and organize programs",
        explanation: "Functions allow code to be reused and organized."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is an array?",
        type: "short_answer",
        answer_key: "A collection of items stored in a single variable",
        explanation: "Arrays hold multiple values in one variable."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is Object-Oriented Programming?",
        type: "short_answer",
        answer_key: "A programming paradigm based on objects and classes",
        explanation: "OOP organizes code around objects rather than functions."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is an algorithm?",
        type: "short_answer",
        answer_key: "A step-by-step procedure for solving a problem",
        explanation: "Algorithms are the foundation of programming."
      },
      {
        id: "ass_011",
        objective: "obj_012",
        difficulty: "hard",
        question: "Write pseudocode to find the larger of two numbers.",
        type: "short_answer",
        answer_key: "IF a > b THEN PRINT a ELSE PRINT b",
        explanation: "A simple conditional statement compares two values."
      },
      {
        id: "ass_012",
        objective: "obj_017",
        difficulty: "hard",
        question: "How has programming impacted society?",
        type: "short_answer",
        answer_key: "It has changed how we work, learn, and communicate",
        explanation: "Programming has transformed every aspect of modern life."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "55 minutes",
      objectives: [
        "Understand programming concepts",
        "Identify programming languages",
        "Explain control structures and functions",
        "Understand algorithms and development"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is programming?" },
        { time: "5-10 min", activity: "Direct Instruction - Programming Languages" },
        { time: "10-15 min", activity: "Direct Instruction - Compilers and Interpreters" },
        { time: "15-20 min", activity: "Direct Instruction - Variables and Data Types" },
        { time: "20-25 min", activity: "Direct Instruction - Control Structures" },
        { time: "25-30 min", activity: "Direct Instruction - Functions" },
        { time: "30-35 min", activity: "Direct Instruction - OOP and Algorithms" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-55 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Writing instructions for a computer",
        prac_002: "A formal language for writing computer programs",
        prac_003: "Python",
        prac_004: "Compiler translates entire program; interpreter translates line by line",
        prac_005: "String",
        prac_006: "Executes code conditionally",
        prac_007: "To reuse code",
        prac_008: "A collection of items",
        prac_009: "A style of programming based on objects",
        prac_010: "A step-by-step procedure",
        prac_011: "IF number % 2 == 0 THEN PRINT 'Even' ELSE PRINT 'Odd'",
        prac_012: "Binary Search"
      },
      assessment: {
        ass_001: "Writing instructions for a computer",
        ass_002: "A formal language for writing computer programs",
        ass_003: "Low-level is closer to machine code; high-level is closer to human language",
        ass_004: "Compiler translates entire program; interpreter translates line by line",
        ass_005: "A named storage location for data",
        ass_006: "To repeat code multiple times",
        ass_007: "To reuse code and organize programs",
        ass_008: "A collection of items stored in a single variable",
        ass_009: "A programming paradigm based on objects and classes",
        ass_010: "A step-by-step procedure for solving a problem",
        ass_011: "IF a > b THEN PRINT a ELSE PRINT b",
        ass_012: "It has changed how we work, learn, and communicate"
      }
    },
    extensionActivities: [
      "Write a simple program in pseudocode",
      "Research different programming languages",
      "Create a flowchart for a simple algorithm",
      "Explore online coding platforms"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Practice with pseudocode",
        "Provide visual aids"
      ],
      advanced: [
        "Research different paradigms",
        "Study algorithm complexity",
        "Explore advanced languages",
        "Create a simple program"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Programming Process",
      description: "Diagram showing the programming process",
      url: "/diagrams/programming-process.png",
      alt: "Programming process diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Programming Languages",
      description: "Chart comparing different programming languages",
      url: "/diagrams/programming-languages.png",
      alt: "Programming languages chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Control Structures",
      description: "Diagram showing control structures",
      url: "/diagrams/control-structures.png",
      alt: "Control structures diagram"
    }
  ]
};