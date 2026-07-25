// Location: src/data/lessons/core/mathematics/number_system/ratios.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_ratios",
  subject: "Mathematics",
  topic: "Number System",
  name: "Ratios",
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
      description: "Define a ratio and write it in simplest form",
      indicator: "Student can explain what a ratio is and simplify ratios"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Share quantities in a given ratio",
      indicator: "Student can divide a quantity according to a ratio"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Find the ratio between two quantities",
      indicator: "Student can express the relationship between two quantities as a ratio"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve problems involving proportional division",
      indicator: "Student can solve ratio word problems"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Convert ratios to fractions and percentages",
      indicator: "Student can express ratios as fractions and percentages"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Solve problems with ratios and proportions",
      indicator: "Student can use ratios to find unknown quantities"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex ratio problems involving multiple ratios",
      indicator: "Student can solve problems with more than one ratio"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply ratios to real-world problems",
      indicator: "Student can solve practical ratio problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve mixture problems using ratios",
      indicator: "Student can solve mixture and proportion problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Ratios - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering ratios, proportions, and their applications."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Ratios?</h2>
      <p>A <strong>ratio</strong> compares two or more quantities.</p>
      <p>Ratios show the relative sizes of two or more values.</p>
      <p>Example: 3:2 means for every 3 of one thing, there are 2 of another.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Simplifying Ratios",
        objective: "obj_001",
        text: `
          <h3>Method</h3>
          <p>Divide all parts of the ratio by their <strong>highest common factor (HCF)</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Simplify 6:4
            <ul>
              <li>HCF of 6 and 4 = 2</li>
              <li>6:4 = 3:2</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Simplify 12:18
            <ul>
              <li>HCF of 12 and 18 = 6</li>
              <li>12:18 = 2:3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Sharing in a Ratio",
        objective: "obj_002",
        text: `
          <h3>Steps</h3>
          <ol>
            <li>Find the total number of parts</li>
            <li>Find the value of one part</li>
            <li>Multiply to find each share</li>
          </ol>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Share $100 in the ratio 2:3
            <ul>
              <li>Total parts = 2 + 3 = 5</li>
              <li>One part = 100/5 = 20</li>
              <li>Share 1 = 2 × 20 = $40</li>
              <li>Share 2 = 3 × 20 = $60</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Finding Ratios",
        objective: "obj_003",
        text: `
          <h3>Method</h3>
          <p>Write the quantities in the same units, then simplify.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 10 apples and 15 oranges
            <ul>
              <li>Ratio apples:oranges = 10:15 = 2:3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Ratio to Fractions and Percentages",
        objective: "obj_005",
        text: `
          <h3>Converting</h3>
          <ul>
            <li>Ratio a:b → fraction = a/(a+b) and b/(a+b)</li>
            <li>Fraction × 100 = percentage</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Ratio 2:3
            <ul>
              <li>First part = 2/5 = 0.4 = 40%</li>
              <li>Second part = 3/5 = 0.6 = 60%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Proportional Division",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> 300 students in ratio 2:3:5
            <ul>
              <li>Total parts = 2+3+5 = 10</li>
              <li>One part = 300/10 = 30</li>
              <li>Group 1 = 2×30 = 60</li>
              <li>Group 2 = 3×30 = 90</li>
              <li>Group 3 = 5×30 = 150</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Finding Unknown Quantities",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Ratio of boys to girls is 3:2. If there are 120 boys, how many girls?
            <ul>
              <li>3:2 = 120:g</li>
              <li>3g = 240</li>
              <li>g = 80</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Multiple Ratios",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> a:b = 2:3 and b:c = 4:5. Find a:b:c.
            <ul>
              <li>a:b = 2:3 = 8:12 (multiply by 4)</li>
              <li>b:c = 4:5 = 12:15 (multiply by 3)</li>
              <li>a:b:c = 8:12:15</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Real-World Applications",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A recipe calls for flour and sugar in ratio 3:1. If using 6 cups of flour, how much sugar?
            <ul>
              <li>3:1 = 6:s</li>
              <li>3s = 6</li>
              <li>s = 2 cups</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Mixture Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Paint mixture uses red:blue in ratio 2:5. How much red is needed for 21 liters?
            <ul>
              <li>Total parts = 2+5 = 7</li>
              <li>Red = 2/7 × 21 = 6 liters</li>
              <li>Blue = 5/7 × 21 = 15 liters</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Ratio compares two or more quantities</li>
        <li>Simplify ratios by dividing by HCF</li>
        <li>Share quantities by finding one part</li>
        <li>Convert ratios to fractions and percentages</li>
        <li>Use ratios to find unknown quantities</li>
        <li>Multiple ratios can be combined</li>
        <li>Ratios are used in real-world applications</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Ratio", definition: "A comparison of two or more quantities." },
    { term: "Part", definition: "One portion of a ratio." },
    { term: "Proportion", definition: "An equation stating two ratios are equal." },
    { term: "HCF", definition: "Highest Common Factor." },
    { term: "Simplify", definition: "Reduce a ratio to its simplest form." },
    { term: "Share", definition: "Divide a quantity according to a ratio." }
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
      question: "Simplify 4:6",
      type: "multiple_choice",
      options: ["2:3", "2:3", "2:4", "3:4"],
      answer: "2:3",
      explanation: "HCF of 4 and 6 is 2 → 2:3"
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "Simplify 8:12",
      type: "multiple_choice",
      options: ["2:3", "2:3", "4:6", "3:4"],
      answer: "2:3",
      explanation: "HCF of 8 and 12 is 4 → 2:3"
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "Share 50 in ratio 2:3. How much is each part?",
      type: "multiple_choice",
      options: ["20 and 30", "20 and 30", "25 and 25", "10 and 40"],
      answer: "20 and 30",
      explanation: "Total parts = 5, one part = 10 → 20 and 30"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Share 100 in ratio 1:4. How much is each part?",
      type: "multiple_choice",
      options: ["20 and 80", "20 and 80", "25 and 75", "30 and 70"],
      answer: "20 and 80",
      explanation: "Total parts = 5, one part = 20 → 20 and 80"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "12 apples and 18 oranges. Ratio apples:oranges?",
      type: "multiple_choice",
      options: ["2:3", "2:3", "3:2", "4:6"],
      answer: "2:3",
      explanation: "12:18 = 2:3"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "300 students in ratio 2:3:5. Largest group?",
      type: "multiple_choice",
      options: ["150", "150", "100", "120"],
      answer: "150",
      explanation: "5 × 30 = 150"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Ratio 1:3. First part as percentage?",
      type: "multiple_choice",
      options: ["25%", "25%", "33%", "50%"],
      answer: "25%",
      explanation: "1/4 × 100 = 25%"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Boys:Girls = 3:2. 120 boys, how many girls?",
      type: "multiple_choice",
      options: ["60", "80", "80", "90"],
      answer: "80",
      explanation: "3:2 = 120:g → g = 80"
    },
    {
      id: "prac_009",
      objective: "obj_004",
      difficulty: "medium",
      question: "Ratio 2:3:4, total = 180. Largest share?",
      type: "multiple_choice",
      options: ["80", "80", "60", "100"],
      answer: "80",
      explanation: "4 × 20 = 80"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Ratio 3:5 = 45:x. Find x.",
      type: "multiple_choice",
      options: ["45", "60", "75", "90"],
      answer: "75",
      explanation: "3x = 225 → x = 75"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "a:b = 2:3, b:c = 4:5. Find a:b:c.",
      type: "multiple_choice",
      options: ["8:12:15", "8:12:15", "6:9:10", "10:12:15"],
      answer: "8:12:15",
      explanation: "2:3 = 8:12, 4:5 = 12:15 → 8:12:15"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Recipe flour:sugar = 3:1. 6 cups flour, how much sugar?",
      type: "multiple_choice",
      options: ["1 cup", "2 cups", "2 cups", "3 cups"],
      answer: "2 cups",
      explanation: "3:1 = 6:s → s = 2"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Paint red:blue = 2:5. 21 liters total. Red = ?",
      type: "multiple_choice",
      options: ["4L", "6L", "6L", "8L"],
      answer: "6L",
      explanation: "2/7 × 21 = 6L"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "a:b = 3:4, b:c = 2:5. Find a:b:c.",
      type: "multiple_choice",
      options: ["3:4:10", "3:4:10", "6:8:20", "3:2:5"],
      answer: "3:4:10",
      explanation: "3:4 = 3:4, 2:5 = 4:10 → 3:4:10"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Flour:sugar:butter = 5:2:1. 400g total. Butter = ?",
      type: "multiple_choice",
      options: ["50g", "100g", "200g", "250g"],
      answer: "50g",
      explanation: "1/8 × 400 = 50g"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_ratios",
    title: "Ratios Quiz",
    description: "Test your understanding of ratios",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Simplify 6:9",
        type: "short_answer",
        answer_key: "2:3",
        explanation: "HCF of 6 and 9 is 3 → 2:3"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Share 60 in ratio 1:2",
        type: "short_answer",
        answer_key: "20 and 40",
        explanation: "Total parts = 3, one part = 20 → 20 and 40"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "15 boys and 10 girls. Ratio boys:girls?",
        type: "short_answer",
        answer_key: "3:2",
        explanation: "15:10 = 3:2"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "Ratio 2:5. First part as percentage?",
        type: "short_answer",
        answer_key: "28.57%",
        explanation: "2/7 × 100 = 28.57%"
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "Ratio 4:5 = 20:x. Find x.",
        type: "short_answer",
        answer_key: "25",
        explanation: "4x = 100 → x = 25"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "240 students in ratio 1:2:3. Largest group?",
        type: "short_answer",
        answer_key: "120",
        explanation: "3 × 40 = 120"
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "a:b = 2:5, b:c = 3:4. Find a:b:c.",
        type: "short_answer",
        answer_key: "6:15:20",
        explanation: "2:5 = 6:15, 3:4 = 15:20 → 6:15:20"
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Recipe flour:sugar = 4:1. 8 cups flour, sugar?",
        type: "short_answer",
        answer_key: "2 cups",
        explanation: "4:1 = 8:s → s = 2"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Paint red:blue = 3:7. 50L total. Blue?",
        type: "short_answer",
        answer_key: "35L",
        explanation: "7/10 × 50 = 35L"
      },
      {
        id: "ass_010",
        objective: "obj_007",
        difficulty: "hard",
        question: "a:b = 1:3, b:c = 2:5. Find a:b:c.",
        type: "short_answer",
        answer_key: "2:6:15",
        explanation: "1:3 = 2:6, 2:5 = 6:15 → 2:6:15"
      }
    ]
  }
};