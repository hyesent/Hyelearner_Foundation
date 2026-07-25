// Location: src/data/lessons/core/english_language/report_writing.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_report_writing",
  subject: "English Language",
  topic: "Report Writing",
  name: "Report Writing",
  icon: "📊",
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
    "Understanding of formal writing",
    "Research and analytical skills",
    "Organizational skills",
    "Basic writing skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
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
      description: "Define a report and identify its purpose",
      indicator: "Student can explain what a report is and why it's written"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the structure of a report",
      indicator: "Student can name the parts of a report"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Write a simple report on a familiar topic",
      indicator: "Student can write a basic report"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Use appropriate report format and layout",
      indicator: "Student can format a report correctly"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Write an effective introduction and conclusion",
      indicator: "Student can write strong report openings and closings"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use headings and subheadings effectively",
      indicator: "Student can organize a report with clear headings"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Incorporate data and evidence in reports",
      indicator: "Student can include tables, charts, and data"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Write a comprehensive research report",
      indicator: "Student can write a detailed research report"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze and synthesize information in reports",
      indicator: "Student can combine information from multiple sources"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Write business and technical reports",
      indicator: "Student can write professional reports"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "How to Write Effective Reports",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to write clear, structured reports for any purpose."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Report?</h2>
      <p>A <strong>report</strong> is a factual document that presents information, findings, or recommendations on a specific topic. Reports are used in business, academia, government, and many other fields.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Types of Reports</h3>
          <ul>
            <li><strong>Academic Reports:</strong> Research papers, lab reports</li>
            <li><strong>Business Reports:</strong> Financial reports, project reports</li>
            <li><strong>Technical Reports:</strong> Engineering, IT reports</li>
            <li><strong>Progress Reports:</strong> Updates on projects</li>
            <li><strong>Incident Reports:</strong> Accident, security reports</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Purpose of Reports</h3>
          <ul>
            <li>✓ Inform readers about a topic</li>
            <li>✓ Present research findings</li>
            <li>✓ Analyze data and information</li>
            <li>✓ Make recommendations</li>
            <li>✓ Document events or incidents</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Report Features</h4>
        <ul>
          <li>✓ Objective and factual</li>
          <li>✓ Well-organized with headings</li>
          <li>✓ Clear and concise</li>
          <li>✓ Includes evidence and data</li>
          <li>✓ May include recommendations</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Report Structure",
        objective: "obj_002",
        text: `
          <h3>The Structure of a Report</h3>
          <p>Reports follow a specific structure to make information easy to find and understand.</p>
          
          <div class="example-box">
            <strong>📌 Standard Report Structure:</strong>
            <ul>
              <li>1. <strong>Title Page:</strong> Title, author, date</li>
              <li>2. <strong>Table of Contents:</strong> List of sections</li>
              <li>3. <strong>Executive Summary:</strong> Brief overview</li>
              <li>4. <strong>Introduction:</strong> Background and purpose</li>
              <li>5. <strong>Methodology:</strong> How the information was gathered</li>
              <li>6. <strong>Findings:</strong> What was discovered</li>
              <li>7. <strong>Discussion:</strong> Analysis of findings</li>
              <li>8. <strong>Conclusion:</strong> Summary of findings</li>
              <li>9. <strong>Recommendations:</strong> Suggested actions</li>
              <li>10. <strong>References:</strong> Sources used</li>
              <li>11. <strong>Appendices:</strong> Additional information</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Executive Summary",
        objective: "obj_003",
        text: `
          <h3>Executive Summary</h3>
          <p>The <strong>executive summary</strong> is a brief overview of the entire report. It's often read by busy decision-makers.</p>
          
          <div class="example-box">
            <strong>📌 What to Include:</strong>
            <ul>
              <li>✓ Purpose of the report</li>
              <li>✓ Key findings</li>
              <li>✓ Main conclusions</li>
              <li>✓ Major recommendations</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Executive Summary:</strong>
            <div class="bg-white p-4 rounded">
              <p><em>"This report examines the feasibility of opening a new branch in Abuja. The research shows strong market demand, with 80% of survey respondents supporting the expansion. Recommended actions include securing a location in the central business district and hiring 15 new staff members by Q3 2025."</em></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Introduction",
        objective: "obj_005",
        text: `
          <h3>Writing the Introduction</h3>
          <p>The <strong>introduction</strong> sets the context and explains why the report was written.</p>
          
          <div class="example-box">
            <strong>📌 What to Include:</strong>
            <ul>
              <li>✓ Background and context</li>
              <li>✓ Purpose and objectives</li>
              <li>✓ Scope and limitations</li>
              <li>✓ Methodology overview</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Introduction:</strong>
            <div class="bg-white p-4 rounded">
              <p><em>"This report investigates the declining attendance at the company's annual conference. Over the past three years, attendance has dropped by 25%. The purpose of this report is to identify the reasons for this decline and recommend strategies to reverse the trend. Data was collected through surveys of past attendees and interviews with conference organizers."</em></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Findings and Analysis",
        objective: "obj_007",
        text: `
          <h3>Presenting Findings</h3>
          <p>The <strong>findings</strong> section presents the information you gathered. Use clear headings, bullet points, and visuals.</p>
          
          <div class="example-box">
            <strong>📌 Tips for Presenting Findings:</strong>
            <ul>
              <li>✓ Use clear headings and subheadings</li>
              <li>✓ Present data in tables and charts</li>
              <li>✓ Use bullet points for clarity</li>
              <li>✓ Highlight key findings</li>
              <li>✓ Be objective and factual</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Findings:</strong>
            <div class="bg-white p-4 rounded">
              <h4>3.1 Survey Results</h4>
              <p>A survey of 500 customers revealed the following:</p>
              <ul>
                <li>85% of respondents rated the product quality as "excellent"</li>
                <li>75% said they would recommend the product to others</li>
                <li>40% reported issues with delivery times</li>
              </ul>
              <p><em>Table 1: Customer Satisfaction Survey Results</em></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Discussion and Analysis",
        objective: "obj_009",
        text: `
          <h3>Analyzing Findings</h3>
          <p>The <strong>discussion</strong> section interprets the findings and explains their significance.</p>
          
          <div class="example-box">
            <strong>📌 What to Include:</strong>
            <ul>
              <li>✓ Interpretation of findings</li>
              <li>✓ Explanation of patterns and trends</li>
              <li>✓ Comparison with expectations</li>
              <li>✓ Limitations and caveats</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Discussion:</strong>
            <div class="bg-white p-4 rounded">
              <p><em>"The survey results indicate strong customer satisfaction with product quality. However, the delivery issues reported by 40% of respondents represent a significant concern. This aligns with the company's internal data showing delivery delays in three regions. Addressing these delivery issues should be a top priority."</em></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Conclusion and Recommendations",
        objective: "obj_005",
        text: `
          <h3>Concluding the Report</h3>
          <p>The <strong>conclusion</strong> summarizes the findings, and <strong>recommendations</strong> suggest actions to take.</p>
          
          <div class="example-box">
            <strong>📌 Conclusion Tips:</strong>
            <ul>
              <li>✓ Restate the purpose</li>
              <li>✓ Summarize key findings</li>
              <li>✓ Avoid introducing new information</li>
              <li>✓ Be concise and clear</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Recommendations Tips:</strong>
            <ul>
              <li>✓ Be specific and actionable</li>
              <li>✓ Prioritize recommendations</li>
              <li>✓ Explain the rationale</li>
              <li>✓ Suggest implementation steps</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example Conclusion and Recommendations:</strong>
            <div class="bg-white p-4 rounded">
              <p><strong>5.0 Conclusion</strong></p>
              <p>This report has identified that poor delivery times are the primary cause of customer dissatisfaction.</p>
              <p><strong>6.0 Recommendations</strong></p>
              <ul>
                <li>1. Invest in a new logistics system to streamline delivery</li>
                <li>2. Hire additional delivery staff in high-demand areas</li>
                <li>3. Implement a customer notification system for tracking deliveries</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Using Visuals in Reports",
        objective: "obj_007",
        text: `
          <h3>Visuals in Reports</h3>
          <p>Visuals help readers understand data quickly and easily.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Visuals:</h4>
              <ul>
                <li><strong>Tables:</strong> For organized data</li>
                <li><strong>Bar Charts:</strong> For comparisons</li>
                <li><strong>Pie Charts:</strong> For percentages</li>
                <li><strong>Line Graphs:</strong> For trends over time</li>
                <li><strong>Flow Charts:</strong> For processes</li>
                <li><strong>Images:</strong> For visual evidence</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Tips for Visuals:</h4>
              <ul>
                <li>✓ Label all visuals clearly</li>
                <li>✓ Use consistent formatting</li>
                <li>✓ Refer to visuals in the text</li>
                <li>✓ Keep visuals simple and clear</li>
                <li>✓ Use appropriate scale</li>
                <li>✓ Add brief explanations</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Common Report Writing Errors",
        objective: "obj_010",
        text: `
          <h3>Avoiding Common Errors</h3>
          <p>Watch out for these common mistakes in report writing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Common Errors:</h4>
              <ul>
                <li>Too long and wordy</li>
                <li>Not using headings/subheadings</li>
                <li>Including personal opinions</li>
                <li>Missing executive summary</li>
                <li>Poor data presentation</li>
                <li>No clear recommendations</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ How to Fix:</h4>
              <ul>
                <li>Be concise and focused</li>
                <li>Use clear headings</li>
                <li>Stay objective and factual</li>
                <li>Always include an executive summary</li>
                <li>Use clear visuals and tables</li>
                <li>Provide actionable recommendations</li>
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
          <h4>📊 Report Writing</h4>
          <ul>
            <li>✓ Follow the standard structure</li>
            <li>✓ Use headings and subheadings</li>
            <li>✓ Include an executive summary</li>
            <li>✓ Present data clearly</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Be objective and factual</li>
            <li>✓ Use visuals to present data</li>
            <li>✓ End with recommendations</li>
            <li>✓ Proofread carefully</li>
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
        misconception: "Reports are the same as essays",
        correction: "Reports are structured differently and use headings",
        explanation: "Reports use headings, subheadings, and often include data and visuals."
      },
      {
        id: "mis_002",
        misconception: "You can include opinions in reports",
        correction: "Reports should be objective and factual",
        explanation: "Reports present facts and evidence, not personal opinions."
      },
      {
        id: "mis_003",
        misconception: "The executive summary is optional",
        correction: "The executive summary is essential for busy readers",
        explanation: "Executive summaries allow readers to quickly understand the report."
      },
      {
        id: "mis_004",
        misconception: "Longer reports are better",
        correction: "Conciseness is valued in professional reports",
        explanation: "Reports should be concise and focused on key information."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business",
        description: "Reports are used for business analysis and decision-making.",
        example: "Financial reports, market research reports."
      },
      {
        id: "app_002",
        title: "Academia",
        description: "Research reports and lab reports are common in universities.",
        example: "Scientific research papers, lab experiment reports."
      },
      {
        id: "app_003",
        title: "Government",
        description: "Government agencies produce policy and investigation reports.",
        example: "Policy analysis reports, public inquiry reports."
      },
      {
        id: "app_004",
        title: "Technical Fields",
        description: "Technical reports document engineering and IT projects.",
        example: "Project status reports, technical specifications."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Report", definition: "A factual document presenting information or findings." },
    { term: "Executive Summary", definition: "A brief overview of the entire report." },
    { term: "Introduction", definition: "The opening section explaining the report's purpose." },
    { term: "Findings", definition: "The information and data discovered in the report." },
    { term: "Discussion", definition: "Analysis and interpretation of findings." },
    { term: "Conclusion", definition: "Summary of the main points and findings." },
    { term: "Recommendations", definition: "Suggested actions based on findings." },
    { term: "Methodology", definition: "How the information was gathered." },
    { term: "Appendix", definition: "Additional information at the end of a report." },
    { term: "Headings", definition: "Section titles that organize a report." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a report?",
      type: "multiple_choice",
      options: [
        "A personal story",
        "A factual document presenting information",
        "A type of poem",
        "A fictional story"
      ],
      answer: "A factual document presenting information",
      explanation: "A report is a factual document that presents information or findings."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the first section of a standard report?",
      type: "multiple_choice",
      options: [
        "Introduction",
        "Executive Summary",
        "Findings",
        "Recommendations"
      ],
      answer: "Executive Summary",
      explanation: "The Executive Summary is at the beginning of a report."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the purpose of an executive summary?",
      type: "multiple_choice",
      options: [
        "To list all references",
        "To provide a brief overview",
        "To present detailed data",
        "To write the conclusion"
      ],
      answer: "To provide a brief overview",
      explanation: "The executive summary gives a brief overview of the entire report."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What should be included in the introduction of a report?",
      type: "multiple_choice",
      options: [
        "Detailed findings",
        "Background and purpose",
        "Recommendations",
        "Data tables"
      ],
      answer: "Background and purpose",
      explanation: "The introduction provides background and states the report's purpose."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is the difference between findings and discussion?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Findings present data; discussion analyzes it",
        "Discussion presents data; findings analyze it",
        "Findings are conclusions; discussion is introduction"
      ],
      answer: "Findings present data; discussion analyzes it",
      explanation: "Findings present the information, while discussion interprets it."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "Why are headings important in a report?",
      type: "multiple_choice",
      options: [
        "They make the report longer",
        "They organize information and improve readability",
        "They are decorative",
        "They replace the executive summary"
      ],
      answer: "They organize information and improve readability",
      explanation: "Headings help organize information and make reports easier to read."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is a good way to present data in a report?",
      type: "multiple_choice",
      options: [
        "Only in paragraphs",
        "In tables and charts",
        "Only in bullet points",
        "In a single sentence"
      ],
      answer: "In tables and charts",
      explanation: "Tables and charts make data easier to understand."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What should recommendations in a report be?",
      type: "multiple_choice",
      options: [
        "Vague and general",
        "Specific and actionable",
        "Personal opinions",
        "Criticisms of others"
      ],
      answer: "Specific and actionable",
      explanation: "Recommendations should be specific and suggest concrete actions."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the difference between a report and an essay?",
      type: "multiple_choice",
      options: [
        "They are the same",
        "Reports use headings and present data; essays are continuous prose",
        "Essays use headings; reports are continuous prose",
        "Reports are always longer"
      ],
      answer: "Reports use headings and present data; essays are continuous prose",
      explanation: "Reports have a structured format with headings and data presentation."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a common mistake in report writing?",
      type: "multiple_choice",
      options: [
        "Using headings",
        "Including personal opinions",
        "Presenting data in tables",
        "Writing an executive summary"
      ],
      answer: "Including personal opinions",
      explanation: "Reports should be objective and factual, not include opinions."
    },
    {
      id: "prac_011",
      objective: "obj_010",
      difficulty: "hard",
      question: "What should you do before submitting a report?",
      type: "multiple_choice",
      options: [
        "Add more information",
        "Proofread and check formatting",
        "Remove all headings",
        "Delete the executive summary"
      ],
      answer: "Proofread and check formatting",
      explanation: "Proofreading ensures the report is professional and error-free."
    },
    {
      id: "prac_012",
      objective: "obj_006",
      difficulty: "hard",
      question: "Which of these is a valid report heading?",
      type: "multiple_choice",
      options: [
        "Interesting Stuff",
        "3.2 Customer Feedback Analysis",
        "More Information",
        "Data and Things"
      ],
      answer: "3.2 Customer Feedback Analysis",
      explanation: "Report headings should be clear, informative, and numbered logically."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_report_writing",
    title: "Report Writing Quiz",
    description: "Test your understanding of report writing",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a report?",
        type: "short_answer",
        answer_key: "A factual document presenting information or findings",
        explanation: "Reports present factual information in a structured format."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the sections of a standard report.",
        type: "short_answer",
        answer_key: "Title page, executive summary, introduction, findings, discussion, conclusion, recommendations",
        explanation: "Reports follow a standard structure with these sections."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the purpose of an executive summary?",
        type: "short_answer",
        answer_key: "To provide a brief overview of the entire report",
        explanation: "The executive summary gives busy readers a quick overview."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between findings and conclusions?",
        type: "short_answer",
        answer_key: "Findings present the data; conclusions summarize what the data means",
        explanation: "Findings are the information found; conclusions are the interpretation."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What should you include in the introduction of a report?",
        type: "short_answer",
        answer_key: "Background, purpose, scope, and methodology",
        explanation: "The introduction sets the context for the report."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Why are headings and subheadings important in a report?",
        type: "short_answer",
        answer_key: "They organize information and make it easier to read",
        explanation: "Headings help readers navigate the report easily."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What is the best way to present data in a report?",
        type: "short_answer",
        answer_key: "Using tables, charts, and graphs",
        explanation: "Visuals make data easier to understand and compare."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What should recommendations in a report be?",
        type: "short_answer",
        answer_key: "Specific, actionable, and based on findings",
        explanation: "Recommendations should be practical suggestions for action."
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "How is a report different from an essay?",
        type: "short_answer",
        answer_key: "Reports use headings, present data, and have recommendations",
        explanation: "Reports have a structured format and focus on factual information."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a common error in report writing?",
        type: "short_answer",
        answer_key: "Including personal opinions instead of factual information",
        explanation: "Reports should be objective and based on evidence."
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
        "Understand the structure of a report",
        "Write effective reports",
        "Use headings and visuals appropriately"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is a report?" },
        { time: "5-10 min", activity: "Direct Instruction - Report Structure" },
        { time: "10-15 min", activity: "Direct Instruction - Executive Summary" },
        { time: "15-20 min", activity: "Direct Instruction - Findings and Discussion" },
        { time: "20-25 min", activity: "Direct Instruction - Conclusions and Recommendations" },
        { time: "25-30 min", activity: "Direct Instruction - Using Visuals" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A factual document presenting information",
        // ... full answer key
      },
      assessment: {
        ass_001: "A factual document presenting information or findings",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Research and write a report on a current event",
      "Create a report on a school or community issue",
      "Analyze a professional report and identify its parts",
      "Write a business report on a company's performance"
    ],
    differentiation: {
      struggling: [
        "Provide report templates",
        "Use graphic organizers",
        "Practice with short reports first",
        "Focus on one section at a time"
      ],
      advanced: [
        "Write a research report on a complex topic",
        "Create a report with multiple data sources",
        "Analyze and critique professional reports",
        "Present reports to an audience"
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
      title: "Report Structure",
      description: "Diagram showing the structure of a report",
      url: "/diagrams/report-structure.png",
      alt: "Report structure diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Report Types",
      description: "Chart showing different types of reports",
      url: "/diagrams/report-types.png",
      alt: "Types of reports chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Report Writing Tips",
      description: "Infographic with tips for writing effective reports",
      url: "/diagrams/report-tips.png",
      alt: "Report writing tips infographic"
    }
  ]
};