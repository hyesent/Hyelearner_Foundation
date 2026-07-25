// Location: src/data/lessons/index.js

export default {
  subjects: [
    // ============================================================
    // CORE
    // ============================================================
    {
      subject: "Mathematics",
      category: "core",
      icon: "📐",
      topics: [
        { name: "Linear Equations", file: "core/mathematics/algebra/linear_equations.js", hasLesson: true },
        { name: "Quadratic Equations", file: "core/mathematics/algebra/quadratic_equations.js", hasLesson: true },
        { name: "Simultaneous Equations", file: "core/mathematics/algebra/simultaneous_equations.js", hasLesson: true },
        { name: "Inequalities", file: "core/mathematics/algebra/inequalities.js", hasLesson: true },
        { name: "Polynomials", file: "core/mathematics/algebra/polynomials.js", hasLesson: true },
        { name: "Indices and Logarithms", file: "core/mathematics/algebra/indices_and_logarithms.js", hasLesson: true },
        { name: "Sequences and Series", file: "core/mathematics/algebra/sequences_and_series.js", hasLesson: true },
        { name: "Angles", file: "core/mathematics/geometry/angles.js", hasLesson: true },
        { name: "Triangles", file: "core/mathematics/geometry/triangles.js", hasLesson: true },
        { name: "Circles", file: "core/mathematics/geometry/circles.js", hasLesson: true },
        { name: "Polygons", file: "core/mathematics/geometry/polygons.js", hasLesson: true },
        { name: "Mensuration", file: "core/mathematics/geometry/mensuration.js", hasLesson: true },
        { name: "Trigonometric Identities", file: "core/mathematics/trigonometry/identities.js", hasLesson: true },
        { name: "Bearings", file: "core/mathematics/trigonometry/bearings.js", hasLesson: true },
        { name: "Elevations", file: "core/mathematics/trigonometry/elevations.js", hasLesson: true },
        { name: "Trigonometric Graphs", file: "core/mathematics/trigonometry/graphs.js", hasLesson: true },
        { name: "Data Collection", file: "core/mathematics/statistics/data_collection.js", hasLesson: true },
        { name: "Measures of Central Tendency", file: "core/mathematics/statistics/measures.js", hasLesson: true },
        { name: "Charts", file: "core/mathematics/statistics/charts.js", hasLesson: true },
        { name: "Data Interpretation", file: "core/mathematics/statistics/interpretation.js", hasLesson: true },
        { name: "Basic Probability", file: "core/mathematics/probability/basic_probability.js", hasLesson: true },
        { name: "Conditional Probability", file: "core/mathematics/probability/conditional_probability.js", hasLesson: true },
        { name: "Permutations & Combinations", file: "core/mathematics/probability/permutations_and_combinations.js", hasLesson: true },
        { name: "Differentiation", file: "core/mathematics/calculus/differentiation.js", hasLesson: true },
        { name: "Integration", file: "core/mathematics/calculus/integration.js", hasLesson: true },
        { name: "Applications of Calculus", file: "core/mathematics/calculus/applications.js", hasLesson: true },
        { name: "Vector Operations", file: "core/mathematics/vectors/vector_operations.js", hasLesson: true },
        { name: "Position Vectors", file: "core/mathematics/vectors/position_vectors.js", hasLesson: true },
        { name: "Vector Geometry", file: "core/mathematics/vectors/vector_geometry.js", hasLesson: true },
        { name: "Fractions", file: "core/mathematics/number_system/fractions.js", hasLesson: true },
        { name: "Decimals", file: "core/mathematics/number_system/decimals.js", hasLesson: true },
        { name: "Percentages", file: "core/mathematics/number_system/percentages.js", hasLesson: true },
        { name: "Ratios", file: "core/mathematics/number_system/ratios.js", hasLesson: true },
        { name: "Number Bases", file: "core/mathematics/number_system/bases.js", hasLesson: true }
      ]
    },
    {
      subject: "English Language",
      category: "core",
      icon: "📝",
      topics: [
        { name: "Parts of Speech", file: "core/english_language/grammar/parts_of_speech.js", hasLesson: true },
        { name: "Tenses", file: "core/english_language/grammar/tenses.js", hasLesson: true },
        { name: "Sentence Structure", file: "core/english_language/grammar/sentence_structure.js", hasLesson: true },
        { name: "Subject-Verb Agreement", file: "core/english_language/grammar/subject_verb_agreement.js", hasLesson: true },
        { name: "Modifiers", file: "core/english_language/grammar/modifiers.js", hasLesson: true },
        { name: "Active and Passive Voice", file: "core/english_language/grammar/voice.js", hasLesson: true },
        { name: "Direct and Indirect Speech", file: "core/english_language/grammar/speech.js", hasLesson: true },
        { name: "Modal Verbs", file: "core/english_language/grammar/modal_verbs.js", hasLesson: true },
        { name: "Conditionals", file: "core/english_language/grammar/conditionals.js", hasLesson: true },
        { name: "Phrases and Clauses", file: "core/english_language/grammar/phrases_clauses.js", hasLesson: true },
        { name: "Vocabulary", file: "core/english_language/vocabulary.js", hasLesson: true },
        { name: "Comprehension", file: "core/english_language/comprehension.js", hasLesson: true },
        { name: "Summary", file: "core/english_language/summary.js", hasLesson: true },
        { name: "Lexis and Structure", file: "core/english_language/lexis_and_structure.js", hasLesson: true },
        { name: "Oral English", file: "core/english_language/oral_english.js", hasLesson: true },
        { name: "Essay Writing", file: "core/english_language/essay_writing.js", hasLesson: true },
        { name: "Punctuation", file: "core/english_language/punctuation.js", hasLesson: true },
        { name: "Spelling", file: "core/english_language/spelling.js", hasLesson: true },
        { name: "Idioms", file: "core/english_language/idioms.js", hasLesson: true },
        { name: "Intonation and Stress", file: "core/english_language/intonation_and_stress.js", hasLesson: true },
        { name: "Cloze Passage", file: "core/english_language/cloze_passage.js", hasLesson: true },
        { name: "Figures of Speech", file: "core/english_language/figures_of_speech.js", hasLesson: true },
        { name: "Letter Writing", file: "core/english_language/letter_writing.js", hasLesson: true },
        { name: "Report Writing", file: "core/english_language/report_writing.js", hasLesson: true },
        { name: "Debate and Argumentation", file: "core/english_language/debate_argumentation.js", hasLesson: true },
        { name: "Synonyms and Antonyms", file: "core/english_language/synonyms_and_antonyms.js", hasLesson: true }
      ]
    },

    // ============================================================
    // SCIENCE
    // ============================================================
    {
      subject: "Physics",
      category: "science",
      icon: "⚛️",
      topics: [
        { name: "Measurements", file: "science/physics/measurements.js", hasLesson: true },
        { name: "Mechanics", file: "science/physics/mechanics.js", hasLesson: true },
        { name: "Heat", file: "science/physics/heat.js", hasLesson: true },
        { name: "Waves", file: "science/physics/waves.js", hasLesson: true },
        { name: "Optics", file: "science/physics/optics.js", hasLesson: true },
        { name: "Electricity", file: "science/physics/electricity.js", hasLesson: true },
        { name: "Magnetism", file: "science/physics/magnetism.js", hasLesson: true },
        { name: "Electronics", file: "science/physics/electronics.js", hasLesson: true },
        { name: "Electromagnetic Waves", file: "science/physics/electromagnetic_waves.js", hasLesson: true },
        { name: "Electromagnetic Field", file: "science/physics/electromagnetic_field.js", hasLesson: true },
        { name: "Atomic Structure", file: "science/physics/atomic_structure.js", hasLesson: true },
        { name: "Radioactivity and Nuclear Physics", file: "science/physics/radioactivity.js", hasLesson: true },
        { name: "Energy Quantization and X-rays", file: "science/physics/energy_quantization.js", hasLesson: true },
        { name: "Energy and Society", file: "science/physics/energy_and_society.js", hasLesson: true }
      ]
    },
    {
      subject: "Chemistry",
      category: "science",
      icon: "🧪",
      topics: [
        { name: "Separation Techniques", file: "science/chemistry/physical_chemistry/separation_techniques.js", hasLesson: true },
        { name: "Atomic Structure", file: "science/chemistry/physical_chemistry/atomic_structure.js", hasLesson: true },
        { name: "Chemical Bonding", file: "science/chemistry/physical_chemistry/bonding.js", hasLesson: true },
        { name: "Periodic Table", file: "science/chemistry/physical_chemistry/periodic_table.js", hasLesson: true },
        { name: "Stoichiometry and Mole Concept", file: "science/chemistry/physical_chemistry/stoichiometry.js", hasLesson: true },
        { name: "Gas Laws", file: "science/chemistry/physical_chemistry/gases.js", hasLesson: true },
        { name: "Acids, Bases and Salts", file: "science/chemistry/physical_chemistry/acids_and_bases.js", hasLesson: true },
        { name: "Solubility", file: "science/chemistry/physical_chemistry/solubility.js", hasLesson: true },
        { name: "Chemical Kinetics", file: "science/chemistry/physical_chemistry/kinetics.js", hasLesson: true },
        { name: "Chemical Equilibrium", file: "science/chemistry/physical_chemistry/equilibrium.js", hasLesson: true },
        { name: "Redox Reactions", file: "science/chemistry/physical_chemistry/redox.js", hasLesson: true },
        { name: "Electrolysis", file: "science/chemistry/physical_chemistry/electrolysis.js", hasLesson: true },
        { name: "Energy Changes (Thermochemistry)", file: "science/chemistry/physical_chemistry/energy_changes.js", hasLesson: true },
        { name: "Chemical Thermodynamics", file: "science/chemistry/physical_chemistry/thermodynamics.js", hasLesson: true },
        { name: "Water", file: "science/chemistry/inorganic_chemistry/water.js", hasLesson: true },
        { name: "Metals and Extraction", file: "science/chemistry/inorganic_chemistry/metals.js", hasLesson: true },
        { name: "Non-Metals and Their Compounds", file: "science/chemistry/inorganic_chemistry/non_metals.js", hasLesson: true },
        { name: "Introduction to Organic Chemistry", file: "science/chemistry/organic_chemistry/organic_intro.js", hasLesson: true },
        { name: "Alkanes, Alkenes and Alkynes", file: "science/chemistry/organic_chemistry/hydrocarbons.js", hasLesson: true },
        { name: "Petroleum and Petrochemicals", file: "science/chemistry/organic_chemistry/petroleum.js", hasLesson: true },
        { name: "Polymers", file: "science/chemistry/organic_chemistry/polymers.js", hasLesson: true },
        { name: "Environmental Pollution", file: "science/chemistry/environmental_chemistry/pollution.js", hasLesson: true },
        { name: "Environmental Chemistry", file: "science/chemistry/environmental_chemistry/environmental_chemistry.js", hasLesson: true },
        { name: "Practical Chemistry", file: "science/chemistry/practical_chemistry.js", hasLesson: true }
      ]
    },
    {
      subject: "Biology",
      category: "science",
      icon: "🧬",
      topics: [
        { name: "Cell Biology", file: "science/biology/cell_biology.js", hasLesson: true },
        { name: "Genetics", file: "science/biology/genetics.js", hasLesson: true },
        { name: "Ecology", file: "science/biology/ecology.js", hasLesson: true },
        { name: "Evolution", file: "science/biology/evolution.js", hasLesson: true },
        { name: "Nervous System", file: "science/biology/human_body/nervous_system.js", hasLesson: true },
        { name: "Endocrine System", file: "science/biology/human_body/endocrine_system.js", hasLesson: true },
        { name: "Reproductive System", file: "science/biology/human_body/reproductive_system.js", hasLesson: true },
        { name: "Circulatory System", file: "science/biology/human_body/circulatory_system.js", hasLesson: true },
        { name: "Respiratory System", file: "science/biology/human_body/respiratory_system.js", hasLesson: true },
        { name: "Digestive System", file: "science/biology/human_body/digestive_system.js", hasLesson: true },
        { name: "Excretory System", file: "science/biology/human_body/excretory_system.js", hasLesson: true },
        { name: "Immunity", file: "science/biology/human_body/immunity.js", hasLesson: true },
        { name: "Plants", file: "science/biology/plants.js", hasLesson: true },
        { name: "Animals", file: "science/biology/animals.js", hasLesson: true },
        { name: "Microorganisms", file: "science/biology/microorganisms.js", hasLesson: true },
        { name: "Biotechnology", file: "science/biology/biotechnology.js", hasLesson: true }
      ]
    },
    {
      subject: "Agricultural Science",
      category: "science",
      icon: "🌾",
      topics: [
        { name: "Crop Production", file: "science/agricultural_science/crop_production.js", hasLesson: true },
        { name: "Animal Husbandry", file: "science/agricultural_science/animal_husbandry.js", hasLesson: true },
        { name: "Soil Science", file: "science/agricultural_science/soil_science.js", hasLesson: true },
        { name: "Farm Management", file: "science/agricultural_science/farm_management.js", hasLesson: true }
      ]
    },
    {
      subject: "Environmental Science",
      category: "science",
      icon: "🌍",
      topics: [
        { name: "Environment", file: "science/environmental_science/environment.js", hasLesson: true },
        { name: "Pollution", file: "science/environmental_science/pollution.js", hasLesson: true },
        { name: "Conservation", file: "science/environmental_science/conservation.js", hasLesson: true },
        { name: "Climate", file: "science/environmental_science/climate.js", hasLesson: true }
      ]
    },
    {
      subject: "Computer Science",
      category: "science",
      icon: "💻",
      topics: [
        { name: "Computer Basics", file: "science/computer_science/computer_basics.js", hasLesson: true },
        { name: "Programming", file: "science/computer_science/programming.js", hasLesson: true },
        { name: "Networking", file: "science/computer_science/networking.js", hasLesson: true },
        { name: "Databases", file: "science/computer_science/databases.js", hasLesson: true }
      ]
    },
    {
      subject: "Information Technology",
      category: "science",
      icon: "📱",
      topics: [
        { name: "Information Technology", file: "science/information_technology.js", hasLesson: true }
      ]
    },
    {
      subject: "Further Mathematics",
      category: "science",
      icon: "📊",
      topics: [
        { name: "Further Mathematics", file: "science/further_mathematics.js", hasLesson: true }
      ]
    },
    {
      subject: "Geography",
      category: "science",
      icon: "🌏",
      topics: [
        { name: "Geography", file: "science/geography.js", hasLesson: true }
      ]
    },
    {
      subject: "Technical Drawing",
      category: "science",
      icon: "📐",
      topics: [
        { name: "Technical Drawing", file: "science/technical_drawing.js", hasLesson: true }
      ]
    },

    // ============================================================
    // BUSINESS
    // ============================================================
    {
      subject: "Business Studies",
      category: "business",
      icon: "💼",
      topics: [
        { name: "Business Studies", file: "business/business_studies.js", hasLesson: true }
      ]
    },
    {
      subject: "Commerce",
      category: "business",
      icon: "🏪",
      topics: [
        { name: "Commerce", file: "business/commerce.js", hasLesson: true }
      ]
    },
    {
      subject: "Economics",
      category: "business",
      icon: "💰",
      topics: [
        { name: "Economics", file: "business/economics.js", hasLesson: true }
      ]
    },
    {
      subject: "Entrepreneurship",
      category: "business",
      icon: "🚀",
      topics: [
        { name: "Entrepreneurship", file: "business/entrepreneurship.js", hasLesson: true }
      ]
    },
    {
      subject: "Finance",
      category: "business",
      icon: "🏦",
      topics: [
        { name: "Finance", file: "business/finance.js", hasLesson: true }
      ]
    },
    {
      subject: "Marketing",
      category: "business",
      icon: "📢",
      topics: [
        { name: "Marketing", file: "business/marketing.js", hasLesson: true }
      ]
    },
    {
      subject: "Accounting",
      category: "business",
      icon: "📊",
      topics: [
        { name: "Bookkeeping", file: "business/accounting/bookkeeping.js", hasLesson: true },
        { name: "Journals", file: "business/accounting/journals.js", hasLesson: true },
        { name: "Ledgers", file: "business/accounting/ledgers.js", hasLesson: true },
        { name: "Trial Balance", file: "business/accounting/trial_balance.js", hasLesson: true },
        { name: "Financial Statements", file: "business/accounting/financial_statements.js", hasLesson: true },
        { name: "Depreciation", file: "business/accounting/depreciation.js", hasLesson: true }
      ]
    },

    // ============================================================
    // SOCIAL SCIENCES
    // ============================================================
    {
      subject: "Civics",
      category: "social_sciences",
      icon: "🏛️",
      topics: [
        { name: "Introduction to Civics", file: "social_sciences/civics/introduction_to_civics.js", hasLesson: true },
        { name: "Democratic Processes", file: "social_sciences/civics/democratic_processes.js", hasLesson: true },
        { name: "Human Rights", file: "social_sciences/civics/human_rights.js", hasLesson: true }
      ]
    },
    {
      subject: "Government",
      category: "social_sciences",
      icon: "⚖️",
      topics: [
        { name: "Introduction to Government", file: "social_sciences/government/introduction_to_government.js", hasLesson: true },
        { name: "Nigerian Government", file: "social_sciences/government/nigerian_government.js", hasLesson: true },
        { name: "Constitutional Development", file: "social_sciences/government/constitutional_development.js", hasLesson: true },
        { name: "International Organizations", file: "social_sciences/government/international_organizations.js", hasLesson: true }
      ]
    },
    {
      subject: "History",
      category: "social_sciences",
      icon: "📜",
      topics: [
        { name: "World History", file: "social_sciences/history/world_history.js", hasLesson: true },
        { name: "Nigerian History", file: "social_sciences/history/nigerian_history.js", hasLesson: true },
        { name: "African History", file: "social_sciences/history/african_history.js", hasLesson: true }
      ]
    },
    {
      subject: "Psychology",
      category: "social_sciences",
      icon: "🧠",
      topics: [
        { name: "Psychology", file: "social_sciences/psychology.js", hasLesson: true }
      ]
    },
    {
      subject: "Sociology",
      category: "social_sciences",
      icon: "👥",
      topics: [
        { name: "Sociology", file: "social_sciences/sociology.js", hasLesson: true }
      ]
    },

    // ============================================================
    // HUMANITIES
    // ============================================================
    {
      subject: "Literature",
      category: "humanities",
      icon: "📖",
      topics: [
        { name: "Poetry", file: "humanities/literature/poetry.js", hasLesson: true },
        { name: "Prose", file: "humanities/literature/prose.js", hasLesson: true },
        { name: "Drama", file: "humanities/literature/drama.js", hasLesson: true },
        { name: "Literary Devices", file: "humanities/literature/literary_devices.js", hasLesson: true }
      ]
    },
    {
      subject: "Philosophy",
      category: "humanities",
      icon: "🤔",
      topics: [
        { name: "Philosophy", file: "humanities/philosophy.js", hasLesson: true }
      ]
    },
    {
      subject: "Religious Studies",
      category: "humanities",
      icon: "⛪",
      topics: [
        { name: "Religious Studies", file: "humanities/religious_studies/religious_studies.js", hasLesson: true },
        { name: "Christian Religious Studies", file: "humanities/religious_studies/christian_religious_studies.js", hasLesson: true },
        { name: "Islamic Religious Studies", file: "humanities/religious_studies/islamic_religious_studies.js", hasLesson: true }
      ]
    },
    {
      subject: "Ethics",
      category: "humanities",
      icon: "⚖️",
      topics: [
        { name: "Ethics", file: "humanities/ethics.js", hasLesson: true }
      ]
    },

    // ============================================================
    // ARTS
    // ============================================================
    {
      subject: "Fine Arts",
      category: "arts",
      icon: "🎨",
      topics: [
        { name: "Fine Arts", file: "arts/fine_arts.js", hasLesson: true }
      ]
    },
    {
      subject: "Music",
      category: "arts",
      icon: "🎵",
      topics: [
        { name: "Music", file: "arts/music.js", hasLesson: true }
      ]
    },
    {
      subject: "Drama",
      category: "arts",
      icon: "🎭",
      topics: [
        { name: "Drama", file: "arts/drama.js", hasLesson: true }
      ]
    },
    {
      subject: "Creative Arts",
      category: "arts",
      icon: "🎨",
      topics: [
        { name: "Creative Arts", file: "arts/creative_arts.js", hasLesson: true }
      ]
    },

    // ============================================================
    // HEALTH
    // ============================================================
    {
      subject: "Health Science",
      category: "health",
      icon: "🏥",
      topics: [
        { name: "Health Science", file: "health/health_science.js", hasLesson: true }
      ]
    },
    {
      subject: "Physical Education",
      category: "health",
      icon: "🏃",
      topics: [
        { name: "Physical Education", file: "health/physical_education.js", hasLesson: true }
      ]
    },
    {
      subject: "Home Economics",
      category: "health",
      icon: "🏠",
      topics: [
        { name: "Home Economics", file: "health/home_economics.js", hasLesson: true }
      ]
    },
    {
      subject: "Food and Nutrition",
      category: "health",
      icon: "🍎",
      topics: [
        { name: "Food and Nutrition", file: "health/food_and_nutrition.js", hasLesson: true }
      ]
    },

    // ============================================================
    // LANGUAGES
    // ============================================================
    {
      subject: "French",
      category: "languages",
      icon: "🇫🇷",
      topics: [
        { name: "French", file: "languages/french.js", hasLesson: true }
      ]
    },
    {
      subject: "Spanish",
      category: "languages",
      icon: "🇪🇸",
      topics: [
        { name: "Spanish", file: "languages/spanish.js", hasLesson: true }
      ]
    },
    {
      subject: "German",
      category: "languages",
      icon: "🇩🇪",
      topics: [
        { name: "German", file: "languages/german.js", hasLesson: true }
      ]
    },
    {
      subject: "Arabic",
      category: "languages",
      icon: "🇸🇦",
      topics: [
        { name: "Arabic", file: "languages/arabic.js", hasLesson: true }
      ]
    },
    {
      subject: "Chinese",
      category: "languages",
      icon: "🇨🇳",
      topics: [
        { name: "Chinese", file: "languages/chinese.js", hasLesson: true }
      ]
    },
    {
      subject: "Portuguese",
      category: "languages",
      icon: "🇵🇹",
      topics: [
        { name: "Portuguese", file: "languages/portuguese.js", hasLesson: true }
      ]
    },
    {
      subject: "Yoruba",
      category: "languages",
      icon: "🇳🇬",
      topics: [
        { name: "Yoruba", file: "languages/yoruba.js", hasLesson: true }
      ]
    },
    {
      subject: "Igbo",
      category: "languages",
      icon: "🇳🇬",
      topics: [
        { name: "Igbo", file: "languages/igbo.js", hasLesson: true }
      ]
    },
    {
      subject: "Hausa",
      category: "languages",
      icon: "🇳🇬",
      topics: [
        { name: "Hausa", file: "languages/hausa.js", hasLesson: true }
      ]
    },
    {
      subject: "Swahili",
      category: "languages",
      icon: "🇰🇪",
      topics: [
        { name: "Swahili", file: "languages/swahili.js", hasLesson: true }
      ]
    }
  ],

  // ============================================================
  // METADATA
  // ============================================================
  metadata: {
    totalSubjects: 47,
    totalTopics: 388,
    totalLessons: 388,
    lastUpdated: "2026-07-21",
    version: "1.0.0",
    breakdown: {
      core: {
        subjects: 2,
        topics: 59,
        lessons: 59
      },
      science: {
        subjects: 10,
        topics: 69,
        lessons: 69
      },
      business: {
        subjects: 7,
        topics: 12,
        lessons: 12
      },
      social_sciences: {
        subjects: 5,
        topics: 12,
        lessons: 12
      },
      humanities: {
        subjects: 4,
        topics: 7,
        lessons: 7
      },
      arts: {
        subjects: 4,
        topics: 4,
        lessons: 4
      },
      health: {
        subjects: 4,
        topics: 4,
        lessons: 4
      },
      languages: {
        subjects: 10,
        topics: 10,
        lessons: 10
      }
    }
  }
};