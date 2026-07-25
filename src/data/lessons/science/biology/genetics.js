// Location: src/data/lessons/science/biology/genetics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "bio_lesson_genetics",
  subject: "Biology",
  topic: "Genetics",
  name: "Genetics",
  icon: "🧬",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 14,
    totalPracticeQuestions: 20,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 16,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of cell biology",
    "Knowledge of cell structure",
    "Basic understanding of reproduction"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Ecology",
      file: "science/biology/ecology.js"
    },
    {
      name: "Evolution",
      file: "science/biology/evolution.js"
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
      description: "Define genetics and explain its importance",
      indicator: "Student can explain what genetics is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify the structure and function of DNA",
      indicator: "Student can describe the double helix structure of DNA"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Define key genetic terms: gene, allele, chromosome, genotype, phenotype",
      indicator: "Student can define and give examples of each term"
    },
    {
      id: "obj_004",
      level: "easy",
      description: "Explain the difference between dominant and recessive alleles",
      indicator: "Student can distinguish between dominant and recessive traits"
    },
    // MEDIUM LEVEL
    {
      id: "obj_005",
      level: "medium",
      description: "Explain how DNA replicates and how proteins are synthesized",
      indicator: "Student can describe transcription and translation"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Solve basic genetic problems using Punnett squares",
      indicator: "Student can use Punnett squares to predict offspring traits"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the difference between complete dominance, codominance, and incomplete dominance",
      indicator: "Student can give examples of each inheritance pattern"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe the process of meiosis and its role in genetic variation",
      indicator: "Student can explain how meiosis creates genetic diversity"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain how mutations occur and their effects",
      indicator: "Student can describe different types of mutations and their consequences"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Analyze complex genetic crosses including dihybrid crosses",
      indicator: "Student can solve dihybrid cross problems using Punnett squares"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain sex-linked inheritance and give examples",
      indicator: "Student can explain why some traits are more common in one sex"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain the role of genetic engineering and its applications",
      indicator: "Student can describe the process and uses of genetic engineering"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Analyze the ethical issues surrounding genetic technology",
      indicator: "Student can discuss the pros and cons of genetic technology"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Explain how genetic disorders are inherited and diagnosed",
      indicator: "Student can describe the inheritance of genetic disorders like cystic fibrosis"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Genetics - The Blueprint of Life",
    duration: "20:00 - 28:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about DNA, genes, inheritance, and how traits are passed from parents to offspring."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Genetics</h2>
      <p><strong>Genetics</strong> is the study of genes, heredity, and variation in living organisms. It explains how traits are passed from parents to offspring and why individuals of the same species can look different.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🧬 Key Concepts</h3>
          <ul>
            <li>✓ DNA Structure</li>
            <li>✓ Genes and Alleles</li>
            <li>✓ Inheritance Patterns</li>
            <li>✓ Punnett Squares</li>
            <li>✓ Genetic Variation</li>
            <li>✓ Genetic Disorders</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• Humans have 46 chromosomes (23 pairs)</li>
            <li>• DNA is 99.9% identical between humans</li>
            <li>• The human genome has ~20,000 genes</li>
            <li>• Gregor Mendel is the "Father of Genetics"</li>
            <li>• DNA was discovered in 1953 by Watson and Crick</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Genetics Matters</h4>
        <p>Genetics helps us understand inheritance, disease, evolution, and even develop new medical treatments. It's fundamental to biology and medicine.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "DNA Structure and Function",
        objective: "obj_002",
        text: `
          <h3>DNA - The Genetic Material</h3>
          <p><strong>DNA</strong> (Deoxyribonucleic Acid) is the molecule that carries the genetic instructions for all living organisms.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Structure of DNA</h4>
              <ul>
                <li><strong>Double Helix:</strong> Two strands twisted together</li>
                <li><strong>Nucleotides:</strong> Building blocks of DNA</li>
                <li><strong>Base Pairs:</strong> A-T and G-C</li>
                <li><strong>Sugar-Phosphate Backbone:</strong> Forms the sides of the helix</li>
                <li><strong>Hydrogen Bonds:</strong> Hold the two strands together</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 The Four Bases</h4>
              <ul>
                <li><strong>Adenine (A):</strong> Pairs with Thymine (T)</li>
                <li><strong>Thymine (T):</strong> Pairs with Adenine (A)</li>
                <li><strong>Guanine (G):</strong> Pairs with Cytosine (C)</li>
                <li><strong>Cytosine (C):</strong> Pairs with Guanine (G)</li>
                <li>• A-T has 2 hydrogen bonds</li>
                <li>• G-C has 3 hydrogen bonds</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Functions of DNA:</strong>
            <ul>
              <li>✓ Stores genetic information</li>
              <li>✓ Replicates to pass to daughter cells</li>
              <li>✓ Codes for proteins</li>
              <li>✓ Determines traits</li>
              <li>✓ Controls cell functions</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Genes, Chromosomes, and Alleles",
        objective: "obj_003",
        text: `
          <h3>Genes, Chromosomes, and Alleles</h3>
          <p>Genes are segments of DNA that code for specific traits.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>🧬 Chromosome</h4>
              <ul>
                <li>• Made of DNA</li>
                <li>• Humans: 46 (23 pairs)</li>
                <li>• 44 autosomes (22 pairs)</li>
                <li>• 2 sex chromosomes (XX or XY)</li>
                <li>• Found in the nucleus</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>🧬 Gene</h4>
              <ul>
                <li>• Segment of DNA</li>
                <li>• Codes for a protein</li>
                <li>• Determines a trait</li>
                <li>• Example: Gene for eye color</li>
                <li>• Found on chromosomes</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>🧬 Allele</h4>
              <ul>
                <li>• Different forms of a gene</li>
                <li>• Example: Blue eyes vs Brown eyes</li>
                <li>• Each parent gives one allele</li>
                <li>• Can be dominant or recessive</li>
                <li>• Two alleles make a genotype</li>
              </ul>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Genotype</h4>
              <ul>
                <li>• The genetic makeup</li>
                <li>• The alleles present</li>
                <li>• Example: BB, Bb, bb</li>
                <li>• Not always visible</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Phenotype</h4>
              <ul>
                <li>• The physical expression</li>
                <li>• The observable traits</li>
                <li>• Example: Brown eyes</li>
                <li>• Influenced by genotype and environment</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Dominant and Recessive Alleles",
        objective: "obj_004",
        text: `
          <h3>Dominant and Recessive Alleles</h3>
          <p><strong>Dominant alleles</strong> mask the expression of <strong>recessive alleles</strong>.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Dominant Alleles</h4>
              <ul>
                <li>• Represented by a capital letter (B)</li>
                <li>• Expressed when present</li>
                <li>• Masks the recessive allele</li>
                <li>• Example: Brown eyes (B)</li>
                <li>• AA or Aa = Dominant trait shown</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Recessive Alleles</h4>
              <ul>
                <li>• Represented by a lowercase letter (b)</li>
                <li>• Only expressed when homozygous</li>
                <li>• Masked by dominant allele</li>
                <li>• Example: Blue eyes (b)</li>
                <li>• aa = Recessive trait shown</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Example: Eye Color</strong>
            <ul>
              <li>• <strong>Dominant:</strong> Brown (B)</li>
              <li>• <strong>Recessive:</strong> Blue (b)</li>
              <li>• <strong>BB:</strong> Brown eyes</li>
              <li>• <strong>Bb:</strong> Brown eyes</li>
              <li>• <strong>bb:</strong> Blue eyes</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Mendelian Genetics",
        objective: "obj_006",
        text: `
          <h3>Gregor Mendel and His Laws</h3>
          <p><strong>Gregor Mendel</strong> is the "Father of Genetics." He experimented with pea plants and discovered the basic principles of inheritance.</p>
          
          <h4>Mendel's Laws:</h4>
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Law of Segregation</h4>
              <ul>
                <li>• Alleles separate during gamete formation</li>
                <li>• Each gamete gets one allele</li>
                <li>• Restored at fertilization</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Law of Independent Assortment</h4>
              <ul>
                <li>• Genes on different chromosomes</li>
                <li>• Assort independently</li>
                <li>• Creates genetic variation</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>3. Law of Dominance</h4>
              <ul>
                <li>• Some alleles are dominant</li>
                <li>• Some alleles are recessive</li>
                <li>• Dominant masks recessive</li>
              </ul>
            </div>
          </div>
          
          <h4 class="mt-4">Punnett Squares</h4>
          <p>A <strong>Punnett square</strong> is a tool used to predict the possible genotypes of offspring from a genetic cross.</p>
          
          <div class="example-box">
            <strong>📌 Monohybrid Cross Example:</strong>
            <p>Cross: Bb × Bb (Brown eyes × Brown eyes)</p>
            <table class="w-full border-collapse mt-2">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border p-2"></th>
                  <th class="border p-2">B</th>
                  <th class="border p-2">b</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2 font-bold">B</td>
                  <td class="border p-2">BB</td>
                  <td class="border p-2">Bb</td>
                </tr>
                <tr>
                  <td class="border p-2 font-bold">b</td>
                  <td class="border p-2">Bb</td>
                  <td class="border p-2">bb</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Results:</strong></p>
            <ul>
              <li>• 1 BB (25%) - Brown eyes</li>
              <li>• 2 Bb (50%) - Brown eyes</li>
              <li>• 1 bb (25%) - Blue eyes</li>
              <li>• Phenotype ratio: 3 Brown : 1 Blue</li>
              <li>• Genotype ratio: 1 BB : 2 Bb : 1 bb</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Inheritance Patterns",
        objective: "obj_007",
        text: `
          <h3>Types of Inheritance</h3>
          <p>Not all traits follow simple dominant/recessive patterns.</p>
          
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Complete Dominance</h4>
              <ul>
                <li>• One allele completely masks another</li>
                <li>• Only two phenotypes possible</li>
                <li>• Example: Pea plant height</li>
                <li>• Tall (T) is dominant</li>
                <li>• TT = Tall, Tt = Tall, tt = Dwarf</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Incomplete Dominance</h4>
              <ul>
                <li>• Heterozygote shows intermediate trait</li>
                <li>• Neither allele is fully dominant</li>
                <li>• Example: Snapdragon flowers</li>
                <li>• RR = Red, Rr = Pink, rr = White</li>
                <li>• 1:2:1 phenotype ratio</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Codominance</h4>
              <ul>
                <li>• Both alleles are expressed equally</li>
                <li>• Both phenotypes are visible</li>
                <li>• Example: Blood type (AB)</li>
                <li>• I^A I^A = Type A</li>
                <li>• I^A I^B = Type AB (both expressed)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Protein Synthesis",
        objective: "obj_005",
        text: `
          <h3>Protein Synthesis - From DNA to Protein</h3>
          <p>DNA contains the instructions for making proteins. This process involves two main steps:</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>1. Transcription</h4>
              <ul>
                <li>• DNA → mRNA</li>
                <li>• Occurs in the nucleus</li>
                <li>• RNA polymerase unwinds DNA</li>
                <li>• mRNA leaves the nucleus</li>
                <li>• mRNA is complementary to DNA</li>
                <li>• U replaces T in RNA</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>2. Translation</h4>
              <ul>
                <li>• mRNA → Protein</li>
                <li>• Occurs at ribosomes</li>
                <li>• tRNA brings amino acids</li>
                <li>• Codons on mRNA</li>
                <li>• Anticodons on tRNA</li>
                <li>• Amino acids link to form proteins</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 The Genetic Code:</strong>
            <ul>
              <li>• Codons: Three bases on mRNA</li>
              <li>• Each codon codes for one amino acid</li>
              <li>• Start codon: AUG (Methionine)</li>
              <li>• Stop codons: UAA, UAG, UGA</li>
              <li>• Example: DNA: TAC → mRNA: AUG → Amino Acid: Methionine</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Meiosis and Genetic Variation",
        objective: "obj_008",
        text: `
          <h3>Meiosis and Genetic Variation</h3>
          <p><strong>Meiosis</strong> is the process of cell division that produces gametes (sperm and egg cells) with half the chromosome number.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Meiosis Overview</h4>
              <ul>
                <li>• Produces 4 haploid cells</li>
                <li>• Reduces chromosome number by half</li>
                <li>• Two divisions: Meiosis I and Meiosis II</li>
                <li>• Crossing over occurs</li>
                <li>• Independent assortment occurs</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Sources of Genetic Variation</h4>
              <ul>
                <li>• <strong>Crossing Over:</strong> Exchange of DNA between homologous chromosomes</li>
                <li>• <strong>Independent Assortment:</strong> Random alignment of chromosomes</li>
                <li>• <strong>Random Fertilization:</strong> Any sperm can fertilize any egg</li>
                <li>• <strong>Mutations:</strong> Changes in DNA sequence</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Chromosome Numbers:</strong>
            <ul>
              <li>• <strong>Human:</strong> 46 chromosomes (23 pairs)</li>
              <li>• <strong>Gametes (Sperm/Egg):</strong> 23 chromosomes</li>
              <li>• <strong>Diploid (2n):</strong> Two sets of chromosomes</li>
              <li>• <strong>Haploid (n):</strong> One set of chromosomes</li>
              <li>• Fertilization restores diploid number</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Dihybrid Crosses",
        objective: "obj_010",
        text: `
          <h3>Dihybrid Crosses</h3>
          <p>A <strong>dihybrid cross</strong> involves tracking two different traits simultaneously.</p>
          
          <div class="example-box">
            <strong>📌 Example: Seed Shape and Color in Peas</strong>
            <ul>
              <li>• <strong>R:</strong> Round seed (dominant)</li>
              <li>• <strong>r:</strong> Wrinkled seed (recessive)</li>
              <li>• <strong>Y:</strong> Yellow seed (dominant)</li>
              <li>• <strong>y:</strong> Green seed (recessive)</li>
            </ul>
            <p>Cross: RrYy × RrYy</p>
            <p><strong>Phenotype Ratio:</strong></p>
            <ul>
              <li>• 9 Round Yellow</li>
              <li>• 3 Round Green</li>
              <li>• 3 Wrinkled Yellow</li>
              <li>• 1 Wrinkled Green</li>
              <li>• Ratio: 9:3:3:1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Sex-Linked Inheritance",
        objective: "obj_011",
        text: `
          <h3>Sex-Linked Inheritance</h3>
          <p><strong>Sex-linked traits</strong> are controlled by genes on the sex chromosomes (X and Y).</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 X-Linked Traits</h4>
              <ul>
                <li>• More common in males</li>
                <li>• Males have one X (XY)</li>
                <li>• Females have two X (XX)</li>
                <li>• Example: Color blindness</li>
                <li>• Example: Hemophilia</li>
                <li>• Males express the trait if they inherit it</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Examples</h4>
              <ul>
                <li><strong>Color Blindness:</strong></li>
                <li>• X^N = Normal vision</li>
                <li>• X^n = Color blind</li>
                <li>• X^n Y = Color blind male</li>
                <li>• X^n X^n = Color blind female</li>
                <li>• X^N X^n = Carrier female</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Why Are X-Linked Traits More Common in Males?</strong>
            <ul>
              <li>• Males have only one X chromosome</li>
              <li>• They inherit the X from their mother</li>
              <li>• If the X carries a recessive allele, it is expressed</li>
              <li>• Females need two copies of the recessive allele</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Mutations",
        objective: "obj_009",
        text: `
          <h3>Mutations</h3>
          <p>A <strong>mutation</strong> is a change in the DNA sequence. Mutations can be harmful, neutral, or beneficial.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Types of Mutations</h4>
              <ul>
                <li><strong>Gene Mutations:</strong></li>
                <li>• Point mutation (single base change)</li>
                <li>• Frameshift mutation (insertion/deletion)</li>
                <li><strong>Chromosomal Mutations:</strong></li>
                <li>• Deletion</li>
                <li>• Duplication</li>
                <li>• Inversion</li>
                <li>• Translocation</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Causes of Mutations</h4>
              <ul>
                <li>• <strong>Mutagens:</strong></li>
                <li>• Radiation (UV, X-rays)</li>
                <li>• Chemicals (carcinogens)</li>
                <li>• Viruses</li>
                <li>• <strong>Spontaneous:</strong></li>
                <li>• Errors in DNA replication</li>
                <li>• Errors in repair mechanisms</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Effects of Mutations:</strong>
            <ul>
              <li>• <strong>Harmful:</strong> Genetic disorders, cancer</li>
              <li>• <strong>Neutral:</strong> No effect (silent mutations)</li>
              <li>• <strong>Beneficial:</strong> Evolution, adaptation</li>
              <li>• Example: Sickle cell anemia provides resistance to malaria</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Genetic Disorders",
        objective: "obj_014",
        text: `
          <h3>Genetic Disorders</h3>
          <p>Genetic disorders are diseases caused by mutations or chromosomal abnormalities.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Single Gene Disorders</h4>
              <ul>
                <li><strong>Cystic Fibrosis:</strong> Recessive, affects lungs</li>
                <li><strong>Sickle Cell Anemia:</strong> Recessive, abnormal hemoglobin</li>
                <li><strong>Huntington's Disease:</strong> Dominant, affects brain</li>
                <li><strong>Tay-Sachs:</strong> Recessive, fatal in children</li>
                <li><strong>Phenylketonuria (PKU):</strong> Recessive, affects metabolism</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Chromosomal Disorders</h4>
              <ul>
                <li><strong>Down Syndrome:</strong> Trisomy 21</li>
                <li><strong>Turner Syndrome:</strong> XO (female with one X)</li>
                <li><strong>Klinefelter Syndrome:</strong> XXY (male with extra X)</li>
                <li><strong>Edward Syndrome:</strong> Trisomy 18</li>
                <li><strong>Patau Syndrome:</strong> Trisomy 13</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_012",
        title: "Genetic Engineering",
        objective: "obj_012",
        text: `
          <h3>Genetic Engineering</h3>
          <p><strong>Genetic engineering</strong> involves directly manipulating an organism's genes.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Tools and Techniques</h4>
              <ul>
                <li><strong>Recombinant DNA:</strong> Combining DNA from different sources</li>
                <li><strong>Restriction Enzymes:</strong> Cut DNA at specific sites</li>
                <li><strong>DNA Ligase:</strong> Joins DNA fragments</li>
                <li><strong>Plasmids:</strong> Small DNA circles in bacteria</li>
                <li><strong>CRISPR-Cas9:</strong> Gene editing tool</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Applications</h4>
              <ul>
                <li>• <strong>Medicine:</strong> Production of insulin, vaccines</li>
                <li>• <strong>Agriculture:</strong> GMO crops (pest resistance, better nutrition)</li>
                <li>• <strong>Forensics:</strong> DNA fingerprinting</li>
                <li>• <strong>Research:</strong> Model organisms</li>
                <li>• <strong>Gene Therapy:</strong> Treating genetic disorders</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_013",
        title: "Ethical Issues in Genetics",
        objective: "obj_013",
        text: `
          <h3>Ethical Issues in Genetics</h3>
          <p>Advances in genetics raise important ethical questions.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Ethical Questions</h4>
              <ul>
                <li>• Should we genetically engineer humans?</li>
                <li>• Should we clone humans?</li>
                <li>• Should we modify embryos?</li>
                <li>• Should we use GMOs in food?</li>
                <li>• Should genetic testing be mandatory?</li>
                <li>• Should genetic information be private?</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Debate Points</h4>
              <ul>
                <li><strong>For:</strong></li>
                <li>• Prevent genetic diseases</li>
                <li>• Improve food production</li>
                <li>• Advance medicine</li>
                <li><strong>Against:</strong></li>
                <li>• Playing God</li>
                <li>• Unknown consequences</li>
                <li>• Inequality</li>
                <li>• Ethical slippery slope</li>
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
          <h4>🧬 Genetics Basics</h4>
          <ul>
            <li>• DNA is the genetic material</li>
            <li>• Genes code for traits</li>
            <li>• Alleles are different forms of genes</li>
            <li>• Dominant and recessive alleles</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>🧬 Key Processes</h4>
          <ul>
            <li>• Protein synthesis</li>
            <li>• Meiosis</li>
            <li>• Mutations</li>
            <li>• Genetic engineering</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Genetics is the foundation of heredity and evolution. Understanding genes helps us understand life itself.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "If a trait is dominant, it is more common",
        correction: "Dominant traits can be rare (e.g., polydactyly)",
        explanation: "Dominance refers to expression, not frequency."
      },
      {
        id: "mis_002",
        misconception: "Genes are the only thing that determines traits",
        correction: "Environment also affects traits (nature vs nurture)",
        explanation: "Many traits are influenced by both genetics and environment."
      },
      {
        id: "mis_003",
        misconception: "Mutations are always harmful",
        correction: "Some mutations are neutral or beneficial",
        explanation: "Mutations are the source of genetic variation and evolution."
      },
      {
        id: "mis_004",
        misconception: "DNA and RNA are the same thing",
        correction: "DNA and RNA have different structures and functions",
        explanation: "DNA stores information; RNA helps make proteins."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Medical Genetics",
        description: "Understanding genetics helps diagnose and treat diseases.",
        example: "Genetic testing and gene therapy"
      },
      {
        id: "app_002",
        title: "Agriculture",
        description: "Genetics improves crop yield and resistance.",
        example: "GMO crops and selective breeding"
      },
      {
        id: "app_003",
        title: "Forensic Science",
        description: "DNA analysis helps solve crimes.",
        example: "DNA fingerprinting"
      },
      {
        id: "app_004",
        title: "Evolutionary Biology",
        description: "Genetics helps us understand evolution.",
        example: "DNA sequencing and phylogenetic trees"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Genetics", definition: "The study of genes and heredity." },
    { term: "DNA", definition: "Deoxyribonucleic acid, the genetic material." },
    { term: "Gene", definition: "A segment of DNA that codes for a protein." },
    { term: "Allele", definition: "A different form of a gene." },
    { term: "Chromosome", definition: "A structure made of DNA and protein." },
    { term: "Genotype", definition: "The genetic makeup of an organism." },
    { term: "Phenotype", definition: "The observable traits of an organism." },
    { term: "Dominant", definition: "An allele that masks the expression of another." },
    { term: "Recessive", definition: "An allele that is masked by a dominant allele." },
    { term: "Homozygous", definition: "Having two identical alleles." },
    { term: "Heterozygous", definition: "Having two different alleles." },
    { term: "Meiosis", definition: "Cell division that produces gametes." },
    { term: "Mutation", definition: "A change in DNA sequence." },
    { term: "Codominance", definition: "Both alleles are expressed equally." },
    { term: "Incomplete Dominance", definition: "The heterozygote shows an intermediate trait." },
    { term: "Sex-linked", definition: "A trait controlled by a gene on a sex chromosome." },
    { term: "Genetic Engineering", definition: "Direct manipulation of genes." },
    { term: "CRISPR", definition: "A gene-editing tool." },
    { term: "Protein Synthesis", definition: "The process of making proteins from DNA." },
    { term: "Punnett Square", definition: "A tool for predicting offspring genotypes." }
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
      question: "What is genetics?",
      type: "multiple_choice",
      options: [
        "The study of cells",
        "The study of genes and heredity",
        "The study of ecosystems",
        "The study of evolution"
      ],
      answer: "The study of genes and heredity",
      explanation: "Genetics is the study of genes, heredity, and variation."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What is the structure of DNA?",
      type: "multiple_choice",
      options: [
        "Single helix",
        "Double helix",
        "Triple helix",
        "Circular"
      ],
      answer: "Double helix",
      explanation: "DNA has a double helix structure, like a twisted ladder."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is a gene?",
      type: "multiple_choice",
      options: [
        "A segment of DNA that codes for a trait",
        "A protein",
        "A type of cell",
        "A chromosome"
      ],
      answer: "A segment of DNA that codes for a trait",
      explanation: "A gene is a segment of DNA that codes for a specific trait."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "What is a dominant allele?",
      type: "multiple_choice",
      options: [
        "An allele that is always expressed",
        "An allele that is masked",
        "An allele that is rare",
        "An allele that is found on the Y chromosome"
      ],
      answer: "An allele that is always expressed",
      explanation: "A dominant allele is always expressed when present."
    },
    {
      id: "prac_005",
      objective: "obj_006",
      difficulty: "medium",
      question: "In a cross between Bb × Bb, what is the probability of getting a homozygous recessive offspring?",
      type: "multiple_choice",
      options: ["0%", "25%", "50%", "75%"],
      answer: "25%",
      explanation: "The Punnett square shows 1 bb out of 4 = 25%."
    },
    {
      id: "prac_006",
      objective: "obj_007",
      difficulty: "medium",
      question: "What is incomplete dominance?",
      type: "multiple_choice",
      options: [
        "Both alleles are expressed equally",
        "The heterozygote shows an intermediate trait",
        "One allele completely masks another",
        "The allele is on the sex chromosome"
      ],
      answer: "The heterozygote shows an intermediate trait",
      explanation: "In incomplete dominance, the heterozygote shows a blend of both traits."
    },
    {
      id: "prac_007",
      objective: "obj_008",
      difficulty: "medium",
      question: "What is the result of meiosis?",
      type: "multiple_choice",
      options: [
        "2 diploid cells",
        "4 haploid cells",
        "2 haploid cells",
        "4 diploid cells"
      ],
      answer: "4 haploid cells",
      explanation: "Meiosis produces 4 haploid cells (gametes)."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_005",
      difficulty: "hard",
      question: "What is transcription?",
      type: "multiple_choice",
      options: [
        "DNA → RNA",
        "RNA → Protein",
        "DNA → Protein",
        "RNA → DNA"
      ],
      answer: "DNA → RNA",
      explanation: "Transcription is the process of making mRNA from DNA."
    },
    {
      id: "prac_009",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is the phenotype ratio for a dihybrid cross of RrYy × RrYy?",
      type: "multiple_choice",
      options: ["9:3:3:1", "3:1", "1:2:1", "9:3:4"],
      answer: "9:3:3:1",
      explanation: "A dihybrid cross of RrYy × RrYy gives a 9:3:3:1 phenotype ratio."
    },
    {
      id: "prac_010",
      objective: "obj_011",
      difficulty: "hard",
      question: "Why are X-linked traits more common in males?",
      type: "multiple_choice",
      options: [
        "Males have two X chromosomes",
        "Males have only one X chromosome",
        "Males are more susceptible to mutations",
        "Males express recessive alleles more often"
      ],
      answer: "Males have only one X chromosome",
      explanation: "Males have only one X chromosome, so any recessive allele on it will be expressed."
    },
    {
      id: "prac_011",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is a point mutation?",
      type: "multiple_choice",
      options: [
        "A mutation that affects one base pair",
        "A mutation that removes a chromosome",
        "A mutation that duplicates a chromosome",
        "A mutation that affects many genes"
      ],
      answer: "A mutation that affects one base pair",
      explanation: "A point mutation affects a single base pair in the DNA."
    },
    {
      id: "prac_012",
      objective: "obj_014",
      difficulty: "hard",
      question: "What type of inheritance does sickle cell anemia follow?",
      type: "multiple_choice",
      options: [
        "Autosomal dominant",
        "Autosomal recessive",
        "X-linked dominant",
        "X-linked recessive"
      ],
      answer: "Autosomal recessive",
      explanation: "Sickle cell anemia is an autosomal recessive disorder."
    },
    {
      id: "prac_013",
      objective: "obj_012",
      difficulty: "hard",
      question: "What is CRISPR used for?",
      type: "multiple_choice",
      options: [
        "DNA replication",
        "Gene editing",
        "Protein synthesis",
        "Cell division"
      ],
      answer: "Gene editing",
      explanation: "CRISPR is a powerful gene editing tool."
    },
    {
      id: "prac_014",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is an ethical concern of genetic engineering?",
      type: "multiple_choice",
      options: [
        "It is too expensive",
        "It could be used to 'design' babies",
        "It doesn't work",
        "It only works on animals"
      ],
      answer: "It could be used to 'design' babies",
      explanation: "Designer babies raise serious ethical concerns."
    },
    {
      id: "prac_015",
      objective: "obj_006",
      difficulty: "hard",
      question: "What is the genotype ratio in a cross between Bb × Bb?",
      type: "multiple_choice",
      options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
      answer: "1:2:1",
      explanation: "The genotype ratio is 1 BB : 2 Bb : 1 bb."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_genetics",
    title: "Genetics Quiz",
    description: "Test your understanding of genetics",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is genetics?",
        type: "short_answer",
        answer_key: "The study of genes and heredity",
        explanation: "Genetics is the study of genes, heredity, and variation."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "Describe the structure of DNA.",
        type: "short_answer",
        answer_key: "Double helix",
        explanation: "DNA has a double helix structure."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between genotype and phenotype?",
        type: "short_answer",
        answer_key: "Genotype is genetic makeup; phenotype is physical expression",
        explanation: "Genotype is the genes present; phenotype is what you see."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is a dominant allele?",
        type: "short_answer",
        answer_key: "An allele that is expressed when present",
        explanation: "Dominant alleles are always expressed when present."
      },
      {
        id: "ass_005",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is a Punnett square used for?",
        type: "short_answer",
        answer_key: "Predicting offspring genotypes",
        explanation: "Punnett squares are used to predict the possible genotypes of offspring."
      },
      {
        id: "ass_006",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is the result of meiosis?",
        type: "short_answer",
        answer_key: "4 haploid cells",
        explanation: "Meiosis produces four haploid cells (gametes)."
      },
      {
        id: "ass_007",
        objective: "obj_005",
        difficulty: "hard",
        question: "What is the difference between transcription and translation?",
        type: "short_answer",
        answer_key: "Transcription is DNA to mRNA; translation is mRNA to protein",
        explanation: "Transcription and translation are the two steps of protein synthesis."
      },
      {
        id: "ass_008",
        objective: "obj_010",
        difficulty: "hard",
        question: "What is the phenotype ratio of a dihybrid cross RrYy × RrYy?",
        type: "short_answer",
        answer_key: "9:3:3:1",
        explanation: "A dihybrid cross gives a 9:3:3:1 phenotype ratio."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "Why are X-linked traits more common in males?",
        type: "short_answer",
        answer_key: "Males have only one X chromosome",
        explanation: "Males have one X chromosome, so recessive alleles on it are expressed."
      },
      {
        id: "ass_010",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is genetic engineering?",
        type: "short_answer",
        answer_key: "Direct manipulation of genes",
        explanation: "Genetic engineering involves the direct manipulation of an organism's genes."
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
        "Understand DNA structure and function",
        "Differentiate between genotype and phenotype",
        "Solve Punnett square problems",
        "Explain protein synthesis"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is genetics?" },
        { time: "5-10 min", activity: "Direct Instruction - DNA Structure" },
        { time: "10-15 min", activity: "Direct Instruction - Genes and Alleles" },
        { time: "15-20 min", activity: "Direct Instruction - Punnett Squares" },
        { time: "20-25 min", activity: "Direct Instruction - Protein Synthesis" },
        { time: "25-30 min", activity: "Direct Instruction - Inheritance Patterns" },
        { time: "30-35 min", activity: "Direct Instruction - Genetic Disorders" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "The study of genes and heredity",
        prac_002: "Double helix",
        prac_003: "A segment of DNA that codes for a trait",
        prac_004: "An allele that is always expressed",
        prac_005: "25%",
        prac_006: "The heterozygote shows an intermediate trait",
        prac_007: "4 haploid cells",
        prac_008: "DNA → RNA",
        prac_009: "9:3:3:1",
        prac_010: "Males have only one X chromosome",
        prac_011: "A mutation that affects one base pair",
        prac_012: "Autosomal recessive",
        prac_013: "Gene editing",
        prac_014: "It could be used to 'design' babies",
        prac_015: "1:2:1"
      },
      assessment: {
        ass_001: "The study of genes and heredity",
        ass_002: "Double helix",
        ass_003: "Genotype is genetic makeup; phenotype is physical expression",
        ass_004: "An allele that is expressed when present",
        ass_005: "Predicting offspring genotypes",
        ass_006: "4 haploid cells",
        ass_007: "Transcription is DNA to mRNA; translation is mRNA to protein",
        ass_008: "9:3:3:1",
        ass_009: "Males have only one X chromosome",
        ass_010: "Direct manipulation of genes"
      }
    },
    extensionActivities: [
      "Research a genetic disorder",
      "Complete more Punnett square problems",
      "Research the Human Genome Project",
      "Investigate gene therapy",
      "Research CRISPR"
    ],
    differentiation: {
      struggling: [
        "Focus on basic genetics concepts first",
        "Use simple Punnett square problems",
        "Provide visual aids",
        "Use analogies"
      ],
      advanced: [
        "Research epigenetics",
        "Study complex inheritance patterns",
        "Research genetic diseases",
        "Study gene therapy"
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
      title: "DNA Structure",
      description: "Diagram of DNA double helix",
      url: "/diagrams/dna-structure.png",
      alt: "DNA structure diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "Protein Synthesis",
      description: "Transcription and translation",
      url: "/diagrams/protein-synthesis.png",
      alt: "Protein synthesis diagram"
    },
    {
      id: "vis_003",
      type: "chart",
      title: "Punnett Square",
      description: "Example Punnett square",
      url: "/diagrams/punnett-square.png",
      alt: "Punnett square example"
    },
    {
      id: "vis_004",
      type: "diagram",
      title: "Meiosis",
      description: "Stages of meiosis",
      url: "/diagrams/meiosis.png",
      alt: "Meiosis diagram"
    }
  ]
};