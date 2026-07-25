// Location: src/data/lessons/core/mathematics/statistics/data_collection.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_data_collection",
  subject: "Mathematics",
  topic: "Statistics",
  name: "Data Collection",
  icon: "📊",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define data and distinguish between primary and secondary data",
      indicator: "Student can explain what data is and differentiate primary from secondary data"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify different types of data: qualitative and quantitative",
      indicator: "Student can classify data as qualitative or quantitative"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Distinguish between discrete and continuous data",
      indicator: "Student can identify discrete and continuous data"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Choose appropriate data collection methods",
      indicator: "Student can select the right method for different situations"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Design a simple questionnaire or survey",
      indicator: "Student can create basic survey questions"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the advantages and disadvantages of different data collection methods",
      indicator: "Student can compare methods like surveys, interviews, and observation"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Identify sources of bias in data collection",
      indicator: "Student can recognize and suggest ways to reduce bias"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Critique data collection methods and suggest improvements",
      indicator: "Student can evaluate and improve data collection methods"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Design a full data collection plan for a research question",
      indicator: "Student can create a comprehensive data collection plan"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Data Collection - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering types of data, collection methods, and sources of bias."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Data Collection?</h2>
      <p><strong>Data</strong> is information collected for analysis and decision-making.</p>
      <p><strong>Data Collection</strong> is the systematic process of gathering information from various sources.</p>
      <p>Good data collection is essential for accurate analysis and reliable conclusions.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Data",
        objective: "obj_001",
        text: `
          <h3>Primary Data</h3>
          <ul>
            <li>Collected directly by the researcher</li>
            <li>Original and first-hand</li>
            <li>Examples: Surveys, interviews, experiments</li>
          </ul>
          
          <h3>Secondary Data</h3>
          <ul>
            <li>Already collected by someone else</li>
            <li>Second-hand data</li>
            <li>Examples: Government statistics, books, journals, the internet</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A researcher asking students about their study habits = Primary data. Using published school attendance records = Secondary data.
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Qualitative vs Quantitative Data",
        objective: "obj_002",
        text: `
          <h3>Qualitative Data</h3>
          <ul>
            <li>Descriptive, non-numerical</li>
            <li>Deals with qualities and characteristics</li>
            <li>Examples: Colors, names, opinions, categories</li>
          </ul>
          
          <h3>Quantitative Data</h3>
          <ul>
            <li>Numerical data</li>
            <li>Can be measured and counted</li>
            <li>Examples: Height, weight, test scores, age</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> "Favorite color" = Qualitative. "Height in cm" = Quantitative.
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Discrete vs Continuous Data",
        objective: "obj_003",
        text: `
          <h3>Discrete Data</h3>
          <ul>
            <li>Countable values</li>
            <li>Only specific values (whole numbers)</li>
            <li>Examples: Number of students, shoe size, test scores</li>
          </ul>
          
          <h3>Continuous Data</h3>
          <ul>
            <li>Measurable values</li>
            <li>Can take any value within a range</li>
            <li>Examples: Height, weight, temperature, time</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Number of cars in a parking lot = Discrete. The time taken to run 100m = Continuous.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Data Collection Methods",
        objective: "obj_004",
        text: `
          <h3>Common Methods</h3>
          <ul>
            <li><strong>Surveys/Questionnaires:</strong> Written questions for a sample</li>
            <li><strong>Interviews:</strong> Face-to-face or phone conversations</li>
            <li><strong>Observation:</strong> Watching and recording behavior</li>
            <li><strong>Experiments:</strong> Controlled tests to gather data</li>
            <li><strong>Focus Groups:</strong> Small group discussions</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A company wants to know customer satisfaction → Survey. A scientist testing a new drug → Experiment.
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Designing a Questionnaire",
        objective: "obj_005",
        text: `
          <h3>Key Elements of a Good Questionnaire</h3>
          <ul>
            <li><strong>Clear purpose:</strong> What do you want to find out?</li>
            <li><strong>Simple language:</strong> Easy to understand</li>
            <li><strong>Specific questions:</strong> Avoid vague questions</li>
            <li><strong>Mixed question types:</strong> Closed and open-ended questions</li>
            <li><strong>Logical flow:</strong> Questions in a sensible order</li>
            <li><strong>Pilot test:</strong> Test on a small group first</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> "How satisfied are you?" → Better: "Rate your satisfaction from 1-5." (Specific and measurable)
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Advantages and Disadvantages",
        objective: "obj_006",
        text: `
          <h3>Surveys</h3>
          <ul>
            <li>✅ Collects data from many people</li>
            <li>❌ May have low response rates</li>
          </ul>
          
          <h3>Interviews</h3>
          <ul>
            <li>✅ In-depth information</li>
            <li>❌ Time-consuming and expensive</li>
          </ul>
          
          <h3>Observation</h3>
          <ul>
            <li>✅ Natural behavior captured</li>
            <li>❌ Observer bias possible</li>
          </ul>
          
          <h3>Experiments</h3>
          <ul>
            <li>✅ Controlled conditions</li>
            <li>❌ May not reflect real-world situations</li>
          </ul>
        `
      },
      {
        id: "sec_007",
        title: "Sources of Bias",
        objective: "obj_007",
        text: `
          <h3>Common Biases</h3>
          <ul>
            <li><strong>Sampling Bias:</strong> Some groups are not represented</li>
            <li><strong>Response Bias:</strong> People give inaccurate answers</li>
            <li><strong>Leading Questions:</strong> Questions that push a certain answer</li>
            <li><strong>Self-Selection Bias:</strong> Only certain people choose to participate</li>
            <li><strong>Observer Bias:</strong> Researcher influences the results</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Asking "Don't you agree that school should start later?" encourages agreement → Leading question.
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Evaluating Data Collection",
        objective: "obj_008",
        text: `
          <h3>Criteria for Evaluation</h3>
          <ul>
            <li><strong>Reliability:</strong> Would the same method produce the same results?</li>
            <li><strong>Validity:</strong> Does it measure what it claims to measure?</li>
            <li><strong>Representativeness:</strong> Does the sample represent the population?</li>
            <li><strong>Avoidance of Bias:</strong> Are there any sources of bias?</li>
          </ul>
        `
      },
      {
        id: "sec_009",
        title: "Designing a Data Collection Plan",
        objective: "obj_009",
        text: `
          <h3>Steps in a Data Collection Plan</h3>
          <ol>
            <li>Define the research question</li>
            <li>Identify the population and sample</li>
            <li>Choose data collection methods</li>
            <li>Design instruments (questionnaires, observation forms)</li>
            <li>Pilot test and refine</li>
            <li>Collect the data</li>
            <li>Organize and store data</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Research Question: "How much time do students spend on homework?"
            <ul>
              <li>Population: All students in the school</li>
              <li>Sample: 100 randomly selected students</li>
              <li>Method: Questionnaire</li>
              <li>Instrument: Survey with questions about homework time</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Primary data: collected directly; Secondary data: already exists</li>
        <li>Qualitative: non-numerical; Quantitative: numerical</li>
        <li>Discrete: countable; Continuous: measurable</li>
        <li>Methods: Surveys, interviews, observation, experiments</li>
        <li>Good design avoids bias and ensures reliable data</li>
        <li>A data collection plan is essential for quality research</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Data", definition: "Information collected for analysis." },
    { term: "Primary Data", definition: "Data collected directly by the researcher." },
    { term: "Secondary Data", definition: "Data already collected by someone else." },
    { term: "Qualitative Data", definition: "Descriptive, non-numerical data." },
    { term: "Quantitative Data", definition: "Numerical data that can be measured." },
    { term: "Discrete Data", definition: "Data with countable, whole values." },
    { term: "Continuous Data", definition: "Data that can take any value in a range." },
    { term: "Survey", definition: "A method of collecting data using questionnaires." },
    { term: "Bias", definition: "Systematic error that distorts results." },
    { term: "Sample", definition: "A subset of the population studied." }
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
      question: "What type of data is collected directly by the researcher?",
      type: "multiple_choice",
      options: ["Primary Data", "Secondary Data", "Qualitative Data", "Quantitative Data"],
      answer: "Primary Data",
      explanation: "Primary data is collected directly by the researcher."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "What type of data is obtained from government statistics?",
      type: "multiple_choice",
      options: ["Primary Data", "Secondary Data", "Qualitative Data", "Quantitative Data"],
      answer: "Secondary Data",
      explanation: "Government statistics are secondary data."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which type of data is non-numerical?",
      type: "multiple_choice",
      options: ["Quantitative", "Qualitative", "Discrete", "Continuous"],
      answer: "Qualitative",
      explanation: "Qualitative data is descriptive and non-numerical."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which type of data is numerical?",
      type: "multiple_choice",
      options: ["Quantitative", "Qualitative", "Descriptive", "Categorical"],
      answer: "Quantitative",
      explanation: "Quantitative data is numerical."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "Number of students in a class is what type of data?",
      type: "multiple_choice",
      options: ["Discrete", "Continuous", "Qualitative", "Descriptive"],
      answer: "Discrete",
      explanation: "Number of students is countable → Discrete data."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_003",
      difficulty: "medium",
      question: "Height of a person is what type of data?",
      type: "multiple_choice",
      options: ["Discrete", "Continuous", "Qualitative", "Categorical"],
      answer: "Continuous",
      explanation: "Height can take any value in a range → Continuous data."
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which method is best for collecting detailed information from a small group?",
      type: "multiple_choice",
      options: ["Survey", "Interview", "Observation", "Experiment"],
      answer: "Interview",
      explanation: "Interviews provide in-depth, detailed information."
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which method is best for collecting data from a large number of people?",
      type: "multiple_choice",
      options: ["Survey", "Interview", "Observation", "Experiment"],
      answer: "Survey",
      explanation: "Surveys can reach many people efficiently."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a disadvantage of observation as a data collection method?",
      type: "multiple_choice",
      options: ["Time-consuming", "Observer bias", "Expensive", "All of the above"],
      answer: "All of the above",
      explanation: "Observation can be time-consuming, subject to observer bias, and expensive."
    },
    {
      id: "prac_010",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is an example of a well-designed survey question?",
      type: "multiple_choice",
      options: [
        "Do you like math? (Yes/No)",
        "Rate your math skills from 1-5",
        "What is your favorite subject?",
        "Math is great, isn't it?"
      ],
      answer: "Rate your math skills from 1-5",
      explanation: "This question is specific and measurable."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is it called when only certain people choose to participate in a survey?",
      type: "multiple_choice",
      options: ["Sampling Bias", "Self-Selection Bias", "Response Bias", "Observer Bias"],
      answer: "Self-Selection Bias",
      explanation: "Self-selection bias occurs when only certain people choose to participate."
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "What is it called when a question suggests a particular answer?",
      type: "multiple_choice",
      options: ["Open-ended question", "Leading question", "Closed question", "Neutral question"],
      answer: "Leading question",
      explanation: "Leading questions push respondents toward a particular answer."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "If a survey only includes people from one city, what is the problem?",
      type: "multiple_choice",
      options: ["Sample is too large", "Sample is not representative", "Sample is too small", "No problem"],
      answer: "Sample is not representative",
      explanation: "A sample should represent the entire population."
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "What type of bias occurs when the researcher influences the results?",
      type: "multiple_choice",
      options: ["Sampling Bias", "Observer Bias", "Response Bias", "Self-Selection Bias"],
      answer: "Observer Bias",
      explanation: "Observer bias occurs when the researcher influences the results."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the first step in designing a data collection plan?",
      type: "multiple_choice",
      options: ["Choose the method", "Collect the data", "Define the research question", "Analyze the data"],
      answer: "Define the research question",
      explanation: "The research question guides everything else in the plan."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_data_collection",
    title: "Data Collection Quiz",
    description: "Test your understanding of data collection",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is primary data?",
        type: "short_answer",
        answer_key: "Data collected directly by the researcher",
        explanation: "Primary data is original, first-hand data."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is secondary data?",
        type: "short_answer",
        answer_key: "Data already collected by someone else",
        explanation: "Secondary data is already existing data."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "What type of data is 'favorite color'?",
        type: "short_answer",
        answer_key: "Qualitative",
        explanation: "Favorite color is descriptive and non-numerical."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "easy",
        question: "What type of data is 'shoe size'?",
        type: "short_answer",
        answer_key: "Discrete",
        explanation: "Shoe size is countable and takes whole values."
      },
      {
        id: "ass_005",
        objective: "obj_003",
        difficulty: "medium",
        question: "What type of data is 'temperature'?",
        type: "short_answer",
        answer_key: "Continuous",
        explanation: "Temperature can take any value in a range."
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "Which method is best for collecting natural behavior?",
        type: "short_answer",
        answer_key: "Observation",
        explanation: "Observation captures natural behavior."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is a well-designed question?",
        type: "short_answer",
        answer_key: "A specific, clear, and unbiased question",
        explanation: "Good questions are clear, specific, and unbiased."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is sampling bias?",
        type: "short_answer",
        answer_key: "When some groups are not represented in the sample",
        explanation: "Sampling bias occurs when the sample doesn't represent the population."
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "What is a leading question?",
        type: "short_answer",
        answer_key: "A question that suggests a particular answer",
        explanation: "Leading questions push respondents toward a certain answer."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the first step in a data collection plan?",
        type: "short_answer",
        answer_key: "Define the research question",
        explanation: "The research question guides everything else."
      }
    ]
  }
};