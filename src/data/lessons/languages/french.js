// Location: src/data/lessons/languages/french.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "lang_lesson_french",
  subject: "French",
  topic: "French",
  name: "French Language",
  icon: "🇫🇷",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 18,
    totalPracticeQuestions: 26,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Interest in learning French",
    "Basic understanding of language learning",
    "Openness to new sounds and structures",
    "Willingness to practice"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Chinese",
      file: "languages/chinese.js"
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
      description: "Learn the French alphabet and pronunciation",
      indicator: "Student can pronounce French letters and sounds correctly"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Learn basic greetings and introductions",
      indicator: "Student can greet and introduce themselves in French"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Learn common French phrases",
      indicator: "Student can use everyday phrases in French"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify numbers, days, and months in French",
      indicator: "Student can count and name days and months"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Learn basic vocabulary and sentence structure",
      indicator: "Student can construct basic sentences in French"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain French pronunciation and accent rules",
      indicator: "Student can pronounce French words correctly"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Learn common verbs and verb conjugation",
      indicator: "Student can use basic verbs in sentences"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe food and drink in French",
      indicator: "Student can talk about food and drink"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe family members in French",
      indicator: "Student can identify family members"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the grammar structure of French",
      indicator: "Student can explain basic French grammar"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Construct more complex sentences",
      indicator: "Student can form compound sentences"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Describe French culture and customs",
      indicator: "Student can discuss French culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Understand and tell time in French",
      indicator: "Student can tell time in French"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the French education system",
      indicator: "Student can describe French schools"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe French cuisine",
      indicator: "Student can discuss French food and cooking"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze French literature and art",
      indicator: "Student can discuss French literature and art"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Understand French music and cinema",
      indicator: "Student can describe French music and film"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the importance of French as a global language",
      indicator: "Student can discuss the importance of French"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "French Language - Speak French",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the French language, from basic greetings to advanced conversation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to French Language</h2>
      <p><strong>French</strong> is a Romance language spoken by over 300 million people worldwide. It is the official language of 29 countries and is one of the official languages of the United Nations. French is widely used in diplomacy, business, culture, and the arts.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🇫🇷 Key Concepts</h3>
          <ul>
            <li>✓ Alphabet and Pronunciation</li>
            <li>✓ Greetings and Introductions</li>
            <li>✓ Vocabulary</li>
            <li>✓ Grammar Structure</li>
            <li>✓ Verb Conjugation</li>
            <li>✓ French Culture</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• French is spoken by over 300 million people</li>
            <li>• It is an official language of the UN</li>
            <li>• French is the language of diplomacy</li>
            <li>• France has a rich culinary tradition</li>
            <li>• French literature is world-renowned</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Learn French?</h4>
        <p>Learning French opens doors to international communication, culture, and career opportunities. It is a language of diplomacy, business, and art.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "French Alphabet and Pronunciation",
        objective: "obj_001",
        text: `
          <h3>French Alphabet</h3>
          <p>The French alphabet has 26 letters, with some special accents.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Vowels</h4>
              <ul>
                <li>• <strong>A</strong> - (ah)</li>
                <li>• <strong>E</strong> - (uh)</li>
                <li>• <strong>I</strong> - (ee)</li>
                <li>• <strong>O</strong> - (oh)</li>
                <li>• <strong>U</strong> - (ew)</li>
                <li>• <strong>Y</strong> - (ee-grec)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consonants</h4>
              <ul>
                <li>• B, C, D, F, G, H</li>
                <li>• J, K, L, M, N, P</li>
                <li>• Q, R, S, T, V, W</li>
                <li>• X, Z</li>
                <li>• <strong>Note:</strong> Some letters have special sounds</li>
                <li>• Example: R is pronounced from the throat</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Accents:</strong>
            <ul>
              <li>• <strong>é:</strong> accent aigu (café)</li>
              <li>• <strong>è:</strong> accent grave (père)</li>
              <li>• <strong>ê:</strong> accent circonflexe (forêt)</li>
              <li>• <strong>ë:</strong> tréma (Noël)</li>
              <li>• <strong>ç:</strong> cédille (garçon)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Greetings and Introductions",
        objective: "obj_002",
        text: `
          <h3>Greetings in French</h3>
          <p>Greetings are very important in French culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Greetings</h4>
              <ul>
                <li>• <strong>Bonjour:</strong> Good morning/Hello</li>
                <li>• <strong>Bonsoir:</strong> Good evening</li>
                <li>• <strong>Salut:</strong> Hi (informal)</li>
                <li>• <strong>Au revoir:</strong> Goodbye</li>
                <li>• <strong>Ça va?</strong> How are you?</li>
                <li>• <strong>Oui:</strong> Yes</li>
                <li>• <strong>Non:</strong> No</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Introductions</h4>
              <ul>
                <li>• <strong>Je m'appelle...</strong> My name is...</li>
                <li>• <strong>Comment tu t'appelles?</strong> What is your name?</li>
                <li>• <strong>Enchanté(e):</strong> Nice to meet you</li>
                <li>• <strong>Je suis...</strong> I am...</li>
                <li>• <strong>D'où viens-tu?</strong> Where are you from?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Numbers",
        objective: "obj_004",
        text: `
          <h3>Numbers in French</h3>
          <p>Learning numbers is essential for everyday communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Numbers 1-20</h4>
              <ul>
                <li>1 - <strong>Un</strong></li>
                <li>2 - <strong>Deux</strong></li>
                <li>3 - <strong>Trois</strong></li>
                <li>4 - <strong>Quatre</strong></li>
                <li>5 - <strong>Cinq</strong></li>
                <li>6 - <strong>Six</strong></li>
                <li>7 - <strong>Sept</strong></li>
                <li>8 - <strong>Huit</strong></li>
                <li>9 - <strong>Neuf</strong></li>
                <li>10 - <strong>Dix</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Numbers 11-20</h4>
              <ul>
                <li>11 - <strong>Onze</strong></li>
                <li>12 - <strong>Douze</strong></li>
                <li>13 - <strong>Treize</strong></li>
                <li>14 - <strong>Quatorze</strong></li>
                <li>15 - <strong>Quinze</strong></li>
                <li>16 - <strong>Seize</strong></li>
                <li>17 - <strong>Dix-sept</strong></li>
                <li>18 - <strong>Dix-huit</strong></li>
                <li>19 - <strong>Dix-neuf</strong></li>
                <li>20 - <strong>Vingt</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Family Members",
        objective: "obj_009",
        text: `
          <h3>Family Members in French</h3>
          <p>Family is important in French culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Immediate Family</h4>
              <ul>
                <li>• <strong>Père:</strong> Father</li>
                <li>• <strong>Mère:</strong> Mother</li>
                <li>• <strong>Fils:</strong> Son</li>
                <li>• <strong>Fille:</strong> Daughter</li>
                <li>• <strong>Frère:</strong> Brother</li>
                <li>• <strong>Sœur:</strong> Sister</li>
                <li>• <strong>Mari:</strong> Husband</li>
                <li>• <strong>Femme:</strong> Wife</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Extended Family</h4>
              <ul>
                <li>• <strong>Grand-père:</strong> Grandfather</li>
                <li>• <strong>Grand-mère:</strong> Grandmother</li>
                <li>• <strong>Oncle:</strong> Uncle</li>
                <li>• <strong>Tante:</strong> Aunt</li>
                <li>• <strong>Cousin:</strong> Cousin (male)</li>
                <li>• <strong>Cousine:</strong> Cousin (female)</li>
                <li>• <strong>Petit-fils:</strong> Grandson</li>
                <li>• <strong>Petite-fille:</strong> Granddaughter</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Food and Drink",
        objective: "obj_008",
        text: `
          <h3>Food and Drink in French</h3>
          <p>French cuisine is world-famous.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Food</h4>
              <ul>
                <li>• <strong>Pain:</strong> Bread</li>
                <li>• <strong>Fromage:</strong> Cheese</li>
                <li>• <strong>Viande:</strong> Meat</li>
                <li>• <strong>Poisson:</strong> Fish</li>
                <li>• <strong>Fruits:</strong> Fruits</li>
                <li>• <strong>Légumes:</strong> Vegetables</li>
                <li>• <strong>Pâtes:</strong> Pasta</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drink</h4>
              <ul>
                <li>• <strong>Eau:</strong> Water</li>
                <li>• <strong>Lait:</strong> Milk</li>
                <li>• <strong>Café:</strong> Coffee</li>
                <li>• <strong>Thé:</strong> Tea</li>
                <li>• <strong>Vin:</strong> Wine</li>
                <li>• <strong>Jus:</strong> Juice</li>
                <li>• <strong>Bière:</strong> Beer</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Common Verbs",
        objective: "obj_007",
        text: `
          <h3>Common Verbs in French</h3>
          <p>Verbs are essential for constructing sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Verbs</h4>
              <ul>
                <li>• <strong>Être:</strong> To be</li>
                <li>• <strong>Avoir:</strong> To have</li>
                <li>• <strong>Aller:</strong> To go</li>
                <li>• <strong>Venir:</strong> To come</li>
                <li>• <strong>Manger:</strong> To eat</li>
                <li>• <strong>Boire:</strong> To drink</li>
                <li>• <strong>Dormir:</strong> To sleep</li>
                <li>• <strong>Lire:</strong> To read</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Je suis:</strong> I am</li>
                <li>• <strong>J'ai:</strong> I have</li>
                <li>• <strong>Je vais:</strong> I go</li>
                <li>• <strong>Je mange:</strong> I eat</li>
                <li>• <strong>Je bois:</strong> I drink</li>
                <li>• <strong>Je dors:</strong> I sleep</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "French Culture",
        objective: "obj_012",
        text: `
          <h3>French Culture and Customs</h3>
          <p>France has a rich cultural heritage.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Art:</strong> Louvre, Monet, Picasso</li>
                <li>• <strong>Literature:</strong> Victor Hugo, Molière</li>
                <li>• <strong>Cuisine:</strong> World-renowned food</li>
                <li>• <strong>Fashion:</strong> Paris fashion capital</li>
                <li>• <strong>Film:</strong> French cinema</li>
                <li>• <strong>Architecture:</strong> Eiffel Tower, Notre Dame</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Customs</h4>
              <ul>
                <li>• <strong>Greetings:</strong> La bise (cheek kisses)</li>
                <li>• <strong>Meals:</strong> Long, leisurely meals</li>
                <li>• <strong>Fashion:</strong> Stylish dress</li>
                <li>• <strong>Politeness:</strong> Say "Bonjour" and "Merci"</li>
                <li>• <strong>Café culture:</strong> Sitting at cafés</li>
                <li>• <strong>Holidays:</strong> Bastille Day, Christmas</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "French Cuisine",
        objective: "obj_015",
        text: `
          <h3>French Cuisine</h3>
          <p>French cuisine is celebrated worldwide.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Famous Dishes</h4>
              <ul>
                <li>• <strong>Croissant:</strong> Buttery pastry</li>
                <li>• <strong>Baguette:</strong> Long bread</li>
                <li>• <strong>Escargots:</strong> Snails</li>
                <li>• <strong>Coq au vin:</strong> Chicken in wine</li>
                <li>• <strong>Ratatouille:</strong> Vegetable stew</li>
                <li>• <strong>Crème brûlée:</strong> Dessert</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Dining Customs</h4>
              <ul>
                <li>• <strong>Apéritif:</strong> Pre-dinner drink</li>
                <li>• <strong>Entrée:</strong> Starter</li>
                <li>• <strong>Plat principal:</strong> Main course</li>
                <li>• <strong>Fromage:</strong> Cheese course</li>
                <li>• <strong>Dessert:</strong> Sweet course</li>
                <li>• <strong>Café:</strong> Coffee after meal</li>
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
          <h4>🇫🇷 French Language</h4>
          <ul>
            <li>• Over 300 million speakers worldwide</li>
            <li>• Official language of 29 countries</li>
            <li>• Language of diplomacy and culture</li>
            <li>• Rich literary and culinary tradition</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Phrases</h4>
          <ul>
            <li>• Bonjour - Hello</li>
            <li>• Merci - Thank you</li>
            <li>• Je m'appelle... - My name is...</li>
            <li>• Comment ça va? - How are you?</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>French is a global language that opens doors to international opportunities in business, culture, and communication.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "French is only spoken in France",
        correction: "French is spoken in many countries worldwide",
        explanation: "French is spoken in Europe, Africa, Canada, and other regions."
      },
      {
        id: "mis_002",
        misconception: "French pronunciation is impossible",
        correction: "French pronunciation can be learned with practice",
        explanation: "Regular practice makes French pronunciation manageable."
      },
      {
        id: "mis_003",
        misconception: "French grammar is too difficult",
        correction: "French grammar follows logical rules",
        explanation: "French grammar has patterns that can be learned."
      },
      {
        id: "mis_004",
        misconception: "French is no longer important",
        correction: "French remains an important global language",
        explanation: "French is an official language of many international organizations."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Speak with French speakers.",
        example: "Daily conversations, business"
      },
      {
        id: "app_002",
        title: "Travel",
        description: "Communicate in French-speaking countries.",
        example: "France, Canada, Africa"
      },
      {
        id: "app_003",
        title: "Culture",
        description: "Understand French culture.",
        example: "Literature, film, art, cuisine"
      },
      {
        id: "app_004",
        title: "Career",
        description: "French is valuable in many careers.",
        example: "Diplomacy, business, teaching"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "French", definition: "A Romance language spoken by over 300 million people." },
    { term: "Accent", definition: "A mark used to indicate pronunciation." },
    { term: "Conjugation", definition: "The variation of verbs according to tense and person." },
    { term: "Greeting", definition: "A polite expression used when meeting someone." },
    { term: "Cuisine", definition: "The style of cooking and food of a country." },
    { term: "Culture", definition: "The customs, arts, and social institutions of a group." },
    { term: "Literature", definition: "Written works, especially those of artistic merit." },
    { term: "Francophone", definition: "A person who speaks French." },
    { term: "Diplomacy", definition: "The profession of managing international relations." },
    { term: "Heritage", definition: "The traditions and culture passed down from ancestors." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "How many letters are in the French alphabet?",
      type: "multiple_choice",
      options: ["24", "25", "26", "27"],
      answer: "26",
      explanation: "The French alphabet has 26 letters."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How do you say 'Hello' in French?",
      type: "multiple_choice",
      options: ["Salut", "Bonjour", "Au revoir", "Merci"],
      answer: "Bonjour",
      explanation: "'Bonjour' means 'Hello' in French."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the French word for 'thank you'?",
      type: "multiple_choice",
      options: ["Bonjour", "Merci", "Salut", "Oui"],
      answer: "Merci",
      explanation: "Merci means 'thank you' in French."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the French word for '10'?",
      type: "multiple_choice",
      options: ["Dix", "Neuf", "Huit", "Sept"],
      answer: "Dix",
      explanation: "Dix means '10' in French."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the French word for 'mother'?",
      type: "multiple_choice",
      options: ["Père", "Mère", "Fils", "Fille"],
      answer: "Mère",
      explanation: "Mère means mother in French."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the French word for 'bread'?",
      type: "multiple_choice",
      options: ["Fromage", "Pain", "Viande", "Poisson"],
      answer: "Pain",
      explanation: "Pain means bread in French."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the French verb for 'to be'?",
      type: "multiple_choice",
      options: ["Avoir", "Être", "Aller", "Venir"],
      answer: "Être",
      explanation: "Être means 'to be' in French."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the French word for 'water'?",
      type: "multiple_choice",
      options: ["Lait", "Eau", "Vin", "Jus"],
      answer: "Eau",
      explanation: "Eau means water in French."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the French word for 'father'?",
      type: "multiple_choice",
      options: ["Mère", "Père", "Frère", "Sœur"],
      answer: "Père",
      explanation: "Père means father in French."
    },
    {
      id: "prac_010",
      objective: "obj_015",
      difficulty: "hard",
      question: "Which is a famous French dish?",
      type: "multiple_choice",
      options: ["Pizza", "Sushi", "Coq au vin", "Tacos"],
      answer: "Coq au vin",
      explanation: "Coq au vin is a famous French dish."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_french",
    title: "French Language Quiz",
    description: "Test your understanding of the French language",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many letters are in the French alphabet?",
        type: "short_answer",
        answer_key: "26",
        explanation: "The French alphabet has 26 letters."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How do you say 'Hello' in French?",
        type: "short_answer",
        answer_key: "Bonjour",
        explanation: "'Bonjour' means 'Hello' in French."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the French word for 'thank you'?",
        type: "short_answer",
        answer_key: "Merci",
        explanation: "Merci means 'thank you' in French."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the French word for '10'?",
        type: "short_answer",
        answer_key: "Dix",
        explanation: "Dix means '10' in French."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the French word for 'mother'?",
        type: "short_answer",
        answer_key: "Mère",
        explanation: "Mère means mother in French."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the French word for 'bread'?",
        type: "short_answer",
        answer_key: "Pain",
        explanation: "Pain means bread in French."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the French verb for 'to be'?",
        type: "short_answer",
        answer_key: "Être",
        explanation: "Être means 'to be' in French."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the French word for 'water'?",
        type: "short_answer",
        answer_key: "Eau",
        explanation: "Eau means water in French."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the French word for 'father'?",
        type: "short_answer",
        answer_key: "Père",
        explanation: "Père means father in French."
      },
      {
        id: "ass_010",
        objective: "obj_015",
        difficulty: "hard",
        question: "Which is a famous French dish?",
        type: "short_answer",
        answer_key: "Coq au vin (or any valid)",
        explanation: "Coq au vin is a famous French dish."
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
        "Understand French alphabet and pronunciation",
        "Learn basic greetings and introductions",
        "Build vocabulary",
        "Understand French culture"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is French?" },
        { time: "5-10 min", activity: "Direct Instruction - Alphabet and Pronunciation" },
        { time: "10-15 min", activity: "Direct Instruction - Greetings" },
        { time: "15-20 min", activity: "Direct Instruction - Numbers and Family" },
        { time: "20-25 min", activity: "Direct Instruction - Vocabulary" },
        { time: "25-30 min", activity: "Direct Instruction - Verbs" },
        { time: "30-35 min", activity: "Direct Instruction - French Culture" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "26",
        prac_002: "Bonjour",
        prac_003: "Merci",
        prac_004: "Dix",
        prac_005: "Mère",
        prac_006: "Pain",
        prac_007: "Être",
        prac_008: "Eau",
        prac_009: "Père",
        prac_010: "Coq au vin"
      },
      assessment: {
        ass_001: "26",
        ass_002: "Bonjour",
        ass_003: "Merci",
        ass_004: "Dix",
        ass_005: "Mère",
        ass_006: "Pain",
        ass_007: "Être",
        ass_008: "Eau",
        ass_009: "Père",
        ass_010: "Coq au vin (or any valid)"
      }
    },
    extensionActivities: [
      "Practice French conversation",
      "Learn French songs",
      "Research French culture",
      "Watch French films"
    ],
    differentiation: {
      struggling: [
        "Focus on basic phrases",
        "Use simple examples",
        "Use audio aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a paragraph in French",
        "Translate a French text",
        "Research French grammar",
        "Study French literature"
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
      title: "French Alphabet",
      description: "Diagram showing the French alphabet",
      url: "/diagrams/french-alphabet.png",
      alt: "French alphabet diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "French Greetings",
      description: "Diagram showing common greetings",
      url: "/diagrams/french-greetings.png",
      alt: "French greetings diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "French Culture",
      description: "Diagram showing French culture",
      url: "/diagrams/french-culture.png",
      alt: "French culture diagram"
    }
  ]
};