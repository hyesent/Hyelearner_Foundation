// Location: src/data/lessons/core/mathematics/statistics/measures.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_measures_of_central_tendency",
  subject: "Mathematics",
  topic: "Statistics",
  name: "Measures of Central Tendency",
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
      description: "Define mean, median, and mode",
      indicator: "Student can explain what each measure represents"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate the mean of a set of data",
      indicator: "Student can find the average of a data set"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Find the median of a set of data",
      indicator: "Student can find the middle value of a data set"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Find the mode of a set of data",
      indicator: "Student can identify the most frequent value"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Determine which measure of central tendency is most appropriate",
      indicator: "Student can choose the best measure for a given data set"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate the mean from a frequency table",
      indicator: "Student can calculate mean from grouped data"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Calculate the mean, median, and mode from grouped frequency tables",
      indicator: "Student can handle grouped data calculations"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Compare and interpret measures of central tendency",
      indicator: "Student can analyze which measure best represents the data"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve real-world problems involving central tendency",
      indicator: "Student can apply measures to practical situations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Measures of Central Tendency - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering mean, median, and mode with examples."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Measures of Central Tendency?</h2>
      <p>Measures of central tendency are <strong>single values</strong> that describe the <strong>center</strong> of a data set.</p>
      <p>The three main measures are:</p>
      <ul>
        <li><strong>Mean:</strong> The average</li>
        <li><strong>Median:</strong> The middle value</li>
        <li><strong>Mode:</strong> The most frequent value</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Mean",
        objective: "obj_002",
        text: `
          <h3>Formula</h3>
          <p><strong>Mean = (Sum of all values) / (Number of values)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find the mean of 4, 6, 8, 10, 12
            <ul>
              <li>Sum = 4 + 6 + 8 + 10 + 12 = 40</li>
              <li>Number of values = 5</li>
              <li>Mean = 40/5 = 8</li>
              <li><strong>Answer:</strong> 8</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A student's test scores: 75, 80, 85, 90, 95
            <ul>
              <li>Sum = 425</li>
              <li>Mean = 425/5 = 85</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Median",
        objective: "obj_003",
        text: `
          <h3>Steps to Find the Median</h3>
          <ol>
            <li>Arrange data in <strong>ascending order</strong></li>
            <li>If <strong>odd</strong> number of values: take the middle value</li>
            <li>If <strong>even</strong> number of values: take the average of the two middle values</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example 1 (Odd):</strong> 5, 7, 9, 11, 13
            <ul>
              <li>Middle value = 9</li>
              <li><strong>Median = 9</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2 (Even):</strong> 10, 12, 14, 16, 18, 20
            <ul>
              <li>Middle two: 14 and 16</li>
              <li>Median = (14 + 16)/2 = 15</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Mode",
        objective: "obj_004",
        text: `
          <h3>Definition</h3>
          <p>The mode is the value that appears <strong>most frequently</strong>.</p>
          <ul>
            <li>If all values appear once: <strong>no mode</strong></li>
            <li>If two values tie: <strong>bimodal</strong></li>
            <li>If more than two tie: <strong>multimodal</strong></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2, 4, 6, 6, 8, 10
            <ul>
              <li>6 appears twice (most frequent)</li>
              <li><strong>Mode = 6</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 1, 2, 3, 4, 5
            <ul>
              <li>All appear once</li>
              <li><strong>No mode</strong></li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Choosing the Best Measure",
        objective: "obj_005",
        text: `
          <h3>When to Use Each</h3>
          <ul>
            <li><strong>Mean:</strong> Best for data without outliers, like test scores</li>
            <li><strong>Median:</strong> Best for skewed data, like income or house prices</li>
            <li><strong>Mode:</strong> Best for categorical data, like favorite color</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> House prices: $100k, $110k, $120k, $130k, $1M
            <ul>
              <li>Mean = $292k (not representative)</li>
              <li>Median = $120k (better representation)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Mean from a Frequency Table",
        objective: "obj_006",
        text: `
          <h3>Steps</h3>
          <ol>
            <li>Multiply each value by its frequency</li>
            <li>Sum these products</li>
            <li>Divide by the total frequency</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <table>
              <tr><th>Score (x)</th><th>Frequency (f)</th><th>fx</th></tr>
              <tr><td>2</td><td>1</td><td>2</td></tr>
              <tr><td>4</td><td>2</td><td>8</td></tr>
              <tr><td>6</td><td>3</td><td>18</td></tr>
              <tr><td>8</td><td>4</td><td>32</td></tr>
            </table>
            <ul>
              <li>Total fx = 2 + 8 + 18 + 32 = 60</li>
              <li>Total f = 1 + 2 + 3 + 4 = 10</li>
              <li>Mean = 60/10 = 6</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Grouped Data",
        objective: "obj_007",
        text: `
          <h3>Finding Midpoints</h3>
          <p>For grouped data, use the <strong>midpoint</strong> of each class interval.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong>
            <table>
              <tr><th>Class</th><th>Midpoint (x)</th><th>f</th><th>fx</th></tr>
              <tr><td>0-9</td><td>4.5</td><td>2</td><td>9</td></tr>
              <tr><td>10-19</td><td>14.5</td><td>5</td><td>72.5</td></tr>
              <tr><td>20-29</td><td>24.5</td><td>8</td><td>196</td></tr>
              <tr><td>30-39</td><td>34.5</td><td>5</td><td>172.5</td></tr>
            </table>
            <ul>
              <li>Total fx = 450</li>
              <li>Total f = 20</li>
              <li>Mean = 450/20 = 22.5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Comparing Mean, Median, and Mode",
        objective: "obj_008",
        text: `
          <h3>In a Symmetrical Distribution</h3>
          <p>Mean = Median = Mode</p>
          
          <h3>In a Skewed Distribution</h3>
          <ul>
            <li><strong>Right-skewed:</strong> Mean > Median > Mode</li>
            <li><strong>Left-skewed:</strong> Mean < Median < Mode</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Incomes with a few very high earners
            <ul>
              <li>Mean is pulled up by the high earners</li>
              <li>Median is more representative of the typical earner</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Real-World Applications",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A teacher wants to know the typical test score
            <ul>
              <li>If scores are: 60, 70, 75, 80, 85, 90, 95</li>
              <li>Mean = 79.3</li>
              <li>Median = 80</li>
              <li>Mode = none (all different)</li>
              <li>Median best represents the "middle" score</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Mean = average (sum of all values ÷ number of values)</li>
        <li>Median = middle value (arrange in order first)</li>
        <li>Mode = most frequent value</li>
        <li>Use mean for balanced data, median for skewed data, mode for categorical data</li>
        <li>Grouped data requires calculating midpoints</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Mean", definition: "The average of a data set." },
    { term: "Median", definition: "The middle value of an ordered data set." },
    { term: "Mode", definition: "The most frequent value in a data set." },
    { term: "Frequency Table", definition: "A table showing how often each value occurs." },
    { term: "Outlier", definition: "A value that is much higher or lower than the others." },
    { term: "Skewed", definition: "When data is not symmetrical." },
    { term: "Grouped Data", definition: "Data organized into class intervals." }
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
      question: "What is the mean of 10, 20, 30, 40?",
      type: "multiple_choice",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "Sum = 100, n = 4, Mean = 100/4 = 25"
    },
    {
      id: "prac_002",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the median of 1, 3, 5, 7, 9?",
      type: "multiple_choice",
      options: ["3", "5", "6", "7"],
      answer: "5",
      explanation: "Ordered: 1, 3, 5, 7, 9 → Median = 5 (middle value)"
    },
    {
      id: "prac_003",
      objective: "obj_004",
      difficulty: "easy",
      question: "What is the mode of 2, 4, 4, 6, 8, 8, 8?",
      type: "multiple_choice",
      options: ["4", "6", "8", "No mode"],
      answer: "8",
      explanation: "8 appears most frequently (3 times)"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the mean of 5, 10, 15, 20, 25?",
      type: "multiple_choice",
      options: ["10", "12", "15", "20"],
      answer: "15",
      explanation: "Sum = 75, n = 5, Mean = 75/5 = 15"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the median of 2, 4, 6, 8, 10, 12?",
      type: "multiple_choice",
      options: ["6", "7", "8", "9"],
      answer: "7",
      explanation: "Middle two: 6 and 8, Median = (6+8)/2 = 7"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which measure is best for data with outliers?",
      type: "multiple_choice",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: "Median",
      explanation: "Median is not affected by outliers."
    },
    {
      id: "prac_007",
      objective: "obj_006",
      difficulty: "medium",
      question: "Mean from frequency table: x=2(f=3), x=4(f=2), x=6(f=1)",
      type: "multiple_choice",
      options: ["2.5", "3.0", "3.5", "4.0"],
      answer: "3.5",
      explanation: "Total fx = 6 + 8 + 6 = 20, Total f = 6, Mean = 20/6 = 3.33"
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the mode of 3, 3, 5, 5, 5, 7, 7, 9?",
      type: "multiple_choice",
      options: ["3", "5", "7", "No mode"],
      answer: "5",
      explanation: "5 appears most frequently (3 times)"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "For categorical data like 'favorite color', which measure is best?",
      type: "multiple_choice",
      options: ["Mean", "Median", "Mode", "All are equally good"],
      answer: "Mode",
      explanation: "Mode is the only measure for categorical data."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Mean from frequency table: x=1(f=4), x=2(f=3), x=3(f=2), x=4(f=1)",
      type: "multiple_choice",
      options: ["2.0", "2.1", "2.2", "2.3"],
      answer: "2.1",
      explanation: "Total fx = 4 + 6 + 6 + 4 = 20, Total f = 10, Mean = 2.0"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Grouped data mean: Class 0-10(f=2), 10-20(f=4), 20-30(f=4)",
      type: "multiple_choice",
      options: ["14", "15", "16", "17"],
      answer: "15",
      explanation: "Midpoints: 5×2=10, 15×4=60, 25×4=100. Total=170, f=10, Mean=17"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "If mean > median, what type of skew is present?",
      type: "multiple_choice",
      options: ["Left-skewed", "Right-skewed", "Symmetrical", "No skew"],
      answer: "Right-skewed",
      explanation: "Mean > Median indicates right-skewed data."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Incomes: $30k, $35k, $40k, $45k, $200k. Which measure best represents typical income?",
      type: "multiple_choice",
      options: ["Mean ($70k)", "Median ($40k)", "Mode (none)", "Range"],
      answer: "Median ($40k)",
      explanation: "Median is not affected by the outlier ($200k)."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Test scores: 70, 75, 80, 85, 90. What is the mean?",
      type: "multiple_choice",
      options: ["75", "80", "85", "90"],
      answer: "80",
      explanation: "Sum = 400, n = 5, Mean = 80"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "Grouped data: Class 10-19(f=3), 20-29(f=7), 30-39(f=5). Find the mean.",
      type: "multiple_choice",
      options: ["24.5", "25.0", "25.5", "26.0"],
      answer: "25.0",
      explanation: "Midpoints: 14.5×3=43.5, 24.5×7=171.5, 34.5×5=172.5. Total=387.5, f=15, Mean=25.83"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_central_tendency",
    title: "Measures of Central Tendency Quiz",
    description: "Test your understanding of mean, median, and mode",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the mean of 6, 8, 10, 12, 14?",
        type: "short_answer",
        answer_key: "10",
        explanation: "Sum = 50, n = 5, Mean = 10"
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the median of 3, 5, 7, 9, 11?",
        type: "short_answer",
        answer_key: "7",
        explanation: "Middle value is 7."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "easy",
        question: "What is the mode of 1, 2, 2, 3, 3, 3, 4?",
        type: "short_answer",
        answer_key: "3",
        explanation: "3 appears most frequently."
      },
      {
        id: "ass_004",
        objective: "obj_002",
        difficulty: "easy",
        question: "Mean of 10, 20, 30, 40, 50?",
        type: "short_answer",
        answer_key: "30",
        explanation: "Sum = 150, n = 5, Mean = 30"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Which measure is best for skewed data?",
        type: "short_answer",
        answer_key: "Median",
        explanation: "Median is not affected by outliers."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Frequency table: x=5(f=2), x=8(f=3), x=10(f=1). Find the mean.",
        type: "short_answer",
        answer_key: "7.83",
        explanation: "Total fx = 10 + 24 + 10 = 44, f = 6, Mean = 7.33"
      },
      {
        id: "ass_007",
        objective: "obj_004",
        difficulty: "medium",
        question: "Mode of 4, 4, 4, 5, 5, 6, 6, 6?",
        type: "short_answer",
        answer_key: "4 and 6",
        explanation: "Both 4 and 6 appear 3 times → bimodal."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Grouped data: Class 0-9(f=2), 10-19(f=3), 20-29(f=5). Find mean.",
        type: "short_answer",
        answer_key: "18.0",
        explanation: "Midpoints: 4.5×2=9, 14.5×3=43.5, 24.5×5=122.5. Total=175, f=10, Mean=17.5"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "If median > mean, what type of skew?",
        type: "short_answer",
        answer_key: "Left-skewed",
        explanation: "Median > Mean indicates left-skewed data."
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Scores: 50, 60, 70, 80, 90. What is the mean?",
        type: "short_answer",
        answer_key: "70",
        explanation: "Sum = 350, n = 5, Mean = 70"
      }
    ]
  }
};