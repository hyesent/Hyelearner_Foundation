// Location: src/data/lessons/languages/igbo.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "lang_lesson_igbo",
  subject: "Igbo",
  topic: "Igbo",
  name: "Igbo Language",
  icon: "🇳🇬",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 17,
    totalPracticeQuestions: 25,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 20,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Interest in learning Igbo",
    "Basic understanding of language learning",
    "Openness to new sounds and structures",
    "Willingness to practice"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Arabic",
      file: "languages/arabic.js"
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
      description: "Learn the Igbo alphabet and pronunciation",
      indicator: "Student can pronounce Igbo letters and sounds correctly"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Learn basic greetings and introductions",
      indicator: "Student can greet and introduce themselves in Igbo"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Learn common Igbo phrases",
      indicator: "Student can use everyday phrases in Igbo"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify numbers, days, and months in Igbo",
      indicator: "Student can count and name days and months"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Learn basic vocabulary and sentence structure",
      indicator: "Student can construct basic sentences in Igbo"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the tones in Igbo",
      indicator: "Student can identify and use tones correctly"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Learn common verbs and verb usage",
      indicator: "Student can use basic verbs in sentences"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe food and drink in Igbo",
      indicator: "Student can talk about food and drink"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe family members in Igbo",
      indicator: "Student can identify family members"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the grammar structure of Igbo",
      indicator: "Student can explain basic Igbo grammar"
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
      description: "Describe Igbo culture and customs",
      indicator: "Student can discuss Igbo culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Understand and tell time in Igbo",
      indicator: "Student can tell time in Igbo"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the Igbo naming system",
      indicator: "Student can explain Igbo names and their meanings"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe festivals and celebrations in Igbo",
      indicator: "Student can discuss festivals and celebrations"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze Igbo proverbs and their meanings",
      indicator: "Student can explain Igbo proverbs"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Explain the importance of the Igbo language",
      indicator: "Student can discuss the preservation of Igbo"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Igbo Language - Speak Igbo",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the Igbo language, from basic greetings to advanced conversation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Igbo Language</h2>
      <p><strong>Igbo</strong> is a language spoken primarily in southeastern Nigeria by over 40 million people. It is one of the major languages of Nigeria and has a rich cultural heritage. Igbo is known for its tonal system and proverbs.</p>
      
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
            <li>• Igbo has over 40 million speakers</li>
            <li>• It is a tonal language with three tones</li>
            <li>• Igbo is widely spoken in southeastern Nigeria</li>
            <li>• The language has a rich oral tradition</li>
            <li>• Igbo proverbs are famous</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Learn Igbo?</h4>
        <p>Learning Igbo helps you connect with Igbo culture, people, and heritage. It is a beautiful and expressive language.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Igbo Alphabet and Pronunciation",
        objective: "obj_001",
        text: `
          <h3>Igbo Alphabet</h3>
          <p>The Igbo alphabet has 36 letters.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Vowels</h4>
              <ul>
                <li>• <strong>A</strong> - (ah)</li>
                <li>• <strong>E</strong> - (eh)</li>
                <li>• <strong>I</strong> - (ee)</li>
                <li>• <strong>O</strong> - (oh)</li>
                <li>• <strong>U</strong> - (oo)</li>
                <li>• <strong>Ị</strong> - (ih)</li>
                <li>• <strong>Ọ</strong> - (aw)</li>
                <li>• <strong>Ụ</strong> - (uh)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Consonants</h4>
              <ul>
                <li>• B, C, D, F, G, Gb</li>
                <li>• H, J, K, Kp, L, M</li>
                <li>• N, Ṅ, P, R, S, Sh</li>
                <li>• T, V, W, Y, Z</li>
                <li>• <strong>Note:</strong> Some letters have special sounds</li>
                <li>• Example: Gb is a single consonant</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Pronunciation Tips:</strong>
            <ul>
              <li>• <strong>Ị:</strong> Say "i" as in "bit"</li>
              <li>• <strong>Ọ:</strong> Say "o" as in "caw"</li>
              <li>• <strong>Ụ:</strong> Say "u" as in "put"</li>
              <li>• <strong>Gb:</strong> A single explosive sound</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Tones in Igbo",
        objective: "obj_006",
        text: `
          <h3>Igbo Tones</h3>
          <p>Igbo is a tonal language with three tones.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 High Tone</h4>
              <ul>
                <li>• Marked with (á)</li>
                <li>• Example: <strong>ákwụ́kwọ</strong> (book)</li>
                <li>• High pitch</li>
                <li>• Most common tone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Medium Tone</h4>
              <ul>
                <li>• Marked with (ā)</li>
                <li>• Example: <strong>ākā</strong> (hand)</li>
                <li>• Mid pitch</li>
                <li>• Often unmarked</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Low Tone</h4>
              <ul>
                <li>• Marked with (à)</li>
                <li>• Example: <strong>àkwà</strong> (bed)</li>
                <li>• Low pitch</li>
                <li>• Changes meaning</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Important Note:</strong>
            <ul>
              <li>• The tone changes the meaning of words</li>
              <li>• Example: <strong>ákwụ́kwọ</strong> (book) vs <strong>àkwà</strong> (bed)</li>
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
          <h3>Greetings in Igbo</h3>
          <p>Greetings are very important in Igbo culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Greetings</h4>
              <ul>
                <li>• <strong>Ụtụtụ ọma:</strong> Good morning</li>
                <li>• <strong>Ehihie ọma:</strong> Good afternoon</li>
                <li>• <strong>Mgbede ọma:</strong> Good evening</li>
                <li>• <strong>Kedu?</strong> How are you?</li>
                <li>• <strong>Ọ dị mma:</strong> I'm fine</li>
                <li>• <strong>Nnọọ:</strong> Welcome</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Introductions</h4>
              <ul>
                <li>• <strong>Aha m bụ...</strong> My name is...</li>
                <li>• <strong>Gịnị bụ aha gị?</strong> What is your name?</li>
                <li>• <strong>Ọ dị m mma ịhụ gị:</strong> Nice to meet you</li>
                <li>• <strong>Ị si ebe?</strong> Where are you from?</li>
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
          <h3>Numbers in Igbo</h3>
          <p>Learning numbers is essential for everyday communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Numbers 1-20</h4>
              <ul>
                <li>1 - <strong>Otu</strong></li>
                <li>2 - <strong>Abụọ</strong></li>
                <li>3 - <strong>Atọ</strong></li>
                <li>4 - <strong>Anọ</strong></li>
                <li>5 - <strong>Ise</strong></li>
                <li>6 - <strong>Isii</strong></li>
                <li>7 - <strong>Asaa</strong></li>
                <li>8 - <strong>Asatọ</strong></li>
                <li>9 - <strong>Itoolu</strong></li>
                <li>10 - <strong>Iri</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Numbers 11-20</h4>
              <ul>
                <li>11 - <strong>Iri na otu</strong></li>
                <li>12 - <strong>Iri na abụọ</strong></li>
                <li>13 - <strong>Iri na atọ</strong></li>
                <li>14 - <strong>Iri na anọ</strong></li>
                <li>15 - <strong>Iri na ise</strong></li>
                <li>16 - <strong>Iri na isii</strong></li>
                <li>17 - <strong>Iri na asaa</strong></li>
                <li>18 - <strong>Iri na asatọ</strong></li>
                <li>19 - <strong>Iri na itoolu</strong></li>
                <li>20 - <strong>Iri abụọ</strong></li>
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
          <h3>Family Members in Igbo</h3>
          <p>Family is central to Igbo culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Immediate Family</h4>
              <ul>
                <li>• <strong>Nna:</strong> Father</li>
                <li>• <strong>Nne:</strong> Mother</li>
                <li>• <strong>Nwa:</strong> Child</li>
                <li>• <strong>Nwoke:</strong> Son</li>
                <li>• <strong>Nwaanyị:</strong> Daughter</li>
                <li>• <strong>Nwanne nwoke:</strong> Brother</li>
                <li>• <strong>Nwanne nwaanyị:</strong> Sister</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Extended Family</h4>
              <ul>
                <li>• <strong>Nnanna:</strong> Grandfather</li>
                <li>• <strong>Nnenne:</strong> Grandmother</li>
                <li>• <strong>Ọkpara:</strong> First son</li>
                <li>• <strong>Ada:</strong> First daughter</li>
                <li>• <strong>Nwanne nne:</strong> Cousin (maternal)</li>
                <li>• <strong>Nwanne nna:</strong> Cousin (paternal)</li>
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
          <h3>Food and Drink in Igbo</h3>
          <p>Food is an important part of Igbo culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Food</h4>
              <ul>
                <li>• <strong>Osikapa:</strong> Rice</li>
                <li>• <strong>Akpụ:</strong> Cassava</li>
                <li>• <strong>Azụ:</strong> Fish</li>
                <li>• <strong>Anụ:</strong> Meat</li>
                <li>• <strong>Ofe:</strong> Soup</li>
                <li>• <strong>Ji:</strong> Yam</li>
                <li>• <strong>Nri:</strong> Food/Meal</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drink</h4>
              <ul>
                <li>• <strong>Mmiri:</strong> Water</li>
                <li>• <strong>Nkwu:</strong> Palm wine</li>
                <li>• <strong>Kọfị:</strong> Coffee</li>
                <li>• <strong>Tii:</strong> Tea</li>
                <li>• <strong>Ihe ọṅụṅụ:</strong> Drink</li>
                <li>• <strong>Mmanụ:</strong> Oil</li>
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
          <h3>Common Verbs in Igbo</h3>
          <p>Verbs are essential for constructing sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Verbs</h4>
              <ul>
                <li>• <strong>Iri:</strong> Eat</li>
                <li>• <strong>Ịṅụ:</strong> Drink</li>
                <li>• <strong>Ịga:</strong> Go</li>
                <li>• <strong>Ịbịa:</strong> Come</li>
                <li>• <strong>Ịrahụ ụra:</strong> Sleep</li>
                <li>• <strong>Ịgụ:</strong> Read</li>
                <li>• <strong>Ịde:</strong> Write</li>
                <li>• <strong>Ịkwụ:</strong> Pay</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>Ana m eri:</strong> I am eating</li>
                <li>• <strong>Ọ na-aga:</strong> He/She goes</li>
                <li>• <strong>Ana m agụ:</strong> I am reading</li>
                <li>• <strong>Ị na-ede:</strong> You write</li>
                <li>• <strong>Ha na-abịa:</strong> They are coming</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Igbo Proverbs",
        objective: "obj_016",
        text: `
          <h3>Igbo Proverbs</h3>
          <p>Proverbs are an important part of Igbo oral tradition.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Popular Proverbs</h4>
              <ul>
                <li>• <strong>"Onye kwe, Chi ya ekwe."</strong></li>
                <li>• If a person agrees, their god agrees.</li>
                <li>• <strong>"Nwata kpọọ nna ya, nna ya akpọ ya."</strong></li>
                <li>• If a child calls their father, their father will call them.</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Proverbs</h4>
              <ul>
                <li>• <strong>"Ebe onye si na-aga, ka ọ na-ala."</strong></li>
                <li>• Where a person comes from, that is where they return.</li>
                <li>• <strong>"Onye na-ata nri, na-ata ụtọ."</strong></li>
                <li>• The person who eats food enjoys it.</li>
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
          <h4>🇳🇬 Igbo Language</h4>
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
            <li>• Ụtụtụ ọma - Good morning</li>
            <li>• Kedu? - How are you?</li>
            <li>• Aha m bụ... - My name is...</li>
            <li>• Ọ dị mma - I'm fine</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Learning Igbo connects you to a rich cultural heritage and millions of speakers worldwide.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "All African languages sound the same",
        correction: "Igbo is unique with its tonal system",
        explanation: "Igbo has specific sounds and tones that distinguish it."
      },
      {
        id: "mis_002",
        misconception: "Tones don't matter in Igbo",
        correction: "Tones are essential for meaning in Igbo",
        explanation: "Using the wrong tone can change the meaning of a word."
      },
      {
        id: "mis_003",
        misconception: "Igbo is only spoken in Nigeria",
        correction: "Igbo is spoken in Nigeria and diaspora",
        explanation: "Igbo is a major language with speakers worldwide."
      },
      {
        id: "mis_004",
        misconception: "Igbo has no written form",
        correction: "Igbo has a well-developed written form",
        explanation: "Igbo uses a Latin-based alphabet with special characters."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Speak with Igbo speakers.",
        example: "Daily conversations, business"
      },
      {
        id: "app_002",
        title: "Culture",
        description: "Understand Igbo culture.",
        example: "Music, film, literature"
      },
      {
        id: "app_003",
        title: "Travel",
        description: "Communicate in Igbo-speaking areas.",
        example: "Southeastern Nigeria"
      },
      {
        id: "app_004",
        title: "Heritage",
        description: "Connect with Igbo heritage.",
        example: "Family, traditions, identity"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Igbo", definition: "A major language of Nigeria spoken by over 40 million people." },
    { term: "Tone", definition: "The pitch used in pronunciation that changes meaning." },
    { term: "Greeting", definition: "A polite expression used when meeting someone." },
    { term: "Proverb", definition: "A short saying that expresses a general truth." },
    { term: "Family", definition: "A group of people related by blood or marriage." },
    { term: "Culture", definition: "The customs, arts, and social institutions of a group." },
    { term: "Oral Tradition", definition: "Knowledge passed down through speech." },
    { term: "Heritage", definition: "The traditions and culture passed down from ancestors." },
    { term: "Dialect", definition: "A regional variety of a language." },
    { term: "Community", definition: "A group of people with shared identity." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "How many letters are in the Igbo alphabet?",
      type: "multiple_choice",
      options: ["28", "30", "36", "40"],
      answer: "36",
      explanation: "The Igbo alphabet has 36 letters."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How do you say 'Good morning' in Igbo?",
      type: "multiple_choice",
      options: ["Ụtụtụ ọma", "Ehihie ọma", "Mgbede ọma", "Kedu?"],
      answer: "Ụtụtụ ọma",
      explanation: "'Ụtụtụ ọma' means 'Good morning' in Igbo."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the Igbo word for 'water'?",
      type: "multiple_choice",
      options: ["Mmiri", "Nkwu", "Ofe", "Anụ"],
      answer: "Mmiri",
      explanation: "Mmiri means water in Igbo."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the Igbo word for '10'?",
      type: "multiple_choice",
      options: ["Iri", "Otu", "Abụọ", "Atọ"],
      answer: "Iri",
      explanation: "Iri means '10' in Igbo."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the Igbo word for 'mother'?",
      type: "multiple_choice",
      options: ["Nna", "Nne", "Nwa", "Nwoke"],
      answer: "Nne",
      explanation: "Nne means mother in Igbo."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "How many tones are there in Igbo?",
      type: "multiple_choice",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Igbo has three tones: high, medium, and low."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the Igbo verb for 'to eat'?",
      type: "multiple_choice",
      options: ["Ịga", "Iri", "Ịṅụ", "Ịbịa"],
      answer: "Iri",
      explanation: "Iri means 'to eat' in Igbo."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the Igbo word for 'rice'?",
      type: "multiple_choice",
      options: ["Osikapa", "Akpụ", "Azụ", "Anụ"],
      answer: "Osikapa",
      explanation: "Osikapa means rice in Igbo."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the Igbo word for 'father'?",
      type: "multiple_choice",
      options: ["Nne", "Nna", "Nwa", "Nwanyị"],
      answer: "Nna",
      explanation: "Nna means father in Igbo."
    },
    {
      id: "prac_010",
      objective: "obj_016",
      difficulty: "hard",
      question: "Igbo proverbs are an example of what?",
      type: "multiple_choice",
      options: ["Written literature", "Oral tradition", "Modern poetry", "Music"],
      answer: "Oral tradition",
      explanation: "Igbo proverbs are part of the oral tradition."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_igbo",
    title: "Igbo Language Quiz",
    description: "Test your understanding of the Igbo language",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many letters are in the Igbo alphabet?",
        type: "short_answer",
        answer_key: "36",
        explanation: "The Igbo alphabet has 36 letters."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How do you say 'Good morning' in Igbo?",
        type: "short_answer",
        answer_key: "Ụtụtụ ọma",
        explanation: "'Ụtụtụ ọma' means 'Good morning' in Igbo."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the Igbo word for 'water'?",
        type: "short_answer",
        answer_key: "Mmiri",
        explanation: "Mmiri means water in Igbo."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the Igbo word for '10'?",
        type: "short_answer",
        answer_key: "Iri",
        explanation: "Iri means '10' in Igbo."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Igbo word for 'mother'?",
        type: "short_answer",
        answer_key: "Nne",
        explanation: "Nne means mother in Igbo."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "How many tones are there in Igbo?",
        type: "short_answer",
        answer_key: "3",
        explanation: "Igbo has three tones: high, medium, and low."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the Igbo verb for 'to eat'?",
        type: "short_answer",
        answer_key: "Iri",
        explanation: "Iri means 'to eat' in Igbo."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the Igbo word for 'rice'?",
        type: "short_answer",
        answer_key: "Osikapa",
        explanation: "Osikapa means rice in Igbo."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the Igbo word for 'father'?",
        type: "short_answer",
        answer_key: "Nna",
        explanation: "Nna means father in Igbo."
      },
      {
        id: "ass_010",
        objective: "obj_016",
        difficulty: "hard",
        question: "Igbo proverbs are an example of what?",
        type: "short_answer",
        answer_key: "Oral tradition",
        explanation: "Igbo proverbs are part of the oral tradition."
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
        "Understand Igbo alphabet and pronunciation",
        "Learn basic greetings and introductions",
        "Build vocabulary",
        "Understand Igbo culture"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Igbo?" },
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
        prac_001: "36",
        prac_002: "Ụtụtụ ọma",
        prac_003: "Mmiri",
        prac_004: "Iri",
        prac_005: "Nne",
        prac_006: "3",
        prac_007: "Iri",
        prac_008: "Osikapa",
        prac_009: "Nna",
        prac_010: "Oral tradition"
      },
      assessment: {
        ass_001: "36",
        ass_002: "Ụtụtụ ọma",
        ass_003: "Mmiri",
        ass_004: "Iri",
        ass_005: "Nne",
        ass_006: "3",
        ass_007: "Iri",
        ass_008: "Osikapa",
        ass_009: "Nna",
        ass_010: "Oral tradition"
      }
    },
    extensionActivities: [
      "Practice Igbo conversation",
      "Learn Igbo songs",
      "Research Igbo culture",
      "Watch Igbo films"
    ],
    differentiation: {
      struggling: [
        "Focus on basic phrases",
        "Use simple examples",
        "Use audio aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a paragraph in Igbo",
        "Translate an Igbo proverb",
        "Research Igbo grammar",
        "Study Igbo literature"
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
      title: "Igbo Alphabet",
      description: "Diagram showing the Igbo alphabet",
      url: "/diagrams/igbo-alphabet.png",
      alt: "Igbo alphabet diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Igbo Tones",
      description: "Diagram showing Igbo tones",
      url: "/diagrams/igbo-tones.png",
      alt: "Igbo tones diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Igbo Greetings",
      description: "Diagram showing common greetings",
      url: "/diagrams/igbo-greetings.png",
      alt: "Igbo greetings diagram"
    }
  ]
};