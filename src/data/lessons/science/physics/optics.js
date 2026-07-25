// Location: src/data/lessons/science/physics/optics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "phys_lesson_optics",
  subject: "Physics",
  topic: "Optics",
  name: "Optics",
  icon: "🔦",
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
    "Understanding of waves",
    "Knowledge of light properties",
    "Understanding of reflection and refraction",
    "Basic geometry skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "phys_lesson_electricity",
      name: "Electricity",
      file: "science/physics/electricity.js"
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
      description: "Define optics and explain its importance",
      indicator: "Student can explain what optics is and its applications"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the laws of reflection",
      indicator: "Student can state and apply the laws of reflection"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the laws of refraction",
      indicator: "Student can state Snell's law and apply it"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the properties of plane mirrors",
      indicator: "Student can describe image formation in plane mirrors"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the properties of curved mirrors",
      indicator: "Student can describe image formation in concave and convex mirrors"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the properties of lenses",
      indicator: "Student can describe image formation in converging and diverging lenses"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Apply the lens formula and magnification",
      indicator: "Student can use 1/f = 1/v - 1/u to solve problems"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Explain total internal reflection",
      indicator: "Student can explain the conditions for total internal reflection"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the dispersion of light",
      indicator: "Student can explain how a prism disperses white light"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the applications of optical instruments",
      indicator: "Student can describe how microscopes, telescopes, and cameras work"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Solve complex problems involving mirrors and lenses",
      indicator: "Student can solve combined optics problems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze real-world optical phenomena",
      indicator: "Student can explain mirages, rainbows, and fiber optics"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Optics - Light, Mirrors, and Lenses",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about light, reflection, refraction, mirrors, and lenses."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Optics?</h2>
      <p><strong>Optics</strong> is the branch of physics that deals with the behavior and properties of light. It includes the study of reflection, refraction, and the formation of images by mirrors and lenses.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">💡 Key Concepts</h3>
          <ul>
            <li>✓ Reflection: Bouncing of light</li>
            <li>✓ Refraction: Bending of light</li>
            <li>✓ Mirrors: Plane, Concave, Convex</li>
            <li>✓ Lenses: Converging, Diverging</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🔦 Applications</h3>
          <ul>
            <li>✓ Cameras and projectors</li>
            <li>✓ Telescopes and microscopes</li>
            <li>✓ Eyeglasses and contact lenses</li>
            <li>✓ Fiber optics and lasers</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Speed of Light</h4>
        <ul>
          <li><strong>In vacuum:</strong> c = 3.0 × 10⁸ m/s</li>
          <li><strong>In water:</strong> v = 2.25 × 10⁸ m/s</li>
          <li><strong>In glass:</strong> v = 2.0 × 10⁸ m/s</li>
          <li><strong>Refractive index:</strong> n = c/v</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Reflection of Light",
        objective: "obj_002",
        text: `
          <h3>Laws of Reflection</h3>
          <p><strong>Reflection</strong> is the bouncing of light off a surface. The laws of reflection apply to all reflecting surfaces.</p>
          
          <div class="example-box">
            <strong>📌 Laws of Reflection:</strong>
            <ul>
              <li>1. The incident ray, the reflected ray, and the normal all lie in the same plane</li>
              <li>2. The angle of incidence equals the angle of reflection</li>
              <li>✓ <strong>θᵢ = θᵣ</strong></li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Reflection:</h4>
              <ul>
                <li><strong>Specular (Regular):</strong></li>
                <li>✓ Smooth surface</li>
                <li>✓ Parallel rays stay parallel</li>
                <li>✓ Example: Plane mirror</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Reflection:</h4>
              <ul>
                <li><strong>Diffuse (Irregular):</strong></li>
                <li>✓ Rough surface</li>
                <li>✓ Rays scatter in different directions</li>
                <li>✓ Example: Paper, wall</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Refraction of Light",
        objective: "obj_003",
        text: `
          <h3>Laws of Refraction</h3>
          <p><strong>Refraction</strong> is the bending of light as it passes from one medium to another.</p>
          
          <div class="example-box">
            <strong>📌 Laws of Refraction:</strong>
            <ul>
              <li>1. The incident ray, the refracted ray, and the normal all lie in the same plane</li>
              <li>2. Snell's Law: <strong>n₁ sin θ₁ = n₂ sin θ₂</strong></li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Snell's Law:</h4>
            <p><strong>n₁ sin θ₁ = n₂ sin θ₂</strong></p>
            <ul>
              <li>n₁ = refractive index of medium 1</li>
              <li>θ₁ = angle of incidence</li>
              <li>n₂ = refractive index of medium 2</li>
              <li>θ₂ = angle of refraction</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Light travels from air (n₁ = 1.00) to water (n₂ = 1.33). If the angle of incidence is 30°, calculate the angle of refraction.</li>
              <li><strong>Solution:</strong></li>
              <li>n₁ sin θ₁ = n₂ sin θ₂</li>
              <li>1.00 sin 30° = 1.33 sin θ₂</li>
              <li>0.5 = 1.33 sin θ₂</li>
              <li>sin θ₂ = 0.5/1.33 = 0.376</li>
              <li>θ₂ = sin⁻¹(0.376) = 22.1°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Plane Mirrors",
        objective: "obj_004",
        text: `
          <h3>Plane Mirrors</h3>
          <p>A <strong>plane mirror</strong> is a flat reflecting surface.</p>
          
          <div class="example-box">
            <strong>📌 Image Formation in Plane Mirrors:</strong>
            <ul>
              <li>✓ Image is virtual (cannot be projected on a screen)</li>
              <li>✓ Image is upright</li>
              <li>✓ Image is the same size as the object</li>
              <li>✓ Image distance = Object distance</li>
              <li>✓ Image is laterally inverted (left-right reversed)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li>✓ Household mirrors</li>
              <li>✓ Rear-view mirrors in vehicles</li>
              <li>✓ Periscopes</li>
              <li>✓ Kaleidoscopes</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Curved Mirrors",
        objective: "obj_005",
        text: `
          <h3>Curved Mirrors</h3>
          <p>There are two types of curved mirrors: <strong>concave</strong> (converging) and <strong>convex</strong> (diverging).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Concave Mirror</h4>
              <ul>
                <li>✓ Reflects inward (converging)</li>
                <li>✓ Focal length is positive</li>
                <li>✓ Can form real or virtual images</li>
                <li>✓ Used in:</li>
                <ul>
                  <li>Torches and headlights</li>
                  <li>Shaving mirrors</li>
                  <li>Solar concentrators</li>
                </ul>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Convex Mirror</h4>
              <ul>
                <li>✓ Reflects outward (diverging)</li>
                <li>✓ Focal length is negative</li>
                <li>✓ Forms virtual images only</li>
                <li>✓ Used in:</li>
                <ul>
                  <li>Security mirrors</li>
                  <li>Rear-view mirrors</li>
                  <li>Wide-angle mirrors</li>
                </ul>
              </ul>
            </div>
          </div>
          
          <div class="formula-box">
            <h4>📝 Mirror Formula:</h4>
            <p><strong>1/f = 1/v + 1/u</strong></p>
            <ul>
              <li>f = focal length</li>
              <li>v = image distance</li>
              <li>u = object distance</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Lenses",
        objective: "obj_006",
        text: `
          <h3>Lenses</h3>
          <p>There are two types of lenses: <strong>converging</strong> (convex) and <strong>diverging</strong> (concave).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Convex Lens (Converging)</h4>
              <ul>
                <li>✓ Thicker in the middle</li>
                <li>✓ Converges light rays</li>
                <li>✓ Focal length is positive</li>
                <li>✓ Used in:</li>
                <ul>
                  <li>Magnifying glasses</li>
                  <li>Cameras</li>
                  <li>Projectors</li>
                  <li>Microscopes</li>
                </ul>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Concave Lens (Diverging)</h4>
              <ul>
                <li>✓ Thinner in the middle</li>
                <li>✓ Diverges light rays</li>
                <li>✓ Focal length is negative</li>
                <li>✓ Used in:</li>
                <ul>
                  <li>Eyeglasses (myopia)</li>
                  <li>Peepholes</li>
                  <li>Some optical instruments</li>
                </ul>
              </ul>
            </div>
          </div>
          
          <div class="formula-box">
            <h4>📝 Lens Formula:</h4>
            <p><strong>1/f = 1/v - 1/u</strong></p>
            <p><strong>Magnification (m) = v/u</strong></p>
            <ul>
              <li>f = focal length</li>
              <li>v = image distance</li>
              <li>u = object distance</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Total Internal Reflection",
        objective: "obj_008",
        text: `
          <h3>Total Internal Reflection</h3>
          <p><strong>Total internal reflection</strong> occurs when light travels from a denser medium to a less dense medium at an angle greater than the critical angle.</p>
          
          <div class="example-box">
            <strong>📌 Conditions for Total Internal Reflection:</strong>
            <ul>
              <li>1. Light must travel from denser to less dense medium</li>
              <li>2. Angle of incidence must be greater than the critical angle</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Critical Angle:</h4>
            <p><strong>sin θ_c = n₂/n₁</strong></p>
            <ul>
              <li>θ_c = critical angle</li>
              <li>n₁ = refractive index of denser medium</li>
              <li>n₂ = refractive index of less dense medium</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Applications:</strong>
            <ul>
              <li>✓ Fiber optics (telecommunications)</li>
              <li>✓ Endoscopes (medical)</li>
              <li>✓ Prisms (optical instruments)</li>
              <li>✓ Diamond sparkle</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Dispersion of Light",
        objective: "obj_009",
        text: `
          <h3>Dispersion of Light</h3>
          <p><strong>Dispersion</strong> is the splitting of white light into its component colors (the spectrum).</p>
          
          <div class="example-box">
            <strong>📌 The Rainbow (ROYGBIV):</strong>
            <ul>
              <li>✓ <strong>R</strong> - Red (longest wavelength)</li>
              <li>✓ <strong>O</strong> - Orange</li>
              <li>✓ <strong>Y</strong> - Yellow</li>
              <li>✓ <strong>G</strong> - Green</li>
              <li>✓ <strong>B</strong> - Blue</li>
              <li>✓ <strong>I</strong> - Indigo</li>
              <li>✓ <strong>V</strong> - Violet (shortest wavelength)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 How Dispersion Works:</strong>
            <ul>
              <li>✓ Different colors have different wavelengths</li>
              <li>✓ When light enters a prism, different colors bend by different amounts</li>
              <li>✓ Violet bends most; Red bends least</li>
              <li>✓ This separates white light into the spectrum</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Optical Instruments",
        objective: "obj_010",
        text: `
          <h3>Optical Instruments</h3>
          <p>Optical instruments use lenses and mirrors to form images.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Microscope</h4>
              <ul>
                <li>✓ Magnifies small objects</li>
                <li>✓ Uses two convex lenses</li>
                <li>✓ Objective lens (short focal length)</li>
                <li>✓ Eyepiece lens (longer focal length)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Telescope</h4>
              <ul>
                <li>✓ Magnifies distant objects</li>
                <li>✓ Uses two convex lenses</li>
                <li>✓ Objective lens (long focal length)</li>
                <li>✓ Eyepiece lens (short focal length)</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Camera</h4>
              <ul>
                <li>✓ Captures images</li>
                <li>✓ Uses a convex lens</li>
                <li>✓ Image formed on film/sensor</li>
                <li>✓ Real, inverted image</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Human Eye</h4>
              <ul>
                <li>✓ Natural optical instrument</li>
                <li>✓ Convex lens (crystalline lens)</li>
                <li>✓ Image formed on retina</li>
                <li>✓ Real, inverted image (brain flips it)</li>
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
          <h4>🔦 Optics</h4>
          <ul>
            <li>✓ Reflection: θᵢ = θᵣ</li>
            <li>✓ Refraction: n₁ sin θ₁ = n₂ sin θ₂</li>
            <li>✓ Mirrors: Plane, Concave, Convex</li>
            <li>✓ Lenses: Converging, Diverging</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Key Concepts</h4>
          <ul>
            <li>✓ 1/f = 1/v + 1/u (mirrors)</li>
            <li>✓ 1/f = 1/v - 1/u (lenses)</li>
            <li>✓ Total internal reflection</li>
            <li>✓ Dispersion (ROYGBIV)</li>
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
        misconception: "Light always travels in a straight line",
        correction: "Light bends (refraction) when it enters a different medium",
        explanation: "Light changes direction when it passes from one medium to another."
      },
      {
        id: "mis_002",
        misconception: "Mirrors always form real images",
        correction: "Plane mirrors form virtual images; concave mirrors can form real or virtual",
        explanation: "Image type depends on the mirror type and object position."
      },
      {
        id: "mis_003",
        misconception: "Lenses always form real images",
        correction: "Convex lenses can form real or virtual images; concave lenses form virtual images only",
        explanation: "Lens type and object position determine image type."
      },
      {
        id: "mis_004",
        misconception: "The image in a plane mirror is not inverted",
        correction: "It is laterally inverted (left-right reversed)",
        explanation: "A plane mirror reverses left and right."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medical",
        description: "Optics is essential in medical diagnosis and treatment.",
        example: "Endoscopes, microscopes, laser surgery, corrective lenses."
      },
      {
        id: "app_002",
        title: "Communication",
        description: "Optics is used in telecommunications.",
        example: "Fiber optics, optical fibers, lasers in communication."
      },
      {
        id: "app_003",
        title: "Astronomy",
        description: "Optics is used to study the universe.",
        example: "Telescopes, spectroscopes, adaptive optics."
      },
      {
        id: "app_004",
        title: "Everyday Life",
        description: "Optics is used in many everyday devices.",
        example: "Cameras, glasses, mirrors, projectors, smartphones."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Optics", definition: "The study of light and its behavior." },
    { term: "Reflection", definition: "The bouncing of light off a surface." },
    { term: "Refraction", definition: "The bending of light as it enters a new medium." },
    { term: "Snell's Law", definition: "n₁ sin θ₁ = n₂ sin θ₂." },
    { term: "Critical Angle", definition: "The angle of incidence for which the angle of refraction is 90°." },
    { term: "Total Internal Reflection", definition: "Complete reflection of light at a boundary." },
    { term: "Dispersion", definition: "The splitting of white light into its component colors." },
    { term: "Concave Mirror", definition: "A mirror that curves inward (converging)." },
    { term: "Convex Mirror", definition: "A mirror that curves outward (diverging)." },
    { term: "Convex Lens", definition: "A lens that is thicker in the middle (converging)." },
    { term: "Concave Lens", definition: "A lens that is thinner in the middle (diverging)." },
    { term: "Focal Length", definition: "The distance from the lens/mirror to the focal point." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is optics?",
      type: "multiple_choice",
      options: [
        "The study of sound",
        "The study of light and its behavior",
        "The study of motion",
        "The study of electricity"
      ],
      answer: "The study of light and its behavior",
      explanation: "Optics is the branch of physics that deals with light and its behavior."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the angle of incidence equal to?",
      type: "multiple_choice",
      options: [
        "Angle of refraction",
        "Angle of reflection",
        "Critical angle",
        "Angle of deviation"
      ],
      answer: "Angle of reflection",
      explanation: "The law of reflection states that the angle of incidence equals the angle of reflection."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does Snell's Law state?",
      type: "multiple_choice",
      options: [
        "n₁ sin θ₁ = n₂ sin θ₂",
        "n₁ cos θ₁ = n₂ cos θ₂",
        "n₁ tan θ₁ = n₂ tan θ₂",
        "n₁ sin θ₁ = n₂ cos θ₂"
      ],
      answer: "n₁ sin θ₁ = n₂ sin θ₂",
      explanation: "Snell's Law relates the angles of incidence and refraction to the refractive indices."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What type of image is formed by a plane mirror?",
      type: "multiple_choice",
      options: ["Real and inverted", "Virtual and upright", "Real and upright", "Virtual and inverted"],
      answer: "Virtual and upright",
      explanation: "A plane mirror forms a virtual, upright image that is the same size as the object."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which mirror is used in car headlights?",
      type: "multiple_choice",
      options: ["Plane mirror", "Concave mirror", "Convex mirror", "Prism"],
      answer: "Concave mirror",
      explanation: "Concave mirrors are used in car headlights to focus light."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which mirror is used as a security mirror in shops?",
      type: "multiple_choice",
      options: ["Plane mirror", "Concave mirror", "Convex mirror", "Prism"],
      answer: "Convex mirror",
      explanation: "Convex mirrors are used in shops for security because they provide a wide field of view."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which lens converges light rays?",
      type: "multiple_choice",
      options: ["Concave lens", "Convex lens", "Plano-concave lens", "Diverging lens"],
      answer: "Convex lens",
      explanation: "Convex lenses are converging lenses that focus light rays."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which lens diverges light rays?",
      type: "multiple_choice",
      options: ["Convex lens", "Concave lens", "Plano-convex lens", "Converging lens"],
      answer: "Concave lens",
      explanation: "Concave lenses are diverging lenses that spread light rays."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "hard",
      question: "A convex lens has a focal length of 10 cm. An object is placed 30 cm from the lens. Calculate the image distance. (1/f = 1/v - 1/u)",
      type: "multiple_choice",
      options: ["7.5 cm", "15 cm", "20 cm", "25 cm"],
      answer: "15 cm",
      explanation: "1/10 = 1/v - 1/30 → 1/v = 1/10 + 1/30 = 4/30 → v = 30/4 = 7.5 cm."
    },
    {
      id: "prac_010",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is total internal reflection?",
      type: "multiple_choice",
      options: [
        "Complete reflection of light when it travels from denser to less dense medium",
        "Complete reflection of light when it travels from less dense to denser medium",
        "Partial reflection of light",
        "No reflection of light"
      ],
      answer: "Complete reflection of light when it travels from denser to less dense medium",
      explanation: "Total internal reflection occurs when light travels from a denser to a less dense medium at an angle greater than the critical angle."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the dispersion of light?",
      type: "multiple_choice",
      options: [
        "The splitting of white light into its colors",
        "The bending of light",
        "The reflection of light",
        "The absorption of light"
      ],
      answer: "The splitting of white light into its colors",
      explanation: "Dispersion is the splitting of white light into its component colors."
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "A concave mirror has a focal length of 15 cm. An object is placed 45 cm from the mirror. Calculate the image distance. (1/f = 1/v + 1/u)",
      type: "multiple_choice",
      options: ["15 cm", "22.5 cm", "30 cm", "45 cm"],
      answer: "22.5 cm",
      explanation: "1/15 = 1/v + 1/45 → 1/v = 1/15 - 1/45 = 3/45 - 1/45 = 2/45 → v = 45/2 = 22.5 cm."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the critical angle?",
      type: "multiple_choice",
      options: [
        "The angle of incidence for which the angle of refraction is 90°",
        "The angle of incidence for which the angle of reflection is 90°",
        "The angle of incidence for which the angle of refraction is 0°",
        "The angle of incidence for which the angle of reflection is 0°"
      ],
      answer: "The angle of incidence for which the angle of refraction is 90°",
      explanation: "The critical angle is the angle of incidence for which the angle of refraction is 90°."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "What optical instrument uses two convex lenses?",
      type: "multiple_choice",
      options: ["Camera", "Microscope", "Projector", "Eye"],
      answer: "Microscope",
      explanation: "A microscope uses two convex lenses: the objective lens and the eyepiece."
    },
    {
      id: "prac_015",
      objective: "obj_011",
      difficulty: "hard",
      question: "A lens has a focal length of 5 cm. What is its power in diopters? (P = 1/f, f in meters)",
      type: "multiple_choice",
      options: ["5 D", "10 D", "20 D", "50 D"],
      answer: "20 D",
      explanation: "P = 1/f = 1/0.05 = 20 D."
    },
    {
      id: "prac_016",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why does a diamond sparkle so much?",
      type: "multiple_choice",
      options: [
        "It has a high refractive index causing total internal reflection",
        "It is very smooth",
        "It has a low refractive index",
        "It absorbs light"
      ],
      answer: "It has a high refractive index causing total internal reflection",
      explanation: "Diamonds have a high refractive index, causing light to undergo total internal reflection multiple times, making them sparkle."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_optics",
    title: "Optics Quiz",
    description: "Test your understanding of optics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is optics?",
        type: "short_answer",
        answer_key: "The study of light and its behavior",
        explanation: "Optics is the branch of physics dealing with light."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the two laws of reflection?",
        type: "short_answer",
        answer_key: "1) Incident, reflected ray, normal are in same plane. 2) θᵢ = θᵣ",
        explanation: "The two laws of reflection: same plane and angle of incidence equals angle of reflection."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is Snell's Law?",
        type: "short_answer",
        answer_key: "n₁ sin θ₁ = n₂ sin θ₂",
        explanation: "Snell's Law relates the angles of incidence and refraction to the refractive indices."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What type of image does a plane mirror form?",
        type: "short_answer",
        answer_key: "Virtual, upright, same size, laterally inverted",
        explanation: "A plane mirror forms a virtual, upright image that is the same size as the object."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between a concave and convex mirror?",
        type: "short_answer",
        answer_key: "Concave curves inward (converging); convex curves outward (diverging)",
        explanation: "Concave mirrors converge light; convex mirrors diverge light."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the difference between a convex and concave lens?",
        type: "short_answer",
        answer_key: "Convex lens converges light; concave lens diverges light",
        explanation: "Convex lenses converge light; concave lenses diverge light."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the mirror formula?",
        type: "short_answer",
        answer_key: "1/f = 1/v + 1/u",
        explanation: "The mirror formula relates focal length, image distance, and object distance."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is the lens formula?",
        type: "short_answer",
        answer_key: "1/f = 1/v - 1/u",
        explanation: "The lens formula relates focal length, image distance, and object distance for lenses."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is total internal reflection and what are the conditions for it?",
        type: "short_answer",
        answer_key: "Complete reflection at a boundary; occurs when light travels from denser to less dense medium at angle > critical angle",
        explanation: "Total internal reflection requires denser to less dense medium and angle greater than the critical angle."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is dispersion of light?",
        type: "short_answer",
        answer_key: "The splitting of white light into its component colors (ROYGBIV)",
        explanation: "Dispersion is the splitting of white light into its colors by a prism."
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
        "Understand reflection and refraction",
        "Explain image formation by mirrors and lenses",
        "Apply optical formulas",
        "Understand optical phenomena"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is optics?" },
        { time: "5-10 min", activity: "Direct Instruction - Reflection" },
        { time: "10-15 min", activity: "Direct Instruction - Refraction" },
        { time: "15-20 min", activity: "Direct Instruction - Mirrors" },
        { time: "20-25 min", activity: "Direct Instruction - Lenses" },
        { time: "25-30 min", activity: "Direct Instruction - Optical Phenomena" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of light and its behavior",
        // ... full answer key
      },
      assessment: {
        ass_001: "The study of light and its behavior",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Build a simple telescope",
      "Create a rainbow using a prism",
      "Investigate how mirrors form images",
      "Calculate the refractive index of water"
    ],
    differentiation: {
      struggling: [
        "Focus on reflection and refraction basics",
        "Use ray diagrams",
        "Practice simple calculations",
        "Provide a formula sheet"
      ],
      advanced: [
        "Explore advanced optics concepts",
        "Research optical instruments in depth",
        "Investigate the physics of lasers",
        "Study the wave-particle duality of light"
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
      title: "Reflection and Refraction",
      description: "Diagram showing reflection and refraction",
      url: "/diagrams/reflection-refraction.png",
      alt: "Reflection and refraction diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Mirrors and Lenses",
      description: "Diagram showing concave, convex mirrors and lenses",
      url: "/diagrams/mirrors-lenses.png",
      alt: "Mirrors and lenses diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Dispersion of Light",
      description: "Diagram showing the dispersion of white light by a prism",
      url: "/diagrams/dispersion.png",
      alt: "Dispersion of light diagram"
    }
  ]
};