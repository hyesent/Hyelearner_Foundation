// Location: src/data/lessons/languages/yoruba.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "lang_lesson_yoruba",
  subject: "Yoruba",
  topic: "Yoruba",
  name: "Yoruba Language",
  icon: "🇳🇬",
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
    "Interest in learning Yoruba",
    "Basic understanding of language learning",
    "Openness to new sounds and structures",
    "Willingness to practice"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "French",
      file: "languages/french.js"
    },
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
      description: "Learn the Yoruba alphabet and pronunciation",
      indicator: "Student can pronounce Yoruba letters and sounds correctly"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Learn basic greetings and introductions",
      indicator: "Student can greet and introduce themselves in Yoruba"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Learn common Yoruba phrases",
      indicator: "Student can use everyday phrases in Yoruba"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify numbers, days, and months in Yoruba",
      indicator: "Student can count and name days and months"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Learn basic vocabulary and sentence structure",
      indicator: "Student can construct basic sentences in Yoruba"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the three tones in Yoruba",
      indicator: "Student can identify and use tones correctly"
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
      description: "Describe food and drink in Yoruba",
      indicator: "Student can talk about food and drink"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe family members in Yoruba",
      indicator: "Student can identify family members"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the grammar structure of Yoruba",
      indicator: "Student can explain basic Yoruba grammar"
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
      description: "Describe Yoruba culture and customs",
      indicator: "Student can discuss Yoruba culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Understand and tell time in Yoruba",
      indicator: "Student can tell time in Yoruba"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the Yoruba naming system",
      indicator: "Student can explain Yoruba names and their meanings"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe festivals and celebrations in Yoruba",
      indicator: "Student can discuss festivals and celebrations"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze Yoruba proverbs and their meanings",
      indicator: "Student can explain Yoruba proverbs"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Understand Yoruba music and dance",
      indicator: "Student can describe Yoruba music and dance"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the future of the Yoruba language",
      indicator: "Student can discuss the preservation of Yoruba"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Yoruba Language - Speak Yoruba",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the Yoruba language, from basic greetings to advanced conversation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Yoruba Language</h2>
      <p><strong>Yoruba</strong> is a language spoken primarily in Nigeria, Benin, and Togo. It is one of the major languages of West Africa, with over 40 million speakers. Yoruba is rich in culture, proverbs, and oral traditions. Learning Yoruba opens doors to understanding the culture and people of Yorubaland.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🇳🇬 Key Concepts</h3>
          <ul>
            <li>✓ Alphabet and Pronunciation</li>
            <li>✓ Tones</li>
            <li>✓ Greetings and Introductions</li>
            <li>✓ Vocabulary</li>
            <li>✓ Grammar Structure</li>
            <li>✓ Culture and Customs</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Yoruba has over 40 million speakers</li>
            <li>• It is a tonal language with three tones</li>
            <li>• Yoruba is widely spoken in Nigeria</li>
            <li>• The language has a rich oral tradition</li>
            <li>• Yoruba proverbs are famous worldwide</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Learn Yoruba?</h4>
        <p>Learning Yoruba helps you connect with Yoruba culture, people, and heritage. It is a beautiful and expressive language.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Yoruba Alphabet and Pronunciation",
        objective: "obj_001",
        text: `
          <h3>Yoruba Alphabet</h3>
          <p>The Yoruba alphabet has 25 letters.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Vowels</h4>
              <ul>
                <li>• <strong>A</strong> - (ah)</li>
                <li>• <strong>E</strong> - (eh)</li>
                <li>• <strong>Ẹ</strong> - (eh - lower)</li>
                <li>• <strong>I</strong> - (ee)</li>
                <li>• <strong>O</strong> - (oh)</li>
                <li>• <strong>Ọ</strong> - (aw)</li>
                <li>• <strong>U</strong> - (oo)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consonants</h4>
              <ul>
                <li>• B, D, F, G, Gb</li>
                <li>• H, J, K, L, M</li>
                <li>• N, P, R, S, Ṣ</li>
                <li>• T, W, Y</li>
                <li>• <strong>Note:</strong> Some letters have special sounds</li>
                <li>• Example: Gb is a single consonant</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Pronunciation Tips:</strong>
            <ul>
              <li>• <strong>Ẹ:</strong> Say "e" as in "bed"</li>
              <li>• <strong>Ọ:</strong> Say "o" as in "caw"</li>
              <li>• <strong>Gb:</strong> A single explosive sound</li>
              <li>• <strong>Ṣ:</strong> Say "sh" as in "shoot"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Tones in Yoruba",
        objective: "obj_006",
        text: `
          <h3>Yoruba Tones</h3>
          <p>Yoruba is a tonal language with three tones.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 High Tone</h4>
              <ul>
                <li>• Marked with (á)</li>
                <li>• Example: <strong>kó</strong> (gather)</li>
                <li>• High pitch</li>
                <li>• Most common tone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Medium Tone</h4>
              <ul>
                <li>• Marked with (ā)</li>
                <li>• Example: <strong>kō</strong> (spoon)</li>
                <li>• Mid pitch</li>
                <li>• Often unmarked</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Low Tone</h4>
              <ul>
                <li>• Marked with (à)</li>
                <li>• Example: <strong>kò</strong> (not)</li>
                <li>• Low pitch</li>
                <li>• Changes meaning</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Important Note:</strong>
            <ul>
              <li>• The tone changes the meaning of words</li>
              <li>• Example: <strong>dá</strong> (create) vs <strong>dà</strong> (pour)</li>
              <li>• Example: <strong>kó</strong> (gather) vs <strong>kò</strong> (not)</li>
              <li>• Proper tone usage is essential</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Greetings and Introductions",
        objective: "obj_002",
        text: `
          <h3>Greetings in Yoruba</h3>
          <p>Greetings are very important in Yoruba culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Greetings</h4>
              <ul>
                <li>• <strong>Ẹ káàárọ̀:</strong> Good morning</li>
                <li>• <strong>Ẹ káàsán:</strong> Good afternoon</li>
                <li>• <strong>Ẹ káalẹ́:</strong> Good evening</li>
                <li>• <strong>Ẹ kúùlẹ́:</strong> Good night</li>
                <li>• <strong>Báwo ni?</strong> How are you?</li>
                <li>• <strong>Dáadáa ni:</strong> I'm fine</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Introductions</h4>
              <ul>
                <li>• <strong>Orúkọ mi ni...</strong> My name is...</li>
                <li>• <strong>Kí ni orúkọ rẹ?</strong> What is your name?</li>
                <li>• <strong>Inú mi dùn láti pàdé rẹ:</strong> Nice to meet you</li>
                <li>• <strong>Ṣé ẹ wà? </strong> How are you doing?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Numbers",
        objective: "obj_004",
        text: `
          <h3>Numbers in Yoruba</h3>
          <p>Learning numbers is essential for everyday communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Numbers 1-20</h4>
              <ul>
                <li>1 - <strong>Ọkan</strong></li>
                <li>2 - <strong>Meji</strong></li>
                <li>3 - <strong>Mẹta</strong></li>
                <li>4 - <strong>Mẹrin</strong></li>
                <li>5 - <strong>Marun</strong></li>
                <li>6 - <strong>Mefa</strong></li>
                <li>7 - <strong>Meje</strong></li>
                <li>8 - <strong>Mẹjo</strong></li>
                <li>9 - <strong>Mẹsan</strong></li>
                <li>10 - <strong>Mẹwa</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Numbers 11-20</h4>
              <ul>
                <li>11 - <strong>Mọkanla</strong></li>
                <li>12 - <strong>Mejila</strong></li>
                <li>13 - <strong>Mẹtala</strong></li>
                <li>14 - <strong>Mẹrinla</strong></li>
                <li>15 - <strong>Marundinlogun</strong></li>
                <li>16 - <strong>Mẹrindinlogun</strong></li>
                <li>17 - <strong>Mẹtadinlogun</strong></li>
                <li>18 - <strong>Mejidinlogun</strong></li>
                <li>19 - <strong>Mọkandinlogun</strong></li>
                <li>20 - <strong>Ogún</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Family Members",
        objective: "obj_009",
        text: `
          <h3>Family Members in Yoruba</h3>
          <p>Family is central to Yoruba culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Immediate Family</h4>
              <ul>
                <li>• <strong>Bàbá:</strong> Father</li>
                <li>• <strong>Ìyá:</strong> Mother</li>
                <li>• <strong>Ọmọ:</strong> Child</li>
                <li>• <strong>Ọkọ:</strong> Husband</li>
                <li>• <strong>Aya:</strong> Wife</li>
                <li>• <strong>Arákùnrin:</strong> Brother</li>
                <li>• <strong>Arábìnrin:</strong> Sister</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Extended Family</h4>
              <ul>
                <li>• <strong>Ẹgbọ́n:</strong> Older sibling</li>
                <li>• <strong>Àbúrò:</strong> Younger sibling</li>
                <li>• <strong>Bàbá àgbà:</strong> Grandfather</li>
                <li>• <strong>Ìyá àgbà:</strong> Grandmother</li>
                <li>• <strong>Ọmọ ọkùnrin:</strong> Son</li>
                <li>• <strong>Ọmọ obìnrin:</strong> Daughter</li>
                <li>• <strong>Jẹ́: </strong> Grandchild</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Food and Drink",
        objective: "obj_008",
        text: `
          <h3>Food and Drink in Yoruba</h3>
          <p>Food is an important part of Yoruba culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Food</h4>
              <ul>
                <li>• <strong>Ireṣi:</strong> Rice</li>
                <li>• <strong>Ọkà:</strong> Corn</li>
                <li>• <strong>Ẹja:</strong> Fish</li>
                <li>• <strong>Ẹran:</strong> Meat</li>
                <li>• <strong>Obe:</strong> Soup</li>
                <li>• <strong>Ami:</strong> Oil</li>
                <li>• <strong>Iyan:</strong> Pounded yam</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drink</h4>
              <ul>
                <li>• <strong>Omi:</strong> Water</li>
                <li>• <strong>Ọtí:</strong> Palm wine</li>
                <li>• <strong>Kọfí:</strong> Coffee</li>
                <li>• <strong>Nàìlì:</strong> Tea</li>
                <li>• <strong>Ọtí:</strong> Beer</li>
                <li>• <strong>Omi ẹran:</strong> Juice</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Common Verbs",
        objective: "obj_007",
        text: `
          <h3>Common Verbs in Yoruba</h3>
          <p>Verbs are essential for constructing sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Verbs</h4>
              <ul>
                <li>• <strong>Jẹ:</strong> Eat</li>
                <li>• <strong>Mu:</strong> Drink</li>
                <li>• <strong>Lọ:</strong> Go</li>
                <li>• <strong>Wá:</strong> Come</li>
                <li>• <strong>Sun:</strong> Sleep</li>
                <li>• <strong>Ka:</strong> Read</li>
                <li>• <strong>Kọ:</strong> Write</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Mo jẹun:</strong> I eat</li>
                <li>• <strong>Ó lọ:</strong> He/She goes</li>
                <li>• <strong>Ẹ ká:</strong> Read</li>
                <li>• <strong>Mo kọ:</strong> I write</li>
                <li>• <strong>O sun:</strong> You sleep</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Yoruba Proverbs",
        objective: "obj_016",
        text: `
          <h3>Yoruba Proverbs</h3>
          <p>Proverbs are an important part of Yoruba oral tradition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Popular Proverbs</h4>
              <ul>
                <li>• <strong>"Ibi ti kò tíì gbóná, kò tíì jóná."</strong></li>
                <li>• Where it has not yet heated up, it does not burn.</li>
                <li>• <strong>"Ọmọ tí kò gbó, kò gbà."</strong></li>
                <li>• A child who does not listen will not learn.</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Proverbs</h4>
              <ul>
                <li>• <strong>"Ibi tí ẹṣin wọ, ni ẹṣin ń fọ́."</strong></li>
                <li>• Where the horse enters, it defecates.</li>
                <li>• <strong>"Ọwọ́ tí a fi ń bọ́ ẹni, ni a fi ń bọ́ ara ẹni."</strong></li>
                <li>• The hand that washes another also washes itself.</li>
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
          <h4>🇳🇬 Yoruba Language</h4>
          <ul>
            <li>• Tonal language with three tones</li>
            <li>• Rich in proverbs and oral tradition</li>
            <li>• Over 40 million speakers</li>
            <li>• Family and community are central</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Phrases</h4>
          <ul>
            <li>• Ẹ káàárọ̀ - Good morning</li>
            <li>• Báwo ni? - How are you?</li>
            <li>• Orúkọ mi ni... - My name is...</li>
            <li>• Inú mi dùn - I am happy</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Learning Yoruba connects you to a rich cultural heritage and millions of speakers worldwide.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All African languages sound the same",
        correction: "Yoruba is unique with its tonal system",
        explanation: "Yoruba has specific sounds and tones that distinguish it."
      },
      {
        id: "mis_002",
        misconception: "Tones don't matter in Yoruba",
        correction: "Tones are essential for meaning in Yoruba",
        explanation: "Using the wrong tone can change the meaning of a word."
      },
      {
        id: "mis_003",
        misconception: "Yoruba is only spoken in Nigeria",
        correction: "Yoruba is spoken in Nigeria, Benin, Togo, and diaspora",
        explanation: "Yoruba is a major language in several West African countries."
      },
      {
        id: "mis_004",
        misconception: "Yoruba has no written form",
        correction: "Yoruba has a well-developed written form",
        explanation: "Yoruba uses a Latin-based alphabet with special characters."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Speak with Yoruba speakers.",
        example: "Daily conversations, business"
      },
      {
        id: "app_002",
        title: "Culture",
        description: "Understand Yoruba culture.",
        example: "Music, film, literature"
      },
      {
        id: "app_003",
        title: "Travel",
        description: "Communicate in Yoruba-speaking areas.",
        example: "Nigeria, Benin, Togo"
      },
      {
        id: "app_004",
        title: "Heritage",
        description: "Connect with Yoruba heritage.",
        example: "Family, traditions, identity"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Yoruba", definition: "A major language of West Africa spoken by over 40 million people." },
    { term: "Tone", definition: "The pitch used in pronunciation that changes meaning." },
    { term: "Greeting", definition: "A polite expression used when meeting someone." },
    { term: "Proverb", definition: "A short saying that expresses a general truth." },
    { term: "Family", definition: "A group of people related by blood or marriage." },
    { term: "Culture", definition: "The customs, arts, and social institutions of a group." },
    { term: "Traditional", definition: "Relating to customs and beliefs passed down." },
    { term: "Dialect", definition: "A regional variety of a language." },
    { term: "Heritage", definition: "The traditions and culture passed down from ancestors." },
    { term: "Oral Tradition", definition: "Knowledge passed down through speech." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "How many letters are in the Yoruba alphabet?",
      type: "multiple_choice",
      options: ["20", "25", "26", "30"],
      answer: "25",
      explanation: "The Yoruba alphabet has 25 letters."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How do you say 'Good morning' in Yoruba?",
      type: "multiple_choice",
      options: ["Ẹ káàárọ̀", "Ẹ káàsán", "Ẹ káalẹ́", "Báwo ni?"],
      answer: "Ẹ káàárọ̀",
      explanation: "'Ẹ káàárọ̀' means 'Good morning' in Yoruba."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the Yoruba word for 'water'?",
      type: "multiple_choice",
      options: ["Omi", "Iyan", "Obe", "Ami"],
      answer: "Omi",
      explanation: "Omi means water in Yoruba."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the Yoruba word for '10'?",
      type: "multiple_choice",
      options: ["Mẹwa", "Mẹta", "Mẹrin", "Ogún"],
      answer: "Mẹwa",
      explanation: "Mẹwa means '10' in Yoruba."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the Yoruba word for 'mother'?",
      type: "multiple_choice",
      options: ["Ìyá", "Bàbá", "Ọmọ", "Aya"],
      answer: "Ìyá",
      explanation: "Ìyá means mother in Yoruba."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How many tones are there in Yoruba?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Yoruba has three tones: high, medium, and low."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the Yoruba verb for 'to eat'?",
      type: "multiple_choice",
      options: ["Mu", "Jẹ", "Lọ", "Sun"],
      answer: "Jẹ",
      explanation: "Jẹ means 'to eat' in Yoruba."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the Yoruba word for 'rice'?",
      type: "multiple_choice",
      options: ["Ireṣi", "Ọkà", "Ẹran", "Obe"],
      answer: "Ireṣi",
      explanation: "Ireṣi means rice in Yoruba."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the Yoruba word for 'father'?",
      type: "multiple_choice",
      options: ["Ìyá", "Bàbá", "Ọmọ", "Aya"],
      answer: "Bàbá",
      explanation: "Bàbá means father in Yoruba."
    },
    {
      id: "prac_010",
      objective: "obj_016",
      difficulty: "hard",
      question: "Yoruba proverbs are an example of what?",
      type: "multiple_choice",
      options: ["Written literature", "Oral tradition", "Modern poetry", "Music"],
      answer: "Oral tradition",
      explanation: "Yoruba proverbs are part of the oral tradition."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_yoruba",
    title: "Yoruba Language Quiz",
    description: "Test your understanding of the Yoruba language",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many letters are in the Yoruba alphabet?",
        type: "short_answer",
        answer_key: "25",
        explanation: "The Yoruba alphabet has 25 letters."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How do you say 'Good morning' in Yoruba?",
        type: "short_answer",
        answer_key: "Ẹ káàárọ̀",
        explanation: "'Ẹ káàárọ̀' means 'Good morning' in Yoruba."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the Yoruba word for 'water'?",
        type: "short_answer",
        answer_key: "Omi",
        explanation: "Omi means water in Yoruba."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the Yoruba word for '10'?",
        type: "short_answer",
        answer_key: "Mẹwa",
        explanation: "Mẹwa means '10' in Yoruba."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Yoruba word for 'mother'?",
        type: "short_answer",
        answer_key: "Ìyá",
        explanation: "Ìyá means mother in Yoruba."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How many tones are there in Yoruba?",
        type: "short_answer",
        answer_key: "3",
        explanation: "Yoruba has three tones: high, medium, and low."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the Yoruba verb for 'to eat'?",
        type: "short_answer",
        answer_key: "Jẹ",
        explanation: "Jẹ means 'to eat' in Yoruba."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the Yoruba word for 'rice'?",
        type: "short_answer",
        answer_key: "Ireṣi",
        explanation: "Ireṣi means rice in Yoruba."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the Yoruba word for 'father'?",
        type: "short_answer",
        answer_key: "Bàbá",
        explanation: "Bàbá means father in Yoruba."
      },
      {
        id: "ass_010",
        objective: "obj_016",
        difficulty: "hard",
        question: "Yoruba proverbs are an example of what?",
        type: "short_answer",
        answer_key: "Oral tradition",
        explanation: "Yoruba proverbs are part of the oral tradition."
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
        "Understand Yoruba alphabet and pronunciation",
        "Learn basic greetings and introductions",
        "Build vocabulary",
        "Understand Yoruba culture"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Yoruba?" },
        { time: "5-10 min", activity: "Direct Instruction - Alphabet and Pronunciation" },
        { time: "10-15 min", activity: "Direct Instruction - Tones" },
        { time: "15-20 min", activity: "Direct Instruction - Greetings" },
        { time: "20-25 min", activity: "Direct Instruction - Vocabulary" },
        { time: "25-30 min", activity: "Direct Instruction - Family and Food" },
        { time: "30-35 min", activity: "Direct Instruction - Proverbs" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "25",
        prac_002: "Ẹ káàárọ̀",
        prac_003: "Omi",
        prac_004: "Mẹwa",
        prac_005: "Ìyá",
        prac_006: "3",
        prac_007: "Jẹ",
        prac_008: "Ireṣi",
        prac_009: "Bàbá",
        prac_010: "Oral tradition"
      },
      assessment: {
        ass_001: "25",
        ass_002: "Ẹ káàárọ̀",
        ass_003: "Omi",
        ass_004: "Mẹwa",
        ass_005: "Ìyá",
        ass_006: "3",
        ass_007: "Jẹ",
        ass_008: "Ireṣi",
        ass_009: "Bàbá",
        ass_010: "Oral tradition"
      }
    },
    extensionActivities: [
      "Practice Yoruba conversation",
      "Learn Yoruba songs",
      "Research Yoruba culture",
      "Watch Yoruba films"
    ],
    differentiation: {
      struggling: [
        "Focus on basic phrases",
        "Use simple examples",
        "Use audio aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a paragraph in Yoruba",
        "Translate a Yoruba proverb",
        "Research Yoruba grammar",
        "Study Yoruba literature"
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
      title: "Yoruba Alphabet",
      description: "Diagram showing the Yoruba alphabet",
      url: "/diagrams/yoruba-alphabet.png",
      alt: "Yoruba alphabet diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Yoruba Tones",
      description: "Diagram showing Yoruba tones",
      url: "/diagrams/yoruba-tones.png",
      alt: "Yoruba tones diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Yoruba Greetings",
      description: "Diagram showing common greetings",
      url: "/diagrams/yoruba-greetings.png",
      alt: "Yoruba greetings diagram"
    }
  ]
};