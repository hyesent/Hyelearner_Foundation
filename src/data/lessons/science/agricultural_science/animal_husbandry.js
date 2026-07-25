// Location: src/data/lessons/science/agricultural_science/animal_husbandry.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "agri_lesson_animal_husbandry",
  subject: "Agricultural Science",
  topic: "Animal Husbandry",
  name: "Animal Husbandry",
  icon: "🐄",
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
    "Understanding of animal biology",
    "Knowledge of basic animal care",
    "Interest in livestock farming",
    "Understanding of farm management"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Soil Science",
      file: "science/agricultural_science/soil_science.js"
    },
    {
      name: "Farm Management",
      file: "science/agricultural_science/farm_management.js"
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
      description: "Define animal husbandry and explain its importance",
      indicator: "Student can explain what animal husbandry is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify different types of farm animals",
      indicator: "Student can classify animals by their uses and characteristics"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the importance of livestock in agriculture",
      indicator: "Student can describe the role of animals in farming"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the systems of animal production",
      indicator: "Student can explain intensive and extensive systems"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain animal breeding and reproduction",
      indicator: "Student can describe breeding methods and reproductive cycles"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe animal nutrition and feeding",
      indicator: "Student can explain feed types and nutritional requirements"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain housing and equipment for farm animals",
      indicator: "Student can describe different types of animal housing"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe animal health management",
      indicator: "Student can explain disease prevention and treatment"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain livestock product management",
      indicator: "Student can describe milk, meat, and egg production"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the economics of animal husbandry",
      indicator: "Student can discuss costs and returns in livestock farming"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Analyze the challenges of animal husbandry",
      indicator: "Student can describe problems facing livestock farmers"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain sustainable animal husbandry practices",
      indicator: "Student can describe environmentally friendly livestock farming"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the role of technology in animal husbandry",
      indicator: "Student can describe modern livestock technologies"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe the importance of animal welfare",
      indicator: "Student can explain humane treatment of animals"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the nutritional value of livestock products",
      indicator: "Student can describe the importance of animal protein in diets"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze the importance of animal husbandry to the economy",
      indicator: "Student can discuss the economic significance of livestock"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Animal Husbandry - Caring for Farm Animals",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about animal husbandry, from breeding to product management."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Animal Husbandry</h2>
      <p><strong>Animal husbandry</strong> is the branch of agriculture concerned with the care, breeding, and management of farm animals. It involves the production of livestock such as cattle, sheep, goats, pigs, and poultry for food, fiber, and other products.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🐄 Key Concepts</h3>
          <ul>
            <li>✓ Types of Livestock</li>
            <li>✓ Production Systems</li>
            <li>✓ Breeding and Reproduction</li>
            <li>✓ Nutrition and Feeding</li>
            <li>✓ Animal Health</li>
            <li>✓ Housing and Equipment</li>
            <li>✓ Livestock Products</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Nigeria has over 20 million cattle</li>
            <li>• Livestock provides 30% of agricultural GDP</li>
            <li>• Poultry is the fastest-growing livestock sector</li>
            <li>• Animal products are rich in protein</li>
            <li>• Goats are important for small-scale farmers</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Animal Husbandry Matters</h4>
        <p>Animal husbandry provides food (meat, milk, eggs), fiber (wool), power (draught animals), and manure for crops. It is essential for food security and rural livelihoods.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Farm Animals",
        objective: "obj_002",
        text: `
          <h3>Classification of Farm Animals</h3>
          <p>Farm animals can be classified in several ways based on their use and characteristics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Based on Use</h4>
              <ul>
                <li>• <strong>Food animals:</strong> Meat, milk, eggs</li>
                <li>• <strong>Work animals:</strong> Draught power</li>
                <li>• <strong>Fiber animals:</strong> Wool, hair</li>
                <li>• <strong>Companion animals:</strong> Pets, guard animals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Based on Digestive System</h4>
              <ul>
                <li>• <strong>Ruminants:</strong> Cattle, sheep, goats</li>
                <li>• <strong>Non-ruminants:</strong> Pigs, poultry, rabbits</li>
                <li>• <strong>Monogastric:</strong> Simple stomach</li>
                <li>• <strong>Polygastric:</strong> Multiple stomach chambers</li>
              </ul>
            </div>
          </div>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Animal Type</th>
                <th class="border p-2">Examples</th>
                <th class="border p-2">Products</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">Cattle</td>
                <td class="border p-2">Friesian, N'dama, Sokoto Gudali</td>
                <td class="border p-2">Meat, milk, hides</td>
              </tr>
              <tr>
                <td class="border p-2">Sheep</td>
                <td class="border p-2">Yankasa, Uda, Balami</td>
                <td class="border p-2">Meat, milk, wool</td>
              </tr>
              <tr>
                <td class="border p-2">Goats</td>
                <td class="border p-2">West African Dwarf, Sahelian</td>
                <td class="border p-2">Meat, milk, skin</td>
              </tr>
              <tr>
                <td class="border p-2">Pigs</td>
                <td class="border p-2">Large White, Landrace</td>
                <td class="border p-2">Meat, lard, bristles</td>
              </tr>
              <tr>
                <td class="border p-2">Poultry</td>
                <td class="border p-2">Chickens, turkeys, ducks</td>
                <td class="border p-2">Meat, eggs, feathers</td>
              </tr>
              <tr>
                <td class="border p-2">Rabbits</td>
                <td class="border p-2">New Zealand White</td>
                <td class="border p-2">Meat, fur</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_002",
        title: "Production Systems",
        objective: "obj_004",
        text: `
          <h3>Systems of Animal Production</h3>
          <p>There are different systems of animal production depending on scale and resources.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Extensive System</h4>
              <ul>
                <li>• Animals roam freely</li>
                <li>• Low input, low output</li>
                <li>• Natural grazing</li>
                <li>• Example: Pastoralism</li>
                <li>• Traditional herding</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Intensive System</h4>
              <ul>
                <li>• Confined animals</li>
                <li>• High input, high output</li>
                <li>• Controlled feeding</li>
                <li>• Example: Feedlots</li>
                <li>• Commercial poultry</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Semi-Intensive System</h4>
              <ul>
                <li>• Combination of both</li>
                <li>• Animals have some freedom</li>
                <li>• Supplementary feeding</li>
                <li>• Example: Small-scale farms</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Integrated System</h4>
              <ul>
                <li>• Animals and crops combined</li>
                <li>• Manure used as fertilizer</li>
                <li>• Crop residues feed animals</li>
                <li>• Example: Mixed farming</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Animal Breeding",
        objective: "obj_005",
        text: `
          <h3>Breeding and Reproduction</h3>
          <p>Breeding is essential for improving livestock productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Breeding Methods</h4>
              <ul>
                <li>• <strong>Natural breeding:</strong> Natural mating</li>
                <li>• <strong>Artificial insemination:</strong> Assisted breeding</li>
                <li>• <strong>Embryo transfer:</strong> Advanced technique</li>
                <li>• <strong>Crossbreeding:</strong> Different breeds</li>
                <li>• <strong>Inbreeding:</strong> Related animals</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Reproductive Cycle</h4>
              <ul>
                <li>• <strong>Puberty:</strong> Sexual maturity</li>
                <li>• <strong>Estrus:</strong> Heat period</li>
                <li>• <strong>Ovulation:</strong> Egg release</li>
                <li>• <strong>Gestation:</strong> Pregnancy period</li>
                <li>• <strong>Parturition:</strong> Birth</li>
                <li>• <strong>Lactation:</strong> Milk production</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Gestation Periods:</strong>
            <ul>
              <li>• <strong>Cattle:</strong> 9 months (283 days)</li>
              <li>• <strong>Sheep:</strong> 5 months (150 days)</li>
              <li>• <strong>Goats:</strong> 5 months (150 days)</li>
              <li>• <strong>Pigs:</strong> 3 months 3 weeks 3 days (114 days)</li>
              <li>• <strong>Poultry:</strong> 21 days (incubation)</li>
              <li>• <strong>Rabbits:</strong> 30-31 days</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Animal Nutrition",
        objective: "obj_006",
        text: `
          <h3>Nutrition and Feeding</h3>
          <p>Proper nutrition is essential for animal health and productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Feed Types</h4>
              <ul>
                <li>• <strong>Concentrates:</strong> Grains, protein meals</li>
                <li>• <strong>Roughages:</strong> Hay, silage, grass</li>
                <li>• <strong>Supplements:</strong> Minerals, vitamins</li>
                <li>• <strong>Fodder:</strong> Napier grass, alfalfa</li>
                <li>• <strong>Silage:</strong> Fermented forage</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nutritional Requirements</h4>
              <ul>
                <li>• <strong>Energy:</strong> Carbohydrates, fats</li>
                <li>• <strong>Protein:</strong> Amino acids</li>
                <li>• <strong>Minerals:</strong> Calcium, phosphorus, salt</li>
                <li>• <strong>Vitamins:</strong> A, D, E, K</li>
                <li>• <strong>Water:</strong> Essential for life</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Animal Housing",
        objective: "obj_007",
        text: `
          <h3>Housing and Equipment</h3>
          <p>Proper housing protects animals from weather and predators.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Housing</h4>
              <ul>
                <li>• <strong>Pens:</strong> For pigs, sheep, goats</li>
                <li>• <strong>Stalls:</strong> For cattle</li>
                <li>• <strong>Coops:</strong> For poultry</li>
                <li>• <strong>Barns:</strong> General shelter</li>
                <li>• <strong>Feedlots:</strong> Intensive housing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Requirements</h4>
              <ul>
                <li>• <strong>Ventilation:</strong> Fresh air</li>
                <li>• <strong>Drainage:</strong> Dry floors</li>
                <li>• <strong>Protection:</strong> From predators</li>
                <li>• <strong>Space:</strong> Adequate room</li>
                <li>• <strong>Sanitation:</strong> Easy to clean</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Animal Health Management",
        objective: "obj_008",
        text: `
          <h3>Animal Health Management</h3>
          <p>Healthy animals are more productive and profitable.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Diseases</h4>
              <ul>
                <li>• <strong>Foot-and-mouth disease:</strong> Cattle, sheep, goats</li>
                <li>• <strong>Newcastle disease:</strong> Poultry</li>
                <li>• <strong>African swine fever:</strong> Pigs</li>
                <li>• <strong>Trypanosomiasis:</strong> Cattle (sleeping sickness)</li>
                <li>• <strong>Mastitis:</strong> Udder infection</li>
                <li>• <strong>Internal parasites:</strong> Worms</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Disease Prevention</h4>
              <ul>
                <li>• <strong>Vaccination:</strong> Preventive immunization</li>
                <li>• <strong>Quarantine:</strong> Isolating sick animals</li>
                <li>• <strong>Hygiene:</strong> Clean environment</li>
                <li>• <strong>Nutrition:</strong> Strong immune system</li>
                <li>• <strong>Deworming:</strong> Parasite control</li>
                <li>• <strong>Regular inspection:</strong> Monitoring health</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Livestock Products",
        objective: "obj_009",
        text: `
          <h3>Livestock Product Management</h3>
          <p>Livestock products are valuable commodities that require proper handling.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Milk Production</h4>
              <ul>
                <li>• From dairy cattle, goats, sheep</li>
                <li>• Milking methods</li>
                <li>• Storage: Refrigeration</li>
                <li>• Processing: Pasteurization</li>
                <li>• Products: Cheese, yogurt</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Meat Production</h4>
              <ul>
                <li>• From all livestock</li>
                <li>• Slaughtering methods</li>
                <li>• Storage: Refrigeration, freezing</li>
                <li>• Processing: Butchering</li>
                <li>• Products: Beef, pork, poultry</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Egg Production</h4>
              <ul>
                <li>• From poultry</li>
                <li>• Collection: Daily</li>
                <li>• Storage: Refrigeration</li>
                <li>• Grading: By size</li>
                <li>• Products: Shell eggs, processed</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Sustainable Animal Husbandry",
        objective: "obj_012",
        text: `
          <h3>Sustainable Animal Husbandry</h3>
          <p>Sustainable practices protect the environment and ensure long-term productivity.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles</h4>
              <ul>
                <li>• <strong>Pasture management:</strong> Prevent overgrazing</li>
                <li>• <strong>Manure management:</strong> Use as fertilizer</li>
                <li>• <strong>Water conservation:</strong> Efficient use</li>
                <li>• <strong>Genetic diversity:</strong> Indigenous breeds</li>
                <li>• <strong>Animal welfare:</strong> Humane treatment</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practices</h4>
              <ul>
                <li>• <strong>Rotational grazing:</strong> Move livestock regularly</li>
                <li>• <strong>Feed efficiency:</strong> Reduce waste</li>
                <li>• <strong>Manure composting:</strong> Organic fertilizer</li>
                <li>• <strong>Agroforestry:</strong> Trees and livestock</li>
                <li>• <strong>Integrated farming:</strong> Animals and crops</li>
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
          <h4>🐄 Animal Husbandry</h4>
          <ul>
            <li>• Care and management of farm animals</li>
            <li>• Different livestock types</li>
            <li>• Production systems vary by scale</li>
            <li>• Breeding improves productivity</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Practices</h4>
          <ul>
            <li>• Proper nutrition is essential</li>
            <li>• Health management prevents diseases</li>
            <li>• Housing protects animals</li>
            <li>• Sustainable practices protect the environment</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Animal husbandry is vital for food production and rural livelihoods. Good management practices lead to healthy animals and profitable farming.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All livestock can be raised in the same way",
        correction: "Different animals have different requirements",
        explanation: "Each species has specific needs for housing, feeding, and care."
      },
      {
        id: "mis_002",
        misconception: "Animals don't need clean water",
        correction: "Clean water is essential for animal health",
        explanation: "Animals need access to clean, fresh water at all times."
      },
      {
        id: "mis_003",
        misconception: "Vaccination is not necessary for animals",
        correction: "Vaccination prevents serious diseases",
        explanation: "Vaccination is essential for preventing disease outbreaks."
      },
      {
        id: "mis_004",
        misconception: "Intensive farming is always bad",
        correction: "Intensive farming can be productive and humane",
        explanation: "Intensive systems can be managed humanely with proper practices."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Food Production",
        description: "Livestock provides protein-rich food.",
        example: "Meat, milk, eggs"
      },
      {
        id: "app_002",
        title: "Income Generation",
        description: "Animal farming provides income.",
        example: "Sale of animals and products"
      },
      {
        id: "app_003",
        title: "Employment",
        description: "Animal husbandry provides jobs.",
        example: "Herding, processing, marketing"
      },
      {
        id: "app_004",
        title: "Soil Fertility",
        description: "Manure improves soil.",
        example: "Organic fertilizer"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Animal Husbandry", definition: "The care and management of farm animals." },
    { term: "Ruminant", definition: "An animal with a multi-chambered stomach (cattle, sheep, goats)." },
    { term: "Monogastric", definition: "An animal with a single-chambered stomach (pigs, poultry)." },
    { term: "Breeding", definition: "The process of mating animals for desired traits." },
    { term: "Gestation", definition: "The period of pregnancy in animals." },
    { term: "Lactation", definition: "The production of milk by mammals." },
    { term: "Concentrate", definition: "A high-nutrient feed." },
    { term: "Roughage", definition: "A bulky, low-nutrient feed." },
    { term: "Vaccination", definition: "Administration of a vaccine to prevent disease." },
    { term: "Quarantine", definition: "Isolation of sick animals." },
    { term: "Mastitis", definition: "Inflammation of the udder." },
    { term: "Foot-and-Mouth", definition: "A highly contagious viral disease of livestock." },
    { term: "Newcastle Disease", definition: "A viral disease affecting poultry." },
    { term: "Trypanosomiasis", definition: "A parasitic disease transmitted by tsetse flies." },
    { term: "Pasteurization", definition: "Heating milk to kill bacteria." },
    { term: "Rotational Grazing", definition: "Moving animals between pastures." },
    { term: "Animal Welfare", definition: "Humane treatment of animals." },
    { term: "Feedlot", definition: "Intensive animal feeding system." },
    { term: "Silage", definition: "Fermented forage used as animal feed." },
    { term: "Manure", definition: "Animal waste used as fertilizer." }
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
      question: "What is animal husbandry?",
      type: "multiple_choice",
      options: [
        "The study of wild animals",
        "The care and management of farm animals",
        "The processing of animal products",
        "The study of animal behavior"
      ],
      answer: "The care and management of farm animals",
      explanation: "Animal husbandry is the care and management of farm animals."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which animal is a ruminant?",
      type: "multiple_choice",
      options: ["Pig", "Chicken", "Cattle", "Rabbit"],
      answer: "Cattle",
      explanation: "Cattle are ruminants with a multi-chambered stomach."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a product of livestock?",
      type: "multiple_choice",
      options: ["Meat", "Milk", "Eggs", "All of the above"],
      answer: "All of the above",
      explanation: "Livestock provides meat, milk, and eggs."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is an intensive system of animal production?",
      type: "multiple_choice",
      options: [
        "Animals roam freely",
        "Animals are confined with high input",
        "Animals are only fed grass",
        "Animals are not managed"
      ],
      answer: "Animals are confined with high input",
      explanation: "Intensive systems involve confined animals with high inputs."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is artificial insemination?",
      type: "multiple_choice",
      options: [
        "Natural mating",
        "Assisted breeding using collected semen",
        "Embryo transfer",
        "Cloning"
      ],
      answer: "Assisted breeding using collected semen",
      explanation: "Artificial insemination uses collected semen for breeding."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a concentrate feed?",
      type: "multiple_choice",
      options: [
        "Low-nutrient feed",
        "High-nutrient feed like grains",
        "Water",
        "Roughage"
      ],
      answer: "High-nutrient feed like grains",
      explanation: "Concentrates are high-nutrient feeds like grains."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "Why is housing important for animals?",
      type: "multiple_choice",
      options: [
        "To protect from weather and predators",
        "To make them look better",
        "To reduce feeding costs",
        "To increase weight"
      ],
      answer: "To protect from weather and predators",
      explanation: "Housing protects animals from weather and predators."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is vaccination in animal health?",
      type: "multiple_choice",
      options: [
        "Giving medicine to sick animals",
        "Preventive immunization against diseases",
        "Surgical procedure",
        "Feeding supplements"
      ],
      answer: "Preventive immunization against diseases",
      explanation: "Vaccination is preventive immunization against diseases."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is pasteurization?",
      type: "multiple_choice",
      options: [
        "Heating milk to kill bacteria",
        "Cooling milk to preserve it",
        "Adding sugar to milk",
        "Separating cream from milk"
      ],
      answer: "Heating milk to kill bacteria",
      explanation: "Pasteurization heats milk to kill harmful bacteria."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a major cost in animal husbandry?",
      type: "multiple_choice",
      options: ["Feed", "Water", "Labor", "All of the above"],
      answer: "All of the above",
      explanation: "Feed, water, and labor are major costs in animal husbandry."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is a challenge facing animal husbandry?",
      type: "multiple_choice",
      options: ["Disease outbreaks", "Abundant feed", "Good weather", "Low labor costs"],
      answer: "Disease outbreaks",
      explanation: "Disease outbreaks are a major challenge in animal husbandry."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is sustainable animal husbandry?",
      type: "multiple_choice",
      options: [
        "Farming that protects the environment",
        "Maximizing production at all costs",
        "Ignoring animal welfare",
        "Using only imported breeds"
      ],
      answer: "Farming that protects the environment",
      explanation: "Sustainable animal husbandry protects the environment."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How does technology help animal husbandry?",
      type: "multiple_choice",
      options: [
        "Improves efficiency and productivity",
        "Makes farming harder",
        "Increases costs",
        "Reduces quality"
      ],
      answer: "Improves efficiency and productivity",
      explanation: "Technology improves efficiency and productivity in animal farming."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is animal welfare?",
      type: "multiple_choice",
      options: [
        "Humane treatment of animals",
        "Maximum production",
        "Using animals for experiments",
        "Ignoring animal needs"
      ],
      answer: "Humane treatment of animals",
      explanation: "Animal welfare involves the humane treatment of animals."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "Why are animal products important in the diet?",
      type: "multiple_choice",
      options: [
        "They provide protein and nutrients",
        "They are cheap",
        "They are easy to store",
        "They are low in calories"
      ],
      answer: "They provide protein and nutrients",
      explanation: "Animal products provide protein and essential nutrients."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_animal_husbandry",
    title: "Animal Husbandry Quiz",
    description: "Test your understanding of animal husbandry",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is animal husbandry?",
        type: "short_answer",
        answer_key: "The care and management of farm animals",
        explanation: "Animal husbandry is the care and management of farm animals."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one type of farm animal.",
        type: "short_answer",
        answer_key: "Cattle (or any valid)",
        explanation: "Cattle, sheep, goats, pigs, and poultry are farm animals."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a product of livestock?",
        type: "short_answer",
        answer_key: "Meat (or any valid)",
        explanation: "Livestock provides meat, milk, eggs, and other products."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an intensive system of animal production?",
        type: "short_answer",
        answer_key: "Animals are confined with high input",
        explanation: "Intensive systems involve confined animals with high inputs."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is artificial insemination?",
        type: "short_answer",
        answer_key: "Assisted breeding using collected semen",
        explanation: "Artificial insemination uses collected semen for breeding."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a concentrate feed?",
        type: "short_answer",
        answer_key: "High-nutrient feed like grains",
        explanation: "Concentrates are high-nutrient feeds."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is vaccination in animal health?",
        type: "short_answer",
        answer_key: "Preventive immunization against diseases",
        explanation: "Vaccination is preventive immunization against diseases."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is pasteurization?",
        type: "short_answer",
        answer_key: "Heating milk to kill bacteria",
        explanation: "Pasteurization heats milk to kill harmful bacteria."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is a challenge facing animal husbandry?",
        type: "short_answer",
        answer_key: "Disease outbreaks (or any valid)",
        explanation: "Disease outbreaks are a major challenge in animal husbandry."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is sustainable animal husbandry?",
        type: "short_answer",
        answer_key: "Farming that protects the environment",
        explanation: "Sustainable animal husbandry protects the environment."
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
        "Understand animal husbandry and its importance",
        "Identify different types of farm animals",
        "Describe production systems",
        "Explain breeding, nutrition, and health management"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is animal husbandry?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Farm Animals" },
        { time: "10-15 min", activity: "Direct Instruction - Production Systems" },
        { time: "15-20 min", activity: "Direct Instruction - Breeding and Reproduction" },
        { time: "20-25 min", activity: "Direct Instruction - Nutrition and Feeding" },
        { time: "25-30 min", activity: "Direct Instruction - Housing and Health" },
        { time: "30-35 min", activity: "Direct Instruction - Products and Sustainability" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The care and management of farm animals",
        prac_002: "Cattle",
        prac_003: "All of the above",
        prac_004: "Animals are confined with high input",
        prac_005: "Assisted breeding using collected semen",
        prac_006: "High-nutrient feed like grains",
        prac_007: "To protect from weather and predators",
        prac_008: "Preventive immunization against diseases",
        prac_009: "Heating milk to kill bacteria",
        prac_010: "All of the above",
        prac_011: "Disease outbreaks",
        prac_012: "Farming that protects the environment",
        prac_013: "Improves efficiency and productivity",
        prac_014: "Humane treatment of animals",
        prac_015: "They provide protein and nutrients"
      },
      assessment: {
        ass_001: "The care and management of farm animals",
        ass_002: "Cattle (or any valid)",
        ass_003: "Meat (or any valid)",
        ass_004: "Animals are confined with high input",
        ass_005: "Assisted breeding using collected semen",
        ass_006: "High-nutrient feed like grains",
        ass_007: "Preventive immunization against diseases",
        ass_008: "Heating milk to kill bacteria",
        ass_009: "Disease outbreaks (or any valid)",
        ass_010: "Farming that protects the environment"
      }
    },
    extensionActivities: [
      "Visit a livestock farm",
      "Research animal breeds",
      "Study animal diseases",
      "Learn about sustainable livestock farming"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research animal genetics",
        "Study veterinary science",
        "Research livestock marketing",
        "Study animal behavior"
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
      title: "Livestock Types",
      description: "Diagram showing different types of farm animals",
      url: "/diagrams/livestock-types.png",
      alt: "Livestock types diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Animal Products",
      description: "Chart showing products from different animals",
      url: "/diagrams/animal-products.png",
      alt: "Animal products chart"
    }
  ]
};