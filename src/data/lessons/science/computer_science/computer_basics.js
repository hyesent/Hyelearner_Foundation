// Location: src/data/lessons/science/computer_science/computer_basics.js

export default {
  id: "cs_lesson_computer_basics",
  subject: "Computer Science",
  topic: "Computer Basics",
  name: "Computer Basics",
  icon: "💻",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 12,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Basic understanding of technology",
    "Ability to read and write",
    "Basic mathematical skills",
    "Curiosity about how computers work"
  ],

  nextLessons: [
    {
      name: "Programming",
      file: "science/computer_science/programming.js"
    },
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
      description: "Define a computer and explain its characteristics",
      indicator: "Student can explain what a computer is and its key characteristics"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the main components of a computer system",
      indicator: "Student can list the hardware, software, and firmware components"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the input-process-output model",
      indicator: "Student can describe the IPO model with examples"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify different types of computers",
      indicator: "Student can distinguish between desktops, laptops, tablets, and smartphones"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the functions of the main hardware components",
      indicator: "Student can describe the CPU, RAM, storage, and input/output devices"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the difference between hardware and software",
      indicator: "Student can distinguish between hardware and software"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the role of the operating system",
      indicator: "Student can describe what an operating system does"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Identify different types of software",
      indicator: "Student can distinguish between system software and application software"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of data storage units",
      indicator: "Student can explain bits, bytes, kilobytes, megabytes, gigabytes, and terabytes"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Explain the difference between primary and secondary storage",
      indicator: "Student can distinguish between RAM and storage devices"
    },
    {
      id: "obj_011",
      level: "medium",
      description: "Explain the concept of computer networks",
      indicator: "Student can describe what a computer network is"
    },
    // HARD LEVEL
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the Von Neumann architecture",
      indicator: "Student can describe the Von Neumann architecture and its components"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the fetch-decode-execute cycle",
      indicator: "Student can explain how the CPU processes instructions"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the evolution of computers",
      indicator: "Student can describe the generations of computers"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the characteristics of modern computers",
      indicator: "Student can describe speed, accuracy, reliability, and versatility"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the concept of binary numbers",
      indicator: "Student can explain why computers use binary"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the importance of computer security",
      indicator: "Student can describe basic computer security concepts"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Analyze the impact of computers on society",
      indicator: "Student can describe the social impact of computers"
    }
  ],

  video: {
    id: "vid_001",
    title: "Computer Basics",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about computers, their components, and how they work."
  },

  content: {
    introduction: `
      <h2>What is a Computer?</h2>
      <p>A <strong>computer</strong> is an electronic device that processes data according to a set of instructions called a program. It takes input, processes it, and produces output.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📥 Input</h3>
          <ul>
            <li>• Data entered</li>
            <li>• Instructions given</li>
            <li>• Examples: Keyboard, mouse, scanner</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">⚙️ Process</h3>
          <ul>
            <li>• Data manipulation</li>
            <li>• Calculations</li>
            <li>• Examples: CPU, RAM</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📤 Output</h3>
          <ul>
            <li>• Results displayed</li>
            <li>• Information delivered</li>
            <li>• Examples: Monitor, printer, speakers</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
          <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Input-Process-Output Model</text>
          
          <!-- Input box -->
          <rect x="60" y="100" width="120" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
          <text x="120" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1565c0">Input</text>
          <text x="120" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#1565c0">Data</text>
          
          <!-- Process box -->
          <rect x="240" y="100" width="120" height="60" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="5"/>
          <text x="300" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#2e7d32">Process</text>
          <text x="300" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2e7d32">CPU</text>
          
          <!-- Output box -->
          <rect x="420" y="100" width="120" height="60" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="5"/>
          <text x="480" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e65100">Output</text>
          <text x="480" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#e65100">Information</text>
          
          <!-- Arrows -->
          <path d="M180 130 L230 130" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowIPO)"/>
          <path d="M360 130 L410 130" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowIPO)"/>
          
          <defs>
            <marker id="arrowIPO" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
            </marker>
          </defs>
          
          <!-- Storage feedback -->
          <path d="M300 160 Q300 220 120 220 Q60 220 60 160" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="6,4"/>
          <text x="180" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#9b59b6">Storage (Memory)</text>
          
          <text x="300" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Computers take input, process it, and produce output</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Characteristics of a Computer",
        objective: "obj_001",
        text: `
          <h3>Key Characteristics</h3>
          <p>Computers have several important characteristics that make them powerful tools.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Speed</h4>
              <ul>
                <li>• Processes millions of operations per second</li>
                <li>• Much faster than humans</li>
                <li>• Measured in Hertz (Hz)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Accuracy</h4>
              <ul>
                <li>• Performs calculations with high precision</li>
                <li>• Errors are due to human input or programming</li>
                <li>• Consistent results for the same input</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Reliability</h4>
              <ul>
                <li>• Can run for long periods without errors</li>
                <li>• Dependable for repetitive tasks</li>
                <li>• Rarely makes mistakes</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Versatility</h4>
              <ul>
                <li>• Can perform many different tasks</li>
                <li>• Software determines functionality</li>
                <li>• Used in many fields</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Computer System Components",
        objective: "obj_002",
        text: `
          <h3>Components of a Computer System</h3>
          <p>A computer system consists of hardware, software, and firmware.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="350" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Computer System Components</text>
              
              <!-- Hardware -->
              <rect x="40" y="50" width="160" height="250" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
              <text x="120" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#1565c0">Hardware</text>
              <text x="120" y="100" text-anchor="middle" font-size="10" fill="#1565c0">Physical parts</text>
              <text x="120" y="120" text-anchor="middle" font-size="9" fill="#2c3e50">CPU</text>
              <text x="120" y="135" text-anchor="middle" font-size="9" fill="#2c3e50">RAM</text>
              <text x="120" y="150" text-anchor="middle" font-size="9" fill="#2c3e50">Storage</text>
              <text x="120" y="165" text-anchor="middle" font-size="9" fill="#2c3e50">Keyboard</text>
              <text x="120" y="180" text-anchor="middle" font-size="9" fill="#2c3e50">Mouse</text>
              <text x="120" y="195" text-anchor="middle" font-size="9" fill="#2c3e50">Monitor</text>
              
              <!-- Software -->
              <rect x="220" y="50" width="160" height="250" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="5"/>
              <text x="300" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e7d32">Software</text>
              <text x="300" y="100" text-anchor="middle" font-size="10" fill="#2e7d32">Programs & data</text>
              <text x="300" y="120" text-anchor="middle" font-size="9" fill="#2c3e50">OS (Windows)</text>
              <text x="300" y="135" text-anchor="middle" font-size="9" fill="#2c3e50">Applications</text>
              <text x="300" y="150" text-anchor="middle" font-size="9" fill="#2c3e50">Word Processor</text>
              <text x="300" y="165" text-anchor="middle" font-size="9" fill="#2c3e50">Games</text>
              <text x="300" y="180" text-anchor="middle" font-size="9" fill="#2c3e50">Web Browser</text>
              
              <!-- Firmware -->
              <rect x="400" y="50" width="160" height="250" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="5"/>
              <text x="480" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#e65100">Firmware</text>
              <text x="480" y="100" text-anchor="middle" font-size="10" fill="#e65100">Software in hardware</text>
              <text x="480" y="120" text-anchor="middle" font-size="9" fill="#2c3e50">BIOS</text>
              <text x="480" y="135" text-anchor="middle" font-size="9" fill="#2c3e50">UEFI</text>
              <text x="480" y="150" text-anchor="middle" font-size="9" fill="#2c3e50">Device Drivers</text>
              <text x="480" y="165" text-anchor="middle" font-size="9" fill="#2c3e50">Router firmware</text>
              
              <text x="300" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">Hardware + Software + Firmware = Computer System</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Hardware Components",
        objective: "obj_005",
        text: `
          <h3>Hardware Components</h3>
          <p>Hardware refers to the physical parts of a computer.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Input Devices</h4>
              <ul>
                <li><strong>Keyboard:</strong> Text input</li>
                <li><strong>Mouse:</strong> Pointing device</li>
                <li><strong>Scanner:</strong> Converts paper to digital</li>
                <li><strong>Microphone:</strong> Audio input</li>
                <li><strong>Camera:</strong> Image/video input</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Output Devices</h4>
              <ul>
                <li><strong>Monitor:</strong> Visual output</li>
                <li><strong>Printer:</strong> Paper output</li>
                <li><strong>Speakers:</strong> Audio output</li>
                <li><strong>Projector:</strong> Large display</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Processing Devices</h4>
              <ul>
                <li><strong>CPU:</strong> Central Processing Unit</li>
                <li><strong>GPU:</strong> Graphics Processing Unit</li>
                <li><strong>Motherboard:</strong> Connects components</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Storage Devices</h4>
              <ul>
                <li><strong>RAM:</strong> Temporary storage</li>
                <li><strong>Hard Drive:</strong> Permanent storage</li>
                <li><strong>SSD:</strong> Solid State Drive</li>
                <li><strong>USB Drive:</strong> Portable storage</li>
                <li><strong>Memory Card:</strong> Small storage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Types of Computers",
        objective: "obj_004",
        text: `
          <h3>Types of Computers</h3>
          <p>Computers come in many shapes and sizes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Desktop Computers</h4>
              <ul>
                <li>• Stationary</li>
                <li>• High performance</li>
                <li>• Easy to upgrade</li>
                <li>• Used in offices and homes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Laptops</h4>
              <ul>
                <li>• Portable</li>
                <li>• Built-in screen and keyboard</li>
                <li>• Battery powered</li>
                <li>• Used by students and professionals</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Tablets</h4>
              <ul>
                <li>• Touchscreen</li>
                <li>• Lightweight</li>
                <li>• Long battery life</li>
                <li>• Used for reading and browsing</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Smartphones</h4>
              <ul>
                <li>• Handheld</li>
                <li>• Communication + computing</li>
                <li>• Touchscreen</li>
                <li>• Used for everything</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Servers</h4>
              <ul>
                <li>• Powerful computers</li>
                <li>• Provide services</li>
                <li>• Store data</li>
                <li>• Used in data centers</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>📌 Embedded Computers</h4>
              <ul>
                <li>• Built into devices</li>
                <li>• Specialized tasks</li>
                <li>• Examples: Cars, TVs, appliances</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Software",
        objective: "obj_006",
        text: `
          <h3>Software</h3>
          <p><strong>Software</strong> refers to the programs and data that run on a computer.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 System Software</h4>
              <ul>
                <li><strong>Operating System:</strong> Windows, macOS, Linux</li>
                <li><strong>Device Drivers:</strong> Hardware communication</li>
                <li><strong>Utilities:</strong> Antivirus, backup tools</li>
                <li>• Manages hardware</li>
                <li>• Provides platform for applications</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Application Software</h4>
              <ul>
                <li><strong>Word Processors:</strong> Microsoft Word, Google Docs</li>
                <li><strong>Spreadsheets:</strong> Excel, Google Sheets</li>
                <li><strong>Web Browsers:</strong> Chrome, Firefox</li>
                <li><strong>Games:</strong> Entertainment</li>
                <li>• Performs specific tasks</li>
                <li>• User-facing programs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Data Storage Units",
        objective: "obj_009",
        text: `
          <h3>Data Storage Units</h3>
          <p>Data is stored in binary format using bits and bytes.</p>
          
          <div class="table-container">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-blue-100">
                  <th class="border p-2 text-left">Unit</th>
                  <th class="border p-2 text-left">Size</th>
                  <th class="border p-2 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Bit (b)</td>
                  <td class="border p-2">0 or 1</td>
                  <td class="border p-2">Binary digit</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Byte (B)</td>
                  <td class="border p-2">8 bits</td>
                  <td class="border p-2">One character</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Kilobyte (KB)</td>
                  <td class="border p-2">1024 bytes</td>
                  <td class="border p-2">Short email</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Megabyte (MB)</td>
                  <td class="border p-2">1024 KB</td>
                  <td class="border p-2">MP3 song</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Gigabyte (GB)</td>
                  <td class="border p-2">1024 MB</td>
                  <td class="border p-2">Movie</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Terabyte (TB)</td>
                  <td class="border p-2">1024 GB</td>
                  <td class="border p-2">Hard drive</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Von Neumann Architecture",
        objective: "obj_012",
        text: `
          <h3>Von Neumann Architecture</h3>
          <p>The <strong>Von Neumann architecture</strong> is the basic architecture of most computers.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <rect width="600" height="300" fill="#f8f9fa" rx="10"/>
              <text x="300" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50">Von Neumann Architecture</text>
              
              <!-- CPU -->
              <rect x="220" y="100" width="160" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="5"/>
              <text x="300" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">CPU</text>
              <text x="300" y="145" text-anchor="middle" font-size="10" fill="#1565c0">Control Unit</text>
              <text x="300" y="160" text-anchor="middle" font-size="10" fill="#1565c0">Arithmetic Logic Unit</text>
              
              <!-- Memory -->
              <rect x="60" y="100" width="120" height="80" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="5"/>
              <text x="120" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">Memory</text>
              <text x="120" y="150" text-anchor="middle" font-size="10" fill="#2e7d32">(RAM)</text>
              
              <!-- Input -->
              <rect x="60" y="220" width="120" height="40" fill="#fff3e0" stroke="#e65100" stroke-width="2" rx="5"/>
              <text x="120" y="245" text-anchor="middle" font-size="11" fill="#e65100">Input</text>
              
              <!-- Output -->
              <rect x="420" y="220" width="120" height="40" fill="#fce4ec" stroke="#c62828" stroke-width="2" rx="5"/>
              <text x="480" y="245" text-anchor="middle" font-size="11" fill="#c62828">Output</text>
              
              <!-- Arrows -->
              <path d="M180 130 L210 130" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowV)"/>
              <path d="M380 130 L420 130" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrowV)"/>
              <path d="M180 240 L400 240" stroke="#2c3e50" stroke-width="2"/>
              
              <defs>
                <marker id="arrowV" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50"/>
                </marker>
              </defs>
              
              <text x="300" y="285" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#7f8c8d">CPU fetches instructions and data from memory</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Fetch-Decode-Execute Cycle",
        objective: "obj_013",
        text: `
          <h3>Fetch-Decode-Execute Cycle</h3>
          <p>The <strong>fetch-decode-execute cycle</strong> is the process by which the CPU processes instructions.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>1️⃣ Fetch</h4>
              <ul>
                <li>• CPU gets instruction</li>
                <li>• From memory</li>
                <li>• Program Counter tracks next instruction</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>2️⃣ Decode</h4>
              <ul>
                <li>• CPU interprets instruction</li>
                <li>• Control Unit decodes</li>
                <li>• Determines what operation</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>3️⃣ Execute</h4>
              <ul>
                <li>• CPU performs operation</li>
                <li>• ALU does calculations</li>
                <li>• Results stored</li>
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
          <h4>💻 Computer Basics</h4>
          <ul>
            <li>• Input → Process → Output</li>
            <li>• Hardware + Software + Firmware</li>
            <li>• CPU is the brain</li>
            <li>• Data stored in binary</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Concepts</h4>
          <ul>
            <li>• Von Neumann Architecture</li>
            <li>• Fetch-Decode-Execute cycle</li>
            <li>• Operating System</li>
            <li>• Different types of computers</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Computers are powerful tools that process data to produce useful information.</p>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "The computer makes mistakes",
        correction: "Computers don't make mistakes; humans do",
        explanation: "Computers follow instructions exactly; errors come from programming or input."
      },
      {
        id: "mis_002",
        misconception: "Hardware and software are the same",
        correction: "Hardware is physical; software is programs",
        explanation: "Hardware is the physical components; software is the instructions."
      },
      {
        id: "mis_003",
        misconception: "More RAM always means a faster computer",
        correction: "RAM helps, but CPU and storage also affect speed",
        explanation: "Performance depends on all components working together."
      },
      {
        id: "mis_004",
        misconception: "Computers are just for games and entertainment",
        correction: "Computers are used in every field",
        explanation: "Computers are used in medicine, education, business, and science."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Education",
        description: "Computers are used for learning and research.",
        example: "Online learning, research, educational software."
      },
      {
        id: "app_002",
        title: "Healthcare",
        description: "Computers are essential in modern medicine.",
        example: "Medical records, diagnostic imaging, surgery robots."
      },
      {
        id: "app_003",
        title: "Business",
        description: "Computers are used in every business.",
        example: "Accounting, inventory, communication, marketing."
      },
      {
        id: "app_004",
        title: "Communication",
        description: "Computers enable global communication.",
        example: "Email, video calls, social media, messaging."
      }
    ]
  },

  keyTerms: [
    { term: "Computer", definition: "An electronic device that processes data to produce information." },
    { term: "Hardware", definition: "The physical components of a computer." },
    { term: "Software", definition: "Programs and data that run on a computer." },
    { term: "Firmware", definition: "Software stored on hardware chips." },
    { term: "CPU", definition: "Central Processing Unit - the brain of the computer." },
    { term: "RAM", definition: "Random Access Memory - temporary storage." },
    { term: "Operating System", definition: "Software that manages hardware and provides a platform for applications." },
    { term: "Bit", definition: "The smallest unit of data (0 or 1)." },
    { term: "Byte", definition: "8 bits, can represent one character." },
    { term: "Input", definition: "Data entered into a computer." },
    { term: "Output", definition: "Results produced by a computer." },
    { term: "Processor", definition: "The chip that executes instructions." },
    { term: "Storage", definition: "Devices that hold data permanently." },
    { term: "Von Neumann Architecture", definition: "A computer architecture with a single memory for instructions and data." },
    { term: "ALU", definition: "Arithmetic Logic Unit - performs calculations." },
    { term: "Control Unit", definition: "Directs the operation of the CPU." },
    { term: "Program Counter", definition: "Keeps track of the next instruction." },
    { term: "Register", definition: "Small, fast memory locations in the CPU." }
  ],

  practice: [
    // ===== EASY QUESTIONS =====
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a computer?",
      type: "multiple_choice",
      options: [
        "A device for making phone calls",
        "An electronic device that processes data",
        "A machine for printing documents",
        "A tool for playing games only"
      ],
      answer: "An electronic device that processes data",
      explanation: "A computer is an electronic device that processes data to produce information."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the main components of a computer system?",
      type: "multiple_choice",
      options: [
        "Hardware and Software",
        "CPU and RAM",
        "Input and Output",
        "Hardware, Software, and Firmware"
      ],
      answer: "Hardware, Software, and Firmware",
      explanation: "A computer system consists of hardware, software, and firmware."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the IPO model?",
      type: "multiple_choice",
      options: [
        "Input-Process-Output",
        "Input-Program-Output",
        "Information-Process-Output",
        "Input-Process-Operation"
      ],
      answer: "Input-Process-Output",
      explanation: "The IPO model describes how computers take input, process it, and produce output."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the role of the CPU?",
      type: "multiple_choice",
      options: [
        "Stores data permanently",
        "Processes instructions and data",
        "Displays output",
        "Connects to the internet"
      ],
      answer: "Processes instructions and data",
      explanation: "The CPU processes instructions and data."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the difference between hardware and software?",
      type: "multiple_choice",
      options: [
        "Hardware is physical; software is programs",
        "Hardware is programs; software is physical",
        "They are the same",
        "Hardware is more important"
      ],
      answer: "Hardware is physical; software is programs",
      explanation: "Hardware is the physical components; software is the programs."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the role of the operating system?",
      type: "multiple_choice",
      options: [
        "Manages hardware and provides a platform for applications",
        "Only manages files",
        "Only connects to the internet",
        "Only plays games"
      ],
      answer: "Manages hardware and provides a platform for applications",
      explanation: "The OS manages hardware and provides a platform for applications."
    },
    {
      id: "prac_007",
      objective: "obj_009",
      difficulty: "medium",
      question: "How many bytes are in a kilobyte?",
      type: "multiple_choice",
      options: ["100", "1000", "1024", "10000"],
      answer: "1024",
      explanation: "1 KB = 1024 bytes."
    },
    {
      id: "prac_008",
      objective: "obj_010",
      difficulty: "medium",
      question: "What is the difference between RAM and storage?",
      type: "multiple_choice",
      options: [
        "RAM is permanent; storage is temporary",
        "RAM is temporary; storage is permanent",
        "They are the same",
        "RAM is slower than storage"
      ],
      answer: "RAM is temporary; storage is permanent",
      explanation: "RAM is temporary memory; storage is permanent."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is Von Neumann architecture?",
      type: "multiple_choice",
      options: [
        "A type of computer",
        "A computer architecture with a single memory for instructions and data",
        "A programming language",
        "An operating system"
      ],
      answer: "A computer architecture with a single memory for instructions and data",
      explanation: "Von Neumann architecture has a single memory for instructions and data."
    },
    {
      id: "prac_010",
      objective: "obj_013",
      difficulty: "hard",
      question: "What are the three steps of the fetch-decode-execute cycle?",
      type: "multiple_choice",
      options: [
        "Fetch, Decode, Execute",
        "Fetch, Execute, Decode",
        "Decode, Fetch, Execute",
        "Execute, Decode, Fetch"
      ],
      answer: "Fetch, Decode, Execute",
      explanation: "The CPU fetches instructions, decodes them, and executes them."
    },
    {
      id: "prac_011",
      objective: "obj_016",
      difficulty: "hard",
      question: "Why do computers use binary?",
      type: "multiple_choice",
      options: [
        "Because it's faster",
        "Because it represents on/off states",
        "Because it's easier to read",
        "Because it uses less space"
      ],
      answer: "Because it represents on/off states",
      explanation: "Computers use binary because it represents two states (on/off)."
    },
    {
      id: "prac_012",
      objective: "obj_018",
      difficulty: "hard",
      question: "How have computers impacted society?",
      type: "multiple_choice",
      options: [
        "They have changed how we work, learn, and communicate",
        "They have no impact",
        "They only affect businesses",
        "They only affect gaming"
      ],
      answer: "They have changed how we work, learn, and communicate",
      explanation: "Computers have transformed every aspect of modern life."
    }
  ],

  assessment: {
    id: "assess_computer_basics",
    title: "Computer Basics Quiz",
    description: "Test your understanding of computer basics",
    passing_score: 70,
    total_questions: 12,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a computer?",
        type: "short_answer",
        answer_key: "An electronic device that processes data",
        explanation: "A computer is an electronic device that processes data to produce information."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the main components of a computer system?",
        type: "short_answer",
        answer_key: "Hardware, software, and firmware",
        explanation: "A computer system consists of hardware, software, and firmware."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What does IPO stand for?",
        type: "short_answer",
        answer_key: "Input-Process-Output",
        explanation: "IPO stands for Input-Process-Output."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name three types of computers.",
        type: "short_answer",
        answer_key: "Desktop, laptop, tablet (or smartphone, server)",
        explanation: "There are many types of computers including desktops, laptops, tablets, and smartphones."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of the CPU?",
        type: "short_answer",
        answer_key: "Processes instructions and data",
        explanation: "The CPU processes instructions and data."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between hardware and software?",
        type: "short_answer",
        answer_key: "Hardware is physical; software is programs",
        explanation: "Hardware is the physical components; software is the programs."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the role of the operating system?",
        type: "short_answer",
        answer_key: "Manages hardware and provides a platform for applications",
        explanation: "The operating system manages hardware and provides a platform for applications."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "medium",
        question: "How many bits are in a byte?",
        type: "short_answer",
        answer_key: "8",
        explanation: "1 byte = 8 bits."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the difference between RAM and storage?",
        type: "short_answer",
        answer_key: "RAM is temporary; storage is permanent",
        explanation: "RAM is temporary memory; storage is permanent."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is Von Neumann architecture?",
        type: "short_answer",
        answer_key: "A computer architecture with a single memory for instructions and data",
        explanation: "Von Neumann architecture has a single memory for instructions and data."
      },
      {
        id: "ass_011",
        objective: "obj_013",
        difficulty: "hard",
        question: "What are the steps of the fetch-decode-execute cycle?",
        type: "short_answer",
        answer_key: "Fetch, Decode, Execute",
        explanation: "The CPU fetches, decodes, and executes instructions."
      },
      {
        id: "ass_012",
        objective: "obj_018",
        difficulty: "hard",
        question: "How have computers impacted society?",
        type: "short_answer",
        answer_key: "They have changed how we work, learn, and communicate",
        explanation: "Computers have transformed every aspect of modern life."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand what a computer is",
        "Identify computer components",
        "Explain how computers work",
        "Understand different types of computers"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a computer?" },
        { time: "5-10 min", activity: "Direct Instruction - Characteristics of Computers" },
        { time: "10-15 min", activity: "Direct Instruction - Computer Components" },
        { time: "15-20 min", activity: "Direct Instruction - Hardware and Software" },
        { time: "20-25 min", activity: "Direct Instruction - Types of Computers" },
        { time: "25-30 min", activity: "Direct Instruction - Von Neumann Architecture" },
        { time: "30-35 min", activity: "Direct Instruction - Fetch-Decode-Execute" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "An electronic device that processes data",
        prac_002: "Hardware, Software, and Firmware",
        prac_003: "Input-Process-Output",
        prac_004: "Processes instructions and data",
        prac_005: "Hardware is physical; software is programs",
        prac_006: "Manages hardware and provides a platform for applications",
        prac_007: "1024",
        prac_008: "RAM is temporary; storage is permanent",
        prac_009: "A computer architecture with a single memory for instructions and data",
        prac_010: "Fetch, Decode, Execute",
        prac_011: "Because it represents on/off states",
        prac_012: "They have changed how we work, learn, and communicate"
      },
      assessment: {
        ass_001: "An electronic device that processes data",
        ass_002: "Hardware, software, and firmware",
        ass_003: "Input-Process-Output",
        ass_004: "Desktop, laptop, tablet (or smartphone, server)",
        ass_005: "Processes instructions and data",
        ass_006: "Hardware is physical; software is programs",
        ass_007: "Manages hardware and provides a platform for applications",
        ass_008: "8",
        ass_009: "RAM is temporary; storage is permanent",
        ass_010: "A computer architecture with a single memory for instructions and data",
        ass_011: "Fetch, Decode, Execute",
        ass_012: "They have changed how we work, learn, and communicate"
      }
    },
    extensionActivities: [
      "Research the history of computers",
      "Build a simple model of a computer",
      "Explore different types of computers",
      "Research the impact of computers on society"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use visual aids",
        "Practice with simple examples",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research advanced computer architecture",
        "Explore quantum computing",
        "Study the history of computing",
        "Investigate computer security"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "IPO Model",
      description: "Diagram showing the Input-Process-Output model",
      url: "/diagrams/ipo-model.png",
      alt: "IPO model diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Von Neumann Architecture",
      description: "Diagram showing Von Neumann architecture",
      url: "/diagrams/von-neumann.png",
      alt: "Von Neumann architecture diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Storage Units",
      description: "Chart showing data storage units",
      url: "/diagrams/storage-units.png",
      alt: "Storage units chart"
    }
  ]
};