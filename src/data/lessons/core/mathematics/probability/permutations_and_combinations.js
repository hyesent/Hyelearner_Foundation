// Location: src/data/lessons/core/mathematics/probability/permutations_and_combinations.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_permutations_combinations",
  subject: "Mathematics",
  topic: "Probability",
  name: "Permutations and Combinations",
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
      description: "Define permutations and combinations and distinguish between them",
      indicator: "Student can explain the difference between permutations (order matters) and combinations (order doesn't matter)"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate permutations using the fundamental counting principle",
      indicator: "Student can use multiplication to count arrangements"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify when to use permutations vs combinations",
      indicator: "Student can determine which concept applies to a given problem"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate permutations using the formula nPr",
      indicator: "Student can use nPr = n!/(n-r)!"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate combinations using the formula nCr",
      indicator: "Student can use nCr = n!/[r!(n-r)!]"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply permutations and combinations to real-world problems",
      indicator: "Student can solve practical counting problems"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex permutation problems with restrictions",
      indicator: "Student can handle problems with conditions or constraints"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Solve complex combination problems with restrictions",
      indicator: "Student can handle problems with conditions or constraints"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply combinations to probability problems",
      indicator: "Student can use combinations to calculate probabilities"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Permutations and Combinations - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering permutations, combinations, and factorial notation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Permutations and Combinations?</h2>
      <p><strong>Permutations:</strong> Arrangements where <strong>order matters</strong>.</p>
      <p><strong>Combinations:</strong> Selections where <strong>order does NOT matter</strong>.</p>
      <p>Both use <strong>factorials</strong> (!) in their calculations.</p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "The Fundamental Counting Principle",
        objective: "obj_002",
        text: `
          <h3>Key Idea</h3>
          <p>If there are <strong>m</strong> ways to do one thing and <strong>n</strong> ways to do another, there are <strong>m × n</strong> ways to do both.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Choosing a meal: 3 starters × 4 mains × 2 desserts
            <ul>
              <li>Total combinations = 3 × 4 × 2 = 24</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Factorial Notation",
        objective: "obj_004",
        text: `
          <h3>Factorials</h3>
          <p><strong>n! = n × (n-1) × (n-2) × ... × 1</strong></p>
          <ul>
            <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
            <li>3! = 3 × 2 × 1 = 6</li>
            <li>0! = 1</li>
            <li>1! = 1</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 6! = 720
            <ul>
              <li>6 × 5 × 4 × 3 × 2 × 1 = 720</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Permutations - Order Matters",
        objective: "obj_001",
        text: `
          <h3>Permutations</h3>
          <p><strong>nPr = n! / (n-r)!</strong></p>
          <p>Where n = total items, r = items being arranged.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> How many ways to arrange 3 books on a shelf from 5?
            <ul>
              <li>5P3 = 5! / (5-3)! = 5! / 2! = 120 / 2 = 60</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> How many ways to arrange 4 people in a line from 6?
            <ul>
              <li>6P4 = 6! / (6-4)! = 6! / 2! = 720 / 2 = 360</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Combinations - Order Doesn't Matter",
        objective: "obj_001",
        text: `
          <h3>Combinations</h3>
          <p><strong>nCr = n! / [r! (n-r)!]</strong></p>
          <p>Where n = total items, r = items being selected.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> How many ways to choose 3 books from 5?
            <ul>
              <li>5C3 = 5! / [3! (5-3)!] = 5! / (3! × 2!) = 120 / (6 × 2) = 120 / 12 = 10</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> How many ways to choose 2 people from 6?
            <ul>
              <li>6C2 = 6! / [2! (6-2)!] = 6! / (2! × 4!) = 720 / (2 × 24) = 720 / 48 = 15</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Permutations vs Combinations",
        objective: "obj_003",
        text: `
          <h3>When to Use Each</h3>
          <ul>
            <li><strong>Permutations:</strong> Order matters (arrangements, seating, ranking)</li>
            <li><strong>Combinations:</strong> Order doesn't matter (choosing a team, selecting items)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Choosing a president, vice-president, secretary from 10 people
            <ul>
              <li>Order matters → Permutations: 10P3 = 10! / 7! = 720</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Choosing a committee of 3 from 10 people
            <ul>
              <li>Order doesn't matter → Combinations: 10C3 = 10! / (3! × 7!) = 120</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Permutations with Restrictions",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> How many ways to arrange 5 people if two specific people must sit together?
            <ul>
              <li>Treat the two people as one unit: 4! = 24</li>
              <li>The two people can be arranged internally: 2! = 2</li>
              <li>Total = 4! × 2! = 24 × 2 = 48</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Combinations with Restrictions",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Choosing 3 people from a group of 6, but one specific person must be included.
            <ul>
              <li>Include that person: Choose 2 from remaining 5</li>
              <li>5C2 = 5! / (2! × 3!) = 10</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Probability Using Combinations",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A bag has 4 red and 3 blue marbles. What is the probability of choosing 2 red marbles?
            <ul>
              <li>Total ways to choose 2 from 7: 7C2 = 21</li>
              <li>Favorable ways (2 red from 4): 4C2 = 6</li>
              <li>P(2 red) = 6/21 = 2/7</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A committee of 4 is to be chosen from 5 men and 4 women. How many ways if at least 2 women must be included?
            <ul>
              <li>Case 1: 2 women, 2 men: 4C2 × 5C2 = 6 × 10 = 60</li>
              <li>Case 2: 3 women, 1 man: 4C3 × 5C1 = 4 × 5 = 20</li>
              <li>Case 3: 4 women, 0 men: 4C4 × 5C0 = 1 × 1 = 1</li>
              <li>Total = 60 + 20 + 1 = 81</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Permutations: Order matters → nPr = n!/(n-r)!</li>
        <li>Combinations: Order doesn't matter → nCr = n!/[r!(n-r)!]</li>
        <li>0! = 1, 1! = 1</li>
        <li>Use permutations for arrangements, seating, ranking</li>
        <li>Use combinations for selections, teams, committees</li>
        <li>Apply to probability problems by counting favorable outcomes</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Permutation", definition: "An arrangement where order matters." },
    { term: "Combination", definition: "A selection where order doesn't matter." },
    { term: "Factorial", definition: "n! = n × (n-1) × ... × 1." },
    { term: "Fundamental Counting Principle", definition: "m × n ways to do two things." },
    { term: "nPr", definition: "Number of permutations of r items from n." },
    { term: "nCr", definition: "Number of combinations of r items from n." }
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
      question: "Which involves order mattering?",
      type: "multiple_choice",
      options: ["Permutations", "Combinations", "Both", "Neither"],
      answer: "Permutations",
      explanation: "Permutations are arrangements where order matters."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "Which involves order NOT mattering?",
      type: "multiple_choice",
      options: ["Permutations", "Combinations", "Both", "Neither"],
      answer: "Combinations",
      explanation: "Combinations are selections where order doesn't matter."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "3 starters × 4 mains × 2 desserts = ?",
      type: "multiple_choice",
      options: ["9", "12", "24", "48"],
      answer: "24",
      explanation: "3 × 4 × 2 = 24"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Choosing a president and vice-president from 5 people: Permutation or Combination?",
      type: "multiple_choice",
      options: ["Permutation", "Combination", "Both", "Neither"],
      answer: "Permutation",
      explanation: "Order matters (president vs vice-president)."
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is 4! ?",
      type: "multiple_choice",
      options: ["4", "12", "24", "120"],
      answer: "24",
      explanation: "4 × 3 × 2 × 1 = 24"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "5P3 = ?",
      type: "multiple_choice",
      options: ["20", "60", "120", "240"],
      answer: "60",
      explanation: "5!/(5-3)! = 120/2 = 60"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "5C3 = ?",
      type: "multiple_choice",
      options: ["5", "10", "15", "20"],
      answer: "10",
      explanation: "5!/[3!(2!)] = 120/(6×2) = 10"
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "How many ways to arrange 4 books from 6?",
      type: "multiple_choice",
      options: ["120", "240", "360", "720"],
      answer: "360",
      explanation: "6P4 = 6!/2! = 720/2 = 360"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "How many ways to choose 2 people from 5?",
      type: "multiple_choice",
      options: ["5", "10", "15", "20"],
      answer: "10",
      explanation: "5C2 = 5!/[2!×3!] = 120/(2×6) = 10"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Choosing a committee of 3 from 8: Permutation or Combination?",
      type: "multiple_choice",
      options: ["Permutation", "Combination"],
      answer: "Combination",
      explanation: "Order doesn't matter for committee members."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Arrange 5 people with 2 specific people together: ?",
      type: "multiple_choice",
      options: ["24", "48", "120", "240"],
      answer: "48",
      explanation: "4! × 2! = 24 × 2 = 48"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Choose 3 from 7 with one specific person included: ?",
      type: "multiple_choice",
      options: ["15", "20", "30", "35"],
      answer: "15",
      explanation: "6C2 = 15"
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Bag: 5 red, 3 blue. P(2 red) when choosing 2?",
      type: "multiple_choice",
      options: ["5/14", "10/28", "15/28", "5/28"],
      answer: "10/28 = 5/14",
      explanation: "5C2 / 8C2 = 10/28 = 5/14"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "Arrange 6 people with 3 specific people together: ?",
      type: "multiple_choice",
      options: ["36", "72", "144", "288"],
      answer: "144",
      explanation: "4! × 3! = 24 × 6 = 144"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Committee of 3 from 6 men, 4 women with at least 1 woman: ?",
      type: "multiple_choice",
      options: ["80", "100", "120", "140"],
      answer: "100",
      explanation: "Total 10C3 = 120. All men: 6C3 = 20. At least 1 woman = 120 - 20 = 100"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_permutations_combinations",
    title: "Permutations and Combinations Quiz",
    description: "Test your understanding of permutations and combinations",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "Which involves order mattering?",
        type: "short_answer",
        answer_key: "Permutations",
        explanation: "Permutations = order matters."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "Which involves order not mattering?",
        type: "short_answer",
        answer_key: "Combinations",
        explanation: "Combinations = order doesn't matter."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is 5P2?",
        type: "short_answer",
        answer_key: "20",
        explanation: "5!/(5-2)! = 120/6 = 20"
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is 6C2?",
        type: "short_answer",
        answer_key: "15",
        explanation: "6!/[2!×4!] = 720/(2×24) = 15"
      },
      {
        id: "ass_005",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is 5! ?",
        type: "short_answer",
        answer_key: "120",
        explanation: "5×4×3×2×1 = 120"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "How many ways to arrange 3 books from 7?",
        type: "short_answer",
        answer_key: "210",
        explanation: "7P3 = 7!/4! = 5040/24 = 210"
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "How many ways to choose 2 from 8?",
        type: "short_answer",
        answer_key: "28",
        explanation: "8C2 = 8!/[2!×6!] = 40320/(2×720) = 28"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Arrange 4 people with 2 specific together: ?",
        type: "short_answer",
        answer_key: "12",
        explanation: "3! × 2! = 6 × 2 = 12"
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Choose 2 from 6 with one specific person included: ?",
        type: "short_answer",
        answer_key: "5",
        explanation: "5C1 = 5"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "Bag: 3 red, 2 blue. P(2 red) choosing 2?",
        type: "short_answer",
        answer_key: "3/10",
        explanation: "3C2 / 5C2 = 3/10"
      }
    ]
  }
};