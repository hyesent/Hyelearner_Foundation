// Location: src/data/lessons/social_sciences/civics/human_rights.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "civics_lesson_human_rights",
  subject: "Civics",
  topic: "Human Rights",
  name: "Human Rights",
  icon: "🕊️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of civics basics",
    "Knowledge of citizenship",
    "Understanding of rights and responsibilities",
    "Awareness of democracy"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Introduction to Government",
      file: "social_sciences/government/introduction_to_government.js"
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
      description: "Define human rights and explain their importance",
      indicator: "Student can explain what human rights are and why they matter"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the categories of human rights",
      indicator: "Student can classify rights into civil, political, economic, social, and cultural"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the concept of fundamental rights",
      indicator: "Student can describe the fundamental rights in Nigeria"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Describe the Universal Declaration of Human Rights",
      indicator: "Student can explain the UDHR and its significance"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain the rights in the Nigerian Constitution",
      indicator: "Student can describe the rights protected by the Nigerian Constitution"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Describe the African Charter on Human and Peoples' Rights",
      indicator: "Student can explain the African Charter and its provisions"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the concept of human dignity",
      indicator: "Student can describe what human dignity means"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the rights of women and children",
      indicator: "Student can explain the special rights of vulnerable groups"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the limitations on human rights",
      indicator: "Student can describe when rights can be restricted"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the challenges to human rights protection",
      indicator: "Student can discuss issues affecting human rights"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the role of human rights organizations",
      indicator: "Student can describe the work of human rights groups"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the concept of human rights violations",
      indicator: "Student can describe what constitutes a human rights violation"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Describe the enforcement of human rights in Nigeria",
      indicator: "Student can explain how human rights are enforced"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of human rights education",
      indicator: "Student can discuss why human rights education is essential"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the relationship between human rights and democracy",
      indicator: "Student can describe how human rights support democracy"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Human Rights - The Rights of Every Person",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about human rights, their importance, and how they are protected."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Human Rights</h2>
      <p><strong>Human rights</strong> are the basic rights and freedoms that belong to every person in the world, from birth until death. They are based on shared values like dignity, fairness, equality, respect, and independence. Human rights are protected by law and are essential for human dignity and development.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🕊️ Key Concepts</h3>
          <ul>
            <li>✓ Categories of Rights</li>
            <li>✓ Universal Declaration of Human Rights</li>
            <li>✓ Nigerian Constitution Rights</li>
            <li>✓ African Charter</li>
            <li>✓ Human Dignity</li>
            <li>✓ Rights of Vulnerable Groups</li>
            <li>✓ Human Rights Protection</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The UDHR was adopted in 1948</li>
            <li>• Nigeria ratified the UDHR</li>
            <li>• The Nigerian Constitution has a Bill of Rights</li>
            <li>• 30 articles in the UDHR</li>
            <li>• Human rights are universal and inalienable</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Human Rights Matter</h4>
        <p>Human rights protect human dignity and freedom. They ensure that every person can live with dignity, equality, and respect.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What are Human Rights?",
        objective: "obj_001",
        text: `
          <h3>Understanding Human Rights</h3>
          <p><strong>Human rights</strong> are rights that belong to every person simply because they are human. They are universal, inalienable, and indivisible.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Characteristics</h4>
              <ul>
                <li>• <strong>Universal:</strong> Apply to all people</li>
                <li>• <strong>Inalienable:</strong> Cannot be taken away</li>
                <li>• <strong>Indivisible:</strong> All rights are equally important</li>
                <li>• <strong>Interdependent:</strong> Rights are connected</li>
                <li>• <strong>Non-discriminatory:</strong> Apply to everyone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Why Human Rights Exist</h4>
              <ul>
                <li>• To protect human dignity</li>
                <li>• To ensure equality and fairness</li>
                <li>• To limit government power</li>
                <li>• To promote development</li>
                <li>• To ensure peace and justice</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Categories of Human Rights",
        objective: "obj_002",
        text: `
          <h3>Categories of Human Rights</h3>
          <p>Human rights are divided into different categories.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Civil and Political Rights</h4>
              <ul>
                <li>• Right to life</li>
                <li>• Freedom of speech</li>
                <li>• Freedom of religion</li>
                <li>• Right to vote</li>
                <li>• Freedom of assembly</li>
                <li>• Right to a fair trial</li>
                <li>• Freedom from torture</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Economic, Social and Cultural Rights</h4>
              <ul>
                <li>• Right to education</li>
                <li>• Right to work</li>
                <li>• Right to healthcare</li>
                <li>• Right to adequate housing</li>
                <li>• Right to food</li>
                <li>• Right to participate in culture</li>
                <li>• Right to social security</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Universal Declaration of Human Rights",
        objective: "obj_004",
        text: `
          <h3>The Universal Declaration of Human Rights</h3>
          <p>The <strong>Universal Declaration of Human Rights (UDHR)</strong> is a milestone document that proclaims the inalienable rights of every person.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Adopted by UN in 1948</li>
                <li>• 30 Articles</li>
                <li>• First global human rights document</li>
                <li>• Translated into 500+ languages</li>
                <li>• Not legally binding but very influential</li>
                <li>• Inspired many constitutions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Articles</h4>
              <ul>
                <li><strong>Article 1:</strong> All humans are born free and equal</li>
                <li><strong>Article 3:</strong> Right to life, liberty, security</li>
                <li><strong>Article 5:</strong> No torture</li>
                <li><strong>Article 19:</strong> Freedom of expression</li>
                <li><strong>Article 21:</strong> Right to vote</li>
                <li><strong>Article 26:</strong> Right to education</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Rights in the Nigerian Constitution",
        objective: "obj_005",
        text: `
          <h3>Rights in the Nigerian Constitution</h3>
          <p>The Nigerian Constitution provides for fundamental rights in Chapter IV.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Fundamental Rights in Nigeria</h4>
              <ul>
                <li>• <strong>Section 33:</strong> Right to life</li>
                <li>• <strong>Section 34:</strong> Right to dignity of human person</li>
                <li>• <strong>Section 35:</strong> Right to personal liberty</li>
                <li>• <strong>Section 36:</strong> Right to fair hearing</li>
                <li>• <strong>Section 37:</strong> Right to privacy</li>
                <li>• <strong>Section 38:</strong> Right to freedom of thought and religion</li>
                <li>• <strong>Section 39:</strong> Right to freedom of expression</li>
                <li>• <strong>Section 40:</strong> Right to peaceful assembly</li>
                <li>• <strong>Section 41:</strong> Right to freedom of movement</li>
                <li>• <strong>Section 42:</strong> Right to freedom from discrimination</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• These rights are justiciable</li>
                <li>• Can be enforced in courts</li>
                <li>• Courts can protect these rights</li>
                <li>• Some rights have limitations</li>
                <li>• Fundamental rights are supreme</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "African Charter on Human and Peoples' Rights",
        objective: "obj_006",
        text: `
          <h3>African Charter on Human and Peoples' Rights</h3>
          <p>The <strong>African Charter</strong> is the main human rights instrument in Africa.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Features</h4>
              <ul>
                <li>• Adopted in 1981, entered into force in 1986</li>
                <li>• 68 Articles</li>
                <li>• Covers civil, political, economic, social, and cultural rights</li>
                <li>• Includes peoples' rights (collective rights)</li>
                <li>• Established the African Commission on Human and Peoples' Rights</li>
                <li>• Nigeria is a signatory</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Rights</h4>
              <ul>
                <li>• Right to dignity</li>
                <li>• Right to work</li>
                <li>• Right to health</li>
                <li>• Right to education</li>
                <li>• Right to culture</li>
                <li>• Right to development</li>
                <li>• Right to peace</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Human Dignity",
        objective: "obj_007",
        text: `
          <h3>Human Dignity</h3>
          <p><strong>Human dignity</strong> is the inherent worth and value of every person. It is the foundation of all human rights.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Understanding Human Dignity</h4>
              <ul>
                <li>• Everyone has inherent worth</li>
                <li>• Dignity is inalienable</li>
                <li>• Cannot be earned or lost</li>
                <li>• Equal for all people</li>
                <li>• Basis of all human rights</li>
                <li>• Requires respect for every person</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Protecting Human Dignity</h4>
              <ul>
                <li>• No torture or cruel treatment</li>
                <li>• No discrimination</li>
                <li>• Right to privacy</li>
                <li>• Right to fair treatment</li>
                <li>• Right to basic necessities</li>
                <li>• Right to participate in society</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Rights of Vulnerable Groups",
        objective: "obj_008",
        text: `
          <h3>Rights of Women and Children</h3>
          <p>Women and children have special rights that need extra protection.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Rights of Women</h4>
              <ul>
                <li>• Right to equality</li>
                <li>• Right to education</li>
                <li>• Right to work</li>
                <li>• Right to health</li>
                <li>• Freedom from violence</li>
                <li>• Right to participate in politics</li>
                <li>• Right to choose marriage partner</li>
                <li>• African Protocol on Women's Rights</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Rights of Children</h4>
              <ul>
                <li>• Right to survival and development</li>
                <li>• Right to education</li>
                <li>• Right to health</li>
                <li>• Freedom from child labour</li>
                <li>• Freedom from abuse</li>
                <li>• Right to name and nationality</li>
                <li>• Right to be heard</li>
                <li>• UN Convention on the Rights of the Child</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Human Rights Organizations",
        objective: "obj_011",
        text: `
          <h3>Human Rights Organizations</h3>
          <p>Various organizations work to protect and promote human rights.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 International Organizations</h4>
              <ul>
                <li>• <strong>Amnesty International:</strong> Global human rights advocacy</li>
                <li>• <strong>Human Rights Watch:</strong> Investigates and reports violations</li>
                <li>• <strong>UN Human Rights Council:</strong> UN body on human rights</li>
                <li>• <strong>OHCHR:</strong> Office of the High Commissioner for Human Rights</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Nigerian Organizations</h4>
              <ul>
                <li>• <strong>NHRC:</strong> National Human Rights Commission</li>
                <li>• <strong>CLO:</strong> Civil Liberties Organization</li>
                <li>• <strong>WACOL:</strong> Women's Aid Collective</li>
                <li>• <strong>SERAP:</strong> Socio-Economic Rights and Accountability Project</li>
                <li>• <strong>Nigerian Bar Association:</strong> Lawyers advocating for rights</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Human Rights Violations",
        objective: "obj_012",
        text: `
          <h3>Human Rights Violations</h3>
          <p><strong>Human rights violations</strong> occur when a person's rights are denied or abused.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Examples of Violations</h4>
              <ul>
                <li>• <strong>Extrajudicial killings:</strong> Unlawful killing</li>
                <li>• <strong>Torture:</strong> Cruel treatment</li>
                <li>• <strong>Unlawful detention:</strong> Imprisonment without trial</li>
                <li>• <strong>Discrimination:</strong> Unfair treatment</li>
                <li>• <strong>Violence against women:</strong> Gender-based violence</li>
                <li>• <strong>Child labour:</strong> Exploitation of children</li>
                <li>• <strong>Freedom of speech violations:</strong> Censorship</li>
                <li>• <strong>Environmental rights violations:</strong> Pollution impacting health</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Addressing Violations</h4>
              <ul>
                <li>• Legal action in courts</li>
                <li>• Reporting to human rights organizations</li>
                <li>• International advocacy</li>
                <li>• Public awareness</li>
                <li>• Government accountability</li>
                <li>• Media reporting</li>
                <li>• Peaceful protests</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Human Rights Education",
        objective: "obj_014",
        text: `
          <h3>Human Rights Education</h3>
          <p><strong>Human rights education</strong> teaches people about their rights and how to protect them.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Why It Matters</h4>
              <ul>
                <li>• Empowers citizens</li>
                <li>• Prevents abuses</li>
                <li>• Promotes democracy</li>
                <li>• Builds respect for rights</li>
                <li>• Reduces discrimination</li>
                <li>• Strengthens communities</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 How to Promote</h4>
              <ul>
                <li>• Schools and universities</li>
                <li>• Community programs</li>
                <li>• Media campaigns</li>
                <li>• Workshops and training</li>
                <li>• Online resources</li>
                <li>• Integration into curriculum</li>
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
          <h4>🕊️ Human Rights</h4>
          <ul>
            <li>• Rights that belong to every person</li>
            <li>• Universal, inalienable, indivisible</li>
            <li>• Protected by law and international agreements</li>
            <li>• Essential for human dignity</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Documents</h4>
          <ul>
            <li>• Universal Declaration of Human Rights</li>
            <li>• Nigerian Constitution (Chapter IV)</li>
            <li>• African Charter on Human and Peoples' Rights</li>
            <li>• UN Convention on the Rights of the Child</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Human rights are for everyone, everywhere. We all have a role to play in protecting and promoting human rights.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Human rights are only for certain people",
        correction: "Human rights belong to every person",
        explanation: "Human rights are universal and apply to everyone."
      },
      {
        id: "mis_002",
        misconception: "Human rights can be taken away",
        correction: "Human rights are inalienable",
        explanation: "Human rights cannot be taken away, though they can be violated."
      },
      {
        id: "mis_003",
        misconception: "Only governments can protect human rights",
        correction: "Everyone has a role in protecting human rights",
        explanation: "Individuals, organizations, and governments all have roles."
      },
      {
        id: "mis_004",
        misconception: "Human rights are only about political rights",
        correction: "Human rights include civil, political, economic, social, and cultural rights",
        explanation: "Human rights cover all aspects of human life."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Legal Protection",
        description: "Human rights are protected by law.",
        example: "Constitutional rights, court protection"
      },
      {
        id: "app_002",
        title: "Advocacy",
        description: "Organizations advocate for human rights.",
        example: "Amnesty International, NHRC"
      },
      {
        id: "app_003",
        title: "Education",
        description: "Human rights education empowers people.",
        example: "School curriculum, community workshops"
      },
      {
        id: "app_004",
        title: "Social Justice",
        description: "Human rights promote social justice.",
        example: "Equality, non-discrimination"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Human Rights", definition: "Rights that belong to every person." },
    { term: "UDHR", definition: "Universal Declaration of Human Rights." },
    { term: "Human Dignity", definition: "Inherent worth and value of every person." },
    { term: "Civil Rights", definition: "Rights that protect individual freedom." },
    { term: "Political Rights", definition: "Rights to participate in government." },
    { term: "Economic Rights", definition: "Rights to work and livelihood." },
    { term: "Social Rights", definition: "Rights to welfare and social services." },
    { term: "Cultural Rights", definition: "Rights to participate in culture." },
    { term: "Fundamental Rights", definition: "Basic rights protected by law." },
    { term: "Inalienable", definition: "Cannot be taken away." },
    { term: "Universal", definition: "Applying to all people." },
    { term: "Violation", definition: "When a right is denied or abused." },
    { term: "Accountability", definition: "Being answerable for actions." },
    { term: "Discrimination", definition: "Unfair treatment based on identity." },
    { term: "Equality", definition: "Equal rights and opportunities." },
    { term: "Justiciable", definition: "Enforceable in court." },
    { term: "Human Rights Commission", definition: "Body that protects human rights." },
    { term: "Torture", definition: "Infliction of severe pain." },
    { term: "Child Labour", definition: "Exploitation of children through work." },
    { term: "Gender Equality", definition: "Equal rights for all genders." }
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
      question: "What are human rights?",
      type: "multiple_choice",
      options: [
        "Rights that only citizens have",
        "Rights that belong to every person",
        "Rights that the government gives",
        "Rights that can be bought"
      ],
      answer: "Rights that belong to every person",
      explanation: "Human rights belong to every person."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is a category of human rights?",
      type: "multiple_choice",
      options: ["Civil rights", "Political rights", "Economic rights", "All of the above"],
      answer: "All of the above",
      explanation: "Human rights include civil, political, economic, social, and cultural rights."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a fundamental right?",
      type: "multiple_choice",
      options: [
        "A right that can be ignored",
        "A basic right protected by law",
        "A right only for citizens",
        "A right that changes"
      ],
      answer: "A basic right protected by law",
      explanation: "Fundamental rights are basic rights protected by law."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "When was the UDHR adopted?",
      type: "multiple_choice",
      options: ["1938", "1945", "1948", "1950"],
      answer: "1948",
      explanation: "The UDHR was adopted in 1948."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which chapter of the Nigerian Constitution covers fundamental rights?",
      type: "multiple_choice",
      options: ["Chapter II", "Chapter IV", "Chapter VI", "Chapter VIII"],
      answer: "Chapter IV",
      explanation: "Chapter IV of the Nigerian Constitution covers fundamental rights."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the African Charter?",
      type: "multiple_choice",
      options: [
        "A trade agreement",
        "A human rights instrument for Africa",
        "An economic treaty",
        "A security agreement"
      ],
      answer: "A human rights instrument for Africa",
      explanation: "The African Charter is a human rights instrument for Africa."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is human dignity?",
      type: "multiple_choice",
      options: [
        "The worth and value of every person",
        "A title of nobility",
        "A type of law",
        "A government position"
      ],
      answer: "The worth and value of every person",
      explanation: "Human dignity is the inherent worth and value of every person."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What document protects the rights of children?",
      type: "multiple_choice",
      options: [
        "The UN Convention on the Rights of the Child",
        "The UDHR",
        "The African Charter",
        "The Nigerian Constitution"
      ],
      answer: "The UN Convention on the Rights of the Child",
      explanation: "The UN Convention on the Rights of the Child protects children's rights."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "Can human rights ever be limited?",
      type: "multiple_choice",
      options: [
        "No, never",
        "Yes, in limited circumstances",
        "Yes, always",
        "Only by the President"
      ],
      answer: "Yes, in limited circumstances",
      explanation: "Human rights can be limited in limited circumstances, such as for national security."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a challenge to human rights protection?",
      type: "multiple_choice",
      options: [
        "Strong laws",
        "Lack of enforcement",
        "Human rights education",
        "Civil society"
      ],
      answer: "Lack of enforcement",
      explanation: "Lack of enforcement is a major challenge to human rights protection."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the role of human rights organizations?",
      type: "multiple_choice",
      options: [
        "To violate rights",
        "To protect and promote human rights",
        "To make laws",
        "To govern countries"
      ],
      answer: "To protect and promote human rights",
      explanation: "Human rights organizations protect and promote human rights."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is a human rights violation?",
      type: "multiple_choice",
      options: [
        "Protecting a right",
        "Denying or abusing a right",
        "Educating people about rights",
        "Advocating for rights"
      ],
      answer: "Denying or abusing a right",
      explanation: "A human rights violation is denying or abusing a right."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "How are human rights enforced in Nigeria?",
      type: "multiple_choice",
      options: [
        "Only through the UN",
        "Through the courts and NHRC",
        "Through the police only",
        "Through the military"
      ],
      answer: "Through the courts and NHRC",
      explanation: "Human rights are enforced through the courts and NHRC."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is human rights education important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It empowers people to know their rights",
        "It only benefits politicians",
        "It confuses people"
      ],
      answer: "It empowers people to know their rights",
      explanation: "Human rights education empowers people to know their rights."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How do human rights support democracy?",
      type: "multiple_choice",
      options: [
        "They have no connection",
        "They protect citizen participation",
        "They weaken democracy",
        "They only support leaders"
      ],
      answer: "They protect citizen participation",
      explanation: "Human rights protect citizen participation and strengthen democracy."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_human_rights",
    title: "Human Rights Quiz",
    description: "Test your understanding of human rights",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What are human rights?",
        type: "short_answer",
        answer_key: "Rights that belong to every person",
        explanation: "Human rights belong to every person."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name one category of human rights.",
        type: "short_answer",
        answer_key: "Civil rights (or any valid)",
        explanation: "Civil rights are a category of human rights."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a fundamental right?",
        type: "short_answer",
        answer_key: "A basic right protected by law",
        explanation: "Fundamental rights are basic rights protected by law."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "When was the UDHR adopted?",
        type: "short_answer",
        answer_key: "1948",
        explanation: "The UDHR was adopted in 1948."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Which chapter of the Nigerian Constitution covers fundamental rights?",
        type: "short_answer",
        answer_key: "Chapter IV",
        explanation: "Chapter IV covers fundamental rights."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the African Charter?",
        type: "short_answer",
        answer_key: "A human rights instrument for Africa",
        explanation: "The African Charter is a human rights instrument for Africa."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is human dignity?",
        type: "short_answer",
        answer_key: "The worth and value of every person",
        explanation: "Human dignity is the inherent worth of every person."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What document protects the rights of children?",
        type: "short_answer",
        answer_key: "The UN Convention on the Rights of the Child",
        explanation: "The UN Convention protects children's rights."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a challenge to human rights protection?",
        type: "short_answer",
        answer_key: "Lack of enforcement (or any valid)",
        explanation: "Lack of enforcement is a challenge to human rights protection."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the role of human rights organizations?",
        type: "short_answer",
        answer_key: "To protect and promote human rights",
        explanation: "Human rights organizations protect and promote human rights."
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
        "Understand human rights and their categories",
        "Explain the UDHR and Nigerian Constitution rights",
        "Describe the African Charter",
        "Understand human rights protection and violations"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What are human rights?" },
        { time: "5-10 min", activity: "Direct Instruction - Categories of Rights" },
        { time: "10-15 min", activity: "Direct Instruction - UDHR" },
        { time: "15-20 min", activity: "Direct Instruction - Nigerian Constitution" },
        { time: "20-25 min", activity: "Direct Instruction - African Charter" },
        { time: "25-30 min", activity: "Direct Instruction - Vulnerable Groups" },
        { time: "30-35 min", activity: "Direct Instruction - Human Rights Organizations" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Rights that belong to every person",
        prac_002: "All of the above",
        prac_003: "A basic right protected by law",
        prac_004: "1948",
        prac_005: "Chapter IV",
        prac_006: "A human rights instrument for Africa",
        prac_007: "The worth and value of every person",
        prac_008: "The UN Convention on the Rights of the Child",
        prac_009: "Yes, in limited circumstances",
        prac_010: "Lack of enforcement",
        prac_011: "To protect and promote human rights",
        prac_012: "Denying or abusing a right",
        prac_013: "Through the courts and NHRC",
        prac_014: "It empowers people to know their rights",
        prac_015: "They protect citizen participation"
      },
      assessment: {
        ass_001: "Rights that belong to every person",
        ass_002: "Civil rights (or any valid)",
        ass_003: "A basic right protected by law",
        ass_004: "1948",
        ass_005: "Chapter IV",
        ass_006: "A human rights instrument for Africa",
        ass_007: "The worth and value of every person",
        ass_008: "The UN Convention on the Rights of the Child",
        ass_009: "Lack of enforcement (or any valid)",
        ass_010: "To protect and promote human rights"
      }
    },
    extensionActivities: [
      "Research the UDHR",
      "Study the Nigerian Constitution rights",
      "Analyze human rights cases",
      "Research human rights organizations"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research international human rights law",
        "Study human rights cases",
        "Research comparative human rights",
        "Analyze human rights challenges"
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
      title: "Categories of Human Rights",
      description: "Diagram showing categories of human rights",
      url: "/diagrams/categories-of-human-rights.png",
      alt: "Categories of human rights diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Human Rights Protection System",
      description: "Diagram showing human rights protection",
      url: "/diagrams/human-rights-protection.png",
      alt: "Human rights protection diagram"
    }
  ]
};