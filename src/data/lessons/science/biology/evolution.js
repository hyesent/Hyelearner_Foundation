// Location: src/data/lessons/science/biology/evolution.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_evolution",
  subject: "Biology",
  topic: "Evolution",
  name: "Evolution",
  icon: "🔄",
  grade_level: "SS1 - SS3",
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
    "Understanding of genetics",
    "Knowledge of cell biology",
    "Basic understanding of ecology"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Plants",
      file: "science/biology/plants.js"
    },
    {
      name: "Animals",
      file: "science/biology/animals.js"
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
      description: "Define evolution and explain its importance",
      indicator: "Student can explain what evolution is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Explain the theory of natural selection",
      indicator: "Student can describe Darwin's theory of natural selection"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Identify the evidence for evolution",
      indicator: "Student can list types of evidence for evolution"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain the concept of adaptation",
      indicator: "Student can give examples of adaptations"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Explain how evolution leads to speciation",
      indicator: "Student can describe how new species form"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the role of mutations in evolution",
      indicator: "Student can explain how mutations provide genetic variation"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the history of life on Earth",
      indicator: "Student can describe the major events in Earth's history"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Distinguish between homologous and analogous structures",
      indicator: "Student can differentiate between these types of structures"
    },
    // HARD LEVEL
    {
      id: "obj_009",
      level: "hard",
      description: "Analyze the evidence for evolution from fossils",
      indicator: "Student can explain how fossils support evolution"
    },
    {
      id: "obj_010",
      level: "hard",
      description: "Explain the mechanisms of evolution",
      indicator: "Student can describe genetic drift, gene flow, and natural selection"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain human evolution and our ancestors",
      indicator: "Student can describe the evolutionary history of humans"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Evaluate the impact of evolutionary theory on biology and society",
      indicator: "Student can discuss the importance of evolution in modern biology"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Evolution - The Story of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Discover how life on Earth has evolved over billions of years through natural selection and adaptation."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Evolution</h2>
      <p><strong>Evolution</strong> is the process by which species change over time through the accumulation of genetic variations. It explains the diversity of life on Earth and how all living things are related through common ancestry.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🔄 Key Concepts</h3>
          <ul>
            <li>✓ Natural Selection</li>
            <li>✓ Adaptation</li>
            <li>✓ Speciation</li>
            <li>✓ Evidence for Evolution</li>
            <li>✓ Human Evolution</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Life on Earth is ~3.8 billion years old</li>
            <li>• Humans share 98.8% DNA with chimpanzees</li>
            <li>• All life shares a common ancestor</li>
            <li>• Evolution is still happening today</li>
            <li>• Darwin's theory was published in 1859</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Evolution Matters</h4>
        <p>Evolution is the foundation of modern biology. It explains the diversity of life, how organisms are related, and how species adapt to their environments.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is Evolution?",
        objective: "obj_001",
        text: `
          <h3>Understanding Evolution</h3>
          <p><strong>Evolution</strong> is the change in the heritable characteristics of biological populations over successive generations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Points</h4>
              <ul>
                <li>• Populations evolve, not individuals</li>
                <li>• Evolution occurs over generations</li>
                <li>• Genetic changes drive evolution</li>
                <li>• Environment influences evolution</li>
                <li>• All species share common ancestors</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Misconceptions</h4>
              <ul>
                <li>• Evolution is NOT just a theory</li>
                <li>• Humans did NOT evolve from monkeys</li>
                <li>• Evolution does NOT happen overnight</li>
                <li>• Evolution is NOT random</li>
                <li>• Evolution DOES have evidence</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Charles Darwin and Natural Selection",
        objective: "obj_002",
        text: `
          <h3>Darwin's Theory of Natural Selection</h3>
          <p><strong>Charles Darwin</strong> proposed the theory of evolution by natural selection in his book <em>On the Origin of Species</em> (1859).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Darwin's Observations</h4>
              <ul>
                <li>• Organisms produce more offspring than can survive</li>
                <li>• There is variation within populations</li>
                <li>• Some traits give individuals advantages</li>
                <li>• Advantageous traits are passed on</li>
                <li>• Over time, populations change</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Voyage of the Beagle</h4>
              <ul>
                <li>• Darwin sailed around the world (1831-1836)</li>
                <li>• Visited the Galapagos Islands</li>
                <li>• Studied finches with different beak shapes</li>
                <li>• Observed tortoises on different islands</li>
                <li>• His observations led to his theory</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Natural Selection in Action:</strong>
            <ul>
              <li><strong>Peppered Moths:</strong> Light and dark forms</li>
              <li>• Before industrial revolution: Light moths were common</li>
              <li>• After industrial revolution: Dark moths became common</li>
              <li>• Reason: Dark moths were camouflaged against soot-covered trees</li>
              <li>• Birds ate more light moths, so dark moths survived and reproduced</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Evidence for Evolution",
        objective: "obj_003",
        text: `
          <h3>Evidence for Evolution</h3>
          <p>There are multiple lines of evidence that support the theory of evolution.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Fossil Evidence</h4>
              <ul>
                <li>• Fossils show gradual change over time</li>
                <li>• Transitional fossils show links between species</li>
                <li>• Example: Archaeopteryx (dinosaur to bird)</li>
                <li>• Example: Tiktaalik (fish to tetrapod)</li>
                <li>• Fossil record shows progression of life</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Anatomical Evidence</h4>
              <ul>
                <li><strong>Homologous Structures:</strong></li>
                <li>• Same structure, different function</li>
                <li>• Example: Human arm, whale flipper, bat wing</li>
                <li><strong>Vestigial Structures:</strong></li>
                <li>• Structures with no current function</li>
                <li>• Example: Human appendix, whale hip bones</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Genetic Evidence</h4>
              <ul>
                <li>• All life uses DNA as genetic material</li>
                <li>• Similar genes in different species</li>
                <li>• Humans share 98.8% DNA with chimps</li>
                <li>• Pseudogenes show evolutionary history</li>
                <li>• DNA can be used to build evolutionary trees</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Biogeographical Evidence</h4>
              <ul>
                <li>• Species are distributed based on evolutionary history</li>
                <li>• Island species are unique but related to nearby mainland species</li>
                <li>• Australia has unique marsupials</li>
                <li>• Galapagos finches are unique to each island</li>
                <li>• Continental drift explains some distributions</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Adaptations",
        objective: "obj_004",
        text: `
          <h3>Adaptations</h3>
          <p><strong>Adaptations</strong> are traits that help organisms survive and reproduce in their environment.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structural Adaptations</h4>
              <ul>
                <li>• Physical features of the body</li>
                <li>• Example: Camel's hump (stores fat)</li>
                <li>• Example: Polar bear's white fur (camouflage)</li>
                <li>• Example: Bird's beak shape</li>
                <li>• Example: Cactus spines (protection)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Behavioral Adaptations</h4>
              <ul>
                <li>• Actions organisms take to survive</li>
                <li>• Example: Migration (moving to warmer areas)</li>
                <li>• Example: Hibernation (winter sleep)</li>
                <li>• Example: Social behavior (living in groups)</li>
                <li>• Example: Courtship behaviors</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Physiological Adaptations</h4>
              <ul>
                <li>• Internal body functions</li>
                <li>• Example: Venom production</li>
                <li>• Example: Antibiotic resistance in bacteria</li>
                <li>• Example: Creating antifreeze proteins</li>
                <li>• Example: Efficient kidney function in deserts</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Mechanisms of Evolution",
        objective: "obj_010",
        text: `
          <h3>Mechanisms of Evolution</h3>
          <p>Evolution occurs through several mechanisms that change allele frequencies in populations.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Natural Selection</h4>
              <ul>
                <li>• Traits that improve survival are passed on</li>
                <li>• Directional selection: Favors one extreme</li>
                <li>• Stabilizing selection: Favors the average</li>
                <li>• Disruptive selection: Favors both extremes</li>
                <li>• Example: Peppered moths</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Genetic Drift</h4>
              <ul>
                <li>• Random changes in allele frequencies</li>
                <li>• More significant in small populations</li>
                <li>• Example: Founder effect</li>
                <li>• Example: Bottleneck effect</li>
                <li>• Random, not based on fitness</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Gene Flow</h4>
              <ul>
                <li>• Movement of genes between populations</li>
                <li>• Migration of individuals</li>
                <li>• Reduces differences between populations</li>
                <li>• Introduces new alleles</li>
                <li>• Example: Animals migrating between areas</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mutation</h4>
              <ul>
                <li>• Changes in DNA sequence</li>
                <li>• The source of new alleles</li>
                <li>• Can be beneficial, neutral, or harmful</li>
                <li>• Provides raw material for evolution</li>
                <li>• Example: Antibiotic resistance</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Speciation",
        objective: "obj_005",
        text: `
          <h3>Speciation</h3>
          <p><strong>Speciation</strong> is the formation of new species from existing species.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Isolation</h4>
              <ul>
                <li><strong>Geographic Isolation:</strong></li>
                <li>• Physical barriers (mountains, rivers, oceans)</li>
                <li>• Populations become separated</li>
                <li><strong>Reproductive Isolation:</strong></li>
                <li>• Cannot interbreed</li>
                <li>• Different mating seasons or behaviors</li>
                <li>• Incompatible reproductive structures</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Speciation Examples</h4>
              <ul>
                <li><strong>Galapagos Finches:</strong></li>
                <li>• Different beak shapes</li>
                <li>• Adapted to different food sources</li>
                <li><strong>Darwin's Finches:</strong></li>
                <li>• 13 different species from one ancestor</li>
                <li>• Each species has unique beak shape</li>
                <li>• Isolation on different islands</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "The History of Life on Earth",
        objective: "obj_007",
        text: `
          <h3>The History of Life on Earth</h3>
          <p>Life on Earth has a long and complex history spanning nearly 4 billion years.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Major Events</h4>
              <ul>
                <li>• <strong>4.6 BYA:</strong> Earth forms</li>
                <li>• <strong>3.8 BYA:</strong> First life appears</li>
                <li>• <strong>2.5 BYA:</strong> Photosynthesis begins</li>
                <li>• <strong>1.5 BYA:</strong> Eukaryotic cells evolve</li>
                <li>• <strong>600 MYA:</strong> First complex animals</li>
                <li>• <strong>500 MYA:</strong> Cambrian explosion</li>
                <li>• <strong>400 MYA:</strong> Plants colonize land</li>
                <li>• <strong>350 MYA:</strong> First insects</li>
                <li>• <strong>230 MYA:</strong> First dinosaurs</li>
                <li>• <strong>65 MYA:</strong> Dinosaurs go extinct</li>
                <li>• <strong>200,000 YA:</strong> Modern humans appear</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mass Extinctions</h4>
              <ul>
                <li>• <strong>Permian-Triassic:</strong> 252 MYA</li>
                <li>• 96% of marine species extinct</li>
                <li>• Largest extinction event</li>
                <li>• <strong>End-Cretaceous:</strong> 65 MYA</li>
                <li>• Dinosaurs went extinct</li>
                <li>• Allowed mammals to diversify</li>
                <li>• <strong>Current Extinction:</strong></li>
                <li>• Human-caused</li>
                <li>• 1 million species at risk</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Human Evolution",
        objective: "obj_011",
        text: `
          <h3>Human Evolution</h3>
          <p>Modern humans (Homo sapiens) evolved through a series of stages from earlier hominins.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Human Ancestors</h4>
              <ul>
                <li>• <strong>Australopithecus:</strong></li>
                <li>• 4-2 million years ago</li>
                <li>• Lucy (3.2 MYA)</li>
                <li>• Bipedal (walked on two legs)</li>
                <li>• Small brain</li>
                <li>• <strong>Homo habilis:</strong></li>
                <li>• 2.4-1.4 million years ago</li>
                <li>• First tool makers</li>
                <li>• Larger brain</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Later Human Ancestors</h4>
              <ul>
                <li>• <strong>Homo erectus:</strong></li>
                <li>• 1.9 million - 100,000 years ago</li>
                <li>• Used fire</li>
                <li>• Migrated out of Africa</li>
                <li>• <strong>Homo sapiens:</strong></li>
                <li>• 300,000 years ago to present</li>
                <li>• Modern humans</li>
                <li>• Complex language</li>
                <li>• Art and culture</li>
                <li>• <strong>Neanderthals:</strong></li>
                <li>• 400,000 - 40,000 years ago</li>
                <li>• Coexisted with modern humans</li>
                <li>• Some interbreeding occurred</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Key Adaptations in Human Evolution:</strong>
            <ul>
              <li>• <strong>Bipedalism:</strong> Walking on two legs</li>
              <li>• <strong>Large brain:</strong> Increased cognitive ability</li>
              <li>• <strong>Tool use:</strong> Made and used tools</li>
              <li>• <strong>Language:</strong> Complex communication</li>
              <li>• <strong>Social behavior:</strong> Living in groups</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Evidence from Fossils",
        objective: "obj_009",
        text: `
          <h3>Fossil Evidence</h3>
          <p>Fossils provide direct evidence of evolution and the history of life.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 What Fossils Show</h4>
              <ul>
                <li>• Species have changed over time</li>
                <li>• Some species are now extinct</li>
                <li>• Transitional forms exist</li>
                <li>• Progression from simple to complex</li>
                <li>• Relationships between species</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Famous Transitional Fossils</h4>
              <ul>
                <li><strong>Archaeopteryx:</strong> Dinosaur to bird</li>
                <li><strong>Tiktaalik:</strong> Fish to tetrapod</li>
                <li><strong>Australopithecus:</strong> Ape to human</li>
                <li><strong>Pakicetus:</strong> Land mammal to whale</li>
                <li><strong>Transitional forms:</strong> Show intermediate traits</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Homologous and Analogous Structures",
        objective: "obj_008",
        text: `
          <h3>Homologous vs Analogous Structures</h3>
          <p>Comparing structures across species helps us understand evolutionary relationships.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Homologous Structures</h4>
              <ul>
                <li>• Same structure, different function</li>
                <li>• Evidence of common ancestry</li>
                <li>• Same bones, different uses</li>
                <li><strong>Examples:</strong></li>
                <li>• Human arm, whale flipper, bat wing</li>
                <li>• All have similar bone structure</li>
                <li>• But different functions</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Analogous Structures</h4>
              <ul>
                <li>• Different structure, same function</li>
                <li>• Evidence of convergent evolution</li>
                <li>• Similar environment, similar adaptation</li>
                <li><strong>Examples:</strong></li>
                <li>• Bird wing and insect wing</li>
                <li>• Both for flying</li>
                <li>• Different structures</li>
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
          <h4>🔄 Evolution Basics</h4>
          <ul>
            <li>• Evolution is change over time</li>
            <li>• Natural selection drives evolution</li>
            <li>• Adaptations help organisms survive</li>
            <li>• All life shares common ancestors</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Evidence for Evolution</h4>
          <ul>
            <li>• Fossils</li>
            <li>• Anatomy</li>
            <li>• Genetics</li>
            <li>• Biogeography</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Evolution is the foundation of modern biology. It explains the diversity of life and our place in the natural world.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "Evolution is just a theory",
        correction: "Evolution is a well-supported scientific theory",
        explanation: "In science, 'theory' means a well-tested explanation, not a guess."
      },
      {
        id: "mis_002",
        misconception: "Humans evolved from monkeys",
        correction: "Humans and monkeys share a common ancestor",
        explanation: "Both evolved from a common ancestor that lived millions of years ago."
      },
      {
        id: "mis_003",
        misconception: "Evolution is random",
        correction: "Mutations are random; natural selection is not",
        explanation: "Natural selection is a non-random process that favors beneficial traits."
      },
      {
        id: "mis_004",
        misconception: "Evolution happens quickly",
        correction: "Evolution happens over many generations",
        explanation: "Evolution occurs over millions of years, though it can be observed in organisms with short generation times."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medicine",
        description: "Understanding evolution helps fight disease.",
        example: "Antibiotic resistance in bacteria"
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Evolution helps improve crops.",
        example: "Selective breeding and GMOs"
      },
      {
        id: "app_003",
        title: "Conservation",
        description: "Understanding evolution helps protect species.",
        example: "Maintaining genetic diversity"
      },
      {
        id: "app_004",
        title: "Forensic Science",
        description: "DNA evidence helps solve crimes.",
        example: "DNA fingerprinting"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Evolution", definition: "Change in heritable characteristics over generations." },
    { term: "Natural Selection", definition: "Process where organisms with favorable traits survive and reproduce." },
    { term: "Adaptation", definition: "A trait that helps an organism survive in its environment." },
    { term: "Speciation", definition: "The formation of new species." },
    { term: "Homologous Structure", definition: "Same structure, different function (common ancestry)." },
    { term: "Analogous Structure", definition: "Different structure, same function (convergent evolution)." },
    { term: "Vestigial Structure", definition: "A structure with no current function." },
    { term: "Genetic Drift", definition: "Random change in allele frequencies." },
    { term: "Gene Flow", definition: "Movement of alleles between populations." },
    { term: "Mutation", definition: "A change in DNA sequence." },
    { term: "Fossil", definition: "Preserved remains of ancient organisms." },
    { term: "Transitional Fossil", definition: "A fossil showing intermediate traits." },
    { term: "Bipedalism", definition: "Walking on two legs." },
    { term: "Hominin", definition: "A member of the human evolutionary lineage." },
    { term: "Convergent Evolution", definition: "Similar traits evolving independently." },
    { term: "Divergent Evolution", definition: "Different traits evolving from a common ancestor." },
    { term: "Coevolution", definition: "Two species evolving in response to each other." },
    { term: "Extinction", definition: "The end of a species." }
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
      question: "What is evolution?",
      type: "multiple_choice",
      options: [
        "Change in individual organisms during their lifetime",
        "Change in populations over generations",
        "The creation of new species overnight",
        "The extinction of all species"
      ],
      answer: "Change in populations over generations",
      explanation: "Evolution is the change in heritable characteristics of populations over generations."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "Who proposed the theory of natural selection?",
      type: "multiple_choice",
      options: [
        "Gregor Mendel",
        "Charles Darwin",
        "Louis Pasteur",
        "Albert Einstein"
      ],
      answer: "Charles Darwin",
      explanation: "Charles Darwin proposed the theory of evolution by natural selection in 1859."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is an example of evidence for evolution?",
      type: "multiple_choice",
      options: [
        "Fossils",
        "Similar DNA",
        "Homologous structures",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Fossils, DNA, and homologous structures are all evidence for evolution."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is an adaptation?",
      type: "multiple_choice",
      options: [
        "A trait that helps an organism survive",
        "A random change in DNA",
        "The process of becoming extinct",
        "A type of fossil"
      ],
      answer: "A trait that helps an organism survive",
      explanation: "Adaptations are traits that help organisms survive and reproduce in their environment."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "What role do mutations play in evolution?",
      type: "multiple_choice",
      options: [
        "They prevent evolution",
        "They create new genetic variation",
        "They always harm organisms",
        "They cause extinction"
      ],
      answer: "They create new genetic variation",
      explanation: "Mutations are the source of new alleles and genetic variation."
    },
    {
      id: "prac_006",
      objective: "obj_005",
      difficulty: "medium",
      question: "What is speciation?",
      type: "multiple_choice",
      options: [
        "The extinction of a species",
        "The formation of a new species",
        "The migration of organisms",
        "The adaptation of a species"
      ],
      answer: "The formation of a new species",
      explanation: "Speciation is the process by which new species form from existing species."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "How old is life on Earth?",
      type: "multiple_choice",
      options: [
        "About 3.8 billion years",
        "About 1 billion years",
        "About 600 million years",
        "About 100 million years"
      ],
      answer: "About 3.8 billion years",
      explanation: "Life first appeared on Earth about 3.8 billion years ago."
    },
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is a homologous structure?",
      type: "multiple_choice",
      options: [
        "Same structure, different function",
        "Different structure, same function",
        "Same structure, same function",
        "A structure with no function"
      ],
      answer: "Same structure, different function",
      explanation: "Homologous structures have the same underlying structure but different functions."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a transitional fossil?",
      type: "multiple_choice",
      options: [
        "A fossil that is completely preserved",
        "A fossil showing intermediate traits between species",
        "A fossil that is very old",
        "A fossil of a modern species"
      ],
      answer: "A fossil showing intermediate traits between species",
      explanation: "Transitional fossils show traits of two different groups."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is genetic drift?",
      type: "multiple_choice",
      options: [
        "Random change in allele frequencies",
        "Movement of genes between populations",
        "Natural selection",
        "Change in DNA sequence"
      ],
      answer: "Random change in allele frequencies",
      explanation: "Genetic drift is a random change in allele frequencies, especially in small populations."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "Which species is the direct ancestor of modern humans?",
      type: "multiple_choice",
      options: [
        "Homo habilis",
        "Homo erectus",
        "Neanderthals",
        "There is no single direct ancestor; we share a common ancestor with other hominins"
      ],
      answer: "There is no single direct ancestor; we share a common ancestor with other hominins",
      explanation: "Modern humans evolved through a complex branching process."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "Why is evolution important in biology?",
      type: "multiple_choice",
      options: [
        "It explains the diversity of life",
        "It helps us understand disease",
        "It explains how species adapt",
        "All of the above"
      ],
      answer: "All of the above",
      explanation: "Evolution is foundational to all of biology and has many practical applications."
    },
    {
      id: "prac_013",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is an example of a beneficial mutation?",
      type: "multiple_choice",
      options: [
        "Antibiotic resistance in bacteria",
        "Cystic fibrosis",
        "Color blindness",
        "Down syndrome"
      ],
      answer: "Antibiotic resistance in bacteria",
      explanation: "Antibiotic resistance is a beneficial mutation for bacteria."
    },
    {
      id: "prac_014",
      objective: "obj_003",
      difficulty: "hard",
      question: "How does DNA provide evidence for evolution?",
      type: "multiple_choice",
      options: [
        "All organisms have different DNA",
        "Similar DNA indicates common ancestry",
        "DNA does not provide evidence for evolution",
        "DNA changes randomly"
      ],
      answer: "Similar DNA indicates common ancestry",
      explanation: "Species with more similar DNA are more closely related."
    },
    {
      id: "prac_015",
      objective: "obj_008",
      difficulty: "hard",
      question: "What is a vestigial structure?",
      type: "multiple_choice",
      options: [
        "A structure with no current function",
        "A structure that is well-adapted",
        "A structure that is unique to a species",
        "A structure found only in fossils"
      ],
      answer: "A structure with no current function",
      explanation: "Vestigial structures are remnants of structures that had a function in ancestors."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_evolution",
    title: "Evolution Quiz",
    description: "Test your understanding of evolution",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is evolution?",
        type: "short_answer",
        answer_key: "Change in populations over generations",
        explanation: "Evolution is the change in heritable characteristics of populations over generations."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is natural selection?",
        type: "short_answer",
        answer_key: "Organisms with favorable traits survive and reproduce",
        explanation: "Natural selection favors traits that help organisms survive and reproduce."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "Give two examples of evidence for evolution.",
        type: "short_answer",
        answer_key: "Fossils and DNA (or any two: fossils, DNA, homologous structures, biogeography)",
        explanation: "Multiple lines of evidence support evolution."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is an adaptation?",
        type: "short_answer",
        answer_key: "A trait that helps an organism survive",
        explanation: "Adaptations are traits that help organisms survive and reproduce in their environment."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is speciation?",
        type: "short_answer",
        answer_key: "The formation of new species",
        explanation: "Speciation is the process by which new species form."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What role do mutations play in evolution?",
        type: "short_answer",
        answer_key: "They create new genetic variation",
        explanation: "Mutations are the source of new alleles and genetic variation."
      },
      {
        id: "ass_007",
        objective: "obj_007",
        difficulty: "hard",
        question: "Approximately how old is life on Earth?",
        type: "short_answer",
        answer_key: "About 3.8 billion years",
        explanation: "Life first appeared on Earth about 3.8 billion years ago."
      },
      {
        id: "ass_008",
        objective: "obj_008",
        difficulty: "hard",
        question: "What is the difference between homologous and analogous structures?",
        type: "short_answer",
        answer_key: "Homologous = same structure, different function; Analogous = different structure, same function",
        explanation: "Homologous structures indicate common ancestry; analogous structures indicate convergent evolution."
      },
      {
        id: "ass_009",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is genetic drift?",
        type: "short_answer",
        answer_key: "Random change in allele frequencies",
        explanation: "Genetic drift is a random change in allele frequencies, especially in small populations."
      },
      {
        id: "ass_010",
        objective: "obj_011",
        difficulty: "hard",
        question: "What adaptation allowed early humans to walk on two legs?",
        type: "short_answer",
        answer_key: "Bipedalism",
        explanation: "Bipedalism is the ability to walk on two legs, a key adaptation in human evolution."
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
        "Understand evolution and natural selection",
        "Identify evidence for evolution",
        "Explain speciation and adaptation",
        "Understand human evolution"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is evolution?" },
        { time: "5-10 min", activity: "Direct Instruction - Darwin and Natural Selection" },
        { time: "10-15 min", activity: "Direct Instruction - Evidence for Evolution" },
        { time: "15-20 min", activity: "Direct Instruction - Adaptations" },
        { time: "20-25 min", activity: "Direct Instruction - Speciation" },
        { time: "25-30 min", activity: "Direct Instruction - Human Evolution" },
        { time: "30-35 min", activity: "Direct Instruction - Mechanisms of Evolution" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "Change in populations over generations",
        prac_002: "Charles Darwin",
        prac_003: "All of the above",
        prac_004: "A trait that helps an organism survive",
        prac_005: "They create new genetic variation",
        prac_006: "The formation of a new species",
        prac_007: "About 3.8 billion years",
        prac_008: "Same structure, different function",
        prac_009: "A fossil showing intermediate traits between species",
        prac_010: "Random change in allele frequencies",
        prac_011: "There is no single direct ancestor; we share a common ancestor with other hominins",
        prac_012: "All of the above",
        prac_013: "Antibiotic resistance in bacteria",
        prac_014: "Similar DNA indicates common ancestry",
        prac_015: "A structure with no current function"
      },
      assessment: {
        ass_001: "Change in populations over generations",
        ass_002: "Organisms with favorable traits survive and reproduce",
        ass_003: "Fossils and DNA (or any two: fossils, DNA, homologous structures, biogeography)",
        ass_004: "A trait that helps an organism survive",
        ass_005: "The formation of new species",
        ass_006: "They create new genetic variation",
        ass_007: "About 3.8 billion years",
        ass_008: "Homologous = same structure, different function; Analogous = different structure, same function",
        ass_009: "Random change in allele frequencies",
        ass_010: "Bipedalism"
      }
    },
    extensionActivities: [
      "Research a famous fossil and its significance",
      "Create a timeline of human evolution",
      "Study antibiotic resistance in bacteria",
      "Research the Galapagos finches",
      "Watch a documentary about evolution"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts first",
        "Use simple examples",
        "Use visual aids",
        "Provide vocabulary list"
      ],
      advanced: [
        "Research molecular evolution",
        "Study phylogenetics",
        "Research evolutionary developmental biology (Evo-Devo)",
        "Study the evolution of specific traits"
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
      title: "Natural Selection",
      description: "Diagram showing how natural selection works",
      url: "/diagrams/natural-selection.png",
      alt: "Natural selection diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Homologous Structures",
      description: "Diagram showing homologous structures",
      url: "/diagrams/homologous-structures.png",
      alt: "Homologous structures diagram"
    },
    {
      id: "vis_003",
      type: "timeline",
      title: "Timeline of Life on Earth",
      description: "Timeline showing major events in Earth's history",
      url: "/diagrams/timeline-of-life.png",
      alt: "Timeline of life"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "Human Evolution",
      description: "Diagram showing the evolution of humans",
      url: "/diagrams/human-evolution.png",
      alt: "Human evolution diagram"
    }
  ]
};