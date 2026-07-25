// Location: src/data/lessons/core/mathematics/algebra/sequences_and_series.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_sequences_and_series",
  subject: "Mathematics",
  topic: "Algebra",
  name: "Sequences and Series",
  icon: "🔢",
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
      description: "Define a sequence and identify the pattern",
      indicator: "Student can explain what a sequence is and find the next term"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify arithmetic sequences and find the common difference",
      indicator: "Student can identify if a sequence is arithmetic and find d"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Find the nth term of an arithmetic sequence",
      indicator: "Student can use Tₙ = a + (n-1)d"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Find the sum of an arithmetic series",
      indicator: "Student can use Sₙ = n/2(a + l) or Sₙ = n/2(2a + (n-1)d)"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Identify geometric sequences and find the common ratio",
      indicator: "Student can identify if a sequence is geometric and find r"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Find the nth term of a geometric sequence",
      indicator: "Student can use Tₙ = arⁿ⁻¹"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Find the sum of a geometric series",
      indicator: "Student can use Sₙ = a(1-rⁿ)/(1-r)"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Find the sum to infinity of a geometric series (|r| < 1)",
      indicator: "Student can use S∞ = a/(1-r)"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply sequences and series to real-world problems",
      indicator: "Student can solve word problems involving sequences"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Sequences and Series - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering arithmetic and geometric sequences and series."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Sequences and Series?</h2>
      <p>A <strong>sequence</strong> is an ordered list of numbers following a pattern.</p>
      <p>A <strong>series</strong> is the sum of the terms of a sequence.</p>
      <p>Examples:</p>
      <ul>
        <li><strong>Sequence:</strong> 2, 4, 6, 8, 10, ...</li>
        <li><strong>Series:</strong> 2 + 4 + 6 + 8 + 10 + ...</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Understanding Sequences",
        objective: "obj_001",
        text: `
          <h3>Finding the Pattern</h3>
          <p>To find the next term, look for the pattern in the differences.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 3, 7, 11, 15, ...
            <ul>
              <li>Difference: +4, +4, +4</li>
              <li>Next term: 15 + 4 = 19</li>
              <li><strong>Answer:</strong> 19</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 1, 2, 4, 8, 16, ...
            <ul>
              <li>Pattern: ×2, ×2, ×2</li>
              <li>Next term: 16 × 2 = 32</li>
              <li><strong>Answer:</strong> 32</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 3:</strong> 1, 4, 9, 16, 25, ...
            <ul>
              <li>Pattern: squares: 1², 2², 3², 4², 5²</li>
              <li>Next term: 6² = 36</li>
              <li><strong>Answer:</strong> 36</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Arithmetic Sequences",
        objective: "obj_002",
        text: `
          <h3>Key Features</h3>
          <ul>
            <li>Each term is found by adding a <strong>common difference (d)</strong></li>
            <li><strong>d = T₂ - T₁ = T₃ - T₂ = ...</strong></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 5, 8, 11, 14, 17, ...
            <ul>
              <li>d = 8 - 5 = 3</li>
              <li>Next term: 17 + 3 = 20</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 20, 15, 10, 5, 0, ...
            <ul>
              <li>d = 15 - 20 = -5</li>
              <li>Next term: 0 + (-5) = -5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "nth Term of Arithmetic Sequence",
        objective: "obj_003",
        text: `
          <h3>Formula</h3>
          <p><strong>Tₙ = a + (n-1)d</strong></p>
          <ul>
            <li><strong>a</strong> = first term</li>
            <li><strong>d</strong> = common difference</li>
            <li><strong>n</strong> = term number</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Find the 10th term of 3, 7, 11, 15, ...
            <ul>
              <li>a = 3, d = 4</li>
              <li>T₁₀ = 3 + (10-1)4 = 3 + 36 = 39</li>
              <li><strong>Answer:</strong> 39</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Find the 15th term of 100, 95, 90, 85, ...
            <ul>
              <li>a = 100, d = -5</li>
              <li>T₁₅ = 100 + (15-1)(-5) = 100 - 70 = 30</li>
              <li><strong>Answer:</strong> 30</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Sum of Arithmetic Series",
        objective: "obj_004",
        text: `
          <h3>Sum of First n Terms</h3>
          <p><strong>Sₙ = n/2(a + l)</strong> where l = last term</p>
          <p>OR</p>
          <p><strong>Sₙ = n/2(2a + (n-1)d)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Find the sum of 2, 5, 8, 11, 14
            <ul>
              <li>a = 2, l = 14, n = 5</li>
              <li>S₅ = 5/2(2 + 14) = 5/2(16) = 5 × 8 = 40</li>
              <li><strong>Answer:</strong> 40</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Sum of first 20 terms: 3, 7, 11, 15, ...
            <ul>
              <li>a = 3, d = 4, n = 20</li>
              <li>S₂₀ = 20/2(2(3) + 19(4)) = 10(6 + 76) = 10(82) = 820</li>
              <li><strong>Answer:</strong> 820</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Geometric Sequences",
        objective: "obj_005",
        text: `
          <h3>Key Features</h3>
          <ul>
            <li>Each term is found by multiplying by a <strong>common ratio (r)</strong></li>
            <li><strong>r = T₂/T₁ = T₃/T₂ = ...</strong></li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2, 6, 18, 54, ...
            <ul>
              <li>r = 6/2 = 3</li>
              <li>Next term: 54 × 3 = 162</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 81, 27, 9, 3, ...
            <ul>
              <li>r = 27/81 = 1/3</li>
              <li>Next term: 3 × 1/3 = 1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "nth Term of Geometric Sequence",
        objective: "obj_006",
        text: `
          <h3>Formula</h3>
          <p><strong>Tₙ = arⁿ⁻¹</strong></p>
          <ul>
            <li><strong>a</strong> = first term</li>
            <li><strong>r</strong> = common ratio</li>
            <li><strong>n</strong> = term number</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Find the 6th term of 2, 6, 18, 54, ...
            <ul>
              <li>a = 2, r = 3</li>
              <li>T₆ = 2 × 3⁵ = 2 × 243 = 486</li>
              <li><strong>Answer:</strong> 486</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Find the 5th term of 81, 27, 9, 3, ...
            <ul>
              <li>a = 81, r = 1/3</li>
              <li>T₅ = 81 × (1/3)⁴ = 81 × 1/81 = 1</li>
              <li><strong>Answer:</strong> 1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Sum of Geometric Series",
        objective: "obj_007",
        text: `
          <h3>Sum of First n Terms</h3>
          <p><strong>Sₙ = a(1-rⁿ)/(1-r)</strong> for r ≠ 1</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Sum of 2, 6, 18, 54
            <ul>
              <li>a = 2, r = 3, n = 4</li>
              <li>S₄ = 2(1-3⁴)/(1-3) = 2(1-81)/(-2) = 2(-80)/(-2) = 80</li>
              <li><strong>Answer:</strong> 80</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Sum of 81, 27, 9, 3
            <ul>
              <li>a = 81, r = 1/3, n = 4</li>
              <li>S₄ = 81(1-(1/3)⁴)/(1-1/3) = 81(1-1/81)/(2/3) = 81(80/81)/(2/3) = 80 × 3/2 = 120</li>
              <li><strong>Answer:</strong> 120</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Sum to Infinity",
        objective: "obj_008",
        text: `
          <h3>Sum to Infinity (|r| < 1)</h3>
          <p><strong>S∞ = a/(1-r)</strong></p>
          <p>Only applies when -1 < r < 1</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find S∞ for 1, 1/2, 1/4, 1/8, ...
            <ul>
              <li>a = 1, r = 1/2</li>
              <li>S∞ = 1/(1-1/2) = 1/(1/2) = 2</li>
              <li><strong>Answer:</strong> 2</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Find S∞ for 3, 1, 1/3, 1/9, ...
            <ul>
              <li>a = 3, r = 1/3</li>
              <li>S∞ = 3/(1-1/3) = 3/(2/3) = 3 × 3/2 = 4.5</li>
              <li><strong>Answer:</strong> 4.5</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Applications of Sequences and Series",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> A job starts at $30,000 per year with a $2,000 annual raise. What is the salary in the 5th year?
            <ul>
              <li>Arithmetic: a = 30000, d = 2000</li>
              <li>T₅ = 30000 + (5-1)2000 = 30000 + 8000 = 38000</li>
              <li><strong>Answer:</strong> $38,000</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> A bacterial population doubles every hour. If it starts with 100 bacteria, how many after 6 hours?
            <ul>
              <li>Geometric: a = 100, r = 2</li>
              <li>T₇ = 100 × 2⁶ = 100 × 64 = 6400</li>
              <li><strong>Answer:</strong> 6,400 bacteria</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Arithmetic: constant difference (d), Tₙ = a + (n-1)d, Sₙ = n/2(2a + (n-1)d)</li>
        <li>Geometric: constant ratio (r), Tₙ = arⁿ⁻¹, Sₙ = a(1-rⁿ)/(1-r)</li>
        <li>Sum to infinity: S∞ = a/(1-r) for |r| < 1</li>
        <li>Sequences model real-world growth and patterns</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Sequence", definition: "An ordered list of numbers following a pattern." },
    { term: "Series", definition: "The sum of the terms of a sequence." },
    { term: "Arithmetic Sequence", definition: "A sequence with a constant difference (d)." },
    { term: "Geometric Sequence", definition: "A sequence with a constant ratio (r)." },
    { term: "Common Difference", definition: "d, the difference between consecutive terms." },
    { term: "Common Ratio", definition: "r, the ratio between consecutive terms." },
    { term: "Sum to Infinity", definition: "The sum of an infinite geometric series with |r| < 1." }
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
      question: "Find the next term: 5, 10, 15, 20, ...",
      type: "multiple_choice",
      options: ["22", "23", "24", "25"],
      answer: "25",
      explanation: "Pattern: +5, next term = 20 + 5 = 25"
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Find the common difference: 7, 11, 15, 19, ...",
      type: "multiple_choice",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation: "11 - 7 = 4"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find the 8th term: 2, 5, 8, 11, ...",
      type: "multiple_choice",
      options: ["20", "21", "22", "23"],
      answer: "23",
      explanation: "a = 2, d = 3, T₈ = 2 + 7(3) = 2 + 21 = 23"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Find the 10th term: 100, 95, 90, 85, ...",
      type: "multiple_choice",
      options: ["55", "60", "65", "70"],
      answer: "55",
      explanation: "a = 100, d = -5, T₁₀ = 100 + 9(-5) = 100 - 45 = 55"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Find the sum of 1, 3, 5, 7, 9",
      type: "multiple_choice",
      options: ["20", "25", "30", "35"],
      answer: "25",
      explanation: "S₅ = 5/2(1 + 9) = 5/2(10) = 25"
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Find the sum of the first 10 terms: 2, 5, 8, 11, ...",
      type: "multiple_choice",
      options: ["150", "155", "160", "165"],
      answer: "155",
      explanation: "S₁₀ = 10/2(2(2) + 9(3)) = 5(4 + 27) = 5(31) = 155"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Find the common ratio: 3, 6, 12, 24, ...",
      type: "multiple_choice",
      options: ["2", "3", "4", "1/2"],
      answer: "2",
      explanation: "6/3 = 2"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Find the 6th term: 2, 6, 18, 54, ...",
      type: "multiple_choice",
      options: ["162", "324", "486", "972"],
      answer: "486",
      explanation: "a = 2, r = 3, T₆ = 2 × 3⁵ = 2 × 243 = 486"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Find the 5th term: 81, 27, 9, 3, ...",
      type: "multiple_choice",
      options: ["1/3", "1", "3", "9"],
      answer: "1",
      explanation: "a = 81, r = 1/3, T₅ = 81 × (1/3)⁴ = 81 × 1/81 = 1"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Find the sum of 2, 6, 18, 54, 162",
      type: "multiple_choice",
      options: ["240", "242", "244", "246"],
      answer: "242",
      explanation: "S₅ = 2(1-3⁵)/(1-3) = 2(1-243)/(-2) = 242"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find S∞: 1, 1/2, 1/4, 1/8, ...",
      type: "multiple_choice",
      options: ["1", "1.5", "2", "2.5"],
      answer: "2",
      explanation: "S∞ = 1/(1-1/2) = 1/(1/2) = 2"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Find S∞: 4, 2, 1, 1/2, 1/4, ...",
      type: "multiple_choice",
      options: ["6", "7", "8", "9"],
      answer: "8",
      explanation: "S∞ = 4/(1-1/2) = 4/(1/2) = 8"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "A job starts at $40,000 with a $3,000 raise each year. What is the total earned over 5 years?",
      type: "multiple_choice",
      options: ["$210,000", "$215,000", "$220,000", "$225,000"],
      answer: "$220,000",
      explanation: "S₅ = 5/2(2(40000) + 4(3000)) = 5/2(80000 + 12000) = 2.5(92000) = 230,000"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "A ball drops from 10m and bounces back to 2/3 of its height each time. What is the total distance traveled before coming to rest?",
      type: "multiple_choice",
      options: ["30m", "40m", "50m", "60m"],
      answer: "50m",
      explanation: "Distance = 10 + 2(10 × 2/3)/(1-2/3) = 10 + 2(20/3)/(1/3) = 10 + 40 = 50m"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_sequences_and_series",
    title: "Sequences and Series Quiz",
    description: "Test your understanding of sequences and series",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Find the next term: 3, 6, 9, 12, ...",
        type: "short_answer",
        answer_key: "15",
        explanation: "+3 pattern, next = 12 + 3 = 15"
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Find the common difference: 8, 13, 18, 23, ...",
        type: "short_answer",
        answer_key: "5",
        explanation: "13 - 8 = 5"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Find the 10th term: 4, 7, 10, 13, ...",
        type: "short_answer",
        answer_key: "31",
        explanation: "a = 4, d = 3, T₁₀ = 4 + 9(3) = 4 + 27 = 31"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Find the sum of 1, 4, 7, 10, 13",
        type: "short_answer",
        answer_key: "35",
        explanation: "S₅ = 5/2(1 + 13) = 5/2(14) = 35"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Sum of first 15 terms: 2, 6, 10, 14, ...",
        type: "short_answer",
        answer_key: "450",
        explanation: "S₁₅ = 15/2(2(2) + 14(4)) = 7.5(4 + 56) = 7.5(60) = 450"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Find the common ratio: 5, 15, 45, 135, ...",
        type: "short_answer",
        answer_key: "3",
        explanation: "15/5 = 3"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Find the 7th term: 3, 6, 12, 24, ...",
        type: "short_answer",
        answer_key: "192",
        explanation: "a = 3, r = 2, T₇ = 3 × 2⁶ = 3 × 64 = 192"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Find the sum of 3, 9, 27, 81, 243",
        type: "short_answer",
        answer_key: "363",
        explanation: "S₅ = 3(1-3⁵)/(1-3) = 3(1-243)/(-2) = 3(-242)/(-2) = 363"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Find S∞: 2, 1, 1/2, 1/4, ...",
        type: "short_answer",
        answer_key: "4",
        explanation: "S∞ = 2/(1-1/2) = 2/(1/2) = 4"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "A plant grows 10cm in the first year and doubles each year. How tall after 4 years?",
        type: "short_answer",
        answer_key: "80cm",
        explanation: "a = 10, r = 2, T₄ = 10 × 2³ = 10 × 8 = 80"
      }
    ]
  }
};