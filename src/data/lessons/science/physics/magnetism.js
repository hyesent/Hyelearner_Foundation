// Location: src/data/lessons/science/physics/magnetism.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_magnetism",
  subject: "Physics",
  topic: "Magnetism",
  name: "Magnetism",
  icon: "🧲",
  grade_level: "SS1 - SS3",
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
    "Understanding of electric charge",
    "Basic knowledge of forces",
    "Understanding of magnetic fields",
    "Knowledge of compasses"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_electronics",
      name: "Electronics",
      file: "science/physics/electronics.js"
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
      description: "Define magnetism and explain the properties of magnets",
      indicator: "Student can describe the basic properties of magnets"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the difference between magnetic and non-magnetic materials",
      indicator: "Student can classify materials as magnetic or non-magnetic"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the poles of a magnet and explain attraction and repulsion",
      indicator: "Student can state that like poles repel and unlike poles attract"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain magnetic fields and field lines",
      indicator: "Student can describe magnetic field patterns using field lines"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain how the Earth acts as a magnet",
      indicator: "Student can explain why a compass points north"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain electromagnetism and its applications",
      indicator: "Student can describe how electric current produces a magnetic field"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the magnetic field around a current-carrying wire",
      indicator: "Student can describe the right-hand grip rule"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Explain the magnetic field of a solenoid",
      indicator: "Student can describe the magnetic field pattern of a solenoid"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain how electromagnets work and their applications",
      indicator: "Student can explain the working of electromagnets"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain magnetic induction and how materials become magnetized",
      indicator: "Student can explain how materials become magnetized"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Apply the right-hand rule to determine magnetic field direction",
      indicator: "Student can determine field direction using the right-hand rule"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze real-world applications of magnetism",
      indicator: "Student can explain how magnetism is used in everyday devices"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Magnetism - Magnets, Fields, and Electromagnetism",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about magnets, magnetic fields, and electromagnetism."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Magnetism?</h2>
      <p><strong>Magnetism</strong> is the force exerted by magnets when they attract or repel each other. It is caused by the motion of electric charges and is a fundamental force of nature.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧲 Basic Properties</h3>
          <ul>
            <li>✓ Magnets have North and South poles</li>
            <li>✓ Like poles repel; unlike poles attract</li>
            <li>✓ Magnetic forces act at a distance</li>
            <li>✓ Magnetic field lines flow from N to S</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Types of Materials</h3>
          <ul>
            <li><strong>Ferromagnetic:</strong> Iron, steel, nickel, cobalt</li>
            <li><strong>Paramagnetic:</strong> Aluminum, platinum</li>
            <li><strong>Diamagnetic:</strong> Copper, gold, water</li>
            <li><strong>Non-magnetic:</strong> Wood, plastic, glass</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Earth as a Magnet</h4>
        <ul>
          <li>✓ Earth has a magnetic field</li>
          <li>✓ Magnetic poles are near the geographic poles</li>
          <li>✓ Compass needles align with Earth's magnetic field</li>
          <li>✓ The North pole of a compass points to Earth's magnetic south pole</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Properties of Magnets",
        objective: "obj_001",
        text: `
          <h3>Basic Properties</h3>
          <p>Magnets have several important properties.</p>
          
          <div class="example-box">
            <strong>📌 Key Properties:</strong>
            <ul>
              <li>✓ <strong>Poles:</strong> Every magnet has a North (N) and South (S) pole</li>
              <li>✓ <strong>Attraction/Repulsion:</strong> Like poles repel; unlike poles attract</li>
              <li>✓ <strong>Range:</strong> Magnetic forces act at a distance</li>
              <li>✓ <strong>Induction:</strong> Magnets can magnetize certain materials</li>
              <li>✓ <strong>Permanent:</strong> Some materials retain magnetism; others do not</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ A bar magnet has N at one end and S at the other</li>
              <li>✓ When two magnets are brought together, like poles repel</li>
              <li>✓ Opposite poles attract and stick together</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Magnetic Fields",
        objective: "obj_004",
        text: `
          <h3>Magnetic Fields</h3>
          <p>A <strong>magnetic field</strong> is the region around a magnet where magnetic forces can be detected.</p>
          
          <div class="example-box">
            <strong>📌 Magnetic Field Lines:</strong>
            <ul>
              <li>✓ Flow from North pole to South pole outside the magnet</li>
              <li>✓ Flow from South to North inside the magnet</li>
              <li>✓ Field lines never cross</li>
              <li>✓ Closer lines = stronger field</li>
              <li>✓ Show the direction of the magnetic force</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Mapping a Magnetic Field:</strong>
            <ul>
              <li>✓ Using a compass: The needle aligns with field lines</li>
              <li>✓ Using iron filings: They align along field lines</li>
              <li>✓ Field lines emerge from N and enter S</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Earth's Magnetic Field",
        objective: "obj_005",
        text: `
          <h3>Earth as a Magnet</h3>
          <p>The Earth behaves like a giant magnet with its magnetic poles near the geographic poles.</p>
          
          <div class="example-box">
            <strong>📌 Key Facts:</strong>
            <ul>
              <li>✓ Earth's magnetic field protects us from solar wind</li>
              <li>✓ The magnetic North pole is near the geographic South pole</li>
              <li>✓ A compass needle points to magnetic North</li>
              <li>✓ The magnetic poles are not exactly at the geographic poles</li>
              <li>✓ The magnetic field reverses polarity over geological time</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Why Compasses Work:</strong>
            <ul>
              <li>✓ A compass is a small magnet that can rotate freely</li>
              <li>✓ It aligns with Earth's magnetic field</li>
              <li>✓ The North pole of the compass points to Earth's magnetic South pole</li>
              <li>✓ Used for navigation for centuries</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Electromagnetism",
        objective: "obj_006",
        text: `
          <h3>Electromagnetism</h3>
          <p><strong>Electromagnetism</strong> is the relationship between electricity and magnetism. A current-carrying wire produces a magnetic field.</p>
          
          <div class="example-box">
            <strong>📌 Key Principles:</strong>
            <ul>
              <li>✓ A current-carrying wire has a magnetic field around it</li>
              <li>✓ The field is circular around the wire</li>
              <li>✓ The direction depends on the direction of current</li>
              <li>✓ The strength depends on the current and distance from the wire</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Right-Hand Grip Rule:</strong>
            <ul>
              <li>✓ Point thumb in the direction of current</li>
              <li>✓ Fingers curl in the direction of the magnetic field</li>
              <li>✓ Used to determine the direction of the magnetic field</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Magnetic Field of a Solenoid",
        objective: "obj_008",
        text: `
          <h3>Solenoid</h3>
          <p>A <strong>solenoid</strong> is a coil of wire that produces a magnetic field when current flows through it.</p>
          
          <div class="example-box">
            <strong>📌 Properties of a Solenoid:</strong>
            <ul>
              <li>✓ The magnetic field is similar to a bar magnet</li>
              <li>✓ Has N and S poles at its ends</li>
              <li>✓ Field lines are parallel and uniform inside</li>
              <li>✓ Field strength increases with number of turns and current</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Determining the Poles:</strong>
            <ul>
              <li>✓ Looking at one end of the solenoid:</li>
              <li>✓ If current is clockwise → S pole</li>
              <li>✓ If current is counterclockwise → N pole</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Electromagnets",
        objective: "obj_009",
        text: `
          <h3>Electromagnets</h3>
          <p>An <strong>electromagnet</strong> is a solenoid with a ferromagnetic core (usually iron).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Advantages of Electromagnets:</h4>
              <ul>
                <li>✓ Can be turned on and off</li>
                <li>✓ Strength can be varied</li>
                <li>✓ Can be very powerful</li>
                <li>✓ Poles can be reversed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications:</h4>
              <ul>
                <li>✓ Scrap yard cranes</li>
                <li>✓ Electric motors</li>
                <li>✓ Relays and switches</li>
                <li>✓ Speakers and headphones</li>
                <li>✓ MRI scanners</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Magnetic Induction",
        objective: "obj_010",
        text: `
          <h3>Magnetic Induction</h3>
          <p><strong>Magnetic induction</strong> is the process by which a material becomes magnetized when placed in a magnetic field.</p>
          
          <div class="example-box">
            <strong>📌 How Induction Works:</strong>
            <ul>
              <li>✓ A magnetic material is placed near a magnet</li>
              <li>✓ The material becomes magnetized</li>
              <li>✓ If removed from the field, it may retain some magnetism</li>
              <li>✓ Soft iron loses magnetism quickly (temporary)</li>
              <li>✓ Steel retains magnetism (permanent)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Types of Magnetic Materials:</strong>
            <ul>
              <li><strong>Soft magnetic:</strong> Iron, ferrites (easy to magnetize/demagnetize)</li>
              <li><strong>Hard magnetic:</strong> Steel, alloys (hard to demagnetize)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Applications of Magnetism",
        objective: "obj_012",
        text: `
          <h3>Everyday Applications</h3>
          <p>Magnetism is used in many everyday devices.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 In the Home:</h4>
              <ul>
                <li>✓ Refrigerator magnets</li>
                <li>✓ Speakers and headphones</li>
                <li>✓ Electric motors in appliances</li>
                <li>✓ Magnetic door catches</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 In Technology:</h4>
              <ul>
                <li>✓ Hard drives (data storage)</li>
                <li>✓ MRI scanners</li>
                <li>✓ Maglev trains</li>
                <li>✓ Generators and transformers</li>
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
          <h4>🧲 Magnetism</h4>
          <ul>
            <li>✓ Magnets have N and S poles</li>
            <li>✓ Like poles repel; unlike poles attract</li>
            <li>✓ Magnetic fields flow N → S outside</li>
            <li>✓ Earth is a giant magnet</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Electromagnetism</h4>
          <ul>
            <li>✓ Current produces magnetic fields</li>
            <li>✓ Solenoids create strong magnetic fields</li>
            <li>✓ Electromagnets are versatile</li>
            <li>✓ Used in many devices</li>
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
        misconception: "The North pole of a compass points to geographic North",
        correction: "It points to Earth's magnetic South pole (near geographic North)",
        explanation: "A compass's North pole is attracted to Earth's magnetic South pole."
      },
      {
        id: "mis_002",
        misconception: "All metals are magnetic",
        correction: "Only ferromagnetic metals are magnetic (iron, steel, nickel, cobalt)",
        explanation: "Most metals like copper and aluminum are not magnetic."
      },
      {
        id: "mis_003",
        misconception: "Magnetic fields can be seen",
        correction: "Magnetic fields are invisible but can be mapped with iron filings",
        explanation: "Magnetic fields are not directly visible to the human eye."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Navigation",
        description: "Compasses are used for navigation.",
        example: "Ships, planes, and hikers use compasses."
      },
      {
        id: "app_002",
        title: "Medical",
        description: "MRI scanners use strong magnetic fields.",
        example: "Magnetic Resonance Imaging for diagnosis."
      },
      {
        id: "app_003",
        title: "Transportation",
        description: "Maglev trains use magnetic levitation.",
        example: "Trains float above tracks using magnets."
      },
      {
        id: "app_004",
        title: "Data Storage",
        description: "Magnetic storage is used in hard drives.",
        example: "Computers use magnetic disks for storage."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Magnet", definition: "An object that produces a magnetic field." },
    { term: "Magnetic Pole", definition: "The north or south end of a magnet." },
    { term: "Magnetic Field", definition: "The region around a magnet where magnetic forces act." },
    { term: "Ferromagnetic", definition: "Materials that are strongly attracted to magnets." },
    { term: "Solenoid", definition: "A coil of wire that produces a magnetic field." },
    { term: "Electromagnet", definition: "A solenoid with a magnetic core." },
    { term: "Magnetic Induction", definition: "The process of magnetizing a material." },
    { term: "Compass", definition: "A device that uses magnetism to find direction." },
    { term: "Magnetic Flux", definition: "The measure of magnetic field passing through an area." },
    { term: "Right-Hand Rule", definition: "A rule to determine the direction of magnetic fields." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What are the two poles of a magnet called?",
      type: "multiple_choice",
      options: ["Positive and Negative", "North and South", "East and West", "Top and Bottom"],
      answer: "North and South",
      explanation: "Every magnet has a North (N) and South (S) pole."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which material is magnetic?",
      type: "multiple_choice",
      options: ["Copper", "Aluminum", "Iron", "Plastic"],
      answer: "Iron",
      explanation: "Iron is a ferromagnetic material that is magnetic."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What happens when like poles of two magnets are brought together?",
      type: "multiple_choice",
      options: ["They attract", "They repel", "Nothing happens", "They stick together"],
      answer: "They repel",
      explanation: "Like poles (N-N or S-S) repel each other."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "In which direction do magnetic field lines flow outside a magnet?",
      type: "multiple_choice",
      options: ["From South to North", "From North to South", "From East to West", "From West to East"],
      answer: "From North to South",
      explanation: "Magnetic field lines flow from North to South outside a magnet."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Why does a compass point north?",
      type: "multiple_choice",
      options: [
        "The Earth has a magnetic field",
        "The Earth is made of iron",
        "The Earth rotates",
        "The Earth's atmosphere"
      ],
      answer: "The Earth has a magnetic field",
      explanation: "A compass aligns with Earth's magnetic field, pointing north."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What produces a magnetic field around a wire?",
      type: "multiple_choice",
      options: ["Current", "Voltage", "Resistance", "Power"],
      answer: "Current",
      explanation: "An electric current produces a magnetic field around a wire."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does the right-hand grip rule determine?",
      type: "multiple_choice",
      options: ["Voltage", "Current", "Magnetic field direction", "Resistance"],
      answer: "Magnetic field direction",
      explanation: "The right-hand grip rule determines the direction of the magnetic field."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is a solenoid?",
      type: "multiple_choice",
      options: [
        "A straight wire",
        "A coil of wire",
        "A permanent magnet",
        "A resistor"
      ],
      answer: "A coil of wire",
      explanation: "A solenoid is a coil of wire that produces a magnetic field when current flows."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is an electromagnet?",
      type: "multiple_choice",
      options: [
        "A permanent magnet",
        "A solenoid with a magnetic core",
        "A piece of iron",
        "A coil of copper wire"
      ],
      answer: "A solenoid with a magnetic core",
      explanation: "An electromagnet is a solenoid with a ferromagnetic core that can be turned on/off."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is magnetic induction?",
      type: "multiple_choice",
      options: [
        "The process of making a material magnetic",
        "The process of demagnetizing a material",
        "The movement of magnetic poles",
        "The heating of magnetic materials"
      ],
      answer: "The process of making a material magnetic",
      explanation: "Magnetic induction is the process by which a material becomes magnetized in a magnetic field."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is an advantage of an electromagnet over a permanent magnet?",
      type: "multiple_choice",
      options: [
        "It is stronger",
        "It can be turned on and off",
        "It is cheaper",
        "It never demagnetizes"
      ],
      answer: "It can be turned on and off",
      explanation: "Electromagnets can be turned on and off, unlike permanent magnets."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "Using the right-hand grip rule, if current flows away from you, what is the direction of the magnetic field?",
      type: "multiple_choice",
      options: ["Clockwise", "Counterclockwise", "Inward", "Outward"],
      answer: "Clockwise",
      explanation: "If current flows away from you, the magnetic field is clockwise."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "How does the magnetic field inside a solenoid compare to outside?",
      type: "multiple_choice",
      options: [
        "Stronger inside, weaker outside",
        "Weaker inside, stronger outside",
        "Same everywhere",
        "No field inside"
      ],
      answer: "Stronger inside, weaker outside",
      explanation: "The magnetic field is strong and uniform inside a solenoid, weaker outside."
    },
    {
      id: "prac_014",
      objective: "obj_012",
      difficulty: "hard",
      question: "Which device uses electromagnets?",
      type: "multiple_choice",
      options: [
        "Refrigerator magnet",
        "Electric motor",
        "Compass",
        "Bar magnet"
      ],
      answer: "Electric motor",
      explanation: "Electric motors use electromagnets to convert electrical energy to mechanical energy."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which material is used for the core of an electromagnet?",
      type: "multiple_choice",
      options: ["Steel", "Iron", "Copper", "Aluminum"],
      answer: "Iron",
      explanation: "Soft iron is used because it is easy to magnetize and demagnetize."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is used in data storage on hard drives?",
      type: "multiple_choice",
      options: ["Copper", "Magnetism", "Light", "Sound"],
      answer: "Magnetism",
      explanation: "Hard drives use magnetism to store data magnetically."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_magnetism",
    title: "Magnetism Quiz",
    description: "Test your understanding of magnetism",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the two poles of a magnet called?",
        type: "short_answer",
        answer_key: "North and South",
        explanation: "Every magnet has a North and South pole."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name three magnetic materials.",
        type: "short_answer",
        answer_key: "Iron, steel, nickel (or cobalt)",
        explanation: "Iron, steel, nickel, and cobalt are ferromagnetic materials."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What happens when unlike poles of magnets are brought together?",
        type: "short_answer",
        answer_key: "They attract",
        explanation: "Unlike poles (N-S) attract each other."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "In what direction do magnetic field lines flow outside a magnet?",
        type: "short_answer",
        answer_key: "From North to South",
        explanation: "Magnetic field lines flow from North to South outside the magnet."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Why does a compass point north?",
        type: "short_answer",
        answer_key: "Because the Earth has a magnetic field",
        explanation: "A compass needle aligns with Earth's magnetic field."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What produces a magnetic field around a wire?",
        type: "short_answer",
        answer_key: "Electric current",
        explanation: "A current-carrying wire produces a magnetic field."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does the right-hand grip rule determine?",
        type: "short_answer",
        answer_key: "The direction of the magnetic field",
        explanation: "The right-hand grip rule determines the direction of the magnetic field around a current-carrying wire."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a solenoid and what does it produce?",
        type: "short_answer",
        answer_key: "A coil of wire that produces a magnetic field",
        explanation: "A solenoid is a coil of wire that produces a magnetic field when current flows."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the difference between an electromagnet and a permanent magnet?",
        type: "short_answer",
        answer_key: "An electromagnet can be turned on/off; a permanent magnet cannot",
        explanation: "Electromagnets can be controlled; permanent magnets are always magnetic."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Give two applications of electromagnets.",
        type: "short_answer",
        answer_key: "Electric motors and magnetic cranes (or any other two)",
        explanation: "Electromagnets are used in motors, cranes, relays, and many other devices."
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
        "Understand the properties of magnets",
        "Explain magnetic fields",
        "Understand electromagnetism",
        "Apply magnetic concepts"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is magnetism?" },
        { time: "5-10 min", activity: "Direct Instruction - Properties of Magnets" },
        { time: "10-15 min", activity: "Direct Instruction - Magnetic Fields" },
        { time: "15-20 min", activity: "Direct Instruction - Earth's Magnetic Field" },
        { time: "20-25 min", activity: "Direct Instruction - Electromagnetism" },
        { time: "25-30 min", activity: "Direct Instruction - Electromagnets" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "North and South",
        // ... full answer key
      },
      assessment: {
        ass_001: "North and South",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a simple electromagnet",
      "Map a magnetic field using iron filings",
      "Build a compass",
      "Research the history of magnetism"
    ],
    differentiation: {
      struggling: [
        "Focus on basic magnetic properties",
        "Use visual aids",
        "Practice with simple experiments",
        "Provide a summary sheet"
      ],
      advanced: [
        "Research magnetic resonance imaging",
        "Explore the Earth's magnetic field reversal",
        "Investigate magnetic levitation",
        "Study the quantum nature of magnetism"
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
      title: "Magnetic Field Lines",
      description: "Diagram showing magnetic field lines of a bar magnet",
      url: "/diagrams/magnetic-field.png",
      alt: "Magnetic field lines diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Electromagnet",
      description: "Diagram showing a solenoid electromagnet",
      url: "/diagrams/electromagnet.png",
      alt: "Electromagnet diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Right-Hand Rule",
      description: "Diagram showing the right-hand grip rule",
      url: "/diagrams/right-hand-rule.png",
      alt: "Right-hand rule diagram"
    }
  ]
};