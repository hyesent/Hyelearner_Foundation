// Location: src/data/lessons/science/physics/electromagnetic_waves.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_electromagnetic_waves",
  subject: "Physics",
  topic: "Electromagnetic Waves",
  name: "Electromagnetic Waves",
  icon: "📡",
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
    "Understanding of wave properties",
    "Knowledge of speed, frequency, and wavelength",
    "Basic understanding of electric and magnetic fields",
    "Knowledge of the wave equation (v = fλ)"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_electromagnetic_field",
      name: "Electromagnetic Field",
      file: "science/physics/electromagnetic_field.js"
    },
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
      description: "Define electromagnetic waves and explain their nature",
      indicator: "Student can explain that EM waves are transverse waves consisting of oscillating electric and magnetic fields"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the regions of the electromagnetic spectrum",
      indicator: "Student can list the seven regions of the EM spectrum in order"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "State the speed of electromagnetic waves in a vacuum",
      indicator: "Student can recall that EM waves travel at 3.0 × 10⁸ m/s in a vacuum"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the relationship between frequency, wavelength, and energy",
      indicator: "Student can explain that higher frequency means shorter wavelength and higher energy"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify the properties and uses of radio waves and microwaves",
      indicator: "Student can describe uses of radio waves (communication) and microwaves (cooking, radar)"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify the properties and uses of infrared, visible light, and ultraviolet",
      indicator: "Student can describe uses of IR (heating, remote controls), visible light (vision), UV (sterilization)"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify the properties and uses of X-rays and gamma rays",
      indicator: "Student can describe uses of X-rays (medical imaging) and gamma rays (cancer treatment, sterilization)"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply the wave equation to EM wave calculations",
      indicator: "Student can use v = fλ to solve problems involving EM waves"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the hazards and applications of different EM radiations",
      indicator: "Student can explain the health risks and benefits of EM radiation"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the wave-particle duality of electromagnetic radiation",
      indicator: "Student can describe how EM waves behave as both waves and particles"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Solve complex problems involving EM wave calculations",
      indicator: "Student can calculate wavelength, frequency, or energy of EM radiation"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the production and detection of EM waves",
      indicator: "Student can describe how EM waves are produced and detected"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Electromagnetic Waves - The EM Spectrum",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the electromagnetic spectrum, its properties, and applications."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Electromagnetic Waves?</h2>
      <p><strong>Electromagnetic (EM) waves</strong> are waves that consist of oscillating electric and magnetic fields. They travel through space at the speed of light and do not require a medium.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Key Properties</h3>
          <ul>
            <li>✓ Transverse waves</li>
            <li>✓ Travel at 3.0 × 10⁸ m/s in vacuum</li>
            <li>✓ Do not need a medium</li>
            <li>✓ Carry energy</li>
            <li>✓ Can be reflected, refracted, diffracted</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 EM Spectrum</h3>
          <ul>
            <li>Radio waves (longest λ)</li>
            <li>Microwaves</li>
            <li>Infrared</li>
            <li>Visible light</li>
            <li>Ultraviolet</li>
            <li>X-rays</li>
            <li>Gamma rays (shortest λ)</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Wave Equation</h4>
        <p><strong>v = fλ</strong></p>
        <ul>
          <li>v = speed (3.0 × 10⁸ m/s in vacuum)</li>
          <li>f = frequency (Hz)</li>
          <li>λ = wavelength (m)</li>
        </ul>
        <p><em>Since v is constant, frequency and wavelength are inversely proportional.</em></p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Electromagnetic Spectrum",
        objective: "obj_002",
        text: `
          <h3>The EM Spectrum</h3>
          <p>The <strong>electromagnetic spectrum</strong> is the range of all types of electromagnetic radiation. The spectrum is ordered by wavelength, frequency, and energy.</p>
          
          <div class="example-box">
            <strong>📌 EM Spectrum in Order (Increasing Frequency, Decreasing Wavelength):</strong>
            <table class="w-full text-sm">
              <tr><th>Region</th><th>Wavelength</th><th>Frequency</th></tr>
              <tr><td>Radio waves</td><td>> 0.1 m</td><td>< 3 × 10⁹ Hz</td></tr>
              <tr><td>Microwaves</td><td>1 mm - 0.1 m</td><td>3 × 10⁹ - 3 × 10¹¹ Hz</td></tr>
              <tr><td>Infrared</td><td>700 nm - 1 mm</td><td>3 × 10¹¹ - 4 × 10¹⁴ Hz</td></tr>
              <tr><td>Visible light</td><td>400 - 700 nm</td><td>4 × 10¹⁴ - 7.5 × 10¹⁴ Hz</td></tr>
              <tr><td>Ultraviolet</td><td>10 - 400 nm</td><td>7.5 × 10¹⁴ - 3 × 10¹⁶ Hz</td></tr>
              <tr><td>X-rays</td><td>0.01 - 10 nm</td><td>3 × 10¹⁶ - 3 × 10¹⁹ Hz</td></tr>
              <tr><td>Gamma rays</td><td>< 0.01 nm</td><td>> 3 × 10¹⁹ Hz</td></tr>
            </table>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Radio Waves and Microwaves",
        objective: "obj_005",
        text: `
          <h3>Radio Waves</h3>
          <p><strong>Radio waves</strong> have the longest wavelengths and lowest frequencies in the EM spectrum.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Long wavelength, low frequency, low energy</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Radio and television broadcasting</li>
                <li>✓ Mobile phone communication</li>
                <li>✓ Radar systems</li>
                <li>✓ Satellite communication</li>
              </ul>
            </ul>
          </div>
          
          <h3>Microwaves</h3>
          <p><strong>Microwaves</strong> have shorter wavelengths than radio waves.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Can be absorbed by water molecules</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Microwave ovens (cooking)</li>
                <li>✓ Radar systems</li>
                <li>✓ Satellite communication</li>
                <li>✓ Wi-Fi and Bluetooth</li>
              </ul>
              <li><strong>Hazards:</strong></li>
              <ul>
                <li>⚠️ Can cause internal heating of body tissues</li>
                <li>⚠️ Eye damage if exposed to high intensity</li>
              </ul>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Infrared, Visible Light, and Ultraviolet",
        objective: "obj_006",
        text: `
          <h3>Infrared (IR)</h3>
          <p><strong>Infrared</strong> radiation has wavelengths just longer than visible light.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Detected as heat, emitted by warm objects</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Thermal imaging and night vision</li>
                <li>✓ Remote controls</li>
                <li>✓ Heating systems</li>
                <li>✓ Fibre optic communication</li>
              </ul>
              <li><strong>Hazards:</strong> Burns, skin damage</li>
            </ul>
          </div>
          
          <h3>Visible Light</h3>
          <p><strong>Visible light</strong> is the part of the EM spectrum that can be detected by the human eye.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Can be detected by the eye, split into colors (ROYGBIV)</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Vision and photography</li>
                <li>✓ Optical fibres (communication)</li>
                <li>✓ Lasers</li>
              </ul>
            </ul>
          </div>
          
          <h3>Ultraviolet (UV)</h3>
          <p><strong>Ultraviolet</strong> radiation has wavelengths just shorter than visible light.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Can cause fluorescence, ionizing</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Sterilisation and disinfection</li>
                <li>✓ Sunbeds and tanning</li>
                <li>✓ Security markings (UV ink)</li>
              </ul>
              <li><strong>Hazards:</strong></li>
              <ul>
                <li>⚠️ Sunburn and premature aging</li>
                <li>⚠️ Skin cancer (melanoma)</li>
                <li>⚠️ Eye damage (cataracts)</li>
              </ul>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "X-rays and Gamma Rays",
        objective: "obj_007",
        text: `
          <h3>X-rays</h3>
          <p><strong>X-rays</strong> have very short wavelengths and high energy.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Highly penetrating, ionizing radiation</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Medical imaging (radiography)</li>
                <li>✓ CT scans</li>
                <li>✓ Security scanners</li>
                <li>✓ Cancer treatment (radiotherapy)</li>
              </ul>
              <li><strong>Hazards:</strong></li>
              <ul>
                <li>⚠️ DNA damage and cancer</li>
                <li>⚠️ Radiation sickness</li>
                <li>⚠️ Requires shielding (lead)</li>
              </ul>
            </ul>
          </div>
          
          <h3>Gamma Rays</h3>
          <p><strong>Gamma rays</strong> have the shortest wavelengths and highest energy in the EM spectrum.</p>
          
          <div class="example-box">
            <strong>📌 Properties and Uses:</strong>
            <ul>
              <li><strong>Properties:</strong> Most penetrating, highly ionizing</li>
              <li><strong>Uses:</strong></li>
              <ul>
                <li>✓ Cancer treatment (gamma knife)</li>
                <li>✓ Sterilisation of medical equipment</li>
                <li>✓ Food irradiation</li>
                <li>✓ Nuclear medicine (PET scans)</li>
              </ul>
              <li><strong>Hazards:</strong></li>
              <ul>
                <li>⚠️ DNA damage, cancer, genetic mutations</li>
                <li>⚠️ Requires heavy shielding (lead, concrete)</li>
                <li>⚠️ Extremely dangerous to living tissue</li>
              </ul>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Wave Properties of EM Radiation",
        objective: "obj_008",
        text: `
          <h3>EM Waves as Waves</h3>
          <p>All EM waves share wave properties.</p>
          
          <div class="example-box">
            <strong>📌 Wave Properties:</strong>
            <ul>
              <li><strong>Reflection:</strong> EM waves bounce off surfaces</li>
              <li><strong>Refraction:</strong> EM waves change direction when entering a different medium</li>
              <li><strong>Diffraction:</strong> EM waves spread out when passing through an opening</li>
              <li><strong>Interference:</strong> EM waves can constructively and destructively interfere</li>
              <li><strong>Polarisation:</strong> EM waves can be polarised (transverse nature)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Equations:</strong>
            <ul>
              <li><strong>v = fλ</strong> (wave speed equation)</li>
              <li><strong>c = 3.0 × 10⁸ m/s</strong> (speed of light in vacuum)</li>
              <li><strong>E = hf</strong> (energy of a photon)</li>
              <li>h = 6.63 × 10⁻³⁴ J·s (Planck's constant)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Hazards and Safety",
        objective: "obj_009",
        text: `
          <h3>EM Radiation Hazards</h3>
          <p>Different types of EM radiation have different effects on living tissue.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>⚠️ Ionizing Radiation</h4>
              <ul>
                <li><strong>UV, X-rays, Gamma rays</strong></li>
                <li>Can remove electrons from atoms</li>
                <li>Causes DNA damage</li>
                <li>Risk of cancer and mutations</li>
                <li>Requires shielding</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>⚠️ Non-Ionizing Radiation</h4>
              <ul>
                <li><strong>Radio, Microwave, IR, Visible</strong></li>
                <li>Can cause heating</li>
                <li>Burns and tissue damage</li>
                <li>Less dangerous but still hazardous</li>
                <li>Requires protection</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Safety Precautions:</strong>
            <ul>
              <li>✓ Use lead shielding for X-rays and gamma rays</li>
              <li>✓ Wear protective clothing and goggles</li>
              <li>✓ Limit exposure time</li>
              <li>✓ Use sunscreen for UV protection</li>
              <li>✓ Follow safety guidelines for microwave ovens</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Wave-Particle Duality",
        objective: "obj_010",
        text: `
          <h3>Wave-Particle Duality</h3>
          <p><strong>Wave-particle duality</strong> is the concept that electromagnetic radiation exhibits both wave-like and particle-like properties.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🌊 Wave Behavior</h4>
              <ul>
                <li>Reflection</li>
                <li>Refraction</li>
                <li>Diffraction</li>
                <li>Interference</li>
                <li>Polarisation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>⚛️ Particle Behavior</h4>
              <ul>
                <li>Photoelectric effect</li>
                <li>Compton scattering</li>
                <li>Photon energy (E = hf)</li>
                <li>Momentum (p = h/λ)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Key Concepts:</strong>
            <ul>
              <li>Light behaves as a wave in most situations</li>
              <li>Light behaves as a particle (photon) in interactions with matter</li>
              <li>Wave-particle duality is a fundamental concept in quantum physics</li>
              <li>Planck's constant (h) relates wave and particle properties</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📡 EM Spectrum</h4>
          <ul>
            <li>✓ Radio → Microwave → IR → Visible → UV → X-ray → Gamma</li>
            <li>✓ Frequency increases, wavelength decreases</li>
            <li>✓ All travel at c = 3.0 × 10⁸ m/s</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Equations</h4>
          <ul>
            <li>✓ v = fλ</li>
            <li>✓ c = 3.0 × 10⁸ m/s</li>
            <li>✓ E = hf</li>
            <li>✓ λ ∝ 1/f</li>
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
        misconception: "All EM waves travel at different speeds",
        correction: "All EM waves travel at the same speed in a vacuum (3.0 × 10⁸ m/s)",
        explanation: "The speed is constant; only frequency and wavelength vary."
      },
      {
        id: "mis_002",
        misconception: "X-rays are the most dangerous type of radiation",
        correction: "Gamma rays are generally more dangerous due to higher energy",
        explanation: "Gamma rays have the highest frequency and energy."
      },
      {
        id: "mis_003",
        misconception: "Microwaves from ovens cause cancer",
        correction: "Microwaves are non-ionizing and do not cause cancer",
        explanation: "Microwave radiation is not ionizing and does not damage DNA."
      },
      {
        id: "mis_004",
        misconception: "EM waves need a medium to travel",
        correction: "EM waves can travel through a vacuum",
        explanation: "EM waves do not require a medium because they are oscillations of electric and magnetic fields."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "EM waves are the backbone of modern communication.",
        example: "Radio and television broadcasting, mobile phones, Wi-Fi, and satellite communication."
      },
      {
        id: "app_002",
        title: "Medicine",
        description: "EM waves are used extensively in medical diagnosis and treatment.",
        example: "X-rays for imaging, gamma rays for cancer treatment, UV for sterilization."
      },
      {
        id: "app_003",
        title: "Everyday Technology",
        description: "EM waves are used in many household devices.",
        example: "Microwave ovens, remote controls, security scanners, night vision cameras."
      },
      {
        id: "app_004",
        title: "Scientific Research",
        description: "EM waves are used in astronomy and scientific research.",
        example: "Radio telescopes, infrared astronomy, X-ray crystallography."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Electromagnetic Wave", definition: "A wave consisting of oscillating electric and magnetic fields." },
    { term: "Electromagnetic Spectrum", definition: "The range of all types of electromagnetic radiation." },
    { term: "Frequency", definition: "The number of wave cycles per second (Hz)." },
    { term: "Wavelength", definition: "The distance between successive wave crests (m)." },
    { term: "Photon", definition: "A quantum of electromagnetic energy." },
    { term: "Ionizing Radiation", definition: "Radiation with enough energy to remove electrons from atoms." },
    { term: "Wave-Particle Duality", definition: "The concept that EM radiation has both wave and particle properties." },
    { term: "Planck's Constant", definition: "A fundamental constant relating energy and frequency (h = 6.63 × 10⁻³⁴ J·s)." },
    { term: "Speed of Light", definition: "The speed of EM waves in a vacuum (c = 3.0 × 10⁸ m/s)." },
    { term: "Absorption", definition: "The process of a material absorbing EM radiation." }
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
      question: "What is an electromagnetic wave?",
      type: "multiple_choice",
      options: [
        "A longitudinal wave in air",
        "A transverse wave consisting of oscillating electric and magnetic fields",
        "A mechanical wave that needs a medium",
        "A stationary wave"
      ],
      answer: "A transverse wave consisting of oscillating electric and magnetic fields",
      explanation: "EM waves are transverse waves with oscillating electric and magnetic fields that do not require a medium."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the correct order of the EM spectrum from lowest to highest frequency?",
      type: "multiple_choice",
      options: [
        "Gamma, X-ray, UV, Visible, IR, Microwave, Radio",
        "Radio, Microwave, IR, Visible, UV, X-ray, Gamma",
        "Visible, UV, X-ray, Gamma, Radio, Microwave, IR",
        "IR, Visible, UV, X-ray, Gamma, Radio, Microwave"
      ],
      answer: "Radio, Microwave, IR, Visible, UV, X-ray, Gamma",
      explanation: "The EM spectrum in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the speed of electromagnetic waves in a vacuum?",
      type: "multiple_choice",
      options: [
        "3.0 × 10⁸ m/s",
        "3.0 × 10⁶ m/s",
        "3.0 × 10¹⁰ m/s",
        "3.0 × 10⁴ m/s"
      ],
      answer: "3.0 × 10⁸ m/s",
      explanation: "All EM waves travel at 3.0 × 10⁸ m/s (the speed of light) in a vacuum."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What happens to wavelength as frequency increases in the EM spectrum?",
      type: "multiple_choice",
      options: [
        "Wavelength increases",
        "Wavelength decreases",
        "Wavelength stays the same",
        "Wavelength doubles"
      ],
      answer: "Wavelength decreases",
      explanation: "Since v = fλ and v is constant, wavelength is inversely proportional to frequency."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which type of EM radiation has the highest energy?",
      type: "multiple_choice",
      options: [
        "Radio waves",
        "X-rays",
        "Visible light",
        "Gamma rays"
      ],
      answer: "Gamma rays",
      explanation: "Gamma rays have the highest frequency and therefore the highest energy (E = hf)."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the frequency of a radio wave with a wavelength of 3.0 m?",
      type: "multiple_choice",
      options: [
        "1.0 × 10⁸ Hz",
        "3.0 × 10⁸ Hz",
        "1.0 × 10⁹ Hz",
        "3.0 × 10⁹ Hz"
      ],
      answer: "1.0 × 10⁸ Hz",
      explanation: "Using v = fλ: f = v/λ = (3.0 × 10⁸)/(3.0) = 1.0 × 10⁸ Hz."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What are microwaves used for?",
      type: "multiple_choice",
      options: [
        "Medical imaging only",
        "Cooking, radar, and communication",
        "Sterilisation only",
        "Night vision"
      ],
      answer: "Cooking, radar, and communication",
      explanation: "Microwaves are used in microwave ovens, radar, and communication systems."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the wavelength range of visible light?",
      type: "multiple_choice",
      options: [
        "100 - 200 nm",
        "400 - 700 nm",
        "700 - 1000 nm",
        "1000 - 1500 nm"
      ],
      answer: "400 - 700 nm",
      explanation: "Visible light has wavelengths between approximately 400 nm and 700 nm."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a major use of infrared radiation?",
      type: "multiple_choice",
      options: [
        "X-ray imaging",
        "Remote controls and thermal imaging",
        "Cancer treatment",
        "Sterilisation"
      ],
      answer: "Remote controls and thermal imaging",
      explanation: "Infrared radiation is used in remote controls, thermal imaging, and heating systems."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is X-rays used for in medicine?",
      type: "multiple_choice",
      options: [
        "Sterilisation only",
        "Diagnostic imaging and some cancer treatment",
        "Physical therapy",
        "Vision correction"
      ],
      answer: "Diagnostic imaging and some cancer treatment",
      explanation: "X-rays are used for medical imaging (diagnosis) and in radiotherapy (cancer treatment)."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is gamma radiation most dangerous to living tissue?",
      type: "multiple_choice",
      options: [
        "It causes heating",
        "It is ionizing and can damage DNA",
        "It has no effect on tissue",
        "It causes skin burns"
      ],
      answer: "It is ionizing and can damage DNA",
      explanation: "Gamma radiation is ionizing and can damage DNA, leading to mutations and cancer."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A radio wave has a frequency of 1.5 × 10⁶ Hz. What is its wavelength?",
      type: "multiple_choice",
      options: [
        "200 m",
        "300 m",
        "150 m",
        "100 m"
      ],
      answer: "200 m",
      explanation: "λ = v/f = (3.0 × 10⁸)/(1.5 × 10⁶) = 200 m."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "A microwave has a wavelength of 0.05 m. What is its frequency?",
      type: "multiple_choice",
      options: [
        "3.0 × 10⁹ Hz",
        "6.0 × 10⁹ Hz",
        "1.0 × 10⁹ Hz",
        "9.0 × 10⁹ Hz"
      ],
      answer: "6.0 × 10⁹ Hz",
      explanation: "f = v/λ = (3.0 × 10⁸)/(0.05) = 6.0 × 10⁹ Hz."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Why are X-rays hazardous to human health?",
      type: "multiple_choice",
      options: [
        "They cause heating of tissues",
        "They are ionizing and can damage cells",
        "They produce visible light",
        "They cause electrical shocks"
      ],
      answer: "They are ionizing and can damage cells",
      explanation: "X-rays are ionizing radiation that can damage cells and DNA, increasing cancer risk."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "What evidence suggests that EM radiation behaves as both waves and particles?",
      type: "multiple_choice",
      options: [
        "Only wave behavior is observed",
        "Interference demonstrates wave behavior; the photoelectric effect demonstrates particle behavior",
        "Only particle behavior is observed",
        "All EM radiation behaves only as particles"
      ],
      answer: "Interference demonstrates wave behavior; the photoelectric effect demonstrates particle behavior",
      explanation: "Wave-particle duality is supported by interference (wave) and the photoelectric effect (particle)."
    },
    {
      id: "prac_016",
      objective: "obj_011",
      difficulty: "hard",
      question: "Calculate the energy of a photon of light with frequency 5.0 × 10¹⁴ Hz. (h = 6.63 × 10⁻³⁴ J·s)",
      type: "multiple_choice",
      options: [
        "3.32 × 10⁻¹⁹ J",
        "6.63 × 10⁻¹⁹ J",
        "1.33 × 10⁻¹⁹ J",
        "4.98 × 10⁻¹⁹ J"
      ],
      answer: "3.32 × 10⁻¹⁹ J",
      explanation: "E = hf = (6.63 × 10⁻³⁴)(5.0 × 10¹⁴) = 3.32 × 10⁻¹⁹ J."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_electromagnetic_waves",
    title: "Electromagnetic Waves Quiz",
    description: "Test your understanding of electromagnetic waves",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is an electromagnetic wave?",
        type: "short_answer",
        answer_key: "A transverse wave consisting of oscillating electric and magnetic fields",
        explanation: "EM waves are transverse waves with oscillating electric and magnetic fields."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "List the seven regions of the electromagnetic spectrum in order from lowest to highest frequency.",
        type: "short_answer",
        answer_key: "Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma",
        explanation: "The EM spectrum in increasing frequency order is: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the speed of electromagnetic waves in a vacuum?",
        type: "short_answer",
        answer_key: "3.0 × 10⁸ m/s",
        explanation: "All EM waves travel at the speed of light (c = 3.0 × 10⁸ m/s) in a vacuum."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the relationship between frequency and wavelength in the EM spectrum?",
        type: "short_answer",
        answer_key: "They are inversely proportional",
        explanation: "Since v = fλ and v is constant, frequency and wavelength are inversely proportional."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Give two uses of radio waves.",
        type: "short_answer",
        answer_key: "Radio and television broadcasting, mobile phone communication",
        explanation: "Radio waves are used for broadcasting, communication, and radar."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Give one use of infrared radiation.",
        type: "short_answer",
        answer_key: "Remote controls, thermal imaging, heating (any one)",
        explanation: "Infrared radiation is used in remote controls, thermal imaging, and heating."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the main medical use of X-rays?",
        type: "short_answer",
        answer_key: "Diagnostic imaging (radiography)",
        explanation: "X-rays are used for medical imaging to view bones and internal organs."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "A wave has a frequency of 2.0 × 10⁹ Hz. Calculate its wavelength.",
        type: "short_answer",
        answer_key: "0.15 m",
        explanation: "λ = v/f = (3.0 × 10⁸)/(2.0 × 10⁹) = 0.15 m."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is wave-particle duality?",
        type: "short_answer",
        answer_key: "The concept that electromagnetic radiation exhibits both wave-like and particle-like properties",
        explanation: "Wave-particle duality is a fundamental concept in quantum physics."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "Calculate the energy of a photon with frequency 3.0 × 10¹⁵ Hz. (h = 6.63 × 10⁻³⁴ J·s)",
        type: "short_answer",
        answer_key: "1.99 × 10⁻¹⁸ J",
        explanation: "E = hf = (6.63 × 10⁻³⁴)(3.0 × 10¹⁵) = 1.99 × 10⁻¹⁸ J."
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
        "Understand the nature of EM waves",
        "Know the regions of the EM spectrum",
        "Identify uses and hazards of EM radiation"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are EM waves?" },
        { time: "5-10 min", activity: "Direct Instruction - The EM Spectrum" },
        { time: "10-15 min", activity: "Direct Instruction - Radio and Microwaves" },
        { time: "15-20 min", activity: "Direct Instruction - IR, Visible, UV" },
        { time: "20-25 min", activity: "Direct Instruction - X-rays and Gamma Rays" },
        { time: "25-30 min", activity: "Direct Instruction - Wave Properties and Hazards" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A transverse wave consisting of oscillating electric and magnetic fields",
        // ... full answer key
      },
      assessment: {
        ass_001: "A transverse wave consisting of oscillating electric and magnetic fields",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research the uses of different EM waves in everyday life",
      "Create a poster of the EM spectrum",
      "Investigate the dangers of UV radiation",
      "Calculate the frequency of different EM waves"
    ],
    differentiation: {
      struggling: [
        "Focus on the order of the EM spectrum",
        "Use visual aids and diagrams",
        "Practice with simple calculations",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the photoelectric effect in detail",
        "Explore the history of EM wave discovery",
        "Calculate photon energies for different waves",
        "Investigate applications of EM waves in space"
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
      title: "The Electromagnetic Spectrum",
      description: "Diagram showing the EM spectrum with wavelengths and frequencies",
      url: "/diagrams/em-spectrum.png",
      alt: "Electromagnetic spectrum diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "EM Spectrum Uses",
      description: "Chart showing uses of different EM radiations",
      url: "/diagrams/em-uses.png",
      alt: "EM spectrum uses chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "EM Radiation Hazards",
      description: "Infographic showing safety precautions for EM radiation",
      url: "/diagrams/em-hazards.png",
      alt: "EM radiation hazards infographic"
    }
  ]
};