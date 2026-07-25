// Location: src/data/lessons/core/mathematics/statistics/interpretation.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_data_interpretation",
  subject: "Mathematics",
  topic: "Statistics",
  name: "Data Interpretation",
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
      description: "Extract information from tables and charts",
      indicator: "Student can read and interpret data from given tables and charts"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate totals and differences from data",
      indicator: "Student can perform basic calculations from data"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify trends from data",
      indicator: "Student can recognize patterns and trends in data"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Compare data sets and draw conclusions",
      indicator: "Student can compare different data sets and form conclusions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Analyze data to find relationships",
      indicator: "Student can identify relationships between variables"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use data to make predictions",
      indicator: "Student can use trends to forecast future values"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Critically evaluate data and identify misleading representations",
      indicator: "Student can spot errors and manipulation in data presentation"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Combine information from multiple data sources",
      indicator: "Student can synthesize data from multiple charts and tables"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Draw comprehensive conclusions from complex data",
      indicator: "Student can write detailed analysis from data"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Data Interpretation - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering how to interpret data from tables and charts."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Data Interpretation?</h2>
      <p><strong>Data interpretation</strong> is the process of analyzing data to extract meaning and draw conclusions.</p>
      <p>It involves:</p>
      <ul>
        <li>Reading data from tables and charts</li>
        <li>Identifying patterns and trends</li>
        <li>Making comparisons</li>
        <li>Drawing conclusions</li>
        <li>Making predictions</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Reading Data from Tables",
        objective: "obj_001",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Students' test scores:
            <table>
              <tr><th>Name</th><th>Math</th><th>English</th><th>Science</th></tr>
              <tr><td>A</td><td>85</td><td>78</td><td>90</td></tr>
              <tr><td>B</td><td>70</td><td>82</td><td>75</td></tr>
              <tr><td>C</td><td>95</td><td>88</td><td>92</td></tr>
              <tr><td>D</td><td>60</td><td>75</td><td>70</td></tr>
            </table>
            <ul>
              <li>Student A's Math score: 85</li>
              <li>Student C's Science score: 92</li>
              <li>Highest English score: 88 (Student C)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Calculations from Data",
        objective: "obj_002",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Sales data:
            <table>
              <tr><th>Month</th><th>Sales ($)</th></tr>
              <tr><td>Jan</td><td>1000</td></tr>
              <tr><td>Feb</td><td>1200</td></tr>
              <tr><td>Mar</td><td>800</td></tr>
              <tr><td>Apr</td><td>1500</td></tr>
            </table>
            <ul>
              <li>Total sales: 1000 + 1200 + 800 + 1500 = 4500</li>
              <li>Average monthly sales: 4500/4 = 1125</li>
              <li>Difference between Apr and Mar: 1500 - 800 = 700</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Identifying Trends",
        objective: "obj_003",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Temperature data:
            <table>
              <tr><th>Day</th><th>Temp (°C)</th></tr>
              <tr><td>Mon</td><td>20</td></tr>
              <tr><td>Tue</td><td>22</td></tr>
              <tr><td>Wed</td><td>25</td></tr>
              <tr><td>Thu</td><td>23</td></tr>
              <tr><td>Fri</td><td>28</td></tr>
            </table>
            <ul>
              <li>Overall trend: Temperature is increasing</li>
              <li>Highest: Friday (28°C)</li>
              <li>Lowest: Monday (20°C)</li>
              <li>Trend line: Upward</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Comparing Data Sets",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Sales in two stores:
            <table>
              <tr><th>Month</th><th>Store A</th><th>Store B</th></tr>
              <tr><td>Jan</td><td>1000</td><td>800</td></tr>
              <tr><td>Feb</td><td>1200</td><td>900</td></tr>
              <tr><td>Mar</td><td>1100</td><td>1000</td></tr>
              <tr><td>Apr</td><td>1300</td><td>1100</td></tr>
            </table>
            <ul>
              <li>Store A has higher sales every month</li>
              <li>Store A's average: 1150</li>
              <li>Store B's average: 950</li>
              <li>Store A sells 200 more on average</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Analyzing Relationships",
        objective: "obj_005",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Study hours vs test scores:
            <table>
              <tr><th>Hours</th><th>Score</th></tr>
              <tr><td>1</td><td>50</td></tr>
              <tr><td>2</td><td>60</td></tr>
              <tr><td>3</td><td>70</td></tr>
              <tr><td>4</td><td>80</td></tr>
              <tr><td>5</td><td>85</td></tr>
            </table>
            <ul>
              <li>As study hours increase, scores increase</li>
              <li>Positive correlation between hours and scores</li>
              <li>Each extra hour gives ~10 points</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Making Predictions",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Sales growth:
            <table>
              <tr><th>Year</th><th>Sales ($)</th></tr>
              <tr><td>2020</td><td>10000</td></tr>
              <tr><td>2021</td><td>12000</td></tr>
              <tr><td>2022</td><td>14000</td></tr>
              <tr><td>2023</td><td>16000</td></tr>
            </table>
            <ul>
              <li>Increase of 2000 per year</li>
              <li>Prediction for 2024: 16000 + 2000 = 18000</li>
              <li>Prediction for 2025: 18000 + 2000 = 20000</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Critical Evaluation",
        objective: "obj_007",
        text: `
          <h3>Common Issues in Data</h3>
          <ul>
            <li><strong>Misleading scales:</strong> Y-axis starting not at 0</li>
            <li><strong>Biased samples:</strong> Data doesn't represent the whole population</li>
            <li><strong>Cherry-picking:</strong> Only showing favorable data</li>
            <li><strong>Misleading graphs:</strong> Visual tricks to exaggerate differences</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A bar chart starting at 100 instead of 0
            <ul>
              <li>Makes small differences look large</li>
              <li>Always check the y-axis scale</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Combining Multiple Data Sources",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Sales data + Marketing spend:
            <table>
              <tr><th>Month</th><th>Marketing</th><th>Sales</th></tr>
              <tr><td>Jan</td><td>100</td><td>1000</td></tr>
              <tr><td>Feb</td><td>150</td><td>1200</td></tr>
              <tr><td>Mar</td><td>200</td><td>1500</td></tr>
            </table>
            <ul>
              <li>Higher marketing spend leads to higher sales</li>
              <li>Increase marketing by 50 increases sales by ~200</li>
              <li>Combined analysis gives deeper insights</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Writing Data Analysis",
        objective: "obj_009",
        text: `
          <h3>Structure of a Good Analysis</h3>
          <ol>
            <li><strong>Summary:</strong> What does the data show?</li>
            <li><strong>Key findings:</strong> What are the most important points?</li>
            <li><strong>Trends:</strong> What patterns do you see?</li>
            <li><strong>Comparisons:</strong> How do different parts compare?</li>
            <li><strong>Conclusions:</strong> What can we conclude?</li>
            <li><strong>Recommendations:</strong> What action should be taken?</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Sales data shows steady growth of 10% per quarter.
            <ul>
              <li>Summary: Sales are growing consistently</li>
              <li>Key finding: Growth rate of 10% per quarter</li>
              <li>Trend: Upward trend</li>
              <li>Comparison: Similar growth across all regions</li>
              <li>Conclusion: Company is performing well</li>
              <li>Recommendation: Maintain current strategies</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Data interpretation is about finding meaning in data</li>
        <li>Extract information from tables and charts</li>
        <li>Calculate totals, averages, and differences</li>
        <li>Identify trends and patterns</li>
        <li>Compare different data sets</li>
        <li>Make predictions based on trends</li>
        <li>Be critical of misleading data presentations</li>
        <li>Combine multiple data sources for deeper insights</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Data Interpretation", definition: "The process of analyzing data to draw conclusions." },
    { term: "Trend", definition: "A general direction in which data is moving." },
    { term: "Correlation", definition: "A relationship between two variables." },
    { term: "Prediction", definition: "Using data to forecast future values." },
    { term: "Bias", definition: "Systematic error that distorts results." },
    { term: "Outlier", definition: "A value that is much higher or lower than the others." }
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
      question: "In a table, Student A has Math=85, English=78, Science=90. What is Student A's total?",
      type: "multiple_choice",
      options: ["243", "253", "263", "273"],
      answer: "253",
      explanation: "85 + 78 + 90 = 253"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Sales: Jan=1000, Feb=1200, Mar=800, Apr=1500. What is the total?",
      type: "multiple_choice",
      options: ["4000", "4500", "5000", "5500"],
      answer: "4500",
      explanation: "1000 + 1200 + 800 + 1500 = 4500"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Temperatures: 20, 22, 25, 23, 28. What is the trend?",
      type: "multiple_choice",
      options: ["Decreasing", "Increasing", "Constant", "No trend"],
      answer: "Increasing",
      explanation: "Overall, temperatures are going up."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Sales: Jan=1000, Feb=1200. What is the increase from Jan to Feb?",
      type: "multiple_choice",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "1200 - 1000 = 200"
    },
    {
      id: "prac_005",
      objective: "obj_001",
      difficulty: "easy",
      question: "In a table, Student C has Math=95, English=88, Science=92. What is Student C's average?",
      type: "multiple_choice",
      options: ["88", "90", "91.67", "92"],
      answer: "91.67",
      explanation: "(95 + 88 + 92)/3 = 91.67"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Store A sales: 1000, 1200, 1100, 1300. Store B sales: 800, 900, 1000, 1100. Which store has higher average sales?",
      type: "multiple_choice",
      options: ["Store A", "Store B", "Both equal", "Cannot determine"],
      answer: "Store A",
      explanation: "Store A avg = 1150, Store B avg = 950"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Hours: 1,2,3,4,5. Scores: 50,60,70,80,85. What relationship do you see?",
      type: "multiple_choice",
      options: ["No relationship", "Positive relationship", "Negative relationship", "Random"],
      answer: "Positive relationship",
      explanation: "More study hours = higher scores."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Sales: 2020=10000, 2021=12000, 2022=14000, 2023=16000. Predict sales for 2024.",
      type: "multiple_choice",
      options: ["16000", "17000", "18000", "19000"],
      answer: "18000",
      explanation: "Increase of 2000 per year → 16000 + 2000 = 18000"
    },
    {
      id: "prac_009",
      objective: "obj_004",
      difficulty: "medium",
      question: "Store A: 1000,1200,1100,1300. Store B: 800,900,1000,1100. What is the average difference?",
      type: "multiple_choice",
      options: ["100", "150", "200", "250"],
      answer: "200",
      explanation: "1150 - 950 = 200"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Population: 2020=1000, 2021=1050, 2022=1100, 2023=1150. Predict population for 2024.",
      type: "multiple_choice",
      options: ["1150", "1200", "1250", "1300"],
      answer: "1200",
      explanation: "Increase of 50 per year → 1150 + 50 = 1200"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A bar chart starts the y-axis at 90 instead of 0. What is the problem?",
      type: "multiple_choice",
      options: ["It's accurate", "It exaggerates differences", "It shows no difference", "It's helpful"],
      answer: "It exaggerates differences",
      explanation: "Starting at 90 makes small differences look big."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Sales data shows growth, but profit data shows decline. What could this mean?",
      type: "multiple_choice",
      options: ["Sales are irrelevant", "Costs are increasing", "Costs are decreasing", "No conclusion"],
      answer: "Costs are increasing",
      explanation: "If sales grow but profit declines, costs are rising."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Hours: 1,2,3,4. Scores: 40,55,65,80. What is the trend?",
      type: "multiple_choice",
      options: ["Linear", "Increasing faster", "Increasing slower", "No trend"],
      answer: "Increasing faster",
      explanation: "Scores are increasing at a faster rate."
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "A survey only includes people from one age group. What is the problem?",
      type: "multiple_choice",
      options: ["Sample is too small", "Sample is biased", "Sample is representative", "No problem"],
      answer: "Sample is biased",
      explanation: "Only one age group doesn't represent the whole population."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Sales: Q1=1000, Q2=1200, Q3=1100, Q4=1500. What is the best conclusion?",
      type: "multiple_choice",
      options: ["Sales are declining", "Sales are increasing overall", "Sales are constant", "No trend"],
      answer: "Sales are increasing overall",
      explanation: "Q4 is the highest quarter, showing overall growth."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_data_interpretation",
    title: "Data Interpretation Quiz",
    description: "Test your understanding of data interpretation",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Sales: 1000, 1200, 800, 1500. What is the highest value?",
        type: "short_answer",
        answer_key: "1500",
        explanation: "1500 is the highest sales figure."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Sales: 1000, 1200, 800, 1500. What is the total?",
        type: "short_answer",
        answer_key: "4500",
        explanation: "1000 + 1200 + 800 + 1500 = 4500"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Temperatures: 15, 18, 20, 23, 25. What is the trend?",
        type: "short_answer",
        answer_key: "Increasing",
        explanation: "Temperatures are going up over time."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Store A avg=1000, Store B avg=1200. Which store is higher?",
        type: "short_answer",
        answer_key: "Store B",
        explanation: "1200 > 1000"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Hours: 1,2,3,4. Scores: 50,60,70,80. What relationship?",
        type: "short_answer",
        answer_key: "Positive",
        explanation: "More hours → higher scores."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Sales: 2020=5000, 2021=6000, 2022=7000, 2023=8000. Predict 2024.",
        type: "short_answer",
        answer_key: "9000",
        explanation: "Increase of 1000 per year → 8000 + 1000 = 9000"
      },
      {
        id: "ass_007",
        objective: "obj_004",
        difficulty: "medium",
        question: "Sales: 2020=10000, 2021=12000. What is the increase?",
        type: "short_answer",
        answer_key: "2000",
        explanation: "12000 - 10000 = 2000"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "A graph starts the y-axis at 50 instead of 0. What is the issue?",
        type: "short_answer",
        answer_key: "Exaggerates differences",
        explanation: "Starting at 50 makes small differences appear large."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Sales are up but profits are down. What could this mean?",
        type: "short_answer",
        answer_key: "Costs are increasing",
        explanation: "Higher sales with lower profits means costs are rising."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Sales: Jan=100, Feb=120, Mar=140, Apr=160. What is the best conclusion?",
        type: "short_answer",
        answer_key: "Sales are increasing",
        explanation: "Sales show a consistent upward trend."
      }
    ]
  }
};