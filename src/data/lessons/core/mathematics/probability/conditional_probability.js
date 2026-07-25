// Location: src/data/lessons/core/mathematics/probability/conditional_probability.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_conditional_probability",
  subject: "Mathematics",
  topic: "Probability",
  name: "Conditional Probability",
  icon: "🎲",
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
      description: "Define conditional probability and its notation",
      indicator: "Student can explain what conditional probability is and interpret P(A|B)"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify dependent and independent events",
      indicator: "Student can distinguish between dependent and independent events"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Calculate conditional probability from a table",
      indicator: "Student can find P(A|B) from contingency tables"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply the conditional probability formula",
      indicator: "Student can use P(A|B) = P(A∩B) / P(B)"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Calculate probabilities with replacement and without replacement",
      indicator: "Student can solve problems with and without replacement"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply the multiplication rule for independent events",
      indicator: "Student can use P(A∩B) = P(A) × P(B)"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Solve complex conditional probability problems",
      indicator: "Student can solve multi-step conditional probability problems"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Use tree diagrams to solve conditional probability problems",
      indicator: "Student can construct and interpret tree diagrams"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply Bayes' theorem to real-world problems",
      indicator: "Student can use Bayes' theorem to find reverse conditional probabilities"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Conditional Probability - Complete Lesson",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering conditional probability, independent events, and tree diagrams."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Conditional Probability?</h2>
      <p><strong>Conditional probability</strong> is the probability of an event occurring given that another event has already occurred.</p>
      <p>Notation: <strong>P(A|B)</strong> = "Probability of A given B"</p>
      <p>Formula: <strong>P(A|B) = P(A∩B) / P(B)</strong></p>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Understanding Conditional Probability",
        objective: "obj_001",
        text: `
          <h3>Key Concept</h3>
          <p>P(A|B) means: "The probability of A happening <strong>given that</strong> B has already happened."</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Drawing a card from a deck
            <ul>
              <li>P(Heart | Red) = Probability of a Heart given that the card is Red</li>
              <li>There are 26 red cards, 13 are hearts</li>
              <li>P(Heart | Red) = 13/26 = 1/2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Dependent vs Independent Events",
        objective: "obj_002",
        text: `
          <h3>Independent Events</h3>
          <ul>
            <li>P(A|B) = P(A)</li>
            <li>Event A does not depend on Event B</li>
            <li>Example: Tossing a coin twice</li>
          </ul>
          
          <h3>Dependent Events</h3>
          <ul>
            <li>P(A|B) ≠ P(A)</li>
            <li>Event A depends on Event B</li>
            <li>Example: Drawing cards without replacement</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Drawing two cards without replacement
            <ul>
              <li>Independent? No, because the first draw affects the second</li>
              <li>P(Second card is Heart | First was Heart) = 12/51</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Using Tables for Conditional Probability",
        objective: "obj_003",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> Survey results:
            <table>
              <tr><th></th><th>Like Math</th><th>Dislike Math</th><th>Total</th></tr>
              <tr><td>Male</td><td>30</td><td>20</td><td>50</td></tr>
              <tr><td>Female</td><td>40</td><td>10</td><td>50</td></tr>
              <tr><td>Total</td><td>70</td><td>30</td><td>100</td></tr>
            </table>
            <ul>
              <li>P(Like Math | Female) = 40/50 = 0.8</li>
              <li>P(Male | Like Math) = 30/70 = 3/7</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "The Conditional Probability Formula",
        objective: "obj_004",
        text: `
          <h3>Formula</h3>
          <p><strong>P(A|B) = P(A∩B) / P(B)</strong></p>
          <ul>
            <li>P(A∩B) = Probability of both A and B occurring</li>
            <li>P(B) = Probability of B occurring</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Rolling two dice
            <ul>
              <li>P(Sum = 7 | First die = 4)</li>
              <li>P(Sum = 7) = 6/36 = 1/6</li>
              <li>P(First die = 4) = 1/6</li>
              <li>P(Sum = 7 AND First die = 4) = 1/36</li>
              <li>P(Sum = 7 | First die = 4) = (1/36)/(1/6) = 1/6</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "With vs Without Replacement",
        objective: "obj_005",
        text: `
          <h3>With Replacement</h3>
          <ul>
            <li>Events are independent</li>
            <li>After each draw, the item is put back</li>
            <li>P(A|B) = P(A)</li>
          </ul>
          
          <h3>Without Replacement</h3>
          <ul>
            <li>Events are dependent</li>
            <li>After each draw, the item is NOT put back</li>
            <li>P(A|B) ≠ P(A)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Drawing marbles
            <ul>
              <li>Bag: 3 red, 2 blue</li>
              <li>With replacement: P(red then red) = 3/5 × 3/5 = 9/25</li>
              <li>Without replacement: P(red then red) = 3/5 × 2/4 = 6/20 = 3/10</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Multiplication Rule",
        objective: "obj_006",
        text: `
          <h3>For Independent Events</h3>
          <p><strong>P(A∩B) = P(A) × P(B)</strong></p>
          
          <h3>For Dependent Events</h3>
          <p><strong>P(A∩B) = P(A) × P(B|A)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Tossing two coins
            <ul>
              <li>P(heads then heads) = 1/2 × 1/2 = 1/4</li>
              <li>Independent because one toss doesn't affect the other</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Tree Diagrams",
        objective: "obj_008",
        text: `
          <h3>Using Tree Diagrams</h3>
          <p>A tree diagram shows all possible outcomes and their probabilities.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Bag with 3 red, 2 blue marbles, drawing two without replacement
            <ul>
              <li>First draw: R(3/5), B(2/5)</li>
              <li>Second draw (after R): R(2/4), B(2/4)</li>
              <li>Second draw (after B): R(3/4), B(1/4)</li>
              <li>P(RR) = 3/5 × 2/4 = 6/20 = 3/10</li>
              <li>P(RB) = 3/5 × 2/4 = 6/20 = 3/10</li>
              <li>P(BR) = 2/5 × 3/4 = 6/20 = 3/10</li>
              <li>P(BB) = 2/5 × 1/4 = 2/20 = 1/10</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Complex Conditional Probability",
        objective: "obj_007",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> In a class, 60% are boys, 40% are girls. 70% of boys like sports, 50% of girls like sports.
            <ul>
              <li>P(Boy) = 0.6, P(Girl) = 0.4</li>
              <li>P(Sports | Boy) = 0.7</li>
              <li>P(Sports | Girl) = 0.5</li>
              <li>P(Sports) = P(Boy)×P(Sports|Boy) + P(Girl)×P(Sports|Girl)</li>
              <li>P(Sports) = 0.6×0.7 + 0.4×0.5 = 0.42 + 0.20 = 0.62</li>
              <li>P(Boy | Sports) = P(Boy)×P(Sports|Boy) / P(Sports)</li>
              <li>P(Boy | Sports) = 0.42/0.62 = 0.677</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Bayes' Theorem",
        objective: "obj_009",
        text: `
          <h3>Bayes' Theorem</h3>
          <p><strong>P(A|B) = [P(B|A) × P(A)] / P(B)</strong></p>
          <p>Used to find reverse conditional probabilities.</p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A test for a disease is 98% accurate.
            <ul>
              <li>Disease rate = 1% (P(D) = 0.01)</li>
              <li>P(Test+ | D) = 0.98 (sensitivity)</li>
              <li>P(Test+ | Not D) = 0.02 (false positive)</li>
              <li>P(D | Test+) = [0.98 × 0.01] / [0.98×0.01 + 0.02×0.99]</li>
              <li>P(D | Test+) = 0.0098 / (0.0098 + 0.0198) = 0.0098/0.0296 = 0.331</li>
              <li><strong>Answer:</strong> Only 33.1% chance of having the disease even with a positive test!</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Conditional probability: P(A|B) = P(A∩B) / P(B)</li>
        <li>Independent events: P(A|B) = P(A)</li>
        <li>Dependent events: P(A|B) ≠ P(A)</li>
        <li>With replacement: Independent</li>
        <li>Without replacement: Dependent</li>
        <li>Multiplication rule: P(A∩B) = P(A) × P(B|A)</li>
        <li>Tree diagrams help visualize conditional probability</li>
        <li>Bayes' theorem calculates reverse conditional probabilities</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Conditional Probability", definition: "Probability of A given B has occurred." },
    { term: "Independent Events", definition: "Events where P(A|B) = P(A)." },
    { term: "Dependent Events", definition: "Events where P(A|B) ≠ P(A)." },
    { term: "With Replacement", definition: "Items are returned after each draw (independent)." },
    { term: "Without Replacement", definition: "Items are not returned (dependent)." },
    { term: "Tree Diagram", definition: "A diagram showing all possible outcomes." },
    { term: "Bayes' Theorem", definition: "A formula for calculating reverse conditional probabilities." }
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
      question: "What does P(A|B) mean?",
      type: "multiple_choice",
      options: [
        "Probability of A and B",
        "Probability of A given B",
        "Probability of B given A",
        "Probability of A or B"
      ],
      answer: "Probability of A given B",
      explanation: "P(A|B) means the probability of A given that B has occurred."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Tossing a coin twice: Are the events independent?",
      type: "multiple_choice",
      options: ["Yes", "No", "Sometimes", "Cannot determine"],
      answer: "Yes",
      explanation: "The first toss does not affect the second toss."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Table: 30 Male/70 Female. P(Male | Female) = ?",
      type: "multiple_choice",
      options: ["0", "0.3", "0.5", "1"],
      answer: "0",
      explanation: "If they are mutually exclusive, P(Male | Female) = 0"
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "In a class of 100, 60 boys, 40 girls. 30 boys like sports. What is P(Boy | Likes Sports)?",
      type: "multiple_choice",
      options: ["1/2", "3/5", "3/4", "1"],
      answer: "3/4",
      explanation: "30 out of 40 who like sports are boys."
    },
    {
      id: "prac_005",
      objective: "obj_002",
      difficulty: "easy",
      question: "Drawing cards without replacement: Are the events dependent?",
      type: "multiple_choice",
      options: ["Yes", "No", "Sometimes", "Cannot determine"],
      answer: "Yes",
      explanation: "The first draw affects the second draw."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "P(A∩B) = 0.2, P(B) = 0.5. What is P(A|B)?",
      type: "multiple_choice",
      options: ["0.1", "0.2", "0.4", "0.5"],
      answer: "0.4",
      explanation: "P(A|B) = P(A∩B)/P(B) = 0.2/0.5 = 0.4"
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Bag: 3 red, 2 blue. With replacement, P(red then red)?",
      type: "multiple_choice",
      options: ["3/25", "6/25", "9/25", "12/25"],
      answer: "9/25",
      explanation: "3/5 × 3/5 = 9/25"
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Bag: 3 red, 2 blue. Without replacement, P(red then red)?",
      type: "multiple_choice",
      options: ["1/10", "3/20", "3/10", "1/2"],
      answer: "3/10",
      explanation: "3/5 × 2/4 = 6/20 = 3/10"
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "P(A) = 0.3, P(B) = 0.4. Independent. What is P(A∩B)?",
      type: "multiple_choice",
      options: ["0.12", "0.3", "0.4", "0.7"],
      answer: "0.12",
      explanation: "0.3 × 0.4 = 0.12"
    },
    {
      id: "prac_010",
      objective: "obj_004",
      difficulty: "medium",
      question: "P(A∩B) = 0.15, P(B) = 0.6. What is P(A|B)?",
      type: "multiple_choice",
      options: ["0.15", "0.25", "0.4", "0.6"],
      answer: "0.25",
      explanation: "0.15/0.6 = 0.25"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "60% boys, 40% girls. 70% boys like sports, 50% girls like sports. P(Boy | Likes Sports)?",
      type: "multiple_choice",
      options: ["0.42", "0.56", "0.62", "0.68"],
      answer: "0.68",
      explanation: "P(Sports) = 0.6×0.7 + 0.4×0.5 = 0.62. P(Boy|Sports) = 0.42/0.62 = 0.677"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Tree diagram: First branch 0.6, second branch 0.7. What is the joint probability?",
      type: "multiple_choice",
      options: ["0.12", "0.42", "0.6", "0.7"],
      answer: "0.42",
      explanation: "0.6 × 0.7 = 0.42"
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Tree diagram: P(R) = 3/5, P(B) = 2/5. P(R then R without replacement) = ?",
      type: "multiple_choice",
      options: ["3/25", "3/10", "9/25", "1/10"],
      answer: "3/10",
      explanation: "3/5 × 2/4 = 3/10"
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Test: Disease rate 2%, sensitivity 95%, false positive 5%. P(Disease | Positive)?",
      type: "multiple_choice",
      options: ["0.19", "0.28", "0.37", "0.46"],
      answer: "0.28",
      explanation: "P(D|+) = (0.95×0.02)/(0.95×0.02 + 0.05×0.98) = 0.019/(0.019 + 0.049) = 0.019/0.068 = 0.279"
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "Bayes' theorem: P(B|A) = 0.6, P(A) = 0.3, P(B) = 0.5. What is P(A|B)?",
      type: "multiple_choice",
      options: ["0.18", "0.3", "0.36", "0.6"],
      answer: "0.36",
      explanation: "P(A|B) = P(B|A)×P(A)/P(B) = 0.6×0.3/0.5 = 0.18/0.5 = 0.36"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_conditional_probability",
    title: "Conditional Probability Quiz",
    description: "Test your understanding of conditional probability",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is P(A|B)?",
        type: "short_answer",
        answer_key: "Probability of A given B",
        explanation: "P(A|B) means probability of A given B."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Are coin tosses independent events?",
        type: "short_answer",
        answer_key: "Yes",
        explanation: "One toss does not affect the other."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Table: 30 boys like sports, 50 total boys. P(Sports | Boy)?",
        type: "short_answer",
        answer_key: "0.6",
        explanation: "30/50 = 0.6"
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "P(A∩B) = 0.18, P(B) = 0.6. P(A|B)?",
        type: "short_answer",
        answer_key: "0.3",
        explanation: "0.18/0.6 = 0.3"
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Bag: 4 red, 3 blue. With replacement. P(red then red)?",
        type: "short_answer",
        answer_key: "16/49",
        explanation: "4/7 × 4/7 = 16/49"
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Bag: 4 red, 3 blue. Without replacement. P(red then red)?",
        type: "short_answer",
        answer_key: "12/42 = 2/7",
        explanation: "4/7 × 3/6 = 12/42 = 2/7"
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "P(A) = 0.4, P(B) = 0.5, independent. P(A∩B)?",
        type: "short_answer",
        answer_key: "0.2",
        explanation: "0.4 × 0.5 = 0.2"
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "70% boys, 30% girls. 80% boys like sports, 60% girls like sports. P(Boy | Sports)?",
        type: "short_answer",
        answer_key: "0.757",
        explanation: "P(Sports) = 0.7×0.8 + 0.3×0.6 = 0.74. P(Boy|Sports) = 0.56/0.74 = 0.757"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "Disease rate 1%, sensitivity 99%, false positive 1%. P(Disease | Positive)?",
        type: "short_answer",
        answer_key: "0.5",
        explanation: "P(D|+) = (0.99×0.01)/(0.99×0.01 + 0.01×0.99) = 0.0099/(0.0099 + 0.0099) = 0.5"
      },
      {
        id: "ass_010",
        objective: "obj_009",
        difficulty: "hard",
        question: "P(B|A) = 0.8, P(A) = 0.2, P(B) = 0.4. P(A|B)?",
        type: "short_answer",
        answer_key: "0.4",
        explanation: "P(A|B) = 0.8×0.2/0.4 = 0.16/0.4 = 0.4"
      }
    ]
  }
};