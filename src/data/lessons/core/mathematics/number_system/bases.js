// Location: src/data/lessons/core/mathematics/number_system/bases.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_number_bases",
  subject: "Mathematics",
  topic: "Number System",
  name: "Number Bases",
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
      description: "Define number bases and identify base 10 (decimal system)",
      indicator: "Student can explain what a number base is and identify base 10"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Convert numbers from base 10 to base 2 (binary)",
      indicator: "Student can convert decimal numbers to binary"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Convert numbers from base 2 to base 10",
      indicator: "Student can convert binary numbers to decimal"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Convert numbers from base 10 to base 8 (octal) and base 16 (hexadecimal)",
      indicator: "Student can convert decimal to octal and hexadecimal"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Convert numbers from base 8 and base 16 to base 10",
      indicator: "Student can convert octal and hexadecimal to decimal"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Add and subtract numbers in different bases",
      indicator: "Student can perform arithmetic in different bases"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Convert between different non-decimal bases",
      indicator: "Student can convert between binary, octal, and hexadecimal"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Perform multiplication and division in different bases",
      indicator: "Student can multiply and divide in non-decimal bases"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex problems involving number bases",
      indicator: "Student can solve multi-step base conversion problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Number Bases - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering decimal, binary, octal, and hexadecimal bases."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What are Number Bases?</h2>
      <p>A <strong>number base</strong> (or radix) is the number of unique digits used to represent numbers.</p>
      <p>The most common base is <strong>base 10</strong> (decimal) using digits 0-9.</p>
      <p>Other common bases:</p>
      <ul>
        <li><strong>Base 2:</strong> Binary (digits 0, 1)</li>
        <li><strong>Base 8:</strong> Octal (digits 0-7)</li>
        <li><strong>Base 16:</strong> Hexadecimal (digits 0-9, A-F)</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Decimal System (Base 10)",
        objective: "obj_001",
        text: `
          <h3>Place Values</h3>
          <p>In base 10, place values are powers of 10.</p>
          <ul>
            <li>... 10³, 10², 10¹, 10⁰</li>
            <li>Example: 345 = 3×10² + 4×10¹ + 5×10⁰</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> 345 in base 10
            <ul>
              <li>= 3×100 + 4×10 + 5×1</li>
              <li>= 300 + 40 + 5 = 345</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Binary System (Base 2)",
        objective: "obj_002",
        text: `
          <h3>Converting Decimal to Binary</h3>
          <p>Divide by 2 repeatedly and read remainders <strong>from bottom to top</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Convert 13₁₀ to binary
            <ul>
              <li>13 ÷ 2 = 6 r 1</li>
              <li>6 ÷ 2 = 3 r 0</li>
              <li>3 ÷ 2 = 1 r 1</li>
              <li>1 ÷ 2 = 0 r 1</li>
              <li><strong>Answer:</strong> 13₁₀ = 1101₂</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Binary to Decimal",
        objective: "obj_003",
        text: `
          <h3>Method</h3>
          <p>Multiply each digit by its place value (powers of 2) and sum.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Convert 1101₂ to decimal
            <ul>
              <li>= 1×2³ + 1×2² + 0×2¹ + 1×2⁰</li>
              <li>= 8 + 4 + 0 + 1 = 13</li>
              <li><strong>Answer:</strong> 1101₂ = 13₁₀</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Octal System (Base 8)",
        objective: "obj_004",
        text: `
          <h3>Converting Decimal to Octal</h3>
          <p>Divide by 8 repeatedly and read remainders from bottom to top.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Convert 100₁₀ to octal
            <ul>
              <li>100 ÷ 8 = 12 r 4</li>
              <li>12 ÷ 8 = 1 r 4</li>
              <li>1 ÷ 8 = 0 r 1</li>
              <li><strong>Answer:</strong> 100₁₀ = 144₈</li>
            </ul>
          </div>
          
          <h3>Octal to Decimal</h3>
          <div class="example-box">
            <strong>📌 Example:</strong> 144₈ to decimal
            <ul>
              <li>= 1×8² + 4×8¹ + 4×8⁰</li>
              <li>= 64 + 32 + 4 = 100</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Hexadecimal System (Base 16)",
        objective: "obj_004",
        text: `
          <h3>Digits</h3>
          <ul>
            <li>0-9: same as decimal</li>
            <li>A = 10, B = 11, C = 12, D = 13, E = 14, F = 15</li>
          </ul>
          
          <h3>Converting Decimal to Hexadecimal</h3>
          <p>Divide by 16 repeatedly.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Convert 255₁₀ to hexadecimal
            <ul>
              <li>255 ÷ 16 = 15 r 15 (F)</li>
              <li>15 ÷ 16 = 0 r 15 (F)</li>
              <li><strong>Answer:</strong> 255₁₀ = FF₁₆</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Arithmetic in Different Bases",
        objective: "obj_006",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Add 101₂ + 11₂
            <ul>
              <li>101₂ = 5₁₀, 11₂ = 3₁₀</li>
              <li>5 + 3 = 8 = 1000₂</li>
              <li><strong>Answer:</strong> 1000₂</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Converting Between Bases",
        objective: "obj_007",
        text: `
          <h3>Method</h3>
          <p>Convert to decimal first, then to the target base.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Convert 1101₂ to octal
            <ul>
              <li>1101₂ = 13₁₀</li>
              <li>13₁₀ = 15₈</li>
              <li><strong>Answer:</strong> 1101₂ = 15₈</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Multiplication in Different Bases",
        objective: "obj_008",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Multiply 101₂ × 11₂
            <ul>
              <li>101₂ = 5₁₀, 11₂ = 3₁₀</li>
              <li>5 × 3 = 15 = 1111₂</li>
              <li><strong>Answer:</strong> 1111₂</li>
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
            <strong>📌 Example:</strong> Convert 3A₁₆ to binary
            <ul>
              <li>3A₁₆ = 3×16 + 10 = 58₁₀</li>
              <li>58₁₀ = 111010₂</li>
              <li><strong>Answer:</strong> 3A₁₆ = 111010₂</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Base 10: decimal (digits 0-9)</li>
        <li>Base 2: binary (digits 0, 1)</li>
        <li>Base 8: octal (digits 0-7)</li>
        <li>Base 16: hexadecimal (0-9, A-F)</li>
        <li>Convert decimal to other bases: divide and read remainders</li>
        <li>Convert other bases to decimal: multiply by place values</li>
        <li>Convert between non-decimal bases via decimal</li>
        <li>Arithmetic: convert to decimal, do calculation, convert back</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Number Base", definition: "The number of digits used to represent numbers." },
    { term: "Decimal", definition: "Base 10 (digits 0-9)." },
    { term: "Binary", definition: "Base 2 (digits 0, 1)." },
    { term: "Octal", definition: "Base 8 (digits 0-7)." },
    { term: "Hexadecimal", definition: "Base 16 (0-9, A-F)." },
    { term: "Place Value", definition: "The value of a digit based on its position." }
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
      question: "What is base 10 called?",
      type: "multiple_choice",
      options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
      answer: "Decimal",
      explanation: "Base 10 is the decimal system."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Convert 5₁₀ to binary.",
      type: "multiple_choice",
      options: ["101₂", "101₂", "110₂", "100₂"],
      answer: "101₂",
      explanation: "5 ÷ 2 = 2 r 1, 2 ÷ 2 = 1 r 0, 1 ÷ 2 = 0 r 1 → 101₂"
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Convert 101₂ to decimal.",
      type: "multiple_choice",
      options: ["4", "5", "5", "6"],
      answer: "5",
      explanation: "1×4 + 0×2 + 1×1 = 5"
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "Convert 8₁₀ to binary.",
      type: "multiple_choice",
      options: ["1000₂", "1000₂", "1100₂", "1010₂"],
      answer: "1000₂",
      explanation: "8 ÷ 2 = 4 r 0, 4 ÷ 2 = 2 r 0, 2 ÷ 2 = 1 r 0, 1 ÷ 2 = 0 r 1 → 1000₂"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "Convert 110₂ to decimal.",
      type: "multiple_choice",
      options: ["4", "6", "6", "7"],
      answer: "6",
      explanation: "1×4 + 1×2 + 0×1 = 6"
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert 10₁₀ to octal.",
      type: "multiple_choice",
      options: ["12₈", "12₈", "10₈", "14₈"],
      answer: "12₈",
      explanation: "10 ÷ 8 = 1 r 2 → 12₈"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert 12₈ to decimal.",
      type: "multiple_choice",
      options: ["8", "10", "10", "12"],
      answer: "10",
      explanation: "1×8 + 2×1 = 10"
    },
    {
      id: "prac_008",
      objective: "obj_004",
      difficulty: "medium",
      question: "Convert 15₁₀ to hexadecimal.",
      type: "multiple_choice",
      options: ["A", "E", "F", "F"],
      answer: "F",
      explanation: "15 = F₁₆"
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "medium",
      question: "Convert 1A₁₆ to decimal.",
      type: "multiple_choice",
      options: ["16", "26", "26", "30"],
      answer: "26",
      explanation: "1×16 + 10 = 26"
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "101₂ + 11₂ = ?",
      type: "multiple_choice",
      options: ["1000₂", "1000₂", "1010₂", "1100₂"],
      answer: "1000₂",
      explanation: "5 + 3 = 8 = 1000₂"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Convert 1101₂ to octal.",
      type: "multiple_choice",
      options: ["15₈", "15₈", "13₈", "17₈"],
      answer: "15₈",
      explanation: "1101₂ = 13₁₀ = 15₈"
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Convert 2F₁₆ to binary.",
      type: "multiple_choice",
      options: ["101111₂", "101111₂", "101010₂", "111111₂"],
      answer: "101111₂",
      explanation: "2F₁₆ = 47₁₀ = 101111₂"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "101₂ × 11₂ = ?",
      type: "multiple_choice",
      options: ["1111₂", "1111₂", "1010₂", "1100₂"],
      answer: "1111₂",
      explanation: "5 × 3 = 15 = 1111₂"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "Convert 3A₁₆ to binary.",
      type: "multiple_choice",
      options: ["111010₂", "111010₂", "110010₂", "111000₂"],
      answer: "111010₂",
      explanation: "3A₁₆ = 58₁₀ = 111010₂"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "FF₁₆ + 1₁₆ = ?",
      type: "multiple_choice",
      options: ["100₁₆", "100₁₆", "FF₁₆", "1FF₁₆"],
      answer: "100₁₆",
      explanation: "255 + 1 = 256 = 100₁₆"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_number_bases",
    title: "Number Bases Quiz",
    description: "Test your understanding of number bases",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is base 2 called?",
        type: "short_answer",
        answer_key: "Binary",
        explanation: "Base 2 is the binary system."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Convert 10₁₀ to binary.",
        type: "short_answer",
        answer_key: "1010₂",
        explanation: "10 = 1010₂"
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Convert 111₂ to decimal.",
        type: "short_answer",
        answer_key: "7",
        explanation: "4+2+1 = 7"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Convert 20₁₀ to octal.",
        type: "short_answer",
        answer_key: "24₈",
        explanation: "20 ÷ 8 = 2 r 4 → 24₈"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert 24₈ to decimal.",
        type: "short_answer",
        answer_key: "20",
        explanation: "2×8 + 4 = 20"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "Convert 31₁₀ to hexadecimal.",
        type: "short_answer",
        answer_key: "1F₁₆",
        explanation: "31 = 1F₁₆"
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "medium",
        question: "Convert 1F₁₆ to decimal.",
        type: "short_answer",
        answer_key: "31",
        explanation: "1×16 + 15 = 31"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "Convert 1011₂ to octal.",
        type: "short_answer",
        answer_key: "13₈",
        explanation: "1011₂ = 11₁₀ = 13₈"
      },
      {
        id: "ass_009",
        objective: "obj_007",
        difficulty: "hard",
        question: "Convert 2B₁₆ to binary.",
        type: "short_answer",
        answer_key: "101011₂",
        explanation: "2B₁₆ = 43₁₀ = 101011₂"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "101₂ × 10₂ = ?",
        type: "short_answer",
        answer_key: "1010₂",
        explanation: "5 × 2 = 10 = 1010₂"
      }
    ]
  }
};