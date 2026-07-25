// Location: src/data/lessons/social_sciences/civics/democratic_processes.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "civics_lesson_democratic_processes",
  subject: "Civics",
  topic: "Democratic Processes",
  name: "Democratic Processes",
  icon: "🗳️",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 15,
    totalPracticeQuestions: 22,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 17,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of civics basics",
    "Knowledge of citizenship",
    "Understanding of rights and responsibilities",
    "Basic understanding of government"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Human Rights",
      file: "social_sciences/civics/human_rights.js"
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
      description: "Define democracy and explain its principles",
      indicator: "Student can explain what democracy is and its key principles"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the types of democracy",
      indicator: "Student can distinguish between direct and representative democracy"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the electoral process",
      indicator: "Student can describe how elections are conducted"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the features of democracy",
      indicator: "Student can describe the characteristics of a democratic system"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe the importance of free and fair elections",
      indicator: "Student can explain why elections must be free and fair"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of political parties",
      indicator: "Student can describe the functions of political parties"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Describe the role of INEC in Nigeria",
      indicator: "Student can explain the functions of the Independent National Electoral Commission"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain the concept of separation of powers",
      indicator: "Student can describe how power is divided in a democracy"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Describe the rule of law in a democracy",
      indicator: "Student can explain how rule of law operates in a democracy"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze the challenges of democracy",
      indicator: "Student can discuss problems facing democratic systems"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain the importance of voter education",
      indicator: "Student can describe why voter education is essential"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Analyze the role of civil society in democracy",
      indicator: "Student can describe how civil society strengthens democracy"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the concept of good governance",
      indicator: "Student can describe what good governance means"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Analyze the importance of democratic participation",
      indicator: "Student can explain why citizen participation matters"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Explain the process of electoral reform",
      indicator: "Student can describe how electoral systems can be improved"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Democratic Processes - How Democracy Works",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about democracy, elections, political parties, and the electoral process."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Democratic Processes</h2>
      <p><strong>Democracy</strong> is a system of government in which power is vested in the people, who exercise it directly or through elected representatives. Democratic processes are the mechanisms through which citizens participate in governance and decision-making.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🗳️ Key Concepts</h3>
          <ul>
            <li>✓ Types of Democracy</li>
            <li>✓ Electoral Process</li>
            <li>✓ Political Parties</li>
            <li>✓ Separation of Powers</li>
            <li>✓ Rule of Law</li>
            <li>✓ Good Governance</li>
            <li>✓ Civil Society</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Democracy originated in ancient Greece</li>
            <li>• Nigeria has been a democracy since 1999</li>
            <li>• INEC conducts elections in Nigeria</li>
            <li>• Over 90 million Nigerians are registered voters</li>
            <li>• Political parties contest elections</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Democratic Processes Matter</h4>
        <p>Democratic processes ensure that citizens have a voice in governance, leaders are accountable, and power is exercised legitimately.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Democracy?",
        objective: "obj_001",
        text: `
          <h3>Understanding Democracy</h3>
          <p><strong>Democracy</strong> is a form of government where power belongs to the people. The word comes from Greek: "demos" (people) and "kratos" (rule).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Principles</h4>
              <ul>
                <li>• <strong>Popular sovereignty:</strong> People are the source of power</li>
                <li>• <strong>Political equality:</strong> One person, one vote</li>
                <li>• <strong>Rule of law:</strong> Laws apply to everyone</li>
                <li>• <strong>Human rights:</strong> Protection of fundamental rights</li>
                <li>• <strong>Free and fair elections:</strong> Regular voting</li>
                <li>• <strong>Accountability:</strong> Leaders answer to the people</li>
                <li>• <strong>Transparency:</strong> Open government</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Features of Democracy</h4>
              <ul>
                <li>• <strong>Free elections:</strong> Citizens choose leaders</li>
                <li>• <strong>Political parties:</strong> Compete for power</li>
                <li>• <strong>Independent judiciary:</strong> Fair courts</li>
                <li>• <strong>Free press:</strong> Media freedom</li>
                <li>• <strong>Civil liberties:</strong> Basic freedoms</li>
                <li>• <strong>Separation of powers:</strong> Check and balance</li>
                <li>• <strong>Citizen participation:</strong> Engagement</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Democracy",
        objective: "obj_002",
        text: `
          <h3>Types of Democracy</h3>
          <p>There are two main types of democracy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Direct Democracy</h4>
              <ul>
                <li>• Citizens vote on every issue</li>
                <li>• Ancient Athens example</li>
                <li>• Requires small populations</li>
                <li>• Modern examples: Referendums</li>
                <li>• Citizens make decisions directly</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Representative Democracy</h4>
              <ul>
                <li>• Citizens elect representatives</li>
                <li>• Most common form today</li>
                <li>• Used in Nigeria and many countries</li>
                <li>• Representatives make decisions</li>
                <li>• Regular elections ensure accountability</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Nigeria's Democracy:</strong>
            <ul>
              <li>• Federal Republic system</li>
              <li>• President is head of state</li>
              <li>• National Assembly (Senate and House of Representatives)</li>
              <li>• State governors and assemblies</li>
              <li>• Local government councils</li>
              <li>• Multi-party system</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "The Electoral Process",
        objective: "obj_003",
        text: `
          <h3>The Electoral Process</h3>
          <p><strong>Elections</strong> are the process by which citizens choose their leaders in a democracy.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Stages of Elections</h4>
              <ul>
                <li>1. <strong>Voter registration:</strong> Registering eligible voters</li>
                <li>2. <strong>Candidate nomination:</strong> Political parties select candidates</li>
                <li>3. <strong>Campaigning:</strong> Candidates present their platforms</li>
                <li>4. <strong>Voting:</strong> Citizens cast their ballots</li>
                <li>5. <strong>Counting:</strong> Votes are counted</li>
                <li>6. <strong>Result declaration:</strong> Winners are announced</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Types of Elections</h4>
              <ul>
                <li>• <strong>Presidential elections:</strong> Choose the President</li>
                <li>• <strong>Parliamentary elections:</strong> Choose legislators</li>
                <li>• <strong>Gubernatorial elections:</strong> Choose state governors</li>
                <li>• <strong>Local government elections:</strong> Choose councilors</li>
                <li>• <strong>By-elections:</strong> Fill vacancies</li>
                <li>• <strong>Referendums:</strong> Vote on specific issues</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Free and Fair Elections",
        objective: "obj_005",
        text: `
          <h3>Free and Fair Elections</h3>
          <p>For democracy to work, elections must be <strong>free</strong> (voters can choose freely) and <strong>fair</strong> (all candidates have equal opportunity).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Characteristics of Free and Fair Elections</h4>
              <ul>
                <li>• <strong>No voter intimidation:</strong> Voters are safe</li>
                <li>• <strong>Accurate voter register:</strong> Only eligible voters</li>
                <li>• <strong>Secret ballot:</strong> Privacy in voting</li>
                <li>• <strong>Equal access:</strong> All candidates have access</li>
                <li>• <strong>Transparent counting:</strong> Open vote counting</li>
                <li>• <strong>Peaceful conduct:</strong> No violence</li>
                <li>• <strong>Independent oversight:</strong> Neutral body</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Challenges to Free and Fair Elections</h4>
              <ul>
                <li>• <strong>Rigging:</strong> Manipulation of results</li>
                <li>• <strong>Violence:</strong> Election-related violence</li>
                <li>• <strong>Voter suppression:</strong> Preventing people from voting</li>
                <li>• <strong>Misinformation:</strong> False information</li>
                <li>• <strong>Corruption:</strong> Buying votes</li>
                <li>• <strong>Inadequate logistics:</strong> Poor organization</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Political Parties",
        objective: "obj_006",
        text: `
          <h3>Political Parties</h3>
          <p><strong>Political parties</strong> are organizations that seek to influence government by getting their members elected to office.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of Political Parties</h4>
              <ul>
                <li>• <strong>Representation:</strong> Represent citizens' interests</li>
                <li>• <strong>Recruitment:</strong> Identify candidates</li>
                <li>• <strong>Education:</strong> Inform the public</li>
                <li>• <strong>Agenda setting:</strong> Shape political debate</li>
                <li>• <strong>Government formation:</strong> Form governments</li>
                <li>• <strong>Policy development:</strong> Develop policies</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Political Parties in Nigeria</h4>
              <ul>
                <li>• <strong>APC:</strong> All Progressives Congress</li>
                <li>• <strong>PDP:</strong> People's Democratic Party</li>
                <li>• <strong>LP:</strong> Labour Party</li>
                <li>• <strong>NNPP:</strong> New Nigeria Peoples Party</li>
                <li>• <strong>SDP:</strong> Social Democratic Party</li>
                <li>• Over 18 registered parties</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "INEC",
        objective: "obj_007",
        text: `
          <h3>INEC - Independent National Electoral Commission</h3>
          <p><strong>INEC</strong> is the body responsible for conducting elections in Nigeria.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Functions of INEC</h4>
              <ul>
                <li>• <strong>Voter registration:</strong> Register voters</li>
                <li>• <strong>Political party registration:</strong> Register parties</li>
                <li>• <strong>Election organization:</strong> Conduct elections</li>
                <li>• <strong>Result announcement:</strong> Declare results</li>
                <li>• <strong>Voter education:</strong> Educate voters</li>
                <li>• <strong>Electoral reform:</strong> Improve processes</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Facts</h4>
              <ul>
                <li>• Established in 1998</li>
                <li>• Headquartered in Abuja</li>
                <li>• Chaired by a Chairman</li>
                <li>• 12 National Commissioners</li>
                <li>• 36 State Resident Electoral Commissioners</li>
                <li>• Conducts elections every 4 years</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Separation of Powers",
        objective: "obj_008",
        text: `
          <h3>Separation of Powers</h3>
          <p><strong>Separation of powers</strong> is the division of government into three branches to prevent concentration of power.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Executive</h4>
              <ul>
                <li>• <strong>Function:</strong> Enforces laws</li>
                <li>• <strong>Leader:</strong> President</li>
                <li>• <strong>Components:</strong> Cabinet, ministries</li>
                <li>• <strong>Powers:</strong> Implement policy</li>
                <li>• <strong>Example:</strong> President, governors</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Legislature</h4>
              <ul>
                <li>• <strong>Function:</strong> Makes laws</li>
                <li>• <strong>Leader:</strong> Speaker</li>
                <li>• <strong>Components:</strong> Senate, House</li>
                <li>• <strong>Powers:</strong> Pass laws, budget</li>
                <li>• <strong>Example:</strong> National Assembly</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Judiciary</h4>
              <ul>
                <li>• <strong>Function:</strong> Interprets laws</li>
                <li>• <strong>Leader:</strong> Chief Justice</li>
                <li>• <strong>Components:</strong> Courts</li>
                <li>• <strong>Powers:</strong> Judicial review</li>
                <li>• <strong>Example:</strong> Supreme Court</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Good Governance",
        objective: "obj_013",
        text: `
          <h3>Good Governance</h3>
          <p><strong>Good governance</strong> refers to the effective, efficient, and accountable exercise of power.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Principles of Good Governance</h4>
              <ul>
                <li>• <strong>Accountability:</strong> Leaders are answerable</li>
                <li>• <strong>Transparency:</strong> Open and clear processes</li>
                <li>• <strong>Rule of law:</strong> Fair and just laws</li>
                <li>• <strong>Responsiveness:</strong> Serving citizens</li>
                <li>• <strong>Consensus building:</strong> Inclusive decision-making</li>
                <li>• <strong>Effectiveness:</strong> Achieving results</li>
                <li>• <strong>Participation:</strong> Citizen involvement</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Indicators of Good Governance</h4>
              <ul>
                <li>• Low corruption levels</li>
                <li>• Efficient public services</li>
                <li>• Independent judiciary</li>
                <li>• Free press</li>
                <li>• Citizen trust in government</li>
                <li>• Peaceful transitions of power</li>
                <li>• Economic development</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Civil Society and Democracy",
        objective: "obj_012",
        text: `
          <h3>Civil Society and Democracy</h3>
          <p><strong>Civil society</strong> refers to organizations and institutions that are independent of government.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Role of Civil Society</h4>
              <ul>
                <li>• <strong>Advocacy:</strong> Promote citizen interests</li>
                <li>• <strong>Accountability:</strong> Hold government accountable</li>
                <li>• <strong>Mobilization:</strong> Organize citizens</li>
                <li>• <strong>Education:</strong> Inform the public</li>
                <li>• <strong>Service delivery:</strong> Provide services</li>
                <li>• <strong>Monitoring:</strong> Oversee government</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples in Nigeria</h4>
              <ul>
                <li>• <strong>CSOs:</strong> Civil Society Organizations</li>
                <li>• <strong>NGOs:</strong> Non-Governmental Organizations</li>
                <li>• <strong>Trade unions:</strong> NLC, TUC</li>
                <li>• <strong>Professional associations:</strong> NBA, NMA</li>
                <li>• <strong>Religious organizations:</strong> CAN, NSCIA</li>
                <li>• <strong>Media:</strong> Independent press</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Challenges of Democracy",
        objective: "obj_010",
        text: `
          <h3>Challenges of Democracy</h3>
          <p>Democracies face various challenges that must be addressed.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Challenges</h4>
              <ul>
                <li>• <strong>Corruption:</strong> Abuse of public office</li>
                <li>• <strong>Voter apathy:</strong> Low turnout</li>
                <li>• <strong>Electoral fraud:</strong> Rigging, manipulation</li>
                <li>• <strong>Misinformation:</strong> Fake news</li>
                <li>• <strong>Ethnic politics:</strong> Identity-based politics</li>
                <li>• <strong>Poverty:</strong> Socio-economic issues</li>
                <li>• <strong>Weak institutions:</strong> Poor governance</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Solutions</h4>
              <ul>
                <li>• <strong>Strengthening institutions:</strong> Independent bodies</li>
                <li>• <strong>Voter education:</strong> Informed citizens</li>
                <li>• <strong>Anti-corruption:</strong> Fighting corruption</li>
                <li>• <strong>Inclusive politics:</strong> Represent all groups</li>
                <li>• <strong>Economic development:</strong> Prosperity</li>
                <li>• <strong>Civic engagement:</strong> Active participation</li>
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
          <h4>🗳️ Democratic Processes</h4>
          <ul>
            <li>• Democracy is government by the people</li>
            <li>• Elections are the foundation of democracy</li>
            <li>• Political parties compete for power</li>
            <li>• Separation of powers prevents abuse</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Institutions</h4>
          <ul>
            <li>• INEC conducts elections</li>
            <li>• Civil society strengthens democracy</li>
            <li>• Good governance is essential</li>
            <li>• Citizen participation matters</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Democracy thrives when citizens participate, leaders are accountable, and institutions are strong.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Democracy means majority rule only",
        correction: "Democracy also protects minority rights",
        explanation: "Democracy balances majority rule with minority rights."
      },
      {
        id: "mis_002",
        misconception: "All democracies are the same",
        correction: "Democracies can vary significantly",
        explanation: "Different countries have different democratic systems."
      },
      {
        id: "mis_003",
        misconception: "Elections are the only part of democracy",
        correction: "Democracy is more than just elections",
        explanation: "Democracy includes participation, rights, and the rule of law."
      },
      {
        id: "mis_004",
        misconception: "One vote doesn't matter",
        correction: "Every vote counts",
        explanation: "Elections are often decided by small margins."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Voting",
        description: "Participating in elections.",
        example: "Registering and casting votes"
      },
      {
        id: "app_002",
        title: "Political Participation",
        description: "Engaging in political processes.",
        example: "Joining political parties, campaigning"
      },
      {
        id: "app_003",
        title: "Civic Advocacy",
        description: "Advocating for change.",
        example: "Petitions, peaceful protests"
      },
      {
        id: "app_004",
        title: "Community Engagement",
        description: "Participating in community governance.",
        example: "Town hall meetings, community development"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Democracy", definition: "Government by the people." },
    { term: "Direct Democracy", definition: "Citizens vote on all issues." },
    { term: "Representative Democracy", definition: "Citizens elect representatives." },
    { term: "Election", definition: "Process of choosing leaders." },
    { term: "Voter", definition: "A person who votes." },
    { term: "Political Party", definition: "Organization seeking political power." },
    { term: "INEC", definition: "Independent National Electoral Commission." },
    { term: "Separation of Powers", definition: "Division of government powers." },
    { term: "Executive", definition: "Branch that enforces laws." },
    { term: "Legislature", definition: "Branch that makes laws." },
    { term: "Judiciary", definition: "Branch that interprets laws." },
    { term: "Good Governance", definition: "Effective and accountable governance." },
    { term: "Civil Society", definition: "Organizations independent of government." },
    { term: "Rule of Law", definition: "All are subject to the law." },
    { term: "Electoral Fraud", definition: "Manipulation of elections." },
    { term: "Voter Apathy", definition: "Lack of interest in voting." },
    { term: "Suffrage", definition: "The right to vote." },
    { term: "Referendum", definition: "A direct vote on an issue." },
    { term: "Accountability", definition: "Being answerable to the people." },
    { term: "Transparency", definition: "Open and clear processes." }
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
      question: "What is democracy?",
      type: "multiple_choice",
      options: [
        "Rule by one person",
        "Government by the people",
        "Rule by the military",
        "Government by experts"
      ],
      answer: "Government by the people",
      explanation: "Democracy is government by the people."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is representative democracy?",
      type: "multiple_choice",
      options: [
        "Citizens vote on all issues",
        "Citizens elect representatives",
        "Rule by the military",
        "Rule by the clergy"
      ],
      answer: "Citizens elect representatives",
      explanation: "Representative democracy involves electing representatives."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the first stage of the electoral process?",
      type: "multiple_choice",
      options: [
        "Voting",
        "Voter registration",
        "Counting votes",
        "Candidate nomination"
      ],
      answer: "Voter registration",
      explanation: "Voter registration is the first stage."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a feature of democracy?",
      type: "multiple_choice",
      options: [
        "Free elections",
        "Censorship",
        "Rule by a dictator",
        "One-party system"
      ],
      answer: "Free elections",
      explanation: "Free elections are a key feature of democracy."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "Why are free and fair elections important?",
      type: "multiple_choice",
      options: [
        "They are not important",
        "They ensure the will of the people is respected",
        "They only benefit the ruling party",
        "They are for show"
      ],
      answer: "They ensure the will of the people is respected",
      explanation: "Free and fair elections respect the will of the people."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the role of political parties?",
      type: "multiple_choice",
      options: [
        "To represent citizens and compete for power",
        "To control the military",
        "To run businesses",
        "To administer justice"
      ],
      answer: "To represent citizens and compete for power",
      explanation: "Political parties represent citizens and compete for power."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does INEC do?",
      type: "multiple_choice",
      options: [
        "Conducts elections in Nigeria",
        "Makes laws",
        "Interprets laws",
        "Runs the courts"
      ],
      answer: "Conducts elections in Nigeria",
      explanation: "INEC conducts elections in Nigeria."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is separation of powers?",
      type: "multiple_choice",
      options: [
        "Dividing government powers among branches",
        "Removing all powers",
        "Concentrating all powers",
        "Sharing powers with citizens"
      ],
      answer: "Dividing government powers among branches",
      explanation: "Separation of powers divides powers among branches."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the rule of law?",
      type: "multiple_choice",
      options: [
        "Laws that apply only to citizens",
        "Everyone is subject to the law",
        "Leaders are above the law",
        "Laws are optional"
      ],
      answer: "Everyone is subject to the law",
      explanation: "The rule of law means everyone is subject to the law."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is a challenge of democracy?",
      type: "multiple_choice",
      options: [
        "Corruption",
        "Good governance",
        "Free elections",
        "Civil society"
      ],
      answer: "Corruption",
      explanation: "Corruption is a major challenge of democracy."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Why is voter education important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It helps voters make informed choices",
        "It only benefits politicians",
        "It confuses voters"
      ],
      answer: "It helps voters make informed choices",
      explanation: "Voter education helps voters make informed choices."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is the role of civil society?",
      type: "multiple_choice",
      options: [
        "To control the government",
        "To strengthen democracy and hold government accountable",
        "To replace the government",
        "To ignore citizens"
      ],
      answer: "To strengthen democracy and hold government accountable",
      explanation: "Civil society strengthens democracy and holds government accountable."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is good governance?",
      type: "multiple_choice",
      options: [
        "Ineffective governance",
        "Effective and accountable governance",
        "Corrupt governance",
        "Authoritarian governance"
      ],
      answer: "Effective and accountable governance",
      explanation: "Good governance is effective and accountable."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "Why is citizen participation important?",
      type: "multiple_choice",
      options: [
        "It is not important",
        "It strengthens democracy",
        "It weakens democracy",
        "It has no effect"
      ],
      answer: "It strengthens democracy",
      explanation: "Citizen participation strengthens democracy."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "What is electoral reform?",
      type: "multiple_choice",
      options: [
        "Improving the electoral system",
        "Removing elections",
        "Cancelling elections",
        "Ignoring elections"
      ],
      answer: "Improving the electoral system",
      explanation: "Electoral reform improves the electoral system."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_democratic_processes",
    title: "Democratic Processes Quiz",
    description: "Test your understanding of democratic processes",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is democracy?",
        type: "short_answer",
        answer_key: "Government by the people",
        explanation: "Democracy is government by the people."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is representative democracy?",
        type: "short_answer",
        answer_key: "Citizens elect representatives",
        explanation: "Representative democracy involves electing representatives."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the first stage of the electoral process?",
        type: "short_answer",
        answer_key: "Voter registration",
        explanation: "Voter registration is the first stage."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "Name one feature of democracy.",
        type: "short_answer",
        answer_key: "Free elections (or any valid)",
        explanation: "Free elections are a key feature of democracy."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "Why are free and fair elections important?",
        type: "short_answer",
        answer_key: "They ensure the will of the people is respected",
        explanation: "Free and fair elections respect the will of the people."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the role of political parties?",
        type: "short_answer",
        answer_key: "To represent citizens and compete for power",
        explanation: "Political parties represent citizens and compete for power."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "medium",
        question: "What does INEC do?",
        type: "short_answer",
        answer_key: "Conducts elections in Nigeria",
        explanation: "INEC conducts elections in Nigeria."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is separation of powers?",
        type: "short_answer",
        answer_key: "Dividing government powers among branches",
        explanation: "Separation of powers divides powers among branches."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is a challenge of democracy?",
        type: "short_answer",
        answer_key: "Corruption (or any valid)",
        explanation: "Corruption is a major challenge of democracy."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is good governance?",
        type: "short_answer",
        answer_key: "Effective and accountable governance",
        explanation: "Good governance is effective and accountable."
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
        "Understand democracy and its principles",
        "Explain the electoral process",
        "Describe the role of political parties",
        "Understand separation of powers and good governance"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is democracy?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Democracy" },
        { time: "10-15 min", activity: "Direct Instruction - Electoral Process" },
        { time: "15-20 min", activity: "Direct Instruction - Political Parties" },
        { time: "20-25 min", activity: "Direct Instruction - INEC" },
        { time: "25-30 min", activity: "Direct Instruction - Separation of Powers" },
        { time: "30-35 min", activity: "Direct Instruction - Good Governance" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Government by the people",
        prac_002: "Citizens elect representatives",
        prac_003: "Voter registration",
        prac_004: "Free elections",
        prac_005: "They ensure the will of the people is respected",
        prac_006: "To represent citizens and compete for power",
        prac_007: "Conducts elections in Nigeria",
        prac_008: "Dividing government powers among branches",
        prac_009: "Everyone is subject to the law",
        prac_010: "Corruption",
        prac_011: "It helps voters make informed choices",
        prac_012: "To strengthen democracy and hold government accountable",
        prac_013: "Effective and accountable governance",
        prac_014: "It strengthens democracy",
        prac_015: "Improving the electoral system"
      },
      assessment: {
        ass_001: "Government by the people",
        ass_002: "Citizens elect representatives",
        ass_003: "Voter registration",
        ass_004: "Free elections (or any valid)",
        ass_005: "They ensure the will of the people is respected",
        ass_006: "To represent citizens and compete for power",
        ass_007: "Conducts elections in Nigeria",
        ass_008: "Dividing government powers among branches",
        ass_009: "Corruption (or any valid)",
        ass_010: "Effective and accountable governance"
      }
    },
    extensionActivities: [
      "Research a recent election",
      "Study political parties in Nigeria",
      "Analyze the role of INEC",
      "Compare democratic systems"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research electoral systems",
        "Study comparative democracy",
        "Research electoral reform",
        "Analyze democratic challenges"
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
      title: "Types of Democracy",
      description: "Diagram showing types of democracy",
      url: "/diagrams/types-of-democracy.png",
      alt: "Types of democracy diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Separation of Powers",
      description: "Diagram showing separation of powers",
      url: "/diagrams/separation-of-powers.png",
      alt: "Separation of powers diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "Electoral Process",
      description: "Diagram showing the electoral process",
      url: "/diagrams/electoral-process.png",
      alt: "Electoral process diagram"
    }
  ]
};