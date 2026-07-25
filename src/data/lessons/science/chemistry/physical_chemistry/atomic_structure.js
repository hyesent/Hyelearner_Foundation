// Location: src/data/lessons/science/chemistry/physical_chemistry/atomic_structure.js

export default {
  id: "chem_lesson_atomic_structure",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Atomic Structure",
  icon: "⚛️",
  grade_level: "SS1 - SS3",
  estimated_duration: "50 minutes",

  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of matter",
    "Knowledge of elements and compounds",
    "Basic mathematical skills",
    "Understanding of charges"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_bonding",
      name: "Chemical Bonding",
      file: "science/chemistry/physical_chemistry/bonding.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Describe the structure of the atom", indicator: "Student can explain that atoms consist of protons, neutrons, and electrons" },
    { id: "obj_002", level: "easy", description: "Identify the relative charges and masses of subatomic particles", indicator: "Student can state the charge and relative mass of protons, neutrons, and electrons" },
    { id: "obj_003", level: "easy", description: "Define atomic number and mass number", indicator: "Student can distinguish between atomic number and mass number" },
    { id: "obj_004", level: "easy", description: "Calculate the number of protons, neutrons, and electrons in an atom", indicator: "Student can use A and Z to find subatomic particles" },
    { id: "obj_005", level: "medium", description: "Explain the concept of isotopes", indicator: "Student can define isotopes and give examples" },
    { id: "obj_006", level: "medium", description: "Explain the arrangement of electrons in shells", indicator: "Student can draw electron configurations for elements" },
    { id: "obj_007", level: "medium", description: "Explain the relative atomic mass", indicator: "Student can calculate relative atomic mass from isotopic abundance" },
    { id: "obj_008", level: "medium", description: "Describe the Bohr model of the atom", indicator: "Student can explain Bohr's model and energy levels" },
    { id: "obj_009", level: "hard", description: "Explain the concept of energy levels and sub-levels", indicator: "Student can describe s, p, d, f orbitals" },
    { id: "obj_010", level: "hard", description: "Explain the concept of ionization energy", indicator: "Student can define and explain trends in ionization energy" },
    { id: "obj_011", level: "hard", description: "Explain the concept of electron affinity", indicator: "Student can define electron affinity and its trend" },
    { id: "obj_012", level: "hard", description: "Describe the quantum mechanical model of the atom", indicator: "Student can explain orbitals and quantum numbers" },
    { id: "obj_013", level: "hard", description: "Explain the trends in atomic radius", indicator: "Student can describe periodic trends in atomic size" },
    { id: "obj_014", level: "hard", description: "Explain the relationship between atomic structure and chemical properties", indicator: "Student can explain how structure determines reactivity" }
  ],

  video: {
    id: "vid_001",
    title: "Atomic Structure",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about atoms, subatomic particles, and the structure of matter."
  },

  content: {
    introduction: `
      <h2>What is Atomic Structure?</h2>
      <p><strong>Atomic structure</strong> describes the arrangement of subatomic particles within an atom. Understanding atomic structure is fundamental to chemistry because it explains the properties and behavior of elements.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">🔵 Proton</h3>
          <ul>
            <li>Positive charge (+1)</li>
            <li>Mass: 1 amu</li>
            <li>In nucleus</li>
          </ul>
        </div>
        <div class="bg-gray-50 p-4 rounded text-center">
          <h3 class="text-gray-600">⚪ Neutron</h3>
          <ul>
            <li>Neutral charge (0)</li>
            <li>Mass: 1 amu</li>
            <li>In nucleus</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">🟢 Electron</h3>
          <ul>
            <li>Negative charge (-1)</li>
            <li>Mass: ~0 amu</li>
            <li>Outside nucleus</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <!-- Background -->
          <rect width="500" height="400" fill="#f8f9fa" rx="10"/>
          <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Structure of an Atom</text>
          
          <!-- Nucleus -->
          <circle cx="250" cy="200" r="60" fill="#ff6b6b" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
          <text x="250" y="195" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#e74c3c">Nucleus</text>
          <text x="250" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#c0392b">(Protons + Neutrons)</text>
          
          <!-- Proton labels -->
          <text x="220" y="180" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">p⁺</text>
          <text x="260" y="210" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">p⁺</text>
          <text x="240" y="190" font-family="Arial, sans-serif" font-size="10" fill="#e74c3c">p⁺</text>
          
          <!-- Neutron labels -->
          <text x="275" y="180" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">n</text>
          <text x="225" y="215" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">n</text>
          <text x="270" y="195" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">n</text>
          
          <!-- Electron shells -->
          <circle cx="250" cy="200" r="100" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"/>
          <circle cx="250" cy="200" r="160" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"/>
          
          <!-- Electrons -->
          <!-- Shell 1 -->
          <circle cx="250" cy="100" r="8" fill="#3498db" stroke="#2c3e50" stroke-width="1.5"/>
          <text x="235" y="92" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">e⁻</text>
          
          <!-- Shell 2 -->
          <circle cx="330" cy="200" r="8" fill="#3498db" stroke="#2c3e50" stroke-width="1.5"/>
          <text x="338" y="205" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">e⁻</text>
          <circle cx="170" cy="200" r="8" fill="#3498db" stroke="#2c3e50" stroke-width="1.5"/>
          <text x="155" y="205" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">e⁻</text>
          
          <!-- Shell 3 -->
          <circle cx="350" cy="120" r="8" fill="#3498db" stroke="#2c3e50" stroke-width="1.5"/>
          <text x="358" y="125" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">e⁻</text>
          <circle cx="150" cy="120" r="8" fill="#3498db" stroke="#2c3e50" stroke-width="1.5"/>
          <text x="138" y="125" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">e⁻</text>
          
          <!-- Labels -->
          <line x1="280" y1="100" x2="350" y2="70" stroke="#3498db" stroke-width="1"/>
          <text x="355" y="75" font-family="Arial, sans-serif" font-size="11" fill="#3498db">Electrons</text>
          
          <line x1="310" y1="200" x2="380" y2="200" stroke="#e74c3c" stroke-width="1"/>
          <text x="385" y="205" font-family="Arial, sans-serif" font-size="11" fill="#e74c3c">Nucleus</text>
          
          <text x="250" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#7f8c8d">Electrons orbit the nucleus in energy shells</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Subatomic Particles",
        objective: "obj_002",
        text: `
          <h3>Protons, Neutrons, and Electrons</h3>
          <p>Atoms are made up of three types of subatomic particles.</p>
          
          <div class="table-container">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-blue-100">
                  <th class="border p-2 text-left">Particle</th>
                  <th class="border p-2 text-left">Symbol</th>
                  <th class="border p-2 text-left">Charge</th>
                  <th class="border p-2 text-left">Mass (amu)</th>
                  <th class="border p-2 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Proton</td>
                  <td class="border p-2">p⁺</td>
                  <td class="border p-2">+1</td>
                  <td class="border p-2">1</td>
                  <td class="border p-2">Nucleus</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Neutron</td>
                  <td class="border p-2">n⁰</td>
                  <td class="border p-2">0</td>
                  <td class="border p-2">1</td>
                  <td class="border p-2">Nucleus</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">Electron</td>
                  <td class="border p-2">e⁻</td>
                  <td class="border p-2">-1</td>
                  <td class="border p-2">~0</td>
                  <td class="border p-2">Energy shells</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Atomic Number and Mass Number",
        objective: "obj_003",
        text: `
          <h3>Atomic and Mass Numbers</h3>
          <p><strong>Atomic number (Z)</strong> = number of protons. <strong>Mass number (A)</strong> = number of protons + neutrons.</p>
          
          <div class="formula-box">
            <h4>📝 Key Formulas:</h4>
            <ul>
              <li><strong>Atomic Number (Z)</strong> = Number of protons</li>
              <li><strong>Mass Number (A)</strong> = Number of protons + neutrons</li>
              <li><strong>Number of neutrons</strong> = A - Z</li>
              <li><strong>Number of electrons</strong> = Z (in a neutral atom)</li>
            </ul>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="300" height="200" fill="#f8f9fa" rx="10"/>
              
              <!-- Element symbol -->
              <rect x="100" y="60" width="100" height="100" fill="none" stroke="#2c3e50" stroke-width="2" rx="5"/>
              
              <!-- Mass number (top left) -->
              <text x="130" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50">A</text>
              
              <!-- Atomic number (bottom left) -->
              <text x="130" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50">Z</text>
              
              <!-- Element symbol (center) -->
              <text x="150" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#e74c3c">X</text>
              
              <!-- Labels -->
              <text x="115" y="70" font-family="Arial, sans-serif" font-size="10" fill="#3498db">Mass number</text>
              <line x1="115" y1="72" x2="130" y2="82" stroke="#3498db" stroke-width="1"/>
              
              <text x="100" y="160" font-family="Arial, sans-serif" font-size="10" fill="#2ecc71">Atomic number</text>
              <line x1="100" y1="158" x2="130" y2="148" stroke="#2ecc71" stroke-width="1"/>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Carbon-12:</strong> Z = 6, A = 12</li>
              <li>Protons = 6</li>
              <li>Neutrons = 12 - 6 = 6</li>
              <li>Electrons = 6</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Isotopes",
        objective: "obj_005",
        text: `
          <h3>Isotopes</h3>
          <p><strong>Isotopes</strong> are atoms of the same element with the same number of protons but different numbers of neutrons.</p>
          
          <div class="svgs">
            <svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="250" fill="#f8f9fa" rx="10"/>
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Isotopes of Carbon</text>
              
              <!-- Carbon-12 -->
              <g transform="translate(120, 100)">
                <text x="0" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Carbon-12</text>
                <circle cx="0" cy="30" r="30" fill="#ff6b6b" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                <text x="-8" y="25" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">6p⁺</text>
                <text x="-8" y="40" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">6n</text>
                <circle cx="-40" cy="60" r="6" fill="#3498db"/>
                <circle cx="40" cy="60" r="6" fill="#3498db"/>
                <circle cx="0" cy="70" r="6" fill="#3498db"/>
                <text x="0" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">6 electrons</text>
              </g>
              
              <!-- Carbon-13 -->
              <g transform="translate(300, 100)">
                <text x="0" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Carbon-13</text>
                <circle cx="0" cy="30" r="30" fill="#ff6b6b" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                <text x="-8" y="25" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">6p⁺</text>
                <text x="-8" y="40" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">7n</text>
                <circle cx="-40" cy="60" r="6" fill="#3498db"/>
                <circle cx="40" cy="60" r="6" fill="#3498db"/>
                <circle cx="0" cy="70" r="6" fill="#3498db"/>
                <text x="0" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">6 electrons</text>
              </g>
              
              <!-- Carbon-14 -->
              <g transform="translate(480, 100)">
                <text x="0" y="-10" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#2c3e50">Carbon-14</text>
                <circle cx="0" cy="30" r="30" fill="#ff6b6b" opacity="0.3" stroke="#e74c3c" stroke-width="2"/>
                <text x="-8" y="25" font-family="Arial, sans-serif" font-size="12" fill="#e74c3c">6p⁺</text>
                <text x="-8" y="40" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">8n</text>
                <circle cx="-40" cy="60" r="6" fill="#3498db"/>
                <circle cx="40" cy="60" r="6" fill="#3498db"/>
                <circle cx="0" cy="70" r="6" fill="#3498db"/>
                <text x="0" y="95" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#3498db">6 electrons</text>
              </g>
            </svg>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>Carbon:</strong> ¹²C, ¹³C, ¹⁴C (6 protons, different neutrons)</li>
              <li><strong>Hydrogen:</strong> ¹H (protium), ²H (deuterium), ³H (tritium)</li>
              <li><strong>Chlorine:</strong> ³⁵Cl, ³⁷Cl</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Electron Configuration",
        objective: "obj_006",
        text: `
          <h3>Electron Configuration</h3>
          <p>Electrons are arranged in <strong>energy levels</strong> or <strong>shells</strong> around the nucleus.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Shell Capacities</h4>
              <ul>
                <li>• Shell 1 (K): max 2 electrons</li>
                <li>• Shell 2 (L): max 8 electrons</li>
                <li>• Shell 3 (M): max 18 electrons</li>
                <li>• Shell 4 (N): max 32 electrons</li>
                <li>• General formula: 2n²</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>Hydrogen (Z=1):</strong> 1</li>
                <li><strong>Helium (Z=2):</strong> 2</li>
                <li><strong>Lithium (Z=3):</strong> 2,1</li>
                <li><strong>Carbon (Z=6):</strong> 2,4</li>
                <li><strong>Neon (Z=10):</strong> 2,8</li>
                <li><strong>Sodium (Z=11):</strong> 2,8,1</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Bohr Model",
        objective: "obj_008",
        text: `
          <h3>Bohr's Atomic Model</h3>
          <p>Niels Bohr proposed that electrons move in fixed circular orbits around the nucleus at specific energy levels.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features:</h4>
              <ul>
                <li>• Electrons in fixed orbits</li>
                <li>• Each orbit has a fixed energy</li>
                <li>• Energy is quantized</li>
                <li>• Electrons can jump between levels</li>
                <li>• Explains line spectra</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Limitations:</h4>
              <ul>
                <li>• Only works for hydrogen</li>
                <li>• Cannot explain complex spectra</li>
                <li>• Does not explain chemical bonding</li>
                <li>• Replaced by quantum model</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Sub-shells and Orbitals",
        objective: "obj_009",
        text: `
          <h3>Sub-shells and Orbitals</h3>
          <p>Each electron shell is divided into <strong>sub-shells</strong> (s, p, d, f) which contain <strong>orbitals</strong>.</p>
          
          <div class="table-container">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-blue-100">
                  <th class="border p-2 text-left">Sub-shell</th>
                  <th class="border p-2 text-left">Orbitals</th>
                  <th class="border p-2 text-left">Max Electrons</th>
                  <th class="border p-2 text-left">Shape</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">s</td>
                  <td class="border p-2">1</td>
                  <td class="border p-2">2</td>
                  <td class="border p-2">Spherical</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">p</td>
                  <td class="border p-2">3</td>
                  <td class="border p-2">6</td>
                  <td class="border p-2">Dumbbell</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">d</td>
                  <td class="border p-2">5</td>
                  <td class="border p-2">10</td>
                  <td class="border p-2">Complex</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border p-2">f</td>
                  <td class="border p-2">7</td>
                  <td class="border p-2">14</td>
                  <td class="border p-2">Complex</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Relative Atomic Mass",
        objective: "obj_007",
        text: `
          <h3>Relative Atomic Mass</h3>
          <p><strong>Relative atomic mass (Ar)</strong> is the weighted average mass of all isotopes of an element.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Ar = Σ (isotope mass × relative abundance) / 100</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Example - Chlorine:</strong>
            <ul>
              <li>75% ³⁵Cl (mass 35)</li>
              <li>25% ³⁷Cl (mass 37)</li>
              <li>Ar = (35 × 75 + 37 × 25) / 100</li>
              <li>Ar = (2625 + 925) / 100 = 35.5</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>⚛️ Atomic Structure</h4>
          <ul>
            <li>• Protons (+), Neutrons (0), Electrons (-)</li>
            <li>• Atomic number = number of protons</li>
            <li>• Mass number = protons + neutrons</li>
            <li>• Isotopes: same protons, different neutrons</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Electron Configuration</h4>
          <ul>
            <li>• Electrons in energy shells (2, 8, 18, 32)</li>
            <li>• Sub-shells: s, p, d, f</li>
            <li>• Bohr model: fixed orbits</li>
            <li>• Quantum model: orbitals</li>
          </ul>
        </div>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "Atoms are solid spheres",
        correction: "Atoms are mostly empty space with a dense nucleus",
        explanation: "Rutherford's experiment showed atoms are mostly empty space."
      },
      {
        id: "mis_002",
        misconception: "Electrons orbit like planets",
        correction: "Electrons exist in probability clouds (orbitals)",
        explanation: "Modern quantum mechanics describes electron positions as probabilities."
      },
      {
        id: "mis_003",
        misconception: "Isotopes of an element have different chemical properties",
        correction: "Isotopes have the same chemical properties",
        explanation: "Chemical properties depend on electron number, which is the same for isotopes."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Nuclear Medicine",
        description: "Isotopes are used in medical diagnosis and treatment.",
        example: "Technetium-99m for imaging, iodine-131 for thyroid treatment."
      },
      {
        id: "app_002",
        title: "Carbon Dating",
        description: "Carbon-14 isotopes are used to date archaeological artifacts.",
        example: "Determining the age of fossils and ancient objects."
      },
      {
        id: "app_003",
        title: "Nuclear Power",
        description: "Uranium-235 is used in nuclear reactors.",
        example: "Nuclear fission produces energy for electricity."
      },
      {
        id: "app_004",
        title: "Materials Science",
        description: "Understanding atomic structure helps in materials design.",
        example: "Developing new alloys and semiconductor materials."
      }
    ]
  },

  keyTerms: [
    { term: "Atom", definition: "The smallest particle of an element that retains its properties." },
    { term: "Proton", definition: "A positively charged subatomic particle in the nucleus." },
    { term: "Neutron", definition: "A neutral subatomic particle in the nucleus." },
    { term: "Electron", definition: "A negatively charged subatomic particle orbiting the nucleus." },
    { term: "Atomic Number", definition: "The number of protons in an atom (Z)." },
    { term: "Mass Number", definition: "The total number of protons and neutrons (A)." },
    { term: "Isotope", definition: "Atoms of the same element with different numbers of neutrons." },
    { term: "Energy Level", definition: "A fixed energy state of an electron in an atom." },
    { term: "Orbital", definition: "A region of space where an electron is likely to be found." },
    { term: "Relative Atomic Mass", definition: "The weighted average mass of all isotopes of an element." },
    { term: "Electron Configuration", definition: "The arrangement of electrons in energy levels." },
    { term: "Bohr Model", definition: "A model with electrons in fixed circular orbits." },
    { term: "Quantum Model", definition: "A model using probability and orbitals." },
    { term: "Sub-shell", definition: "A division of electron shells (s, p, d, f)." },
    { term: "Ionization Energy", definition: "The energy required to remove an electron from an atom." },
    { term: "Electron Affinity", definition: "The energy released when an electron is added to an atom." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What are the three subatomic particles in an atom?",
      type: "multiple_choice",
      options: ["Protons, neutrons, electrons", "Protons, neutrons, positrons", "Electrons, positrons, neutrons", "Protons, electrons, photons"],
      answer: "Protons, neutrons, electrons",
      explanation: "Atoms consist of protons, neutrons, and electrons."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the charge of a proton?",
      type: "multiple_choice",
      options: ["+1", "-1", "0", "+2"],
      answer: "+1",
      explanation: "Protons have a positive charge of +1."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What does the atomic number represent?",
      type: "multiple_choice",
      options: ["Number of neutrons", "Number of protons", "Number of electrons", "Number of protons + neutrons"],
      answer: "Number of protons",
      explanation: "The atomic number (Z) is the number of protons in an atom."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "An atom has Z=6 and A=14. How many neutrons does it have?",
      type: "multiple_choice",
      options: ["6", "8", "14", "20"],
      answer: "8",
      explanation: "Neutrons = A - Z = 14 - 6 = 8."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What are isotopes?",
      type: "multiple_choice",
      options: [
        "Atoms with different numbers of protons",
        "Atoms with different numbers of neutrons",
        "Atoms with different numbers of electrons",
        "Atoms with different charges"
      ],
      answer: "Atoms with different numbers of neutrons",
      explanation: "Isotopes have the same number of protons but different numbers of neutrons."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the electron configuration of sodium (Z=11)?",
      type: "multiple_choice",
      options: ["2,8,1", "2,8,2", "2,8,8", "2,9"],
      answer: "2,8,1",
      explanation: "Sodium has 11 electrons: 2 in shell 1, 8 in shell 2, 1 in shell 3."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "hard",
      question: "Chlorine has 75% ³⁵Cl and 25% ³⁷Cl. What is the relative atomic mass?",
      type: "multiple_choice",
      options: ["35.0", "35.5", "36.0", "36.5"],
      answer: "35.5",
      explanation: "Ar = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 35.5."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What was a key feature of Bohr's model?",
      type: "multiple_choice",
      options: [
        "Electrons in fixed orbits",
        "Electrons in probability clouds",
        "Electrons in elliptical orbits",
        "Electrons as waves"
      ],
      answer: "Electrons in fixed orbits",
      explanation: "Bohr's model proposed that electrons move in fixed circular orbits."
    }
  ],

  assessment: {
    id: "assess_atomic_structure",
    title: "Atomic Structure Quiz",
    description: "Test your understanding of atomic structure",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are the three subatomic particles in an atom?",
        type: "short_answer",
        answer_key: "Protons, neutrons, and electrons",
        explanation: "Atoms consist of protons, neutrons, and electrons."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the charges of protons, neutrons, and electrons?",
        type: "short_answer",
        answer_key: "Proton: +1, Neutron: 0, Electron: -1",
        explanation: "Protons are positive, neutrons are neutral, electrons are negative."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between atomic number and mass number?",
        type: "short_answer",
        answer_key: "Atomic number is protons; mass number is protons + neutrons",
        explanation: "Z = protons, A = protons + neutrons."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "An atom has Z=8 and A=16. How many protons, neutrons, and electrons does it have?",
        type: "short_answer",
        answer_key: "8 protons, 8 neutrons, 8 electrons",
        explanation: "Z=8 means 8 protons and 8 electrons. Neutrons = 16 - 8 = 8."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What are isotopes?",
        type: "short_answer",
        answer_key: "Atoms with the same protons but different neutrons",
        explanation: "Isotopes have the same atomic number but different mass numbers."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Give an example of an isotope pair.",
        type: "short_answer",
        answer_key: "Carbon-12 and Carbon-14 (or any valid pair)",
        explanation: "Isotopes of carbon: ¹²C, ¹³C, ¹⁴C."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is the electron configuration of oxygen (Z=8)?",
        type: "short_answer",
        answer_key: "2,6",
        explanation: "Oxygen has 8 electrons: 2 in shell 1, 6 in shell 2."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "A sample contains 70% of an isotope with mass 28 and 30% with mass 29. Calculate the relative atomic mass.",
        type: "short_answer",
        answer_key: "28.3",
        explanation: "Ar = (28 × 70 + 29 × 30) / 100 = (1960 + 870) / 100 = 2830 / 100 = 28.3."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "What was Bohr's main contribution to atomic theory?",
        type: "short_answer",
        answer_key: "Proposed electrons in fixed orbits with quantized energy",
        explanation: "Bohr introduced quantized energy levels and fixed orbits."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "What are the four types of sub-shells?",
        type: "short_answer",
        answer_key: "s, p, d, f",
        explanation: "The sub-shells are s, p, d, and f."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand the structure of the atom",
        "Calculate protons, neutrons, and electrons",
        "Explain isotopes and electron configuration",
        "Understand relative atomic mass"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is an atom?" },
        { time: "5-10 min", activity: "Direct Instruction - Subatomic Particles" },
        { time: "10-15 min", activity: "Direct Instruction - Atomic and Mass Numbers" },
        { time: "15-20 min", activity: "Direct Instruction - Isotopes" },
        { time: "20-25 min", activity: "Direct Instruction - Electron Configuration" },
        { time: "25-30 min", activity: "Direct Instruction - Bohr and Quantum Models" },
        { time: "30-35 min", activity: "Direct Instruction - Relative Atomic Mass" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Protons, neutrons, electrons",
        prac_002: "+1",
        prac_003: "Number of protons",
        prac_004: "8",
        prac_005: "Atoms with different numbers of neutrons",
        prac_006: "2,8,1",
        prac_007: "35.5",
        prac_008: "Electrons in fixed orbits"
      },
      assessment: {
        ass_001: "Protons, neutrons, and electrons",
        ass_002: "Proton: +1, Neutron: 0, Electron: -1",
        ass_003: "Atomic number is protons; mass number is protons + neutrons",
        ass_004: "8 protons, 8 neutrons, 8 electrons",
        ass_005: "Atoms with the same protons but different neutrons",
        ass_006: "Carbon-12 and Carbon-14 (or any valid pair)",
        ass_007: "2,6",
        ass_008: "28.3",
        ass_009: "Proposed electrons in fixed orbits with quantized energy",
        ass_010: "s, p, d, f"
      }
    },
    extensionActivities: [
      "Research the history of atomic theory",
      "Draw electron configurations for elements",
      "Calculate relative atomic mass from isotopic data",
      "Research the discovery of subatomic particles"
    ],
    differentiation: {
      struggling: [
        "Focus on basic subatomic particles",
        "Use simple examples",
        "Practice with small atoms",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research quantum mechanics",
        "Study advanced orbital theory",
        "Explore applications of isotopes",
        "Research the periodic table trends"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Atomic Structure",
      description: "Diagram showing the structure of an atom",
      url: "/diagrams/atomic-structure-chem.png",
      alt: "Atomic structure diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Electron Shells",
      description: "Diagram showing electron shells around the nucleus",
      url: "/diagrams/electron-shells.png",
      alt: "Electron shells diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Isotopes",
      description: "Chart showing isotopes of elements",
      url: "/diagrams/isotopes.png",
      alt: "Isotopes chart"
    }
  ]
};