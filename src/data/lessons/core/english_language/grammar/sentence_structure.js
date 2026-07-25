// Location: src/data/lessons/core/english_language/grammar/sentence_structure.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_sentence_structure",
  subject: "English Language",
  topic: "Grammar",
  name: "Sentence Structure",
  icon: "🏗️",
  grade_level: "JSS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 10,
    totalPracticeQuestions: 16,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 12,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of parts of speech",
    "Knowledge of basic tenses",
    "Ability to form simple sentences"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_subject_verb_agreement",
      name: "Subject-Verb Agreement",
      file: "core/english_language/grammar/subject_verb_agreement.js"
    },
    {
      id: "eng_lesson_modifiers",
      name: "Modifiers",
      file: "core/english_language/grammar/modifiers.js"
    }
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define a sentence and identify its basic components",
      indicator: "Student can identify subject and predicate in a sentence"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify and form simple sentences",
      indicator: "Student can create simple sentences with subject + verb + object"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify and form compound sentences",
      indicator: "Student can join two independent clauses with coordinating conjunctions"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Identify and form complex sentences",
      indicator: "Student can combine independent and dependent clauses"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Identify and form compound-complex sentences",
      indicator: "Student can combine multiple clauses correctly"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Identify and correct sentence fragments",
      indicator: "Student can spot and fix incomplete sentences"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify and correct run-on sentences and comma splices",
      indicator: "Student can identify and fix run-ons with proper punctuation or conjunctions"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Use correct punctuation in sentences",
      indicator: "Student can use commas, semicolons, and periods correctly"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze and diagram complex sentence structures",
      indicator: "Student can break down and label all parts of complex sentences"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Vary sentence structures for effective writing",
      indicator: "Student can mix simple, compound, and complex sentences in a paragraph"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Sentence Structure",
    duration: "15:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to construct clear, effective sentences of all types."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is a Sentence?</h2>
      <p>A <strong>sentence</strong> is a group of words that expresses a complete thought. Every sentence has two main parts:</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Subject</h3>
          <p>Who or what the sentence is about</p>
          <p><strong>Example:</strong> <em>The dog</em> ran.</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Predicate</h3>
          <p>What the subject does or is</p>
          <p><strong>Example:</strong> The dog <em>ran quickly</em>.</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Types of Sentences</h4>
        <p>There are <strong>4 types of sentence structures</strong> in English:</p>
        <ul>
          <li><strong>Simple:</strong> One independent clause</li>
          <li><strong>Compound:</strong> Two independent clauses</li>
          <li><strong>Complex:</strong> One independent + one dependent clause</li>
          <li><strong>Compound-Complex:</strong> Multiple independent + dependent clauses</li>
        </ul>
      </div>
      
      <div class="bg-red-50 p-4 rounded mt-4">
        <h4>⚠️ Common Mistakes:</h4>
        <ul>
          <li><strong>Fragments:</strong> Incomplete sentences</li>
          <li><strong>Run-ons:</strong> Sentences joined incorrectly</li>
          <li><strong>Comma Splices:</strong> Two sentences joined with only a comma</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Sentence",
        objective: "obj_001",
        text: `
          <h3>Subjects and Predicates</h3>
          <p>Every complete sentence has a <strong>subject</strong> and a <strong>predicate</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Subject:</strong>
            <ul>
              <li><strong>Simple Subject:</strong> The main noun/pronoun (e.g., <em>The girl</em> laughed.)</li>
              <li><strong>Complete Subject:</strong> All words describing the subject (e.g., <em>The tall girl</em> laughed.)</li>
              <li><strong>Compound Subject:</strong> Two or more subjects (e.g., <em>John and Mary</em> laughed.)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Predicate:</strong>
            <ul>
              <li><strong>Simple Predicate:</strong> The main verb (e.g., The girl <em>laughed</em>.)</li>
              <li><strong>Complete Predicate:</strong> Verb + all other words (e.g., The girl <em>laughed loudly</em>.)</li>
              <li><strong>Compound Predicate:</strong> Two or more verbs (e.g., The girl <em>laughed and sang</em>.)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><em>The cat</em> | <em>sat on the mat</em>. (Subject | Predicate)</li>
              <li><em>My mother and I</em> | <em>went to the store</em>. (Compound Subject)</li>
              <li><em>He</em> | <em>ran and jumped</em>. (Compound Predicate)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Simple Sentences",
        objective: "obj_002",
        text: `
          <h3>Simple Sentences</h3>
          <p>A <strong>simple sentence</strong> has <strong>one independent clause</strong> (subject + predicate) and expresses a complete thought.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Subject + Verb + (Object/Complement)</strong></p>
            <ul>
              <li>SV: <em>Birds fly.</em></li>
              <li>SVO: <em>She reads books.</em></li>
              <li>SVC: <em>He is a teacher.</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>I walk</strong> to school." (Subject + Verb)</li>
              <li>"<strong>She bought</strong> a new car." (Subject + Verb + Object)</li>
              <li>"<strong>They are</strong> happy." (Subject + Verb + Complement)</li>
              <li>"<strong>My brother and I</strong> play football." (Compound Subject)</li>
              <li>"<strong>He</strong> reads and writes." (Compound Predicate)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>✅ Key Point:</strong> A simple sentence can have a compound subject or compound predicate, but only ONE independent clause.
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Compound Sentences",
        objective: "obj_003",
        text: `
          <h3>Compound Sentences</h3>
          <p>A <strong>compound sentence</strong> has <strong>two or more independent clauses</strong> joined by a coordinating conjunction or semicolon.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Independent Clause + , + FANBOYS + Independent Clause</strong></p>
            <p>OR <strong>Independent Clause + ; + Independent Clause</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 FANBOYS:</strong>
            <ul>
              <li><strong>F</strong> - For (reason)</li>
              <li><strong>A</strong> - And (addition)</li>
              <li><strong>N</strong> - Nor (negative addition)</li>
              <li><strong>B</strong> - But (contrast)</li>
              <li><strong>O</strong> - Or (choice)</li>
              <li><strong>Y</strong> - Yet (contrast)</li>
              <li><strong>S</strong> - So (result)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"I wanted to go, <strong>but</strong> I was tired."</li>
              <li>"She studied hard, <strong>so</strong> she passed the exam."</li>
              <li>"You can have tea, <strong>or</strong> you can have coffee."</li>
              <li>"He loves her; <strong>she loves him too</strong>." (using semicolon)</li>
              <li>"I bought apples, pears, and oranges; <strong>I also bought bananas</strong>."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Each independent clause must be a complete sentence on its own.
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Complex Sentences",
        objective: "obj_004",
        text: `
          <h3>Complex Sentences</h3>
          <p>A <strong>complex sentence</strong> has <strong>one independent clause</strong> and <strong>one or more dependent clauses</strong>.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Independent Clause + Dependent Clause</strong></p>
            <p>OR <strong>Dependent Clause + , + Independent Clause</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Common Subordinating Conjunctions (SWABI):</strong>
            <ul>
              <li><strong>S</strong> - Since, So that</li>
              <li><strong>W</strong> - When, Whenever, Where, While</li>
              <li><strong>A</strong> - Although, After, As</li>
              <li><strong>B</strong> - Because, Before</li>
              <li><strong>I</strong> - If, In case</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>Because</strong> I was sick, I stayed home."</li>
              <li>"I stayed home <strong>because</strong> I was sick."</li>
              <li>"<strong>Although</strong> she was tired, she continued working."</li>
              <li>"She continued working <strong>although</strong> she was tired."</li>
              <li>"<strong>When</strong> he arrives, we will start the meeting."</li>
              <li>"The book <strong>that I bought</strong> is interesting." (relative clause)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> 
            <ul>
              <li>Dependent clauses cannot stand alone.</li>
              <li>When the dependent clause comes first, use a comma.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Compound-Complex Sentences",
        objective: "obj_005",
        text: `
          <h3>Compound-Complex Sentences</h3>
          <p>A <strong>compound-complex sentence</strong> has <strong>two or more independent clauses</strong> AND <strong>one or more dependent clauses</strong>.</p>
          
          <div class="formula-box">
            <h4>📝 Formula:</h4>
            <p><strong>Independent Clause + , + Conjunction + Independent Clause + , + Dependent Clause</strong></p>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>Because</strong> I was tired, I went home, <strong>but</strong> my friends stayed."</li>
              <li>"I went home <strong>because</strong> I was tired, <strong>but</strong> my friends stayed."</li>
              <li>"<strong>Although</strong> she studied hard, she failed the test, <strong>so</strong> she was disappointed."</li>
              <li>"He returned the book <strong>that he borrowed</strong>, <strong>and</strong> he checked out another one."</li>
              <li>"<strong>When</strong> the rain stopped, we went to the park, <strong>and</strong> we played football."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>✅ Key Point:</strong> A compound-complex sentence combines elements of both compound and complex sentences.
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Sentence Fragments",
        objective: "obj_006",
        text: `
          <h3>Sentence Fragments</h3>
          <p>A <strong>sentence fragment</strong> is an incomplete sentence that is punctuated as a complete sentence.</p>
          
          <div class="example-box">
            <strong>❌ Common Fragments:</strong>
            <ul>
              <li><strong>Missing Subject:</strong> "Went to the store." → Fix: "<strong>I</strong> went to the store."</li>
              <li><strong>Missing Verb:</strong> "The beautiful sunset." → Fix: "The beautiful sunset <strong>was stunning</strong>."</li>
              <li><strong>Dependent Clause Alone:</strong> "Because I was tired." → Fix: "Because I was tired, <strong>I went home</strong>."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>✅ Correcting Fragments:</strong>
            <ul>
              <li>Fragment: "Running through the forest."</li>
              <li>Correct: "<strong>The dog was running</strong> through the forest."</li>
              <li>OR: "Running through the forest, <strong>she felt free</strong>."</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Tip:</strong> Always check if your sentence has a subject and a complete verb and expresses a complete thought.
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Run-On Sentences",
        objective: "obj_007",
        text: `
          <h3>Run-On Sentences</h3>
          <p>A <strong>run-on sentence</strong> occurs when two or more independent clauses are joined without proper punctuation or conjunction.</p>
          
          <div class="example-box">
            <strong>❌ Types of Run-Ons:</strong>
            <ul>
              <li><strong>Fused Sentence:</strong> No punctuation between clauses</li>
              <li>❌ "I went to the store I bought milk."</li>
              <li><strong>Comma Splice:</strong> Only a comma between clauses</li>
              <li>❌ "I went to the store, I bought milk."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>✅ How to Fix Run-Ons:</strong>
            <ul>
              <li><strong>Use a period:</strong> "I went to the store. I bought milk."</li>
              <li><strong>Use a comma + conjunction:</strong> "I went to the store, and I bought milk."</li>
              <li><strong>Use a semicolon:</strong> "I went to the store; I bought milk."</li>
              <li><strong>Use a semicolon + conjunctive adverb:</strong> "I went to the store; then, I bought milk."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>❌ "She loves reading she reads every day."</li>
              <li>✅ "She loves reading, and she reads every day."</li>
              <li>✅ "She loves reading; she reads every day."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Punctuation in Sentences",
        objective: "obj_008",
        text: `
          <h3>Punctuation Rules</h3>
          <p>Correct punctuation is essential for clear writing.</p>
          
          <div class="example-box">
            <strong>📌 Periods (.)</strong>
            <ul>
              <li>Ends declarative sentences: <em>"I walk to school."</em></li>
              <li>Ends imperative sentences: <em>"Please close the door."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Question Marks (?)</strong>
            <ul>
              <li>Ends interrogative sentences: <em>"Where are you going?"</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Exclamation Points (!)</strong>
            <ul>
              <li>Shows strong emotion: <em>"What a beautiful day!"</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Commas (,)</strong>
            <ul>
              <li>Separate items in a list: <em>"I bought apples, oranges, and bananas."</em></li>
              <li>Before coordinating conjunctions: <em>"I wanted to go, but I was tired."</em></li>
              <li>After dependent clauses: <em>"Because I was tired, I went home."</em></li>
              <li>For non-essential clauses: <em>"My brother, who lives in London, is coming."</em></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Semicolons (;)</strong>
            <ul>
              <li>Join related independent clauses: <em>"I love reading; my sister loves writing."</em></li>
              <li>Separate items in a list with commas: <em>"I visited Paris, France; Rome, Italy; and Madrid, Spain."</em></li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🏗️ Sentence Types</h4>
          <ul>
            <li><strong>Simple:</strong> One independent clause</li>
            <li><strong>Compound:</strong> Two+ independent clauses</li>
            <li><strong>Complex:</strong> One independent + dependent</li>
            <li><strong>Compound-Complex:</strong> Multiple independent + dependent</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Every sentence needs a subject and verb</li>
            <li>✓ Avoid fragments and run-ons</li>
            <li>✓ Use commas and conjunctions correctly</li>
            <li>✓ Vary sentence structures in writing</li>
          </ul>
        </div>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "A sentence must be short",
        correction: "Sentences can be any length as long as they're complete",
        explanation: "A sentence can be one word ('Stop!') or 100 words. Length doesn't determine correctness."
      },
      {
        id: "mis_002",
        misconception: "You can join two sentences with just a comma",
        correction: "This creates a comma splice. Use FANBOYS or punctuation.",
        explanation: "Comma splices are grammatically incorrect in formal writing."
      },
      {
        id: "mis_003",
        misconception: "Complex sentences are better than simple sentences",
        correction: "Good writing uses a variety of sentence types",
        explanation: "Simple sentences can be effective for clarity and emphasis."
      },
      {
        id: "mis_004",
        misconception: "Starting a sentence with 'Because' or 'But' is wrong",
        correction: "It's acceptable in modern English but must be a complete thought",
        explanation: "You can start with conjunctions as long as you complete the thought."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Business Writing",
        description: "Well-structured sentences improve professional communication.",
        example: "Use simple sentences for clarity in emails, complex sentences for detailed reports."
      },
      {
        id: "app_002",
        title: "Academic Writing",
        description: "Proper sentence structure is essential for research papers and essays.",
        example: "Compound-complex sentences show sophisticated thinking in academic writing."
      },
      {
        id: "app_003",
        title: "Creative Writing",
        description: "Varying sentence structure creates rhythm and interest in stories.",
        example: "Mix short simple sentences for impact with longer complex sentences for description."
      },
      {
        id: "app_004",
        title: "Journalism",
        description: "Clear sentence structure is crucial for news reporting.",
        example: "Use simple and compound sentences for clarity in headlines and lead paragraphs."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Sentence", definition: "A group of words expressing a complete thought." },
    { term: "Subject", definition: "The person or thing performing the action." },
    { term: "Predicate", definition: "The part of the sentence containing the verb and describing the subject." },
    { term: "Independent Clause", definition: "A clause that can stand alone as a complete sentence." },
    { term: "Dependent Clause", definition: "A clause that cannot stand alone and needs an independent clause." },
    { term: "Coordinating Conjunction", definition: "FANBOYS: For, And, Nor, But, Or, Yet, So." },
    { term: "Subordinating Conjunction", definition: "Words that introduce dependent clauses (e.g., because, although)." },
    { term: "Sentence Fragment", definition: "An incomplete sentence missing a subject or verb." },
    { term: "Run-On Sentence", definition: "Two or more independent clauses joined without proper punctuation." },
    { term: "Comma Splice", definition: "Two independent clauses joined with only a comma." }
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
      question: "What are the two main parts of a sentence?",
      type: "multiple_choice",
      options: ["Subject and Object", "Subject and Predicate", "Noun and Verb", "Clause and Phrase"],
      answer: "Subject and Predicate",
      explanation: "Every complete sentence has a subject (who/what) and a predicate (what they do or are)."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is a simple sentence?",
      type: "multiple_choice",
      options: ["I walked to the store, and I bought milk.", "I walked to the store.", "Because I was tired.", "I walked to the store; I bought milk."],
      answer: "I walked to the store.",
      explanation: "This is a simple sentence with one independent clause."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which is a compound sentence?",
      type: "multiple_choice",
      options: ["I walked to the store.", "I walked to the store, and I bought milk.", "Because I was tired, I walked.", "The store that I went to was big."],
      answer: "I walked to the store, and I bought milk.",
      explanation: "This has two independent clauses joined by 'and'."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "easy",
      question: "Which is a complex sentence?",
      type: "multiple_choice",
      options: ["I walked to the store.", "I walked to the store, and I bought milk.", "Because I was tired, I walked.", "I walked to the store; I bought milk."],
      answer: "Because I was tired, I walked.",
      explanation: "This has one independent ('I walked') and one dependent clause ('Because I was tired')."
    },
    {
      id: "prac_005",
      objective: "obj_003",
      difficulty: "medium",
      question: "What is the conjunction in: 'She was tired, but she continued working.'?",
      type: "multiple_choice",
      options: ["was", "but", "she", "continued"],
      answer: "but",
      explanation: "'But' is a coordinating conjunction joining two independent clauses."
    },
    {
      id: "prac_006",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the subordinating conjunction in: 'Although she was tired, she worked.'?",
      type: "multiple_choice",
      options: ["Although", "was", "she", "worked"],
      answer: "Although",
      explanation: "'Although' introduces the dependent clause."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is a compound-complex sentence?",
      type: "multiple_choice",
      options: [
        "I walked to the store.",
        "I walked to the store, and I bought milk.",
        "Because I was tired, I walked to the store, and I bought milk.",
        "I walked to the store because I needed milk."
      ],
      answer: "Because I was tired, I walked to the store, and I bought milk.",
      explanation: "This has two independent clauses and one dependent clause."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Which is a sentence fragment?",
      type: "multiple_choice",
      options: ["I walked.", "Because I was tired.", "I walked slowly.", "She was happy."],
      answer: "Because I was tired.",
      explanation: "This is a dependent clause that cannot stand alone."
    },
    {
      id: "prac_009",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is a run-on sentence?",
      type: "multiple_choice",
      options: ["I walked to the store.", "I walked to the store I bought milk.", "I walked to the store, and I bought milk.", "I walked to the store; I bought milk."],
      answer: "I walked to the store I bought milk.",
      explanation: "Two independent clauses are joined without punctuation or conjunction."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is a comma splice?",
      type: "multiple_choice",
      options: ["I walked to the store, and I bought milk.", "I walked to the store, I bought milk.", "I walked to the store; I bought milk.", "I walked to the store. I bought milk."],
      answer: "I walked to the store, I bought milk.",
      explanation: "Two independent clauses joined with only a comma."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "How many independent clauses are in: 'Because he was tired, he went home, and he slept.'?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "Independent clauses: 'he went home' and 'he slept'. 'Because he was tired' is dependent."
    },
    {
      id: "prac_012",
      objective: "obj_009",
      difficulty: "hard",
      question: "How many dependent clauses are in: 'When she arrived, he had already left, but she didn't know.'?",
      type: "multiple_choice",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "The dependent clause is 'When she arrived'. The others are independent."
    },
    {
      id: "prac_013",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence uses correct punctuation?",
      type: "multiple_choice",
      options: [
        "I went to the store and I bought milk",
        "I went to the store, and I bought milk.",
        "I went to the store, I bought milk.",
        "I went to the store; and I bought milk."
      ],
      answer: "I went to the store, and I bought milk.",
      explanation: "A comma before the coordinating conjunction joins two independent clauses."
    },
    {
      id: "prac_014",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence has correct punctuation?",
      type: "multiple_choice",
      options: [
        "Although she was tired she worked.",
        "Although she was tired, she worked.",
        "Although, she was tired she worked.",
        "Although she was tired; she worked."
      ],
      answer: "Although she was tired, she worked.",
      explanation: "A comma is needed after the dependent clause when it comes first."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which sentence has a misplaced dependent clause?",
      type: "multiple_choice",
      options: [
        "He laughed when he heard the joke.",
        "When he heard the joke, he laughed.",
        "He when he heard the joke laughed.",
        "He heard the joke when he laughed."
      ],
      answer: "He when he heard the joke laughed.",
      explanation: "The dependent clause should not interrupt the independent clause."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Which is the most effective sentence?",
      type: "multiple_choice",
      options: [
        "I went to the store, and I bought milk, and I came home, and I made cereal.",
        "I went to the store, bought milk, came home, and made cereal.",
        "I went to the store. I bought milk. I came home. I made cereal.",
        "I went to the store and bought milk and came home and made cereal."
      ],
      answer: "I went to the store, bought milk, came home, and made cereal.",
      explanation: "This uses parallel structure with a compound predicate."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_sentence_structure",
    title: "Sentence Structure Quiz",
    description: "Test your understanding of sentence structures and types",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the subject in: 'The tall man walked quickly.'?",
        type: "short_answer",
        answer_key: "man",
        explanation: "'Man' is the subject. 'The tall' describes the subject."
      },
      {
        id: "ass_002",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the predicate in: 'The dog barked loudly.'?",
        type: "short_answer",
        answer_key: "barked loudly",
        explanation: "'Barked loudly' is the predicate telling what the subject did."
      },
      {
        id: "ass_003",
        objective: "obj_002",
        difficulty: "easy",
        question: "Write a simple sentence with a compound subject.",
        type: "short_answer",
        answer_key: "John and Mary went to the store.",
        explanation: "'John and Mary' is a compound subject with one predicate."
      },
      {
        id: "ass_004",
        objective: "obj_003",
        difficulty: "easy",
        question: "Write a compound sentence using 'but'.",
        type: "short_answer",
        answer_key: "I wanted to go, but I was tired.",
        explanation: "Two independent clauses joined by 'but'."
      },
      {
        id: "ass_005",
        objective: "obj_004",
        difficulty: "medium",
        question: "Write a complex sentence beginning with 'Because'.",
        type: "short_answer",
        answer_key: "Because I was tired, I went home.",
        explanation: "A dependent clause ('Because I was tired') followed by an independent clause."
      },
      {
        id: "ass_006",
        objective: "obj_005",
        difficulty: "medium",
        question: "Write a compound-complex sentence.",
        type: "short_answer",
        answer_key: "Because I was tired, I went home, but my friends stayed.",
        explanation: "One dependent clause + two independent clauses."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Correct this fragment: 'Running through the forest.'",
        type: "short_answer",
        answer_key: "The deer was running through the forest.",
        explanation: "Added a subject and verb to complete the thought."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "medium",
        question: "Correct this run-on: 'I love reading I read every day.'",
        type: "short_answer",
        answer_key: "I love reading, and I read every day.",
        explanation: "Added a comma and conjunction to join the clauses."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Correct this comma splice: 'She loves music, she plays piano.'",
        type: "short_answer",
        answer_key: "She loves music, and she plays piano.",
        explanation: "Added a conjunction to properly join the clauses."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Identify the sentence type and explain: 'Although he was late, he still came to the party, and he apologized.'",
        type: "short_answer",
        answer_key: "Compound-complex sentence. It has one dependent clause ('Although he was late') and two independent clauses ('he still came to the party' and 'he apologized') joined by 'and'.",
        explanation: "This combines elements of both compound and complex sentences."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "45 minutes",
      objectives: [
        "Identify the four sentence structures",
        "Create sentences of each type",
        "Correct common sentence errors"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What makes a sentence?" },
        { time: "5-10 min", activity: "Direct Instruction - Subjects and Predicates" },
        { time: "10-20 min", activity: "Direct Instruction - Four Sentence Types" },
        { time: "20-30 min", activity: "Guided Practice - Identifying types" },
        { time: "30-35 min", activity: "Direct Instruction - Fragments and Run-Ons" },
        { time: "35-40 min", activity: "Independent Practice - Corrections" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Subject and Predicate",
        // ... full answer key
      },
      assessment: {
        ass_001: "man",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Analyze sentence structures in a newspaper article",
      "Write a paragraph using all four sentence types",
      "Create a poster showing the four sentence structures",
      "Edit a poorly written text for sentence structure"
    ],
    differentiation: {
      struggling: [
        "Start with simple sentences only",
        "Provide sentence frames",
        "Use color-coding for clauses",
        "Practice with fill-in-the-blank exercises"
      ],
      advanced: [
        "Analyze complex literary sentences",
        "Write a story with varied sentence structures",
        "Explain the effect of different structures",
        "Create a sentence diagramming exercise"
      ]
    }
  },

  // ============================================================
  // VISUAL RESOURCES
  // ============================================================
  visuals: [
    {
      id: "vis_001",
      type: "diagram",
      title: "Sentence Structure Flowchart",
      description: "Flowchart showing how to identify sentence types",
      url: "/diagrams/sentence-structures.png",
      alt: "Flowchart for identifying sentence structures"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Sentence Type Comparison Chart",
      description: "Chart comparing all four sentence types with examples",
      url: "/diagrams/sentence-types-chart.png",
      alt: "Comparison chart of sentence types"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Common Sentence Errors",
      description: "Infographic showing fragments, run-ons, and how to fix them",
      url: "/diagrams/sentence-errors.png",
      alt: "Common sentence errors and corrections"
    }
  ]
};