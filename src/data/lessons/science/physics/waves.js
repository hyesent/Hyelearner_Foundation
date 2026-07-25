// Location: src/data/lessons/science/physics/waves.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_waves",
  subject: "Physics",
  topic: "Waves",
  name: "Waves",
  icon: "🌊",
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
    "Understanding of motion",
    "Basic knowledge of oscillations",
    "Understanding of energy transfer",
    "Basic algebra skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_optics",
      name: "Optics",
      file: "science/physics/optics.js"
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
      description: "Define waves and explain their properties",
      indicator: "Student can explain what a wave is and identify its basic properties"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between transverse and longitudinal waves",
      indicator: "Student can classify waves as transverse or longitudinal"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the parts of a wave (crest, trough, amplitude, wavelength)",
      indicator: "Student can label the parts of a wave diagram"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the wave equation (v = fλ)",
      indicator: "Student can calculate wave speed, frequency, or wavelength"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain wave behavior (reflection, refraction, diffraction)",
      indicator: "Student can describe how waves behave when they encounter obstacles"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the principle of superposition",
      indicator: "Student can explain how waves combine"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain interference and standing waves",
      indicator: "Student can describe constructive and destructive interference"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Solve problems using the wave equation",
      indicator: "Student can solve complex wave problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the Doppler effect",
      indicator: "Student can explain the change in frequency due to relative motion"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze wave interactions in real-world situations",
      indicator: "Student can explain how waves behave in different media"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the difference between sound and light waves",
      indicator: "Student can compare sound and light waves"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Solve complex problems involving wave phenomena",
      indicator: "Student can combine multiple wave concepts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Waves - Properties and Behavior",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about wave properties, behavior, and applications."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Waves?</h2>
      <p>A <strong>wave</strong> is a disturbance that transfers energy through a medium without transferring matter. Waves are everywhere—from sound and light to water waves and seismic waves.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌊 Transverse Waves</h3>
          <ul>
            <li>✓ Particles oscillate perpendicular to wave direction</li>
            <li>✓ Examples: Light waves, water waves</li>
            <li>✓ Can travel through solids</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">〰️ Longitudinal Waves</h3>
          <ul>
            <li>✓ Particles oscillate parallel to wave direction</li>
            <li>✓ Examples: Sound waves, seismic P-waves</li>
            <li>✓ Can travel through solids, liquids, and gases</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Wave Properties</h4>
        <ul>
          <li><strong>Amplitude (A):</strong> Maximum displacement from equilibrium</li>
          <li><strong>Wavelength (λ):</strong> Distance between two successive crests</li>
          <li><strong>Frequency (f):</strong> Number of waves passing per second</li>
          <li><strong>Speed (v):</strong> How fast the wave travels</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Transverse and Longitudinal Waves",
        objective: "obj_002",
        text: `
          <h3>Types of Waves</h3>
          <p>Waves are classified based on the direction of oscillation relative to the direction of wave travel.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Transverse Waves</h4>
              <ul>
                <li>✓ Particles move perpendicular to wave direction</li>
                <li>✓ Have crests (peaks) and troughs (valleys)</li>
                <li>✓ Can be polarized</li>
                <li>✓ Can travel through solids</li>
                <li><strong>Examples:</strong></li>
                <ul>
                  <li>Light waves</li>
                  <li>Water waves</li>
                  <li>Electromagnetic waves</li>
                  <li>Seismic S-waves</li>
                </ul>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Longitudinal Waves</h4>
              <ul>
                <li>✓ Particles move parallel to wave direction</li>
                <li>✓ Have compressions (dense) and rarefactions (less dense)</li>
                <li>✓ Cannot be polarized</li>
                <li>✓ Can travel through solids, liquids, and gases</li>
                <li><strong>Examples:</strong></li>
                <ul>
                  <li>Sound waves</li>
                  <li>Ultrasound waves</li>
                  <li>Seismic P-waves</li>
                  <li>Spring waves</li>
                </ul>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Wave Properties",
        objective: "obj_003",
        text: `
          <h3>Parts of a Wave</h3>
          <p>Waves have specific features that describe their shape and behavior.</p>
          
          <div class="example-box">
            <strong>📌 Key Wave Properties:</strong>
            <ul>
              <li><strong>Amplitude (A):</strong> Maximum displacement from the equilibrium position</li>
              <ul>
                <li>Related to energy: larger amplitude = more energy</li>
                <li>Measured in meters (m)</li>
              </ul>
              <li><strong>Wavelength (λ):</strong> Distance between two successive crests or troughs</li>
              <ul>
                <li>Measured in meters (m)</li>
              </ul>
              <li><strong>Frequency (f):</strong> Number of waves passing a point per second</li>
              <ul>
                <li>Measured in Hertz (Hz)</li>
                <li>1 Hz = 1 wave per second</li>
              </ul>
              <li><strong>Period (T):</strong> Time for one complete wave cycle</li>
              <ul>
                <li>Measured in seconds (s)</li>
                <li>T = 1/f</li>
              </ul>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Wave Diagram Labels:</strong>
            <ul>
              <li>✓ <strong>Crest:</strong> The highest point of a wave</li>
              <li>✓ <strong>Trough:</strong> The lowest point of a wave</li>
              <li>✓ <strong>Amplitude:</strong> Distance from equilibrium to crest/trough</li>
              <li>✓ <strong>Wavelength:</strong> Distance between two crests</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Wave Equation",
        objective: "obj_004",
        text: `
          <h3>Wave Equation</h3>
          <p>The wave equation relates speed, frequency, and wavelength.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>v = fλ</strong></p>
            <ul>
              <li>v = wave speed (m/s)</li>
              <li>f = frequency (Hz)</li>
              <li>λ = wavelength (m)</li>
            </ul>
            <p><strong>Also:</strong> <strong>T = 1/f</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A wave has a frequency of 50 Hz and a wavelength of 2 m. Calculate its speed.</li>
              <li><strong>Solution:</strong></li>
              <li>v = fλ = 50 × 2 = 100 m/s</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A sound wave travels at 340 m/s with a frequency of 1700 Hz. Calculate its wavelength.</li>
              <li><strong>Solution:</strong></li>
              <li>λ = v/f = 340/1700 = 0.2 m</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Wave Behavior",
        objective: "obj_005",
        text: `
          <h3>How Waves Behave</h3>
          <p>Waves exhibit several behaviors when they encounter different media or obstacles.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Reflection</h4>
              <ul>
                <li>✓ Wave bounces off a surface</li>
                <li>✓ Angle of incidence = Angle of reflection</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Echoes (sound)</li>
                  <li>Mirror reflections (light)</li>
                </ul>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Refraction</h4>
              <ul>
                <li>✓ Wave changes direction when entering a new medium</li>
                <li>✓ Speed changes; frequency stays the same</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Light bending in water</li>
                  <li>Sound bending in air</li>
                </ul>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Diffraction</h4>
              <ul>
                <li>✓ Wave spreads out when passing through an opening</li>
                <li>✓ Amount depends on wavelength and opening size</li>
                <li>✓ Examples:</li>
                <ul>
                  <li>Water waves through a gap</li>
                  <li>Sound waves around obstacles</li>
                </ul>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Superposition and Interference",
        objective: "obj_006",
        text: `
          <h3>Superposition</h3>
          <p>The <strong>principle of superposition</strong> states that when two waves meet, the resultant displacement is the sum of their individual displacements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Constructive Interference</h4>
              <ul>
                <li>✓ Waves meet in phase</li>
                <li>✓ Amplitudes add together</li>
                <li>✓ Resultant amplitude = A₁ + A₂</li>
                <li>✓ Produces a larger wave</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Destructive Interference</h4>
              <ul>
                <li>✓ Waves meet out of phase</li>
                <li>✓ Amplitudes cancel out</li>
                <li>✓ Resultant amplitude = |A₁ - A₂|</li>
                <li>✓ Produces a smaller or zero wave</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Standing Waves",
        objective: "obj_007",
        text: `
          <h3>Standing Waves</h3>
          <p><strong>Standing waves</strong> are formed when two identical waves traveling in opposite directions interfere with each other.</p>
          
          <div class="example-box">
            <strong>📌 Key Features:</strong>
            <ul>
              <li>✓ Appear to be stationary</li>
              <li>✓ Have nodes (points of zero displacement)</li>
              <li>✓ Have antinodes (points of maximum displacement)</li>
              <li>✓ Created by reflection and superposition</li>
              <li>✓ Found in stringed instruments, pipes</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ Guitar strings vibrating</li>
              <li>✓ Organ pipes</li>
              <li>✓ Microwave ovens</li>
              <li>✓ Seismic waves trapped between boundaries</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Sound vs Light Waves",
        objective: "obj_011",
        text: `
          <h3>Comparing Sound and Light</h3>
          <p>Sound and light are both waves but have different properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔊 Sound Waves</h4>
              <ul>
                <li>✓ Longitudinal wave</li>
                <li>✓ Requires a medium</li>
                <li>✓ Speed ≈ 340 m/s in air</li>
                <li>✓ Speed varies with medium</li>
                <li>✓ Cannot travel in vacuum</li>
                <li>✓ Audible range: 20 Hz - 20,000 Hz</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>💡 Light Waves</h4>
              <ul>
                <li>✓ Transverse wave</li>
                <li>✓ Does not require a medium</li>
                <li>✓ Speed = 3.0 × 10⁸ m/s in vacuum</li>
                <li>✓ Speed constant in vacuum</li>
                <li>✓ Can travel in vacuum</li>
                <li>✓ Frequency range: 10¹⁴ - 10¹⁵ Hz</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "The Doppler Effect",
        objective: "obj_009",
        text: `
          <h3>The Doppler Effect</h3>
          <p>The <strong>Doppler effect</strong> is the change in frequency of a wave when there is relative motion between the source and the observer.</p>
          
          <div class="example-box">
            <strong>📌 Key Points:</strong>
            <ul>
              <li>✓ When source and observer move toward each other: frequency increases</li>
              <li>✓ When source and observer move away from each other: frequency decreases</li>
              <li>✓ Applies to all waves (sound, light, etc.)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>✓ Ambulance siren changing pitch as it passes</li>
              <li>✓ Redshift of light from distant galaxies</li>
              <li>✓ Radar speed detection</li>
              <li>✓ Ultrasound blood flow measurement</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🌊 Waves</h4>
          <ul>
            <li>✓ Transverse vs Longitudinal</li>
            <li>✓ v = fλ</li>
            <li>✓ Reflection, Refraction, Diffraction</li>
            <li>✓ Superposition and Interference</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Concepts</h4>
          <ul>
            <li>✓ Amplitude, Wavelength, Frequency</li>
            <li>✓ Standing waves</li>
            <li>✓ Sound vs Light</li>
            <li>✓ Doppler Effect</li>
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
        misconception: "Waves transfer matter",
        correction: "Waves transfer energy, not matter",
        explanation: "In water waves, the water particles move up and down but don't travel with the wave."
      },
      {
        id: "mis_002",
        misconception: "Sound travels faster in air than in water",
        correction: "Sound travels faster in water and solids than in air",
        explanation: "Sound speed: air ≈ 340 m/s, water ≈ 1500 m/s, steel ≈ 5000 m/s."
      },
      {
        id: "mis_003",
        misconception: "Light waves need a medium to travel",
        correction: "Light waves do not need a medium",
        explanation: "Light travels through a vacuum as electromagnetic waves."
      },
      {
        id: "mis_004",
        misconception: "All waves behave the same way",
        correction: "Different types of waves have different properties",
        explanation: "Sound waves are longitudinal; light waves are transverse."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Waves are used in all forms of communication.",
        example: "Radio waves, sound waves, light in fiber optics."
      },
      {
        id: "app_002",
        title: "Medical Imaging",
        description: "Waves are used in medical diagnosis.",
        example: "Ultrasound (sound waves), X-rays (electromagnetic waves)."
      },
      {
        id: "app_003",
        title: "Music",
        description: "Sound waves are the basis of music.",
        example: "String instruments create standing waves; frequency determines pitch."
      },
      {
        id: "app_004",
        title: "Astronomy",
        description: "Light waves are used to study the universe.",
        example: "Telescopes detect light; redshift shows distance."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Wave", definition: "A disturbance that transfers energy without transferring matter." },
    { term: "Transverse Wave", definition: "A wave where particles oscillate perpendicular to the direction of travel." },
    { term: "Longitudinal Wave", definition: "A wave where particles oscillate parallel to the direction of travel." },
    { term: "Amplitude", definition: "The maximum displacement from equilibrium." },
    { term: "Wavelength", definition: "The distance between two successive crests." },
    { term: "Frequency", definition: "The number of waves passing a point per second." },
    { term: "Period", definition: "The time for one complete wave cycle." },
    { term: "Reflection", definition: "The bouncing of a wave off a surface." },
    { term: "Refraction", definition: "The bending of a wave as it enters a new medium." },
    { term: "Diffraction", definition: "The spreading of a wave as it passes through an opening." },
    { term: "Superposition", definition: "The addition of displacements when waves meet." },
    { term: "Doppler Effect", definition: "The change in frequency due to relative motion." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a wave?",
      type: "multiple_choice",
      options: [
        "A transfer of matter",
        "A disturbance that transfers energy",
        "A type of particle",
        "A form of matter"
      ],
      answer: "A disturbance that transfers energy",
      explanation: "A wave is a disturbance that transfers energy without transferring matter."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which type of wave has particles oscillating perpendicular to the direction of travel?",
      type: "multiple_choice",
      options: [
        "Longitudinal wave",
        "Transverse wave",
        "Surface wave",
        "Standing wave"
      ],
      answer: "Transverse wave",
      explanation: "In transverse waves, particles oscillate perpendicular to the direction of travel."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which type of wave is sound?",
      type: "multiple_choice",
      options: [
        "Transverse wave",
        "Longitudinal wave",
        "Surface wave",
        "Standing wave"
      ],
      answer: "Longitudinal wave",
      explanation: "Sound waves are longitudinal waves with compressions and rarefactions."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "What is the amplitude of a wave?",
      type: "multiple_choice",
      options: [
        "The distance between two crests",
        "The maximum displacement from equilibrium",
        "The number of waves per second",
        "The time for one cycle"
      ],
      answer: "The maximum displacement from equilibrium",
      explanation: "Amplitude is the maximum displacement from the equilibrium position."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "A wave has a frequency of 20 Hz and a wavelength of 5 m. What is its speed?",
      type: "multiple_choice",
      options: ["50 m/s", "100 m/s", "150 m/s", "200 m/s"],
      answer: "100 m/s",
      explanation: "v = fλ = 20 × 5 = 100 m/s."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "A sound wave travels at 340 m/s with a frequency of 680 Hz. What is its wavelength?",
      type: "multiple_choice",
      options: ["0.2 m", "0.5 m", "1.0 m", "2.0 m"],
      answer: "0.5 m",
      explanation: "λ = v/f = 340/680 = 0.5 m."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the reflection of a wave?",
      type: "multiple_choice",
      options: [
        "The bending of a wave",
        "The bouncing of a wave off a surface",
        "The spreading of a wave",
        "The combining of waves"
      ],
      answer: "The bouncing of a wave off a surface",
      explanation: "Reflection is the bouncing of a wave off a surface."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the refraction of a wave?",
      type: "multiple_choice",
      options: [
        "The bouncing of a wave",
        "The bending of a wave as it enters a new medium",
        "The spreading of a wave",
        "The combining of waves"
      ],
      answer: "The bending of a wave as it enters a new medium",
      explanation: "Refraction is the bending of a wave as it enters a new medium."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the principle of superposition?",
      type: "multiple_choice",
      options: [
        "Waves cancel each other out",
        "The resultant displacement is the sum of individual displacements",
        "Waves always add constructively",
        "Waves always add destructively"
      ],
      answer: "The resultant displacement is the sum of individual displacements",
      explanation: "Superposition states that the resultant displacement is the sum of the individual displacements."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is constructive interference?",
      type: "multiple_choice",
      options: [
        "Waves cancel each other out",
        "Waves combine to form a larger wave",
        "Waves pass through each other",
        "Waves change direction"
      ],
      answer: "Waves combine to form a larger wave",
      explanation: "Constructive interference occurs when waves combine to form a larger wave."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is destructive interference?",
      type: "multiple_choice",
      options: [
        "Waves combine to form a larger wave",
        "Waves cancel each other out",
        "Waves pass through each other",
        "Waves change direction"
      ],
      answer: "Waves cancel each other out",
      explanation: "Destructive interference occurs when waves cancel each other out."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A wave has a speed of 200 m/s and a frequency of 40 Hz. What is its wavelength?",
      type: "multiple_choice",
      options: ["2 m", "5 m", "8 m", "10 m"],
      answer: "5 m",
      explanation: "λ = v/f = 200/40 = 5 m."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the Doppler effect?",
      type: "multiple_choice",
      options: [
        "The change in frequency due to relative motion",
        "The change in amplitude of a wave",
        "The change in wavelength of a wave",
        "The change in speed of a wave"
      ],
      answer: "The change in frequency due to relative motion",
      explanation: "The Doppler effect is the change in frequency when there is relative motion between the source and observer."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Why do sound waves travel faster in solids than in gases?",
      type: "multiple_choice",
      options: [
        "Solids have higher density",
        "Particles are closer together",
        "Solids are warmer",
        "Sound is not affected by the medium"
      ],
      answer: "Particles are closer together",
      explanation: "Sound travels faster in solids because particles are closer together, allowing faster energy transfer."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the main difference between sound waves and light waves?",
      type: "multiple_choice",
      options: [
        "Sound is transverse; light is longitudinal",
        "Sound requires a medium; light does not",
        "Light requires a medium; sound does not",
        "Sound travels faster than light"
      ],
      answer: "Sound requires a medium; light does not",
      explanation: "Sound waves require a medium; light waves can travel through a vacuum."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "A wave has a period of 0.02 seconds. What is its frequency?",
      type: "multiple_choice",
      options: ["20 Hz", "50 Hz", "100 Hz", "200 Hz"],
      answer: "50 Hz",
      explanation: "f = 1/T = 1/0.02 = 50 Hz."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_waves",
    title: "Waves Quiz",
    description: "Test your understanding of waves",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a wave?",
        type: "short_answer",
        answer_key: "A disturbance that transfers energy without transferring matter",
        explanation: "A wave transfers energy, not matter."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between transverse and longitudinal waves?",
        type: "short_answer",
        answer_key: "Transverse particles oscillate perpendicular; longitudinal particles oscillate parallel",
        explanation: "Transverse waves oscillate perpendicular to wave direction; longitudinal waves oscillate parallel."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give an example of a transverse wave.",
        type: "short_answer",
        answer_key: "Light wave (or water wave, electromagnetic wave)",
        explanation: "Light waves, water waves, and electromagnetic waves are transverse waves."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "medium",
        question: "What are the parts of a wave?",
        type: "short_answer",
        answer_key: "Crest, trough, amplitude, wavelength",
        explanation: "Waves have crests, troughs, amplitude, and wavelength."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the wave equation?",
        type: "short_answer",
        answer_key: "v = fλ",
        explanation: "The wave equation relates speed, frequency, and wavelength."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "A wave has a frequency of 100 Hz and a wavelength of 2 m. Calculate the speed.",
        type: "short_answer",
        answer_key: "200 m/s",
        explanation: "v = fλ = 100 × 2 = 200 m/s."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between reflection and refraction?",
        type: "short_answer",
        answer_key: "Reflection is bouncing; refraction is bending when entering a new medium",
        explanation: "Reflection is the bouncing of a wave; refraction is the bending when entering a new medium."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is the principle of superposition?",
        type: "short_answer",
        answer_key: "The resultant displacement is the sum of individual displacements",
        explanation: "Superposition states that when waves meet, the resultant displacement is the sum of their individual displacements."
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the difference between constructive and destructive interference?",
        type: "short_answer",
        answer_key: "Constructive interference increases amplitude; destructive decreases amplitude",
        explanation: "Constructive interference makes the resultant wave larger; destructive interference makes it smaller."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the Doppler effect?",
        type: "short_answer",
        answer_key: "The change in frequency due to relative motion between source and observer",
        explanation: "The Doppler effect is the change in frequency caused by relative motion."
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
        "Understand wave types and properties",
        "Apply the wave equation",
        "Explain wave behavior",
        "Understand wave phenomena"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are waves?" },
        { time: "5-10 min", activity: "Direct Instruction - Transverse vs Longitudinal" },
        { time: "10-15 min", activity: "Direct Instruction - Wave Properties" },
        { time: "15-20 min", activity: "Direct Instruction - Wave Equation" },
        { time: "20-25 min", activity: "Direct Instruction - Wave Behavior" },
        { time: "25-30 min", activity: "Direct Instruction - Superposition and Interference" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A disturbance that transfers energy",
        // ... full answer key
      },
      assessment: {
        ass_001: "A disturbance that transfers energy without transferring matter",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a wave simulation using a slinky spring",
      "Measure the speed of sound in air",
      "Observe wave diffraction in water",
      "Research the Doppler effect in real life"
    ],
    differentiation: {
      struggling: [
        "Focus on wave properties first",
        "Use visual diagrams",
        "Practice simple calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Explore wave-particle duality",
        "Research advanced wave phenomena",
        "Investigate wave applications in technology",
        "Study the mathematics of wave equations"
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
      title: "Transverse vs Longitudinal",
      description: "Diagram comparing transverse and longitudinal waves",
      url: "/diagrams/transverse-longitudinal.png",
      alt: "Transverse vs longitudinal waves diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Wave Properties",
      description: "Diagram showing wave properties (amplitude, wavelength, crest, trough)",
      url: "/diagrams/wave-properties.png",
      alt: "Wave properties diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Wave Behavior",
      description: "Diagram showing reflection, refraction, and diffraction",
      url: "/diagrams/wave-behavior.png",
      alt: "Wave behavior diagram"
    }
  ]
};