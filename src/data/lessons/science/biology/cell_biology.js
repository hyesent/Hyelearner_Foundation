// Location: src/data/lessons/science/biology/cell_biology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_cell_biology",
  subject: "Biology",
  topic: "Cell Biology",
  name: "Cell Biology",
  icon: "🧬",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Basic understanding of living things",
    "Knowledge of microscope use",
    "Understanding of the scientific method"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Genetics",
      file: "science/biology/genetics.js"
    },
    {
      name: "Nervous System",
      file: "science/biology/human_body/nervous_system.js"
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
      description: "Define a cell and identify it as the basic unit of life",
      indicator: "Student can explain what a cell is with examples"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the differences between plant and animal cells",
      indicator: "Student can list at least 3 differences between plant and animal cells"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Name the main organelles found in a cell",
      indicator: "Student can identify and name 7 major organelles"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify the parts of a microscope and their functions",
      indicator: "Student can label the parts of a microscope"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the function of each major organelle",
      indicator: "Student can explain the role of nucleus, mitochondria, chloroplast, ER, Golgi, ribosomes, lysosomes"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the concept of specialized cells",
      indicator: "Student can give examples of specialized cells and their functions"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the structure and function of the cell membrane",
      indicator: "Student can explain the fluid mosaic model and selective permeability"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the process of diffusion and osmosis",
      indicator: "Student can explain how substances move across cell membranes"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Differentiate between active and passive transport",
      indicator: "Student can compare active and passive transport mechanisms"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Compare prokaryotic and eukaryotic cells in detail",
      indicator: "Student can list 5 differences between prokaryotes and eukaryotes"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the importance of cell organization (tissues, organs, systems)",
      indicator: "Student can explain how cells form tissues, organs, and systems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the role of stem cells in medicine and research",
      indicator: "Student can discuss the potential and ethical issues of stem cell research"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the process of cellular respiration",
      indicator: "Student can explain how cells produce energy"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the process of photosynthesis in plant cells",
      indicator: "Student can explain how plant cells produce food"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Introduction to Cell Biology - The Building Blocks of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the basic unit of life - the cell. Discover its structure, organelles, and functions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Cell Biology</h2>
      <p><strong>Cells</strong> are the basic building blocks of all living organisms. Every living thing, from tiny bacteria to massive whales, is made up of cells. Some organisms are made of just one cell (unicellular), while others are made of many cells (multicellular).</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔬 Key Concepts</h3>
          <ul>
            <li>✓ Cell Theory</li>
            <li>✓ Prokaryotic vs Eukaryotic</li>
            <li>✓ Plant vs Animal Cells</li>
            <li>✓ Organelles and their functions</li>
            <li>✓ Cell Transport</li>
            <li>✓ Specialized Cells</li>
            <li>✓ Stem Cells</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The human body has ~37 trillion cells</li>
            <li>• The largest cell is an ostrich egg</li>
            <li>• The smallest cell is a bacterium</li>
            <li>• Cells have been studied since the 1600s</li>
            <li>• A single cell can be an entire organism</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Cell Biology Matters</h4>
        <p>Understanding cells helps us understand how living things work, how diseases develop, and how to develop new treatments and medicines.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Cell Theory",
        objective: "obj_001",
        text: `
          <h3>The Cell Theory</h3>
          <p>The cell theory is one of the fundamental principles of biology. It states:</p>
          
          <div class="example-box">
            <strong>📌 Three Main Principles:</strong>
            <ol>
              <li><strong>All living organisms are made of cells.</strong></li>
              <li><strong>The cell is the basic unit of life.</strong></li>
              <li><strong>All cells come from pre-existing cells.</strong></li>
            </ol>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📜 History of the Cell Theory</h4>
              <ul>
                <li>• <strong>Robert Hooke (1665):</strong> First observed cells in cork using a microscope</li>
                <li>• <strong>Antonie van Leeuwenhoek:</strong> First to see living cells (1674)</li>
                <li>• <strong>Matthias Schleiden (1838):</strong> All plants are made of cells</li>
                <li>• <strong>Theodor Schwann (1839):</strong> All animals are made of cells</li>
                <li>• <strong>Rudolf Virchow (1855):</strong> All cells come from pre-existing cells</li>
                <li>• <strong>Remak (1852):</strong> First to state cells arise from division</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>💡 Importance of the Cell Theory</h4>
              <ul>
                <li>✓ Unifies all of biology</li>
                <li>✓ Explains how life works</li>
                <li>✓ Foundation for understanding disease</li>
                <li>✓ Basis for modern medicine</li>
                <li>✓ Guides biological research</li>
                <li>✓ Helps understand evolution</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Microscope",
        objective: "obj_004",
        text: `
          <h3>The Microscope</h3>
          <p><strong>Microscopes</strong> are essential tools for studying cells. They allow us to see structures too small for the naked eye.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔬 Parts of a Light Microscope</h4>
              <ul>
                <li><strong>Eyepiece (Ocular lens):</strong> Magnifies the image (×10)</li>
                <li><strong>Objective lenses:</strong> Magnify the specimen (×4, ×10, ×40, ×100)</li>
                <li><strong>Stage:</strong> Platform to place the slide</li>
                <li><strong>Stage clips:</strong> Hold the slide in place</li>
                <li><strong>Diaphragm:</strong> Controls light entering</li>
                <li><strong>Light source:</strong> Illuminates the specimen</li>
                <li><strong>Coarse focus knob:</strong> Rough focus adjustment</li>
                <li><strong>Fine focus knob:</strong> Sharp focus adjustment</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Microscopes</h4>
              <ul>
                <li><strong>Light Microscope:</strong> Uses visible light (up to ×1000 magnification)</li>
                <li><strong>Electron Microscope:</strong> Uses electron beams (up to ×1,000,000)</li>
                <li><strong>Scanning Electron Microscope:</strong> Creates 3D images</li>
                <li><strong>Transmission Electron Microscope:</strong> Views internal structures</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 How to Use a Microscope:</strong>
            <ol>
              <li>Place the slide on the stage and secure with clips</li>
              <li>Start with the lowest power objective (×4)</li>
              <li>Use the coarse focus knob to bring the specimen into view</li>
              <li>Use the fine focus knob for sharp focus</li>
              <li>Adjust the diaphragm for optimal lighting</li>
              <li>Switch to higher power objectives as needed</li>
            </ol>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Prokaryotic vs Eukaryotic Cells",
        objective: "obj_010",
        text: `
          <h3>Prokaryotic vs Eukaryotic Cells</h3>
          <p>Cells are divided into two main types based on their structure.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🦠 Prokaryotic Cells</h4>
              <ul>
                <li>✓ No true nucleus (genetic material free-floating)</li>
                <li>✓ No membrane-bound organelles</li>
                <li>✓ Smaller (0.1-5 μm)</li>
                <li>✓ Examples: Bacteria, Archaea</li>
                <li>✓ DNA is circular (plasmid)</li>
                <li>✓ Reproduce by binary fission</li>
                <li>✓ Cell wall contains peptidoglycan</li>
                <li>✓ No mitochondria or chloroplasts</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🧬 Eukaryotic Cells</h4>
              <ul>
                <li>✓ Has a true nucleus</li>
                <li>✓ Has membrane-bound organelles</li>
                <li>✓ Larger (10-100 μm)</li>
                <li>✓ Examples: Plants, Animals, Fungi</li>
                <li>✓ DNA is linear (chromosomes)</li>
                <li>✓ Reproduce by mitosis/meiosis</li>
                <li>✓ Cell wall only in plants and fungi</li>
                <li>✓ Contains mitochondria and other organelles</li>
              </ul>
            </div>
          </div>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Feature</th>
                <th class="border p-2">Prokaryotic</th>
                <th class="border p-2">Eukaryotic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Nucleus</td>
                <td class="border p-2">❌ No</td>
                <td class="border p-2">✅ Yes</td>
              </tr>
              <tr>
                <td class="border p-2">Membrane-bound organelles</td>
                <td class="border p-2">❌ No</td>
                <td class="border p-2">✅ Yes</td>
              </tr>
              <tr>
                <td class="border p-2">Size</td>
                <td class="border p-2">0.1-5 μm</td>
                <td class="border p-2">10-100 μm</td>
              </tr>
              <tr>
                <td class="border p-2">DNA</td>
                <td class="border p-2">Circular</td>
                <td class="border p-2">Linear (chromosomes)</td>
              </tr>
              <tr>
                <td class="border p-2">Ribosomes</td>
                <td class="border p-2">70S (smaller)</td>
                <td class="border p-2">80S (larger)</td>
              </tr>
              <tr>
                <td class="border p-2">Cell wall</td>
                <td class="border p-2">Contains peptidoglycan</td>
                <td class="border p-2">Cellulose (plants) or chitin (fungi)</td>
              </tr>
              <tr>
                <td class="border p-2">Examples</td>
                <td class="border p-2">Bacteria</td>
                <td class="border p-2">Plants, Animals, Fungi</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_004",
        title: "Plant vs Animal Cells",
        objective: "obj_002",
        text: `
          <h3>Plant vs Animal Cells</h3>
          <p>Both plant and animal cells are eukaryotic, but they have different structures.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>🌱 Plant Cells</h4>
              <ul>
                <li>✓ Cell wall made of cellulose</li>
                <li>✓ Chloroplasts (for photosynthesis)</li>
                <li>✓ Large central vacuole (stores water)</li>
                <li>✓ Plasmodesmata (connections between cells)</li>
                <li>✓ No centrioles</li>
                <li>✓ Fixed, rectangular shape</li>
                <li>✓ No lysosomes (usually)</li>
                <li>✓ Plastids present</li>
              </ul>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>🐾 Animal Cells</h4>
              <ul>
                <li>✗ No cell wall (only cell membrane)</li>
                <li>✗ No chloroplasts</li>
                <li>✓ Small vacuoles (if present)</li>
                <li>✓ Centrioles present (for cell division)</li>
                <li>✓ Lysosomes present</li>
                <li>✓ Flexible, various shapes</li>
                <li>✓ No plastids</li>
                <li>✓ Glycogen for energy storage</li>
              </ul>
            </div>
          </div>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Feature</th>
                <th class="border p-2">Plant Cell</th>
                <th class="border p-2">Animal Cell</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Cell Wall</td>
                <td class="border p-2">✅ Yes</td>
                <td class="border p-2">❌ No</td>
              </tr>
              <tr>
                <td class="border p-2">Chloroplast</td>
                <td class="border p-2">✅ Yes</td>
                <td class="border p-2">❌ No</td>
              </tr>
              <tr>
                <td class="border p-2">Vacuole</td>
                <td class="border p-2">Large central</td>
                <td class="border p-2">Small (if present)</td>
              </tr>
              <tr>
                <td class="border p-2">Centrioles</td>
                <td class="border p-2">❌ No</td>
                <td class="border p-2">✅ Yes</td>
              </tr>
              <tr>
                <td class="border p-2">Lysosomes</td>
                <td class="border p-2">❌ No</td>
                <td class="border p-2">✅ Yes</td>
              </tr>
              <tr>
                <td class="border p-2">Shape</td>
                <td class="border p-2">Fixed, rectangular</td>
                <td class="border p-2">Flexible, various</td>
              </tr>
              <tr>
                <td class="border p-2">Energy Storage</td>
                <td class="border p-2">Starch</td>
                <td class="border p-2">Glycogen</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_005",
        title: "Organelles and Their Functions",
        objective: "obj_003",
        text: `
          <h3>Organelles - The Cell's Organs</h3>
          <p><strong>Organelles</strong> are specialized structures within a cell that perform specific functions. Each organelle has a unique role in keeping the cell alive and functioning.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🧠 Nucleus</h4>
              <ul>
                <li><strong>Controls</strong> cell activities</li>
                <li>Contains genetic material (DNA)</li>
                <li>Nuclear membrane with pores</li>
                <li>Nucleolus makes ribosomes</li>
                <li>"Brain" of the cell</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>⚡ Mitochondria</h4>
              <ul>
                <li><strong>Powerhouse</strong> of the cell</li>
                <li>Produces ATP (energy)</li>
                <li>Has its own DNA</li>
                <li>Involved in respiration</li>
                <li>Double membrane structure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🌿 Chloroplast</h4>
              <ul>
                <li><strong>Photosynthesis</strong></li>
                <li>Contains chlorophyll</li>
                <li>Only in plant cells</li>
                <li>Has its own DNA</li>
                <li>Converts light to chemical energy</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📦 Endoplasmic Reticulum</h4>
              <ul>
                <li><strong>Transport</strong> of materials</li>
                <li>Rough ER: with ribosomes</li>
                <li>Smooth ER: no ribosomes</li>
                <li>Protein folding</li>
                <li>Lipid synthesis</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🧩 Golgi Apparatus</h4>
              <ul>
                <li><strong>Packaging</strong> center</li>
                <li>Modifies proteins</li>
                <li>Creates vesicles</li>
                <li>Secretes materials</li>
                <li>"Post office" of the cell</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-3 rounded">
              <h4>🧹 Lysosomes</h4>
              <ul>
                <li><strong>Recycling</strong> center</li>
                <li>Contains digestive enzymes</li>
                <li>Breaks down waste</li>
                <li>Cellular "garbage disposal"</li>
                <li>Important in immune cells</li>
              </ul>
            </div>
            <div class="bg-pink-50 p-3 rounded">
              <h4>🏭 Ribosomes</h4>
              <ul>
                <li><strong>Protein synthesis</strong></li>
                <li>Made of RNA and protein</li>
                <li>Found in cytoplasm and ER</li>
                <li>No membrane</li>
                <li>Smallest organelle</li>
              </ul>
            </div>
            <div class="bg-teal-50 p-3 rounded">
              <h4>💧 Vacuoles</h4>
              <ul>
                <li><strong>Storage</strong> of materials</li>
                <li>Large in plant cells</li>
                <li>Store water, nutrients, waste</li>
                <li>Maintains turgor pressure</li>
                <li>Helps with digestion</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-3 rounded">
              <h4>🔬 Cytoplasm</h4>
              <ul>
                <li><strong>Jelly-like</strong> substance</li>
                <li>Holds organelles in place</li>
                <li>Site of many chemical reactions</li>
                <li>Contains cytoskeleton</li>
                <li>Helps with cell movement</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Cellular Respiration",
        objective: "obj_013",
        text: `
          <h3>Cellular Respiration</h3>
          <p><strong>Cellular respiration</strong> is the process by which cells break down glucose to produce ATP (energy).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Equation</h4>
              <p><strong>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</strong></p>
              <p><small>Glucose + Oxygen → Carbon Dioxide + Water + Energy</small></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Where It Happens</h4>
              <ul>
                <li>• Mitochondria (main site)</li>
                <li>• Cytoplasm (glycolysis)</li>
                <li>• Occurs in both plant and animal cells</li>
              </ul>
            </div>
          </div>
          
          <h4 class="mt-4">Three Stages of Cellular Respiration</h4>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Glycolysis</h4>
              <ul>
                <li>• Occurs in cytoplasm</li>
                <li>• Glucose → 2 Pyruvate</li>
                <li>• Produces 2 ATP</li>
                <li>• No oxygen needed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Krebs Cycle</h4>
              <ul>
                <li>• Occurs in mitochondria</li>
                <li>• Pyruvate → CO₂ + H₂O</li>
                <li>• Produces 2 ATP</li>
                <li>• Produces NADH and FADH₂</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>3. Electron Transport Chain</h4>
              <ul>
                <li>• Occurs in mitochondria</li>
                <li>• NADH and FADH₂ → ATP</li>
                <li>• Produces 34 ATP</li>
                <li>• Requires oxygen</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Total ATP Produced:</strong>
            <ul>
              <li>Glycolysis: 2 ATP</li>
              <li>Krebs Cycle: 2 ATP</li>
              <li>Electron Transport Chain: 34 ATP</li>
              <li><strong>Total: 38 ATP per glucose molecule</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Photosynthesis",
        objective: "obj_014",
        text: `
          <h3>Photosynthesis</h3>
          <p><strong>Photosynthesis</strong> is the process by which plant cells convert light energy into chemical energy (glucose).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Equation</h4>
              <p><strong>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</strong></p>
              <p><small>Carbon Dioxide + Water → Glucose + Oxygen</small></p>
            </div>
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Where It Happens</h4>
              <ul>
                <li>• In chloroplasts</li>
                <li>• Contains chlorophyll</li>
                <li>• Only in plant cells</li>
                <li>• Uses light energy</li>
              </ul>
            </div>
          </div>
          
          <h4 class="mt-4">Two Stages of Photosynthesis</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Light-Dependent Reactions</h4>
              <ul>
                <li>• Occurs in thylakoid membranes</li>
                <li>• Requires light</li>
                <li>• Produces ATP and NADPH</li>
                <li>• Splits water (H₂O → O₂)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Calvin Cycle (Light-Independent)</h4>
              <ul>
                <li>• Occurs in stroma</li>
                <li>• Does not require light</li>
                <li>• Uses CO₂</li>
                <li>• Produces glucose</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Factors Affecting Photosynthesis:</strong>
            <ul>
              <li>• Light intensity</li>
              <li>• Carbon dioxide concentration</li>
              <li>• Temperature</li>
              <li>• Water availability</li>
              <li>• Chlorophyll concentration</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Cell Membrane and Transport",
        objective: "obj_007",
        text: `
          <h3>Cell Membrane</h3>
          <p>The <strong>cell membrane</strong> (plasma membrane) is a selectively permeable barrier that controls what enters and exits the cell.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure (Fluid Mosaic Model)</h4>
              <ul>
                <li>• Phospholipid bilayer</li>
                <li>• Proteins embedded</li>
                <li>• Cholesterol for stability</li>
                <li>• Carbohydrates for recognition</li>
                <li>• Fluid and dynamic</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Functions</h4>
              <ul>
                <li>✓ Controls transport</li>
                <li>✓ Cell recognition</li>
                <li>✓ Cell adhesion</li>
                <li>✓ Signal reception</li>
                <li>✓ Protects the cell</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Diffusion and Osmosis",
        objective: "obj_008",
        text: `
          <h3>Diffusion and Osmosis</h3>
          <p><strong>Diffusion</strong> is the movement of molecules from an area of high concentration to low concentration. <strong>Osmosis</strong> is the diffusion of water across a selectively permeable membrane.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>💨 Diffusion</h4>
              <ul>
                <li>• Moves from high to low</li>
                <li>• No energy required</li>
                <li>• Examples: Oxygen, CO₂</li>
                <li>• Happens in gases and liquids</li>
                <li>• Faster at higher temperatures</li>
                <li>• Net movement until equilibrium</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>💧 Osmosis</h4>
              <ul>
                <li>• Water movement</li>
                <li>• Through a membrane</li>
                <li>• From dilute to concentrated</li>
                <li>• Important in cells</li>
                <li>• Affects cell volume</li>
                <li>• Can cause turgor or plasmolysis</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Osmosis in Plant and Animal Cells:</strong>
            <ul>
              <li><strong>Hypotonic solution:</strong> Water enters → Cell swells</li>
              <li><strong>Hypertonic solution:</strong> Water leaves → Cell shrinks</li>
              <li><strong>Isotonic solution:</strong> No net movement → Normal</li>
              <li><strong>Plant cells:</strong> Cell wall prevents bursting (turgor pressure)</li>
              <li><strong>Animal cells:</strong> No cell wall - can burst (lysis)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Active and Passive Transport",
        objective: "obj_009",
        text: `
          <h3>Active vs Passive Transport</h3>
          <p>Cells use different methods to transport materials across the membrane.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔄 Passive Transport</h4>
              <ul>
                <li>• No energy required</li>
                <li>• Moves from high to low concentration</li>
                <li>• Simple diffusion</li>
                <li>• Facilitated diffusion</li>
                <li>• Osmosis</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>⚡ Active Transport</h4>
              <ul>
                <li>• Energy required (ATP)</li>
                <li>• Moves from low to high concentration</li>
                <li>• Sodium-potassium pump</li>
                <li>• Endocytosis</li>
                <li>• Exocytosis</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Specialized Cells",
        objective: "obj_006",
        text: `
          <h3>Specialized Cells</h3>
          <p><strong>Specialized cells</strong> have specific structures adapted for particular functions.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🧠 Nerve Cells</h4>
              <ul>
                <li>• Long axons</li>
                <li>• Transmit impulses</li>
                <li>• Myelin sheath</li>
                <li>• Synapses for communication</li>
                <li>• Cell body with dendrites</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>🩸 Red Blood Cells</h4>
              <ul>
                <li>• No nucleus</li>
                <li>• Biconcave shape</li>
                <li>• Contains hemoglobin</li>
                <li>• Transports oxygen</li>
                <li>• Flexible to pass through capillaries</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>💪 Muscle Cells</h4>
              <ul>
                <li>• Long and fibrous</li>
                <li>• Contains actin and myosin</li>
                <li>• Can contract</li>
                <li>• Many mitochondria</li>
                <li>• Striated appearance</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🌿 Root Hair Cells</h4>
              <ul>
                <li>• Long extensions</li>
                <li>• Absorb water</li>
                <li>• Large surface area</li>
                <li>• Absorb minerals</li>
                <li>• Thin cell wall</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>🧬 Sperm Cells</h4>
              <ul>
                <li>• Flagella (tail)</li>
                <li>• Many mitochondria</li>
                <li>• Acrosome for entry</li>
                <li>• Haploid (23 chromosomes)</li>
                <li>• Streamlined shape</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-3 rounded">
              <h4>🌱 Palisade Cells</h4>
              <ul>
                <li>• Many chloroplasts</li>
                <li>• Photosynthesis</li>
                <li>• Columnar shape</li>
                <li>• Near leaf surface</li>
                <li>• Packed together</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Cell Organization",
        objective: "obj_011",
        text: `
          <h3>Levels of Cell Organization</h3>
          <p>Cells organize into tissues, organs, and systems to form complex organisms.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded text-center">
              <h4>🔬 1. Cells</h4>
              <p>Basic unit of life</p>
              <small>e.g., Muscle cell</small>
            </div>
            <div class="bg-green-50 p-3 rounded text-center">
              <h4>🧬 2. Tissues</h4>
              <p>Group of similar cells</p>
              <small>e.g., Muscle tissue</small>
            </div>
            <div class="bg-yellow-50 p-3 rounded text-center">
              <h4>📦 3. Organs</h4>
              <p>Different tissues working together</p>
              <small>e.g., Heart</small>
            </div>
            <div class="bg-red-50 p-3 rounded text-center">
              <h4>⚙️ 4. Systems</h4>
              <p>Organs working together</p>
              <small>e.g., Circulatory system</small>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example Organization:</strong>
            <p>Muscle Cell → Muscle Tissue → Heart (Organ) → Circulatory System → Human Body</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔬 Types of Tissues</h4>
              <ul>
                <li>• <strong>Epithelial:</strong> Covers surfaces</li>
                <li>• <strong>Connective:</strong> Supports and connects</li>
                <li>• <strong>Muscle:</strong> Movement</li>
                <li>• <strong>Nervous:</strong> Communication</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Major Organ Systems</h4>
              <ul>
                <li>• Circulatory</li>
                <li>• Respiratory</li>
                <li>• Digestive</li>
                <li>• Nervous</li>
                <li>• Reproductive</li>
                <li>• Excretory</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_013",
        title: "Stem Cells",
        objective: "obj_012",
        text: `
          <h3>Stem Cells</h3>
          <p><strong>Stem cells</strong> are unspecialized cells that can develop into different cell types. They have the ability to divide and differentiate.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Stem Cells</h4>
              <ul>
                <li><strong>Embryonic Stem Cells:</strong> Can become any cell type (pluripotent)</li>
                <li><strong>Adult Stem Cells:</strong> Limited differentiation (multipotent)</li>
                <li><strong>Induced Pluripotent Stem Cells (iPSCs):</strong> Adult cells reprogrammed</li>
                <li><strong>Umbilical Cord Stem Cells:</strong> From newborn's cord blood</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>💡 Applications</h4>
              <ul>
                <li>✓ Treating diseases (Parkinson's, diabetes)</li>
                <li>✓ Regenerative medicine</li>
                <li>✓ Tissue repair</li>
                <li>✓ Drug testing</li>
                <li>✓ Research</li>
                <li>✓ Understanding development</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>⚠️ Ethical Issues:</strong>
            <ul>
              <li>• Embryonic stem cells require embryos</li>
              <li>• Controversy over when life begins</li>
              <li>• Religious and moral objections</li>
              <li>• Regulations vary by country</li>
              <li>• Alternative sources being developed</li>
              <li>• iPSCs offer a solution</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🧬 Cell Basics</h4>
          <ul>
            <li>• Cells are the basic unit of life</li>
            <li>• Prokaryotic vs Eukaryotic</li>
            <li>• Plant vs Animal cells</li>
            <li>• Organelles have specific functions</li>
            <li>• Cell theory: all cells come from cells</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🔬 Key Processes</h4>
          <ul>
            <li>• Diffusion and osmosis</li>
            <li>• Active transport</li>
            <li>• Cell specialization</li>
            <li>• Cell organization</li>
            <li>• Cellular respiration and photosynthesis</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Cells are the foundation of all life. Understanding cell biology is essential for understanding all other areas of biology.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All cells have a nucleus",
        correction: "Prokaryotic cells (bacteria) do not have a nucleus",
        explanation: "Bacteria and archaea are prokaryotic and lack a membrane-bound nucleus."
      },
      {
        id: "mis_002",
        misconception: "Plant cells don't have mitochondria",
        correction: "Plant cells do have mitochondria",
        explanation: "Plant cells need mitochondria for cellular respiration, just like animal cells."
      },
      {
        id: "mis_003",
        misconception: "Osmosis only happens in plant cells",
        correction: "Osmosis occurs in both plant and animal cells",
        explanation: "Water moves across all cell membranes, but plant cells have a cell wall for support."
      },
      {
        id: "mis_004",
        misconception: "Cells are flat and two-dimensional",
        correction: "Cells are three-dimensional structures",
        explanation: "Cells have length, width, and depth, even though we often view them in 2D."
      },
      {
        id: "mis_005",
        misconception: "All organelles are found in all cells",
        correction: "Different cells have different organelles based on their functions",
        explanation: "For example, chloroplasts are only in plant cells, and lysosomes are mainly in animal cells."
      },
      {
        id: "mis_006",
        misconception: "Diffusion and osmosis are the same thing",
        correction: "Osmosis is a specific type of diffusion",
        explanation: "Osmosis is the diffusion of water specifically across a selectively permeable membrane."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine and Treatment",
        description: "Understanding cells helps develop treatments for diseases.",
        example: "Stem cell therapy for Parkinson's disease and diabetes"
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Plant cell knowledge improves crop production.",
        example: "Selective breeding and genetic modification for better yields"
      },
      {
        id: "app_003",
        title: "Forensic Science",
        description: "Cell analysis helps in criminal investigations.",
        example: "DNA analysis from cells at crime scenes"
      },
      {
        id: "app_004",
        title: "Environmental Science",
        description: "Cell biology helps understand environmental impacts.",
        example: "Effect of pollution on cell health and ecosystems"
      },
      {
        id: "app_005",
        title: "Biotechnology",
        description: "Cells are used to produce medicines and products.",
        example: "Using bacteria to produce insulin"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Cell", definition: "The basic unit of life." },
    { term: "Prokaryotic", definition: "A cell without a nucleus or membrane-bound organelles." },
    { term: "Eukaryotic", definition: "A cell with a nucleus and membrane-bound organelles." },
    { term: "Organelle", definition: "A specialized structure within a cell with a specific function." },
    { term: "Nucleus", definition: "The control center of the cell containing genetic material." },
    { term: "Mitochondria", definition: "Organelles that produce energy (ATP) through respiration." },
    { term: "Chloroplast", definition: "Organelles in plant cells that carry out photosynthesis." },
    { term: "Cell Membrane", definition: "A selectively permeable barrier around the cell." },
    { term: "Cell Wall", definition: "A rigid outer layer in plant cells for support." },
    { term: "Diffusion", definition: "Movement of molecules from high to low concentration." },
    { term: "Osmosis", definition: "Diffusion of water across a selectively permeable membrane." },
    { term: "Active Transport", definition: "Movement of molecules requiring energy against a concentration gradient." },
    { term: "Specialized Cells", definition: "Cells adapted for specific functions." },
    { term: "Stem Cells", definition: "Unspecialized cells that can become different cell types." },
    { term: "Tissue", definition: "A group of similar cells working together." },
    { term: "Organ", definition: "A structure made of different tissues working together." },
    { term: "System", definition: "A group of organs working together." },
    { term: "Cellular Respiration", definition: "Process of breaking down glucose to produce ATP." },
    { term: "Photosynthesis", definition: "Process of converting light energy to chemical energy in plants." },
    { term: "Cytoplasm", definition: "The jelly-like substance filling the cell." }
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
      question: "What is the basic unit of life?",
      type: "multiple_choice",
      options: ["Tissue", "Cell", "Organ", "System"],
      answer: "Cell",
      explanation: "Cells are the basic unit of life."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which structure is found in plant cells but NOT in animal cells?",
      type: "multiple_choice",
      options: ["Nucleus", "Mitochondria", "Cell wall", "Cell membrane"],
      answer: "Cell wall",
      explanation: "Plant cells have a cell wall made of cellulose; animal cells do not."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What organelle is known as the 'powerhouse of the cell'?",
      type: "multiple_choice",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      answer: "Mitochondria",
      explanation: "Mitochondria produce ATP (energy) through cellular respiration."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is the function of the eyepiece on a microscope?",
      type: "multiple_choice",
      options: [
        "To hold the slide",
        "To magnify the image",
        "To control light",
        "To focus the image"
      ],
      answer: "To magnify the image",
      explanation: "The eyepiece (ocular lens) magnifies the image, typically by ×10."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the main function of the nucleus?",
      type: "multiple_choice",
      options: [
        "To produce energy",
        "To control cell activities and store DNA",
        "To transport proteins",
        "To break down waste"
      ],
      answer: "To control cell activities and store DNA",
      explanation: "The nucleus contains DNA and controls all cell activities."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the cell membrane made of?",
      type: "multiple_choice",
      options: [
        "Cellulose",
        "Phospholipid bilayer",
        "Protein only",
        "Chitin"
      ],
      answer: "Phospholipid bilayer",
      explanation: "The cell membrane is a phospholipid bilayer with embedded proteins."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is osmosis?",
      type: "multiple_choice",
      options: [
        "Movement of any molecule across a membrane",
        "Movement of water across a selectively permeable membrane",
        "Movement of molecules from low to high concentration",
        "Active transport of ions"
      ],
      answer: "Movement of water across a selectively permeable membrane",
      explanation: "Osmosis is the diffusion of water across a selectively permeable membrane."
    },
    {
      id: "prac_008",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is the difference between active and passive transport?",
      type: "multiple_choice",
      options: [
        "Active transport moves from high to low concentration",
        "Active transport requires energy",
        "Passive transport requires energy",
        "There is no difference"
      ],
      answer: "Active transport requires energy",
      explanation: "Active transport requires ATP energy to move molecules against their concentration gradient."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a specialized cell?",
      type: "multiple_choice",
      options: [
        "A cell with no nucleus",
        "A cell adapted for a specific function",
        "A cell found only in plants",
        "A cell that cannot reproduce"
      ],
      answer: "A cell adapted for a specific function",
      explanation: "Specialized cells have structures adapted for particular functions."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "medium",
      question: "What is the main difference between prokaryotic and eukaryotic cells?",
      type: "multiple_choice",
      options: [
        "Prokaryotic cells are larger",
        "Prokaryotic cells have no nucleus",
        "Prokaryotic cells have membrane-bound organelles",
        "Eukaryotic cells have no DNA"
      ],
      answer: "Prokaryotic cells have no nucleus",
      explanation: "Prokaryotic cells lack a nucleus and membrane-bound organelles."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which of the following is a prokaryotic organism?",
      type: "multiple_choice",
      options: ["Human", "Oak tree", "E. coli bacteria", "Yeast"],
      answer: "E. coli bacteria",
      explanation: "Bacteria are prokaryotic organisms with no nucleus."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the correct order of cell organization from smallest to largest?",
      type: "multiple_choice",
      options: [
        "Organ → Tissue → Cell → System",
        "Cell → Tissue → Organ → System",
        "System → Organ → Tissue → Cell",
        "Tissue → Cell → Organ → System"
      ],
      answer: "Cell → Tissue → Organ → System",
      explanation: "Cells organize into tissues, organs, and then systems."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a key ethical concern with embryonic stem cell research?",
      type: "multiple_choice",
      options: [
        "They are too expensive",
        "They require destroying embryos",
        "They don't work",
        "They are illegal everywhere"
      ],
      answer: "They require destroying embryos",
      explanation: "Embryonic stem cell research is controversial because it involves destroying embryos."
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "What does the fluid mosaic model describe?",
      type: "multiple_choice",
      options: [
        "The structure of the cell wall",
        "The structure of the cell membrane",
        "The structure of the nucleus",
        "The structure of chloroplasts"
      ],
      answer: "The structure of the cell membrane",
      explanation: "The fluid mosaic model describes the structure of the cell membrane."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "What happens to a plant cell in a hypotonic solution?",
      type: "multiple_choice",
      options: [
        "It shrinks",
        "It becomes turgid (swollen)",
        "It bursts",
        "Nothing happens"
      ],
      answer: "It becomes turgid (swollen)",
      explanation: "In a hypotonic solution, water enters the plant cell and it becomes turgid."
    },
    {
      id: "prac_016",
      objective: "obj_002",
      difficulty: "hard",
      question: "Which organelle is present in animal cells but NOT in plant cells?",
      type: "multiple_choice",
      options: ["Mitochondria", "Centrioles", "Nucleus", "Ribosomes"],
      answer: "Centrioles",
      explanation: "Centrioles are present in animal cells but are absent in most plant cells."
    },
    {
      id: "prac_017",
      objective: "obj_005",
      difficulty: "hard",
      question: "What is the function of the Golgi apparatus?",
      type: "multiple_choice",
      options: [
        "To produce energy",
        "To package and modify proteins",
        "To synthesize proteins",
        "To break down waste"
      ],
      answer: "To package and modify proteins",
      explanation: "The Golgi apparatus modifies, packages, and ships proteins."
    },
    {
      id: "prac_018",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the main product of cellular respiration?",
      type: "multiple_choice",
      options: [
        "Glucose",
        "ATP (Energy)",
        "Oxygen",
        "Chlorophyll"
      ],
      answer: "ATP (Energy)",
      explanation: "Cellular respiration produces ATP, which is the energy currency of the cell."
    },
    {
      id: "prac_019",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the main product of photosynthesis?",
      type: "multiple_choice",
      options: [
        "Carbon dioxide",
        "Glucose",
        "Water",
        "ATP"
      ],
      answer: "Glucose",
      explanation: "Photosynthesis produces glucose (chemical energy) and oxygen."
    },
    {
      id: "prac_020",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a tissue?",
      type: "multiple_choice",
      options: [
        "A group of cells working together",
        "A group of organs working together",
        "A single cell",
        "An entire organism"
      ],
      answer: "A group of cells working together",
      explanation: "A tissue is a group of similar cells that work together to perform a specific function."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_cell_biology",
    title: "Cell Biology Quiz",
    description: "Test your understanding of cell biology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the basic unit of life?",
        type: "short_answer",
        answer_key: "Cell",
        explanation: "Cells are the basic unit of life."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give one difference between plant and animal cells.",
        type: "short_answer",
        answer_key: "Plant cells have a cell wall; animal cells do not (or any valid difference)",
        explanation: "Plant cells have a cell wall, chloroplasts, and a large central vacuole."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name the organelle known as the 'powerhouse of the cell'.",
        type: "short_answer",
        answer_key: "Mitochondria",
        explanation: "Mitochondria produce ATP (energy) for the cell."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the function of the nucleus?",
        type: "short_answer",
        answer_key: "Control cell activities and store DNA",
        explanation: "The nucleus is the control center of the cell."
      },
      {
        id: "ass_005",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the cell membrane made of?",
        type: "short_answer",
        answer_key: "Phospholipid bilayer",
        explanation: "The cell membrane is a phospholipid bilayer with embedded proteins."
      },
      {
        id: "ass_006",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is the difference between diffusion and osmosis?",
        type: "short_answer",
        answer_key: "Osmosis is the diffusion of water; diffusion is movement of any molecule",
        explanation: "Osmosis specifically refers to water diffusion across a membrane."
      },
      {
        id: "ass_007",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the main difference between prokaryotic and eukaryotic cells?",
        type: "short_answer",
        answer_key: "Prokaryotic cells have no nucleus; eukaryotic cells have a nucleus",
        explanation: "Prokaryotic cells lack a nucleus and membrane-bound organelles."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "Give one example of a specialized cell and its function.",
        type: "short_answer",
        answer_key: "Red blood cells transport oxygen (or any valid example)",
        explanation: "Specialized cells have structures adapted for specific functions."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the correct order of cell organization from smallest to largest?",
        type: "short_answer",
        answer_key: "Cell → Tissue → Organ → System",
        explanation: "Cells form tissues, organs, and then systems."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is a key ethical issue with embryonic stem cell research?",
        type: "short_answer",
        answer_key: "It requires destroying embryos",
        explanation: "Embryonic stem cell research is controversial because embryos are destroyed."
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
        "Understand the cell as the basic unit of life",
        "Differentiate between plant and animal cells",
        "Identify organelle functions",
        "Explain cell transport processes",
        "Understand cellular respiration and photosynthesis"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a cell?" },
        { time: "5-10 min", activity: "Direct Instruction - Cell Theory and Microscope" },
        { time: "10-15 min", activity: "Direct Instruction - Prokaryotic vs Eukaryotic" },
        { time: "15-20 min", activity: "Direct Instruction - Plant vs Animal Cells" },
        { time: "20-25 min", activity: "Direct Instruction - Organelles" },
        { time: "25-30 min", activity: "Direct Instruction - Cell Membrane & Transport" },
        { time: "30-35 min", activity: "Direct Instruction - Specialized Cells" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Cell",
        prac_002: "Cell wall",
        prac_003: "Mitochondria",
        prac_004: "To magnify the image",
        prac_005: "To control cell activities and store DNA",
        prac_006: "Phospholipid bilayer",
        prac_007: "Movement of water across a selectively permeable membrane",
        prac_008: "Active transport requires energy",
        prac_009: "A cell adapted for a specific function",
        prac_010: "Prokaryotic cells have no nucleus",
        prac_011: "E. coli bacteria",
        prac_012: "Cell → Tissue → Organ → System",
        prac_013: "They require destroying embryos",
        prac_014: "The structure of the cell membrane",
        prac_015: "It becomes turgid (swollen)",
        prac_016: "Centrioles",
        prac_017: "To package and modify proteins",
        prac_018: "ATP (Energy)",
        prac_019: "Glucose",
        prac_020: "A group of cells working together"
      },
      assessment: {
        ass_001: "Cell",
        ass_002: "Plant cells have a cell wall; animal cells do not (or any valid difference)",
        ass_003: "Mitochondria",
        ass_004: "Control cell activities and store DNA",
        ass_005: "Phospholipid bilayer",
        ass_006: "Osmosis is the diffusion of water; diffusion is movement of any molecule",
        ass_007: "Prokaryotic cells have no nucleus; eukaryotic cells have a nucleus",
        ass_008: "Red blood cells transport oxygen (or any valid example)",
        ass_009: "Cell → Tissue → Organ → System",
        ass_010: "It requires destroying embryos"
      }
    },
    extensionActivities: [
      "Research different cell types and their functions",
      "Draw and label a plant and animal cell",
      "Investigate stem cell research and ethical issues",
      "Study a disease caused by cell malfunction (e.g., cancer)",
      "Build a 3D model of a cell",
      "Research how antibiotics target bacterial cells"
    ],
    differentiation: {
      struggling: [
        "Focus on basic cell structures first",
        "Use simple analogies (e.g., cell = factory)",
        "Use diagrams and visual aids",
        "Provide a vocabulary list",
        "Use hands-on activities with models"
      ],
      advanced: [
        "Research how cells communicate",
        "Study cancer as a cell disease",
        "Explore cell signaling pathways",
        "Research mitochondrial diseases",
        "Investigate CRISPR gene editing"
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
      title: "Plant Cell",
      description: "Diagram of a typical plant cell with labeled organelles",
      url: "/diagrams/plant-cell.png",
      alt: "Plant cell diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Animal Cell",
      description: "Diagram of a typical animal cell with labeled organelles",
      url: "/diagrams/animal-cell.png",
      alt: "Animal cell diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Prokaryotic vs Eukaryotic Comparison",
      description: "Comparison chart of prokaryotic and eukaryotic cells",
      url: "/diagrams/prokaryotic-vs-eukaryotic.png",
      alt: "Comparison chart"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "Cell Membrane",
      description: "Fluid mosaic model of the cell membrane",
      url: "/diagrams/cell-membrane.png",
      alt: "Cell membrane diagram"
    },
    {
      id: "vis_005",
      type: "diagram",
      title: "Diffusion and Osmosis",
      description: "Diagram showing diffusion and osmosis",
      url: "/diagrams/diffusion-osmosis.png",
      alt: "Diffusion and osmosis diagram"
    },
    {
      id: "vis_006",
      type: "infographic",
      title: "Cell Organization",
      description: "Infographic showing levels of cell organization",
      url: "/diagrams/cell-organization.png",
      alt: "Cell organization infographic"
    }
  ]
};