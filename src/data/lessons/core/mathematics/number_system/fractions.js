// Location: src/data/lessons/core/mathematics/number_system/fractions.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_fractions",
  subject: "Mathematics",
  topic: "Number System",
  name: "Fractions",
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
      description: "Define fractions and identify numerator and denominator",
      indicator: "Student can explain what a fraction is and identify its parts"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify proper, improper, and mixed fractions",
      indicator: "Student can distinguish between different types of fractions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Simplify fractions to their lowest terms",
      indicator: "Student can find the simplest form of a fraction"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Add and subtract fractions with like and unlike denominators",
      indicator: "Student can add and subtract fractions"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Multiply and divide fractions",
      indicator: "Student can multiply and divide fractions"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Convert between improper fractions and mixed numbers",
      indicator: "Student can convert between forms"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex fraction problems involving multiple operations",
      indicator: "Student can solve multi-step fraction problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Apply fractions to real-world problems",
      indicator: "Student can solve practical fraction problems"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve algebraic problems involving fractions",
      indicator: "Student can solve equations with fractions"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Fractions - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering fraction operations, simplification, and applications."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Fractions?</h2>
      <p>A <strong>fraction</strong> represents a part of a whole.</p>
      <p>A fraction is written as: <strong>a/b</strong> where:</p>
      <ul>
        <li><strong>a</strong> = numerator (top) - the number of parts</li>
        <li><strong>b</strong> = denominator (bottom) - the total number of parts</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Fraction",
        objective: "obj_001",
        text: `
          <h3>Understanding Fractions</h3>
          <p><strong>3/4</strong> means 3 parts out of 4 total parts.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A pizza cut into 8 slices.
            <ul>
              <li>If you eat 3 slices: fraction eaten = 3/8</li>
              <li>Numerator = 3 (slices eaten)</li>
              <li>Denominator = 8 (total slices)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Fractions",
        objective: "obj_002",
        text: `
          <h3>Types</h3>
          <ul>
            <li><strong>Proper Fraction:</strong> Numerator < Denominator (e.g., 3/4)</li>
            <li><strong>Improper Fraction:</strong> Numerator ≥ Denominator (e.g., 5/3)</li>
            <li><strong>Mixed Number:</strong> Whole number + proper fraction (e.g., 1⅔)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>Proper: 2/5, 7/8, 3/10</li>
              <li>Improper: 7/4, 9/2, 6/3</li>
              <li>Mixed: 2⅓, 3⅔, 1⅘</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Simplifying Fractions",
        objective: "obj_003",
        text: `
          <h3>Finding the Simplest Form</h3>
          <p>Divide numerator and denominator by their <strong>highest common factor (HCF)</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Simplify 6/8
            <ul>
              <li>HCF of 6 and 8 = 2</li>
              <li>6/8 = 6÷2/8÷2 = 3/4</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Simplify 12/18
            <ul>
              <li>HCF of 12 and 18 = 6</li>
              <li>12/18 = 12÷6/18÷6 = 2/3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Adding and Subtracting Fractions",
        objective: "obj_004",
        text: `
          <h3>With Like Denominators</h3>
          <p>Add the numerators, keep the denominator.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 3/8 + 2/8
            <ul>
              <li>= (3+2)/8 = 5/8</li>
            </ul>
          </div>
          
          <h3>With Unlike Denominators</h3>
          <p>Find the <strong>lowest common denominator (LCD)</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2/3 + 1/4
            <ul>
              <li>LCD of 3 and 4 = 12</li>
              <li>2/3 = 8/12, 1/4 = 3/12</li>
              <li>8/12 + 3/12 = 11/12</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Multiplying Fractions",
        objective: "obj_005",
        text: `
          <h3>Rules</h3>
          <p>Multiply the numerators, multiply the denominators.</p>
          <p><strong>a/b × c/d = (a×c)/(b×d)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> 2/3 × 3/4
            <ul>
              <li>= (2×3)/(3×4) = 6/12 = 1/2</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> 3/5 × 5/6
            <ul>
              <li>= (3×5)/(5×6) = 15/30 = 1/2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Dividing Fractions",
        objective: "obj_005",
        text: `
          <h3>Rules</h3>
          <p>Invert the second fraction (find its reciprocal) and multiply.</p>
          <p><strong>a/b ÷ c/d = a/b × d/c</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2/3 ÷ 3/4
            <ul>
              <li>= 2/3 × 4/3 = (2×4)/(3×3) = 8/9</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Converting Improper Fractions",
        objective: "obj_006",
        text: `
          <h3>Improper to Mixed</h3>
          <p>Divide numerator by denominator.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 17/5
            <ul>
              <li>17 ÷ 5 = 3 remainder 2</li>
              <li>= 3⅖</li>
            </ul>
          </div>
          
          <h3>Mixed to Improper</h3>
          <p>Multiply whole number by denominator and add numerator.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 2⅓
            <ul>
              <li>2 × 3 + 1 = 7</li>
              <li>= 7/3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Fraction Problems",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> 2/3 + 3/4 - 1/2
            <ul>
              <li>LCD = 12</li>
              <li>2/3 = 8/12, 3/4 = 9/12, 1/2 = 6/12</li>
              <li>8/12 + 9/12 - 6/12 = 11/12</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Real-World Applications",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A cake recipe uses 2/3 cup of sugar and 1/4 cup of butter. How much total?
            <ul>
              <li>2/3 + 1/4 = 8/12 + 3/12 = 11/12 cup</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Fraction = part/whole (numerator/denominator)</li>
        <li>Proper: numerator < denominator</li>
        <li>Improper: numerator ≥ denominator</li>
        <li>Simplify by dividing by HCF</li>
        <li>Add/subtract: find common denominator</li>
        <li>Multiply: multiply numerators and denominators</li>
        <li>Divide: invert and multiply</li>
        <li>Convert between improper and mixed forms</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Fraction", definition: "A number representing part of a whole." },
    { term: "Numerator", definition: "The top number of a fraction." },
    { term: "Denominator", definition: "The bottom number of a fraction." },
    { term: "Proper Fraction", definition: "Numerator < Denominator." },
    { term: "Improper Fraction", definition: "Numerator ≥ Denominator." },
    { term: "Mixed Number", definition: "A whole number and a proper fraction." },
    { term: "HCF", definition: "Highest Common Factor." },
    { term: "LCD", definition: "Lowest Common Denominator." }
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
      question: "In 3/5, what is the numerator?",
      type: "multiple_choice",
      options: ["3", "5", "8", "15"],
      answer: "3",
      explanation: "The numerator is the top number."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of fraction is 5/8?",
      type: "multiple_choice",
      options: ["Proper", "Improper", "Mixed", "Equal"],
      answer: "Proper",
      explanation: "5 < 8, so it's a proper fraction."
    },
    {
      id: "prac_003",
      objective: "obj_002",
      difficulty: "easy",
      question: "What type of fraction is 7/4?",
      type: "multiple_choice",
      options: ["Proper", "Improper", "Mixed", "Equal"],
      answer: "Improper",
      explanation: "7 > 4, so it's an improper fraction."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Simplify 8/12",
      type: "multiple_choice",
      options: ["2/3", "4/6", "1/2", "3/4"],
      answer: "2/3",
      explanation: "HCF of 8 and 12 is 4 → 8÷4/12÷4 = 2/3"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "Simplify 6/9",
      type: "multiple_choice",
      options: ["2/3", "1/2", "3/4", "4/5"],
      answer: "2/3",
      explanation: "HCF of 6 and 9 is 3 → 6÷3/9÷3 = 2/3"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "3/8 + 2/8 = ?",
      type: "multiple_choice",
      options: ["5/8", "5/16", "3/4", "1/4"],
      answer: "5/8",
      explanation: "(3+2)/8 = 5/8"
    },
    {
      id: "prac_007",
      objective: "obj_004",
      difficulty: "medium",
      question: "2/3 + 1/4 = ?",
      type: "multiple_choice",
      options: ["11/12", "3/7", "3/12", "1/2"],
      answer: "11/12",
      explanation: "LCD = 12 → 8/12 + 3/12 = 11/12"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "2/3 × 3/4 = ?",
      type: "multiple_choice",
      options: ["1/2", "5/12", "6/12", "1/4"],
      answer: "1/2",
      explanation: "(2×3)/(3×4) = 6/12 = 1/2"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "2/3 ÷ 3/4 = ?",
      type: "multiple_choice",
      options: ["8/9", "1/2", "1", "9/8"],
      answer: "8/9",
      explanation: "2/3 × 4/3 = 8/9"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "Convert 7/3 to a mixed number.",
      type: "multiple_choice",
      options: ["2⅓", "3⅓", "2⅔", "3⅔"],
      answer: "2⅓",
      explanation: "7 ÷ 3 = 2 remainder 1 → 2⅓"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "2/3 + 3/4 - 1/2 = ?",
      type: "multiple_choice",
      options: ["11/12", "1/3", "5/6", "3/4"],
      answer: "11/12",
      explanation: "8/12 + 9/12 - 6/12 = 11/12"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "A recipe uses 2/3 cup flour and 1/4 cup sugar. Total = ?",
      type: "multiple_choice",
      options: ["11/12 cup", "1/2 cup", "3/4 cup", "1 cup"],
      answer: "11/12 cup",
      explanation: "2/3 + 1/4 = 8/12 + 3/12 = 11/12"
    },
    {
      id: "prac_013",
      objective: "obj_007",
      difficulty: "hard",
      question: "3/4 × 2/3 ÷ 1/2 = ?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "3/4 × 2/3 = 6/12 = 1/2, 1/2 ÷ 1/2 = 1"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Solve: x/2 = 3/4",
      type: "multiple_choice",
      options: ["3/2", "3/4", "6/4", "1.5"],
      answer: "3/2",
      explanation: "x = 2 × 3/4 = 6/4 = 3/2"
    },
    {
      id: "prac_015",
      objective: "obj_007",
      difficulty: "hard",
      question: "2⅓ + 1⅔ = ?",
      type: "multiple_choice",
      options: ["4", "3⅔", "4⅓", "5"],
      answer: "4",
      explanation: "2⅓ = 7/3, 1⅔ = 5/3, 7/3 + 5/3 = 12/3 = 4"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_fractions",
    title: "Fractions Quiz",
    description: "Test your understanding of fractions",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "In 4/7, what is the denominator?",
        type: "short_answer",
        answer_key: "7",
        explanation: "The denominator is the bottom number."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What type of fraction is 3/2?",
        type: "short_answer",
        answer_key: "Improper",
        explanation: "3 > 2, so it's improper."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Simplify 10/15",
        type: "short_answer",
        answer_key: "2/3",
        explanation: "HCF of 10 and 15 is 5 → 10÷5/15÷5 = 2/3"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "1/4 + 1/4 = ?",
        type: "short_answer",
        answer_key: "1/2",
        explanation: "(1+1)/4 = 2/4 = 1/2"
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "1/3 + 1/4 = ?",
        type: "short_answer",
        answer_key: "7/12",
        explanation: "LCD = 12 → 4/12 + 3/12 = 7/12"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "2/5 × 5/6 = ?",
        type: "short_answer",
        answer_key: "1/3",
        explanation: "(2×5)/(5×6) = 10/30 = 1/3"
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "2/3 ÷ 4/5 = ?",
        type: "short_answer",
        answer_key: "5/6",
        explanation: "2/3 × 5/4 = 10/12 = 5/6"
      },
      {
        id: "ass_008",
        objective: "obj_006",
        difficulty: "medium",
        question: "Convert 11/4 to a mixed number.",
        type: "short_answer",
        answer_key: "2¾",
        explanation: "11 ÷ 4 = 2 remainder 3 → 2¾"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "1/2 + 1/3 + 1/4 = ?",
        type: "short_answer",
        answer_key: "13/12",
        explanation: "LCD = 12 → 6/12 + 4/12 + 3/12 = 13/12"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "A recipe needs 2/3 cup oil and 1/4 cup vinegar. Total = ?",
        type: "short_answer",
        answer_key: "11/12 cup",
        explanation: "2/3 + 1/4 = 8/12 + 3/12 = 11/12"
      }
    ]
  }
};