// Location: src/data/lessons/science/physics/electronics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_electronics",
  subject: "Physics",
  topic: "Electronics",
  name: "Electronics",
  icon: "💻",
  grade_level: "SS2 - SS3",
  estimated_duration: "45 minutes",

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
    "Understanding of electricity",
    "Knowledge of current and voltage",
    "Understanding of resistance",
    "Basic knowledge of semiconductors"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Physics lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define electronics and explain its importance",
      indicator: "Student can explain what electronics is and its applications"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the difference between conductors, insulators, and semiconductors",
      indicator: "Student can classify materials as conductors, insulators, or semiconductors"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the function of a diode",
      indicator: "Student can explain that a diode allows current to flow in one direction only"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the function of a transistor",
      indicator: "Student can explain that a transistor acts as a switch or amplifier"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the function of a capacitor",
      indicator: "Student can describe how capacitors store charge"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the function of a resistor",
      indicator: "Student can describe how resistors limit current"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the function of an integrated circuit (IC)",
      indicator: "Student can explain what an IC is and its applications"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Explain how a transistor works as a switch",
      indicator: "Student can describe the switching action of a transistor"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain how a transistor works as an amplifier",
      indicator: "Student can describe how a transistor amplifies signals"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain rectification using diodes",
      indicator: "Student can explain how diodes convert AC to DC"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze simple electronic circuits",
      indicator: "Student can analyze circuits with diodes and transistors"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the applications of electronics in modern technology",
      indicator: "Student can explain the role of electronics in society"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Electronics - Components and Circuits",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about electronic components, diodes, transistors, and circuits."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Electronics?</h2>
      <p><strong>Electronics</strong> is the branch of physics that deals with the control of electrons in devices. It involves the study and use of components like diodes, transistors, capacitors, and integrated circuits.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Key Components</h3>
          <ul>
            <li>✓ Resistors</li>
            <li>✓ Capacitors</li>
            <li>✓ Diodes</li>
            <li>✓ Transistors</li>
            <li>✓ Integrated Circuits</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Applications</h3>
          <ul>
            <li>✓ Smartphones</li>
            <li>✓ Computers</li>
            <li>✓ Televisions</li>
            <li>✓ Medical devices</li>
            <li>✓ Communication systems</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Semiconductors</h4>
        <ul>
          <li>✓ Materials with conductivity between conductors and insulators</li>
          <li>✓ Examples: Silicon, Germanium</li>
          <li>✓ Used to make electronic components</li>
          <li>✓ Doping adds impurities to control conductivity</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Conductors, Insulators, and Semiconductors",
        objective: "obj_002",
        text: `
          <h3>Types of Materials</h3>
          <p>Materials are classified based on their ability to conduct electricity.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Conductors</h4>
              <ul>
                <li>✓ Allow current to flow easily</li>
                <li>✓ Low resistance</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Copper</li>
                  <li>Aluminum</li>
                  <li>Silver</li>
                  <li>Gold</li>
                </ul>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Semiconductors</h4>
              <ul>
                <li>✓ Conductivity between conductors and insulators</li>
                <li>✓ Can be controlled</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Silicon</li>
                  <li>Germanium</li>
                  <li>Gallium arsenide</li>
                </ul>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Insulators</h4>
              <ul>
                <li>✓ Do not allow current to flow</li>
                <li>✓ High resistance</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Rubber</li>
                  <li>Plastic</li>
                  <li>Glass</li>
                  <li>Wood</li>
                </ul>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Resistors",
        objective: "obj_006",
        text: `
          <h3>Resistors</h3>
          <p>A <strong>resistor</strong> is a component that opposes the flow of electric current.</p>
          
          <div class="example-box">
            <strong>📌 Properties:</strong>
            <ul>
              <li>✓ Measured in Ohms (Ω)</li>
              <li>✓ Limits current in a circuit</li>
              <li>✓ Color bands indicate resistance value</li>
              <li>✓ Used for voltage division and current limiting</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Types:</strong>
            <ul>
              <li>✓ <strong>Fixed resistor:</strong> Constant resistance</li>
              <li>✓ <strong>Variable resistor (potentiometer):</strong> Adjustable resistance</li>
              <li>✓ <strong>Thermistor:</strong> Resistance changes with temperature</li>
              <li>✓ <strong>LDR (Light Dependent Resistor):</strong> Resistance changes with light</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Capacitors",
        objective: "obj_005",
        text: `
          <h3>Capacitors</h3>
          <p>A <strong>capacitor</strong> is a component that stores electric charge.</p>
          
          <div class="example-box">
            <strong>📌 Properties:</strong>
            <ul>
              <li>✓ Stores charge on two plates</li>
              <li>✓ Measured in Farads (F)</li>
              <li>✓ Can store and release energy quickly</li>
              <li>✓ Blocks DC but passes AC</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Capacitance Formula:</h4>
            <p><strong>C = Q/V</strong></p>
            <ul>
              <li>C = Capacitance (Farads)</li>
              <li>Q = Charge (Coulombs)</li>
              <li>V = Voltage (Volts)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li>✓ Power supply smoothing</li>
              <li>✓ Timing circuits</li>
              <li>✓ Filtering in audio equipment</li>
              <li>✓ Energy storage</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Diodes",
        objective: "obj_003",
        text: `
          <h3>Diodes</h3>
          <p>A <strong>diode</strong> is a semiconductor device that allows current to flow in one direction only.</p>
          
          <div class="example-box">
            <strong>📌 Key Properties:</strong>
            <ul>
              <li>✓ Allows current to flow from anode to cathode</li>
              <li>✓ Blocks current in reverse direction</li>
              <li>✓ Has a forward voltage drop (~0.7V for silicon)</li>
              <li>✓ Used for rectification</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li>✓ <strong>Rectification:</strong> Converts AC to DC</li>
              <li>✓ <strong>LED:</strong> Light Emitting Diode (produces light)</li>
              <li>✓ <strong>Protection:</strong> Prevents reverse current</li>
              <li>✓ <strong>Signal demodulation:</strong> In radio receivers</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Rectification",
        objective: "obj_010",
        text: `
          <h3>Rectification</h3>
          <p><strong>Rectification</strong> is the process of converting alternating current (AC) to direct current (DC) using diodes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Half-Wave Rectification</h4>
              <ul>
                <li>✓ Uses one diode</li>
                <li>✓ Only positive half of AC passes</li>
                <li>✓ Inefficient</li>
                <li>✓ Simple circuit</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Full-Wave Rectification</h4>
              <ul>
                <li>✓ Uses four diodes (bridge rectifier)</li>
                <li>✓ Both halves of AC are used</li>
                <li>✓ More efficient</li>
                <li>✓ Smoother output</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Transistors",
        objective: "obj_004",
        text: `
          <h3>Transistors</h3>
          <p>A <strong>transistor</strong> is a semiconductor device that can amplify or switch electronic signals.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types:</h4>
              <ul>
                <li><strong>BJT (Bipolar Junction Transistor):</strong></li>
                <ul>
                  <li>NPN type</li>
                  <li>PNP type</li>
                </ul>
                <li><strong>FET (Field Effect Transistor):</strong></li>
                <ul>
                  <li>JFET</li>
                  <li>MOSFET</li>
                </ul>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions:</h4>
              <ul>
                <li>✓ <strong>Amplifier:</strong> Increases signal strength</li>
                <li>✓ <strong>Switch:</strong> Turns current on/off</li>
                <li>✓ <strong>Oscillator:</strong> Generates signals</li>
                <li>✓ <strong>Regulator:</strong> Maintains voltage</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Transistor as a Switch:</strong>
            <ul>
              <li>✓ Base current controls collector current</li>
              <li>✓ Small base current switches larger collector current</li>
              <li>✓ Used in logic circuits</li>
              <li>✓ Used in microcontrollers</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Integrated Circuits",
        objective: "obj_007",
        text: `
          <h3>Integrated Circuits</h3>
          <p>An <strong>integrated circuit (IC)</strong> is a complete electronic circuit fabricated on a single semiconductor chip.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Contains thousands of transistors</li>
              <li>✓ Small size</li>
              <li>✓ Low power consumption</li>
              <li>✓ High reliability</li>
              <li>✓ Mass production</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Types:</strong>
            <ul>
              <li>✓ <strong>Analog ICs:</strong> Process continuous signals</li>
              <li>✓ <strong>Digital ICs:</strong> Process binary signals</li>
              <li>✓ <strong>Mixed-signal ICs:</strong> Both analog and digital</li>
              <li>✓ <strong>Microprocessors:</strong> Central processing units</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Applications of Electronics",
        objective: "obj_012",
        text: `
          <h3>Electronics in Modern Life</h3>
          <p>Electronics are everywhere in modern society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Communication:</h4>
              <ul>
                <li>✓ Smartphones</li>
                <li>✓ Computers and tablets</li>
                <li>✓ Satellite communication</li>
                <li>✓ Fiber optic networks</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Medical:</h4>
              <ul>
                <li>✓ MRI and CT scanners</li>
                <li>✓ Pacemakers</li>
                <li>✓ Medical monitors</li>
                <li>✓ Imaging equipment</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Entertainment:</h4>
              <ul>
                <li>✓ Televisions</li>
                <li>✓ Audio systems</li>
                <li>✓ Gaming consoles</li>
                <li>✓ Streaming devices</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Industry:</h4>
              <ul>
                <li>✓ Robotics</li>
                <li>✓ Automation</li>
                <li>✓ Control systems</li>
                <li>✓ Power electronics</li>
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
          <h4>💻 Electronics</h4>
          <ul>
            <li>✓ Resistors limit current</li>
            <li>✓ Capacitors store charge</li>
            <li>✓ Diodes allow one-way current</li>
            <li>✓ Transistors amplify/switch</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Components</h4>
          <ul>
            <li>✓ Semiconductors: Silicon, Germanium</li>
            <li>✓ Integrated circuits</li>
            <li>✓ Rectification: AC → DC</li>
            <li>✓ Essential in modern life</li>
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
        misconception: "Semiconductors are poor conductors",
        correction: "Semiconductors can be made to conduct with doping",
        explanation: "Doping allows semiconductors to conduct in controlled ways."
      },
      {
        id: "mis_002",
        misconception: "Diodes allow current to flow in both directions",
        correction: "Diodes allow current to flow in only one direction",
        explanation: "Diodes only allow current to flow from anode to cathode."
      },
      {
        id: "mis_003",
        misconception: "Transistors are only amplifiers",
        correction: "Transistors can also act as switches",
        explanation: "Transistors are used as both amplifiers and switches in electronics."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Smartphones",
        description: "Smartphones use many electronic components.",
        example: "Microprocessors, memory, displays, and sensors."
      },
      {
        id: "app_002",
        title: "Computers",
        description: "Computers are made of electronic circuits.",
        example: "CPUs, memory, motherboards, and storage devices."
      },
      {
        id: "app_003",
        title: "Medical Devices",
        description: "Electronic devices are used in medicine.",
        example: "Pacemakers, monitors, and imaging equipment."
      },
      {
        id: "app_004",
        title: "Automotive",
        description: "Modern vehicles use many electronic systems.",
        example: "Engine control units, navigation, and safety systems."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Electronics", definition: "The study and control of electrons in devices." },
    { term: "Semiconductor", definition: "A material with conductivity between conductor and insulator." },
    { term: "Resistor", definition: "A component that opposes current flow." },
    { term: "Capacitor", definition: "A component that stores electrical charge." },
    { term: "Diode", definition: "A device that allows current to flow in one direction only." },
    { term: "Transistor", definition: "A semiconductor device that amplifies or switches signals." },
    { term: "Integrated Circuit", definition: "A complete circuit on a single semiconductor chip." },
    { term: "Rectification", definition: "The conversion of AC to DC." },
    { term: "Doping", definition: "Adding impurities to a semiconductor to control conductivity." },
    { term: "Amplification", definition: "Increasing the strength of a signal." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is electronics?",
      type: "multiple_choice",
      options: [
        "The study of electricity",
        "The control of electrons in devices",
        "The study of magnets",
        "The study of light"
      ],
      answer: "The control of electrons in devices",
      explanation: "Electronics is the branch of physics dealing with the control of electrons in devices."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which material is a semiconductor?",
      type: "multiple_choice",
      options: ["Copper", "Silicon", "Rubber", "Aluminum"],
      answer: "Silicon",
      explanation: "Silicon is a semiconductor used in electronic components."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does a diode do?",
      type: "multiple_choice",
      options: [
        "Allows current in both directions",
        "Allows current in one direction only",
        "Stores charge",
        "Limits current"
      ],
      answer: "Allows current in one direction only",
      explanation: "A diode allows current to flow from anode to cathode only."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What are the two main functions of a transistor?",
      type: "multiple_choice",
      options: [
        "Amplify and switch",
        "Store and release charge",
        "Conduct and insulate",
        "Rectify and filter"
      ],
      answer: "Amplify and switch",
      explanation: "Transistors can act as amplifiers or switches."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What does a capacitor do?",
      type: "multiple_choice",
      options: [
        "Limits current",
        "Stores electric charge",
        "Allows current in one direction",
        "Amplifies signals"
      ],
      answer: "Stores electric charge",
      explanation: "A capacitor stores electric charge on two plates."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What does a resistor do?",
      type: "multiple_choice",
      options: [
        "Stores charge",
        "Limits current",
        "Allows current in one direction",
        "Switches current"
      ],
      answer: "Limits current",
      explanation: "A resistor opposes current flow, limiting the amount of current in a circuit."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is an integrated circuit?",
      type: "multiple_choice",
      options: [
        "A single component",
        "A complete circuit on a chip",
        "A type of resistor",
        "A type of capacitor"
      ],
      answer: "A complete circuit on a chip",
      explanation: "An IC is a complete electronic circuit fabricated on a single chip."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "How does a transistor work as a switch?",
      type: "multiple_choice",
      options: [
        "It turns current on and off",
        "It amplifies current",
        "It stores charge",
        "It rectifies current"
      ],
      answer: "It turns current on and off",
      explanation: "A transistor switch turns current on/off based on the base current."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "How does a transistor work as an amplifier?",
      type: "multiple_choice",
      options: [
        "It increases the current",
        "It increases the voltage",
        "It increases the power of a signal",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "A transistor amplifier increases current, voltage, and power of a signal."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is rectification?",
      type: "multiple_choice",
      options: [
        "Converting AC to DC",
        "Converting DC to AC",
        "Converting voltage to current",
        "Converting current to voltage"
      ],
      answer: "Converting AC to DC",
      explanation: "Rectification is the process of converting alternating current to direct current."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "How many diodes are used in a full-wave bridge rectifier?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "4",
      explanation: "A bridge rectifier uses four diodes arranged in a bridge configuration."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "What controls a BJT transistor?",
      type: "multiple_choice",
      options: [
        "Base current",
        "Collector current",
        "Emitter current",
        "Voltage only"
      ],
      answer: "Base current",
      explanation: "The base current controls the collector current in a BJT transistor."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which industry uses the most electronics?",
      type: "multiple_choice",
      options: [
        "Agriculture",
        "Electronics and Technology",
        "Construction",
        "Mining"
      ],
      answer: "Electronics and Technology",
      explanation: "The electronics and technology industry is the largest user of electronic components."
    },
    {
      id: "prac_014",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the output of a rectifier circuit?",
      type: "multiple_choice",
      options: [
        "AC current",
        "DC current",
        "No current",
        "Variable current"
      ],
      answer: "DC current",
      explanation: "A rectifier circuit outputs direct current (DC) from alternating current (AC)."
    },
    {
      id: "prac_015",
      objective: "obj_012",
      difficulty: "hard",
      question: "What electronic component is used in the processor of a computer?",
      type: "multiple_choice",
      options: [
        "Diode",
        "Resistor",
        "Integrated circuit (microprocessor)",
        "Capacitor"
      ],
      answer: "Integrated circuit (microprocessor)",
      explanation: "The CPU of a computer is a microprocessor, which is an integrated circuit."
    },
    {
      id: "prac_016",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the purpose of a transistor amplifier?",
      type: "multiple_choice",
      options: [
        "To increase the power of a signal",
        "To decrease the power of a signal",
        "To store signals",
        "To filter signals"
      ],
      answer: "To increase the power of a signal",
      explanation: "A transistor amplifier increases the power of a signal."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_electronics",
    title: "Electronics Quiz",
    description: "Test your understanding of electronics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is electronics?",
        type: "short_answer",
        answer_key: "The control of electrons in devices",
        explanation: "Electronics is the branch of physics dealing with the control of electrons in devices."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a semiconductor?",
        type: "short_answer",
        answer_key: "A material with conductivity between a conductor and an insulator",
        explanation: "Semiconductors have conductivity between conductors and insulators."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give two examples of semiconductors.",
        type: "short_answer",
        answer_key: "Silicon and Germanium",
        explanation: "Silicon and Germanium are the most common semiconductors."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "What is the function of a diode?",
        type: "short_answer",
        answer_key: "Allows current to flow in one direction only",
        explanation: "A diode allows current to flow from anode to cathode only."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What are the two main functions of a transistor?",
        type: "short_answer",
        answer_key: "Amplification and switching",
        explanation: "Transistors can amplify signals or act as switches."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of a capacitor?",
        type: "short_answer",
        answer_key: "To store electric charge",
        explanation: "Capacitors store electric charge on two plates."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the function of a resistor?",
        type: "short_answer",
        answer_key: "To limit current",
        explanation: "Resistors oppose current flow, limiting current in a circuit."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is an integrated circuit?",
        type: "short_answer",
        answer_key: "A complete electronic circuit on a single chip",
        explanation: "An IC contains thousands of components on one semiconductor chip."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is rectification and what is it used for?",
        type: "short_answer",
        answer_key: "Converting AC to DC using diodes",
        explanation: "Rectification converts alternating current to direct current."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Give two applications of electronics in everyday life.",
        type: "short_answer",
        answer_key: "Smartphones and computers (or any two valid applications)",
        explanation: "Electronics are used in smartphones, computers, TVs, and many other devices."
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
        "Understand electronic components",
        "Explain the function of diodes and transistors",
        "Understand rectification",
        "Apply electronic concepts"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is electronics?" },
        { time: "5-10 min", activity: "Direct Instruction - Conductors, Insulators, Semiconductors" },
        { time: "10-15 min", activity: "Direct Instruction - Resistors and Capacitors" },
        { time: "15-20 min", activity: "Direct Instruction - Diodes and Rectification" },
        { time: "20-25 min", activity: "Direct Instruction - Transistors" },
        { time: "25-30 min", activity: "Direct Instruction - Integrated Circuits" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The control of electrons in devices",
        // ... full answer key
      },
      assessment: {
        ass_001: "The control of electrons in devices",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Build a simple circuit with a diode",
      "Research the history of the transistor",
      "Create a poster of electronic components",
      "Visit an electronics repair shop"
    ],
    differentiation: {
      struggling: [
        "Focus on basic components",
        "Use visual diagrams",
        "Practice with simple circuits",
        "Provide a summary sheet"
      ],
      advanced: [
        "Research modern electronics",
        "Explore integrated circuit fabrication",
        "Investigate microprocessors",
        "Study the history of electronics"
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
      title: "Electronic Components",
      description: "Diagram showing common electronic components",
      url: "/diagrams/electronic-components.png",
      alt: "Electronic components diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Rectifier Circuit",
      description: "Diagram showing half-wave and full-wave rectification",
      url: "/diagrams/rectifier-circuit.png",
      alt: "Rectifier circuit diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Transistor Operation",
      description: "Diagram showing how a transistor works",
      url: "/diagrams/transistor-operation.png",
      alt: "Transistor operation diagram"
    }
  ]
};