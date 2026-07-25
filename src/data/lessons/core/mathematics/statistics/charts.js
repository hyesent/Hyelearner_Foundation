// Location: src/data/lessons/core/mathematics/statistics/charts.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_charts",
  subject: "Mathematics",
  topic: "Statistics",
  name: "Charts",
  icon: "📈",
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
      description: "Identify different types of charts (bar, pie, line)",
      indicator: "Student can recognize bar charts, pie charts, and line graphs"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Read and interpret information from bar charts",
      indicator: "Student can extract data from bar charts"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Read and interpret information from pie charts",
      indicator: "Student can extract data from pie charts"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Construct bar charts from given data",
      indicator: "Student can create bar charts from frequency tables"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Construct pie charts from given data",
      indicator: "Student can create pie charts using angle calculations"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Read and interpret information from line graphs",
      indicator: "Student can extract data from line graphs"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Compare and contrast different chart types",
      indicator: "Student can choose the best chart for a given purpose"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Construct and interpret composite charts",
      indicator: "Student can create and analyze multiple charts together"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze and draw conclusions from complex charts",
      indicator: "Student can derive insights from multi-chart data"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Charts - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering bar charts, pie charts, line graphs, and their construction."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Charts?</h2>
      <p><strong>Charts</strong> are visual representations of data that make it easier to understand and analyze.</p>
      <p>Common types of charts:</p>
      <ul>
        <li><strong>Bar Charts:</strong> Compare different categories</li>
        <li><strong>Pie Charts:</strong> Show parts of a whole</li>
        <li><strong>Line Graphs:</strong> Show trends over time</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Types of Charts",
        objective: "obj_001",
        text: `
          <h3>Bar Charts</h3>
          <ul>
            <li>Used to <strong>compare</strong> different categories</li>
            <li>Bars can be vertical or horizontal</li>
            <li>Height of bar represents value</li>
          </ul>
          
          <h3>Pie Charts</h3>
          <ul>
            <li>Used to show <strong>parts of a whole</strong></li>
            <li>Circle divided into sectors (slices)</li>
            <li>Angle of each slice represents proportion</li>
          </ul>
          
          <h3>Line Graphs</h3>
          <ul>
            <li>Used to show <strong>trends</strong> over time</li>
            <li>Points connected by lines</li>
            <li>Often used for continuous data</li>
          </ul>
        `
      },
      {
        id: "sec_002",
        title: "Reading Bar Charts",
        objective: "obj_002",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A bar chart shows favorite fruits:
            <ul>
              <li>Apples: 10</li>
              <li>Bananas: 15</li>
              <li>Oranges: 8</li>
              <li>Grapes: 12</li>
            </ul>
            <ul>
              <li><strong>Question:</strong> Which fruit is most popular?</li>
              <li><strong>Answer:</strong> Bananas (15)</li>
              <li><strong>Question:</strong> How many people chose apples or oranges?</li>
              <li><strong>Answer:</strong> 10 + 8 = 18</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Reading Pie Charts",
        objective: "obj_003",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A pie chart shows daily activities:
            <ul>
              <li>Sleep: 30%</li>
              <li>School: 25%</li>
              <li>Study: 20%</li>
              <li>Leisure: 25%</li>
            </ul>
            <ul>
              <li><strong>Question:</strong> What percentage is school and study combined?</li>
              <li><strong>Answer:</strong> 25% + 20% = 45%</li>
              <li><strong>Question:</strong> Which activity takes the most time?</li>
              <li><strong>Answer:</strong> Sleep (30%)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Constructing Bar Charts",
        objective: "obj_004",
        text: `
          <h3>Steps</h3>
          <ol>
            <li>Choose a scale for the axes</li>
            <li>Label the axes (categories and frequency)</li>
            <li>Draw bars for each category</li>
            <li>Add a title</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Favorite colors:
            <ul>
              <li>Red: 12</li>
              <li>Blue: 18</li>
              <li>Green: 10</li>
              <li>Yellow: 8</li>
            </ul>
            <ul>
              <li>Use a scale of 0-20</li>
              <li>Draw bars for each color</li>
              <li>Title: "Favorite Colors"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Constructing Pie Charts",
        objective: "obj_005",
        text: `
          <h3>Steps</h3>
          <ol>
            <li>Calculate the total frequency</li>
            <li>Calculate angle for each category: (frequency/total) × 360°</li>
            <li>Draw the sectors</li>
            <li>Label the chart</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Favorite ice cream flavors:
            <ul>
              <li>Vanilla: 10</li>
              <li>Chocolate: 15</li>
              <li>Strawberry: 5</li>
            </ul>
            <ul>
              <li>Total: 10 + 15 + 5 = 30</li>
              <li>Vanilla: (10/30) × 360° = 120°</li>
              <li>Chocolate: (15/30) × 360° = 180°</li>
              <li>Strawberry: (5/30) × 360° = 60°</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Reading Line Graphs",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A line graph shows temperature over a week:
            <ul>
              <li>Mon: 20°C</li>
              <li>Tue: 22°C</li>
              <li>Wed: 19°C</li>
              <li>Thu: 23°C</li>
              <li>Fri: 25°C</li>
              <li>Sat: 24°C</li>
              <li>Sun: 21°C</li>
            </ul>
            <ul>
              <li><strong>Question:</strong> Which day was hottest?</li>
              <li><strong>Answer:</strong> Friday (25°C)</li>
              <li><strong>Question:</strong> What was the temperature on Thursday?</li>
              <li><strong>Answer:</strong> 23°C</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Choosing the Right Chart",
        objective: "obj_007",
        text: `
          <h3>Guidelines</h3>
          <ul>
            <li><strong>Bar Chart:</strong> To compare categories</li>
            <li><strong>Pie Chart:</strong> To show proportions of a whole</li>
            <li><strong>Line Graph:</strong> To show trends over time</li>
            <li><strong>Histogram:</strong> For continuous data (like ages)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Sales data over 12 months
            <ul>
              <li>Best choice: Line graph (shows trend over time)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Composite Charts",
        objective: "obj_008",
        text: `
          <h3>Multiple Charts Together</h3>
          <ul>
            <li>Sometimes data is presented in multiple charts</li>
            <li>Use all charts together to get the full picture</li>
            <li>Compare information across charts</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A bar chart shows total sales, and a pie chart shows the breakdown by product
            <ul>
              <li>Combine information to see both total and distribution</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Analyzing Charts",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A company's sales chart:
            <ul>
              <li>Bar chart shows sales by region</li>
              <li>Line graph shows sales over time</li>
              <li>Pie chart shows product breakdown</li>
              <li><strong>Questions:</strong> Which region sells the most? Which product is most popular? Is sales increasing?</li>
              <li>Combine all answers for a complete analysis</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Bar charts: Compare categories</li>
        <li>Pie charts: Show parts of a whole</li>
        <li>Line graphs: Show trends over time</li>
        <li>Choose the right chart for your data</li>
        <li>Read charts carefully to extract all information</li>
        <li>Combine multiple charts for deeper insights</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Bar Chart", definition: "A chart with bars representing different categories." },
    { term: "Pie Chart", definition: "A circular chart divided into sectors showing proportions." },
    { term: "Line Graph", definition: "A graph showing trends using connected points." },
    { term: "Frequency", definition: "How often a value occurs." },
    { term: "Proportion", definition: "The fraction of a whole." },
    { term: "Scale", definition: "The values used on the axes of a graph." }
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
      question: "Which chart is best for showing parts of a whole?",
      type: "multiple_choice",
      options: ["Bar Chart", "Pie Chart", "Line Graph", "Histogram"],
      answer: "Pie Chart",
      explanation: "Pie charts show proportions of a whole."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "Which chart is best for showing trends over time?",
      type: "multiple_choice",
      options: ["Bar Chart", "Pie Chart", "Line Graph", "Histogram"],
      answer: "Line Graph",
      explanation: "Line graphs show trends over time."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "In a bar chart, which fruit has the highest bar?",
      type: "multiple_choice",
      options: ["Apples", "Bananas", "Oranges", "Grapes"],
      answer: "Bananas",
      explanation: "The tallest bar represents the highest value."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "In a pie chart, the largest slice represents:",
      type: "multiple_choice",
      options: ["The smallest category", "The largest category", "The middle category", "No category"],
      answer: "The largest category",
      explanation: "The largest slice represents the largest proportion."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "If a pie chart has a sector of 90°, what percentage is that?",
      type: "multiple_choice",
      options: ["15%", "20%", "25%", "30%"],
      answer: "25%",
      explanation: "90°/360° × 100 = 25%"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Bar chart categories: Red(8), Blue(12), Green(6). Which is the tallest bar?",
      type: "multiple_choice",
      options: ["Red", "Blue", "Green", "All the same"],
      answer: "Blue",
      explanation: "Blue has the highest value (12)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Pie chart: Total = 40, Category A = 10. What is the angle?",
      type: "multiple_choice",
      options: ["60°", "90°", "120°", "150°"],
      answer: "90°",
      explanation: "(10/40) × 360° = 90°"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Pie chart: Total = 60, Category B = 20. What is the angle?",
      type: "multiple_choice",
      options: ["60°", "90°", "120°", "150°"],
      answer: "120°",
      explanation: "(20/60) × 360° = 120°"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "In a line graph, if the line goes up, what does that mean?",
      type: "multiple_choice",
      options: ["Values are decreasing", "Values are increasing", "Values are constant", "No trend"],
      answer: "Values are increasing",
      explanation: "An upward line shows increasing values."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which chart is best for comparing sales in different regions?",
      type: "multiple_choice",
      options: ["Pie Chart", "Line Graph", "Bar Chart", "Histogram"],
      answer: "Bar Chart",
      explanation: "Bar charts are best for comparing categories."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which chart is best for showing the distribution of student ages?",
      type: "multiple_choice",
      options: ["Pie Chart", "Bar Chart", "Histogram", "Line Graph"],
      answer: "Histogram",
      explanation: "Histograms show the distribution of continuous data."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A bar chart shows sales, and a line graph shows profit. If sales go up but profit stays flat, what could this mean?",
      type: "multiple_choice",
      options: ["Costs are increasing", "Costs are decreasing", "Costs are constant", "Sales are irrelevant"],
      answer: "Costs are increasing",
      explanation: "If sales increase but profit doesn't, costs are likely rising."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "A pie chart has sectors: 120°, 90°, 60°, 90°. What is the missing angle?",
      type: "multiple_choice",
      options: ["0°", "30°", "60°", "90°"],
      answer: "0°",
      explanation: "120° + 90° + 60° + 90° = 360°"
    },
    {
      id: "prac_014",
      objective: "obj_008",
      difficulty: "hard",
      question: "A bar chart and pie chart both show the same data. What information does the pie chart show that the bar chart doesn't?",
      type: "multiple_choice",
      options: ["Individual values", "Proportions", "Trends", "Categories"],
      answer: "Proportions",
      explanation: "Pie charts emphasize proportions of a whole."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "A line graph shows sales increasing from January to June and decreasing from July to December. What conclusion can you draw?",
      type: "multiple_choice",
      options: ["Sales peak in June", "Sales peak in December", "Sales are constant", "Sales are increasing all year"],
      answer: "Sales peak in June",
      explanation: "Sales increase to June then decrease, so June is the peak."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_charts",
    title: "Charts Quiz",
    description: "Test your understanding of charts",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Which chart shows parts of a whole?",
        type: "short_answer",
        answer_key: "Pie Chart",
        explanation: "Pie charts show proportions of a whole."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "Which chart shows trends over time?",
        type: "short_answer",
        answer_key: "Line Graph",
        explanation: "Line graphs show trends over time."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "In a bar chart, the tallest bar represents what?",
        type: "short_answer",
        answer_key: "The highest value",
        explanation: "The tallest bar represents the highest value."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "easy",
        question: "If a pie chart has a sector of 45°, what percentage is that?",
        type: "short_answer",
        answer_key: "12.5%",
        explanation: "45°/360° × 100 = 12.5%"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Pie chart: Total = 50, Category A = 15. Find the angle.",
        type: "short_answer",
        answer_key: "108°",
        explanation: "(15/50) × 360° = 108°"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "Bar chart: Red(5), Blue(10), Green(8). Which color is most popular?",
        type: "short_answer",
        answer_key: "Blue",
        explanation: "Blue has the highest value."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "In a line graph, a downward line means values are:",
        type: "short_answer",
        answer_key: "Decreasing",
        explanation: "A downward line shows decreasing values."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Which chart is best for comparing the sales of different products?",
        type: "short_answer",
        answer_key: "Bar Chart",
        explanation: "Bar charts are best for comparing categories."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "A pie chart has sectors: 90°, 120°, 60°, 90°. Find the missing sector.",
        type: "short_answer",
        answer_key: "0°",
        explanation: "360° - 270° = 90°"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A line graph shows sales increasing from Jan to Jun and decreasing from Jul to Dec. When is sales highest?",
        type: "short_answer",
        answer_key: "June",
        explanation: "Sales peak in June before decreasing."
      }
    ]
  }
};