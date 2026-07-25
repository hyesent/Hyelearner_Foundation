// Location: src/data/lessons/science/chemistry/practical_chemistry.js

export default {
  id: "chem_lesson_practical_chemistry",
  subject: "Chemistry",
  topic: "Practical Chemistry",
  name: "Practical Chemistry",
  icon: "🧪",
  grade_level: "SS1 - SS3",
  estimated_duration: "60 minutes",

  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 15,
    requiredPracticeCorrect: 18,
    passingScore: 70
  },

  prerequisites: [
    "Understanding of basic chemistry concepts",
    "Knowledge of laboratory safety",
    "Familiarity with laboratory apparatus",
    "Basic mathematical skills"
  ],

  nextLessons: [
    {
      id: "chem_lesson_physical_chemistry_separation_techniques",
      name: "Separation Techniques",
      file: "science/chemistry/physical_chemistry/separation_techniques.js"
    }
  ],

  objectives: [
    { id: "obj_001", level: "easy", description: "Identify and name common laboratory apparatus", indicator: "Student can name at least 10 common apparatus and their uses" },
    { id: "obj_002", level: "easy", description: "Explain laboratory safety rules and procedures", indicator: "Student can list and explain at least 8 safety rules" },
    { id: "obj_003", level: "easy", description: "Describe the proper use of the Bunsen burner", indicator: "Student can explain how to light and adjust a Bunsen burner" },
    { id: "obj_004", level: "easy", description: "Measure mass, volume, and temperature accurately", indicator: "Student can use a balance, measuring cylinder, and thermometer correctly" },
    { id: "obj_005", level: "medium", description: "Prepare standard solutions", indicator: "Student can calculate and prepare solutions of known concentration" },
    { id: "obj_006", level: "medium", description: "Perform acid-base titrations", indicator: "Student can carry out a titration and calculate unknown concentration" },
    { id: "obj_007", level: "medium", description: "Carry out simple qualitative analysis", indicator: "Student can identify cations and anions using test tube reactions" },
    { id: "obj_008", level: "medium", description: "Perform simple gravimetric analysis", indicator: "Student can determine the mass of a substance by precipitation" },
    { id: "obj_009", level: "medium", description: "Test for gases using standard methods", indicator: "Student can identify gases using characteristic tests" },
    { id: "obj_010", level: "medium", description: "Carry out simple distillation and filtration", indicator: "Student can separate mixtures using standard techniques" },
    { id: "obj_011", level: "hard", description: "Perform quantitative analysis using volumetric methods", indicator: "Student can determine the concentration of an unknown solution" },
    { id: "obj_012", level: "hard", description: "Carry out gravimetric analysis with accurate calculations", indicator: "Student can calculate percentage composition from experimental data" },
    { id: "obj_013", level: "hard", description: "Interpret experimental data and draw conclusions", indicator: "Student can analyze results and write a scientific report" },
    { id: "obj_014", level: "hard", description: "Calculate percentage purity and yield", indicator: "Student can calculate percentage purity and percentage yield" },
    { id: "obj_015", level: "hard", description: "Perform electrolysis experiments", indicator: "Student can carry out electrolysis of simple electrolytes" },
    { id: "obj_016", level: "hard", description: "Carry out organic qualitative analysis", indicator: "Student can identify functional groups using chemical tests" },
    { id: "obj_017", level: "hard", description: "Determine enthalpy changes experimentally", indicator: "Student can measure temperature changes and calculate enthalpy" },
    { id: "obj_018", level: "hard", description: "Design and carry out a simple experiment", indicator: "Student can plan and execute a complete experimental procedure" }
  ],

  video: {
    id: "vid_001",
    title: "Practical Chemistry - Essential Skills and Techniques",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Master the essential practical skills for chemistry examinations."
  },

  content: {
    introduction: `
      <h2>What is Practical Chemistry?</h2>
      <p><strong>Practical chemistry</strong> is the hands-on application of chemical principles. It involves the use of laboratory apparatus, techniques, and procedures to investigate chemical phenomena. Practical skills are essential for success in chemistry examinations and university-level study.</p>
      
      <div class="grid grid-cols-3 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔬 Apparatus</h3>
          <ul>
            <li>✓ Beakers and flasks</li>
            <li>✓ Measuring cylinders</li>
            <li>✓ Burettes and pipettes</li>
            <li>✓ Balances and thermometers</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">⚗️ Techniques</h3>
          <ul>
            <li>✓ Titration</li>
            <li>✓ Filtration</li>
            <li>✓ Distillation</li>
            <li>✓ Crystallisation</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h3 class="text-yellow-600">🧪 Analysis</h3>
          <ul>
            <li>✓ Qualitative analysis</li>
            <li>✓ Quantitative analysis</li>
            <li>✓ Gravimetric analysis</li>
            <li>✓ Gas tests</li>
          </ul>
        </div>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Laboratory Safety",
        objective: "obj_002",
        text: `
          <h3>Safety in the Chemistry Laboratory</h3>
          <p>Safety is the most important aspect of practical chemistry. Always follow these safety rules.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Personal Safety:</h4>
              <ul>
                <li>✓ Always wear safety goggles</li>
                <li>✓ Wear a laboratory coat</li>
                <li>✓ Tie back long hair</li>
                <li>✓ Wear closed-toe shoes</li>
                <li>✓ Remove jewellery</li>
                <li>✓ Wash hands after experiments</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Working Safely:</h4>
              <ul>
                <li>✓ Read instructions before starting</li>
                <li>✓ Never eat or drink in the lab</li>
                <li>✓ Never taste chemicals</li>
                <li>✓ Use fume cupboards for toxic substances</li>
                <li>✓ Dispose of chemicals correctly</li>
                <li>✓ Know the location of safety equipment</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Emergency Procedures:</strong>
            <ul>
              <li>✓ <strong>Fire:</strong> Use the fire extinguisher or fire blanket</li>
              <li>✓ <strong>Spills:</strong> Neutralize and clean up immediately</li>
              <li>✓ <strong>Burns:</strong> Run cold water over the affected area</li>
              <li>✓ <strong>Chemical splashes:</strong> Use the emergency shower or eyewash</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Laboratory Apparatus",
        objective: "obj_001",
        text: `
          <h3>Common Laboratory Apparatus</h3>
          <p>Knowing the names and uses of laboratory apparatus is essential.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Measuring Apparatus:</h4>
              <ul>
                <li><strong>Beaker:</strong> For holding and mixing liquids</li>
                <li><strong>Measuring cylinder:</strong> For measuring volume</li>
                <li><strong>Burette:</strong> For precise volume measurement in titrations</li>
                <li><strong>Pipette:</strong> For transferring exact volumes</li>
                <li><strong>Volumetric flask:</strong> For preparing standard solutions</li>
                <li><strong>Balance:</strong> For measuring mass</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Heating Apparatus:</h4>
              <ul>
                <li><strong>Bunsen burner:</strong> For heating</li>
                <li><strong>Tripod stand:</strong> For supporting apparatus</li>
                <li><strong>Wire gauze:</strong> For spreading heat</li>
                <li><strong>Evaporating dish:</strong> For evaporation</li>
                <li><strong>Crucible:</strong> For heating solids</li>
                <li><strong>Water bath:</strong> For gentle heating</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Other Apparatus:</h4>
              <ul>
                <li><strong>Test tubes:</strong> For small-scale reactions</li>
                <li><strong>Conical flask (Erlenmeyer):</strong> For titration</li>
                <li><strong>Filter funnel:</strong> For filtration</li>
                <li><strong>Watch glass:</strong> For covering and evaporation</li>
                <li><strong>Mortar and pestle:</strong> For grinding</li>
                <li><strong>Thermometer:</strong> For measuring temperature</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Diagrams:</h4>
              <ul>
                <li>✓ Be able to draw and label apparatus</li>
                <li>✓ Know the correct setup for experiments</li>
                <li>✓ Understand how to assemble apparatus</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Bunsen Burner",
        objective: "obj_003",
        text: `
          <h3>The Bunsen Burner</h3>
          <p>The <strong>Bunsen burner</strong> is a common source of heat in the laboratory.</p>
          
          <div class="example-box">
            <strong>📌 Parts of the Bunsen Burner:</strong>
            <ul>
              <li>✓ <strong>Barrel:</strong> Where the gas and air mix</li>
              <li>✓ <strong>Air hole:</strong> Controls the amount of air entering</li>
              <li>✓ <strong>Collar:</strong> Rotates to open/close the air hole</li>
              <li>✓ <strong>Gas inlet:</strong> Where gas enters</li>
              <li>✓ <strong>Base:</strong> Supports the burner</li>
            </ul>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Luminous Flame (Safety Flame):</h4>
              <ul>
                <li>✓ Air hole closed</li>
                <li>✓ Yellow flame</li>
                <li>✓ Not very hot</li>
                <li>✓ Easily visible</li>
                <li>✓ Used when not heating</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Non-Luminous Flame (Heating Flame):</h4>
              <ul>
                <li>✓ Air hole open</li>
                <li>✓ Blue flame</li>
                <li>✓ Very hot</li>
                <li>✓ Difficult to see</li>
                <li>✓ Used for heating</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Lighting the Bunsen Burner:</strong>
            <ul>
              <li>1. Close the air hole</li>
              <li>2. Turn on the gas</li>
              <li>3. Use a lighter to ignite the gas</li>
              <li>4. Adjust the air hole for the required flame</li>
              <li>5. Always use the safety flame when not heating</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Preparing Standard Solutions",
        objective: "obj_005",
        text: `
          <h3>Standard Solutions</h3>
          <p>A <strong>standard solution</strong> is a solution of known concentration. It is used in quantitative analysis.</p>
          
          <div class="formula-box">
            <h4>📝 Key Calculations:</h4>
            <ul>
              <li><strong>Moles = mass / molar mass</strong></li>
              <li><strong>Concentration (mol/L) = moles / volume (L)</strong></li>
              <li><strong>Mass = moles × molar mass</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Steps to Prepare a Standard Solution:</strong>
            <ul>
              <li>1. Calculate the mass of solute needed</li>
              <li>2. Weigh the solute accurately</li>
              <li>3. Dissolve the solute in distilled water</li>
              <li>4. Transfer to a volumetric flask</li>
              <li>5. Make up to the mark with distilled water</li>
              <li>6. Invert to mix thoroughly</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> Prepare 250 cm³ of 0.1 mol/dm³ sodium hydroxide solution. (NaOH molar mass = 40 g/mol)</li>
              <li><strong>Solution:</strong></li>
              <li>Moles needed = 0.1 × 0.250 = 0.025 mol</li>
              <li>Mass needed = 0.025 × 40 = 1.0 g</li>
              <li>Weigh 1.0 g of NaOH, dissolve in distilled water, and make up to 250 cm³</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Titration",
        objective: "obj_006",
        text: `
          <h3>Acid-Base Titration</h3>
          <p><strong>Titration</strong> is a technique used to determine the concentration of a solution by reacting it with a solution of known concentration.</p>
          
          <div class="example-box">
            <strong>📌 Equipment Needed:</strong>
            <ul>
              <li>✓ Burette (filled with standard solution)</li>
              <li>✓ Pipette (for measuring the unknown solution)</li>
              <li>✓ Conical flask (for the reaction)</li>
              <li>✓ Indicator (e.g., phenolphthalein, methyl orange)</li>
              <li>✓ White tile (to see colour change)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Steps:</strong>
            <ul>
              <li>1. Rinse the burette with the standard solution</li>
              <li>2. Fill the burette and record the initial reading</li>
              <li>3. Pipette the unknown solution into a conical flask</li>
              <li>4. Add 2-3 drops of indicator</li>
              <li>5. Titrate by adding the standard solution from the burette</li>
              <li>6. Stop at the endpoint (colour change)</li>
              <li>7. Record the final reading</li>
              <li>8. Repeat for concordant results (within 0.10 cm³)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4>📝 Titration Calculations:</h4>
            <p><strong>M₁V₁ = M₂V₂</strong></p>
            <ul>
              <li>M₁ = concentration of standard solution</li>
              <li>V₁ = volume of standard solution used</li>
              <li>M₂ = concentration of unknown solution</li>
              <li>V₂ = volume of unknown solution</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> 25.0 cm³ of NaOH solution was titrated against 0.10 mol/dm³ HCl. The average titre was 20.0 cm³. Calculate the concentration of NaOH.</li>
              <li><strong>Solution:</strong></li>
              <li>NaOH + HCl → NaCl + H₂O</li>
              <li>M₁V₁ = M₂V₂</li>
              <li>0.10 × 20.0 = M₂ × 25.0</li>
              <li>M₂ = (0.10 × 20.0) / 25.0 = 0.08 mol/dm³</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Qualitative Analysis - Cations",
        objective: "obj_007",
        text: `
          <h3>Qualitative Analysis</h3>
          <p><strong>Qualitative analysis</strong> is used to identify the ions present in a compound.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Test for Cations:</h4>
              <ul>
                <li><strong>Sodium hydroxide (NaOH) test:</strong></li>
                <li>Add NaOH solution drop by drop</li>
                <li>Observe the colour of the precipitate</li>
                <li><strong>Cu²⁺:</strong> Blue precipitate</li>
                <li><strong>Fe²⁺:</strong> Green precipitate</li>
                <li><strong>Fe³⁺:</strong> Brown precipitate</li>
                <li><strong>Al³⁺:</strong> White precipitate, soluble in excess NaOH</li>
                <li><strong>Zn²⁺:</strong> White precipitate, soluble in excess NaOH</li>
                <li><strong>Ca²⁺:</strong> White precipitate, insoluble in excess NaOH</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Flame Tests:</h4>
              <ul>
                <li>Dip a nichrome wire in concentrated HCl</li>
                <li>Dip in the sample</li>
                <li>Place in a flame</li>
                <li><strong>Na⁺:</strong> Yellow flame</li>
                <li><strong>K⁺:</strong> Lilac flame</li>
                <li><strong>Ca²⁺:</strong> Brick-red flame</li>
                <li><strong>Cu²⁺:</strong> Blue-green flame</li>
                <li><strong>Ba²⁺:</strong> Apple-green flame</li>
                <li><strong>Sr²⁺:</strong> Crimson red flame</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Qualitative Analysis - Anions",
        objective: "obj_007",
        text: `
          <h3>Testing for Anions</h3>
          <p>Use specific tests to identify anions in a compound.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Carbonate (CO₃²⁻):</h4>
              <ul>
                <li>Add dilute hydrochloric acid</li>
                <li>Effervescence (bubbles) of CO₂ gas</li>
                <li>Test gas with limewater (turns milky)</li>
              </ul>
              <h4 class="mt-2">📌 Sulphate (SO₄²⁻):</h4>
              <ul>
                <li>Add barium chloride (BaCl₂) solution</li>
                <li>White precipitate of BaSO₄</li>
                <li>Precipitate is insoluble in dilute HCl</li>
              </ul>
              <h4 class="mt-2">📌 Chloride (Cl⁻):</h4>
              <ul>
                <li>Add silver nitrate (AgNO₃) solution</li>
                <li>White precipitate of AgCl</li>
                <li>Precipitate soluble in dilute NH₃</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Bromide (Br⁻):</h4>
              <ul>
                <li>Add silver nitrate (AgNO₃) solution</li>
                <li>Cream precipitate of AgBr</li>
                <li>Precipitate sparingly soluble in dilute NH₃</li>
              </ul>
              <h4 class="mt-2">📌 Iodide (I⁻):</h4>
              <ul>
                <li>Add silver nitrate (AgNO₃) solution</li>
                <li>Yellow precipitate of AgI</li>
                <li>Precipitate insoluble in dilute NH₃</li>
              </ul>
              <h4 class="mt-2">📌 Nitrate (NO₃⁻):</h4>
              <ul>
                <li>Add sodium hydroxide and aluminium foil</li>
                <li>Warm gently</li>
                <li>Ammonia gas is produced (turns moist red litmus blue)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Gas Tests",
        objective: "obj_009",
        text: `
          <h3>Identification of Gases</h3>
          <p>Use specific tests to identify common gases.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Oxygen (O₂):</h4>
              <ul>
                <li>Test: Glowing splint relights</li>
              </ul>
              <h4 class="mt-2">📌 Hydrogen (H₂):</h4>
              <ul>
                <li>Test: Burning splint produces a 'pop' sound</li>
              </ul>
              <h4 class="mt-2">📌 Carbon Dioxide (CO₂):</h4>
              <ul>
                <li>Test: Turns limewater milky (cloudy)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chlorine (Cl₂):</h4>
              <ul>
                <li>Test: Bleaches damp litmus paper</li>
                <li>Greenish-yellow gas</li>
              </ul>
              <h4 class="mt-2">📌 Ammonia (NH₃):</h4>
              <ul>
                <li>Test: Turns moist red litmus paper blue</li>
                <li>Pungent smell</li>
              </ul>
              <h4 class="mt-2">📌 Sulphur Dioxide (SO₂):</h4>
              <ul>
                <li>Test: Turns acidified potassium dichromate green</li>
                <li>Pungent smell</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Gravimetric Analysis",
        objective: "obj_008",
        text: `
          <h3>Gravimetric Analysis</h3>
          <p><strong>Gravimetric analysis</strong> is a quantitative technique where the mass of a substance is determined by precipitation and weighing.</p>
          
          <div class="example-box">
            <strong>📌 Steps:</strong>
            <ul>
              <li>1. Dissolve the sample</li>
              <li>2. Add a precipitating agent</li>
              <li>3. Filter the precipitate</li>
              <li>4. Wash the precipitate</li>
              <li>5. Dry and weigh the precipitate</li>
              <li>6. Calculate the mass of the substance</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Problem:</strong> A sample of chloride was dissolved and silver nitrate was added. The AgCl precipitate weighed 2.87 g. Calculate the mass of chloride in the sample. (Ag = 108, Cl = 35.5)</li>
              <li><strong>Solution:</strong></li>
              <li>AgCl molar mass = 108 + 35.5 = 143.5 g/mol</li>
              <li>Moles of AgCl = 2.87 / 143.5 = 0.02 mol</li>
              <li>Moles of Cl⁻ = 0.02 mol</li>
              <li>Mass of Cl⁻ = 0.02 × 35.5 = 0.71 g</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Percentage Purity and Yield",
        objective: "obj_014",
        text: `
          <h3>Percentage Purity and Yield</h3>
          <p>These calculations are essential for assessing the success of a reaction.</p>
          
          <div class="formula-box">
            <h4>📝 Formulas:</h4>
            <ul>
              <li><strong>% Purity = (mass of pure substance / mass of sample) × 100%</strong></li>
              <li><strong>% Yield = (actual yield / theoretical yield) × 100%</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1 - Percentage Purity:</strong>
            <ul>
              <li><strong>Problem:</strong> A 5.0 g sample of limestone contains 4.2 g of CaCO₃. Calculate the percentage purity.</li>
              <li><strong>Solution:</strong></li>
              <li>% Purity = (4.2 / 5.0) × 100% = 84%</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2 - Percentage Yield:</strong>
            <ul>
              <li><strong>Problem:</strong> In a reaction, 10.0 g of CaCO₃ was heated to produce 4.5 g of CaO. (Ca = 40, C = 12, O = 16)</li>
              <li><strong>Solution:</strong></li>
              <li>CaCO₃ → CaO + CO₂</li>
              <li>Molar masses: CaCO₃ = 100 g/mol, CaO = 56 g/mol</li>
              <li>Theoretical yield of CaO = (10.0 / 100) × 56 = 5.6 g</li>
              <li>% Yield = (4.5 / 5.6) × 100% = 80.4%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Enthalpy Determination",
        objective: "obj_017",
        text: `
          <h3>Enthalpy Change Experiments</h3>
          <p>Enthalpy changes can be determined by measuring temperature changes.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>q = mcΔT</strong></p>
            <ul>
              <li>q = heat energy (J)</li>
              <li>m = mass of solution (g)</li>
              <li>c = specific heat capacity (4.18 J/g·°C for water)</li>
              <li>ΔT = change in temperature (°C)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example - Neutralisation:</strong>
            <ul>
              <li><strong>Problem:</strong> 50 cm³ of 1.0 mol/dm³ HCl was mixed with 50 cm³ of 1.0 mol/dm³ NaOH. The temperature rose from 20°C to 27°C. Calculate the enthalpy change.</li>
              <li><strong>Solution:</strong></li>
              <li>Total volume = 100 cm³, mass = 100 g</li>
              <li>q = mcΔT = 100 × 4.18 × 7 = 2926 J = 2.926 kJ</li>
              <li>Moles of water formed = 0.050 mol</li>
              <li>ΔH = -2.926 / 0.050 = -58.5 kJ/mol</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Organic Qualitative Analysis",
        objective: "obj_016",
        text: `
          <h3>Testing for Organic Functional Groups</h3>
          <p>Identify organic compounds by testing for functional groups.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Alkenes (C=C):</h4>
              <ul>
                <li>Test: Bromine water decolourises</li>
                <li>(from orange/brown to colourless)</li>
              </ul>
              <h4 class="mt-2">📌 Alcohols (-OH):</h4>
              <ul>
                <li>Sodium metal test: Effervescence (H₂ gas)</li>
                <li>Acidified KMnO₄: Turns from purple to colourless</li>
              </ul>
              <h4 class="mt-2">📌 Aldehydes (-CHO):</h4>
              <ul>
                <li>Fehling's test: Blue → Brick-red precipitate</li>
                <li>Tollen's test: Silver mirror formed</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Ketones (C=O):</h4>
              <ul>
                <li>Do not react with Fehling's or Tollen's</li>
                <li>But give positive iodoform test (methyl ketones)</li>
              </ul>
              <h4 class="mt-2">📌 Carboxylic Acids (-COOH):</h4>
              <ul>
                <li>Reaction with NaHCO₃: Effervescence (CO₂ gas)</li>
                <li>pH paper shows acid</li>
              </ul>
              <h4 class="mt-2">📌 Esters (-COO-):</h4>
              <ul>
                <li>Hydrolysis → alcohol + carboxylic acid</li>
                <li>Fruity smell</li>
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
          <h4>🧪 Practical Skills</h4>
          <ul>
            <li>✓ Laboratory safety is paramount</li>
            <li>✓ Know your apparatus and their uses</li>
            <li>✓ Master titration techniques</li>
            <li>✓ Understand qualitative and quantitative analysis</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📊 Key Calculations</h4>
          <ul>
            <li>✓ Moles = mass / molar mass</li>
            <li>✓ Concentration = moles / volume</li>
            <li>✓ % Purity and % Yield</li>
            <li>✓ q = mcΔT for enthalpy</li>
          </ul>
        </div>
      </div>
    `,

    misconceptions: [
      {
        id: "mis_001",
        misconception: "You can taste chemicals to identify them",
        correction: "Never taste chemicals in the laboratory",
        explanation: "Many chemicals are toxic or corrosive and can cause serious harm."
      },
      {
        id: "mis_002",
        misconception: "The Bunsen burner flame is always blue",
        correction: "The flame can be yellow (luminous) or blue (non-luminous)",
        explanation: "Yellow is the safety flame; blue is the heating flame."
      },
      {
        id: "mis_003",
        misconception: "All precipitates are white",
        correction: "Precipitates can be many colors",
        explanation: "Copper hydroxide is blue, iron hydroxide is green/brown, etc."
      }
    ],

    applications: [
      {
        id: "app_001",
        title: "Water Quality Testing",
        description: "Practical chemistry is used to test water quality.",
        example: "Testing for pH, hardness, and contaminants."
      },
      {
        id: "app_002",
        title: "Pharmaceutical Industry",
        description: "Titration is used in drug manufacturing.",
        example: "Determining the purity of active ingredients."
      },
      {
        id: "app_003",
        title: "Environmental Monitoring",
        description: "Chemical analysis is used to monitor pollution.",
        example: "Testing air and water samples for pollutants."
      },
      {
        id: "app_004",
        title: "Food and Beverage",
        description: "Chemical analysis ensures food safety.",
        example: "Testing for acidity, preservatives, and contaminants."
      }
    ]
  },

  keyTerms: [
    { term: "Titration", definition: "A technique to determine the concentration of a solution." },
    { term: "Standard Solution", definition: "A solution of known concentration." },
    { term: "Qualitative Analysis", definition: "Identifying the substances present in a sample." },
    { term: "Quantitative Analysis", definition: "Determining the amount of a substance in a sample." },
    { term: "Gravimetric Analysis", definition: "A quantitative technique using mass measurements." },
    { term: "Precipitate", definition: "A solid formed from a reaction in solution." },
    { term: "End Point", definition: "The point in a titration when the indicator changes color." },
    { term: "Burette", definition: "A glass tube with a tap used for precise volume measurement." },
    { term: "Pipette", definition: "A glass tube used to transfer a fixed volume of liquid." },
    { term: "Volumetric Flask", definition: "A flask used to prepare standard solutions." },
    { term: "Enthalpy Change", definition: "The heat energy change in a reaction." },
    { term: "Percentage Purity", definition: "The percentage of a pure substance in a sample." },
    { term: "Percentage Yield", definition: "The percentage of product obtained compared to the theoretical amount." }
  ],

  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What apparatus is used to measure volume accurately in a titration?",
      type: "multiple_choice",
      options: ["Beaker", "Measuring cylinder", "Burette", "Conical flask"],
      answer: "Burette",
      explanation: "A burette is used for precise volume measurement in titrations."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What should you always wear in the chemistry laboratory?",
      type: "multiple_choice",
      options: ["Safety goggles", "Gloves", "Apron", "All of the above"],
      answer: "All of the above",
      explanation: "Safety goggles, gloves, and an apron should always be worn in the lab."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What colour is the non-luminous flame of a Bunsen burner?",
      type: "multiple_choice",
      options: ["Yellow", "Blue", "Red", "Orange"],
      answer: "Blue",
      explanation: "The non-luminous flame is blue and is used for heating."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is the unit of concentration in mol/dm³?",
      type: "multiple_choice",
      options: ["Moles", "Grams", "Molarity", "Volume"],
      answer: "Molarity",
      explanation: "Molarity is the concentration in mol/dm³."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Calculate the mass of NaOH needed to make 500 cm³ of 0.20 mol/dm³ solution. (NaOH = 40 g/mol)",
      type: "multiple_choice",
      options: ["2.0 g", "4.0 g", "6.0 g", "8.0 g"],
      answer: "4.0 g",
      explanation: "Moles = 0.20 × 0.500 = 0.100 mol. Mass = 0.100 × 40 = 4.0 g."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "In a titration, 25.0 cm³ of HCl was titrated against 0.10 mol/dm³ NaOH. The average titre was 20.0 cm³. What is the concentration of HCl?",
      type: "multiple_choice",
      options: ["0.05 mol/dm³", "0.08 mol/dm³", "0.10 mol/dm³", "0.12 mol/dm³"],
      answer: "0.08 mol/dm³",
      explanation: "M₁V₁ = M₂V₂. 0.10 × 20.0 = M₂ × 25.0. M₂ = 0.08 mol/dm³."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the colour of the precipitate formed when NaOH is added to Cu²⁺ solution?",
      type: "multiple_choice",
      options: ["White", "Blue", "Green", "Brown"],
      answer: "Blue",
      explanation: "Copper hydroxide (Cu(OH)₂) is a blue precipitate."
    },
    {
      id: "prac_008",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the colour of the flame produced by potassium ions?",
      type: "multiple_choice",
      options: ["Yellow", "Lilac", "Brick-red", "Blue-green"],
      answer: "Lilac",
      explanation: "Potassium gives a lilac flame."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "medium",
      question: "What gas turns limewater milky?",
      type: "multiple_choice",
      options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Ammonia"],
      answer: "Carbon dioxide",
      explanation: "CO₂ turns limewater milky (calcium carbonate precipitate)."
    },
    {
      id: "prac_010",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is the test for hydrogen gas?",
      type: "multiple_choice",
      options: ["Glowing splint relights", "Burning splint gives a pop", "Turns limewater milky", "Bleaches litmus"],
      answer: "Burning splint gives a pop",
      explanation: "Hydrogen gas produces a 'pop' sound with a burning splint."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "A 2.0 g sample of chloride produced 4.20 g of AgCl precipitate. Calculate the mass of chloride. (Ag = 108, Cl = 35.5)",
      type: "multiple_choice",
      options: ["0.85 g", "1.04 g", "1.24 g", "1.50 g"],
      answer: "1.04 g",
      explanation: "AgCl molar mass = 143.5 g/mol. Moles AgCl = 4.20/143.5 = 0.0293 mol. Mass Cl⁻ = 0.0293 × 35.5 = 1.04 g."
    },
    {
      id: "prac_012",
      objective: "obj_011",
      difficulty: "hard",
      question: "A sample of sodium carbonate was titrated with 0.20 mol/dm³ HCl. 25.0 cm³ of Na₂CO₃ solution required 22.0 cm³ of HCl. Calculate the concentration of Na₂CO₃.",
      type: "multiple_choice",
      options: ["0.044 mol/dm³", "0.088 mol/dm³", "0.176 mol/dm³", "0.220 mol/dm³"],
      answer: "0.088 mol/dm³",
      explanation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. Moles HCl = 0.20 × 0.022 = 0.0044 mol. Moles Na₂CO₃ = 0.0044/2 = 0.0022 mol. Concentration = 0.0022/0.025 = 0.088 mol/dm³."
    },
    {
      id: "prac_013",
      objective: "obj_014",
      difficulty: "hard",
      question: "A 10.0 g sample of ore produced 4.5 g of metal. What is the percentage purity?",
      type: "multiple_choice",
      options: ["35%", "45%", "55%", "65%"],
      answer: "45%",
      explanation: "% Purity = (4.5/10.0) × 100% = 45%."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "The theoretical yield of a reaction is 15.0 g. The actual yield is 12.0 g. Calculate the percentage yield.",
      type: "multiple_choice",
      options: ["70%", "75%", "80%", "85%"],
      answer: "80%",
      explanation: "% Yield = (12.0/15.0) × 100% = 80%."
    },
    {
      id: "prac_015",
      objective: "obj_017",
      difficulty: "hard",
      question: "In a neutralisation experiment, 50 cm³ of acid reacts with 50 cm³ of alkali. The temperature rises by 8°C. Calculate q. (c = 4.18 J/g·°C)",
      type: "multiple_choice",
      options: ["1672 J", "2090 J", "2508 J", "3344 J"],
      answer: "1672 J",
      explanation: "q = mcΔT = 100 × 4.18 × 8 = 3344 J."
    },
    {
      id: "prac_016",
      objective: "obj_016",
      difficulty: "hard",
      question: "What test confirms the presence of an alkene?",
      type: "multiple_choice",
      options: ["Bromine water decolourises", "Sodium metal test", "Fehling's test", "Iodoform test"],
      answer: "Bromine water decolourises",
      explanation: "Alkenes decolourise bromine water due to the addition reaction at the C=C bond."
    }
  ],

  assessment: {
    id: "assess_practical_chemistry",
    title: "Practical Chemistry Quiz",
    description: "Test your understanding of practical chemistry skills",
    passing_score: 70,
    total_questions: 15,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the purpose of a burette in a titration?",
        type: "short_answer",
        answer_key: "To accurately measure the volume of liquid added",
        explanation: "A burette is used for precise volume measurement in titrations."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Why should you never eat or drink in the chemistry laboratory?",
        type: "short_answer",
        answer_key: "To avoid contamination or poisoning from chemicals",
        explanation: "Chemicals can contaminate food or be poisonous if ingested."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between a luminous and non-luminous flame?",
        type: "short_answer",
        answer_key: "Luminous flame is yellow and less hot; non-luminous flame is blue and hotter",
        explanation: "The luminous flame is the safety flame; the non-luminous flame is the heating flame."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "How would you prepare 250 cm³ of 0.10 mol/dm³ NaCl? (NaCl = 58.5 g/mol)",
        type: "short_answer",
        answer_key: "Weigh 1.4625 g of NaCl, dissolve in distilled water, make up to 250 cm³ in a volumetric flask",
        explanation: "Moles = 0.10 × 0.250 = 0.025 mol. Mass = 0.025 × 58.5 = 1.4625 g."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "25.0 cm³ of NaOH solution was titrated against 0.10 mol/dm³ HCl. The titre was 22.5 cm³. Calculate the concentration of NaOH.",
        type: "short_answer",
        answer_key: "0.09 mol/dm³",
        explanation: "M₁V₁ = M₂V₂. 0.10 × 22.5 = M₂ × 25.0. M₂ = 0.09 mol/dm³."
      },
      {
        id: "ass_006",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the colour of the precipitate formed when NaOH is added to Fe³⁺ solution?",
        type: "short_answer",
        answer_key: "Brown",
        explanation: "Iron(III) hydroxide is a brown precipitate."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the flame test colour for calcium ions?",
        type: "short_answer",
        answer_key: "Brick-red",
        explanation: "Calcium gives a brick-red flame."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "medium",
        question: "How would you test for carbon dioxide gas?",
        type: "short_answer",
        answer_key: "Bubble the gas through limewater; it turns milky",
        explanation: "CO₂ reacts with limewater to form a white precipitate of calcium carbonate."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "medium",
        question: "What is the test for chlorine gas?",
        type: "short_answer",
        answer_key: "Bleaches damp litmus paper",
        explanation: "Chlorine is a bleaching agent and decolourises damp litmus paper."
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A 1.5 g sample of chloride produced 3.01 g of AgCl. Calculate the mass of chloride. (Ag = 108, Cl = 35.5)",
        type: "short_answer",
        answer_key: "0.745 g",
        explanation: "AgCl molar mass = 143.5 g/mol. Moles AgCl = 3.01/143.5 = 0.02098 mol. Mass Cl = 0.02098 × 35.5 = 0.745 g."
      },
      {
        id: "ass_011",
        objective: "obj_011",
        difficulty: "hard",
        question: "A 0.50 g sample of sodium carbonate was titrated with HCl. It required 23.5 cm³ of 0.20 mol/dm³ HCl. Calculate the percentage purity. (Na₂CO₃ = 106 g/mol)",
        type: "short_answer",
        answer_key: "99.8%",
        explanation: "Moles HCl = 0.20 × 0.0235 = 0.0047 mol. Moles Na₂CO₃ = 0.0047/2 = 0.00235 mol. Mass = 0.00235 × 106 = 0.2491 g. % Purity = (0.2491/0.50) × 100% = 49.8%."
      },
      {
        id: "ass_012",
        objective: "obj_014",
        difficulty: "hard",
        question: "Calculate the percentage yield if the theoretical yield is 20.0 g and the actual yield is 16.0 g.",
        type: "short_answer",
        answer_key: "80%",
        explanation: "% Yield = (16.0/20.0) × 100% = 80%."
      },
      {
        id: "ass_013",
        objective: "obj_016",
        difficulty: "hard",
        question: "How can you distinguish between an aldehyde and a ketone?",
        type: "short_answer",
        answer_key: "Aldehydes give a positive Fehling's or Tollen's test; ketones do not",
        explanation: "Aldehydes can be oxidised; ketones cannot."
      },
      {
        id: "ass_014",
        objective: "obj_017",
        difficulty: "hard",
        question: "In an experiment, 100 cm³ of water increased in temperature by 5°C. Calculate q. (c = 4.18 J/g·°C)",
        type: "short_answer",
        answer_key: "2090 J",
        explanation: "q = mcΔT = 100 × 4.18 × 5 = 2090 J."
      },
      {
        id: "ass_015",
        objective: "obj_018",
        difficulty: "hard",
        question: "Describe the steps you would take to plan an experiment to determine the concentration of a hydrochloric acid solution.",
        type: "short_answer",
        answer_key: "1. Prepare a standard solution of NaOH. 2. Pipette 25.0 cm³ of HCl into a conical flask. 3. Add indicator. 4. Titrate with NaOH. 5. Record the titre. 6. Calculate the concentration.",
        explanation: "A titration is the method used to determine concentration of an acid."
      }
    ]
  },

  teacherResources: {
    lessonPlan: {
      duration: "60 minutes",
      objectives: [
        "Understand laboratory safety and apparatus",
        "Prepare standard solutions",
        "Perform titrations",
        "Carry out qualitative and quantitative analysis"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Practical chemistry skills" },
        { time: "5-10 min", activity: "Direct Instruction - Safety and Apparatus" },
        { time: "10-15 min", activity: "Direct Instruction - Standard Solutions" },
        { time: "15-20 min", activity: "Direct Instruction - Titration" },
        { time: "20-25 min", activity: "Direct Instruction - Qualitative Analysis" },
        { time: "25-30 min", activity: "Direct Instruction - Gravimetric Analysis" },
        { time: "30-35 min", activity: "Direct Instruction - Calculations" },
        { time: "35-50 min", activity: "Guided Practice" },
        { time: "50-60 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Burette",
        prac_002: "All of the above",
        prac_003: "Blue",
        prac_004: "Molarity",
        prac_005: "4.0 g",
        prac_006: "0.08 mol/dm³",
        prac_007: "Blue",
        prac_008: "Lilac",
        prac_009: "Carbon dioxide",
        prac_010: "Burning splint gives a pop",
        prac_011: "1.04 g",
        prac_012: "0.088 mol/dm³",
        prac_013: "45%",
        prac_014: "80%",
        prac_015: "3344 J",
        prac_016: "Bromine water decolourises"
      },
      assessment: {
        ass_001: "To accurately measure the volume of liquid added",
        ass_002: "To avoid contamination or poisoning from chemicals",
        ass_003: "Luminous flame is yellow and less hot; non-luminous flame is blue and hotter",
        ass_004: "Weigh 1.4625 g of NaCl, dissolve in distilled water, make up to 250 cm³ in a volumetric flask",
        ass_005: "0.09 mol/dm³",
        ass_006: "Brown",
        ass_007: "Brick-red",
        ass_008: "Bubble the gas through limewater; it turns milky",
        ass_009: "Bleaches damp litmus paper",
        ass_010: "0.745 g",
        ass_011: "49.8%",
        ass_012: "80%",
        ass_013: "Aldehydes give a positive Fehling's or Tollen's test; ketones do not",
        ass_014: "2090 J",
        ass_015: "1. Prepare a standard solution of NaOH. 2. Pipette 25.0 cm³ of HCl into a conical flask. 3. Add indicator. 4. Titrate with NaOH. 5. Record the titre. 6. Calculate the concentration."
      }
    },
    extensionActivities: [
      "Design and carry out a titration experiment",
      "Prepare a standard solution and verify its concentration",
      "Identify unknown ions using qualitative tests",
      "Calculate the percentage purity of a sample"
    ],
    differentiation: {
      struggling: [
        "Focus on basic safety and apparatus",
        "Use simple calculations",
        "Provide step-by-step guides",
        "Practice with guided worksheets"
      ],
      advanced: [
        "Design a complete analytical procedure",
        "Calculate uncertainties in measurements",
        "Research advanced analytical techniques",
        "Perform a complete practical investigation"
      ]
    }
  },

  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Laboratory Apparatus",
      description: "Diagram showing common laboratory apparatus",
      url: "/diagrams/lab-apparatus.png",
      alt: "Laboratory apparatus diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Titration Setup",
      description: "Diagram showing titration apparatus setup",
      url: "/diagrams/titration-setup.png",
      alt: "Titration setup diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Qualitative Analysis Flowchart",
      description: "Flowchart for identifying ions",
      url: "/diagrams/qualitative-analysis.png",
      alt: "Qualitative analysis flowchart"
    }
  ]
};