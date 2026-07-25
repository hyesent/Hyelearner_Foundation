// Location: src/data/lessons/science/biology/biotechnology.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_biotechnology",
  subject: "Biology",
  topic: "Biotechnology",
  name: "Biotechnology",
  icon: "🧪",
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
    "Understanding of genetics",
    "Knowledge of DNA structure",
    "Understanding of microorganisms",
    "Basic knowledge of cell biology"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
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
      description: "Define biotechnology and explain its importance",
      indicator: "Student can explain what biotechnology is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify traditional and modern biotechnology applications",
      indicator: "Student can give examples of both traditional and modern biotech"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the process of genetic engineering",
      indicator: "Student can describe how genes are transferred between organisms"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the role of restriction enzymes in genetic engineering",
      indicator: "Student can describe how restriction enzymes cut DNA"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the process of DNA fingerprinting",
      indicator: "Student can explain how DNA fingerprinting works"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the applications of biotechnology in medicine",
      indicator: "Student can describe gene therapy, vaccines, and pharmaceuticals"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the applications of biotechnology in agriculture",
      indicator: "Student can describe GMOs and their uses"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the process of fermentation and its applications",
      indicator: "Student can describe how fermentation is used in industry"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the CRISPR-Cas9 gene editing technology",
      indicator: "Student can describe how CRISPR works"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the ethical issues surrounding biotechnology",
      indicator: "Student can discuss the pros and cons of biotech"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of biotechnology in environmental protection",
      indicator: "Student can describe bioremediation and biosensors"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Compare different biotechnological techniques",
      indicator: "Student can distinguish between various biotech methods"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Biotechnology - Shaping the Future",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Explore the fascinating world of biotechnology and how it's changing medicine, agriculture, and industry."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Biotechnology</h2>
      <p><strong>Biotechnology</strong> is the use of living organisms or their components to develop products and technologies that improve our lives. It combines biology, chemistry, and engineering to solve problems in medicine, agriculture, and industry.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧪 Key Concepts</h3>
          <ul>
            <li>✓ Genetic Engineering</li>
            <li>✓ DNA Technology</li>
            <li>✓ Fermentation</li>
            <li>✓ GMOs</li>
            <li>✓ CRISPR</li>
            <li>✓ Gene Therapy</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Biotechnology has been used for 10,000+ years</li>
            <li>• Insulin was the first genetically engineered drug</li>
            <li>• CRISPR was discovered in bacteria</li>
            <li>• DNA fingerprinting is 99.9% accurate</li>
            <li>• GMO crops are grown on 190 million hectares</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Biotechnology Matters</h4>
        <p>Biotechnology has the potential to solve some of humanity's biggest challenges, including disease treatment, food security, and environmental sustainability.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Traditional vs Modern Biotechnology",
        objective: "obj_002",
        text: `
          <h3>Traditional and Modern Biotechnology</h3>
          <p>Biotechnology has been used for thousands of years, but modern techniques have revolutionized the field.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Traditional Biotechnology</h4>
              <ul>
                <li>• <strong>Fermentation:</strong> Beer, wine, bread, yogurt</li>
                <li>• <strong>Breeding:</strong> Selective breeding of plants and animals</li>
                <li>• <strong>Cheese making:</strong> Using bacteria to ferment milk</li>
                <li>• <strong>Pickling:</strong> Using microorganisms to preserve food</li>
                <li>• <strong>Bread making:</strong> Using yeast</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Modern Biotechnology</h4>
              <ul>
                <li>• <strong>Genetic engineering:</strong> Modifying DNA</li>
                <li>• <strong>Gene therapy:</strong> Treating genetic disorders</li>
                <li>• <strong>CRISPR:</strong> Precise gene editing</li>
                <li>• <strong>DNA fingerprinting:</strong> Identifying individuals</li>
                <li>• <strong>Pharmaceuticals:</strong> Producing drugs in bacteria</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Genetic Engineering",
        objective: "obj_003",
        text: `
          <h3>Genetic Engineering</h3>
          <p><strong>Genetic engineering</strong> is the direct manipulation of an organism's genes using biotechnology.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Process</h4>
              <ul>
                <li>1. Identify the gene of interest</li>
                <li>2. Isolate the gene</li>
                <li>3. Insert into vector (e.g., plasmid)</li>
                <li>4. Insert into host organism</li>
                <li>5. Host produces the desired protein</li>
                <li>6. Product is harvested</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Components</h4>
              <ul>
                <li><strong>Vector:</strong> Transfers DNA into host</li>
                <li><strong>Plasmid:</strong> Small circular DNA in bacteria</li>
                <li><strong>Restriction enzymes:</strong> Cut DNA at specific sites</li>
                <li><strong>DNA ligase:</strong> Joins DNA fragments</li>
                <li><strong>Host organism:</strong> Produces the protein</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Genetic Engineering Process</text>
              
              <!-- Step 1: DNA -->
              <g transform="translate(100, 150)">
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#1565c0">Step 1: Isolate DNA</text>
                <path d="M-30 0 L30 0" stroke="#4a90d9" stroke-width="4" stroke-linecap="round"/>
                <path d="M-20 -5 L20 -5" stroke="#4a90d9" stroke-width="4" stroke-linecap="round"/>
                <path d="M-10 5 L10 5" stroke="#4a90d9" stroke-width="4" stroke-linecap="round"/>
                <!-- Gene of interest -->
                <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#ff6b6b"/>
              </g>
              
              <!-- Arrow -->
              <text x="160" y="155" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 2: Cut DNA -->
              <g transform="translate(220, 150)">
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#1565c0">Step 2: Cut DNA</text>
                <path d="M-30 0 L-8 0" stroke="#4a90d9" stroke-width="4" stroke-linecap="round"/>
                <path d="M8 0 L30 0" stroke="#4a90d9" stroke-width="4" stroke-linecap="round"/>
                <!-- Gene cut out -->
                <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#ff6b6b" transform="translate(0, 20)"/>
                <!-- Sticky ends -->
                <line x1="-8" y1="-8" x2="-8" y2="0" stroke="#4a90d9" stroke-width="2"/>
                <line x1="8" y1="-8" x2="8" y2="0" stroke="#4a90d9" stroke-width="2"/>
              </g>
              
              <!-- Arrow -->
              <text x="280" y="155" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 3: Plasmid -->
              <g transform="translate(340, 150)">
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#1565c0">Step 3: Plasmid</text>
                <circle cx="0" cy="0" r="25" fill="none" stroke="#4a90d9" stroke-width="3"/>
                <!-- Cut site -->
                <line x1="0" y1="-25" x2="0" y2="-20" stroke="#4a90d9" stroke-width="2"/>
                <line x1="0" y1="25" x2="0" y2="20" stroke="#4a90d9" stroke-width="2"/>
                <!-- Gene inserted -->
                <rect x="-8" y="-25" width="16" height="8" rx="2" fill="#ff6b6b"/>
              </g>
              
              <!-- Arrow -->
              <text x="400" y="155" font-size="20" fill="#1565c0">→</text>
              
              <!-- Step 4: Insert -->
              <g transform="translate(460, 150)">
                <text x="0" y="-50" text-anchor="middle" font-size="12" fill="#1565c0">Step 4: Insert</text>
                <!-- Bacterium -->
                <ellipse cx="0" cy="0" rx="30" ry="20" fill="#4a90d9" opacity="0.3" stroke="#1565c0" stroke-width="2"/>
                <!-- Plasmid -->
                <circle cx="0" cy="0" r="15" fill="none" stroke="#ff6b6b" stroke-width="2"/>
              </g>
              
              <!-- Labels -->
              <text x="300" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#1565c0">Gene is inserted into host bacterium</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Restriction Enzymes",
        objective: "obj_004",
        text: `
          <h3>Restriction Enzymes</h3>
          <p><strong>Restriction enzymes</strong> are proteins that cut DNA at specific sequences. They are essential tools in genetic engineering.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How Restriction Enzymes Work</h4>
              <ul>
                <li>• Recognize specific DNA sequences</li>
                <li>• Cut DNA at those sites</li>
                <li>• Create "sticky ends"</li>
                <li>• Allow insertion of new DNA</li>
                <li>• Example: EcoRI cuts at GAATTC</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sticky Ends</h4>
              <ul>
                <li>• Overhanging single-stranded DNA</li>
                <li>• Complementary to each other</li>
                <li>• Allow DNA fragments to join</li>
                <li>• DNA ligase seals the bonds</li>
                <li>• Creates recombinant DNA</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Fermentation",
        objective: "obj_008",
        text: `
          <h3>Fermentation</h3>
          <p><strong>Fermentation</strong> is a metabolic process that converts sugars into acids, gases, or alcohol using microorganisms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Fermentation</h4>
              <ul>
                <li><strong>Alcoholic fermentation:</strong></li>
                <li>• Yeast converts sugar to alcohol + CO₂</li>
                <li>• Used in beer, wine, bread</li>
                <li><strong>Lactic acid fermentation:</strong></li>
                <li>• Bacteria convert sugar to lactic acid</li>
                <li>• Used in yogurt, cheese, pickles</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Food:</strong> Bread, yogurt, cheese, sauerkraut</li>
                <li>• <strong>Beverages:</strong> Beer, wine, kombucha</li>
                <li>• <strong>Biofuels:</strong> Ethanol production</li>
                <li>• <strong>Industrial:</strong> Citric acid production</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Biotechnology in Medicine",
        objective: "obj_006",
        text: `
          <h3>Medical Biotechnology</h3>
          <p>Biotechnology has revolutionized medicine with new treatments and diagnostics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Pharmaceuticals</h4>
              <ul>
                <li>• <strong>Insulin:</strong> Produced by genetically engineered bacteria</li>
                <li>• <strong>Human growth hormone:</strong> Produced in bacteria</li>
                <li>• <strong>Vaccines:</strong> Recombinant vaccines</li>
                <li>• <strong>Antibodies:</strong> Monoclonal antibodies</li>
                <li>• <strong>Clotting factors:</strong> For hemophilia</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Gene Therapy</h4>
              <ul>
                <li>• Replacing faulty genes</li>
                <li>• Using viruses as vectors</li>
                <li>• Treating genetic disorders</li>
                <li>• Example: SCID treatment</li>
                <li>• Potential for many diseases</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Insulin Production:</strong>
            <ul>
              <li>• Human insulin gene inserted into bacteria</li>
              <li>• Bacteria produce human insulin</li>
              <li>• Insulin is harvested and purified</li>
              <li>• Used to treat diabetes</li>
              <li>• Previously from animals (pig/cow insulin)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Biotechnology in Agriculture",
        objective: "obj_007",
        text: `
          <h3>Agricultural Biotechnology</h3>
          <p>Biotechnology is used to improve crops and livestock.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 GMOs (Genetically Modified Organisms)</h4>
              <ul>
                <li>• Genes from one species inserted into another</li>
                <li>• <strong>Bt corn:</strong> Insect-resistant</li>
                <li>• <strong>Roundup Ready:</strong> Herbicide-resistant</li>
                <li>• <strong>Golden Rice:</strong> Vitamin A-enriched</li>
                <li>• <strong>Arctic Apples:</strong> Non-browning</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits</h4>
              <ul>
                <li>• <strong>Increased yield:</strong> More food production</li>
                <li>• <strong>Pest resistance:</strong> Reduced pesticide use</li>
                <li>• <strong>Drought resistance:</strong> Survive in dry conditions</li>
                <li>• <strong>Nutritional enhancement:</strong> Improved nutrition</li>
                <li>• <strong>Longer shelf life:</strong> Less food waste</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "DNA Fingerprinting",
        objective: "obj_005",
        text: `
          <h3>DNA Fingerprinting</h3>
          <p><strong>DNA fingerprinting</strong> is a technique used to identify individuals based on their unique DNA pattern.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The Process</h4>
              <ul>
                <li>1. Extract DNA from sample</li>
                <li>2. Use restriction enzymes to cut DNA</li>
                <li>3. Separate fragments by gel electrophoresis</li>
                <li>4. Transfer to membrane</li>
                <li>5. Add radioactive probes</li>
                <li>6. Visualize the pattern</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Forensics:</strong> Identifying suspects</li>
                <li>• <strong>Paternity testing:</strong> Determining parents</li>
                <li>• <strong>Immigration:</strong> Proving relationships</li>
                <li>• <strong>Archaeology:</strong> Studying ancient remains</li>
                <li>• <strong>Conservation:</strong> Tracking endangered species</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f5f5f5" rx="10"/>
              
              <!-- Title -->
              <text x="250" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#333">DNA Fingerprinting</text>
              
              <!-- Gel Electrophoresis -->
              <g transform="translate(250, 190)">
                <!-- Gel box -->
                <rect x="-150" y="-80" width="300" height="160" rx="5" fill="#e0e0e0" stroke="#999" stroke-width="2"/>
                <text x="0" y="-95" text-anchor="middle" font-size="14" fill="#333">Gel Electrophoresis Results</text>
                
                <!-- Wells -->
                <rect x="-140" y="-70" width="10" height="20" rx="2" fill="#333"/>
                <rect x="-120" y="-70" width="10" height="20" rx="2" fill="#333"/>
                <rect x="-100" y="-70" width="10" height="20" rx="2" fill="#333"/>
                <rect x="-80" y="-70" width="10" height="20" rx="2" fill="#333"/>
                <rect x="-60" y="-70" width="10" height="20" rx="2" fill="#333"/>
                <rect x="-40" y="-70" width="10" height="20" rx="2" fill="#333"/>
                
                <!-- DNA bands -->
                <!-- Person 1 -->
                <rect x="-135" y="-50" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-135" y="-30" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-135" y="-10" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-135" y="10" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-135" y="80" text-anchor="middle" font-size="10" fill="#333">P1</text>
                
                <!-- Person 2 -->
                <rect x="-115" y="-45" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-115" y="-25" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-115" y="0" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-115" y="20" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-115" y="80" text-anchor="middle" font-size="10" fill="#333">P2</text>
                
                <!-- Person 3 -->
                <rect x="-95" y="-55" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-95" y="-35" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-95" y="-15" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-95" y="5" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-95" y="25" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-95" y="80" text-anchor="middle" font-size="10" fill="#333">P3</text>
                
                <!-- Person 4 -->
                <rect x="-75" y="-40" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-75" y="-20" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-75" y="5" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-75" y="25" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-75" y="80" text-anchor="middle" font-size="10" fill="#333">P4</text>
                
                <!-- Person 5 -->
                <rect x="-55" y="-50" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-55" y="-30" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-55" y="-10" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-55" y="10" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-55" y="30" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-55" y="80" text-anchor="middle" font-size="10" fill="#333">P5</text>
                
                <!-- Person 6 -->
                <rect x="-35" y="-45" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-35" y="-25" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-35" y="0" width="4" height="15" rx="2" fill="#1565c0"/>
                <rect x="-35" y="20" width="4" height="15" rx="2" fill="#1565c0"/>
                <text x="-35" y="80" text-anchor="middle" font-size="10" fill="#333">P6</text>
              </g>
              
              <text x="250" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#666">Each person has a unique DNA pattern</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "CRISPR-Cas9",
        objective: "obj_009",
        text: `
          <h3>CRISPR-Cas9 Gene Editing</h3>
          <p><strong>CRISPR-Cas9</strong> is a revolutionary gene-editing tool that allows scientists to make precise changes to DNA.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How CRISPR Works</h4>
              <ul>
                <li>• <strong>Guide RNA:</strong> Finds the target DNA</li>
                <li>• <strong>Cas9 protein:</strong> Cuts the DNA</li>
                <li>• Cell repairs the cut</li>
                <li>• New DNA can be inserted</li>
                <li>• Precise editing is possible</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Medicine:</strong> Correcting genetic diseases</li>
                <li>• <strong>Agriculture:</strong> Creating improved crops</li>
                <li>• <strong>Research:</strong> Understanding gene function</li>
                <li>• <strong>Conservation:</strong> Saving endangered species</li>
                <li>• <strong>Biotech:</strong> Producing new drugs</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Advantages of CRISPR:</strong>
            <ul>
              <li>• <strong>Precise:</strong> Can target specific genes</li>
              <li>• <strong>Efficient:</strong> Works in many cell types</li>
              <li>• <strong>Versatile:</strong> Can add, remove, or change genes</li>
              <li>• <strong>Cheaper:</strong> Lower cost than previous methods</li>
              <li>• <strong>Faster:</strong> Quicker than traditional methods</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Biotechnology and the Environment",
        objective: "obj_011",
        text: `
          <h3>Environmental Biotechnology</h3>
          <p>Biotechnology is used to solve environmental problems.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Bioremediation</h4>
              <ul>
                <li>• Using microorganisms to clean up pollution</li>
                <li>• <strong>Oil spills:</strong> Bacteria break down oil</li>
                <li>• <strong>Heavy metals:</strong> Microbes absorb metals</li>
                <li>• <strong>Plastics:</strong> Bacteria can digest some plastics</li>
                <li>• <strong>Wastewater treatment:</strong> Cleaning water</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Biosensors</h4>
              <ul>
                <li>• Using biological components to detect pollutants</li>
                <li>• <strong>Bacteria:</strong> Detect toxins in water</li>
                <li>• <strong>Enzymes:</strong> Detect specific chemicals</li>
                <li>• <strong>Antibodies:</strong> Detect pathogens</li>
                <li>• Used for monitoring the environment</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Ethical Issues in Biotechnology",
        objective: "obj_010",
        text: `
          <h3>Ethical Issues</h3>
          <p>Biotechnology raises important ethical questions that society must address.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Ethical Questions</h4>
              <ul>
                <li>• Should we genetically modify humans?</li>
                <li>• Should we clone animals or humans?</li>
                <li>• Should we patent genes?</li>
                <li>• Should we create "designer babies"?</li>
                <li>• Should GMOs be labeled?</li>
                <li>• Who decides what is allowed?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Debate Points</h4>
              <ul>
                <li><strong>For:</strong></li>
                <li>• Cure diseases</li>
                <li>• Improve food production</li>
                <li>• Save endangered species</li>
                <li><strong>Against:</strong></li>
                <li>• Playing God</li>
                <li>• Unknown consequences</li>
                <li>• Inequality concerns</li>
                <li>• Safety concerns</li>
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
          <h4>🧪 Biotechnology Basics</h4>
          <ul>
            <li>• Uses living organisms to make products</li>
            <li>• Genetic engineering modifies DNA</li>
            <li>• Fermentation is a traditional technique</li>
            <li>• GMOs are used in agriculture</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Applications</h4>
          <ul>
            <li>• Medicine: Insulin, gene therapy</li>
            <li>• Agriculture: GMO crops</li>
            <li>• Forensics: DNA fingerprinting</li>
            <li>• Environment: Bioremediation</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Biotechnology has enormous potential, but we must consider the ethical implications and use it responsibly.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "GMOs are unnatural",
        correction: "Genetic modification occurs naturally in nature",
        explanation: "Genetic exchange between species happens naturally, and humans have been modifying organisms for thousands of years."
      },
      {
        id: "mis_002",
        misconception: "All GMOs are dangerous",
        correction: "GMOs are extensively tested for safety",
        explanation: "GMOs must pass rigorous safety testing before being approved."
      },
      {
        id: "mis_003",
        misconception: "DNA fingerprinting is 100% accurate",
        correction: "It is highly accurate but not infallible",
        explanation: "While very reliable, contamination or errors can occur."
      },
      {
        id: "mis_004",
        misconception: "CRISPR can be used to create humans",
        correction: "Human genome editing is heavily regulated",
        explanation: "Editing human embryos is restricted in most countries."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medical Treatments",
        description: "Biotechnology produces life-saving drugs.",
        example: "Insulin, vaccines, antibodies"
      },
      {
        id: "app_002",
        title: "Food Production",
        description: "Biotechnology improves food quality and quantity.",
        example: "GMO crops, fermentation products"
      },
      {
        id: "app_003",
        title: "Environmental Cleanup",
        description: "Biotechnology cleans up pollution.",
        example: "Bioremediation, biosensors"
      },
      {
        id: "app_004",
        title: "Forensic Science",
        description: "Biotechnology helps solve crimes.",
        example: "DNA fingerprinting"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Biotechnology", definition: "Use of living organisms to make products." },
    { term: "Genetic Engineering", definition: "Direct manipulation of an organism's genes." },
    { term: "DNA Fingerprinting", definition: "Technique to identify individuals by their DNA." },
    { term: "GMO", definition: "Genetically Modified Organism." },
    { term: "CRISPR", definition: "Gene-editing tool using Cas9 protein." },
    { term: "Plasmid", definition: "Small circular DNA molecule in bacteria." },
    { term: "Vector", definition: "Carrier used to transfer DNA." },
    { term: "Restriction Enzyme", definition: "Enzyme that cuts DNA at specific sites." },
    { term: "DNA Ligase", definition: "Enzyme that joins DNA fragments." },
    { term: "Fermentation", definition: "Metabolic process using microorganisms." },
    { term: "Gene Therapy", definition: "Treating diseases by modifying genes." },
    { term: "Bioremediation", definition: "Using organisms to clean up pollution." },
    { term: "Biosensor", definition: "Device using biological components to detect substances." },
    { term: "Recombinant DNA", definition: "DNA from multiple sources combined." },
    { term: "Clone", definition: "An identical copy of an organism or gene." },
    { term: "Transgenic", definition: "An organism containing genes from another species." },
    { term: "Selective Breeding", definition: "Breeding organisms for desired traits." },
    { term: "Ethics", definition: "Moral principles guiding decisions." }
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
      question: "What is biotechnology?",
      type: "multiple_choice",
      options: [
        "The study of cells",
        "The use of living organisms to make products",
        "The study of ecosystems",
        "The study of evolution"
      ],
      answer: "The use of living organisms to make products",
      explanation: "Biotechnology uses living organisms or their components to develop products."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is an example of traditional biotechnology?",
      type: "multiple_choice",
      options: [
        "CRISPR",
        "Insulin production",
        "Fermentation (beer, bread)",
        "Gene therapy"
      ],
      answer: "Fermentation (beer, bread)",
      explanation: "Fermentation has been used for thousands of years."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is genetic engineering?",
      type: "multiple_choice",
      options: [
        "The natural evolution of species",
        "Direct manipulation of genes",
        "Selective breeding",
        "Fermentation"
      ],
      answer: "Direct manipulation of genes",
      explanation: "Genetic engineering is the direct manipulation of an organism's genes."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What do restriction enzymes do?",
      type: "multiple_choice",
      options: [
        "Join DNA fragments together",
        "Cut DNA at specific sequences",
        "Copy DNA",
        "Insert genes into cells"
      ],
      answer: "Cut DNA at specific sequences",
      explanation: "Restriction enzymes cut DNA at specific recognition sites."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is DNA fingerprinting used for?",
      type: "multiple_choice",
      options: [
        "Identifying individuals",
        "Growing crops",
        "Making bread",
        "Cleaning pollution"
      ],
      answer: "Identifying individuals",
      explanation: "DNA fingerprinting identifies individuals based on their unique DNA pattern."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How is insulin produced using biotechnology?",
      type: "multiple_choice",
      options: [
        "Extracted from animals",
        "Produced by genetically engineered bacteria",
        "Synthesized chemically",
        "Extracted from plants"
      ],
      answer: "Produced by genetically engineered bacteria",
      explanation: "Human insulin is produced by genetically engineered bacteria."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a GMO?",
      type: "multiple_choice",
      options: [
        "An organism that grows naturally",
        "An organism whose genes have been modified",
        "An organism that is extinct",
        "An organism that lives in water"
      ],
      answer: "An organism whose genes have been modified",
      explanation: "A GMO is a genetically modified organism."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is fermentation?",
      type: "multiple_choice",
      options: [
        "A way to kill bacteria",
        "A metabolic process using microorganisms",
        "A type of genetic engineering",
        "A DNA analysis technique"
      ],
      answer: "A metabolic process using microorganisms",
      explanation: "Fermentation is a metabolic process that uses microorganisms to convert sugars."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What does CRISPR-Cas9 do?",
      type: "multiple_choice",
      options: [
        "Cuts DNA at specific locations",
        "Joins DNA fragments together",
        "Copies DNA",
        "Stores DNA"
      ],
      answer: "Cuts DNA at specific locations",
      explanation: "CRISPR-Cas9 is a tool for precise gene editing."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a major ethical concern about biotechnology?",
      type: "multiple_choice",
      options: [
        "It is too expensive",
        "It could be used to 'design' babies",
        "It doesn't work",
        "It only affects plants"
      ],
      answer: "It could be used to 'design' babies",
      explanation: "Designer babies raise serious ethical concerns."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is bioremediation?",
      type: "multiple_choice",
      options: [
        "Using living organisms to clean up pollution",
        "Creating new organisms",
        "Studying the environment",
        "Analyzing DNA"
      ],
      answer: "Using living organisms to clean up pollution",
      explanation: "Bioremediation uses microorganisms to clean up environmental pollution."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the difference between genetic engineering and selective breeding?",
      type: "multiple_choice",
      options: [
        "They are the same thing",
        "Genetic engineering directly modifies DNA; selective breeding selects for traits",
        "Selective breeding modifies DNA; genetic engineering selects for traits",
        "Neither modifies DNA"
      ],
      answer: "Genetic engineering directly modifies DNA; selective breeding selects for traits",
      explanation: "Genetic engineering directly changes DNA, while selective breeding chooses organisms with desired traits."
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is gene therapy?",
      type: "multiple_choice",
      options: [
        "Using drugs to treat diseases",
        "Replacing faulty genes to treat disease",
        "Surgery to remove damaged tissue",
        "Using radiation to treat cancer"
      ],
      answer: "Replacing faulty genes to treat disease",
      explanation: "Gene therapy involves replacing faulty genes to treat genetic disorders."
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is Golden Rice?",
      type: "multiple_choice",
      options: [
        "A naturally occurring rice variety",
        "Rice genetically modified to produce vitamin A",
        "Rice that grows faster",
        "Rice that is pest-resistant"
      ],
      answer: "Rice genetically modified to produce vitamin A",
      explanation: "Golden Rice is genetically modified to produce beta-carotene (vitamin A)."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Where was CRISPR originally discovered?",
      type: "multiple_choice",
      options: [
        "In humans",
        "In plants",
        "In bacteria",
        "In viruses"
      ],
      answer: "In bacteria",
      explanation: "CRISPR was discovered as a bacterial immune system."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_biotechnology",
    title: "Biotechnology Quiz",
    description: "Test your understanding of biotechnology",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is biotechnology?",
        type: "short_answer",
        answer_key: "The use of living organisms to make products",
        explanation: "Biotechnology uses living organisms to develop products."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Give an example of traditional biotechnology.",
        type: "short_answer",
        answer_key: "Fermentation (or any valid example)",
        explanation: "Fermentation is an example of traditional biotechnology."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is genetic engineering?",
        type: "short_answer",
        answer_key: "Direct manipulation of an organism's genes",
        explanation: "Genetic engineering involves directly modifying genes."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What do restriction enzymes do?",
        type: "short_answer",
        answer_key: "Cut DNA at specific sequences",
        explanation: "Restriction enzymes cut DNA at specific recognition sites."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is DNA fingerprinting used for?",
        type: "short_answer",
        answer_key: "Identifying individuals",
        explanation: "DNA fingerprinting identifies individuals based on their unique DNA."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How is insulin produced by biotechnology?",
        type: "short_answer",
        answer_key: "By genetically engineered bacteria",
        explanation: "Human insulin is produced by genetically engineered bacteria."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is a GMO?",
        type: "short_answer",
        answer_key: "A genetically modified organism",
        explanation: "GMOs are organisms whose genes have been modified."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What does CRISPR-Cas9 do?",
        type: "short_answer",
        answer_key: "It cuts DNA at specific locations for gene editing",
        explanation: "CRISPR-Cas9 is a gene-editing tool that cuts DNA at precise locations."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a key ethical concern in biotechnology?",
        type: "short_answer",
        answer_key: "Designer babies (or any valid ethical concern)",
        explanation: "Designer babies and other applications raise ethical questions."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is bioremediation?",
        type: "short_answer",
        answer_key: "Using living organisms to clean up pollution",
        explanation: "Bioremediation uses microorganisms to clean up environmental pollution."
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
        "Understand biotechnology and its applications",
        "Explain genetic engineering process",
        "Describe DNA fingerprinting",
        "Understand ethical issues"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is biotechnology?" },
        { time: "5-10 min", activity: "Direct Instruction - Traditional vs Modern" },
        { time: "10-15 min", activity: "Direct Instruction - Genetic Engineering" },
        { time: "15-20 min", activity: "Direct Instruction - DNA Fingerprinting" },
        { time: "20-25 min", activity: "Direct Instruction - CRISPR" },
        { time: "25-30 min", activity: "Direct Instruction - Medical and Agricultural" },
        { time: "30-35 min", activity: "Direct Instruction - Ethical Issues" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The use of living organisms to make products",
        prac_002: "Fermentation (beer, bread)",
        prac_003: "Direct manipulation of genes",
        prac_004: "Cut DNA at specific sequences",
        prac_005: "Identifying individuals",
        prac_006: "Produced by genetically engineered bacteria",
        prac_007: "An organism whose genes have been modified",
        prac_008: "A metabolic process using microorganisms",
        prac_009: "Cuts DNA at specific locations",
        prac_010: "It could be used to 'design' babies",
        prac_011: "Using living organisms to clean up pollution",
        prac_012: "Genetic engineering directly modifies DNA; selective breeding selects for traits",
        prac_013: "Replacing faulty genes to treat disease",
        prac_014: "Rice genetically modified to produce vitamin A",
        prac_015: "In bacteria"
      },
      assessment: {
        ass_001: "The use of living organisms to make products",
        ass_002: "Fermentation (or any valid example)",
        ass_003: "Direct manipulation of an organism's genes",
        ass_004: "Cut DNA at specific sequences",
        ass_005: "Identifying individuals",
        ass_006: "By genetically engineered bacteria",
        ass_007: "A genetically modified organism",
        ass_008: "It cuts DNA at specific locations for gene editing",
        ass_009: "Designer babies (or any valid ethical concern)",
        ass_010: "Using living organisms to clean up pollution"
      }
    },
    extensionActivities: [
      "Research a biotechnology company",
      "Study the history of insulin production",
      "Research GMO foods in your country",
      "Investigate CRISPR applications",
      "Debate the ethics of genetic engineering"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research gene therapy",
        "Study CRISPR mechanisms",
        "Research biotechnology regulations",
        "Investigate bioethics"
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
      title: "Genetic Engineering",
      description: "Diagram showing genetic engineering process",
      url: "/diagrams/genetic-engineering.png",
      alt: "Genetic engineering diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "DNA Fingerprinting",
      description: "Diagram showing DNA fingerprinting",
      url: "/diagrams/dna-fingerprinting.png",
      alt: "DNA fingerprinting diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "CRISPR-Cas9",
      description: "Diagram showing how CRISPR works",
      url: "/diagrams/crispr.png",
      alt: "CRISPR diagram"
    }
  ]
};