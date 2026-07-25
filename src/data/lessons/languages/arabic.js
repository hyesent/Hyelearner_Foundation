// Location: src/data/lessons/languages/arabic.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "lang_lesson_arabic",
  subject: "Arabic",
  topic: "Arabic",
  name: "Arabic Language",
  icon: "🇸🇦",
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
    "Interest in learning Arabic",
    "Basic understanding of language learning",
    "Openness to new sounds and structures",
    "Willingness to practice"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Language lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Learn the Arabic alphabet and pronunciation",
      indicator: "Student can pronounce Arabic letters and sounds correctly"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Learn basic greetings and introductions",
      indicator: "Student can greet and introduce themselves in Arabic"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Learn common Arabic phrases",
      indicator: "Student can use everyday phrases in Arabic"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Identify numbers, days, and months in Arabic",
      indicator: "Student can count and name days and months"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Learn basic vocabulary and sentence structure",
      indicator: "Student can construct basic sentences in Arabic"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain Arabic pronunciation rules",
      indicator: "Student can pronounce Arabic words correctly"
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
      description: "Describe food and drink in Arabic",
      indicator: "Student can talk about food and drink"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe family members in Arabic",
      indicator: "Student can identify family members"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the grammar structure of Arabic",
      indicator: "Student can explain basic Arabic grammar"
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
      description: "Describe Arab culture and customs",
      indicator: "Student can discuss Arab culture"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Understand and tell time in Arabic",
      indicator: "Student can tell time in Arabic"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain the Arabic naming system",
      indicator: "Student can explain Arabic names"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Describe festivals and celebrations in Arabic culture",
      indicator: "Student can discuss festivals and celebrations"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Analyze Arabic proverbs and their meanings",
      indicator: "Student can explain Arabic proverbs"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Understand the importance of Arabic in the Islamic world",
      indicator: "Student can discuss the significance of Arabic"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Explain the future of the Arabic language",
      indicator: "Student can discuss the preservation of Arabic"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Arabic Language - Speak Arabic",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the Arabic language, from basic greetings to advanced conversation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Arabic Language</h2>
      <p><strong>Arabic</strong> is a Semitic language spoken by over 420 million people worldwide. It is the official language of 22 countries and is one of the six official languages of the United Nations. Arabic is the language of the Quran and is essential for understanding Islamic culture and civilization.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🇸🇦 Key Concepts</h3>
          <ul>
            <li>✓ Alphabet and Pronunciation</li>
            <li>✓ Greetings and Introductions</li>
            <li>✓ Vocabulary</li>
            <li>✓ Grammar Structure</li>
            <li>✓ Verb Conjugation</li>
            <li>✓ Arab Culture</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Arabic is spoken by over 420 million people</li>
            <li>• It is an official language of the UN</li>
            <li>• Arabic is the language of the Quran</li>
            <li>• The Arabic script is written from right to left</li>
            <li>• Arab culture has a rich literary tradition</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Learn Arabic?</h4>
        <p>Learning Arabic opens doors to understanding Islamic culture, literature, and civilization. It is a language of global significance.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Arabic Alphabet",
        objective: "obj_001",
        text: `
          <h3>Arabic Alphabet</h3>
          <p>The Arabic alphabet has 28 letters. It is written from right to left.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Letters</h4>
              <ul>
                <li>• <strong>ا</strong> - Alif</li>
                <li>• <strong>ب</strong> - Baa</li>
                <li>• <strong>ت</strong> - Taa</li>
                <li>• <strong>ث</strong> - Thaa</li>
                <li>• <strong>ج</strong> - Jeem</li>
                <li>• <strong>ح</strong> - Haa</li>
                <li>• <strong>خ</strong> - Khaa</li>
                <li>• <strong>د</strong> - Daal</li>
                <li>• <strong>ذ</strong> - Dhaal</li>
                <li>• <strong>ر</strong> - Raa</li>
                <li>• <strong>ز</strong> - Zaay</li>
                <li>• <strong>س</strong> - Seen</li>
                <li>• <strong>ش</strong> - Sheen</li>
                <li>• <strong>ص</strong> - Saad</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Letters</h4>
              <ul>
                <li>• <strong>ض</strong> - Daad</li>
                <li>• <strong>ط</strong> - Taa</li>
                <li>• <strong>ظ</strong> - Zaa</li>
                <li>• <strong>ع</strong> - Ayn</li>
                <li>• <strong>غ</strong> - Ghayn</li>
                <li>• <strong>ف</strong> - Faa</li>
                <li>• <strong>ق</strong> - Qaaf</li>
                <li>• <strong>ك</strong> - Kaaf</li>
                <li>• <strong>ل</strong> - Laam</li>
                <li>• <strong>م</strong> - Meem</li>
                <li>• <strong>ن</strong> - Noon</li>
                <li>• <strong>ه</strong> - Haa</li>
                <li>• <strong>و</strong> - Waw</li>
                <li>• <strong>ي</strong> - Yaa</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Important Note:</strong>
            <ul>
              <li>• Arabic is written from <strong>right to left</strong></li>
              <li>• Letters change shape depending on position</li>
              <li>• There are 28 letters in the Arabic alphabet</li>
              <li>• Some letters have special sounds</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Greetings and Introductions",
        objective: "obj_002",
        text: `
          <h3>Greetings in Arabic</h3>
          <p>Greetings are very important in Arab culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Common Greetings</h4>
              <ul>
                <li>• <strong>السلام عليكم</strong> (As-salamu alaykum) - Peace be upon you</li>
                <li>• <strong>وعليكم السلام</strong> (Wa alaykum as-salam) - And upon you peace</li>
                <li>• <strong>صباح الخير</strong> (Sabah al-khayr) - Good morning</li>
                <li>• <strong>مساء الخير</strong> (Masa' al-khayr) - Good evening</li>
                <li>• <strong>كيف حالك؟</strong> (Kayfa haluka?) - How are you?</li>
                <li>• <strong>بخير</strong> (Bikhayr) - Fine</li>
                <li>• <strong>شكراً</strong> (Shukran) - Thank you</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Introductions</h4>
              <ul>
                <li>• <strong>اسمي...</strong> (Ismi...) - My name is...</li>
                <li>• <strong>ما اسمك؟</strong> (Ma ismuka?) - What is your name?</li>
                <li>• <strong>تشرفت بمقابلتك</strong> (Tasharraftu bimuqabalatika) - Nice to meet you</li>
                <li>• <strong>أنا من...</strong> (Ana min...) - I am from...</li>
                <li>• <strong>من أين أنت؟</strong> (Min ayna anta?) - Where are you from?</li>
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
          <h3>Numbers in Arabic</h3>
          <p>Learning numbers is essential for everyday communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Numbers 1-10</h4>
              <ul>
                <li>1 - <strong>واحد</strong> (Wahid)</li>
                <li>2 - <strong>اثنان</strong> (Ithnan)</li>
                <li>3 - <strong>ثلاثة</strong> (Thalatha)</li>
                <li>4 - <strong>أربعة</strong> (Arba'a)</li>
                <li>5 - <strong>خمسة</strong> (Khamsa)</li>
                <li>6 - <strong>ستة</strong> (Sitta)</li>
                <li>7 - <strong>سبعة</strong> (Sab'a)</li>
                <li>8 - <strong>ثمانية</strong> (Thamaniya)</li>
                <li>9 - <strong>تسعة</strong> (Tis'a)</li>
                <li>10 - <strong>عشرة</strong> (Ashara)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Numbers 11-20</h4>
              <ul>
                <li>11 - <strong>أحد عشر</strong> (Ahad 'ashar)</li>
                <li>12 - <strong>اثنا عشر</strong> (Ithna 'ashar)</li>
                <li>13 - <strong>ثلاثة عشر</strong> (Thalatha 'ashar)</li>
                <li>14 - <strong>أربعة عشر</strong> (Arba'a 'ashar)</li>
                <li>15 - <strong>خمسة عشر</strong> (Khamsa 'ashar)</li>
                <li>16 - <strong>ستة عشر</strong> (Sitta 'ashar)</li>
                <li>17 - <strong>سبعة عشر</strong> (Sab'a 'ashar)</li>
                <li>18 - <strong>ثمانية عشر</strong> (Thamaniya 'ashar)</li>
                <li>19 - <strong>تسعة عشر</strong> (Tis'a 'ashar)</li>
                <li>20 - <strong>عشرون</strong> ('Ishrun)</li>
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
          <h3>Family Members in Arabic</h3>
          <p>Family is very important in Arab culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Immediate Family</h4>
              <ul>
                <li>• <strong>أب</strong> (Ab) - Father</li>
                <li>• <strong>أم</strong> (Umm) - Mother</li>
                <li>• <strong>ابن</strong> (Ibn) - Son</li>
                <li>• <strong>ابنة</strong> (Ibnah) - Daughter</li>
                <li>• <strong>أخ</strong> (Akh) - Brother</li>
                <li>• <strong>أخت</strong> (Ukht) - Sister</li>
                <li>• <strong>زوج</strong> (Zawj) - Husband</li>
                <li>• <strong>زوجة</strong> (Zawjah) - Wife</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Extended Family</h4>
              <ul>
                <li>• <strong>جد</strong> (Jadd) - Grandfather</li>
                <li>• <strong>جدة</strong> (Jaddah) - Grandmother</li>
                <li>• <strong>عم</strong> (Amm) - Uncle (paternal)</li>
                <li>• <strong>خال</strong> (Khal) - Uncle (maternal)</li>
                <li>• <strong>عمة</strong> (Ammah) - Aunt (paternal)</li>
                <li>• <strong>خالة</strong> (Khala) - Aunt (maternal)</li>
                <li>• <strong>ابن عم</strong> (Ibn 'amm) - Cousin (male)</li>
                <li>• <strong>ابنة عم</strong> (Ibnah 'amm) - Cousin (female)</li>
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
          <h3>Food and Drink in Arabic</h3>
          <p>Arab cuisine is rich and diverse.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Food</h4>
              <ul>
                <li>• <strong>خبز</strong> (Khubz) - Bread</li>
                <li>• <strong>لحم</strong> (Lahm) - Meat</li>
                <li>• <strong>سمك</strong> (Samak) - Fish</li>
                <li>• <strong>أرز</strong> (Ruzz) - Rice</li>
                <li>• <strong>فواكه</strong> (Fawakih) - Fruits</li>
                <li>• <strong>خضروات</strong> (Khudrawat) - Vegetables</li>
                <li>• <strong>جبن</strong> (Jubn) - Cheese</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Drink</h4>
              <ul>
                <li>• <strong>ماء</strong> (Ma') - Water</li>
                <li>• <strong>حليب</strong> (Halib) - Milk</li>
                <li>• <strong>قهوة</strong> (Qahwah) - Coffee</li>
                <li>• <strong>شاي</strong> (Shay) - Tea</li>
                <li>• <strong>عصير</strong> ('Asir) - Juice</li>
                <li>• <strong>مشروبات</strong> (Mashrubat) - Drinks</li>
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
          <h3>Common Verbs in Arabic</h3>
          <p>Verbs are essential for constructing sentences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Basic Verbs</h4>
              <ul>
                <li>• <strong>أكل</strong> (Akala) - Eat</li>
                <li>• <strong>شرب</strong> (Shariba) - Drink</li>
                <li>• <strong>ذهب</strong> (Dhahaba) - Go</li>
                <li>• <strong>جاء</strong> (Ja'a) - Come</li>
                <li>• <strong>نام</strong> (Nama) - Sleep</li>
                <li>• <strong>قرأ</strong> (Qara'a) - Read</li>
                <li>• <strong>كتب</strong> (Kataba) - Write</li>
                <li>• <strong>تكلم</strong> (Takallama) - Speak</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li>• <strong>أنا آكل</strong> (Ana akul) - I eat</li>
                <li>• <strong>هو يذهب</strong> (Huwa yadhhabu) - He goes</li>
                <li>• <strong>هي تقرأ</strong> (Hiya taqra'u) - She reads</li>
                <li>• <strong>نحن نكتب</strong> (Nahnu naktubu) - We write</li>
                <li>• <strong>هم يتكلمون</strong> (Hum yatakallamun) - They speak</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Arab Culture",
        objective: "obj_012",
        text: `
          <h3>Arab Culture and Customs</h3>
          <p>The Arab world has a rich cultural heritage.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Aspects</h4>
              <ul>
                <li>• <strong>Religion:</strong> Islam is central</li>
                <li>• <strong>Language:</strong> Arabic unites the Arab world</li>
                <li>• <strong>Literature:</strong> Rich poetic tradition</li>
                <li>• <strong>Cuisine:</strong> Diverse and flavorful</li>
                <li>• <strong>Music:</strong> Traditional and modern</li>
                <li>• <strong>Art:</strong> Calligraphy and geometric patterns</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Customs</h4>
              <ul>
                <li>• <strong>Greetings:</strong> As-salamu alaykum</li>
                <li>• <strong>Hospitality:</strong> Welcoming guests</li>
                <li>• <strong>Family:</strong> Strong family bonds</li>
                <li>• <strong>Modesty:</strong> Respectful dress</li>
                <li>• <strong>Ramadan:</strong> Month of fasting</li>
                <li>• <strong>Eid:</strong> Festivals and celebrations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Arabic Proverbs",
        objective: "obj_016",
        text: `
          <h3>Arabic Proverbs</h3>
          <p>Proverbs are an important part of Arabic culture.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Popular Proverbs</h4>
              <ul>
                <li>• <strong>"العلم نور"</strong> (Al-'ilm nur)</li>
                <li>• Knowledge is light.</li>
                <li>• <strong>"الوقت من ذهب"</strong> (Al-waqt min dhahab)</li>
                <li>• Time is gold.</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Proverbs</h4>
              <ul>
                <li>• <strong>"الصبر مفتاح الفرج"</strong> (Al-sabr miftah al-faraj)</li>
                <li>• Patience is the key to relief.</li>
                <li>• <strong>"يد واحدة لا تصفق"</strong> (Yad wahida la tusaffiq)</li>
                <li>• One hand does not clap.</li>
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
          <h4>🇸🇦 Arabic Language</h4>
          <ul>
            <li>• Written from right to left</li>
            <li>• 28 letters in the alphabet</li>
            <li>• Over 420 million speakers</li>
            <li>• Language of the Quran</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Phrases</h4>
          <ul>
            <li>• السلام عليكم - Peace be upon you</li>
            <li>• شكراً - Thank you</li>
            <li>• اسمي... - My name is...</li>
            <li>• كيف حالك؟ - How are you?</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Arabic is a language of global significance with a rich cultural and religious heritage.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Arabic is only spoken in the Middle East",
        correction: "Arabic is spoken in 22 countries across Africa and Asia",
        explanation: "Arabic is spoken in North Africa, the Middle East, and other regions."
      },
      {
        id: "mis_002",
        misconception: "Arabic is impossible to learn",
        correction: "Arabic can be learned with practice",
        explanation: "Regular practice and study make Arabic accessible."
      },
      {
        id: "mis_003",
        misconception: "All Arabic speakers are Muslims",
        correction: "Arabic is spoken by Muslims and non-Muslims",
        explanation: "Arab Christians and other groups also speak Arabic."
      },
      {
        id: "mis_004",
        misconception: "Arabic has no written form",
        correction: "Arabic has a rich written tradition",
        explanation: "Arabic has a well-developed script and literary tradition."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Speak with Arabic speakers.",
        example: "Daily conversations, business"
      },
      {
        id: "app_002",
        title: "Travel",
        description: "Communicate in Arabic-speaking countries.",
        example: "Middle East, North Africa"
      },
      {
        id: "app_003",
        title: "Religion",
        description: "Understand the Quran.",
        example: "Islamic studies, religious practice"
      },
      {
        id: "app_004",
        title: "Culture",
        description: "Understand Arab culture.",
        example: "Literature, art, music, cuisine"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Arabic", definition: "A Semitic language spoken by over 420 million people." },
    { term: "Quran", definition: "The holy book of Islam, written in Arabic." },
    { term: "Alphabet", definition: "The 28 letters used to write Arabic." },
    { term: "Greeting", definition: "A polite expression used when meeting someone." },
    { term: "Culture", definition: "The customs, arts, and social institutions of a group." },
    { term: "Islam", definition: "A monotheistic religion founded in the 7th century." },
    { term: "Ramadan", definition: "The month of fasting in Islam." },
    { term: "Eid", definition: "A Muslim festival." },
    { term: "Calligraphy", definition: "The art of beautiful writing." },
    { term: "Proverb", definition: "A short saying that expresses a general truth." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "How many letters are in the Arabic alphabet?",
      type: "multiple_choice",
      options: ["25", "26", "28", "30"],
      answer: "28",
      explanation: "The Arabic alphabet has 28 letters."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "How do you say 'Peace be upon you' in Arabic?",
      type: "multiple_choice",
      options: ["صباح الخير", "السلام عليكم", "مساء الخير", "شكراً"],
      answer: "السلام عليكم",
      explanation: "'السلام عليكم' (As-salamu alaykum) means 'Peace be upon you'."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the Arabic word for 'thank you'?",
      type: "multiple_choice",
      options: ["شكراً", "صباح الخير", "السلام عليكم", "بخير"],
      answer: "شكراً",
      explanation: "شكراً (Shukran) means 'thank you' in Arabic."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the Arabic word for '10'?",
      type: "multiple_choice",
      options: ["عشرة", "تسعة", "ثمانية", "سبعة"],
      answer: "عشرة",
      explanation: "عشرة (Ashara) means '10' in Arabic."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the Arabic word for 'mother'?",
      type: "multiple_choice",
      options: ["أب", "أم", "ابن", "ابنة"],
      answer: "أم",
      explanation: "أم (Umm) means mother in Arabic."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What direction is Arabic written in?",
      type: "multiple_choice",
      options: ["Left to right", "Right to left", "Top to bottom", "Bottom to top"],
      answer: "Right to left",
      explanation: "Arabic is written from right to left."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the Arabic verb for 'to eat'?",
      type: "multiple_choice",
      options: ["شرب", "أكل", "ذهب", "جاء"],
      answer: "أكل",
      explanation: "أكل (Akala) means 'to eat' in Arabic."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is the Arabic word for 'water'?",
      type: "multiple_choice",
      options: ["حليب", "ماء", "قهوة", "شاي"],
      answer: "ماء",
      explanation: "ماء (Ma') means water in Arabic."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the Arabic word for 'father'?",
      type: "multiple_choice",
      options: ["أم", "أب", "ابن", "ابنة"],
      answer: "أب",
      explanation: "أب (Ab) means father in Arabic."
    },
    {
      id: "prac_010",
      objective: "obj_016",
      difficulty: "hard",
      question: "What does the proverb 'العلم نور' mean?",
      type: "multiple_choice",
      options: ["Knowledge is light", "Time is gold", "Patience is key", "One hand does not clap"],
      answer: "Knowledge is light",
      explanation: "'العلم نور' (Al-'ilm nur) means 'Knowledge is light'."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_arabic",
    title: "Arabic Language Quiz",
    description: "Test your understanding of the Arabic language",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "How many letters are in the Arabic alphabet?",
        type: "short_answer",
        answer_key: "28",
        explanation: "The Arabic alphabet has 28 letters."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "How do you say 'Peace be upon you' in Arabic?",
        type: "short_answer",
        answer_key: "السلام عليكم",
        explanation: "'السلام عليكم' means 'Peace be upon you'."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the Arabic word for 'thank you'?",
        type: "short_answer",
        answer_key: "شكراً",
        explanation: "شكراً (Shukran) means 'thank you'."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the Arabic word for '10'?",
        type: "short_answer",
        answer_key: "عشرة",
        explanation: "عشرة (Ashara) means '10'."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the Arabic word for 'mother'?",
        type: "short_answer",
        answer_key: "أم",
        explanation: "أم (Umm) means mother."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What direction is Arabic written in?",
        type: "short_answer",
        answer_key: "Right to left",
        explanation: "Arabic is written from right to left."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the Arabic verb for 'to eat'?",
        type: "short_answer",
        answer_key: "أكل",
        explanation: "أكل (Akala) means 'to eat'."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the Arabic word for 'water'?",
        type: "short_answer",
        answer_key: "ماء",
        explanation: "ماء (Ma') means water."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the Arabic word for 'father'?",
        type: "short_answer",
        answer_key: "أب",
        explanation: "أب (Ab) means father."
      },
      {
        id: "ass_010",
        objective: "obj_016",
        difficulty: "hard",
        question: "What does the proverb 'العلم نور' mean?",
        type: "short_answer",
        answer_key: "Knowledge is light",
        explanation: "'العلم نور' means 'Knowledge is light'."
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
        "Understand Arabic alphabet and pronunciation",
        "Learn basic greetings and introductions",
        "Build vocabulary",
        "Understand Arab culture"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is Arabic?" },
        { time: "5-10 min", activity: "Direct Instruction - Alphabet" },
        { time: "10-15 min", activity: "Direct Instruction - Greetings" },
        { time: "15-20 min", activity: "Direct Instruction - Numbers and Family" },
        { time: "20-25 min", activity: "Direct Instruction - Vocabulary" },
        { time: "25-30 min", activity: "Direct Instruction - Verbs" },
        { time: "30-35 min", activity: "Direct Instruction - Arab Culture" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "28",
        prac_002: "السلام عليكم",
        prac_003: "شكراً",
        prac_004: "عشرة",
        prac_005: "أم",
        prac_006: "Right to left",
        prac_007: "أكل",
        prac_008: "ماء",
        prac_009: "أب",
        prac_010: "Knowledge is light"
      },
      assessment: {
        ass_001: "28",
        ass_002: "السلام عليكم",
        ass_003: "شكراً",
        ass_004: "عشرة",
        ass_005: "أم",
        ass_006: "Right to left",
        ass_007: "أكل",
        ass_008: "ماء",
        ass_009: "أب",
        ass_010: "Knowledge is light"
      }
    },
    extensionActivities: [
      "Practice Arabic conversation",
      "Learn Arabic songs",
      "Research Arab culture",
      "Watch Arabic films"
    ],
    differentiation: {
      struggling: [
        "Focus on basic phrases",
        "Use simple examples",
        "Use audio aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Write a paragraph in Arabic",
        "Translate an Arabic proverb",
        "Research Arabic grammar",
        "Study Arabic literature"
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
      title: "Arabic Alphabet",
      description: "Diagram showing the Arabic alphabet",
      url: "/diagrams/arabic-alphabet.png",
      alt: "Arabic alphabet diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Arabic Greetings",
      description: "Diagram showing common greetings",
      url: "/diagrams/arabic-greetings.png",
      alt: "Arabic greetings diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Arab Culture",
      description: "Diagram showing Arab culture",
      url: "/diagrams/arab-culture.png",
      alt: "Arab culture diagram"
    }
  ]
};