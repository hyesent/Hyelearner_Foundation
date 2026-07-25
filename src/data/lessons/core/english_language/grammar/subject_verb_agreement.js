// Location: src/data/lessons/core/english_language/grammar/subject_verb_agreement.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_subject_verb_agreement",
  subject: "English Language",
  topic: "Grammar",
  name: "Subject-Verb Agreement",
  icon: "🤝",
  grade_level: "JSS1 - SS3",
  estimated_duration: "40 minutes",

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
    "Knowledge of tenses",
    "Understanding of sentence structure"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_modifiers",
      name: "Modifiers",
      file: "core/english_language/grammar/modifiers.js"
    },
    {
      id: "eng_lesson_voice",
      name: "Active and Passive Voice",
      file: "core/english_language/grammar/voice.js"
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
      description: "Define subject-verb agreement and identify basic singular/plural rules",
      indicator: "Student can explain that singular subjects take singular verbs and plural subjects take plural verbs"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply subject-verb agreement with regular nouns",
      indicator: "Student can choose correct verb forms with simple subjects"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Apply subject-verb agreement with pronouns (I, you, he, she, it, we, they)",
      indicator: "Student can match verbs correctly with different pronouns"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply agreement with compound subjects joined by 'and'",
      indicator: "Student can use plural verbs with compound subjects"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Apply agreement with compound subjects joined by 'or/nor'",
      indicator: "Student can use the proximity rule (verb agrees with nearest subject)"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply agreement with indefinite pronouns",
      indicator: "Student can identify singular and plural indefinite pronouns"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Apply agreement with collective nouns",
      indicator: "Student can use singular or plural verbs based on meaning"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Apply agreement with inverted sentences and there is/are",
      indicator: "Student can identify the true subject in inverted structures"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply agreement with relative clauses and phrases",
      indicator: "Student can match verbs with antecedents in complex sentences"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Identify and correct advanced subject-verb agreement errors",
      indicator: "Student can fix all types of agreement errors in complex texts"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering Subject-Verb Agreement",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn all the rules of subject-verb agreement with clear examples and practice."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Subject-Verb Agreement?</h2>
      <p><strong>Subject-verb agreement</strong> means that the subject and verb in a sentence must match in number (singular or plural).</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">✅ Correct</h3>
          <p><strong>She walks</strong> to school.</p>
          <p><strong>They walk</strong> to school.</p>
          <p><strong>He is</strong> a teacher.</p>
          <p><strong>We are</strong> teachers.</p>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h3 class="text-red-600">❌ Incorrect</h3>
          <p><strong>She walk</strong> to school.</p>
          <p><strong>They walks</strong> to school.</p>
          <p><strong>He are</strong> a teacher.</p>
          <p><strong>We is</strong> teachers.</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Key Rule</h4>
        <ul>
          <li><strong>Singular Subject</strong> → Singular Verb (add -s/-es)</li>
          <li><strong>Plural Subject</strong> → Plural Verb (base form)</li>
          <li><strong>Exception:</strong> I and You take plural verbs (I walk, You walk)</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Basic Rules of Agreement",
        objective: "obj_001",
        text: `
          <h3>Singular vs. Plural</h3>
          <p>The basic rule is simple: singular subjects take singular verbs, and plural subjects take plural verbs.</p>
          
          <div class="example-box">
            <strong>📌 Singular Subjects (one):</strong>
            <ul>
              <li><em>He</em> <strong>runs</strong> every day.</li>
              <li><em>The dog</em> <strong>barks</strong> loudly.</li>
              <li><em>A student</em> <strong>studies</strong> hard.</li>
              <li><em>She</em> <strong>is</strong> a doctor.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Plural Subjects (more than one):</strong>
            <ul>
              <li><em>They</em> <strong>run</strong> every day.</li>
              <li><em>The dogs</em> <strong>bark</strong> loudly.</li>
              <li><em>Students</em> <strong>study</strong> hard.</li>
              <li><em>They</em> <strong>are</strong> doctors.</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Remember:</strong>
            <ul>
              <li>Most verbs add -s in the third person singular (he/she/it).</li>
              <li>Example: I walk → He walks, We run → She runs</li>
              <li>The verb 'to be' is irregular: I am, You/We/They are, He/She/It is</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Agreement with Pronouns",
        objective: "obj_003",
        text: `
          <h3>Pronoun-Verb Agreement</h3>
          <p>Different pronouns take different verb forms.</p>
          
          <div class="example-box">
            <strong>📌 Present Tense - Verb 'to walk':</strong>
            <ul>
              <li><strong>I</strong> walk (first person singular)</li>
              <li><strong>You</strong> walk (second person singular/plural)</li>
              <li><strong>He/She/It</strong> walks (third person singular)</li>
              <li><strong>We</strong> walk (first person plural)</li>
              <li><strong>They</strong> walk (third person plural)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Present Tense - Verb 'to be':</strong>
            <ul>
              <li><strong>I</strong> am a student.</li>
              <li><strong>You</strong> are a student.</li>
              <li><strong>He/She/It</strong> is a student.</li>
              <li><strong>We</strong> are students.</li>
              <li><strong>They</strong> are students.</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Past Tense - Verb 'to be':</strong>
            <ul>
              <li><strong>I</strong> was happy.</li>
              <li><strong>You</strong> were happy.</li>
              <li><strong>He/She/It</strong> was happy.</li>
              <li><strong>We</strong> were happy.</li>
              <li><strong>They</strong> were happy.</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Compound Subjects with 'And'",
        objective: "obj_004",
        text: `
          <h3>Subjects Joined by 'And'</h3>
          <p>When two or more subjects are joined by <strong>'and'</strong>, they form a plural subject and take a plural verb.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>John and Mary</strong> <strong>are</strong> coming." (Two people = plural)</li>
              <li>"<strong>The dog and the cat</strong> <strong>play</strong> together." (Two animals = plural)</li>
              <li>"<strong>My brother and I</strong> <strong>walk</strong> to school." (Two people = plural)</li>
              <li>"<strong>Bread and butter</strong> <strong>is</strong> my favorite." (One item = singular)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Exception:</strong> When 'and' joins parts of a single item (like bread and butter, fish and chips), the subject is singular.
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>"<strong>Peanut butter and jelly</strong> <strong>is</strong> delicious." (one sandwich)</li>
              <li>"<strong>The writer and director</strong> <strong>is</strong> here." (one person with two roles)</li>
              <li>"<strong>The writer and the director</strong> <strong>are</strong> here." (two different people)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Compound Subjects with 'Or/Nor'",
        objective: "obj_005",
        text: `
          <h3>Subjects Joined by 'Or/Nor'</h3>
          <p>When subjects are joined by <strong>'or'</strong> or <strong>'nor'</strong>, the verb agrees with the subject nearest to it. This is called the <strong>proximity rule</strong>.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"<strong>John or Mary</strong> <strong>is</strong> coming." (Mary is nearest)</li>
              <li>"<strong>Neither the dog nor the cats</strong> <strong>are</strong> hungry." (cats is plural)</li>
              <li>"<strong>Neither the cats nor the dog</strong> <strong>is</strong> hungry." (dog is singular)</li>
              <li>"<strong>Either the teacher or the students</strong> <strong>are</strong> responsible." (students is plural)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> Always look at the subject closest to the verb to determine agreement.
          </div>
          
          <div class="example-box">
            <strong>📌 More Examples:</strong>
            <ul>
              <li>"<strong>Either the students or the teacher</strong> <strong>is</strong> responsible." (teacher is singular)</li>
              <li>"<strong>Neither she nor they</strong> <strong>are</strong> coming." (they is plural)</li>
              <li>"<strong>Neither they nor she</strong> <strong>is</strong> coming." (she is singular)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Indefinite Pronouns",
        objective: "obj_006",
        text: `
          <h3>Indefinite Pronouns</h3>
          <p>Some pronouns are always singular, some are always plural, and some can be both.</p>
          
          <div class="example-box">
            <strong>📌 Always Singular (take singular verbs):</strong>
            <ul>
              <li><strong>Anyone, anyone, anything, everything</strong></li>
              <li><strong>Someone, somebody, something</strong></li>
              <li><strong>Everyone, everybody, everything</strong></li>
              <li><strong>No one, nobody, nothing</strong></li>
              <li><strong>Each, either, neither</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples (Singular):</strong>
            <ul>
              <li>"<strong>Everyone</strong> <strong>is</strong> invited to the party."</li>
              <li>"<strong>Somebody</strong> <strong>has</strong> called for you."</li>
              <li>"<strong>Nothing</strong> <strong>was</strong> said about the issue."</li>
              <li>"<strong>Each</strong> of the students <strong>has</strong> a book."</li>
              <li>"<strong>Neither</strong> of the answers <strong>is</strong> correct."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Always Plural (take plural verbs):</strong>
            <ul>
              <li><strong>Few, many, both, several</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples (Plural):</strong>
            <ul>
              <li>"<strong>Few</strong> <strong>are</strong> chosen for the program."</li>
              <li>"<strong>Both</strong> of the books <strong>are</strong> interesting."</li>
              <li>"<strong>Several</strong> of the students <strong>have</strong> finished."</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Can be Singular or Plural:</strong>
            <ul>
              <li><strong>All, any, most, none, some</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples (Both):</strong>
            <ul>
              <li>"<strong>All</strong> of the cake <strong>is</strong> gone." (uncountable = singular)</li>
              <li>"<strong>All</strong> of the cookies <strong>are</strong> gone." (countable = plural)</li>
              <li>"<strong>Some</strong> of the water <strong>is</strong> spilled." (uncountable = singular)</li>
              <li>"<strong>Some</strong> of the students <strong>are</strong> tired." (countable = plural)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Collective Nouns",
        objective: "obj_007",
        text: `
          <h3>Collective Nouns</h3>
          <p><strong>Collective nouns</strong> name a group of people or things. They can be singular or plural depending on meaning.</p>
          
          <div class="example-box">
            <strong>📌 Common Collective Nouns:</strong>
            <ul>
              <li><strong>Team, family, staff, audience</strong></li>
              <li><strong>Committee, government, group</strong></li>
              <li><strong>Flock, herd, crowd, jury</strong></li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Singular (acting as one unit):</strong>
            <ul>
              <li>"The <strong>team</strong> <strong>plays</strong> well together." (one team)</li>
              <li>"My <strong>family</strong> <strong>is</strong> coming to visit." (one family)</li>
              <li>"The <strong>audience</strong> <strong>applauds</strong> loudly." (one audience)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Plural (acting as individuals):</strong>
            <ul>
              <li>"The <strong>team</strong> <strong>are</strong> arguing among themselves." (individual members)</li>
              <li>"My <strong>family</strong> <strong>have</strong> different opinions." (individual members)</li>
              <li>"The <strong>jury</strong> <strong>were</strong> divided in their decision." (individual members)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>💡 Tip:</strong> In American English, collective nouns are usually singular. In British English, they can be singular or plural.
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Inverted Sentences and 'There'",
        objective: "obj_008",
        text: `
          <h3>Inverted Sentences</h3>
          <p>In inverted sentences, the verb comes before the subject. The subject determines agreement.</p>
          
          <div class="example-box">
            <strong>📌 'There is' vs 'There are':</strong>
            <ul>
              <li>"<strong>There is</strong> a book on the table." (singular)</li>
              <li>"<strong>There are</strong> books on the table." (plural)</li>
              <li>"<strong>There is</strong> a pen and two pencils." (nearest subject is singular)</li>
              <li>"<strong>There are</strong> two pencils and a pen." (nearest subject is plural)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Other Inverted Structures:</strong>
            <ul>
              <li>"<strong>Here is</strong> the book you requested." (singular)</li>
              <li>"<strong>Here are</strong> the books you requested." (plural)</li>
              <li>"<strong>Where is</strong> the teacher?" (singular)</li>
              <li>"<strong>Where are</strong> the teachers?" (plural)</li>
            </ul>
          </div>
          
          <div class="warning-box">
            <strong>⚠️ Important:</strong> The verb agrees with the subject (which comes AFTER the verb in these sentences).
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Intervening Phrases and Clauses",
        objective: "obj_009",
        text: `
          <h3>Intervening Phrases</h3>
          <p>Don't let phrases between the subject and verb distract you. The subject and verb must agree regardless of intervening words.</p>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li>"The <strong>student</strong> <strong>reads</strong> every day." (subject = student)</li>
              <li>"The <strong>student</strong> <strong>reads</strong> with his classmates." (subject = student, not classmates)</li>
              <li>"The <strong>students</strong> <strong>read</strong> every day." (subject = students)</li>
              <li>"The <strong>book</strong> <strong>is</strong> on the shelf." (subject = book)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Intervening Prepositional Phrases:</strong>
            <ul>
              <li>"The <strong>box</strong> of chocolates <strong>is</strong> on the table." (subject = box)</li>
              <li>"The <strong>boxes</strong> of chocolates <strong>are</strong> on the table." (subject = boxes)</li>
              <li>"The <strong>teacher</strong> with her students <strong>is</strong> leaving." (subject = teacher)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Relative Clauses:</strong>
            <ul>
              <li>"This is one of the <strong>books</strong> that <strong>are</strong> required." (relative clause refers to books)</li>
              <li>"She is the only one of the <strong>students</strong> who <strong>has</strong> finished." (relative clause refers to one)</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🤝 Agreement Rules</h4>
          <ul>
            <li>✓ Singular subjects → singular verbs</li>
            <li>✓ Plural subjects → plural verbs</li>
            <li>✓ Compound subjects with 'and' → plural</li>
            <li>✓ Compound subjects with 'or/nor' → nearest subject</li>
            <li>✓ Indefinite pronouns → usually singular</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Find the subject first</li>
            <li>✓ Ignore intervening phrases</li>
            <li>✓ Check for inverted sentences</li>
            <li>✓ Watch for collective nouns</li>
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
        misconception: "Words between the subject and verb affect agreement",
        correction: "Only the subject matters, regardless of intervening words",
        explanation: "In 'The box of chocolates is delicious,' 'box' is the subject, not 'chocolates.'"
      },
      {
        id: "mis_002",
        misconception: "Collective nouns are always singular",
        correction: "Collective nouns can be singular or plural depending on meaning",
        explanation: "Use singular when the group acts as one. Use plural when members act individually."
      },
      {
        id: "mis_003",
        misconception: "Indefinite pronouns like 'everyone' are plural",
        correction: "Indefinite pronouns ending in -one, -body, -thing are singular",
        explanation: "'Everyone' means 'every person' but takes a singular verb: 'Everyone is here.'"
      },
      {
        id: "mis_004",
        misconception: "The subject in 'There is/are' is 'there'",
        correction: "'There' is an expletive, not the subject",
        explanation: "The subject comes after the verb: 'There is a book' (subject = book)."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Professional Writing",
        description: "Correct subject-verb agreement shows professionalism in writing.",
        example: "Emails, reports, and presentations must have correct agreement for credibility."
      },
      {
        id: "app_002",
        title: "Academic Writing",
        description: "Subject-verb agreement is essential for clear academic communication.",
        example: "Research papers require precise agreement for clarity and accuracy."
      },
      {
        id: "app_003",
        title: "Public Speaking",
        description: "Correct agreement in speech makes you sound educated and confident.",
        example: "Politicians and public speakers must use correct grammar to be taken seriously."
      },
      {
        id: "app_004",
        title: "Editing and Proofreading",
        description: "Subject-verb agreement is a key area to check when editing.",
        example: "Professional editors always check for agreement errors in documents."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Subject-Verb Agreement", definition: "The rule that subjects and verbs must match in number." },
    { term: "Singular", definition: "Refers to one person, place, thing, or idea." },
    { term: "Plural", definition: "Refers to more than one person, place, thing, or idea." },
    { term: "Compound Subject", definition: "Two or more subjects joined by 'and' or 'or'/'nor'." },
    { term: "Indefinite Pronoun", definition: "A pronoun that doesn't refer to a specific person or thing." },
    { term: "Collective Noun", definition: "A noun that names a group of people or things." },
    { term: "Intervening Phrase", definition: "Words that come between the subject and verb." },
    { term: "Inverted Sentence", definition: "A sentence where the verb comes before the subject." }
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
      question: "Choose the correct verb: 'The boy ____ to school every day.'",
      type: "multiple_choice",
      options: ["walk", "walks", "walked", "walking"],
      answer: "walks",
      explanation: "'Boy' is singular, so the verb must be 'walks' (singular)."
    },
    {
      id: "prac_002",
      objective: "obj_001",
      difficulty: "easy",
      question: "Choose the correct verb: 'The children ____ in the park.'",
      type: "multiple_choice",
      options: ["play", "plays", "played", "playing"],
      answer: "play",
      explanation: "'Children' is plural, so the verb must be 'play' (plural)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Choose the correct verb: 'She ____ a good student.'",
      type: "multiple_choice",
      options: ["am", "is", "are", "be"],
      answer: "is",
      explanation: "'She' is third person singular, so the verb is 'is'."
    },
    {
      id: "prac_004",
      objective: "obj_003",
      difficulty: "easy",
      question: "Choose the correct verb: 'They ____ playing football.'",
      type: "multiple_choice",
      options: ["am", "is", "are", "be"],
      answer: "are",
      explanation: "'They' is third person plural, so the verb is 'are'."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "Choose the correct verb: 'John and Mary ____ coming to the party.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "Compound subjects joined by 'and' take a plural verb."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Choose the correct verb: 'Neither John nor Mary ____ here yet.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "With 'nor,' the verb agrees with the nearest subject (Mary - singular)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Choose the correct verb: 'Neither Mary nor the boys ____ coming.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "be"],
      answer: "are",
      explanation: "The nearest subject is 'boys' (plural), so the verb is 'are'."
    },
    {
      id: "prac_008",
      objective: "obj_006",
      difficulty: "medium",
      question: "Choose the correct verb: 'Everyone in the class ____ homework.'",
      type: "multiple_choice",
      options: ["has", "have", "had", "having"],
      answer: "has",
      explanation: "'Everyone' is an indefinite pronoun that is always singular."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "Choose the correct verb: 'Some of the water ____ spilled.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "'Water' is uncountable, so 'some' is treated as singular."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Choose the correct verb: 'The team ____ playing well.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The team is acting as one unit, so it's singular."
    },
    {
      id: "prac_011",
      objective: "obj_008",
      difficulty: "hard",
      question: "Choose the correct verb: 'There ____ many books on the shelf.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "been"],
      answer: "are",
      explanation: "The subject is 'books' (plural), so the verb is 'are'."
    },
    {
      id: "prac_012",
      objective: "obj_008",
      difficulty: "hard",
      question: "Choose the correct verb: 'Here ____ the answers to the questions.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "been"],
      answer: "are",
      explanation: "The subject is 'answers' (plural), so the verb is 'are'."
    },
    {
      id: "prac_013",
      objective: "obj_009",
      difficulty: "hard",
      question: "Choose the correct verb: 'The box of chocolates ____ on the table.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "were"],
      answer: "is",
      explanation: "The subject is 'box' (singular), not 'chocolates'."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Choose the correct verb: 'This is one of the books that ____ required.'",
      type: "multiple_choice",
      options: ["is", "are", "was", "been"],
      answer: "are",
      explanation: "The relative clause refers to 'books' (plural), so the verb is 'are'."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "Correct this sentence: 'The group of students were arguing.'",
      type: "multiple_choice",
      options: [
        "The group of students is arguing.",
        "The group of students were arguing.",
        "The group of students was arguing.",
        "The group of students have arguing."
      ],
      answer: "The group of students is arguing.",
      explanation: "'Group' is singular (acting as one), so use 'is'."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "Correct this sentence: 'Neither the teacher nor the students is happy.'",
      type: "multiple_choice",
      options: [
        "Neither the teacher nor the students is happy.",
        "Neither the teacher nor the students are happy.",
        "Neither the teacher nor the students was happy.",
        "Neither the teacher nor the students have happy."
      ],
      answer: "Neither the teacher nor the students are happy.",
      explanation: "The nearest subject is 'students' (plural), so use 'are'."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_subject_verb_agreement",
    title: "Subject-Verb Agreement Quiz",
    description: "Test your understanding of subject-verb agreement rules",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the rule for subject-verb agreement?",
        type: "short_answer",
        answer_key: "Singular subjects take singular verbs; plural subjects take plural verbs.",
        explanation: "The subject and verb must match in number (singular or plural)."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "Complete: 'She ____ to school every day.' (walk)",
        type: "short_answer",
        answer_key: "walks",
        explanation: "'She' is singular, so the verb must be 'walks'."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Complete: 'They ____ to school every day.' (walk)",
        type: "short_answer",
        answer_key: "walk",
        explanation: "'They' is plural, so the verb must be 'walk'."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Complete: 'John and Mary ____ good students.' (is/are)",
        type: "short_answer",
        answer_key: "are",
        explanation: "Two subjects joined by 'and' take a plural verb."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Complete: 'Neither John nor Mary ____ here.' (is/are)",
        type: "short_answer",
        answer_key: "is",
        explanation: "With 'nor,' the verb agrees with the nearest subject (Mary - singular)."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Complete: 'Everyone ____ happy about the news.' (is/are)",
        type: "short_answer",
        answer_key: "is",
        explanation: "'Everyone' is a singular indefinite pronoun."
      },
      {
        id: "ass_007",
        objective: "obj_006",
        difficulty: "medium",
        question: "Complete: 'Few ____ chosen for the position.' (is/are)",
        type: "short_answer",
        answer_key: "are",
        explanation: "'Few' is a plural indefinite pronoun."
      },
      {
        id: "ass_008",
        objective: "obj_007",
        difficulty: "medium",
        question: "Complete: 'The staff ____ meeting in the conference room.' (is/are)",
        type: "short_answer",
        answer_key: "is",
        explanation: "The staff is acting as one unit, so singular is used."
      },
      {
        id: "ass_009",
        objective: "obj_008",
        difficulty: "hard",
        question: "Complete: 'There ____ many reasons for this decision.' (is/are)",
        type: "short_answer",
        answer_key: "are",
        explanation: "'Reasons' is plural, so the verb is 'are'."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "Correct this sentence and explain: 'The box of chocolates were delicious.'",
        type: "short_answer",
        answer_key: "The box of chocolates was delicious. (The subject is 'box' - singular, so the verb should be 'was'. The phrase 'of chocolates' does not affect the agreement.)",
        explanation: "The subject 'box' is singular, so it takes a singular verb regardless of intervening words."
      }
    ]
  },

  // ============================================================
  // TEACHER RESOURCES
  // ============================================================
  teacherResources: {
    lessonPlan: {
      duration: "40 minutes",
      objectives: [
        "Understand the basic rules of subject-verb agreement",
        "Apply agreement rules in various contexts",
        "Identify and correct agreement errors"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is agreement?" },
        { time: "5-15 min", activity: "Direct Instruction - Basic Rules" },
        { time: "15-25 min", activity: "Direct Instruction - Complex Rules" },
        { time: "25-35 min", activity: "Guided Practice - Identifying Errors" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "walks",
        // ... full answer key
      },
      assessment: {
        ass_001: "Singular subjects take singular verbs; plural subjects take plural verbs.",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a poster of subject-verb agreement rules",
      "Write sentences demonstrating each rule",
      "Find and correct agreement errors in a newspaper article",
      "Create a quiz for classmates"
    ],
    differentiation: {
      struggling: [
        "Start with basic singular/plural rules",
        "Use visual aids",
        "Practice with simple sentences first",
        "Provide rule reference cards"
      ],
      advanced: [
        "Analyze complex agreement issues",
        "Write about exceptions to the rules",
        "Research historical changes in agreement",
        "Create teaching materials for peers"
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
      title: "Subject-Verb Agreement Rules",
      description: "A comprehensive diagram of all agreement rules",
      url: "/diagrams/subject-verb-agreement.png",
      alt: "Diagram showing subject-verb agreement rules"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Singular vs Plural Verbs Chart",
      description: "Chart showing singular and plural verb forms",
      url: "/diagrams/verb-forms-chart.png",
      alt: "Chart comparing singular and plural verb forms"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Common Agreement Errors",
      description: "Infographic showing common mistakes and corrections",
      url: "/diagrams/agreement-errors.png",
      alt: "Common subject-verb agreement errors"
    }
  ]
};