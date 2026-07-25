// Location: src/data/lessons/science/biology/animals.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_animals",
  subject: "Biology",
  topic: "Animals",
  name: "Animals",
  icon: "🐾",
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
    "Understanding of cell biology",
    "Knowledge of evolution",
    "Basic understanding of ecology"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Microorganisms",
      file: "science/biology/microorganisms.js"
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
      description: "Define animals and explain their characteristics",
      indicator: "Student can list the main characteristics of animals"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between vertebrates and invertebrates",
      indicator: "Student can classify animals as vertebrates or invertebrates"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the main groups of vertebrates",
      indicator: "Student can name the five classes of vertebrates"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the characteristics of fish",
      indicator: "Student can explain the features of fish"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the characteristics of amphibians",
      indicator: "Student can explain the features of amphibians"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the characteristics of reptiles",
      indicator: "Student can explain the features of reptiles"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the characteristics of birds",
      indicator: "Student can explain the features of birds"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the characteristics of mammals",
      indicator: "Student can explain the features of mammals"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Explain the major invertebrate phyla",
      indicator: "Student can describe porifera, cnidaria, annelida, arthropoda, and mollusca"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the process of animal development",
      indicator: "Student can describe embryonic development and metamorphosis"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Describe the different body systems in animals",
      indicator: "Student can explain the major organ systems"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain how animals adapt to their environments",
      indicator: "Student can give examples of animal adaptations"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the importance of animals to humans",
      indicator: "Student can discuss the economic and ecological importance of animals"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Compare the different types of symmetry in animals",
      indicator: "Student can distinguish between radial, bilateral, and asymmetrical symmetry"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Animals - The Diversity of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Explore the amazing diversity of animals, from simple sponges to complex mammals."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Animals</h2>
      <p><strong>Animals</strong> are multicellular, eukaryotic organisms that are heterotrophic (they obtain food by consuming other organisms). Animals are incredibly diverse, ranging from simple sponges to complex humans.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🐾 Key Concepts</h3>
          <ul>
            <li>✓ Characteristics of Animals</li>
            <li>✓ Vertebrates vs Invertebrates</li>
            <li>✓ Classification of Animals</li>
            <li>✓ Animal Adaptations</li>
            <li>✓ Importance of Animals</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• There are over 1.5 million animal species</li>
            <li>• 95% of animals are invertebrates</li>
            <li>• The blue whale is the largest animal</li>
            <li>• The smallest animal is a microscopic rotifer</li>
            <li>• Animals have been evolving for 600 million years</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Animals Matter</h4>
        <p>Animals are essential to ecosystems, providing food, pollination, and contributing to biodiversity. They also have significant economic and cultural importance to humans.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Characteristics of Animals",
        objective: "obj_001",
        text: `
          <h3>What Makes an Animal?</h3>
          <p>Animals share several key characteristics that distinguish them from other organisms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Multicellular:</strong> Made of many cells</li>
                <li>• <strong>Eukaryotic:</strong> Cells have a nucleus</li>
                <li>• <strong>Heterotrophic:</strong> Obtain food by consuming others</li>
                <li>• <strong>Motile:</strong> Can move at some life stage</li>
                <li>• <strong>Sensory organs:</strong> Respond to stimuli</li>
                <li>• <strong>Reproduce:</strong> Sexually or asexually</li>
                <li>• <strong>Develop:</strong> Embryonic development</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Animal vs Plant</h4>
              <ul>
                <li><strong>Animals:</strong></li>
                <li>• Cannot produce their own food</li>
                <li>• Can move</li>
                <li>• No cell wall</li>
                <li>• Rapid responses</li>
                <li><strong>Plants:</strong></li>
                <li>• Produce their own food</li>
                <li>• Cannot move</li>
                <li>• Have cell walls</li>
                <li>• Slow responses</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Vertebrates vs Invertebrates",
        objective: "obj_002",
        text: `
          <h3>Vertebrates and Invertebrates</h3>
          <p>Animals are divided into two main groups based on whether they have a backbone.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Vertebrates</h4>
              <ul>
                <li>• Have a backbone (vertebral column)</li>
                <li>• Internal skeleton</li>
                <li>• About 5% of animal species</li>
                <li>• Examples: Fish, amphibians, reptiles, birds, mammals</li>
                <li>• More complex body systems</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Invertebrates</h4>
              <ul>
                <li>• No backbone</li>
                <li>• May have exoskeleton</li>
                <li>• About 95% of animal species</li>
                <li>• Examples: Insects, worms, mollusks, jellyfish</li>
                <li>• Simpler body structure</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Comparison:</strong>
            <ul>
              <li>• Vertebrates: Fish, amphibians, reptiles, birds, mammals</li>
              <li>• Invertebrates: Insects, arachnids, crustaceans, mollusks, worms, sponges, jellyfish</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Animal Symmetry",
        objective: "obj_014",
        text: `
          <h3>Types of Symmetry</h3>
          <p>Animals show different types of body symmetry.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🔵 Asymmetrical</h4>
              <ul>
                <li>• No symmetry</li>
                <li>• Irregular shape</li>
                <li>• Examples: Sponges</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🟠 Radial Symmetry</h4>
              <ul>
                <li>• Symmetrical around a central axis</li>
                <li>• Can be divided into equal parts</li>
                <li>• Examples: Jellyfish, sea stars</li>
                <li>• Sessile or floating animals</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🟣 Bilateral Symmetry</h4>
              <ul>
                <li>• Symmetrical along one plane</li>
                <li>• Left and right halves are mirror images</li>
                <li>• Examples: Humans, insects, fish</li>
                <li>• Active moving animals</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Importance of Symmetry:</strong>
            <ul>
              <li>• <strong>Radial:</strong> Allows sensing from all directions</li>
              <li>• <strong>Bilateral:</strong> Allows efficient movement and directional sensing</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Vertebrate Groups - Fish",
        objective: "obj_004",
        text: `
          <h3>Fish</h3>
          <p><strong>Fish</strong> are aquatic vertebrates that live in water and have gills for breathing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Fish</h4>
              <ul>
                <li>• Aquatic, live in water</li>
                <li>• Gills for breathing</li>
                <li>• Fins for swimming</li>
                <li>• Scales covering the body</li>
                <li>• Cold-blooded (ectothermic)</li>
                <li>• Lay eggs (most species)</li>
                <li>• Streamlined body shape</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Fish</h4>
              <ul>
                <li><strong>Cartilaginous:</strong> Sharks, rays</li>
                <li>• Skeleton of cartilage</li>
                <li>• No swim bladder</li>
                <li><strong>Bony:</strong> Most fish</li>
                <li>• Bony skeleton</li>
                <li>• Have swim bladder</li>
                <li><strong>Jawless:</strong> Lampreys, hagfish</li>
                <li>• Simplest fish</li>
                <li>• No jaws</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Water background -->
              <rect width="600" height="300" fill="#e0f0ff" rx="10"/>
              
              <!-- Fish Body -->
              <ellipse cx="250" cy="150" rx="120" ry="60" fill="#4a90d9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Fish Head -->
              <ellipse cx="160" cy="150" rx="50" ry="50" fill="#4a90d9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Eye -->
              <circle cx="145" cy="135" r="15" fill="white" stroke="#2c5f8a" stroke-width="2"/>
              <circle cx="145" cy="135" r="8" fill="#1a1a2e"/>
              <circle cx="142" cy="132" r="3" fill="white"/>
              
              <!-- Mouth -->
              <path d="M115 155 Q125 165 135 155" stroke="#2c5f8a" stroke-width="2" fill="none"/>
              
              <!-- Gills -->
              <path d="M170 120 Q185 140 170 160" stroke="#2c5f8a" stroke-width="2" fill="none"/>
              <path d="M185 118 Q200 140 185 162" stroke="#2c5f8a" stroke-width="2" fill="none"/>
              
              <!-- Dorsal Fin -->
              <path d="M220 100 L260 65 L300 100" fill="#3a7ab9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Caudal Fin (Tail) -->
              <path d="M365 140 L420 110 L410 150 L420 190 L365 160" fill="#3a7ab9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Pectoral Fin -->
              <path d="M190 180 L210 210 L230 185" fill="#3a7ab9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Ventral Fin -->
              <path d="M260 200 L280 220 L300 200" fill="#3a7ab9" stroke="#2c5f8a" stroke-width="2"/>
              
              <!-- Scales pattern -->
              <circle cx="230" cy="155" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="250" cy="155" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="270" cy="155" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="290" cy="155" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="240" cy="135" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="260" cy="135" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              <circle cx="280" cy="135" r="8" fill="none" stroke="#6aafe6" stroke-width="1.5" opacity="0.6"/>
              
              <!-- Bubbles -->
              <circle cx="110" cy="120" r="6" fill="none" stroke="#87ceeb" stroke-width="1.5"/>
              <circle cx="95" cy="100" r="4" fill="none" stroke="#87ceeb" stroke-width="1.5"/>
              <circle cx="120" cy="90" r="5" fill="none" stroke="#87ceeb" stroke-width="1.5"/>
              
              <!-- Label -->
              <text x="300" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c5f8a">Fish - External Features</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Vertebrate Groups - Amphibians",
        objective: "obj_005",
        text: `
          <h3>Amphibians</h3>
          <p><strong>Amphibians</strong> are vertebrates that live both in water and on land.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Amphibians</h4>
              <ul>
                <li>• Live in water and on land</li>
                <li>• Moist, permeable skin</li>
                <li>• Use skin for gas exchange</li>
                <li>• Cold-blooded (ectothermic)</li>
                <li>• Lay eggs in water</li>
                <li>• Metamorphosis (tadpole to adult)</li>
                <li>• Have lungs as adults</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Frogs:</strong> Smooth skin, long legs for jumping</li>
                <li><strong>Toads:</strong> Warty skin, short legs</li>
                <li><strong>Salamanders:</strong> Elongated body, tail</li>
                <li><strong>Newts:</strong> Like salamanders but more aquatic</li>
                <li><strong>Caecilians:</strong> Legless amphibians</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Life Cycle of a Frog:</strong>
            <ul>
              <li>• <strong>Egg:</strong> Laid in water</li>
              <li>• <strong>Tadpole:</strong> Aquatic, gills, tail</li>
              <li>• <strong>Metamorphosis:</strong> Grows legs, loses tail, develops lungs</li>
              <li>• <strong>Adult:</strong> Terrestrial, lungs, no tail</li>
            </ul>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="400" fill="#f0f9e8" rx="10"/>
              
              <!-- Water -->
              <rect x="0" y="280" width="600" height="120" fill="#87ceeb" rx="0"/>
              
              <!-- Lily Pad -->
              <ellipse cx="150" cy="270" rx="60" ry="20" fill="#2e8b57"/>
              <path d="M150 270 L150 250" stroke="#2e8b57" stroke-width="2"/>
              
              <!-- Frog Body -->
              <ellipse cx="200" cy="250" rx="40" ry="30" fill="#4CAF50" stroke="#2e7d32" stroke-width="2"/>
              
              <!-- Frog Head -->
              <ellipse cx="160" cy="240" rx="30" ry="20" fill="#4CAF50" stroke="#2e7d32" stroke-width="2"/>
              
              <!-- Eyes -->
              <circle cx="145" cy="225" r="10" fill="#4CAF50" stroke="#2e7d32" stroke-width="2"/>
              <circle cx="175" cy="225" r="10" fill="#4CAF50" stroke="#2e7d32" stroke-width="2"/>
              <circle cx="145" cy="225" r="6" fill="white"/>
              <circle cx="175" cy="225" r="6" fill="white"/>
              <circle cx="143" cy="223" r="3" fill="#1a1a2e"/>
              <circle cx="173" cy="223" r="3" fill="#1a1a2e"/>
              
              <!-- Mouth -->
              <path d="M135 248 Q155 258 175 248" stroke="#2e7d32" stroke-width="1.5" fill="none"/>
              
              <!-- Front Legs -->
              <path d="M175 265 L150 280 L140 290" stroke="#4CAF50" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M185 265 L210 280 L220 290" stroke="#4CAF50" stroke-width="4" fill="none" stroke-linecap="round"/>
              
              <!-- Back Legs -->
              <path d="M215 260 L240 275 L250 290" stroke="#4CAF50" stroke-width="5" fill="none" stroke-linecap="round"/>
              <path d="M225 260 L255 275 L260 290" stroke="#4CAF50" stroke-width="5" fill="none" stroke-linecap="round"/>
              
              <!-- Spots -->
              <circle cx="200" cy="245" r="5" fill="#388E3C"/>
              <circle cx="215" cy="255" r="4" fill="#388E3C"/>
              <circle cx="190" cy="260" r="3" fill="#388E3C"/>
              
              <!-- Tadpole -->
              <circle cx="120" cy="310" r="10" fill="#4CAF50"/>
              <path d="M125 310 Q140 310 150 315 Q160 320 170 315" stroke="#4CAF50" stroke-width="2" fill="none"/>
              <circle cx="118" cy="308" r="3" fill="#1a1a2e"/>
              
              <!-- Eggs -->
              <circle cx="50" cy="290" r="8" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1"/>
              <circle cx="70" cy="295" r="8" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1"/>
              <circle cx="60" cy="305" r="8" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1"/>
              
              <!-- Labels -->
              <text x="200" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2e7d32">Amphibian Life Cycle</text>
              <text x="80" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1a1a2e">Eggs</text>
              <text x="140" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1a1a2e">Tadpole</text>
              <text x="200" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#1a1a2e">Adult</text>
              <text x="420" y="350" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2e7d32">Frog Life Cycle</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Vertebrate Groups - Reptiles",
        objective: "obj_006",
        text: `
          <h3>Reptiles</h3>
          <p><strong>Reptiles</strong> are terrestrial vertebrates that have scales and lay eggs with shells.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Reptiles</h4>
              <ul>
                <li>• Dry, scaly skin</li>
                <li>• Terrestrial (live on land)</li>
                <li>• Lay amniotic eggs (shelled)</li>
                <li>• Cold-blooded (ectothermic)</li>
                <li>• Have lungs</li>
                <li>• Internal fertilization</li>
                <li>• Some are aquatic (turtles, crocodiles)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Turtles:</strong> Shell, slow-moving</li>
                <li><strong>Crocodiles:</strong> Large, aquatic predators</li>
                <li><strong>Lizards:</strong> Diverse group</li>
                <li><strong>Snakes:</strong> Legless, elongated</li>
                <li><strong>Tuataras:</strong> Ancient reptiles (New Zealand)</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f5e6d3" rx="10"/>
              
              <!-- Ground -->
              <rect x="0" y="280" width="500" height="70" fill="#c4a882"/>
              
              <!-- Lizard Body -->
              <ellipse cx="250" cy="250" rx="60" ry="25" fill="#8BC34A" stroke="#558B2F" stroke-width="2"/>
              
              <!-- Lizard Head -->
              <ellipse cx="195" cy="245" rx="30" ry="18" fill="#8BC34A" stroke="#558B2F" stroke-width="2"/>
              
              <!-- Eye -->
              <circle cx="185" cy="238" r="6" fill="white"/>
              <circle cx="183" cy="236" r="3" fill="#1a1a2e"/>
              
              <!-- Mouth -->
              <path d="M170 250 L200 250" stroke="#558B2F" stroke-width="1.5"/>
              
              <!-- Body Pattern (Scales) -->
              <circle cx="230" cy="248" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="245" cy="248" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="260" cy="248" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="275" cy="248" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="230" cy="255" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="245" cy="255" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              <circle cx="260" cy="255" r="5" fill="none" stroke="#689F38" stroke-width="1"/>
              
              <!-- Legs -->
              <path d="M220 270 L200 290 L190 300" stroke="#8BC34A" stroke-width="5" fill="none" stroke-linecap="round"/>
              <path d="M280 270 L300 290 L310 300" stroke="#8BC34A" stroke-width="5" fill="none" stroke-linecap="round"/>
              <path d="M210 270 L205 290" stroke="#8BC34A" stroke-width="4" fill="none" stroke-linecap="round"/>
              <path d="M290 270 L295 290" stroke="#8BC34A" stroke-width="4" fill="none" stroke-linecap="round"/>
              
              <!-- Tail -->
              <path d="M310 250 Q330 245 340 260 Q350 275 360 265" stroke="#8BC34A" stroke-width="6" fill="none" stroke-linecap="round"/>
              
              <!-- Ridge along back -->
              <path d="M200 240 Q230 230 260 235 Q290 230 310 240" stroke="#689F38" stroke-width="2" fill="none"/>
              
              <!-- Label -->
              <text x="250" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#558B2F">Lizard (Reptile)</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Vertebrate Groups - Birds",
        objective: "obj_007",
        text: `
          <h3>Birds</h3>
          <p><strong>Birds</strong> are vertebrates with feathers, wings, and beaks. They are endothermic (warm-blooded).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Birds</h4>
              <ul>
                <li>• Feathers</li>
                <li>• Wings (most can fly)</li>
                <li>• Beak (no teeth)</li>
                <li>• Endothermic (warm-blooded)</li>
                <li>• Lay amniotic eggs (shelled)</li>
                <li>• Hollow bones (lightweight)</li>
                <li>• Highly efficient respiratory system</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Songbirds:</strong> Robins, sparrows</li>
                <li><strong>Birds of prey:</strong> Eagles, hawks</li>
                <li><strong>Water birds:</strong> Ducks, geese</li>
                <li><strong>Flightless:</strong> Ostriches, penguins</li>
                <li><strong>Parrots:</strong> Macaws, cockatoos</li>
                <li><strong>Owls:</strong> Nocturnal predators</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#e8f4f8" rx="10"/>
              
              <!-- Sky gradient -->
              <rect width="500" height="250" fill="#b3d9f2" rx="10"/>
              
              <!-- Bird Body -->
              <ellipse cx="230" cy="170" rx="55" ry="30" fill="#FF6B35" stroke="#CC4400" stroke-width="2"/>
              
              <!-- Bird Head -->
              <circle cx="185" cy="155" r="25" fill="#FF6B35" stroke="#CC4400" stroke-width="2"/>
              
              <!-- Eye -->
              <circle cx="178" cy="150" r="8" fill="white" stroke="#CC4400" stroke-width="1"/>
              <circle cx="176" cy="148" r="4" fill="#1a1a2e"/>
              <circle cx="174" cy="146" r="1.5" fill="white"/>
              
              <!-- Beak -->
              <path d="M162 157 L148 162 L162 167" fill="#FFB74D" stroke="#E65100" stroke-width="1"/>
              
              <!-- Wing -->
              <path d="M220 160 Q190 140 160 150 Q180 155 220 170" fill="#E65100" stroke="#BF360C" stroke-width="1.5"/>
              <path d="M230 160 Q200 135 170 145 Q190 150 230 170" fill="#FF8A65" stroke="#BF360C" stroke-width="1"/>
              
              <!-- Tail Feathers -->
              <path d="M280 170 L320 160 L310 175 L330 180 L310 185" fill="#E65100" stroke="#BF360C" stroke-width="1.5"/>
              
              <!-- Legs -->
              <line x1="220" y1="195" x2="210" y2="240" stroke="#E65100" stroke-width="3"/>
              <line x1="240" y1="195" x2="250" y2="240" stroke="#E65100" stroke-width="3"/>
              
              <!-- Feet -->
              <path d="M200 240 L210 240 L215 245 L210 250 L205 245 L200 250 L195 245" stroke="#E65100" stroke-width="2" fill="none"/>
              <path d="M240 240 L250 240 L255 245 L250 250 L245 245 L240 250 L235 245" stroke="#E65100" stroke-width="2" fill="none"/>
              
              <!-- Belly pattern -->
              <ellipse cx="230" cy="178" rx="35" ry="15" fill="#FFCC80" opacity="0.5"/>
              
              <!-- Clouds -->
              <circle cx="80" cy="60" r="30" fill="white" opacity="0.6"/>
              <circle cx="110" cy="55" r="35" fill="white" opacity="0.6"/>
              <circle cx="140" cy="65" r="25" fill="white" opacity="0.6"/>
              
              <circle cx="380" cy="80" r="25" fill="white" opacity="0.6"/>
              <circle cx="410" cy="75" r="30" fill="white" opacity="0.6"/>
              <circle cx="440" cy="85" r="22" fill="white" opacity="0.6"/>
              
              <!-- Label -->
              <text x="250" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#CC4400">Bird (Robin)</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Vertebrate Groups - Mammals",
        objective: "obj_008",
        text: `
          <h3>Mammals</h3>
          <p><strong>Mammals</strong> are vertebrates that have hair or fur and produce milk to feed their young.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Mammals</h4>
              <ul>
                <li>• Hair or fur</li>
                <li>• Mammary glands (produce milk)</li>
                <li>• Endothermic (warm-blooded)</li>
                <li>• Give birth to live young (most)</li>
                <li>• Have a diaphragm</li>
                <li>• Three middle ear bones</li>
                <li>• Highly developed brain</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Mammals</h4>
              <ul>
                <li><strong>Monotremes:</strong> Lay eggs</li>
                <li>• Example: Platypus, echidna</li>
                <li><strong>Marsupials:</strong> Pouched</li>
                <li>• Example: Kangaroo, koala</li>
                <li><strong>Placental:</strong> Most mammals</li>
                <li>• Example: Humans, dogs, whales</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="500" height="350" fill="#f0e6d3" rx="10"/>
              
              <!-- Ground -->
              <rect x="0" y="280" width="500" height="70" fill="#7cb342"/>
              <ellipse cx="250" cy="280" rx="80" ry="15" fill="#8bc34a"/>
              
              <!-- Mammal Body -->
              <ellipse cx="250" cy="240" rx="70" ry="40" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
              
              <!-- Mammal Head -->
              <ellipse cx="185" cy="230" rx="35" ry="30" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
              
              <!-- Snout -->
              <ellipse cx="158" cy="238" rx="18" ry="12" fill="#A1887F" stroke="#5D4037" stroke-width="1"/>
              
              <!-- Nose -->
              <ellipse cx="145" cy="235" rx="6" ry="4" fill="#3E2723"/>
              
              <!-- Eye -->
              <circle cx="180" cy="220" r="8" fill="white" stroke="#5D4037" stroke-width="1"/>
              <circle cx="178" cy="218" r="5" fill="#3E2723"/>
              <circle cx="176" cy="216" r="2" fill="white"/>
              
              <!-- Ear -->
              <ellipse cx="195" cy="210" rx="10" ry="15" fill="#8D6E63" stroke="#5D4037" stroke-width="1"/>
              <ellipse cx="195" cy="212" rx="6" ry="10" fill="#D7CCC8"/>
              
              <!-- Fur texture -->
              <path d="M200 215 Q210 210 220 215" stroke="#5D4037" stroke-width="1" fill="none" opacity="0.5"/>
              <path d="M240 220 Q250 215 260 220" stroke="#5D4037" stroke-width="1" fill="none" opacity="0.5"/>
              <path d="M220 230 Q230 225 240 230" stroke="#5D4037" stroke-width="1" fill="none" opacity="0.5"/>
              
              <!-- Legs -->
              <rect x="210" y="270" width="12" height="30" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="1"/>
              <rect x="240" y="270" width="12" height="30" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="1"/>
              <rect x="265" y="270" width="12" height="30" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="1"/>
              <rect x="295" y="270" width="12" height="30" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="1"/>
              
              <!-- Paws -->
              <ellipse cx="216" cy="302" rx="8" ry="5" fill="#5D4037"/>
              <ellipse cx="246" cy="302" rx="8" ry="5" fill="#5D4037"/>
              <ellipse cx="271" cy="302" rx="8" ry="5" fill="#5D4037"/>
              <ellipse cx="301" cy="302" rx="8" ry="5" fill="#5D4037"/>
              
              <!-- Tail -->
              <path d="M318 240 Q340 235 350 250 Q360 265 370 255" stroke="#8D6E63" stroke-width="8" fill="none" stroke-linecap="round"/>
              
              <!-- Label -->
              <text x="250" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#5D4037">Mammal (Dog)</text>
            </svg>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Invertebrate Phyla",
        objective: "obj_009",
        text: `
          <h3>Major Invertebrate Phyla</h3>
          <p>Invertebrates make up 95% of all animal species and include many diverse groups.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Porifera (Sponges)</h4>
              <ul>
                <li>• Simplest animals</li>
                <li>• Asymmetrical</li>
                <li>• Pores for water flow</li>
                <li>• Filter feeders</li>
                <li>• Sessile (attached)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Cnidaria</h4>
              <ul>
                <li>• Radial symmetry</li>
                <li>• Stinging cells (cnidocytes)</li>
                <li>• Examples: Jellyfish, corals, sea anemones</li>
                <li>• Simple body plan</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Annelida (Segmented Worms)</h4>
              <ul>
                <li>• Segmented body</li>
                <li>• Examples: Earthworms, leeches</li>
                <li>• Bilateral symmetry</li>
                <li>• Found in soil and water</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Arthropoda</h4>
              <ul>
                <li>• Largest phylum</li>
                <li>• Exoskeleton (chitin)</li>
                <li>• Jointed appendages</li>
                <li>• Examples: Insects, spiders, crustaceans</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Mollusca</h4>
              <ul>
                <li>• Soft-bodied</li>
                <li>• Often have shells</li>
                <li>• Examples: Snails, clams, octopus</li>
                <li>• Diverse group</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-3 rounded">
              <h4>📌 Echinodermata</h4>
              <ul>
                <li>• Spiny skin</li>
                <li>• Radial symmetry (adults)</li>
                <li>• Examples: Sea stars, sea urchins</li>
                <li>• Marine only</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="350" fill="#f0f8f0" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2e7d32">Invertebrate Diversity</text>
              
              <!-- Spider (Arthropod) -->
              <g transform="translate(100, 180)">
                <circle cx="0" cy="0" r="20" fill="#4a4a4a"/>
                <circle cx="-15" cy="-10" r="10" fill="#4a4a4a"/>
                <circle cx="-18" cy="-12" r="3" fill="#ff6b6b"/>
                <circle cx="-12" cy="-12" r="3" fill="#ff6b6b"/>
                <!-- Legs -->
                <line x1="-5" y1="15" x2="-25" y2="40" stroke="#4a4a4a" stroke-width="3"/>
                <line x1="5" y1="15" x2="25" y2="40" stroke="#4a4a4a" stroke-width="3"/>
                <line x1="-10" y1="18" x2="-35" y2="35" stroke="#4a4a4a" stroke-width="3"/>
                <line x1="10" y1="18" x2="35" y2="35" stroke="#4a4a4a" stroke-width="3"/>
                <line x1="-15" y1="12" x2="-40" y2="15" stroke="#4a4a4a" stroke-width="2"/>
                <line x1="15" y1="12" x2="40" y2="15" stroke="#4a4a4a" stroke-width="2"/>
                <line x1="-12" y1="10" x2="-35" y2="5" stroke="#4a4a4a" stroke-width="2"/>
                <line x1="12" y1="10" x2="35" y2="5" stroke="#4a4a4a" stroke-width="2"/>
                <text x="0" y="65" text-anchor="middle" font-size="12" fill="#2e7d32">Spider</text>
              </g>
              
              <!-- Jellyfish (Cnidaria) -->
              <g transform="translate(300, 160)">
                <ellipse cx="0" cy="0" rx="35" ry="20" fill="#ff6b9d" opacity="0.7"/>
                <path d="M-25 15 Q-20 45 -15 70" stroke="#ff6b9d" stroke-width="2" fill="none" opacity="0.5"/>
                <path d="M-10 18 Q-5 50 0 75" stroke="#ff6b9d" stroke-width="2" fill="none" opacity="0.5"/>
                <path d="M10 18 Q15 50 20 75" stroke="#ff6b9d" stroke-width="2" fill="none" opacity="0.5"/>
                <path d="M20 15 Q25 45 30 65" stroke="#ff6b9d" stroke-width="2" fill="none" opacity="0.5"/>
                <circle cx="-10" cy="-5" r="5" fill="#ff4081" opacity="0.3"/>
                <circle cx="10" cy="-5" r="5" fill="#ff4081" opacity="0.3"/>
                <text x="0" y="95" text-anchor="middle" font-size="12" fill="#2e7d32">Jellyfish</text>
              </g>
              
              <!-- Snail (Mollusk) -->
              <g transform="translate(500, 190)">
                <ellipse cx="0" cy="0" rx="30" ry="15" fill="#8d6e63"/>
                <path d="M-15 -10 Q0 -35 20 -15" stroke="#6d4c41" stroke-width="8" fill="#a1887f"/>
                <path d="M-10 -10 Q0 -30 15 -12" stroke="#8d6e63" stroke-width="4" fill="none"/>
                <line x1="-25" y1="0" x2="-30" y2="0" stroke="#6d4c41" stroke-width="2"/>
                <line x1="-25" y1="5" x2="-30" y2="5" stroke="#6d4c41" stroke-width="2"/>
                <line x1="-25" y1="10" x2="-30" y2="10" stroke="#6d4c41" stroke-width="2"/>
                <text x="0" y="50" text-anchor="middle" font-size="12" fill="#2e7d32">Snail</text>
              </g>
              
              <!-- Earthworm (Annelid) -->
              <g transform="translate(200, 310)">
                <path d="M-40 0 Q-20 -10 0 0 Q20 10 40 0" stroke="#8d6e63" stroke-width="8" fill="none"/>
                <line x1="-25" y1="-3" x2="-25" y2="3" stroke="#6d4c41" stroke-width="1"/>
                <line x1="-10" y1="-3" x2="-10" y2="3" stroke="#6d4c41" stroke-width="1"/>
                <line x1="5" y1="-3" x2="5" y2="3" stroke="#6d4c41" stroke-width="1"/>
                <line x1="20" y1="-3" x2="20" y2="3" stroke="#6d4c41" stroke-width="1"/>
                <text x="0" y="-20" text-anchor="middle" font-size="12" fill="#2e7d32">Earthworm</text>
              </g>
              
              <!-- Sea Star (Echinoderm) -->
              <g transform="translate(400, 310)">
                <polygon points="0,-30 5,-10 25,-10 10,2 15,22 0,10 -15,22 -10,2 -25,-10 -5,-10" fill="#ff6b35" stroke="#e65100" stroke-width="1"/>
                <circle cx="0" cy="0" r="6" fill="#ff8a65"/>
                <text x="0" y="-40" text-anchor="middle" font-size="12" fill="#2e7d32">Sea Star</text>
              </g>
            </svg>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Animal Adaptations",
        objective: "obj_012",
        text: `
          <h3>Animal Adaptations</h3>
          <p><strong>Adaptations</strong> are traits that help animals survive and reproduce in their environments.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structural Adaptations</h4>
              <ul>
                <li>• <strong>Camouflage:</strong> Blending with environment</li>
                <li>• Example: Chameleons, polar bears</li>
                <li>• <strong>Mimicry:</strong> Resembling another species</li>
                <li>• Example: Viceroy butterfly (mimics monarch)</li>
                <li>• <strong>Body shape:</strong> Streamlined for swimming</li>
                <li>• Example: Dolphins, fish</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Behavioral Adaptations</h4>
              <ul>
                <li>• <strong>Migration:</strong> Moving to better environments</li>
                <li>• Example: Birds, wildebeest</li>
                <li>• <strong>Hibernation:</strong> Winter dormancy</li>
                <li>• Example: Bears, groundhogs</li>
                <li>• <strong>Social behavior:</strong> Living in groups</li>
                <li>• Example: Wolves, bees</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Physiological Adaptations</h4>
              <ul>
                <li>• <strong>Venom/poison:</strong> Defense mechanism</li>
                <li>• Example: Snakes, poison dart frogs</li>
                <li>• <strong>Water conservation:</strong> Desert animals</li>
                <li>• Example: Camels, kangaroo rats</li>
                <li>• <strong>Echolocation:</strong> Using sound to navigate</li>
                <li>• Example: Bats, whales</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Importance of Animals",
        objective: "obj_013",
        text: `
          <h3>Importance of Animals</h3>
          <p>Animals play crucial roles in ecosystems and human society.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Ecological Importance</h4>
              <ul>
                <li>• <strong>Pollination:</strong> Bees, butterflies, birds</li>
                <li>• <strong>Seed dispersal:</strong> Birds, mammals</li>
                <li>• <strong>Nutrient cycling:</strong> Decomposers</li>
                <li>• <strong>Food chains:</strong> Essential for energy flow</li>
                <li>• <strong>Ecosystem balance:</strong> Predator-prey relationships</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Economic Importance</h4>
              <ul>
                <li>• <strong>Food:</strong> Meat, dairy, eggs</li>
                <li>• <strong>Clothing:</strong> Leather, wool, silk</li>
                <li>• <strong>Medicine:</strong> Research and products</li>
                <li>• <strong>Agriculture:</strong> Pollination, pest control</li>
                <li>• <strong>Tourism:</strong> Wildlife viewing</li>
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
          <h4>🐾 Animal Classification</h4>
          <ul>
            <li>• Vertebrates: Fish, amphibians, reptiles, birds, mammals</li>
            <li>• Invertebrates: 95% of all animals</li>
            <li>• Symmetry: Asymmetrical, radial, bilateral</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🌿 Animal Importance</h4>
          <ul>
            <li>• Ecological roles: Pollination, seed dispersal</li>
            <li>• Economic value: Food, clothing, medicine</li>
            <li>• Adaptations: Structural, behavioral, physiological</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Animals are incredibly diverse and essential to life on Earth. Understanding them helps us appreciate and protect biodiversity.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All animals have a backbone",
        correction: "Only vertebrates have backbones",
        explanation: "95% of animals are invertebrates without backbones."
      },
      {
        id: "mis_002",
        misconception: "All reptiles lay eggs on land",
        correction: "Some reptiles give birth to live young",
        explanation: "Some snakes and lizards are viviparous."
      },
      {
        id: "mis_003",
        misconception: "All animals are motile",
        correction: "Some animals are sessile (attached)",
        explanation: "Sponges and corals are examples of sessile animals."
      },
      {
        id: "mis_004",
        misconception: "Birds are not reptiles",
        correction: "Birds evolved from reptiles and share many features",
        explanation: "Birds are considered a subgroup of reptiles in evolutionary terms."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Conservation",
        description: "Protecting animal species and habitats.",
        example: "Endangered species protection"
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Animals provide food and other products.",
        example: "Livestock farming, beekeeping"
      },
      {
        id: "app_003",
        title: "Medicine",
        description: "Animal research helps develop treatments.",
        example: "Testing drugs and vaccines"
      },
      {
        id: "app_004",
        title: "Ecotourism",
        description: "Wildlife viewing supports conservation.",
        example: "Safaris, whale watching"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Vertebrate", definition: "An animal with a backbone." },
    { term: "Invertebrate", definition: "An animal without a backbone." },
    { term: "Ectothermic", definition: "Cold-blooded; relies on environment for heat." },
    { term: "Endothermic", definition: "Warm-blooded; generates internal heat." },
    { term: "Amniotic Egg", definition: "An egg with a shell and membranes." },
    { term: "Metamorphosis", definition: "Transformation from juvenile to adult." },
    { term: "Symmetry", definition: "Balanced arrangement of body parts." },
    { term: "Adaptation", definition: "Trait that helps an organism survive." },
    { term: "Exoskeleton", definition: "External skeleton (e.g., insects)." },
    { term: "Cnidocyte", definition: "Stinging cell found in cnidarians." },
    { term: "Segmentation", definition: "Repeated body segments." },
    { term: "Filter Feeder", definition: "Feeds by filtering particles from water." },
    { term: "Hibernation", definition: "Winter dormancy to conserve energy." },
    { term: "Migration", definition: "Seasonal movement to better environments." },
    { term: "Placental", definition: "Mammals that nourish embryos in the womb." },
    { term: "Marsupial", definition: "Mammals with a pouch for young." },
    { term: "Monotreme", definition: "Egg-laying mammals." }
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
      question: "What is a key characteristic of all animals?",
      type: "multiple_choice",
      options: [
        "They produce their own food",
        "They are heterotrophic",
        "They have backbones",
        "They live on land"
      ],
      answer: "They are heterotrophic",
      explanation: "All animals are heterotrophic - they obtain food by consuming other organisms."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the difference between vertebrates and invertebrates?",
      type: "multiple_choice",
      options: [
        "Vertebrates have a backbone; invertebrates do not",
        "Invertebrates have a backbone; vertebrates do not",
        "Vertebrates live on land; invertebrates live in water",
        "There is no difference"
      ],
      answer: "Vertebrates have a backbone; invertebrates do not",
      explanation: "Vertebrates have a vertebral column (backbone) while invertebrates do not."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which of the following is NOT a class of vertebrates?",
      type: "multiple_choice",
      options: ["Fish", "Amphibians", "Insects", "Birds"],
      answer: "Insects",
      explanation: "Insects are invertebrates, not vertebrates. The five classes of vertebrates are fish, amphibians, reptiles, birds, and mammals."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What do fish use to breathe underwater?",
      type: "multiple_choice",
      options: ["Lungs", "Gills", "Skin", "Trachea"],
      answer: "Gills",
      explanation: "Fish use gills to extract oxygen from water."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is metamorphosis in amphibians?",
      type: "multiple_choice",
      options: [
        "The transformation from egg to adult",
        "The process of hibernation",
        "The migration to warmer areas",
        "The production of venom"
      ],
      answer: "The transformation from egg to adult",
      explanation: "Metamorphosis is the transformation from larval stage (tadpole) to adult in amphibians."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What covers the skin of reptiles?",
      type: "multiple_choice",
      options: ["Feathers", "Fur", "Scales", "Mucus"],
      answer: "Scales",
      explanation: "Reptiles have dry, scaly skin."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a unique feature of birds?",
      type: "multiple_choice",
      options: [
        "They have scales",
        "They have feathers",
        "They lay eggs",
        "They have lungs"
      ],
      answer: "They have feathers",
      explanation: "Feathers are unique to birds."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "How do mammals feed their young?",
      type: "multiple_choice",
      options: [
        "With milk from mammary glands",
        "With regurgitated food",
        "With captured prey",
        "With plant material"
      ],
      answer: "With milk from mammary glands",
      explanation: "Mammals have mammary glands that produce milk to feed their young."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which phylum has the most species?",
      type: "multiple_choice",
      options: ["Mollusca", "Arthropoda", "Chordata", "Cnidaria"],
      answer: "Arthropoda",
      explanation: "Arthropoda is the largest phylum, including insects, spiders, and crustaceans."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the embryonic development stage called?",
      type: "multiple_choice",
      options: [
        "Differentiation",
        "Metamorphosis",
        "Gastrulation",
        "Fertilization"
      ],
      answer: "Gastrulation",
      explanation: "Gastrulation is a key stage in embryonic development where the three germ layers form."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which organ system is responsible for gas exchange in animals?",
      type: "multiple_choice",
      options: [
        "Circulatory system",
        "Respiratory system",
        "Digestive system",
        "Nervous system"
      ],
      answer: "Respiratory system",
      explanation: "The respiratory system is responsible for gas exchange (oxygen and CO₂)."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is an example of a behavioral adaptation in animals?",
      type: "multiple_choice",
      options: [
        "Camouflage",
        "Migration",
        "Venom production",
        "Sharp claws"
      ],
      answer: "Migration",
      explanation: "Migration is a behavioral adaptation where animals move to better environments."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How do animals contribute to agriculture?",
      type: "multiple_choice",
      options: [
        "They provide food only",
        "They pollinate crops and control pests",
        "They destroy crops",
        "They have no role in agriculture"
      ],
      answer: "They pollinate crops and control pests",
      explanation: "Animals like bees pollinate crops, and others help control agricultural pests."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What type of symmetry do humans have?",
      type: "multiple_choice",
      options: [
        "Asymmetrical",
        "Radial symmetry",
        "Bilateral symmetry",
        "No symmetry"
      ],
      answer: "Bilateral symmetry",
      explanation: "Humans have bilateral symmetry - left and right halves are mirror images."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "What are the stinging cells called in cnidarians?",
      type: "multiple_choice",
      options: ["Nematocysts", "Spongins", "Cnidocytes", "Both A and C"],
      answer: "Both A and C",
      explanation: "Cnidarians have stinging cells called cnidocytes which contain nematocysts."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_animals",
    title: "Animals Quiz",
    description: "Test your understanding of animals",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the key characteristic of animals?",
        type: "short_answer",
        answer_key: "Animals are heterotrophic (they eat other organisms)",
        explanation: "Animals cannot produce their own food and must consume other organisms."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between vertebrates and invertebrates?",
        type: "short_answer",
        answer_key: "Vertebrates have a backbone; invertebrates do not",
        explanation: "Vertebrates have a vertebral column while invertebrates lack one."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Name the five classes of vertebrates.",
        type: "short_answer",
        answer_key: "Fish, amphibians, reptiles, birds, and mammals",
        explanation: "The five classes of vertebrates are fish, amphibians, reptiles, birds, and mammals."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What do fish use to breathe underwater?",
        type: "short_answer",
        answer_key: "Gills",
        explanation: "Fish use gills to extract oxygen from water."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is metamorphosis in amphibians?",
        type: "short_answer",
        answer_key: "Transformation from larval stage to adult",
        explanation: "Metamorphosis is the transformation from tadpole to adult frog or toad."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What covers the skin of reptiles?",
        type: "short_answer",
        answer_key: "Scales",
        explanation: "Reptiles have dry, scaly skin that prevents water loss."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is unique to birds?",
        type: "short_answer",
        answer_key: "Feathers",
        explanation: "Feathers are unique to birds and help with flight, insulation, and display."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "medium",
        question: "How do mammals feed their young?",
        type: "short_answer",
        answer_key: "With milk from mammary glands",
        explanation: "Mammals produce milk to feed their young, which is why they are called mammals."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the largest animal phylum?",
        type: "short_answer",
        answer_key: "Arthropoda",
        explanation: "Arthropoda is the largest phylum, with insects being the most diverse group."
      },
      {
        id: "ass_010",
        objective: "obj_014",
        difficulty: "hard",
        question: "What type of symmetry do humans have?",
        type: "short_answer",
        answer_key: "Bilateral symmetry",
        explanation: "Humans have bilateral symmetry, meaning the left and right sides are mirror images."
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
        "Understand animal characteristics",
        "Distinguish between vertebrates and invertebrates",
        "Identify vertebrate classes",
        "Understand animal importance"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are animals?" },
        { time: "5-10 min", activity: "Direct Instruction - Characteristics of Animals" },
        { time: "10-15 min", activity: "Direct Instruction - Vertebrates vs Invertebrates" },
        { time: "15-20 min", activity: "Direct Instruction - Vertebrate Groups" },
        { time: "20-25 min", activity: "Direct Instruction - Invertebrate Phyla" },
        { time: "25-30 min", activity: "Direct Instruction - Animal Adaptations" },
        { time: "30-35 min", activity: "Direct Instruction - Importance of Animals" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "They are heterotrophic",
        prac_002: "Vertebrates have a backbone; invertebrates do not",
        prac_003: "Insects",
        prac_004: "Gills",
        prac_005: "The transformation from egg to adult",
        prac_006: "Scales",
        prac_007: "They have feathers",
        prac_008: "With milk from mammary glands",
        prac_009: "Arthropoda",
        prac_010: "Gastrulation",
        prac_011: "Respiratory system",
        prac_012: "Migration",
        prac_013: "They pollinate crops and control pests",
        prac_014: "Bilateral symmetry",
        prac_015: "Both A and C"
      },
      assessment: {
        ass_001: "Animals are heterotrophic (they eat other organisms)",
        ass_002: "Vertebrates have a backbone; invertebrates do not",
        ass_003: "Fish, amphibians, reptiles, birds, and mammals",
        ass_004: "Gills",
        ass_005: "Transformation from larval stage to adult",
        ass_006: "Scales",
        ass_007: "Feathers",
        ass_008: "With milk from mammary glands",
        ass_009: "Arthropoda",
        ass_010: "Bilateral symmetry"
      }
    },
    extensionActivities: [
      "Research a specific animal group",
      "Create a classification chart",
      "Study animal adaptations in your area",
      "Visit a zoo or aquarium",
      "Research endangered species"
    ],
    differentiation: {
      struggling: [
        "Focus on common animal groups",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research animal evolution",
        "Study comparative anatomy",
        "Research animal behavior",
        "Study endangered species conservation"
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
      title: "Animal Classification",
      description: "Diagram showing animal classification",
      url: "/diagrams/animal-classification.png",
      alt: "Animal classification diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Vertebrate Classes",
      description: "Diagram of vertebrate classes",
      url: "/diagrams/vertebrate-classes.png",
      alt: "Vertebrate classes diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Animal Symmetry",
      description: "Types of animal symmetry",
      url: "/diagrams/animal-symmetry.png",
      alt: "Animal symmetry diagram"
    }
  ]
};