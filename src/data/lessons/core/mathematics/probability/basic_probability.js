// Location: src/data/lessons/core/mathematics/probability/basic_probability.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_basic_probability",
  subject: "Mathematics",
  topic: "Probability",
  name: "Basic Probability",
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
      description: "Define probability and its basic terms",
      indicator: "Student can explain what probability is and define outcomes, events, and sample space"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Calculate the probability of simple events",
      indicator: "Student can use P(E) = favorable outcomes / total outcomes"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify impossible and certain events",
      indicator: "Student can identify events with probability 0 and 1"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Calculate probabilities for experiments with multiple outcomes",
      indicator: "Student can calculate probabilities for dice, cards, and coin tosses"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply the probability scale (0 to 1)",
      indicator: "Student can represent probabilities as fractions, decimals, and percentages"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Calculate the probability of the complement of an event",
      indicator: "Student can use P(not E) = 1 - P(E)"
    },
    // HARD LEVEL
    {
      id: "obj_007",
      level: "hard",
      description: "Calculate experimental probability from data",
      indicator: "Student can calculate relative frequency from experiments"
    },
    {
      id: "obj_008",
      level: "hard",
      description: "Analyze theoretical vs experimental probability",
      indicator: "Student can compare theoretical and experimental probabilities"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Solve complex probability problems involving multiple events",
      indicator: "Student can solve multi-step probability problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Basic Probability - Complete Lesson",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Complete lesson covering probability basics, experiments, and calculations."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Probability?</h2>
      <p><strong>Probability</strong> is the measure of how likely an event is to occur.</p>
      <p>Probability is always between <strong>0</strong> and <strong>1</strong>:</p>
      <ul>
        <li><strong>0</strong> = impossible</li>
        <li><strong>1</strong> = certain</li>
        <li><strong>0.5</strong> = equally likely</li>
      </ul>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Basic Terminology",
        objective: "obj_001",
        text: `
          <h3>Key Terms</h3>
          <ul>
            <li><strong>Outcome:</strong> A possible result of an experiment</li>
            <li><strong>Event:</strong> A set of outcomes (what we're interested in)</li>
            <li><strong>Sample Space (S):</strong> All possible outcomes</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Tossing a coin
            <ul>
              <li>Outcomes: Heads, Tails</li>
              <li>Sample Space: {H, T}</li>
              <li>Event "getting Heads": {H}</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "The Probability Formula",
        objective: "obj_002",
        text: `
          <h3>Formula</h3>
          <p><strong>P(E) = (Number of favorable outcomes) / (Total number of possible outcomes)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Tossing a coin
            <ul>
              <li>P(Heads) = 1/2 = 0.5 = 50%</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Rolling a die
            <ul>
              <li>P(rolling a 4) = 1/6 ≈ 0.167 ≈ 16.7%</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Impossible and Certain Events",
        objective: "obj_003",
        text: `
          <h3>Probability Scale</h3>
          <ul>
            <li><strong>Impossible:</strong> P = 0</li>
            <li><strong>Unlikely:</strong> 0 < P < 0.5</li>
            <li><strong>Equally likely:</strong> P = 0.5</li>
            <li><strong>Likely:</strong> 0.5 < P < 1</li>
            <li><strong>Certain:</strong> P = 1</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong> Rolling a 7 on a die
            <ul>
              <li>P = 0 (impossible)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> The sun rising tomorrow
            <ul>
              <li>P ≈ 1 (almost certain)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Dice and Coins",
        objective: "obj_004",
        text: `
          <div class="example-box">
            <strong>📌 Example 1:</strong> Rolling two dice
            <ul>
              <li>Total outcomes = 36</li>
              <li>P(sum = 7) = 6/36 = 1/6</li>
              <li>Favorable outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong> Tossing three coins
            <ul>
              <li>Total outcomes = 8 (HHH, HHT, HTH, THH, HTT, THT, TTH, TTT)</li>
              <li>P(all heads) = 1/8</li>
              <li>P(at least one head) = 7/8</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Cards",
        objective: "obj_004",
        text: `
          <h3>A Standard Deck</h3>
          <ul>
            <li>52 cards in total</li>
            <li>4 suits: Hearts ♥, Diamonds ♦, Clubs ♣, Spades ♠</li>
            <li>13 cards per suit</li>
            <li>26 red, 26 black</li>
            <li>12 face cards (J, Q, K of each suit)</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Drawing one card
            <ul>
              <li>P(Heart) = 13/52 = 1/4</li>
              <li>P(King) = 4/52 = 1/13</li>
              <li>P(Red) = 26/52 = 1/2</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Complement of an Event",
        objective: "obj_006",
        text: `
          <h3>Complement Rule</h3>
          <p><strong>P(not E) = 1 - P(E)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Rolling a die
            <ul>
              <li>P(rolling a 4) = 1/6</li>
              <li>P(not rolling a 4) = 1 - 1/6 = 5/6</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Drawing a card
            <ul>
              <li>P(drawing a heart) = 1/4</li>
              <li>P(not drawing a heart) = 3/4</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Experimental Probability",
        objective: "obj_007",
        text: `
          <h3>Formula</h3>
          <p><strong>P(E) = (Number of times event occurs) / (Total number of trials)</strong></p>
          
          <div class="example-box">
            <strong>📌 Example:</strong> A coin tossed 100 times
            <ul>
              <li>Heads = 55 times</li>
              <li>P(Heads) = 55/100 = 0.55</li>
              <li>Theoretical P = 0.5</li>
              <li>Experimental is close to theoretical</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Theoretical vs Experimental",
        objective: "obj_008",
        text: `
          <h3>Comparison</h3>
          <ul>
            <li><strong>Theoretical:</strong> What should happen in theory</li>
            <li><strong>Experimental:</strong> What actually happens in practice</li>
            <li>As trials increase, experimental approaches theoretical</li>
          </ul>
          
          <div class="example-box">
            <strong>📌 Example:</strong> Rolling a die 600 times
            <ul>
              <li>Theoretical: Each number should appear 100 times</li>
              <li>Experimental: May vary slightly</li>
              <li>As trials increase, results become closer to theoretical</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Complex Probability Problems",
        objective: "obj_009",
        text: `
          <div class="example-box">
            <strong>📌 Example:</strong> A bag contains 3 red, 4 blue, and 5 green marbles.
            <ul>
              <li>Total marbles = 12</li>
              <li>P(red) = 3/12 = 1/4</li>
              <li>P(blue or green) = (4+5)/12 = 9/12 = 3/4</li>
              <li>P(not red) = 1 - 1/4 = 3/4</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <ul>
        <li>Probability measures how likely an event is to occur</li>
        <li>P(E) = favorable outcomes / total outcomes</li>
        <li>Probability is always between 0 (impossible) and 1 (certain)</li>
        <li>Complement rule: P(not E) = 1 - P(E)</li>
        <li>Theoretical probability is based on reasoning</li>
        <li>Experimental probability is based on actual trials</li>
        <li>As trials increase, experimental approaches theoretical</li>
      </ul>
    `
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Probability", definition: "The measure of how likely an event is to occur." },
    { term: "Outcome", definition: "A possible result of an experiment." },
    { term: "Event", definition: "A set of outcomes we are interested in." },
    { term: "Sample Space", definition: "All possible outcomes of an experiment." },
    { term: "Theoretical Probability", definition: "Probability based on reasoning." },
    { term: "Experimental Probability", definition: "Probability based on actual experiments." },
    { term: "Complement", definition: "The event of not occurring." }
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
      question: "What is the sample space when tossing a coin?",
      type: "multiple_choice",
      options: ["{H}", "{T}", "{H, T}", "{}"],
      answer: "{H, T}",
      explanation: "The sample space is all possible outcomes: Heads and Tails."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is P(Heads) when tossing a fair coin?",
      type: "multiple_choice",
      options: ["0", "1/3", "1/2", "1"],
      answer: "1/2",
      explanation: "A fair coin has 2 equally likely outcomes."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is P(rolling a 7 on a standard die)?",
      type: "multiple_choice",
      options: ["0", "1/6", "1/2", "1"],
      answer: "0",
      explanation: "A standard die has only numbers 1-6."
    },
    {
      id: "prac_004",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is P(rolling an even number on a die)?",
      type: "multiple_choice",
      options: ["1/6", "1/3", "1/2", "2/3"],
      answer: "1/2",
      explanation: "Even numbers: 2,4,6 (3 out of 6)"
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is P(drawing a heart from a standard deck)?",
      type: "multiple_choice",
      options: ["1/13", "1/4", "1/2", "1/52"],
      answer: "1/4",
      explanation: "13 hearts out of 52 cards."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "P(sum = 7) when rolling two dice?",
      type: "multiple_choice",
      options: ["1/12", "1/9", "1/6", "5/36"],
      answer: "1/6",
      explanation: "6 favorable outcomes out of 36 total."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is 1/4 as a percentage?",
      type: "multiple_choice",
      options: ["15%", "20%", "25%", "30%"],
      answer: "25%",
      explanation: "1/4 × 100 = 25%"
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "P(rolling a 4) = 1/6. What is P(not rolling a 4)?",
      type: "multiple_choice",
      options: ["0", "1/6", "5/6", "1"],
      answer: "5/6",
      explanation: "1 - 1/6 = 5/6"
    },
    {
      id: "prac_009",
      objective: "obj_004",
      difficulty: "medium",
      question: "P(drawing a face card from a deck)?",
      type: "multiple_choice",
      options: ["1/13", "3/13", "4/13", "1/4"],
      answer: "3/13",
      explanation: "12 face cards out of 52 = 3/13."
    },
    {
      id: "prac_010",
      objective: "obj_006",
      difficulty: "medium",
      question: "P(drawing a heart) = 1/4. What is P(not drawing a heart)?",
      type: "multiple_choice",
      options: ["1/4", "1/2", "3/4", "1"],
      answer: "3/4",
      explanation: "1 - 1/4 = 3/4"
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "A coin tossed 100 times shows 58 heads. What is experimental P(heads)?",
      type: "multiple_choice",
      options: ["0.42", "0.50", "0.58", "0.60"],
      answer: "0.58",
      explanation: "58/100 = 0.58"
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Theoretical P(heads) = 0.5. If experimental P = 0.58, what can you conclude?",
      type: "multiple_choice",
      options: ["Coin is fair", "Coin is biased", "Coin is broken", "No conclusion"],
      answer: "Coin may be biased",
      explanation: "Experimental is close to theoretical, but slightly different."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "A bag has 5 red, 3 blue, 2 green marbles. P(red or blue)?",
      type: "multiple_choice",
      options: ["1/10", "3/5", "4/5", "9/10"],
      answer: "4/5",
      explanation: "5+3=8 out of 10 = 4/5"
    },
    {
      id: "prac_014",
      objective: "obj_007",
      difficulty: "hard",
      question: "A die rolled 600 times shows 1=95, 2=105, 3=98, 4=102, 5=100, 6=100. Which number is farthest from theoretical?",
      type: "multiple_choice",
      options: ["1", "2", "3", "5"],
      answer: "1",
      explanation: "Theoretical is 100 each. 1 is farthest at 95."
    },
    {
      id: "prac_015",
      objective: "obj_009",
      difficulty: "hard",
      question: "A bag has 4 red, 6 blue marbles. P(red) + P(blue) = ?",
      type: "multiple_choice",
      options: ["0", "1/2", "1", "2"],
      answer: "1",
      explanation: "4/10 + 6/10 = 10/10 = 1"
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_basic_probability",
    title: "Basic Probability Quiz",
    description: "Test your understanding of basic probability",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the sample space of a die roll?",
        type: "short_answer",
        answer_key: "{1,2,3,4,5,6}",
        explanation: "All possible outcomes when rolling a die."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "P(rolling a 3 on a die)?",
        type: "short_answer",
        answer_key: "1/6",
        explanation: "One favorable outcome out of six."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "P(drawing a king from a deck)?",
        type: "short_answer",
        answer_key: "1/13",
        explanation: "4 kings out of 52 cards."
      },
      {
        id: "ass_004",
        objective: "obj_005",
        difficulty: "easy",
        question: "What is 3/4 as a percentage?",
        type: "short_answer",
        answer_key: "75%",
        explanation: "3/4 × 100 = 75%"
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "P(rolling a 5) = 1/6. P(not rolling a 5)?",
        type: "short_answer",
        answer_key: "5/6",
        explanation: "1 - 1/6 = 5/6"
      },
      {
        id: "ass_006",
        objective: "obj_004",
        difficulty: "medium",
        question: "P(sum = 5) when rolling two dice?",
        type: "short_answer",
        answer_key: "1/9",
        explanation: "4 favorable outcomes out of 36 = 1/9"
      },
      {
        id: "ass_007",
        objective: "obj_004",
        difficulty: "medium",
        question: "P(drawing a red card from a deck)?",
        type: "short_answer",
        answer_key: "1/2",
        explanation: "26 red cards out of 52."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "hard",
        question: "A die rolled 300 times shows 6 = 55 times. Experimental P(6)?",
        type: "short_answer",
        answer_key: "11/60",
        explanation: "55/300 = 11/60 ≈ 0.183"
      },
      {
        id: "ass_009",
        objective: "obj_009",
        difficulty: "hard",
        question: "A bag has 5 red, 3 blue, 2 green. P(red or green)?",
        type: "short_answer",
        answer_key: "7/10",
        explanation: "5+2=7 out of 10 = 7/10"
      },
      {
        id: "ass_010",
        objective: "obj_008",
        difficulty: "hard",
        question: "Theoretical P(heads)=0.5. Experimental P=0.52 with 100 tosses. What is the difference?",
        type: "short_answer",
        answer_key: "0.02",
        explanation: "0.52 - 0.50 = 0.02"
      }
    ]
  }
};