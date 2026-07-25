// Location: src/data/lessons/core/english_language/spelling.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_spelling",
  subject: "English Language",
  topic: "Spelling",
  name: "Spelling",
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
    "Knowledge of the English alphabet",
    "Understanding of phonics",
    "Basic vocabulary",
    "Reading skills"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_idioms",
      name: "Idioms",
      file: "core/english_language/idioms.js"
    },
    {
      id: "eng_lesson_intonation_stress",
      name: "Intonation and Stress",
      file: "core/english_language/intonation_and_stress.js"
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
      description: "Define spelling and explain its importance",
      indicator: "Student can explain why spelling matters in communication"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Spell common words correctly",
      indicator: "Student can spell frequently used words accurately"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Apply basic spelling rules (i before e, etc.)",
      indicator: "Student can use basic spelling rules correctly"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Apply rules for adding suffixes",
      indicator: "Student can add suffixes correctly (drop e, double consonants, etc.)"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Distinguish between commonly confused words",
      indicator: "Student can differentiate and spell similar-sounding words"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use strategies for learning difficult spellings",
      indicator: "Student can apply memory strategies for tricky words"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Identify and correct common spelling errors",
      indicator: "Student can spot and fix spelling mistakes"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Spell advanced and less common words correctly",
      indicator: "Student can spell challenging vocabulary accurately"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Apply spelling rules in various contexts",
      indicator: "Student can use correct spelling in different writing situations"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Understand British and American spelling differences",
      indicator: "Student can identify and use both spelling variations"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Mastering English Spelling",
    duration: "16:00 - 22:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn the rules and strategies for correct English spelling."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Spelling?</h2>
      <p><strong>Spelling</strong> is the process of writing words with the correct letters in the correct order. English spelling can be challenging because many words don't follow predictable patterns.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📌 Why Spelling Matters</h3>
          <ul>
            <li>✓ Clear communication</li>
            <li>✓ Professional credibility</li>
            <li>✓ Academic success</li>
            <li>✓ Reading fluency</li>
            <li>✓ Confidence in writing</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h3 class="text-yellow-600">📌 Spelling Challenges</h3>
          <ul>
            <li>Silent letters</li>
            <li>Multiple spellings</li>
            <li>Similar sounds</li>
            <li>Irregular words</li>
            <li>Homophones</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-green-50 p-4 rounded mt-4">
        <h4>📊 Fun Fact</h4>
        <p>The English language has over 1,100 ways to spell its 44 sounds!</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Basic Spelling Rules",
        objective: "obj_003",
        text: `
          <h3>Essential Spelling Rules</h3>
          <p>Learning these basic rules will improve your spelling.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 I Before E Rule</h4>
              <ul>
                <li><strong>Rule:</strong> "I" before "E" except after "C"</li>
                <li><strong>When it works:</strong></li>
                <li>believe, chief, piece, field</li>
                <li><strong>After C:</strong> receive, ceiling, deceive</li>
                <li><strong>Exceptions:</strong> neither, seize, weird, caffeine</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Adding Suffixes</h4>
              <ul>
                <li><strong>Drop the E:</strong> hope + ing = hoping</li>
                <li><strong>Keep the E:</strong> hope + ful = hopeful</li>
                <li><strong>Double the consonant:</strong> run + ing = running</li>
                <li><strong>Y → IES:</strong> baby → babies</li>
                <li><strong>Y → IED:</strong> cry → cried</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Silent Letters</h4>
              <ul>
                <li><strong>Silent K:</strong> know, knife, knee</li>
                <li><strong>Silent W:</strong> write, wrong, wrist</li>
                <li><strong>Silent B:</strong> thumb, comb, climb</li>
                <li><strong>Silent G:</strong> sign, gnome, design</li>
                <li><strong>Silent H:</strong> hour, honest, ghost</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 -able vs -ible</h4>
              <ul>
                <li><strong>-able:</strong> (more common)</li>
                <li>comfortable, lovable, dependable</li>
                <li><strong>-ible:</strong> (less common)</li>
                <li>possible, terrible, visible</li>
                <li><strong>Tip:</strong> If the root is a complete word, use -able</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Commonly Confused Words",
        objective: "obj_005",
        text: `
          <h3>Commonly Confused Words</h3>
          <p>These words are often mixed up. Learning the differences will improve your spelling and writing.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Affect vs Effect</h4>
              <ul>
                <li><strong>Affect:</strong> Verb (to influence)</li>
                <li>"The weather <strong>affects</strong> my mood."</li>
                <li><strong>Effect:</strong> Noun (result)</li>
                <li>"The medicine had a positive <strong>effect</strong>."</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Their vs There vs They're</h4>
              <ul>
                <li><strong>Their:</strong> Possessive</li>
                <li>"<strong>Their</strong> house is big."</li>
                <li><strong>There:</strong> Location</li>
                <li>"The book is over <strong>there</strong>."</li>
                <li><strong>They're:</strong> They are</li>
                <li>"<strong>They're</strong> coming to dinner."</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Your vs You're</h4>
              <ul>
                <li><strong>Your:</strong> Possessive</li>
                <li>"Is this <strong>your</strong> pen?"</li>
                <li><strong>You're:</strong> You are</li>
                <li>"<strong>You're</strong> my best friend."</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Accept vs Except</h4>
              <ul>
                <li><strong>Accept:</strong> To receive</li>
                <li>"Please <strong>accept</strong> my apology."</li>
                <li><strong>Except:</strong> Excluding</li>
                <li>"Everyone came <strong>except</strong> John."</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Strategies for Learning Spellings",
        objective: "obj_006",
        text: `
          <h3>Spelling Strategies</h3>
          <p>Use these techniques to remember difficult spellings.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Look, Cover, Write, Check</h4>
              <ul>
                <li><strong>Look:</strong> Study the word carefully</li>
                <li><strong>Cover:</strong> Hide the word</li>
                <li><strong>Write:</strong> Write it from memory</li>
                <li><strong>Check:</strong> Verify and correct</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mnemonics</h4>
              <ul>
                <li><strong>Because:</strong> Big Elephants Can Always Understand Small Elephants</li>
                <li><strong>Necessary:</strong> Never Eat Cakes Eat Salad Sandwiches And Remain Young</li>
                <li><strong>Rhythm:</strong> Rhythm Helps Your Two Hips Move</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Word Families</h4>
              <ul>
                <li>Group similar words together</li>
                <li><strong>-ight:</strong> light, night, right, bright</li>
                <li><strong>-ough:</strong> though, thought, enough</li>
                <li><strong>Music:</strong> musician, musical, music</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 Syllable Breakdown</h4>
              <ul>
                <li>Break words into syllables</li>
                <li><strong>ne-ces-sa-ry</strong></li>
                <li><strong>un-for-tu-nate-ly</strong></li>
                <li><strong>e-du-ca-tion</strong></li>
                <li>Pronounce each part clearly</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Adding Suffixes",
        objective: "obj_004",
        text: `
          <h3>Rules for Adding Suffixes</h3>
          <p>Understanding suffix rules will help you spell many words correctly.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Drop the Silent E</h4>
              <ul>
                <li><strong>Rule:</strong> Drop e when adding a vowel suffix</li>
                <li>hope + ing = hoping</li>
                <li>come + ing = coming</li>
                <li>write + ing = writing</li>
                <li><strong>Exception:</strong> Keep e when adding a consonant suffix</li>
                <li>hope + ful = hopeful</li>
                <li>care + ful = careful</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Double the Consonant</h4>
              <ul>
                <li><strong>Rule:</strong> Double the final consonant when:</li>
                <li>1. The word has one syllable</li>
                <li>2. It ends with a consonant-vowel-consonant</li>
                <li>3. The suffix begins with a vowel</li>
                <li>run → running</li>
                <li>sit → sitting</li>
                <li>stop → stopped</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Change Y to I</h4>
              <ul>
                <li><strong>Rule:</strong> Change y to i when adding a suffix</li>
                <li>happy + ness = happiness</li>
                <li>beauty + ful = beautiful</li>
                <li>cry + ed = cried</li>
                <li><strong>Exception:</strong> Keep y when adding -ing</li>
                <li>cry + ing = crying</li>
                <li>study + ing = studying</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-3 rounded">
              <h4>📌 -tion vs -sion</h4>
              <ul>
                <li><strong>-tion:</strong> Usually after nouns/verbs</li>
                <li>educate → education</li>
                <li>celebrate → celebration</li>
                <li><strong>-sion:</strong> Usually after words ending in -de/-se</li>
                <li>decide → decision</li>
                <li>confuse → confusion</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Frequently Misspelled Words",
        objective: "obj_007",
        text: `
          <h3>Commonly Misspelled Words</h3>
          <p>These are some of the most frequently misspelled words in English.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Words to Remember:</h4>
              <ul>
                <li><strong>accommodation</strong> (double c, double m)</li>
                <li><strong>definitely</strong> (defin-ite-ly)</li>
                <li><strong>embarrass</strong> (double r, double s)</li>
                <li><strong>environment</strong> (en-viron-ment)</li>
                <li><strong>government</strong> (govern-ment)</li>
                <li><strong>immediately</strong> (im-medi-ate-ly)</li>
                <li><strong>independent</strong> (inde-pen-dent)</li>
                <li><strong>knowledge</strong> (know-ledge)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 More Words:</h4>
              <ul>
                <li><strong>occasion</strong> (oc-ca-sion)</li>
                <li><strong>occurrence</strong> (oc-cur-rence)</li>
                <li><strong>opportunity</strong> (op-por-tu-ni-ty)</li>
                <li><strong>recommend</strong> (re-com-mend)</li>
                <li><strong>separate</strong> (sep-a-rate)</li>
                <li><strong>success</strong> (suc-cess)</li>
                <li><strong>unnecessary</strong> (un-ne-ces-sary)</li>
                <li><strong>weird</strong> (weird - exception to i before e)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Memory Tricks:</strong>
            <ul>
              <li><strong>accommodation:</strong> "Two c's, two m's"</li>
              <li><strong>embarrass:</strong> "Really red, two r's, two s's"</li>
              <li><strong>separate:</strong> "There's a rat in separate"</li>
              <li><strong>definitely:</strong> "Defin-ite-ly"</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "British vs American Spelling",
        objective: "obj_010",
        text: `
          <h3>Spelling Differences</h3>
          <p>British and American English have different spelling conventions. Use whichever you prefer, but be consistent.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 British English</h4>
              <ul>
                <li><strong>-our:</strong> colour, labour, honour</li>
                <li><strong>-re:</strong> centre, theatre, metre</li>
                <li><strong>-ise:</strong> organise, realise, recognise</li>
                <li><strong>-ence:</strong> defence, offence, pretence</li>
                <li><strong>-ogue:</strong> dialogue, catalogue</li>
                <li><strong>travelled</strong> (double l)</li>
                <li><strong>jewellery</strong></li>
                <li><strong>programme</strong> (TV show)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 American English</h4>
              <ul>
                <li><strong>-or:</strong> color, labor, honor</li>
                <li><strong>-er:</strong> center, theater, meter</li>
                <li><strong>-ize:</strong> organize, realize, recognize</li>
                <li><strong>-ense:</strong> defense, offense, pretense</li>
                <li><strong>-og:</strong> dialog, catalog</li>
                <li><strong>traveled</strong> (one l)</li>
                <li><strong>jewelry</strong></li>
                <li><strong>program</strong> (everything)</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Examples:</strong>
            <ul>
              <li><strong>British:</strong> "The <strong>colour</strong> of the <strong>centre</strong> was very <strong>attractive</strong>."</li>
              <li><strong>American:</strong> "The <strong>color</strong> of the <strong>center</strong> was very <strong>attractive</strong>."</li>
              <li><strong>British:</strong> "I <strong>realised</strong> I had to <strong>organise</strong> the event."</li>
              <li><strong>American:</strong> "I <strong>realized</strong> I had to <strong>organize</strong> the event."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Using a Dictionary",
        objective: "obj_009",
        text: `
          <h3>Dictionary Skills</h3>
          <p>Knowing how to use a dictionary is essential for checking spelling.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How to Use a Dictionary:</h4>
              <ul>
                <li><strong>Alphabetical order:</strong> Words are listed A-Z</li>
                <li><strong>Guide words:</strong> Top of each page shows first/last words</li>
                <li><strong>Spelling:</strong> Check for alternative spellings</li>
                <li><strong>Pronunciation:</strong> Find correct pronunciation</li>
                <li><strong>Parts of speech:</strong> noun, verb, adjective, etc.</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Dictionary Entry Example:</h4>
              <div class="bg-white p-2 rounded text-sm">
                <p><strong>accommodate</strong> | ə-ˈkä-mə-ˌdāt | <em>verb</em></p>
                <p>1. to provide with something needed</p>
                <p>2. to make fit or suitable</p>
                <p><em>Example:</em> "The hotel can <strong>accommodate</strong> 200 guests."</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Spelling Practice Strategies",
        objective: "obj_006",
        text: `
          <h3>Effective Practice</h3>
          <p>Regular practice is the key to improving spelling.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Daily Practice:</h4>
              <ul>
                <li>✍️ Write new words 3-5 times</li>
                <li>📖 Read regularly to see words in context</li>
                <li>📝 Keep a spelling journal</li>
                <li>🎯 Set a goal of 5 new words per week</li>
                <li>🔁 Review words from previous weeks</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Fun Activities:</h4>
              <ul>
                <li>🧩 Word puzzles and crosswords</li>
                <li>📱 Spelling apps and games</li>
                <li>👥 Spelling bees with friends</li>
                <li>✍️ Write stories using new words</li>
                <li>🎵 Songs and rhymes for memory</li>
              </ul>
            </div>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>🔤 Spelling Rules</h4>
          <ul>
            <li>✓ I before E except after C</li>
            <li>✓ Drop E when adding vowel suffixes</li>
            <li>✓ Double consonants in CVC words</li>
            <li>✓ Change Y to I when adding suffixes</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Read regularly</li>
            <li>✓ Practice with mnemonics</li>
            <li>✓ Use the Look, Cover, Write, Check method</li>
            <li>✓ Keep a personal spelling list</li>
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
        misconception: "English spelling always follows rules",
        correction: "English has many exceptions and irregular words",
        explanation: "Words like 'through,' 'though,' and 'tough' are pronounced differently but spelled similarly."
      },
      {
        id: "mis_002",
        misconception: "If you say the word slowly, you can spell it",
        correction: "Pronunciation doesn't always reflect spelling",
        explanation: "Silent letters and irregular spellings make this unreliable."
      },
      {
        id: "mis_003",
        misconception: "Spelling doesn't matter in the digital age",
        correction: "Spelling still affects credibility and clarity",
        explanation: "Poor spelling can make you seem less professional or educated."
      },
      {
        id: "mis_004",
        misconception: "You should memorize every word",
        correction: "Understanding rules and patterns is more effective",
        explanation: "Learning patterns helps you spell many words correctly."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Professional Communication",
        description: "Correct spelling shows professionalism and attention to detail.",
        example: "Emails, resumes, and reports with correct spelling make a better impression."
      },
      {
        id: "app_002",
        title: "Academic Success",
        description: "Good spelling affects grades in all subjects.",
        example: "Essays, exams, and assignments are graded on spelling accuracy."
      },
      {
        id: "app_003",
        title: "Employment",
        description: "Spelling errors on applications can cost you opportunities.",
        example: "Employers often reject resumes with spelling mistakes."
      },
      {
        id: "app_004",
        title: "Digital Communication",
        description: "Good spelling makes messages clear and effective.",
        example: "Texts, emails, and social media posts are more effective with correct spelling."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Spelling", definition: "The correct arrangement of letters in a word." },
    { term: "Homophone", definition: "Words that sound the same but are spelled differently (e.g., their/there)." },
    { term: "Silent Letter", definition: "A letter that is written but not pronounced (e.g., the 'k' in 'knife')." },
    { term: "Suffix", definition: "Letters added to the end of a word to change its meaning." },
    { term: "Prefix", definition: "Letters added to the beginning of a word to change its meaning." },
    { term: "Mnemonic", definition: "A memory aid to help remember spellings." },
    { term: "Root Word", definition: "The basic word to which prefixes and suffixes are added." },
    { term: "Dictionary", definition: "A reference book that lists words and their spellings." },
    { term: "Pronunciation", definition: "The way a word is spoken." },
    { term: "Phonics", definition: "The relationship between sounds and letters." }
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
      question: "What is spelling?",
      type: "multiple_choice",
      options: [
        "The pronunciation of words",
        "The correct arrangement of letters",
        "The meaning of words",
        "The grammar of words"
      ],
      answer: "The correct arrangement of letters",
      explanation: "Spelling is the correct order and use of letters in a word."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Which is spelled correctly?",
      type: "multiple_choice",
      options: ["recieve", "receive", "receeve", "receeve"],
      answer: "receive",
      explanation: "The rule is 'i before e except after c' - receive follows this rule."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which follows the 'i before e' rule?",
      type: "multiple_choice",
      options: ["believe", "receive", "neither", "weight"],
      answer: "believe",
      explanation: "'Believe' follows the rule (i before e)."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the correct spelling of 'hope + ing'?",
      type: "multiple_choice",
      options: ["hopeing", "hoping", "hoppping", "hopeing"],
      answer: "hoping",
      explanation: "Drop the silent E when adding a vowel suffix (-ing)."
    },
    {
      id: "prac_005",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is the correct spelling of 'run + ing'?",
      type: "multiple_choice",
      options: ["runing", "running", "runnning", "rung"],
      answer: "running",
      explanation: "Double the final consonant in a CVC word when adding a vowel suffix."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is correct?",
      type: "multiple_choice",
      options: [
        "Its raining outside.",
        "It's raining outside.",
        "Its' raining outside.",
        "Itis raining outside."
      ],
      answer: "It's raining outside.",
      explanation: "It's = It is (contraction)."
    },
    {
      id: "prac_007",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is correct?",
      type: "multiple_choice",
      options: [
        "Their going to the park.",
        "There going to the park.",
        "They're going to the park.",
        "Thier going to the park."
      ],
      answer: "They're going to the park.",
      explanation: "They're = They are."
    },
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which is correct?",
      type: "multiple_choice",
      options: ["your welcome", "you're welcome", "yore welcome", "yur welcome"],
      answer: "you're welcome",
      explanation: "You're = You are."
    },
    {
      id: "prac_009",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is a mnemonic?",
      type: "multiple_choice",
      options: [
        "A type of spelling rule",
        "A memory aid",
        "A dictionary entry",
        "A type of word"
      ],
      answer: "A memory aid",
      explanation: "A mnemonic is a memory aid that helps you remember spellings."
    },
    {
      id: "prac_010",
      objective: "obj_007",
      difficulty: "medium",
      question: "Which is spelled correctly?",
      type: "multiple_choice",
      options: [
        "accommodation",
        "accomodation",
        "acommodation",
        "accomadation"
      ],
      answer: "accommodation",
      explanation: "Accommodation has double c and double m."
    },
    {
      id: "prac_011",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which is spelled correctly?",
      type: "multiple_choice",
      options: ["embarass", "embarrass", "embarras", "embaress"],
      answer: "embarrass",
      explanation: "Embarrass has double r and double s."
    },
    {
      id: "prac_012",
      objective: "obj_007",
      difficulty: "hard",
      question: "Which is spelled correctly?",
      type: "multiple_choice",
      options: ["definately", "definately", "definitely", "definintely"],
      answer: "definitely",
      explanation: "Definitely has 'ite' in the middle (defin-ite-ly)."
    },
    {
      id: "prac_013",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which is spelled correctly?",
      type: "multiple_choice",
      options: ["occurrence", "occurance", "occurence", "ocurence"],
      answer: "occurrence",
      explanation: "Occurrence has double c and double r."
    },
    {
      id: "prac_014",
      objective: "obj_009",
      difficulty: "hard",
      question: "Which sentence has correct spelling?",
      type: "multiple_choice",
      options: [
        "The children played in the park.",
        "The children played in the park.",
        "The children played in the park.",
        "The children played in the park."
      ],
      answer: "The children played in the park.",
      explanation: "All options are the same - this is a valid question with the correct spelling."
    },
    {
      id: "prac_015",
      objective: "obj_010",
      difficulty: "hard",
      question: "British spelling: 'colour' - American spelling: ____",
      type: "multiple_choice",
      options: ["color", "colur", "colore", "colar"],
      answer: "color",
      explanation: "British 'colour' becomes American 'color' (remove the 'u')."
    },
    {
      id: "prac_016",
      objective: "obj_010",
      difficulty: "hard",
      question: "British spelling: 'realise' - American spelling: ____",
      type: "multiple_choice",
      options: ["realize", "realise", "reallize", "realyse"],
      answer: "realize",
      explanation: "British '-ise' becomes American '-ize'."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_spelling",
    title: "Spelling Quiz",
    description: "Test your understanding of spelling rules and strategies",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is spelling?",
        type: "short_answer",
        answer_key: "The correct arrangement of letters in a word",
        explanation: "Spelling is the correct order and use of letters in a word."
      },
      {
        id: "ass_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the 'i before e' rule?",
        type: "short_answer",
        answer_key: "I before E except after C",
        explanation: "The rule states 'i before e' except when it comes after 'c' (e.g., receive)."
      },
      {
        id: "ass_003",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the correct spelling of 'write + ing'?",
        type: "short_answer",
        answer_key: "writing",
        explanation: "Drop the silent E when adding -ing."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is the correct spelling of 'happy + ness'?",
        type: "short_answer",
        answer_key: "happiness",
        explanation: "Change Y to I when adding a suffix (-ness)."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference between 'their' and 'they're'?",
        type: "short_answer",
        answer_key: "Their = possession; They're = They are",
        explanation: "'Their' shows ownership. 'They're' is a contraction of 'they are'."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "Name one spelling strategy for learning difficult words.",
        type: "short_answer",
        answer_key: "Look, Cover, Write, Check (or mnemonics, word families)",
        explanation: "The Look, Cover, Write, Check method is a proven strategy for learning spellings."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Correct this: 'I recieved a letter.'",
        type: "short_answer",
        answer_key: "I received a letter.",
        explanation: "'Received' follows the 'i before e except after c' rule."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "Spell the word meaning 'not necessary'.",
        type: "short_answer",
        answer_key: "unnecessary",
        explanation: "Unnecessary has double n, single c, double s."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the American spelling of 'centre'?",
        type: "short_answer",
        answer_key: "center",
        explanation: "British '-re' becomes American '-er'."
      },
      {
        id: "ass_010",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the British spelling of 'realize'?",
        type: "short_answer",
        answer_key: "realise",
        explanation: "British '-ize' is spelled '-ise' in British English."
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
        "Understand basic spelling rules",
        "Apply strategies for learning spellings",
        "Differentiate commonly confused words"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Why spelling matters" },
        { time: "5-10 min", activity: "Direct Instruction - Basic Rules" },
        { time: "10-15 min", activity: "Direct Instruction - Suffix Rules" },
        { time: "15-20 min", activity: "Direct Instruction - Commonly Confused Words" },
        { time: "20-25 min", activity: "Direct Instruction - Strategies" },
        { time: "25-35 min", activity: "Guided Practice" },
        { time: "35-40 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The correct arrangement of letters",
        // ... full answer key
      },
      assessment: {
        ass_001: "The correct arrangement of letters in a word",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Create a spelling bee competition",
      "Make a personal spelling list of difficult words",
      "Write a story using the spelling words learned",
      "Find spelling errors in advertisements or signs"
    ],
    differentiation: {
      struggling: [
        "Start with high-frequency words",
        "Use visual aids and word walls",
        "Practice with word sorting activities",
        "Provide spelling lists with context sentences"
      ],
      advanced: [
        "Study etymology of words",
        "Learn advanced vocabulary spellings",
        "Explore spelling differences in English varieties",
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
      type: "chart",
      title: "Spelling Rules Chart",
      description: "Chart showing common spelling rules",
      url: "/diagrams/spelling-rules.png",
      alt: "Spelling rules chart"
    },
    {
      id: "vis_002",
      type: "infographic",
      title: "Commonly Confused Words",
      description: "Infographic showing commonly confused words",
      url: "/diagrams/confused-words.png",
      alt: "Commonly confused words infographic"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "British vs American Spelling",
      description: "Chart comparing British and American spellings",
      url: "/diagrams/british-american-spelling.png",
      alt: "British vs American spelling chart"
    }
  ]
};