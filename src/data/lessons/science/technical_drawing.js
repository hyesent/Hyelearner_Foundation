// Location: src/data/lessons/science/technical_drawing.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "td_lesson_technical_drawing",
  subject: "Technical Drawing",
  topic: "Technical Drawing",
  name: "Technical Drawing",
  icon: "📐",
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
    "Understanding of basic geometry",
    "Knowledge of measurements",
    "Ability to use drawing instruments",
    "Spatial awareness"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Technical Drawing lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define technical drawing and explain its importance",
      indicator: "Student can explain what technical drawing is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify drawing instruments and their uses",
      indicator: "Student can name and describe drawing tools"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain types of lines used in technical drawing",
      indicator: "Student can identify different line types"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply geometric constructions",
      indicator: "Student can construct lines, angles, and shapes"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain orthographic projection",
      indicator: "Student can describe first-angle and third-angle projection"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Create isometric drawings",
      indicator: "Student can draw 3D objects in isometric projection"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain dimensioning and scaling",
      indicator: "Student can add dimensions to drawings"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe sectioning techniques",
      indicator: "Student can draw section views"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the use of scales in technical drawing",
      indicator: "Student can use different scales"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Construct complex geometric shapes",
      indicator: "Student can draw polygons, ellipses, and spirals"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain auxiliary views",
      indicator: "Student can draw auxiliary projections"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe perspective drawing",
      indicator: "Student can explain one-point and two-point perspective"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the use of CAD in technical drawing",
      indicator: "Student can describe computer-aided design"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Create working drawings",
      indicator: "Student can prepare complete technical drawings"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze engineering drawings",
      indicator: "Student can interpret professional drawings"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the standards and conventions in technical drawing",
      indicator: "Student can describe international drawing standards"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Technical Drawing - The Language of Engineering",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about technical drawing, instruments, projections, and standards."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Technical Drawing</h2>
      <p><strong>Technical drawing</strong> is the art and science of representing objects, structures, and systems through precise graphic communication. It is the universal language of engineers, architects, and designers used to convey ideas and specifications.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📐 Key Concepts</h3>
          <ul>
            <li>✓ Drawing Instruments</li>
            <li>✓ Types of Lines</li>
            <li>✓ Geometric Constructions</li>
            <li>✓ Orthographic Projection</li>
            <li>✓ Isometric Drawing</li>
            <li>✓ Dimensioning</li>
            <li>✓ Sectioning</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Technical drawing is over 2,000 years old</li>
            <li>• Leonardo da Vinci was a master technical artist</li>
            <li>• CAD revolutionized technical drawing</li>
            <li>• ISO sets international drawing standards</li>
            <li>• Every manufactured product starts with a drawing</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Technical Drawing Matters</h4>
        <p>Technical drawing is essential for communicating design ideas accurately. It is used in engineering, architecture, manufacturing, and construction.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Drawing Instruments",
        objective: "obj_002",
        text: `
          <h3>Drawing Instruments and Their Uses</h3>
          <p>Various instruments are used in technical drawing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Instruments</h4>
              <ul>
                <li>• <strong>T-square:</strong> Draws horizontal lines</li>
                <li>• <strong>Set squares:</strong> Draws angles (30°, 45°, 60°)</li>
                <li>• <strong>Compass:</strong> Draws circles and arcs</li>
                <li>• <strong>Divider:</strong> Transfer measurements</li>
                <li>• <strong>Protractor:</strong> Measures angles</li>
                <li>• <strong>Scale ruler:</strong> Measures and scales</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drawing Materials</h4>
              <ul>
                <li>• <strong>Drawing board:</strong> Flat surface</li>
                <li>• <strong>Drawing paper:</strong> Smooth surface</li>
                <li>• <strong>Pencils:</strong> Different grades (H, HB, B)</li>
                <li>• <strong>Eraser:</strong> Correct mistakes</li>
                <li>• <strong>Sharpener:</strong> Maintain pencil points</li>
                <li>• <strong>Template:</strong> Standard shapes</li>
              </ul>
            </div>
          </div>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Instrument</th>
                <th class="border p-2">Purpose</th>
                <th class="border p-2">Key Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">T-Square</td>
                <td class="border p-2">Drawing horizontal lines</td>
                <td class="border p-2">Straight edge with head</td>
              </tr>
              <tr>
                <td class="border p-2">Set Square</td>
                <td class="border p-2">Drawing angles</td>
                <td class="border p-2">Fixed angles (30°, 45°, 60°)</td>
              </tr>
              <tr>
                <td class="border p-2">Compass</td>
                <td class="border p-2">Drawing circles</td>
                <td class="border p-2">Adjustable radius</td>
              </tr>
              <tr>
                <td class="border p-2">Scale Ruler</td>
                <td class="border p-2">Measuring and scaling</td>
                <td class="border p-2">Multiple scales</td>
              </tr>
              <tr>
                <td class="border p-2">Protractor</td>
                <td class="border p-2">Measuring angles</td>
                <td class="border p-2">Semicircular scale</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_002",
        title: "Types of Lines",
        objective: "obj_003",
        text: `
          <h3>Types of Lines in Technical Drawing</h3>
          <p>Different line types convey different meanings in technical drawings.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Line Types</h4>
              <ul>
                <li>• <strong>Continuous thick:</strong> Visible outlines</li>
                <li>• <strong>Continuous thin:</strong> Dimension lines</li>
                <li>• <strong>Dashed:</strong> Hidden edges</li>
                <li>• <strong>Chain:</strong> Center lines</li>
                <li>• <strong>Freehand:</strong> Break lines</li>
                <li>• <strong>Zigzag:</strong> Long break lines</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Line Applications</h4>
              <ul>
                <li>• <strong>Construction lines:</strong> Light guides</li>
                <li>• <strong>Object lines:</strong> Visible edges</li>
                <li>• <strong>Hidden lines:</strong> Invisible edges</li>
                <li>• <strong>Center lines:</strong> Axes of symmetry</li>
                <li>• <strong>Dimension lines:</strong> Measurements</li>
                <li>• <strong>Leader lines:</strong> Labels</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Types of Lines</text>
              
              <!-- Continuous Thick -->
              <g transform="translate(150, 80)">
                <line x1="-80" y1="0" x2="80" y2="0" stroke="#1a1a2e" stroke-width="3"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Continuous Thick</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Visible outlines</text>
              </g>
              
              <!-- Continuous Thin -->
              <g transform="translate(450, 80)">
                <line x1="-80" y1="0" x2="80" y2="0" stroke="#1a1a2e" stroke-width="1"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Continuous Thin</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Dimension lines</text>
              </g>
              
              <!-- Dashed -->
              <g transform="translate(150, 150)">
                <line x1="-80" y1="0" x2="80" y2="0" stroke="#1a1a2e" stroke-width="2" stroke-dasharray="8,4"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Dashed</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Hidden edges</text>
              </g>
              
              <!-- Chain -->
              <g transform="translate(450, 150)">
                <line x1="-80" y1="0" x2="80" y2="0" stroke="#1a1a2e" stroke-width="2" stroke-dasharray="20,4,4,4"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Chain</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Center lines</text>
              </g>
              
              <!-- Freehand -->
              <g transform="translate(150, 220)">
                <path d="M-80 0 L-60 -5 L-40 5 L-20 -5 L0 5 L20 -5 L40 5 L60 -5 L80 0" stroke="#1a1a2e" stroke-width="2" fill="none"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Freehand</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Break lines</text>
              </g>
              
              <!-- Zigzag -->
              <g transform="translate(450, 220)">
                <path d="M-80 0 L-60 -10 L-40 10 L-20 -10 L0 10 L20 -10 L40 10 L60 -10 L80 0" stroke="#1a1a2e" stroke-width="2" fill="none"/>
                <text x="0" y="-15" text-anchor="middle" font-size="10" fill="#1a1a2e">Zigzag</text>
                <text x="0" y="20" text-anchor="middle" font-size="8" fill="#666">Long break lines</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Geometric Constructions",
        objective: "obj_004",
        text: `
          <h3>Geometric Constructions</h3>
          <p>Basic geometric constructions are fundamental to technical drawing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Constructions</h4>
              <ul>
                <li>• <strong>Bisect a line:</strong> Divide into two equal parts</li>
                <li>• <strong>Bisect an angle:</strong> Divide into two equal angles</li>
                <li>• <strong>Draw perpendiculars:</strong> 90° lines</li>
                <li>• <strong>Draw parallels:</strong> Equal distance lines</li>
                <li>• <strong>Construct triangles:</strong> Equilateral, isosceles</li>
                <li>• <strong>Construct polygons:</strong> Square, hexagon</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Advanced Constructions</h4>
              <ul>
                <li>• <strong>Construct ellipses:</strong> Four-center method</li>
                <li>• <strong>Construct parabolas:</strong> Rectangular method</li>
                <li>• <strong>Construct spirals:</strong> Archimedean spiral</li>
                <li>• <strong>Tangents:</strong> Lines touching circles</li>
                <li>• <strong>Inscribed polygons:</strong> Inside circles</li>
                <li>• <strong>Circumscribed polygons:</strong> Around circles</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Orthographic Projection",
        objective: "obj_005",
        text: `
          <h3>Orthographic Projection</h3>
          <p>Orthographic projection represents a 3D object in 2D using multiple views.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 First-Angle Projection</h4>
              <ul>
                <li>• Object between viewer and plane</li>
                <li>• Used in Europe and Nigeria</li>
                <li>• Views:</li>
                <li>• Front view (top)</li>
                <li>• Top view (below front)</li>
                <li>• Left view (right of front)</li>
                <li>• Symbol: Circle with cone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Third-Angle Projection</h4>
              <ul>
                <li>• Plane between object and viewer</li>
                <li>• Used in USA and Canada</li>
                <li>• Views:</li>
                <li>• Front view (center)</li>
                <li>• Top view (above front)</li>
                <li>• Right view (right of front)</li>
                <li>• Symbol: Circle with cone</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Orthographic Projection</text>
              
              <!-- First-Angle Projection -->
              <g transform="translate(150, 190)">
                <!-- Front view -->
                <rect x="-40" y="-30" width="80" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="-40" text-anchor="middle" font-size="10" fill="#1565c0">Front View</text>
                
                <!-- Top view -->
                <rect x="-40" y="-90" width="80" height="50" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="-100" text-anchor="middle" font-size="10" fill="#1565c0">Top View</text>
                
                <!-- Left view -->
                <rect x="50" y="-30" width="50" height="60" fill="#90caf9" stroke="#1565c0" stroke-width="2"/>
                <text x="75" y="-40" text-anchor="middle" font-size="10" fill="#1565c0">Left View</text>
                
                <!-- Label -->
                <text x="0" y="40" text-anchor="middle" font-size="11" fill="#1565c0">First-Angle</text>
              </g>
              
              <!-- Third-Angle Projection -->
              <g transform="translate(450, 190)">
                <!-- Front view -->
                <rect x="-40" y="-30" width="80" height="60" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="-40" text-anchor="middle" font-size="10" fill="#1565c0">Front View</text>
                
                <!-- Top view -->
                <rect x="-40" y="-100" width="80" height="60" fill="#bbdefb" stroke="#1565c0" stroke-width="2"/>
                <text x="0" y="-110" text-anchor="middle" font-size="10" fill="#1565c0">Top View</text>
                
                <!-- Right view -->
                <rect x="50" y="-30" width="50" height="60" fill="#90caf9" stroke="#1565c0" stroke-width="2"/>
                <text x="75" y="-40" text-anchor="middle" font-size="10" fill="#1565c0">Right View</text>
                
                <!-- Label -->
                <text x="0" y="40" text-anchor="middle" font-size="11" fill="#1565c0">Third-Angle</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Isometric Drawing",
        objective: "obj_006",
        text: `
          <h3>Isometric Drawing</h3>
          <p>Isometric drawing shows a 3D object with all three axes at 120° angles.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Isometric Principles</h4>
              <ul>
                <li>• Three axes at 120°</li>
                <li>• Vertical lines remain vertical</li>
                <li>• Horizontal lines at 30°</li>
                <li>• No perspective distortion</li>
                <li>• Measurements can be taken</li>
                <li>• All dimensions are true</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Isometric Construction</h4>
              <ul>
                <li>• Start with an isometric box</li>
                <li>• Draw using 30° set squares</li>
                <li>• Transfer dimensions</li>
                <li>• Include hidden edges</li>
                <li>• Add dimensions</li>
                <li>• Used for exploded views</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Dimensioning",
        objective: "obj_007",
        text: `
          <h3>Dimensioning</h3>
          <p>Dimensioning adds measurements to technical drawings.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Dimensioning Rules</h4>
              <ul>
                <li>• Place dimensions outside the drawing</li>
                <li>• Use dimension lines with arrows</li>
                <li>• Align dimensions with drawing</li>
                <li>• Use leader lines for labels</li>
                <li>• Include units (mm, cm, m)</li>
                <li>• Avoid crossing dimension lines</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Dimensioning Types</h4>
              <ul>
                <li>• <strong>Linear:</strong> Length, width, height</li>
                <li>• <strong>Angular:</strong> Angles</li>
                <li>• <strong>Radial:</strong> Radius, diameter</li>
                <li>• <strong>Ordinate:</strong> Coordinates</li>
                <li>• <strong>Tolerance:</strong> Allowable variation</li>
                <li>• <strong>Datums:</strong> Reference points</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Sectioning",
        objective: "obj_008",
        text: `
          <h3>Sectioning</h3>
          <p>Section views show the internal features of an object.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Sections</h4>
              <ul>
                <li>• <strong>Full section:</strong> Cut through entire object</li>
                <li>• <strong>Half section:</strong> Cut through half</li>
                <li>• <strong>Offset section:</strong> Zigzag cut</li>
                <li>• <strong>Revolved section:</strong> Rotated cut</li>
                <li>• <strong>Removed section:</strong> Separate view</li>
                <li>• <strong>Broken-out section:</strong> Partial cut</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sectioning Rules</h4>
              <ul>
                <li>• Use section lines (hatching)</li>
                <li>• Lines at 45°</li>
                <li>• Spacing consistent</li>
                <li>• Indicate cutting plane</li>
                <li>• Label section views</li>
                <li>• Omit hidden lines</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Scales",
        objective: "obj_009",
        text: `
          <h3>Scales in Technical Drawing</h3>
          <p>Scales allow large or small objects to be drawn to size.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Scales</h4>
              <ul>
                <li>• <strong>Full scale:</strong> 1:1</li>
                <li>• <strong>Reduction:</strong> 1:2, 1:5, 1:10, 1:50</li>
                <li>• <strong>Enlargement:</strong> 2:1, 5:1, 10:1</li>
                <li>• <strong>Metric scales:</strong> 1:1, 1:2, 1:5</li>
                <li>• <strong>Architectural scales:</strong> 1:100, 1:200</li>
                <li>• <strong>Engineering scales:</strong> 1:10, 1:20</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Using Scales</h4>
              <ul>
                <li>• Choose appropriate scale</li>
                <li>• Calculate scaled dimensions</li>
                <li>• Use scale ruler</li>
                <li>• Mark scale on drawing</li>
                <li>• Consider drawing size</li>
                <li>• Consider paper size</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "CAD - Computer-Aided Design",
        objective: "obj_013",
        text: `
          <h3>Computer-Aided Design (CAD)</h3>
          <p>CAD is the use of computer software for technical drawing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 CAD Benefits</h4>
              <ul>
                <li>• Precision and accuracy</li>
                <li>• Easy editing</li>
                <li>• 3D modeling</li>
                <li>• Animation and simulation</li>
                <li>• Digital storage</li>
                <li>• Collaboration</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common CAD Software</h4>
              <ul>
                <li>• <strong>AutoCAD:</strong> Industry standard</li>
                <li>• <strong>SolidWorks:</strong> 3D modeling</li>
                <li>• <strong>Fusion 360:</strong> Integrated design</li>
                <li>• <strong>SketchUp:</strong> Architecture</li>
                <li>• <strong>Revit:</strong> Building design</li>
                <li>• <strong>FreeCAD:</strong> Open-source</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Working Drawings",
        objective: "obj_014",
        text: `
          <h3>Working Drawings</h3>
          <p>Working drawings are complete sets of drawings used for manufacturing or construction.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Components</h4>
              <ul>
                <li>• <strong>Assembly drawings:</strong> How parts fit</li>
                <li>• <strong>Detail drawings:</strong> Individual parts</li>
                <li>• <strong>Bill of materials:</strong> Parts list</li>
                <li>• <strong>Specifications:</strong> Materials, finishes</li>
                <li>• <strong>Title block:</strong> Information</li>
                <li>• <strong>Revision block:</strong> Changes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Title Block Information</h4>
              <ul>
                <li>• <strong>Drawing title:</strong> Description</li>
                <li>• <strong>Drawing number:</strong> Identification</li>
                <li>• <strong>Scale:</strong> Size ratio</li>
                <li>• <strong>Date:</strong> Created/revised</li>
                <li>• <strong>Drawn by:</strong> Designer</li>
                <li>• <strong>Checked by:</strong> Verifier</li>
                <li>• <strong>Company name:</strong> Organization</li>
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
          <h4>📐 Technical Drawing</h4>
          <ul>
            <li>• Uses specialized instruments</li>
            <li>• Different line types for different meanings</li>
            <li>• Orthographic projection shows multiple views</li>
            <li>• Isometric drawing shows 3D objects</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Skills</h4>
          <ul>
            <li>• Geometric constructions</li>
            <li>• Dimensioning and scaling</li>
            <li>• Sectioning techniques</li>
            <li>• Working drawings and CAD</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Technical drawing is the language of engineering. Clear, accurate drawings are essential for successful manufacturing and construction.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Technical drawing is just art",
        correction: "Technical drawing is precise and standardized",
        explanation: "Technical drawing follows strict rules and conventions."
      },
      {
        id: "mis_002",
        misconception: "Isometric and perspective are the same",
        correction: "Isometric has no perspective distortion",
        explanation: "Isometric is parallel projection; perspective has vanishing points."
      },
      {
        id: "mis_003",
        misconception: "First-angle and third-angle projection are the same",
        correction: "They arrange views differently",
        explanation: "First-angle has top view below; third-angle has top view above."
      },
      {
        id: "mis_004",
        misconception: "Technical drawing is obsolete with computers",
        correction: "Technical drawing skills are still essential",
        explanation: "Understanding principles is needed to use CAD effectively."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Architecture",
        description: "Technical drawing is used in building design.",
        example: "Floor plans, elevations, sections"
      },
      {
        id: "app_002",
        title: "Engineering",
        description: "Technical drawing is used in product design.",
        example: "Mechanical parts, assemblies"
      },
      {
        id: "app_003",
        title: "Manufacturing",
        description: "Technical drawing guides production.",
        example: "Shop drawings, fabrication"
      },
      {
        id: "app_004",
        title: "Construction",
        description: "Technical drawing guides construction.",
        example: "Structural drawings, site plans"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Technical Drawing", definition: "Precise graphic communication of design ideas." },
    { term: "T-Square", definition: "Instrument for drawing horizontal lines." },
    { term: "Set Square", definition: "Triangle for drawing angles." },
    { term: "Compass", definition: "Instrument for drawing circles." },
    { term: "Scale", definition: "Ratio of drawing size to real size." },
    { term: "Dimension", definition: "A measurement on a drawing." },
    { term: "Orthographic", definition: "Projection with parallel lines." },
    { term: "Isometric", definition: "Projection with three 120° axes." },
    { term: "Perspective", definition: "Projection with vanishing points." },
    { term: "Section", definition: "Cut view of an object." },
    { term: "Hatching", definition: "Parallel lines showing section." },
    { term: "Elevation", definition: "Front view of a building." },
    { term: "Plan", definition: "Top view of a building." },
    { term: "CAD", definition: "Computer-Aided Design." },
    { term: "Assembly", definition: "Drawing showing how parts fit." },
    { term: "Detail", definition: "Drawing of an individual part." },
    { term: "Title Block", definition: "Information section of a drawing." },
    { term: "Tolerance", definition: "Allowable variation in dimension." },
    { term: "Blueprint", definition: "Traditional technical drawing." },
    { term: "Template", definition: "Standard shape template." }
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
      question: "What is technical drawing?",
      type: "multiple_choice",
      options: [
        "Artistic drawing",
        "Precise graphic communication",
        "Freehand sketching",
        "Painting"
      ],
      answer: "Precise graphic communication",
      explanation: "Technical drawing is precise graphic communication of design ideas."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a T-square used for?",
      type: "multiple_choice",
      options: [
        "Drawing circles",
        "Drawing horizontal lines",
        "Measuring angles",
        "Drawing vertical lines"
      ],
      answer: "Drawing horizontal lines",
      explanation: "A T-square is used to draw horizontal lines."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What type of line shows hidden edges?",
      type: "multiple_choice",
      options: [
        "Continuous thick",
        "Dashed",
        "Chain",
        "Freehand"
      ],
      answer: "Dashed",
      explanation: "Dashed lines show hidden edges in technical drawings."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the first step in bisecting a line?",
      type: "multiple_choice",
      options: [
        "Draw the line",
        "Draw arcs from both ends",
        "Measure the line",
        "Draw perpendiculars"
      ],
      answer: "Draw arcs from both ends",
      explanation: "To bisect a line, draw arcs from both ends with equal radius."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which projection is used in Nigeria?",
      type: "multiple_choice",
      options: [
        "First-angle",
        "Third-angle",
        "Both",
        "Neither"
      ],
      answer: "First-angle",
      explanation: "First-angle projection is used in Nigeria and Europe."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What angle are isometric axes at?",
      type: "multiple_choice",
      options: ["90°", "120°", "45°", "30°"],
      answer: "120°",
      explanation: "Isometric axes are at 120° to each other."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is dimensioning?",
      type: "multiple_choice",
      options: [
        "Adding measurements to drawings",
        "Drawing objects",
        "Adding color",
        "Removing lines"
      ],
      answer: "Adding measurements to drawings",
      explanation: "Dimensioning adds measurements to technical drawings."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a section view?",
      type: "multiple_choice",
      options: [
        "A cut view of an object",
        "A side view",
        "A top view",
        "A front view"
      ],
      answer: "A cut view of an object",
      explanation: "A section view shows internal features by cutting through an object."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What does 1:2 scale mean?",
      type: "multiple_choice",
      options: [
        "Drawing is twice the size",
        "Drawing is half the size",
        "Drawing is same size",
        "Drawing is ten times"
      ],
      answer: "Drawing is half the size",
      explanation: "1:2 means the drawing is half the size of the real object."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is an ellipse used for?",
      type: "multiple_choice",
      options: [
        "Drawing circles in isometric",
        "Drawing squares",
        "Drawing triangles",
        "Drawing rectangles"
      ],
      answer: "Drawing circles in isometric",
      explanation: "Ellipses represent circles in isometric projections."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is an auxiliary view?",
      type: "multiple_choice",
      options: [
        "A view on a plane other than principal",
        "A front view",
        "A top view",
        "A side view"
      ],
      answer: "A view on a plane other than principal",
      explanation: "Auxiliary views are taken on planes that are not principal planes."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "How many vanishing points does one-point perspective have?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "One-point perspective has one vanishing point."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What does CAD stand for?",
      type: "multiple_choice",
      options: [
        "Computer-Aided Design",
        "Computer-Aided Drawing",
        "Computer-Assisted Design",
        "Computer-Automated Design"
      ],
      answer: "Computer-Aided Design",
      explanation: "CAD stands for Computer-Aided Design."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is included in a working drawing?",
      type: "multiple_choice",
      options: [
        "Assembly views",
        "Detail views",
        "Bill of materials",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Working drawings include assembly views, detail views, and bills of materials."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is a title block?",
      type: "multiple_choice",
      options: [
        "Information section of a drawing",
        "A type of line",
        "A drawing instrument",
        "A scale"
      ],
      answer: "Information section of a drawing",
      explanation: "The title block contains information about the drawing."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_technical_drawing",
    title: "Technical Drawing Quiz",
    description: "Test your understanding of technical drawing",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is technical drawing?",
        type: "short_answer",
        answer_key: "Precise graphic communication",
        explanation: "Technical drawing is precise graphic communication of design ideas."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is a T-square used for?",
        type: "short_answer",
        answer_key: "Drawing horizontal lines",
        explanation: "A T-square is used to draw horizontal lines."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What line type shows hidden edges?",
        type: "short_answer",
        answer_key: "Dashed",
        explanation: "Dashed lines show hidden edges."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the first step in bisecting a line?",
        type: "short_answer",
        answer_key: "Draw arcs from both ends",
        explanation: "Draw arcs from both ends with equal radius."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Which projection is used in Nigeria?",
        type: "short_answer",
        answer_key: "First-angle",
        explanation: "First-angle projection is used in Nigeria."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What angle are isometric axes at?",
        type: "short_answer",
        answer_key: "120°",
        explanation: "Isometric axes are at 120° to each other."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is dimensioning?",
        type: "short_answer",
        answer_key: "Adding measurements to drawings",
        explanation: "Dimensioning adds measurements to drawings."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is a section view?",
        type: "short_answer",
        answer_key: "A cut view of an object",
        explanation: "A section view shows internal features."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What does 1:2 scale mean?",
        type: "short_answer",
        answer_key: "Drawing is half the size",
        explanation: "1:2 means the drawing is half the size."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What does CAD stand for?",
        type: "short_answer",
        answer_key: "Computer-Aided Design",
        explanation: "CAD stands for Computer-Aided Design."
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
        "Understand technical drawing and its importance",
        "Identify drawing instruments",
        "Explain orthographic and isometric projections",
        "Understand dimensioning and sectioning"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is technical drawing?" },
        { time: "5-10 min", activity: "Direct Instruction - Drawing Instruments" },
        { time: "10-15 min", activity: "Direct Instruction - Types of Lines" },
        { time: "15-20 min", activity: "Direct Instruction - Geometric Constructions" },
        { time: "20-25 min", activity: "Direct Instruction - Orthographic Projection" },
        { time: "25-30 min", activity: "Direct Instruction - Isometric Drawing" },
        { time: "30-35 min", activity: "Direct Instruction - Dimensioning and Sectioning" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Precise graphic communication",
        prac_002: "Drawing horizontal lines",
        prac_003: "Dashed",
        prac_004: "Draw arcs from both ends",
        prac_005: "First-angle",
        prac_006: "120°",
        prac_007: "Adding measurements to drawings",
        prac_008: "A cut view of an object",
        prac_009: "Drawing is half the size",
        prac_010: "Drawing circles in isometric",
        prac_011: "A view on a plane other than principal",
        prac_012: "1",
        prac_013: "Computer-Aided Design",
        prac_014: "All of the above",
        prac_015: "Information section of a drawing"
      },
      assessment: {
        ass_001: "Precise graphic communication",
        ass_002: "Drawing horizontal lines",
        ass_003: "Dashed",
        ass_004: "Draw arcs from both ends",
        ass_005: "First-angle",
        ass_006: "120°",
        ass_007: "Adding measurements to drawings",
        ass_008: "A cut view of an object",
        ass_009: "Drawing is half the size",
        ass_010: "Computer-Aided Design"
      }
    },
    extensionActivities: [
      "Create a technical drawing",
      "Study CAD software",
      "Research architectural drawings",
      "Learn about engineering drawings"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research 3D modeling",
        "Study advanced CAD",
        "Research engineering drawing standards",
        "Study architectural drawing"
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
      title: "Types of Lines",
      description: "Diagram showing different line types",
      url: "/diagrams/line-types.png",
      alt: "Line types diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Orthographic Projection",
      description: "Diagram showing orthographic projection",
      url: "/diagrams/orthographic-projection.png",
      alt: "Orthographic projection diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Isometric Drawing",
      description: "Diagram showing isometric drawing",
      url: "/diagrams/isometric-drawing.png",
      alt: "Isometric drawing diagram"
    }
  ]
};