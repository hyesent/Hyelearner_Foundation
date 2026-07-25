// Location: src/data/lessons/arts/fine_arts.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "arts_lesson_fine_arts",
  subject: "Fine Arts",
  topic: "Fine Arts",
  name: "Fine Arts",
  icon: "🎨",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Interest in visual arts",
    "Understanding of basic art concepts",
    "Creativity and imagination",
    "Basic drawing skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Music",
      file: "arts/music.js"
    },
    {
      name: "Drama",
      file: "arts/drama.js"
    },
    {
      name: "Creative Arts",
      file: "arts/creative_arts.js"
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
      description: "Define fine arts and explain its importance",
      indicator: "Student can explain what fine arts are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the different forms of visual arts",
      indicator: "Student can list the major visual art forms"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the elements of art",
      indicator: "Student can describe line, shape, color, texture, space, form, and value"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the principles of design",
      indicator: "Student can describe balance, contrast, emphasis, movement, pattern, rhythm, and unity"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the history of art",
      indicator: "Student can explain major art movements and periods"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain different drawing techniques",
      indicator: "Student can describe various drawing methods"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe painting techniques and media",
      indicator: "Student can explain different painting methods and materials"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain sculpture and three-dimensional art",
      indicator: "Student can describe sculpting techniques and materials"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe printmaking techniques",
      indicator: "Student can explain different printmaking methods"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze famous artworks and artists",
      indicator: "Student can discuss significant artists and their works"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of art in society",
      indicator: "Student can discuss the social and cultural significance of art"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of art criticism",
      indicator: "Student can describe how to critique and analyze art"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe contemporary art movements",
      indicator: "Student can explain modern and contemporary art trends"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the relationship between art and culture",
      indicator: "Student can discuss how art reflects and shapes culture"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the elements of composition",
      indicator: "Student can explain how to compose a visual artwork"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of art education",
      indicator: "Student can discuss the value of studying fine arts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Fine Arts - The Visual Language of Humanity",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about fine arts, visual art forms, techniques, and the history of art."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Fine Arts</h2>
      <p><strong>Fine arts</strong> are creative arts that are primarily concerned with beauty, aesthetics, and expression rather than practical function. They include painting, sculpture, drawing, printmaking, and other visual art forms. Fine arts have been a fundamental part of human culture for thousands of years.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🎨 Key Concepts</h3>
          <ul>
            <li>✓ Elements of Art</li>
            <li>✓ Principles of Design</li>
            <li>✓ Drawing Techniques</li>
            <li>✓ Painting Media</li>
            <li>✓ Sculpture</li>
            <li>✓ Art History</li>
            <li>✓ Art Criticism</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The oldest known cave paintings are 40,000 years old</li>
            <li>• Leonardo da Vinci's Mona Lisa is the most famous painting</li>
            <li>• Michelangelo's David is a masterpiece of sculpture</li>
            <li>• Art was once called "the fine arts"</li>
            <li>• There are over 100 major art museums worldwide</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Fine Arts Matter</h4>
        <p>Fine arts enrich our lives, express human experience, preserve culture, and inspire creativity and critical thinking.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Fine Arts?",
        objective: "obj_001",
        text: `
          <h3>Understanding Fine Arts</h3>
          <p><strong>Fine arts</strong> are creative works that are valued for their aesthetic, intellectual, and emotional qualities rather than their practical function.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Categories of Fine Arts</h4>
              <ul>
                <li>• <strong>Painting:</strong> Oil, acrylic, watercolor</li>
                <li>• <strong>Sculpture:</strong> Stone, bronze, wood</li>
                <li>• <strong>Drawing:</strong> Pencil, charcoal, pastel</li>
                <li>• <strong>Printmaking:</strong> Etching, lithography, screen printing</li>
                <li>• <strong>Photography:</strong> Artistic photography</li>
                <li>• <strong>Architecture:</strong> Building design</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Distinction from Applied Arts</h4>
              <ul>
                <li>• <strong>Fine Arts:</strong> Aesthetic value</li>
                <li>• <strong>Applied Arts:</strong> Practical function</li>
                <li>• Examples of applied arts:</li>
                <li>• Graphic design</li>
                <li>• Industrial design</li>
                <li>• Fashion design</li>
                <li>• Craft arts</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Elements of Art",
        objective: "obj_003",
        text: `
          <h3>The Elements of Art</h3>
          <p>The <strong>elements of art</strong> are the basic building blocks used to create artworks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Seven Elements</h4>
              <ul>
                <li>• <strong>Line:</strong> A mark with length and direction</li>
                <li>• <strong>Shape:</strong> A two-dimensional area</li>
                <li>• <strong>Color:</strong> The visual perception of light</li>
                <li>• <strong>Texture:</strong> The surface quality</li>
                <li>• <strong>Space:</strong> The area around or between objects</li>
                <li>• <strong>Form:</strong> Three-dimensional shape</li>
                <li>• <strong>Value:</strong> Lightness or darkness</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Line:</strong> Contour drawing, calligraphy</li>
                <li>• <strong>Shape:</strong> Geometric, organic</li>
                <li>• <strong>Color:</strong> Primary, secondary, tertiary</li>
                <li>• <strong>Texture:</strong> Rough, smooth, soft</li>
                <li>• <strong>Space:</strong> Positive, negative</li>
                <li>• <strong>Form:</strong> Sphere, cube, cylinder</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Principles of Design",
        objective: "obj_004",
        text: `
          <h3>The Principles of Design</h3>
          <p>The <strong>principles of design</strong> are guidelines for organizing the elements of art.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Balance:</strong> Visual equilibrium</li>
                <li>• <strong>Contrast:</strong> Difference between elements</li>
                <li>• <strong>Emphasis:</strong> Focal point</li>
                <li>• <strong>Movement:</strong> Visual flow</li>
                <li>• <strong>Pattern:</strong> Repetition</li>
                <li>• <strong>Rhythm:</strong> Visual tempo</li>
                <li>• <strong>Unity:</strong> Harmony and cohesion</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples in Art</h4>
              <ul>
                <li>• <strong>Balance:</strong> Symmetrical, asymmetrical</li>
                <li>• <strong>Contrast:</strong> Light vs dark, large vs small</li>
                <li>• <strong>Emphasis:</strong> A bright color in a dark painting</li>
                <li>• <strong>Movement:</strong> Diagonal lines leading the eye</li>
                <li>• <strong>Pattern:</strong> Repeated shapes or colors</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Drawing Techniques",
        objective: "obj_006",
        text: `
          <h3>Drawing Techniques</h3>
          <p>Drawing is the foundation of visual arts.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Drawing Methods</h4>
              <ul>
                <li>• <strong>Contour drawing:</strong> Outlining the subject</li>
                <li>• <strong>Gesture drawing:</strong> Quick, expressive sketches</li>
                <li>• <strong>Hatching:</strong> Parallel lines for shading</li>
                <li>• <strong>Cross-hatching:</strong> Intersecting lines</li>
                <li>• <strong>Stippling:</strong> Dots for tone</li>
                <li>• <strong>Blending:</strong> Smudging for smooth transitions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drawing Media</h4>
              <ul>
                <li>• <strong>Pencil:</strong> Graphite, colored</li>
                <li>• <strong>Charcoal:</strong> Soft, dramatic</li>
                <li>• <strong>Pastel:</strong> Soft, vibrant colors</li>
                <li>• <strong>Ink:</strong> Pen and ink, brush</li>
                <li>• <strong>Chalk:</strong> White, colored</li>
                <li>• <strong>Digital:</strong> Tablet and stylus</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Painting",
        objective: "obj_007",
        text: `
          <h3>Painting Techniques and Media</h3>
          <p>Painting is one of the most important and versatile art forms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Painting Media</h4>
              <ul>
                <li>• <strong>Oil paint:</strong> Slow drying, rich colors</li>
                <li>• <strong>Acrylic paint:</strong> Fast drying, versatile</li>
                <li>• <strong>Watercolor:</strong> Transparent, delicate</li>
                <li>• <strong>Tempera:</strong> Egg-based, ancient</li>
                <li>• <strong>Encaustic:</strong> Wax-based</li>
                <li>• <strong>Fresco:</strong> On wet plaster</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Painting Techniques</h4>
              <ul>
                <li>• <strong>Glazing:</strong> Thin layers of transparent paint</li>
                <li>• <strong>Impasto:</strong> Thick paint application</li>
                <li>• <strong>Wet-on-wet:</strong> Painting on wet paint</li>
                <li>• <strong>Dry brush:</strong> Minimal paint, textured</li>
                <li>• <strong>Scumbling:</strong> Semi-transparent layers</li>
                <li>• <strong>Underpainting:</strong> Base layer</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sculpture",
        objective: "obj_008",
        text: `
          <h3>Sculpture</h3>
          <p><strong>Sculpture</strong> is the art of creating three-dimensional forms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Sculpture Techniques</h4>
              <ul>
                <li>• <strong>Carving:</strong> Removing material</li>
                <li>• <strong>Modeling:</strong> Adding material</li>
                <li>• <strong>Casting:</strong> Pouring liquid material</li>
                <li>• <strong>Assemblage:</strong> Combining objects</li>
                <li>• <strong>Construction:</strong> Building from materials</li>
                <li>• <strong>Installation:</strong> Environmental art</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Materials</h4>
              <ul>
                <li>• <strong>Stone:</strong> Marble, granite, limestone</li>
                <li>• <strong>Wood:</strong> Oak, pine, ebony</li>
                <li>• <strong>Bronze:</strong> Metal casting</li>
                <li>• <strong>Clay:</strong> Modeling, pottery</li>
                <li>• <strong>Plaster:</strong> Casting</li>
                <li>• <strong>Metal:</strong> Welding, forging</li>
                <li>• <strong>Found objects:</strong> Assemblage</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "History of Art",
        objective: "obj_005",
        text: `
          <h3>History of Art</h3>
          <p>Art has evolved through different periods and movements.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Periods</h4>
              <ul>
                <li>• <strong>Prehistoric:</strong> Cave paintings</li>
                <li>• <strong>Ancient:</strong> Egyptian, Greek, Roman</li>
                <li>• <strong>Medieval:</strong> Byzantine, Gothic</li>
                <li>• <strong>Renaissance:</strong> 14th-17th century</li>
                <li>• <strong>Baroque:</strong> 17th century</li>
                <li>• <strong>Neoclassicism:</strong> 18th century</li>
                <li>• <strong>Romanticism:</strong> 19th century</li>
                <li>• <strong>Modern:</strong> 20th century</li>
                <li>• <strong>Contemporary:</strong> 21st century</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Famous Artists</h4>
              <ul>
                <li>• <strong>Leonardo da Vinci:</strong> Mona Lisa, The Last Supper</li>
                <li>• <strong>Michelangelo:</strong> David, Sistine Chapel</li>
                <li>• <strong>Raphael:</strong> School of Athens</li>
                <li>• <strong>Rembrandt:</strong> Self-portraits</li>
                <li>• <strong>Van Gogh:</strong> Starry Night, Sunflowers</li>
                <li>• <strong>Picasso:</strong> Cubism, Guernica</li>
                <li>• <strong>Frida Kahlo:</strong> Self-portraits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Art Criticism",
        objective: "obj_012",
        text: `
          <h3>Art Criticism</h3>
          <p><strong>Art criticism</strong> is the analysis and evaluation of artworks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Steps of Art Criticism</h4>
              <ul>
                <li>• <strong>Description:</strong> What do you see?</li>
                <li>• <strong>Analysis:</strong> How is it organized?</li>
                <li>• <strong>Interpretation:</strong> What does it mean?</li>
                <li>• <strong>Judgment:</strong> Is it successful?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Questions for Analysis</h4>
              <ul>
                <li>• What elements are used?</li>
                <li>• What principles are applied?</li>
                <li>• What is the subject matter?</li>
                <li>• What is the artist's intention?</li>
                <li>• What is the historical context?</li>
                <li>• How does it make you feel?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Contemporary Art",
        objective: "obj_013",
        text: `
          <h3>Contemporary Art</h3>
          <p><strong>Contemporary art</strong> refers to art created in the present day.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Contemporary Art Movements</h4>
              <ul>
                <li>• <strong>Abstract Expressionism:</strong> Jackson Pollock</li>
                <li>• <strong>Pop Art:</strong> Andy Warhol</li>
                <li>• <strong>Minimalism:</strong> Donald Judd</li>
                <li>• <strong>Conceptual Art:</strong> Joseph Kosuth</li>
                <li>• <strong>Performance Art:</strong> Marina Abramović</li>
                <li>• <strong>Installation Art:</strong> Yayoi Kusama</li>
                <li>• <strong>Digital Art:</strong> New media</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Contemporary Artists</h4>
              <ul>
                <li>• <strong>Yayoi Kusama:</strong> Infinity rooms</li>
                <li>• <strong>Banksy:</strong> Street art</li>
                <li>• <strong>Ai Weiwei:</strong> Political art</li>
                <li>• <strong>Kara Walker:</strong> Silhouettes</li>
                <li>• <strong>Jeff Koons:</strong> Pop sculptures</li>
                <li>• <strong>El Anatsui:</strong> African art</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Art and Society",
        objective: "obj_011",
        text: `
          <h3>The Role of Art in Society</h3>
          <p>Art plays a vital role in society and culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Art</h4>
              <ul>
                <li>• <strong>Personal expression:</strong> Individual creativity</li>
                <li>• <strong>Cultural preservation:</strong> Heritage</li>
                <li>• <strong>Social commentary:</strong> Criticism and reflection</li>
                <li>• <strong>Political protest:</strong> Activism</li>
                <li>• <strong>Spiritual:</strong> Religious art</li>
                <li>• <strong>Decoration:</strong> Beauty</li>
                <li>• <strong>Education:</strong> Learning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Art in Nigeria</h4>
              <ul>
                <li>• <strong>Traditional art:</strong> Masks, sculpture</li>
                <li>• <strong>Benin bronze:</strong> World-famous</li>
                <li>• <strong>Yoruba art:</strong> Wood carving</li>
                <li>• <strong>Contemporary Nigerian artists:</strong></li>
                <li>• El Anatsui</li>
                <li>• Ben Enwonwu</li>
                <li>• Nike Davies-Okundaye</li>
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
          <h4>🎨 Fine Arts</h4>
          <ul>
            <li>• Visual art forms: painting, sculpture, drawing</li>
            <li>• Elements of art: line, shape, color, texture, space, form, value</li>
            <li>• Principles of design: balance, contrast, emphasis, movement, pattern, rhythm, unity</li>
            <li>• Art history from prehistoric to contemporary</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Art criticism: description, analysis, interpretation, judgment</li>
            <li>• Contemporary art movements</li>
            <li>• Art's role in society</li>
            <li>• Nigerian art traditions</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Fine arts express human experience, preserve culture, and inspire creativity. Art is a universal language that transcends boundaries.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Art is just decoration",
        correction: "Art has many purposes including expression and social commentary",
        explanation: "Art serves multiple functions beyond decoration."
      },
      {
        id: "mis_002",
        misconception: "Anyone can be an artist without training",
        correction: "Art requires skill, knowledge, and practice",
        explanation: "Professional artists study technique and develop their craft."
      },
      {
        id: "mis_003",
        misconception: "Contemporary art is not real art",
        correction: "Contemporary art is a valid form of artistic expression",
        explanation: "Art continues to evolve and expand in new directions."
      },
      {
        id: "mis_004",
        misconception: "Art is only for the wealthy",
        correction: "Art is for everyone",
        explanation: "Art is a universal human expression accessible to all."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Art Therapy",
        description: "Art is used for mental health treatment.",
        example: "Creative expression in therapy"
      },
      {
        id: "app_002",
        title: "Art Education",
        description: "Art is taught in schools.",
        example: "Developing creativity and skills"
      },
      {
        id: "app_003",
        title: "Art Market",
        description: "Art is a significant economic sector.",
        example: "Galleries, auctions, collectors"
      },
      {
        id: "app_004",
        title: "Cultural Heritage",
        description: "Art preserves culture.",
        example: "Museums, cultural institutions"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Fine Arts", definition: "Creative arts valued for their aesthetic and intellectual qualities." },
    { term: "Elements of Art", definition: "The basic building blocks of art: line, shape, color, texture, space, form, value." },
    { term: "Principles of Design", definition: "Guidelines for organizing the elements of art." },
    { term: "Drawing", definition: "A visual art form using lines and marks." },
    { term: "Painting", definition: "The application of pigment to a surface." },
    { term: "Sculpture", definition: "Three-dimensional art form." },
    { term: "Printmaking", definition: "The process of creating images by printing." },
    { term: "Art Criticism", definition: "The analysis and evaluation of art." },
    { term: "Composition", definition: "The arrangement of elements in an artwork." },
    { term: "Color", definition: "The visual perception of light wavelengths." },
    { term: "Texture", definition: "The surface quality of an artwork." },
    { term: "Balance", definition: "Visual equilibrium in an artwork." },
    { term: "Contrast", definition: "Difference between elements in an artwork." },
    { term: "Emphasis", definition: "The focal point of an artwork." },
    { term: "Movement", definition: "Visual flow in an artwork." },
    { term: "Pattern", definition: "Repetition in an artwork." },
    { term: "Rhythm", definition: "Visual tempo in an artwork." },
    { term: "Unity", definition: "Harmony and cohesion in an artwork." },
    { term: "Medium", definition: "The material used to create art." },
    { term: "Aesthetics", definition: "The study of beauty and taste." }
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
      question: "What are fine arts?",
      type: "multiple_choice",
      options: [
        "Practical arts with functional purposes",
        "Creative arts valued for aesthetic and intellectual qualities",
        "Performing arts only",
        "Digital art only"
      ],
      answer: "Creative arts valued for aesthetic and intellectual qualities",
      explanation: "Fine arts are valued for their aesthetic and intellectual qualities."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a form of visual art?",
      type: "multiple_choice",
      options: ["Painting", "Music", "Dance", "Theatre"],
      answer: "Painting",
      explanation: "Painting is a form of visual art."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an element of art?",
      type: "multiple_choice",
      options: ["Balance", "Color", "Unity", "Emphasis"],
      answer: "Color",
      explanation: "Color is an element of art."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a principle of design?",
      type: "multiple_choice",
      options: ["Line", "Shape", "Texture", "Balance"],
      answer: "Balance",
      explanation: "Balance is a principle of design."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which period is known as the Renaissance?",
      type: "multiple_choice",
      options: ["14th-17th century", "18th century", "19th century", "20th century"],
      answer: "14th-17th century",
      explanation: "The Renaissance was from the 14th to 17th century."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is hatching?",
      type: "multiple_choice",
      options: [
        "A painting technique",
        "A drawing technique using parallel lines",
        "A sculpting method",
        "A printmaking method"
      ],
      answer: "A drawing technique using parallel lines",
      explanation: "Hatching is a drawing technique using parallel lines."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is oil paint?",
      type: "multiple_choice",
      options: [
        "A fast-drying paint",
        "A slow-drying paint using oil as a binder",
        "A water-based paint",
        "A digital painting tool"
      ],
      answer: "A slow-drying paint using oil as a binder",
      explanation: "Oil paint is slow-drying and uses oil as a binder."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is sculpture?",
      type: "multiple_choice",
      options: [
        "A two-dimensional art form",
        "A three-dimensional art form",
        "A drawing technique",
        "A printmaking method"
      ],
      answer: "A three-dimensional art form",
      explanation: "Sculpture is a three-dimensional art form."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is printmaking?",
      type: "multiple_choice",
      options: [
        "A painting technique",
        "A drawing technique",
        "The process of creating images by printing",
        "A sculpture method"
      ],
      answer: "The process of creating images by printing",
      explanation: "Printmaking is the process of creating images by printing."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "Who painted the Mona Lisa?",
      type: "multiple_choice",
      options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Van Gogh"],
      answer: "Leonardo da Vinci",
      explanation: "Leonardo da Vinci painted the Mona Lisa."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the role of art in society?",
      type: "multiple_choice",
      options: [
        "Only decoration",
        "Preserving culture and expressing ideas",
        "Only entertainment",
        "No role"
      ],
      answer: "Preserving culture and expressing ideas",
      explanation: "Art preserves culture and expresses ideas."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the first step in art criticism?",
      type: "multiple_choice",
      options: ["Interpretation", "Judgment", "Description", "Analysis"],
      answer: "Description",
      explanation: "The first step in art criticism is description."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is Pop Art?",
      type: "multiple_choice",
      options: [
        "A movement using popular culture imagery",
        "A painting technique",
        "A sculpture method",
        "A drawing style"
      ],
      answer: "A movement using popular culture imagery",
      explanation: "Pop Art uses imagery from popular culture."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "How does art reflect culture?",
      type: "multiple_choice",
      options: [
        "It does not reflect culture",
        "It reflects cultural values and beliefs",
        "It only reflects individual opinions",
        "It has no connection to culture"
      ],
      answer: "It reflects cultural values and beliefs",
      explanation: "Art reflects cultural values and beliefs."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is composition in art?",
      type: "multiple_choice",
      options: [
        "The color palette",
        "The arrangement of elements",
        "The texture of the surface",
        "The size of the artwork"
      ],
      answer: "The arrangement of elements",
      explanation: "Composition is the arrangement of elements in an artwork."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_fine_arts",
    title: "Fine Arts Quiz",
    description: "Test your understanding of fine arts",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are fine arts?",
        type: "short_answer",
        answer_key: "Creative arts valued for aesthetic and intellectual qualities",
        explanation: "Fine arts are valued for their aesthetic and intellectual qualities."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one form of visual art.",
        type: "short_answer",
        answer_key: "Painting (or any valid)",
        explanation: "Painting is a form of visual art."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is an element of art?",
        type: "short_answer",
        answer_key: "Color (or any valid)",
        explanation: "Color is an element of art."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a principle of design?",
        type: "short_answer",
        answer_key: "Balance (or any valid)",
        explanation: "Balance is a principle of design."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "When was the Renaissance period?",
        type: "short_answer",
        answer_key: "14th-17th century",
        explanation: "The Renaissance was from the 14th to 17th century."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is hatching?",
        type: "short_answer",
        answer_key: "A drawing technique using parallel lines",
        explanation: "Hatching is a drawing technique using parallel lines."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is oil paint?",
        type: "short_answer",
        answer_key: "A slow-drying paint using oil as a binder",
        explanation: "Oil paint is slow-drying and uses oil as a binder."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is sculpture?",
        type: "short_answer",
        answer_key: "A three-dimensional art form",
        explanation: "Sculpture is a three-dimensional art form."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "Who painted the Mona Lisa?",
        type: "short_answer",
        answer_key: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci painted the Mona Lisa."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the role of art in society?",
        type: "short_answer",
        answer_key: "Preserving culture and expressing ideas",
        explanation: "Art preserves culture and expresses ideas."
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
        "Understand fine arts and their forms",
        "Explain elements of art and principles of design",
        "Describe art history and movements",
        "Understand art criticism and the role of art in society"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are fine arts?" },
        { time: "5-10 min", activity: "Direct Instruction - Elements of Art" },
        { time: "10-15 min", activity: "Direct Instruction - Principles of Design" },
        { time: "15-20 min", activity: "Direct Instruction - Art History" },
        { time: "20-25 min", activity: "Direct Instruction - Drawing and Painting" },
        { time: "25-30 min", activity: "Direct Instruction - Sculpture and Printmaking" },
        { time: "30-35 min", activity: "Direct Instruction - Art Criticism" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Creative arts valued for aesthetic and intellectual qualities",
        prac_002: "Painting",
        prac_003: "Color",
        prac_004: "Balance",
        prac_005: "14th-17th century",
        prac_006: "A drawing technique using parallel lines",
        prac_007: "A slow-drying paint using oil as a binder",
        prac_008: "A three-dimensional art form",
        prac_009: "The process of creating images by printing",
        prac_010: "Leonardo da Vinci",
        prac_011: "Preserving culture and expressing ideas",
        prac_012: "Description",
        prac_013: "A movement using popular culture imagery",
        prac_014: "It reflects cultural values and beliefs",
        prac_015: "The arrangement of elements"
      },
      assessment: {
        ass_001: "Creative arts valued for aesthetic and intellectual qualities",
        ass_002: "Painting (or any valid)",
        ass_003: "Color (or any valid)",
        ass_004: "Balance (or any valid)",
        ass_005: "14th-17th century",
        ass_006: "A drawing technique using parallel lines",
        ass_007: "A slow-drying paint using oil as a binder",
        ass_008: "A three-dimensional art form",
        ass_009: "Leonardo da Vinci",
        ass_010: "Preserving culture and expressing ideas"
      }
    },
    extensionActivities: [
      "Create a drawing or painting",
      "Visit an art museum or gallery",
      "Research a famous artist",
      "Analyze an artwork using art criticism"
    ],
    differentiation: {
      struggling: [
        "Focus on basic elements",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research art movements",
        "Study art history",
        "Create a portfolio",
        "Analyze contemporary art"
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
      title: "Elements of Art",
      description: "Diagram showing the elements of art",
      url: "/diagrams/elements-of-art.png",
      alt: "Elements of art diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Principles of Design",
      description: "Diagram showing the principles of design",
      url: "/diagrams/principles-of-design.png",
      alt: "Principles of design diagram"
    },
    {
      id: "vis_003",
      type: "timeline",
      title: "Art History Timeline",
      description: "Timeline of major art periods",
      url: "/diagrams/art-history-timeline.png",
      alt: "Art history timeline"
    }
  ]
};