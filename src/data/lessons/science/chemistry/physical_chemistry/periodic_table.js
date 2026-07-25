// Location: src/data/lessons/science/chemistry/physical_chemistry/periodic_table.js

export default {
  id: "chem_lesson_periodic_table",
  subject: "Chemistry",
  topic: "Physical Chemistry",
  name: "Periodic Table",
  icon: "📊",
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
    "Understanding of atomic structure",
    "Knowledge of electron configuration",
    "Understanding of atomic number",
    "Basic understanding of elements"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_stoichiometry",
      name: "Stoichiometry and Mole Concept",
      file: "science/chemistry/physical_chemistry/stoichiometry.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Describe the development of the periodic table", indicator: "Student can explain the contributions of Mendeleev and Moseley" },
    { id: "obj_002", level: "easy", description: "Identify the main sections of the periodic table", indicator: "Student can identify groups and periods" },
    { id: "obj_003", level: "easy", description: "State the number of elements in each period", indicator: "Student can recall the number of elements in periods 1-4" },
    { id: "obj_004", level: "medium", description: "Explain the organization of the periodic table by atomic number", indicator: "Student can explain why elements are arranged by atomic number" },
    { id: "obj_005", level: "medium", description: "Explain trends in atomic radius across a period and down a group", indicator: "Student can describe the trends in atomic size" },
    { id: "obj_006", level: "medium", description: "Explain trends in ionization energy across a period and down a group", indicator: "Student can describe the trends in ionization energy" },
    { id: "obj_007", level: "medium", description: "Explain trends in electronegativity across a period and down a group", indicator: "Student can describe the trends in electronegativity" },
    { id: "obj_008", level: "medium", description: "Explain trends in reactivity across a period and down a group", indicator: "Student can describe the trends in reactivity" },
    { id: "obj_009", level: "medium", description: "Describe the properties of metals, non-metals, and metalloids", indicator: "Student can classify elements as metals, non-metals, or metalloids" },
    { id: "obj_010", level: "hard", description: "Explain the relationship between electron configuration and periodic table position", indicator: "Student can determine electron configuration from group and period" },
    { id: "obj_011", level: "hard", description: "Explain the properties of Group 1 (Alkali Metals)", indicator: "Student can describe the characteristics of alkali metals" },
    { id: "obj_012", level: "hard", description: "Explain the properties of Group 17 (Halogens)", indicator: "Student can describe the characteristics of halogens" },
    { id: "obj_013", level: "hard", description: "Explain the properties of Group 18 (Noble Gases)", indicator: "Student can describe the characteristics of noble gases" },
    { id: "obj_014", level: "hard", description: "Analyze the relationship between periodic trends and chemical behavior", indicator: "Student can predict properties based on periodic table position" }
  ],

  video: {
    id: "vid_001",
    title: "The Periodic Table",
    duration: "22:00 - 30:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about the periodic table, its organization, and periodic trends."
  },

  content: {
    introduction: `
      <h2>What is the Periodic Table?</h2>
      <p>The <strong>periodic table</strong> is a tabular arrangement of elements organized by atomic number, electron configuration, and recurring chemical properties. It is one of the most important tools in chemistry.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded text-center">
          <h3 class="text-blue-600">📌 Groups</h3>
          <ul>
            <li>• Vertical columns</li>
            <li>• 18 groups</li>
            <li>• Elements with similar properties</li>
            <li>• Same valence electrons</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded text-center">
          <h3 class="text-green-600">📌 Periods</h3>
          <ul>
            <li>• Horizontal rows</li>
            <li>• 7 periods</li>
            <li>• Same number of shells</li>
            <li>• Properties change across</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded text-center">
          <h3 class="text-yellow-600">📌 Blocks</h3>
          <ul>
            <li>• s-block (Groups 1-2)</li>
            <li>• p-block (Groups 13-18)</li>
            <li>• d-block (Transition metals)</li>
            <li>• f-block (Lanthanides/Actinides)</li>
          </ul>
        </div>
      </div>
      
      <div class="svgs">
        <svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <!-- Background -->
          <rect width="700" height="450" fill="#f8f9fa" rx="10"/>
          <text x="350" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50">Simplified Periodic Table</text>
          
          <!-- Group labels -->
          <text x="50" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">1</text>
          <text x="95" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">2</text>
          <text x="185" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">13</text>
          <text x="230" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">14</text>
          <text x="275" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">15</text>
          <text x="320" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">16</text>
          <text x="365" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">17</text>
          <text x="410" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">18</text>
          
          <!-- Period 1 -->
          <text x="25" y="85" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">1</text>
          <rect x="40" y="65" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="62" y="82" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">H</text>
          <rect x="390" y="65" width="45" height="25" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
          <text x="412" y="82" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">He</text>
          
          <!-- Period 2 -->
          <text x="25" y="115" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">2</text>
          <rect x="40" y="95" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="62" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Li</text>
          <rect x="85" y="95" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="107" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Be</text>
          <rect x="175" y="95" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="197" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">B</text>
          <rect x="220" y="95" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="242" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">C</text>
          <rect x="265" y="95" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="287" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">N</text>
          <rect x="310" y="95" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="332" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">O</text>
          <rect x="355" y="95" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="377" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">F</text>
          <rect x="400" y="95" width="45" height="25" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
          <text x="422" y="112" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Ne</text>
          
          <!-- Period 3 -->
          <text x="25" y="145" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">3</text>
          <rect x="40" y="125" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="62" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Na</text>
          <rect x="85" y="125" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="107" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Mg</text>
          <rect x="175" y="125" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="197" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Al</text>
          <rect x="220" y="125" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="242" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Si</text>
          <rect x="265" y="125" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="287" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">P</text>
          <rect x="310" y="125" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="332" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">S</text>
          <rect x="355" y="125" width="45" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="377" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Cl</text>
          <rect x="400" y="125" width="45" height="25" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
          <text x="422" y="142" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Ar</text>
          
          <!-- Period 4 -->
          <text x="25" y="175" font-family="Arial, sans-serif" font-size="9" fill="#2c3e50">4</text>
          <rect x="40" y="155" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="62" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">K</text>
          <rect x="85" y="155" width="45" height="25" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="107" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Ca</text>
          <rect x="175" y="155" width="45" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="197" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Ga</text>
          <rect x="220" y="155" width="45" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="242" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Ge</text>
          <rect x="265" y="155" width="45" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="287" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">As</text>
          <rect x="310" y="155" width="45" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="332" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Se</text>
          <rect x="355" y="155" width="45" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="377" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Br</text>
          <rect x="400" y="155" width="45" height="25" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
          <text x="422" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#fff">Kr</text>
          
          <!-- Legend -->
          <rect x="50" y="230" width="15" height="15" fill="#ff6b6b" stroke="#e74c3c" stroke-width="1"/>
          <text x="70" y="242" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Metals</text>
          
          <rect x="150" y="230" width="15" height="15" fill="#f39c12" stroke="#e67e22" stroke-width="1"/>
          <text x="170" y="242" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Metalloids</text>
          
          <rect x="260" y="230" width="15" height="15" fill="#9b59b6" stroke="#8e44ad" stroke-width="1"/>
          <text x="280" y="242" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Non-metals</text>
          
          <rect x="370" y="230" width="15" height="15" fill="#3498db" stroke="#2980b9" stroke-width="1"/>
          <text x="390" y="242" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Noble Gases</text>
          
          <text x="350" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Elements are organized by increasing atomic number</text>
          <text x="350" y="300" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d">Groups have similar chemical properties</text>
        </svg>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "History of the Periodic Table",
        objective: "obj_001",
        text: `
          <h3>Development of the Periodic Table</h3>
          <p>The periodic table was developed through the work of several scientists.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Dmitri Mendeleev (1869)</h4>
              <ul>
                <li>• Arranged elements by atomic mass</li>
                <li>• Left gaps for undiscovered elements</li>
                <li>• Predicted properties of missing elements</li>
                <li>• Elements with similar properties in same group</li>
                <li>• "Father of the Periodic Table"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Henry Moseley (1913)</h4>
              <ul>
                <li>• Arranged elements by atomic number</li>
                <li>• Resolved order problems</li>
                <li>• Confirmed gaps in the table</li>
                <li>• Modern periodic law established</li>
                <li>• "Atomic number is more fundamental"</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Groups and Periods",
        objective: "obj_002",
        text: `
          <h3>Groups and Periods</h3>
          <p>The periodic table is organized into <strong>groups</strong> (vertical columns) and <strong>periods</strong> (horizontal rows).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Groups (1-18)</h4>
              <ul>
                <li>• Vertical columns</li>
                <li>• Same number of valence electrons</li>
                <li>• Similar chemical properties</li>
                <li>• Same group number = same valence electrons</li>
                <li>• Group 1: Alkali metals</li>
                <li>• Group 2: Alkaline earth metals</li>
                <li>• Group 17: Halogens</li>
                <li>• Group 18: Noble gases</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Periods (1-7)</h4>
              <ul>
                <li>• Horizontal rows</li>
                <li>• Same number of electron shells</li>
                <li>• Period number = number of shells</li>
                <li>• Period 1: 2 elements (H, He)</li>
                <li>• Period 2: 8 elements</li>
                <li>• Period 3: 8 elements</li>
                <li>• Period 4: 18 elements</li>
                <li>• Periods 6-7: 32 elements</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Metals, Non-metals, and Metalloids",
        objective: "obj_009",
        text: `
          <h3>Classification of Elements</h3>
          <p>Elements are classified as metals, non-metals, or metalloids based on their properties.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔵 Metals</h4>
              <ul>
                <li>• Good conductors</li>
                <li>• Malleable and ductile</li>
                <li>• Lustrous (shiny)</li>
                <li>• High melting points</li>
                <li>• Examples: Na, Fe, Cu</li>
                <li>• Left side of table</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟢 Metalloids</h4>
              <ul>
                <li>• Properties of both</li>
                <li>• Semiconductors</li>
                <li>• Intermediate conductivity</li>
                <li>• Examples: B, Si, Ge</li>
                <li>• Along the staircase</li>
                <li>• Important in electronics</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🟡 Non-metals</h4>
              <ul>
                <li>• Poor conductors</li>
                <li>• Brittle</li>
                <li>• Dull appearance</li>
                <li>• Low melting points</li>
                <li>• Examples: O, N, Cl</li>
                <li>• Right side of table</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Atomic Radius Trend",
        objective: "obj_005",
        text: `
          <h3>Atomic Radius</h3>
          <p><strong>Atomic radius</strong> is the distance from the nucleus to the outermost electron.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Across a Period (→)</h4>
              <ul>
                <li>• Atomic radius <strong>decreases</strong></li>
                <li>• More protons in nucleus</li>
                <li>• Stronger nuclear attraction</li>
                <li>• Electrons pulled closer</li>
                <li>• Example: Na > Mg > Al > Si</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Down a Group (↓)</h4>
              <ul>
                <li>• Atomic radius <strong>increases</strong></li>
                <li>• More electron shells</li>
                <li>• Weaker nuclear attraction on outer electrons</li>
                <li>• Example: Li < Na < K < Rb</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Ionization Energy Trend",
        objective: "obj_006",
        text: `
          <h3>Ionization Energy</h3>
          <p><strong>Ionization energy</strong> is the energy required to remove an electron from an atom.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Across a Period (→)</h4>
              <ul>
                <li>• Ionization energy <strong>increases</strong></li>
                <li>• Smaller atomic radius</li>
                <li>• Stronger nuclear attraction</li>
                <li>• Harder to remove electrons</li>
                <li>• Example: Na < Mg < Al < Si</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Down a Group (↓)</h4>
              <ul>
                <li>• Ionization energy <strong>decreases</strong></li>
                <li>• Larger atomic radius</li>
                <li>• Weaker nuclear attraction</li>
                <li>• Easier to remove electrons</li>
                <li>• Example: Li > Na > K > Rb</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Electronegativity Trend",
        objective: "obj_007",
        text: `
          <h3>Electronegativity</h3>
          <p><strong>Electronegativity</strong> is the ability of an atom to attract electrons in a chemical bond.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Across a Period (→)</h4>
              <ul>
                <li>• Electronegativity <strong>increases</strong></li>
                <li>• More protons in nucleus</li>
                <li>• Stronger attraction for electrons</li>
                <li>• Example: Na < Mg < Al < Si</li>
                <li>• Most electronegative: Fluorine (4.0)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Down a Group (↓)</h4>
              <ul>
                <li>• Electronegativity <strong>decreases</strong></li>
                <li>• Larger atomic radius</li>
                <li>• Weaker attraction for electrons</li>
                <li>• Example: F > Cl > Br > I</li>
                <li>• Least electronegative: Cesium (0.7)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Group 1 - Alkali Metals",
        objective: "obj_011",
        text: `
          <h3>Alkali Metals (Group 1)</h3>
          <p>Alkali metals are highly reactive metals in Group 1 of the periodic table.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties:</h4>
              <ul>
                <li>• Soft metals</li>
                <li>• Low melting points</li>
                <li>• Highly reactive</li>
                <li>• React with water to form hydroxides</li>
                <li>• React with oxygen to form oxides</li>
                <li>• 1 valence electron</li>
                <li>• Examples: Li, Na, K, Rb, Cs, Fr</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reactions:</h4>
              <ul>
                <li>• <strong>With water:</strong> 2Na + 2H₂O → 2NaOH + H₂</li>
                <li>• <strong>With oxygen:</strong> 4Na + O₂ → 2Na₂O</li>
                <li>• <strong>With chlorine:</strong> 2Na + Cl₂ → 2NaCl</li>
                <li>• Reactivity <strong>increases</strong> down the group</li>
                <li>• Li < Na < K < Rb < Cs</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Group 17 - Halogens",
        objective: "obj_012",
        text: `
          <h3>Halogens (Group 17)</h3>
          <p>Halogens are highly reactive non-metals in Group 17.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Properties:</h4>
              <ul>
                <li>• Non-metals</li>
                <li>• Colored elements</li>
                <li>• 7 valence electrons</li>
                <li>• Form diatomic molecules (F₂, Cl₂, etc.)</li>
                <li>• React with metals to form salts</li>
                <li>• Examples: F, Cl, Br, I, At</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reactions:</h4>
              <ul>
                <li>• <strong>With metals:</strong> 2Na + Cl₂ → 2NaCl</li>
                <li>• <strong>With hydrogen:</strong> H₂ + Cl₂ → 2HCl</li>
                <li>• Reactivity <strong>decreases</strong> down the group</li>
                <li>• F > Cl > Br > I > At</li>
                <li>• Most reactive: Fluorine</li>
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
          <h4>📊 Periodic Table</h4>
          <ul>
            <li>• 18 groups, 7 periods</li>
            <li>• Arranged by atomic number</li>
            <li>• Metals, non-metals, metalloids</li>
            <li>• Groups have similar properties</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📈 Periodic Trends</h4>
          <ul>
            <li>• Atomic radius: decreases across, increases down</li>
            <li>• Ionization energy: increases across, decreases down</li>
            <li>• Electronegativity: increases across, decreases down</li>
            <li>• Reactivity: varies by group</li>
          </ul>
        </div>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "All elements in a group have the same physical properties",
        correction: "Elements in a group have similar chemical properties but different physical properties",
        explanation: "Physical properties like melting point and density vary within a group."
      },
      {
        id: "mis_002",
        misconception: "The periodic table has always been organized by atomic number",
        correction: "Early versions were organized by atomic mass",
        explanation: "Mendeleev's table used atomic mass; Moseley later used atomic number."
      },
      {
        id: "mis_003",
        misconception: "All metals are solids at room temperature",
        correction: "Mercury is a liquid metal at room temperature",
        explanation: "Mercury is the only metal that is liquid at room temperature."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Predicting Properties",
        description: "The periodic table helps predict properties of elements.",
        example: "Predicting reactivity and bonding behavior."
      },
      {
        id: "app_002",
        title: "Materials Science",
        description: "The periodic table guides materials development.",
        example: "Developing alloys and semiconductors."
      },
      {
        id: "app_003",
        title: "Medicine",
        description: "Elements from the periodic table are used in medicine.",
        example: "Iodine in medicine, platinum in chemotherapy."
      },
      {
        id: "app_004",
        title: "Environmental Science",
        description: "The periodic table helps identify pollutants.",
        example: "Heavy metals like lead, mercury, and cadmium."
      }
    ]
  },

  keyTerms: [
    { term: "Periodic Table", definition: "A tabular arrangement of elements by atomic number." },
    { term: "Group", definition: "A vertical column of elements with similar properties." },
    { term: "Period", definition: "A horizontal row of elements." },
    { term: "Alkali Metals", definition: "Group 1 elements: highly reactive metals." },
    { term: "Halogens", definition: "Group 17 elements: highly reactive non-metals." },
    { term: "Noble Gases", definition: "Group 18 elements: very unreactive." },
    { term: "Metals", definition: "Elements that are good conductors of heat and electricity." },
    { term: "Non-metals", definition: "Elements that are poor conductors." },
    { term: "Metalloids", definition: "Elements with properties of both metals and non-metals." },
    { term: "Atomic Radius", definition: "The size of an atom." },
    { term: "Ionization Energy", definition: "Energy required to remove an electron." },
    { term: "Electronegativity", definition: "The ability to attract electrons in a bond." },
    { term: "Periodic Law", definition: "Properties of elements are periodic functions of atomic number." },
    { term: "Valence Electrons", definition: "Electrons in the outermost shell." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "Who is known as the 'Father of the Periodic Table'?",
      type: "multiple_choice",
      options: ["Mendeleev", "Moseley", "Dalton", "Bohr"],
      answer: "Mendeleev",
      explanation: "Dmitri Mendeleev is known as the 'Father of the Periodic Table'."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a group in the periodic table?",
      type: "multiple_choice",
      options: ["A horizontal row", "A vertical column", "A diagonal line", "A random arrangement"],
      answer: "A vertical column",
      explanation: "Groups are vertical columns in the periodic table."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "How many groups are there in the periodic table?",
      type: "multiple_choice",
      options: ["7", "8", "18", "32"],
      answer: "18",
      explanation: "There are 18 groups in the periodic table."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "medium",
      question: "How many elements are in Period 2?",
      type: "multiple_choice",
      options: ["2", "8", "18", "32"],
      answer: "8",
      explanation: "Period 2 has 8 elements (Li to Ne)."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What happens to atomic radius across a period?",
      type: "multiple_choice",
      options: ["Increases", "Decreases", "Stays the same", "Fluctuates"],
      answer: "Decreases",
      explanation: "Atomic radius decreases across a period due to increased nuclear charge."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What happens to ionization energy down a group?",
      type: "multiple_choice",
      options: ["Increases", "Decreases", "Stays the same", "Fluctuates"],
      answer: "Decreases",
      explanation: "Ionization energy decreases down a group due to increased atomic radius."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which element has the highest electronegativity?",
      type: "multiple_choice",
      options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
      answer: "Fluorine",
      explanation: "Fluorine has the highest electronegativity (4.0)."
    },
    {
      id: "prac_008",
      objective: "obj_011",
      difficulty: "hard",
      question: "What happens when sodium reacts with water?",
      type: "multiple_choice",
      options: [
        "Forms sodium oxide and hydrogen",
        "Forms sodium hydroxide and hydrogen",
        "Forms sodium chloride and water",
        "Forms sodium nitrate and oxygen"
      ],
      answer: "Forms sodium hydroxide and hydrogen",
      explanation: "2Na + 2H₂O → 2NaOH + H₂."
    }
  ],

  assessment: {
    id: "assess_periodic_table",
    title: "Periodic Table Quiz",
    description: "Test your understanding of the periodic table",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Who is credited with creating the first periodic table?",
        type: "short_answer",
        answer_key: "Dmitri Mendeleev",
        explanation: "Mendeleev created the first periodic table in 1869."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between a group and a period?",
        type: "short_answer",
        answer_key: "Groups are vertical columns; periods are horizontal rows",
        explanation: "Groups are vertical; periods are horizontal."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "How many elements are in Period 1?",
        type: "short_answer",
        answer_key: "2",
        explanation: "Period 1 has 2 elements: Hydrogen and Helium."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the trend in atomic radius across a period?",
        type: "short_answer",
        answer_key: "Decreases from left to right",
        explanation: "Atomic radius decreases across a period due to increasing nuclear charge."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the trend in ionization energy down a group?",
        type: "short_answer",
        answer_key: "Decreases",
        explanation: "Ionization energy decreases down a group due to larger atomic radius."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "Which element has the highest electronegativity?",
        type: "short_answer",
        answer_key: "Fluorine",
        explanation: "Fluorine has the highest electronegativity (4.0)."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "medium",
        question: "Where are metals located on the periodic table?",
        type: "short_answer",
        answer_key: "On the left side",
        explanation: "Metals are on the left side of the periodic table."
      },
      {
        id: "ass_008",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the general formula for the reaction of an alkali metal with water?",
        type: "short_answer",
        answer_key: "2M + 2H₂O → 2MOH + H₂",
        explanation: "Alkali metals react with water to form metal hydroxide and hydrogen gas."
      },
      {
        id: "ass_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "Which halogen is the most reactive?",
        type: "short_answer",
        answer_key: "Fluorine",
        explanation: "Fluorine is the most reactive halogen."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "Explain why fluorine is more electronegative than chlorine.",
        type: "short_answer",
        answer_key: "Fluorine has a smaller atomic radius, so its nucleus attracts electrons more strongly",
        explanation: "Smaller atomic radius means stronger nuclear attraction for bonding electrons."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "50 minutes",
      objectives: [
        "Understand the organization of the periodic table",
        "Explain periodic trends",
        "Identify key groups and their properties"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is the periodic table?" },
        { time: "5-10 min", activity: "Direct Instruction - History of the Periodic Table" },
        { time: "10-15 min", activity: "Direct Instruction - Groups and Periods" },
        { time: "15-20 min", activity: "Direct Instruction - Metals, Non-metals, Metalloids" },
        { time: "20-25 min", activity: "Direct Instruction - Periodic Trends" },
        { time: "25-30 min", activity: "Direct Instruction - Key Groups" },
        { time: "30-35 min", activity: "Direct Instruction - Applications" },
        { time: "35-45 min", activity: "Guided Practice" },
        { time: "45-50 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Mendeleev",
        prac_002: "A vertical column",
        prac_003: "18",
        prac_004: "8",
        prac_005: "Decreases",
        prac_006: "Decreases",
        prac_007: "Fluorine",
        prac_008: "Forms sodium hydroxide and hydrogen"
      },
      assessment: {
        ass_001: "Dmitri Mendeleev",
        ass_002: "Groups are vertical columns; periods are horizontal rows",
        ass_003: "2",
        ass_004: "Decreases from left to right",
        ass_005: "Decreases",
        ass_006: "Fluorine",
        ass_007: "On the left side",
        ass_008: "2M + 2H₂O → 2MOH + H₂",
        ass_009: "Fluorine",
        ass_010: "Fluorine has a smaller atomic radius, so its nucleus attracts electrons more strongly"
      }
    },
    extensionActivities: [
      "Research the history of the periodic table",
      "Create a poster of the periodic table",
      "Investigate the properties of different groups",
      "Research the discovery of new elements"
    ],
    differentiation: {
      struggling: [
        "Focus on basic organization",
        "Use color-coding",
        "Practice with simple questions",
        "Provide a reference sheet"
      ],
      advanced: [
        "Research the history of element discovery",
        "Study the periodic table in detail",
        "Explore the trends in transition metals",
        "Investigate the f-block elements"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Periodic Table",
      description: "Complete periodic table",
      url: "/diagrams/periodic-table.png",
      alt: "Periodic table diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Periodic Trends",
      description: "Chart showing periodic trends",
      url: "/diagrams/periodic-trends.png",
      alt: "Periodic trends chart"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Groups and Periods",
      description: "Diagram showing groups and periods",
      url: "/diagrams/groups-periods.png",
      alt: "Groups and periods diagram"
    }
  ]
};