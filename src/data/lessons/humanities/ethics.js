// Location: src/data/lessons/humanities/ethics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "hum_lesson_ethics",
  subject: "Ethics",
  topic: "Ethics",
  name: "Ethics",
  icon: "⚖️",
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
    "Understanding of philosophy basics",
    "Interest in right and wrong",
    "Openness to different perspectives",
    "Critical thinking skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Humanities lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define ethics and explain its importance",
      indicator: "Student can explain what ethics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Distinguish between ethics and morality",
      indicator: "Student can differentiate between ethics and morality"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the main branches of ethics",
      indicator: "Student can list metaethics, normative ethics, and applied ethics"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain virtue ethics",
      indicator: "Student can describe the virtue ethics approach"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain deontological ethics",
      indicator: "Student can describe Kant's categorical imperative"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain utilitarianism",
      indicator: "Student can describe the greatest happiness principle"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain ethical relativism",
      indicator: "Student can describe cultural and moral relativism"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the concept of justice",
      indicator: "Student can explain different theories of justice"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain the concept of human rights",
      indicator: "Student can describe the ethical basis of human rights"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze ethical dilemmas",
      indicator: "Student can evaluate ethical dilemmas using different frameworks"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the ethics of care",
      indicator: "Student can describe the ethics of care approach"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain environmental ethics",
      indicator: "Student can describe ethical issues related to the environment"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain bioethics",
      indicator: "Student can describe ethical issues in medicine and biology"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain business ethics",
      indicator: "Student can describe ethical issues in business"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the relationship between ethics and religion",
      indicator: "Student can discuss how religion influences ethics"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain the importance of ethics in daily life",
      indicator: "Student can discuss how ethics applies to everyday decisions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Ethics - The Study of Right and Wrong",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about ethics, moral philosophy, and how to make ethical decisions."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Ethics</h2>
      <p><strong>Ethics</strong> is the branch of philosophy that deals with questions of right and wrong, good and bad, and moral duty. It examines how we should live, what we ought to do, and what kind of people we should be. Ethics is essential for navigating moral dilemmas and making responsible decisions.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Key Concepts</h3>
          <ul>
            <li>✓ Moral Philosophy</li>
            <li>✓ Virtue Ethics</li>
            <li>✓ Deontology</li>
            <li>✓ Utilitarianism</li>
            <li>✓ Ethical Relativism</li>
            <li>✓ Justice</li>
            <li>✓ Human Rights</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Ethics has been studied for over 2,500 years</li>
            <li>• Virtue ethics originated with Aristotle</li>
            <li>• The Golden Rule appears in many religions</li>
            <li>• Ethics applies to all areas of life</li>
            <li>• Ethical dilemmas are common in everyday life</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Ethics Matters</h4>
        <p>Ethics helps us make better decisions, treat others fairly, and live more meaningful lives. It provides a framework for evaluating right and wrong.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Ethics?",
        objective: "obj_001",
        text: `
          <h3>Understanding Ethics</h3>
          <p><strong>Ethics</strong> is the systematic study of right and wrong, good and bad, and moral duty. It is also known as moral philosophy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Questions</h4>
              <ul>
                <li>• <strong>What is the right thing to do?</strong></li>
                <li>• <strong>What makes an action good or bad?</strong></li>
                <li>• <strong>What kind of person should I be?</strong></li>
                <li>• <strong>What are my duties to others?</strong></li>
                <li>• <strong>What is justice?</strong></li>
                <li>• <strong>What are human rights?</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Ethics vs Morality</h4>
              <ul>
                <li>• <strong>Ethics:</strong> The study of moral principles</li>
                <li>• <strong>Morality:</strong> The practices and beliefs of a society</li>
                <li>• Ethics is the theoretical study</li>
                <li>• Morality is the practical application</li>
                <li>• Example: Ethics examines whether lying is wrong; morality tells us not to lie</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Branches of Ethics",
        objective: "obj_003",
        text: `
          <h3>Branches of Ethics</h3>
          <p>Ethics is divided into several branches.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Metaethics</h4>
              <ul>
                <li>• The nature of ethics</li>
                <li>• What do "good" and "right" mean?</li>
                <li>• Are moral truths objective?</li>
                <li>• How do we know what is right?</li>
                <li>• Example: Is morality universal?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Normative Ethics</h4>
              <ul>
                <li>• How should we act?</li>
                <li>• What principles guide behavior?</li>
                <li>• Theories of right and wrong</li>
                <li>• Example: Virtue ethics, deontology, utilitarianism</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Applied Ethics</h4>
              <ul>
                <li>• Practical applications</li>
                <li>• Ethics in specific areas</li>
                <li>• Bioethics, business ethics</li>
                <li>• Environmental ethics</li>
                <li>• Example: Should euthanasia be legal?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Virtue Ethics",
        objective: "obj_004",
        text: `
          <h3>Virtue Ethics</h3>
          <p><strong>Virtue ethics</strong> focuses on the character of the moral agent rather than rules or consequences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Virtue:</strong> A moral excellence</li>
                <li>• <strong>Character:</strong> Who you are</li>
                <li>• <strong>Golden mean:</strong> Balance between extremes</li>
                <li>• <strong>Eudaimonia:</strong> Flourishing, well-being</li>
                <li>• <strong>Role model:</strong> Follow virtuous people</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Virtues</h4>
              <ul>
                <li>• <strong>Wisdom:</strong> Good judgment</li>
                <li>• <strong>Courage:</strong> Facing challenges</li>
                <li>• <strong>Temperance:</strong> Self-control</li>
                <li>• <strong>Justice:</strong> Fairness</li>
                <li>• <strong>Compassion:</strong> Caring for others</li>
                <li>• <strong>Honesty:</strong> Truthfulness</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Deontological Ethics",
        objective: "obj_005",
        text: `
          <h3>Deontological Ethics</h3>
          <p><strong>Deontological ethics</strong> focuses on duties and rules rather than consequences.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Duty:</strong> Obligations we have</li>
                <li>• <strong>Rules:</strong> Principles to follow</li>
                <li>• <strong>Intention:</strong> Why we act</li>
                <li>• <strong>Motives:</strong> The reasons for action</li>
                <li>• <strong>Universalizability:</strong> Rules for everyone</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Kant's Categorical Imperative</h4>
              <ul>
                <li>• <strong>Formula 1:</strong> Act only according to rules that could be universal laws</li>
                <li>• <strong>Formula 2:</strong> Treat others as ends, not merely as means</li>
                <li>• <strong>Formula 3:</strong> Act as if you are a legislator in a kingdom of ends</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Utilitarianism",
        objective: "obj_006",
        text: `
          <h3>Utilitarianism</h3>
          <p><strong>Utilitarianism</strong> focuses on the consequences of actions and the greatest happiness principle.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Concepts</h4>
              <ul>
                <li>• <strong>Utility:</strong> Usefulness</li>
                <li>• <strong>Greatest happiness principle:</strong> Maximize happiness</li>
                <li>• <strong>Consequences:</strong> Outcomes of actions</li>
                <li>• <strong>Pleasure and pain:</strong> Measuring utility</li>
                <li>• <strong>Cost-benefit:</strong> Weighing outcomes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Figures</h4>
              <ul>
                <li>• <strong>Jeremy Bentham:</strong> Founder of utilitarianism</li>
                <li>• <strong>John Stuart Mill:</strong> Refined utilitarianism</li>
                <li>• <strong>Peter Singer:</strong> Modern utilitarian</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example:</strong>
            <ul>
              <li>• <strong>Question:</strong> Should we donate to charity?</li>
              <li>• <strong>Utilitarian answer:</strong> Yes, if it maximizes overall happiness</li>
              <li>• <strong>Reason:</strong> Donating helps others without harming ourselves significantly</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Ethical Relativism",
        objective: "obj_007",
        text: `
          <h3>Ethical Relativism</h3>
          <p><strong>Ethical relativism</strong> is the view that moral truth is relative to culture or individual.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Cultural Relativism</h4>
              <ul>
                <li>• Morality varies by culture</li>
                <li>• Different cultures have different moral codes</li>
                <li>• No universal moral truths</li>
                <li>• Example: Some cultures practice polygamy</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Individual Relativism</h4>
              <ul>
                <li>• Morality varies by individual</li>
                <li>• Each person decides what is right</li>
                <li>• No objective moral standards</li>
                <li>• Example: One person believes lying is wrong, another doesn't</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Critiques:</strong>
            <ul>
              <li>• Relativism can justify harmful practices</li>
              <li>• There may be universal moral values</li>
              <li>• Cultural practices should still be evaluated</li>
              <li>• Tolerance doesn't require accepting everything</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Justice and Human Rights",
        objective: "obj_008",
        text: `
          <h3>Justice and Human Rights</h3>
          <p><strong>Justice</strong> and <strong>human rights</strong> are central concepts in ethics.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Theories of Justice</h4>
              <ul>
                <li>• <strong>Distributive justice:</strong> Fair distribution of resources</li>
                <li>• <strong>Retributive justice:</strong> Punishment for wrongdoing</li>
                <li>• <strong>Restorative justice:</strong> Repairing harm</li>
                <li>• <strong>Rawls' justice:</strong> Fairness as justice</li>
                <li>• <strong>Marxist justice:</strong> Equality of outcomes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Human Rights</h4>
              <ul>
                <li>• <strong>Universal human rights:</strong> Rights for all people</li>
                <li>• <strong>Civil rights:</strong> Political and legal rights</li>
                <li>• <strong>Social rights:</strong> Economic and social rights</li>
                <li>• <strong>UN Declaration:</strong> International standard</li>
                <li>• <strong>Justification:</strong> Ethics of dignity and worth</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Applied Ethics",
        objective: "obj_013",
        text: `
          <h3>Applied Ethics</h3>
          <p><strong>Applied ethics</strong> deals with practical ethical issues in specific areas.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Bioethics</h4>
              <ul>
                <li>• <strong>Euthanasia:</strong> Right to die?</li>
                <li>• <strong>Abortion:</strong> When does life begin?</li>
                <li>• <strong>Genetic engineering:</strong> Designer babies?</li>
                <li>• <strong>Organ donation:</strong> Ethics of transplantation</li>
                <li>• <strong>Stem cell research:</strong> Use of embryos</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Environmental Ethics</h4>
              <ul>
                <li>• <strong>Climate change:</strong> Responsibility?</li>
                <li>• <strong>Animal rights:</strong> Treatment of animals</li>
                <li>• <strong>Conservation:</strong> Protecting nature</li>
                <li>• <strong>Pollution:</strong> Environmental harm</li>
                <li>• <strong>Sustainability:</strong> Future generations</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Business Ethics</h4>
              <ul>
                <li>• <strong>Corporate responsibility:</strong> Social responsibility</li>
                <li>• <strong>Honesty:</strong> Truth in advertising</li>
                <li>• <strong>Fair wages:</strong> Workers' rights</li>
                <li>• <strong>Environmental impact:</strong> Sustainability</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Media Ethics</h4>
              <ul>
                <li>• <strong>Truthfulness:</strong> Accurate reporting</li>
                <li>• <strong>Privacy:</strong> Respecting privacy</li>
                <li>• <strong>Balance:</strong> Fair representation</li>
                <li>• <strong>Social media:</strong> Digital ethics</li>
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
          <h4>⚖️ Ethics</h4>
          <ul>
            <li>• The study of right and wrong</li>
            <li>• Branches: metaethics, normative ethics, applied ethics</li>
            <li>• Virtue ethics: character and virtues</li>
            <li>• Deontology: duty and rules</li>
            <li>• Utilitarianism: greatest happiness</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• Ethical relativism</li>
            <li>• Justice and human rights</li>
            <li>• Applied ethics: bioethics, environmental ethics, business ethics</li>
            <li>• Ethics in daily life</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Ethics helps us make better decisions and live more meaningful lives. It is essential for a just and fair society.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Ethics is just about following rules",
        correction: "Ethics involves reasoning about right and wrong",
        explanation: "Ethics requires critical thinking, not just rule-following."
      },
      {
        id: "mis_002",
        misconception: "All moral issues have clear answers",
        correction: "Many moral issues are complex and have different perspectives",
        explanation: "Ethical dilemmas often require weighing competing values."
      },
      {
        id: "mis_003",
        misconception: "Ethics and religion are the same",
        correction: "Ethics can be studied independently of religion",
        explanation: "Ethics is a philosophical discipline that can be approached from many perspectives."
      },
      {
        id: "mis_004",
        misconception: "Ethics is just personal opinion",
        correction: "Ethics involves reasoned arguments and principles",
        explanation: "Ethics is based on rational analysis, not just personal feelings."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Decision Making",
        description: "Ethics guides decisions in all areas.",
        example: "Personal, professional, and social decisions"
      },
      {
        id: "app_002",
        title: "Policy Making",
        description: "Ethics informs public policy.",
        example: "Laws, regulations, social programs"
      },
      {
        id: "app_003",
        title: "Business",
        description: "Ethics is essential in business.",
        example: "Corporate responsibility, fair practices"
      },
      {
        id: "app_004",
        title: "Medicine",
        description: "Ethics guides medical decisions.",
        example: "Patient care, research ethics"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Ethics", definition: "The study of right and wrong, good and bad." },
    { term: "Morality", definition: "The practices and beliefs of a society about right and wrong." },
    { term: "Virtue", definition: "A moral excellence." },
    { term: "Deontology", definition: "Ethics based on duties and rules." },
    { term: "Utilitarianism", definition: "Ethics based on maximizing happiness." },
    { term: "Relativism", definition: "The view that moral truth is relative." },
    { term: "Justice", definition: "Fairness and rightness." },
    { term: "Human Rights", definition: "Rights that all people have." },
    { term: "Bioethics", definition: "Ethics in medicine and biology." },
    { term: "Environmental Ethics", definition: "Ethics concerning the environment." },
    { term: "Business Ethics", definition: "Ethics in business." },
    { term: "Categorical Imperative", definition: "Kant's moral rule." },
    { term: "Golden Mean", definition: "Aristotle's balance between extremes." },
    { term: "Eudaimonia", definition: "Human flourishing." },
    { term: "Consequences", definition: "The outcomes of actions." },
    { term: "Duty", definition: "A moral obligation." },
    { term: "Integrity", definition: "Moral uprightness." },
    { term: "Compassion", definition: "Concern for others." },
    { term: "Empathy", definition: "Understanding others' feelings." },
    { term: "Accountability", definition: "Being responsible for actions." }
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
      question: "What is ethics?",
      type: "multiple_choice",
      options: [
        "The study of reality",
        "The study of right and wrong",
        "The study of knowledge",
        "The study of beauty"
      ],
      answer: "The study of right and wrong",
      explanation: "Ethics is the study of right and wrong."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the difference between ethics and morality?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Ethics is the study; morality is the practice",
        "Morality is the study; ethics is the practice",
        "There is no difference"
      ],
      answer: "Ethics is the study; morality is the practice",
      explanation: "Ethics is the theoretical study; morality is the practical application."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a branch of ethics?",
      type: "multiple_choice",
      options: ["Metaethics", "Biology", "Chemistry", "Physics"],
      answer: "Metaethics",
      explanation: "Metaethics is a branch of ethics."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is virtue ethics?",
      type: "multiple_choice",
      options: [
        "Ethics based on consequences",
        "Ethics based on character",
        "Ethics based on rules",
        "Ethics based on relativism"
      ],
      answer: "Ethics based on character",
      explanation: "Virtue ethics focuses on the character of the moral agent."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is deontological ethics?",
      type: "multiple_choice",
      options: [
        "Ethics based on consequences",
        "Ethics based on character",
        "Ethics based on duties and rules",
        "Ethics based on relativism"
      ],
      answer: "Ethics based on duties and rules",
      explanation: "Deontology focuses on duties and rules."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is utilitarianism?",
      type: "multiple_choice",
      options: [
        "Ethics based on virtue",
        "Ethics based on duty",
        "Ethics based on maximizing happiness",
        "Ethics based on relativism"
      ],
      answer: "Ethics based on maximizing happiness",
      explanation: "Utilitarianism focuses on the greatest happiness principle."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is ethical relativism?",
      type: "multiple_choice",
      options: [
        "The view that moral truth is universal",
        "The view that moral truth is relative",
        "The view that ethics is about virtue",
        "The view that ethics is about duty"
      ],
      answer: "The view that moral truth is relative",
      explanation: "Relativism holds that moral truth is relative to culture or individual."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is justice?",
      type: "multiple_choice",
      options: [
        "Fairness",
        "Unfairness",
        "Randomness",
        "Chaos"
      ],
      answer: "Fairness",
      explanation: "Justice is fairness and rightness."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What are human rights?",
      type: "multiple_choice",
      options: [
        "Rights given by governments",
        "Rights that all people have",
        "Rights only for citizens",
        "Rights that can be taken away"
      ],
      answer: "Rights that all people have",
      explanation: "Human rights are rights that all people have by virtue of being human."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is an ethical dilemma?",
      type: "multiple_choice",
      options: [
        "An easy moral decision",
        "A situation with conflicting moral values",
        "A situation with clear right and wrong",
        "A situation with no moral implications"
      ],
      answer: "A situation with conflicting moral values",
      explanation: "An ethical dilemma involves conflicting moral values."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What is the ethics of care?",
      type: "multiple_choice",
      options: [
        "Ethics based on rules",
        "Ethics based on care and relationships",
        "Ethics based on consequences",
        "Ethics based on virtue"
      ],
      answer: "Ethics based on care and relationships",
      explanation: "The ethics of care focuses on care and relationships."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is environmental ethics?",
      type: "multiple_choice",
      options: [
        "Ethics about the environment",
        "Ethics about business",
        "Ethics about medicine",
        "Ethics about law"
      ],
      answer: "Ethics about the environment",
      explanation: "Environmental ethics deals with ethical issues concerning the environment."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is bioethics?",
      type: "multiple_choice",
      options: [
        "Ethics about business",
        "Ethics about medicine and biology",
        "Ethics about the environment",
        "Ethics about law"
      ],
      answer: "Ethics about medicine and biology",
      explanation: "Bioethics deals with ethical issues in medicine and biology."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is business ethics?",
      type: "multiple_choice",
      options: [
        "Ethics about medicine",
        "Ethics about business",
        "Ethics about the environment",
        "Ethics about law"
      ],
      answer: "Ethics about business",
      explanation: "Business ethics deals with ethical issues in business."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How does religion relate to ethics?",
      type: "multiple_choice",
      options: [
        "Religion is the only source of ethics",
        "Religion influences ethics but is not the only source",
        "Religion has no connection to ethics",
        "Ethics is more important than religion"
      ],
      answer: "Religion influences ethics but is not the only source",
      explanation: "Religion influences ethics, but ethics can be studied independently."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_ethics",
    title: "Ethics Quiz",
    description: "Test your understanding of ethics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is ethics?",
        type: "short_answer",
        answer_key: "The study of right and wrong",
        explanation: "Ethics is the study of right and wrong."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is the difference between ethics and morality?",
        type: "short_answer",
        answer_key: "Ethics is the study; morality is the practice",
        explanation: "Ethics is theoretical; morality is practical."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a branch of ethics?",
        type: "short_answer",
        answer_key: "Metaethics (or any valid)",
        explanation: "Metaethics is a branch of ethics."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is virtue ethics?",
        type: "short_answer",
        answer_key: "Ethics based on character",
        explanation: "Virtue ethics focuses on character."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is deontological ethics?",
        type: "short_answer",
        answer_key: "Ethics based on duties and rules",
        explanation: "Deontology focuses on duties and rules."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is utilitarianism?",
        type: "short_answer",
        answer_key: "Ethics based on maximizing happiness",
        explanation: "Utilitarianism focuses on the greatest happiness."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is ethical relativism?",
        type: "short_answer",
        answer_key: "The view that moral truth is relative",
        explanation: "Relativism holds that moral truth is relative."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is justice?",
        type: "short_answer",
        answer_key: "Fairness",
        explanation: "Justice is fairness."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "What are human rights?",
        type: "short_answer",
        answer_key: "Rights that all people have",
        explanation: "Human rights are rights for all people."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is an ethical dilemma?",
        type: "short_answer",
        answer_key: "A situation with conflicting moral values",
        explanation: "An ethical dilemma involves conflicting moral values."
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
        "Understand ethics and its branches",
        "Explain virtue ethics, deontology, and utilitarianism",
        "Describe ethical relativism",
        "Understand applied ethics"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is ethics?" },
        { time: "5-10 min", activity: "Direct Instruction - Branches of Ethics" },
        { time: "10-15 min", activity: "Direct Instruction - Virtue Ethics" },
        { time: "15-20 min", activity: "Direct Instruction - Deontology" },
        { time: "20-25 min", activity: "Direct Instruction - Utilitarianism" },
        { time: "25-30 min", activity: "Direct Instruction - Relativism" },
        { time: "30-35 min", activity: "Direct Instruction - Applied Ethics" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of right and wrong",
        prac_002: "Ethics is the study; morality is the practice",
        prac_003: "Metaethics",
        prac_004: "Ethics based on character",
        prac_005: "Ethics based on duties and rules",
        prac_006: "Ethics based on maximizing happiness",
        prac_007: "The view that moral truth is relative",
        prac_008: "Fairness",
        prac_009: "Rights that all people have",
        prac_010: "A situation with conflicting moral values",
        prac_011: "Ethics based on care and relationships",
        prac_012: "Ethics about the environment",
        prac_013: "Ethics about medicine and biology",
        prac_014: "Ethics about business",
        prac_015: "Religion influences ethics but is not the only source"
      },
      assessment: {
        ass_001: "The study of right and wrong",
        ass_002: "Ethics is the study; morality is the practice",
        ass_003: "Metaethics (or any valid)",
        ass_004: "Ethics based on character",
        ass_005: "Ethics based on duties and rules",
        ass_006: "Ethics based on maximizing happiness",
        ass_007: "The view that moral truth is relative",
        ass_008: "Fairness",
        ass_009: "Rights that all people have",
        ass_010: "A situation with conflicting moral values"
      }
    },
    extensionActivities: [
      "Research an ethical dilemma",
      "Write about a moral decision",
      "Study a philosopher",
      "Discuss ethics in current events"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research moral philosophy",
        "Study applied ethics",
        "Write an ethics paper",
        "Analyze ethical cases"
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
      title: "Branches of Ethics",
      description: "Diagram showing branches of ethics",
      url: "/diagrams/ethics-branches.png",
      alt: "Ethics branches diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Ethical Theories",
      description: "Diagram showing ethical theories",
      url: "/diagrams/ethical-theories.png",
      alt: "Ethical theories diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Applied Ethics",
      description: "Diagram showing areas of applied ethics",
      url: "/diagrams/applied-ethics.png",
      alt: "Applied ethics diagram"
    }
  ]
};