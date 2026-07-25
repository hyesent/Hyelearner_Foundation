// Location: src/data/lessons/core/english_language/debate_and_argumentation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_debate_argumentation",
  subject: "English Language",
  topic: "Debate and Argumentation",
  name: "Debate and Argumentation",
  icon: "⚖️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 10,
    totalPracticeQuestions: 16,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 12,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of formal language",
    "Critical thinking skills",
    "Ability to construct arguments",
    "Research skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
    },
    {
      id: "eng_lesson_figures_of_speech",
      name: "Figures of Speech",
      file: "core/english_language/figures_of_speech.js"
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
      description: "Define debate and argumentation",
      indicator: "Student can explain what debate and argumentation are"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the parts of an argument",
      indicator: "Student can identify claim, evidence, and reasoning"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Construct a simple argument",
      indicator: "Student can make a claim and support it with reasons"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use evidence to support arguments",
      indicator: "Student can find and use relevant evidence"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify and counter opposing arguments",
      indicator: "Student can refute opposing points of view"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use persuasive language techniques",
      indicator: "Student can use rhetorical devices effectively"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Structure a debate speech",
      indicator: "Student can organize arguments logically"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Analyze and evaluate arguments",
      indicator: "Student can assess the strength of arguments"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Identify logical fallacies",
      indicator: "Student can recognize common fallacies in arguments"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Participate effectively in debates",
      indicator: "Student can debate confidently and persuasively"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Debate and Argumentation",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to construct powerful arguments and debate effectively."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Debate and Argumentation?</h2>
      <p><strong>Debate</strong> is a formal discussion where opposing arguments are presented. <strong>Argumentation</strong> is the skill of constructing and presenting arguments to persuade others. These skills are essential for critical thinking and effective communication.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">⚖️ Debate</h3>
          <ul>
            <li>✓ Formal structured discussion</li>
            <li>✓ Two opposing sides</li>
            <li>✓ Rules and time limits</li>
            <li>✓ Judges or audience</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">🗣️ Argumentation</h3>
          <ul>
            <li>✓ Constructing arguments</li>
            <li>✓ Using evidence and reasoning</li>
            <li>✓ Persuading an audience</li>
            <li>✓ Critical thinking</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Debate Skills Matter</h4>
        <ul>
          <li>✓ Develop critical thinking</li>
          <li>✓ Improve communication skills</li>
          <li>✓ Build confidence</li>
          <li>✓ Enhance research skills</li>
          <li>✓ Prepare for university and careers</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Parts of an Argument",
        objective: "obj_002",
        text: `
          <h3>Building an Argument</h3>
          <p>Every argument has three essential parts.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1️⃣ Claim</h4>
              <p>The main point you're making</p>
              <p><em>"School uniforms should be mandatory."</em></p>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2️⃣ Evidence</h4>
              <p>Facts, data, examples</p>
              <p><em>"Studies show uniforms reduce bullying."</em></p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>3️⃣ Reasoning</h4>
              <p>How evidence supports the claim</p>
              <p><em>"If bullying decreases, students can focus on learning."</em></p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Argument:</strong>
            <ul>
              <li><strong>Claim:</strong> "School uniforms should be mandatory."</li>
              <li><strong>Evidence:</strong> "Schools with uniforms report 30% fewer bullying incidents."</li>
              <li><strong>Reasoning:</strong> "Reducing bullying creates a safer learning environment."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Evidence",
        objective: "obj_004",
        text: `
          <h3>Using Strong Evidence</h3>
          <p>Good arguments are supported by strong, credible evidence.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Evidence:</h4>
              <ul>
                <li><strong>Statistics:</strong> "85% of students support..."</li>
                <li><strong>Expert Opinions:</strong> "According to Dr. Smith..."</li>
                <li><strong>Examples:</strong> "For example, in Finland..."</li>
                <li><strong>Case Studies:</strong> "In one study..."</li>
                <li><strong>Personal Experience:</strong> "I witnessed..."</li>
                <li><strong>Logical Reasoning:</strong> "It follows that..."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Evaluating Evidence:</h4>
              <ul>
                <li>✓ Is it relevant to the claim?</li>
                <li>✓ Is it from a credible source?</li>
                <li>✓ Is it recent and up-to-date?</li>
                <li>✓ Is it specific and detailed?</li>
                <li>✓ Is it sufficient (enough evidence)?</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Logical Fallacies",
        objective: "obj_009",
        text: `
          <h3>Logical Fallacies</h3>
          <p><strong>Logical fallacies</strong> are errors in reasoning that make arguments weak or invalid. Avoid them in your own arguments and spot them in others' arguments.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Common Fallacies:</h4>
              <ul>
                <li><strong>Ad Hominem:</strong> Attacking the person instead of their argument</li>
                <li><em>"You can't trust her argument because she's young."</em></li>
                <li><strong>Straw Man:</strong> Misrepresenting the opponent's argument</li>
                <li><strong>Appeal to Authority:</strong> Using an irrelevant authority</li>
                <li><strong>Hasty Generalization:</strong> Making a claim based on limited evidence</li>
                <li><strong>Red Herring:</strong> Introducing irrelevant information</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ Better Arguments:</h4>
              <ul>
                <li><strong>Address the argument:</strong> "The evidence shows..."</li>
                <li><strong>Accurate representation:</strong> "My opponent says X, but..."</li>
                <li><strong>Relevant authorities:</strong> "According to Dr. Jones, expert in..."</li>
                <li><strong>Sufficient evidence:</strong> "Multiple studies show..."</li>
                <li><strong>Stay on topic:</strong> "The issue is whether..."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Counterarguments and Rebuttals",
        objective: "obj_005",
        text: `
          <h3>Refuting Opposing Views</h3>
          <p>A strong argument anticipates and addresses opposing views.</p>
          
          <div class="example-box">
            <strong>📌 The Counterargument Process:</strong>
            <ul>
              <li><strong>Step 1:</strong> Identify the opposing viewpoint</li>
              <li><strong>Step 2:</strong> Acknowledge it fairly</li>
              <li><strong>Step 3:</strong> Refute it with evidence and reasoning</li>
              <li><strong>Step 4:</strong> Reiterate your position</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <ul>
              <li><strong>Opposing View:</strong> "Some argue that uniforms limit self-expression."</li>
              <li><strong>Acknowledge:</strong> "This is a valid concern about students' individuality."</li>
              <li><strong>Refute:</strong> "However, research shows that creativity can still be expressed through extracurricular activities and personal belongings."</li>
              <li><strong>Reiterate:</strong> "The benefits of safety and focus outweigh this concern."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Persuasive Language",
        objective: "obj_006",
        text: `
          <h3>Rhetorical Devices</h3>
          <p>Use these persuasive techniques to strengthen your arguments.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Rhetorical Devices:</h4>
              <ul>
                <li><strong>Repetition:</strong> Repeating key phrases for emphasis</li>
                <li><strong>Rhetorical Questions:</strong> Questions that don't need answers</li>
                <li><strong>Emotional Appeal (Pathos):</strong> Appealing to emotions</li>
                <li><strong>Logical Appeal (Logos):</strong> Using logic and reason</li>
                <li><strong>Ethical Appeal (Ethos):</strong> Establishing credibility</li>
                <li><strong>Rule of Three:</strong> Using three items for impact</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples:</h4>
              <ul>
                <li><strong>Repetition:</strong> "We need action, action, action!"</li>
                <li><strong>Rhetorical Question:</strong> "Isn't it time we acted?"</li>
                <li><strong>Pathos:</strong> "Imagine a world where no child goes hungry."</li>
                <li><strong>Logos:</strong> "The data clearly shows..."</li>
                <li><strong>Ethos:</strong> "As a doctor, I can confirm..."</li>
                <li><strong>Rule of Three:</strong> "Education, opportunity, and freedom."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Debate Structure",
        objective: "obj_007",
        text: `
          <h3>Structuring a Debate</h3>
          <p>Debates follow a specific structure with different speaking roles and times.</p>
          
          <div class="example-box">
            <strong>📌 Standard Debate Format:</strong>
            <ul>
              <li><strong>Opening Statements:</strong> Each side presents their position</li>
              <li><strong>Main Arguments:</strong> Each side makes their case</li>
              <li><strong>Cross-Examination:</strong> Teams question each other</li>
              <li><strong>Rebuttals:</strong> Responding to opposing arguments</li>
              <li><strong>Closing Statements:</strong> Final summaries</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Team Roles:</strong>
            <ul>
              <li><strong>First Speaker:</strong> Introduces the team's position</li>
              <li><strong>Second Speaker:</strong> Presents main arguments</li>
              <li><strong>Third Speaker:</strong> Provides rebuttals</li>
              <li><strong>Fourth Speaker:</strong> Delivers closing statement</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Debate Preparation",
        objective: "obj_008",
        text: `
          <h3>Preparing for a Debate</h3>
          <p>Good preparation is essential for debate success.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Research Tips:</h4>
              <ul>
                <li>✓ Research both sides of the topic</li>
                <li>✓ Find strong, credible sources</li>
                <li>✓ Prepare key statistics and examples</li>
                <li>✓ Anticipate opponent's arguments</li>
                <li>✓ Prepare counterarguments</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Practice Tips:</h4>
              <ul>
                <li>✓ Practice speaking clearly</li>
                <li>✓ Time your speeches</li>
                <li>✓ Practice with a partner</li>
                <li>✓ Record and review yourself</li>
                <li>✓ Prepare note cards</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Common Debate Mistakes",
        objective: "obj_010",
        text: `
          <h3>Avoiding Mistakes</h3>
          <p>Watch out for these common debate errors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Common Mistakes:</h4>
              <ul>
                <li>Talking too fast</li>
                <li>Not making eye contact</li>
                <li>Ignoring opponent's arguments</li>
                <li>Getting emotional</li>
                <li>Running out of time</li>
                <li>Not using evidence</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ How to Fix:</h4>
              <ul>
                <li>Speak slowly and clearly</li>
                <li>Make eye contact with judges</li>
                <li>Address all points raised</li>
                <li>Stay calm and professional</li>
                <li>Practice timing</li>
                <li>Always back up claims</li>
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
          <h4>⚖️ Debate Skills</h4>
          <ul>
            <li>✓ Use claims, evidence, and reasoning</li>
            <li>✓ Address counterarguments</li>
            <li>✓ Use persuasive language</li>
            <li>✓ Stay calm and professional</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Research both sides</li>
            <li>✓ Practice your speeches</li>
            <li>✓ Listen actively</li>
            <li>✓ Use strong evidence</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Debate is about winning at all costs",
        correction: "Debate is about presenting the best argument with evidence",
        explanation: "Good debaters respect opposing views and focus on evidence."
      },
      {
        id: "mis_002",
        misconception: "Arguments are based on feelings",
        correction: "Strong arguments are based on evidence and reasoning",
        explanation: "Emotions can be persuasive, but evidence and logic are more important."
      },
      {
        id: "mis_003",
        misconception: "Debate is just arguing",
        correction: "Debate is a formal, structured discussion with rules",
        explanation: "Debates have specific formats, roles, and time limits."
      },
      {
        id: "mis_004",
        misconception: "You should never agree with your opponent",
        correction: "Acknowledging good points makes you more credible",
        explanation: "Showing fairness and acknowledging valid points strengthens your position."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "University",
        description: "Debate skills are essential for academic discussions and seminars.",
        example: "Presenting arguments in tutorials and research seminars."
      },
      {
        id: "app_002",
        title: "Law",
        description: "Lawyers use debate skills to argue cases in court.",
        example: "Presenting evidence and cross-examining witnesses."
      },
      {
        id: "app_003",
        title: "Politics",
        description: "Politicians use debate skills in elections and policy discussions.",
        example: "Campaign debates, parliamentary discussions."
      },
      {
        id: "app_004",
        title: "Business",
        description: "Negotiation and persuasion are essential in business.",
        example: "Presenting proposals, negotiating contracts."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Claim", definition: "The main point or position in an argument." },
    { term: "Evidence", definition: "Facts and data supporting the claim." },
    { term: "Reasoning", definition: "The explanation connecting evidence to the claim." },
    { term: "Counterargument", definition: "An opposing point of view." },
    { term: "Rebuttal", definition: "A response to a counterargument." },
    { term: "Fallacy", definition: "An error in reasoning." },
    { term: "Logos", definition: "Appeal to logic and reason." },
    { term: "Pathos", definition: "Appeal to emotion." },
    { term: "Ethos", definition: "Appeal to credibility and trust." },
    { term: "Rhetoric", definition: "The art of persuasive speaking." },
    { term: "Rhetorical Question", definition: "A question asked for effect, not for an answer." },
    { term: "Rebuttal", definition: "A response that counters an opposing argument." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a debate?",
      type: "multiple_choice",
      options: [
        "A casual conversation",
        "A formal discussion with opposing arguments",
        "A type of writing",
        "A solo presentation"
      ],
      answer: "A formal discussion with opposing arguments",
      explanation: "Debates are structured discussions between opposing sides."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What are the three parts of an argument?",
      type: "multiple_choice",
      options: [
        "Claim, Evidence, Reasoning",
        "Introduction, Body, Conclusion",
        "Topic, Example, Explanation",
        "Question, Answer, Feedback"
      ],
      answer: "Claim, Evidence, Reasoning",
      explanation: "Every argument has a claim, evidence, and reasoning."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a claim?",
      type: "multiple_choice",
      options: [
        "A question",
        "The main point of an argument",
        "A type of evidence",
        "A conclusion"
      ],
      answer: "The main point of an argument",
      explanation: "A claim is the main point or position you're arguing for."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which is the strongest type of evidence?",
      type: "multiple_choice",
      options: [
        "Personal opinion",
        "Statistical data from a study",
        "Common belief",
        "Anecdotal evidence"
      ],
      answer: "Statistical data from a study",
      explanation: "Statistical data from credible studies is strong evidence."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is a counterargument?",
      type: "multiple_choice",
      options: [
        "The main argument",
        "An opposing viewpoint",
        "Supporting evidence",
        "The conclusion"
      ],
      answer: "An opposing viewpoint",
      explanation: "A counterargument is an opposing point of view."
    },
    {
      id: "prac_006",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is an ad hominem fallacy?",
      type: "multiple_choice",
      options: [
        "Attacking the person instead of their argument",
        "Using false statistics",
        "Misrepresenting the opponent's argument",
        "Using emotional language"
      ],
      answer: "Attacking the person instead of their argument",
      explanation: "Ad hominem attacks the person, not their argument."
    },
    {
      id: "prac_007",
      objective: "obj_009",
      difficulty: "medium",
      question: "What is a hasty generalization?",
      type: "multiple_choice",
      options: [
        "A well-supported claim",
        "A claim based on limited evidence",
        "A personal attack",
        "A logical conclusion"
      ],
      answer: "A claim based on limited evidence",
      explanation: "Hasty generalizations make claims based on insufficient evidence."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "hard",
      question: "Which appeal uses logic and reason?",
      type: "multiple_choice",
      options: ["Pathos", "Logos", "Ethos", "Mythos"],
      answer: "Logos",
      explanation: "Logos is the appeal to logic and reason."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "hard",
      question: "Which appeal uses emotion?",
      type: "multiple_choice",
      options: ["Pathos", "Logos", "Ethos", "Mythos"],
      answer: "Pathos",
      explanation: "Pathos is the appeal to emotion."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "hard",
      question: "Which appeal uses credibility?",
      type: "multiple_choice",
      options: ["Pathos", "Logos", "Ethos", "Mythos"],
      answer: "Ethos",
      explanation: "Ethos is the appeal to credibility and trust."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is the first step in preparing for a debate?",
      type: "multiple_choice",
      options: [
        "Write your speech",
        "Research the topic thoroughly",
        "Practice speaking",
        "Choose your team members"
      ],
      answer: "Research the topic thoroughly",
      explanation: "Research is essential before you can prepare arguments."
    },
    {
      id: "prac_012",
      objective: "obj_010",
      difficulty: "hard",
      question: "What should you do if you don't know the answer to a question in a debate?",
      type: "multiple_choice",
      options: [
        "Make up an answer",
        "Admit it and offer to follow up",
        "Ignore the question",
        "Get angry"
      ],
      answer: "Admit it and offer to follow up",
      explanation: "Honesty and professionalism are important in debates."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_debate",
    title: "Debate and Argumentation Quiz",
    description: "Test your understanding of debate and argumentation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the difference between debate and argumentation?",
        type: "short_answer",
        answer_key: "Debate is a formal discussion with opposing sides; argumentation is the skill of constructing arguments",
        explanation: "Debate is the structured activity; argumentation is the skill used in debate."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What are the three parts of an argument?",
        type: "short_answer",
        answer_key: "Claim, Evidence, Reasoning",
        explanation: "Every argument needs a claim, evidence, and reasoning to connect them."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is a claim?",
        type: "short_answer",
        answer_key: "The main point or position in an argument",
        explanation: "A claim is what you are trying to prove or convince others of."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the difference between evidence and reasoning?",
        type: "short_answer",
        answer_key: "Evidence is facts/data; reasoning explains how evidence supports the claim",
        explanation: "Evidence is the support; reasoning is the connection."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a counterargument and why is it important?",
        type: "short_answer",
        answer_key: "An opposing viewpoint that must be addressed to strengthen your argument",
        explanation: "Addressing counterarguments shows you've considered all perspectives."
      },
      {
        id: "ass_006",
        objective: "obj_009",
        difficulty: "medium",
        question: "What is a logical fallacy?",
        type: "short_answer",
        answer_key: "An error in reasoning that makes an argument weak",
        explanation: "Logical fallacies undermine the strength of arguments."
      },
      {
        id: "ass_007",
        objective: "obj_009",
        difficulty: "hard",
        question: "Give an example of an ad hominem fallacy.",
        type: "short_answer",
        answer_key: "You can't trust her argument because she's young. (or similar)",
        explanation: "Ad hominem attacks the person instead of addressing the argument."
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "hard",
        question: "What is the difference between pathos, logos, and ethos?",
        type: "short_answer",
        answer_key: "Pathos = emotion, Logos = logic, Ethos = credibility",
        explanation: "These are the three main types of rhetorical appeal."
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "What are the basic steps to prepare for a debate?",
        type: "short_answer",
        answer_key: "Research, prepare arguments, anticipate counterarguments, practice",
        explanation: "Good preparation includes research, argument building, and practice."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the most important quality for a debater?",
        type: "short_answer",
        answer_key: "Being well-prepared with strong evidence and reasoning",
        explanation: "Preparation and evidence are the keys to successful debating."
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
        "Understand the structure of arguments",
        "Use evidence and reasoning effectively",
        "Identify and avoid logical fallacies",
        "Participate in debates confidently"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is debate?" },
        { time: "5-10 min", activity: "Direct Instruction - Parts of an Argument" },
        { time: "10-15 min", activity: "Direct Instruction - Evidence and Counterarguments" },
        { time: "15-20 min", activity: "Direct Instruction - Logical Fallacies" },
        { time: "20-25 min", activity: "Direct Instruction - Persuasive Language" },
        { time: "25-30 min", activity: "Direct Instruction - Debate Structure" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A formal discussion with opposing arguments",
        // ... full answer key
      },
      assessment: {
        ass_001: "Debate is a formal discussion with opposing sides; argumentation is the skill of constructing arguments",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Conduct a class debate on a school-related topic",
      "Write a persuasive speech on a current issue",
      "Analyze a political debate and identify argument techniques",
      "Create a debate preparation checklist"
    ],
    differentiation: {
      struggling: [
        "Start with simple, relatable topics",
        "Provide debate templates",
        "Use small group practice",
        "Focus on one skill at a time"
      ],
      advanced: [
        "Research complex societal issues",
        "Judge and critique debates",
        "Write advanced persuasive essays",
        "Participate in competitive debates"
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
      title: "Parts of an Argument",
      description: "Diagram showing claim, evidence, and reasoning",
      url: "/diagrams/argument-parts.png",
      alt: "Parts of an argument diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Logical Fallacies",
      description: "Chart of common logical fallacies",
      url: "/diagrams/logical-fallacies.png",
      alt: "Logical fallacies chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Debate Tips",
      description: "Infographic with tips for effective debating",
      url: "/diagrams/debate-tips.png",
      alt: "Debate tips infographic"
    }
  ]
};