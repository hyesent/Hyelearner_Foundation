// Location: src/data/lessons/core/english_language/letter_writing.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "eng_lesson_letter_writing",
  subject: "English Language",
  topic: "Letter Writing",
  name: "Letter Writing",
  icon: "✉️",
  grade_level: "JSS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 12,
    totalPracticeQuestions: 18,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 14,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of sentence structure",
    "Knowledge of formal and informal language",
    "Basic writing skills",
    "Understanding of audience and purpose"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      id: "eng_lesson_essay_writing",
      name: "Essay Writing",
      file: "core/english_language/essay_writing.js"
    },
    {
      id: "eng_lesson_punctuation",
      name: "Punctuation",
      file: "core/english_language/punctuation.js"
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
      description: "Define letter writing and explain its importance",
      indicator: "Student can explain why letter writing is important"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the parts of a letter",
      indicator: "Student can label all parts of a letter"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Write a simple informal letter",
      indicator: "Student can write a personal letter to a friend"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Write a formal letter (business, complaint, application)",
      indicator: "Student can write a professional letter"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Use appropriate tone and register in letters",
      indicator: "Student can distinguish between formal and informal tone"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Use correct letter format and layout",
      indicator: "Student can format a letter correctly"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Write letters for different purposes",
      indicator: "Student can write letters of complaint, application, and request"
    },
    // HARD LEVEL
    {
      id: "obj_008",
      level: "hard",
      description: "Write a comprehensive application letter",
      indicator: "Student can write a job application or college application letter"
    },
    {
      id: "obj_009",
      level: "hard",
      description: "Write a persuasive letter",
      indicator: "Student can write a convincing argument in letter form"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze and critique letters",
      indicator: "Student can evaluate the effectiveness of a letter"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Write letters for professional contexts",
      indicator: "Student can write professional correspondence"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Draft and revise letters effectively",
      indicator: "Student can improve letters through revision"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "How to Write Effective Letters",
    duration: "18:00 - 25:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn to write professional and personal letters for any situation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>What is Letter Writing?</h2>
      <p><strong>Letter writing</strong> is the act of communicating through written messages. Letters can be <strong>formal</strong> (business, applications) or <strong>informal</strong> (personal, friendly). Good letter writing is an essential skill for personal and professional success.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">✉️ Informal Letters</h3>
          <ul>
            <li>To friends and family</li>
            <li>Personal tone</li>
            <li>Casual language</li>
            <li>No strict format</li>
          </ul>
          <p><em>"Dear John, How are you?"</em></p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📩 Formal Letters</h3>
          <ul>
            <li>Business, applications</li>
            <li>Professional tone</li>
            <li>Formal language</li>
            <li>Strict format</li>
          </ul>
          <p><em>"Dear Sir/Madam, I am writing to apply..."</em></p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>📊 Why Letter Writing Matters</h4>
        <ul>
          <li>✓ Job applications</li>
          <li>✓ Professional communication</li>
          <li>✓ Complaint resolution</li>
          <li>✓ Maintaining relationships</li>
          <li>✓ Formal documentation</li>
        </ul>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Parts of a Letter",
        objective: "obj_002",
        text: `
          <h3>The Structure of a Letter</h3>
          <p>All letters have specific parts that must be included.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Parts of a Formal Letter:</h4>
              <ul>
                <li>1. <strong>Sender's Address</strong></li>
                <li>2. <strong>Date</strong></li>
                <li>3. <strong>Recipient's Address</strong></li>
                <li>4. <strong>Salutation</strong> (Dear Sir/Madam)</li>
                <li>5. <strong>Subject Line</strong></li>
                <li>6. <strong>Body</strong> (Introduction, Main, Conclusion)</li>
                <li>7. <strong>Closing</strong> (Yours sincerely/faithfully)</li>
                <li>8. <strong>Signature</strong></li>
                <li>9. <strong>Printed Name</strong></li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Parts of an Informal Letter:</h4>
              <ul>
                <li>1. <strong>Sender's Address</strong> (optional)</li>
                <li>2. <strong>Date</strong></li>
                <li>3. <strong>Salutation</strong> (Dear [Name])</li>
                <li>4. <strong>Body</strong> (Personal, friendly)</li>
                <li>5. <strong>Closing</strong> (Love, Best wishes, Yours)</li>
                <li>6. <strong>Signature</strong></li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Informal Letters",
        objective: "obj_003",
        text: `
          <h3>Writing Informal Letters</h3>
          <p><strong>Informal letters</strong> are personal letters written to friends, family, or people you know well.</p>
          
          <div class="example-box">
            <strong>📌 Sample Informal Letter:</strong>
            <div class="bg-white p-4 rounded">
              <p><strong>123 Park Avenue</strong><br>
              Lagos, Nigeria<br>
              <strong>15th March 2025</strong></p>
              <p><strong>Dear Sarah,</strong></p>
              <p>How are you? It feels like ages since we last spoke! I hope you and your family are doing well.</p>
              <p>I'm writing to let you know that I'll be visiting London next month. I would love to see you while I'm there. Perhaps we could meet for coffee or dinner?</p>
              <p>Let me know if you'll be around. I'm really looking forward to catching up!</p>
              <p><strong>Yours,</strong><br>
              <strong>Mary</strong></p>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Tips for Informal Letters:</strong>
            <ul>
              <li>✓ Use a friendly, conversational tone</li>
              <li>✓ Start with a warm greeting</li>
              <li>✓ Ask about the recipient's well-being</li>
              <li>✓ Share personal news and feelings</li>
              <li>✓ End with a warm closing</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Formal Letters",
        objective: "obj_004",
        text: `
          <h3>Writing Formal Letters</h3>
          <p><strong>Formal letters</strong> are professional letters for business, applications, complaints, and official purposes.</p>
          
          <div class="example-box">
            <strong>📌 Sample Formal Letter:</strong>
            <div class="bg-white p-4 rounded">
              <p><strong>123 Park Avenue</strong><br>
              Lagos, Nigeria<br>
              <strong>15th March 2025</strong></p>
              <p><strong>The Human Resources Manager</strong><br>
              XYZ Company<br>
              456 Business Road<br>
              Lagos, Nigeria</p>
              <p><strong>Dear Sir/Madam,</strong></p>
              <p><strong>RE: Application for the Position of Marketing Officer</strong></p>
              <p>I am writing to apply for the position of Marketing Officer advertised in The Guardian on 10th March 2025.</p>
              <p>I hold a Bachelor's degree in Business Administration from the University of Lagos and have three years of experience in marketing. In my previous role, I successfully increased sales by 20% through innovative campaigns.</p>
              <p>I have attached my CV for your consideration. I am available for an interview at your convenience.</p>
              <p>Thank you for considering my application. I look forward to hearing from you.</p>
              <p><strong>Yours sincerely,</strong><br>
              <strong>Mary Johnson</strong></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Formal vs Informal Tone",
        objective: "obj_005",
        text: `
          <h3>Choosing the Right Tone</h3>
          <p>The tone of your letter depends on the audience and purpose.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Formal Tone:</h4>
              <ul>
                <li>Use "Dear Sir/Madam"</li>
                <li>Use "I am writing to..."</li>
                <li>Avoid contractions (don't, can't)</li>
                <li>Use full sentences</li>
                <li>Use "Yours sincerely/faithfully"</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Informal Tone:</h4>
              <ul>
                <li>Use "Dear [Name]"</li>
                <li>Use "How are you?"</li>
                <li>Use contractions (don't, can't)</li>
                <li>Use casual language</li>
                <li>Use "Love, Yours, Best wishes"</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box">
            <strong>📌 Formal vs Informal Examples:</strong>
            <ul>
              <li><strong>Formal:</strong> "I am writing to request information about your products."</li>
              <li><strong>Informal:</strong> "Can you send me info about your stuff?"</li>
              <li><strong>Formal:</strong> "I would appreciate your prompt response."</li>
              <li><strong>Informal:</strong> "Let me know as soon as you can."</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Application Letters",
        objective: "obj_008",
        text: `
          <h3>Writing Application Letters</h3>
          <p><strong>Application letters</strong> are used for jobs, colleges, and other opportunities.</p>
          
          <div class="example-box">
            <strong>📌 Key Elements:</strong>
            <ul>
              <li><strong>Opening:</strong> State the position/opportunity you're applying for</li>
              <li><strong>Qualifications:</strong> Your education and experience</li>
              <li><strong>Skills:</strong> Relevant skills and achievements</li>
              <li><strong>Why you:</strong> Why you're the best candidate</li>
              <li><strong>Closing:</strong> Thank them and express interest in interview</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Tips for Application Letters:</strong>
            <ul>
              <li>✓ Research the company/organization</li>
              <li>✓ Tailor your letter to each application</li>
              <li>✓ Highlight relevant experience</li>
              <li>✓ Show enthusiasm and passion</li>
              <li>✓ Proofread carefully</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Letters of Complaint",
        objective: "obj_007",
        text: `
          <h3>Writing Complaint Letters</h3>
          <p><strong>Complaint letters</strong> address issues with products, services, or situations.</p>
          
          <div class="example-box">
            <strong>📌 Tips for Complaint Letters:</strong>
            <ul>
              <li>✓ Be clear and specific</li>
              <li>✓ State the problem clearly</li>
              <li>✓ Explain how it affected you</li>
              <li>✓ State what you want (refund, replacement, etc.)</li>
              <li>✓ Be polite but firm</li>
              <li>✓ Keep a copy for your records</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Sample Complaint Letter:</strong>
            <div class="bg-white p-4 rounded">
              <p><strong>123 Park Avenue</strong><br>
              Lagos, Nigeria<br>
              <strong>15th March 2025</strong></p>
              <p><strong>Customer Service Manager</strong><br>
              ABC Electronics<br>
              789 Store Road<br>
              Lagos, Nigeria</p>
              <p><strong>Dear Sir/Madam,</strong></p>
              <p><strong>RE: Complaint about Defective Laptop</strong></p>
              <p>I am writing to complain about a laptop I purchased from your store on 10th February 2025 (Order #12345).</p>
              <p>The laptop stopped working after only two weeks. I have tried contacting your technical support team, but my issue has not been resolved.</p>
              <p>I request a replacement or a full refund. I have attached the receipt and warranty documents.</p>
              <p>I look forward to your prompt response to resolve this matter.</p>
              <p><strong>Yours sincerely,</strong><br>
              <strong>Mary Johnson</strong></p>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Email vs Physical Letters",
        objective: "obj_011",
        text: `
          <h3>Modern Correspondence</h3>
          <p>While traditional letters are still important, emails are now the most common form of written communication.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Email Format:</h4>
              <ul>
                <li><strong>Subject Line:</strong> Clear and concise</li>
                <li><strong>Salutation:</strong> Hello [Name], Dear [Name]</li>
                <li><strong>Body:</strong> Clear, organized, concise</li>
                <li><strong>Closing:</strong> Best regards, Sincerely</li>
                <li><strong>Signature:</strong> Name, title, contact info</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Email Tips:</h4>
              <ul>
                <li>✓ Write a clear subject line</li>
                <li>✓ Keep it concise and organized</li>
                <li>✓ Use appropriate salutations</li>
                <li>✓ Check spelling and grammar</li>
                <li>✓ Reply promptly</li>
                <li>✓ Avoid ALL CAPS (shouting)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Common Letter Writing Errors",
        objective: "obj_010",
        text: `
          <h3>Avoiding Common Mistakes</h3>
          <p>Watch out for these common letter writing errors.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-red-50 p-3 rounded">
              <h4>❌ Common Errors:</h4>
              <ul>
                <li><strong>Wrong salutation:</strong> Using wrong name/title</li>
                <li><strong>Too informal:</strong> Using casual language in formal letters</li>
                <li><strong>Spelling/grammar errors:</strong> Not proofreading</li>
                <li><strong>Wrong format:</strong> Incorrect layout</li>
                <li><strong>Too vague:</strong> Not being specific enough</li>
                <li><strong>Too long:</strong> Including unnecessary details</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>✅ How to Fix:</h4>
              <ul>
                <li>✓ Research the correct recipient</li>
                <li>✓ Match tone to audience</li>
                <li>✓ Proofread carefully</li>
                <li>✓ Follow the correct format</li>
                <li>✓ Be clear and specific</li>
                <li>✓ Be concise</li>
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
          <h4>✉️ Letter Writing</h4>
          <ul>
            <li>✓ Know your audience</li>
            <li>✓ Use appropriate tone</li>
            <li>✓ Follow correct format</li>
            <li>✓ Be clear and concise</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>💡 Quick Tips</h4>
          <ul>
            <li>✓ Proofread before sending</li>
            <li>✓ Keep copies of formal letters</li>
            <li>✓ Use professional language</li>
            <li>✓ Respond promptly</li>
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
        misconception: "Letter writing is outdated",
        correction: "Letters and emails are essential for professional communication",
        explanation: "Professional correspondence is still crucial in business and formal settings."
      },
      {
        id: "mis_002",
        misconception: "Informal language is okay in formal letters",
        correction: "Formal letters require formal language and tone",
        explanation: "Using casual language in formal letters can make you seem unprofessional."
      },
      {
        id: "mis_003",
        misconception: "Format doesn't matter in letters",
        correction: "Correct format shows professionalism and attention to detail",
        explanation: "Employers and organizations notice format errors and may reject applications."
      },
      {
        id: "mis_004",
        misconception: "Emails don't need the same care as letters",
        correction: "Emails represent you professionally and should be well-written",
        explanation: "Professional emails reflect your communication skills."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Job Applications",
        description: "Application letters are essential for getting jobs.",
        example: "Writing cover letters and application letters for positions."
      },
      {
        id: "app_002",
        title: "Professional Communication",
        description: "Professional letters and emails are used in business.",
        example: "Writing to clients, partners, and colleagues."
      },
      {
        id: "app_003",
        title: "Problem Resolution",
        description: "Complaint letters help resolve issues with products or services.",
        example: "Writing to complain about a faulty product."
      },
      {
        id: "app_004",
        title: "Personal Communication",
        description: "Letters maintain personal relationships.",
        example: "Writing to friends and family to stay connected."
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Letter", definition: "A written message sent from one person to another." },
    { term: "Formal Letter", definition: "A professional letter for business or official purposes." },
    { term: "Informal Letter", definition: "A personal letter to friends or family." },
    { term: "Salutation", definition: "The opening greeting in a letter." },
    { term: "Subject Line", definition: "A brief statement of the letter's purpose." },
    { term: "Closing", definition: "The ending phrase in a letter." },
    { term: "Tone", definition: "The attitude or mood expressed in writing." },
    { term: "Application Letter", definition: "A letter written to apply for a job or position." },
    { term: "Complaint Letter", definition: "A letter expressing dissatisfaction." },
    { term: "Format", definition: "The layout and organization of a letter." }
  ],

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practice: [
    {
      id: "prac_001",
      objective: "obj_001",
      difficulty: "easy",
      question: "What is a letter?",
      type: "multiple_choice",
      options: [
        "A type of essay",
        "A written message sent to someone",
        "A type of book",
        "A punctuation mark"
      ],
      answer: "A written message sent to someone",
      explanation: "A letter is a written message from one person to another."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the greeting in a letter called?",
      type: "multiple_choice",
      options: ["Salutation", "Subject", "Closing", "Signature"],
      answer: "Salutation",
      explanation: "The salutation is the opening greeting (e.g., Dear Sir)."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "Which salutation is appropriate for an informal letter to a friend?",
      type: "multiple_choice",
      options: ["Dear Sir", "Dear John", "To Whom It May Concern", "Dear Sir/Madam"],
      answer: "Dear John",
      explanation: "Informal letters use the recipient's first name."
    },
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which closing is appropriate for a formal letter?",
      type: "multiple_choice",
      options: ["Love", "Yours sincerely", "Cheers", "Best wishes"],
      answer: "Yours sincerely",
      explanation: "Yours sincerely' is appropriate for formal letters."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Which sentence is appropriate for a formal letter?",
      type: "multiple_choice",
      options: [
        "I'm writing to ask for a job.",
        "I am writing to apply for the position.",
        "Can I get the job?",
        "I want the job."
      ],
      answer: "I am writing to apply for the position.",
      explanation: "Formal letters use formal language and complete sentences."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What should be included at the top of a formal letter?",
      type: "multiple_choice",
      options: [
        "Only the date",
        "Sender's address and date",
        "Recipient's name only",
        "Subject line only"
      ],
      answer: "Sender's address and date",
      explanation: "Formal letters include the sender's address and date at the top."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is the purpose of a complaint letter?",
      type: "multiple_choice",
      options: [
        "To apply for a job",
        "To express dissatisfaction",
        "To make friends",
        "To sell something"
      ],
      answer: "To express dissatisfaction",
      explanation: "Complaint letters express dissatisfaction and seek resolution."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What should an application letter include?",
      type: "multiple_choice",
      options: [
        "Personal stories",
        "Qualifications and experience",
        "Hobbies and interests",
        "Family history"
      ],
      answer: "Qualifications and experience",
      explanation: "Application letters highlight relevant qualifications and experience."
    },
    {
      id: "prac_009",
      objective: "obj_005",
      difficulty: "hard",
      question: "Which is the most formal closing?",
      type: "multiple_choice",
      options: [
        "Yours faithfully",
        "Best wishes",
        "Cheers",
        "Take care"
      ],
      answer: "Yours faithfully",
      explanation: "Yours faithfully' is the most formal closing."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a common error in formal letters?",
      type: "multiple_choice",
      options: [
        "Using a clear subject line",
        "Using contractions (don't, can't)",
        "Including all contact information",
        "Proofreading"
      ],
      answer: "Using contractions (don't, can't)",
      explanation: "Contractions should be avoided in formal writing."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What should an email subject line include?",
      type: "multiple_choice",
      options: [
        "Only the date",
        "The purpose of the email",
        "The recipient's name",
        "The writer's age"
      ],
      answer: "The purpose of the email",
      explanation: "Subject lines should clearly state the email's purpose."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the best way to improve a letter?",
      type: "multiple_choice",
      options: [
        "Make it longer",
        "Proofread and revise",
        "Add more details",
        "Remove all punctuation"
      ],
      answer: "Proofread and revise",
      explanation: "Proofreading and revising improve clarity and correctness."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_letter_writing",
    title: "Letter Writing Quiz",
    description: "Test your understanding of letter writing",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is the main difference between a formal and informal letter?",
        type: "short_answer",
        answer_key: "Formal letters are professional; informal letters are personal",
        explanation: "Formal letters are for business/official purposes; informal letters are personal."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Name the parts of a formal letter.",
        type: "short_answer",
        answer_key: "Sender's address, date, recipient's address, salutation, subject, body, closing, signature, name",
        explanation: "Formal letters have a specific structure with these parts."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Write a salutation for an informal letter.",
        type: "short_answer",
        answer_key: "Dear [Name] (e.g., Dear John)",
        explanation: "Informal letters use the recipient's first name."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Write a salutation for a formal letter when you don't know the recipient's name.",
        type: "short_answer",
        answer_key: "Dear Sir/Madam or To Whom It May Concern",
        explanation: "Use Dear Sir/Madam or To Whom It May Concern when the recipient is unknown."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is the difference in tone between formal and informal letters?",
        type: "short_answer",
        answer_key: "Formal letters use professional, formal language; informal letters use casual, friendly language",
        explanation: "Tone should match the audience and purpose of the letter."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the correct format for a formal letter?",
        type: "short_answer",
        answer_key: "Sender's address, date, recipient's address, salutation, subject, body, closing, signature, name",
        explanation: "Formal letters follow a specific format and order."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "What should you include in a complaint letter?",
        type: "short_answer",
        answer_key: "The problem, how it affected you, and what you want (resolution)",
        explanation: "Complaint letters should be clear about the issue and desired outcome."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What should you include in an application letter?",
        type: "short_answer",
        answer_key: "Qualifications, experience, skills, and why you're the best candidate",
        explanation: "Application letters should highlight relevant qualifications and enthusiasm."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the difference between a letter and an email?",
        type: "short_answer",
        answer_key: "Letters are traditional mail; emails are digital. Emails have subject lines and are faster.",
        explanation: "Emails are more immediate and have different formatting conventions."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "Why is proofreading important in letter writing?",
        type: "short_answer",
        answer_key: "To catch spelling, grammar, and punctuation errors",
        explanation: "Proofreading ensures your letter is professional and error-free."
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
        "Understand the purpose and types of letters",
        "Write formal and informal letters",
        "Use appropriate tone and format"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - Why letters matter" },
        { time: "5-10 min", activity: "Direct Instruction - Parts of a letter" },
        { time: "10-15 min", activity: "Direct Instruction - Informal letters" },
        { time: "15-20 min", activity: "Direct Instruction - Formal letters" },
        { time: "20-25 min", activity: "Direct Instruction - Application letters" },
        { time: "25-30 min", activity: "Direct Instruction - Complaint letters" },
        { time: "30-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A written message sent to someone",
        // ... full answer key
      },
      assessment: {
        ass_001: "Formal letters are professional; informal letters are personal",
        // ... full answer key
      }
    },
    extensionActivities: [
      "Write an application letter for a dream job",
      "Write a complaint letter about a real or imagined issue",
      "Write a letter to a local politician about a community issue",
      "Analyze a sample letter and identify strengths/weaknesses"
    ],
    differentiation: {
      struggling: [
        "Provide letter templates",
        "Use sentence starters",
        "Practice with fill-in-the-blank exercises",
        "Focus on one type of letter at a time"
      ],
      advanced: [
        "Write for multiple audiences",
        "Create a letter-writing guide for others",
        "Analyze letters from historical figures",
        "Write a persuasive letter on a complex issue"
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
      title: "Letter Format",
      description: "Diagram showing the correct format of a letter",
      url: "/diagrams/letter-format.png",
      alt: "Letter format diagram"
    },
    {
      id: "vis_002",
      type: "chart",
      title: "Formal vs Informal",
      description: "Chart comparing formal and informal language",
      url: "/diagrams/formal-informal.png",
      alt: "Formal vs informal chart"
    },
    {
      id: "vis_003",
      type: "infographic",
      title: "Letter Writing Tips",
      description: "Infographic with tips for effective letter writing",
      url: "/diagrams/letter-tips.png",
      alt: "Letter writing tips infographic"
    }
  ]
};