// Location: src/data/lessons/science/further_mathematics.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "math_lesson_further_mathematics",
  subject: "Further Mathematics",
  topic: "Further Mathematics",
  name: "Further Mathematics",
  icon: "📊",
  grade_level: "SS2 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 20,
    totalPracticeQuestions: 30,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 24,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of basic algebra",
    "Knowledge of trigonometry",
    "Understanding of calculus basics",
    "Strong mathematical foundation"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    // No more Mathematics lessons - this is the final one
  ],

  // ============================================================
  // MEASURABLE OBJECTIVES
  // ============================================================
  objectives: [
    // EASY LEVEL
    {
      id: "obj_001",
      level: "easy",
      description: "Define Further Mathematics and explain its importance",
      indicator: "Student can explain what Further Mathematics covers"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Apply differentiation rules to find derivatives",
      indicator: "Student can differentiate polynomial, trigonometric, and exponential functions"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Apply integration rules to find integrals",
      indicator: "Student can integrate basic functions"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Solve complex differentiation problems",
      indicator: "Student can apply chain rule, product rule, and quotient rule"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Solve complex integration problems",
      indicator: "Student can integrate by substitution and parts"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Apply trigonometric identities",
      indicator: "Student can use fundamental trigonometric identities"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Solve trigonometric equations",
      indicator: "Student can solve equations involving sine, cosine, and tangent"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Explain sequences and series",
      indicator: "Student can work with arithmetic and geometric progressions"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Apply binomial theorem",
      indicator: "Student can expand expressions using binomial theorem"
    },
    {
      id: "obj_010",
      level: "medium",
      description: "Solve logarithmic and exponential equations",
      indicator: "Student can solve equations using logarithms"
    },
    // HARD LEVEL
    {
      id: "obj_011",
      level: "hard",
      description: "Solve differential equations",
      indicator: "Student can solve first-order differential equations"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Apply vector algebra",
      indicator: "Student can perform vector operations"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain complex numbers",
      indicator: "Student can work with complex numbers"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Apply matrix algebra",
      indicator: "Student can perform matrix operations and find determinants"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Solve problems in coordinate geometry",
      indicator: "Student can use equations of lines, circles, and conic sections"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain mathematical induction",
      indicator: "Student can prove statements using induction"
    },
    {
      id: "obj_017",
      level: "hard",
      description: "Solve problems in mechanics",
      indicator: "Student can apply mathematical concepts to physics problems"
    },
    {
      id: "obj_018",
      level: "hard",
      description: "Apply statistics and probability",
      indicator: "Student can solve probability and statistical problems"
    },
    {
      id: "obj_019",
      level: "hard",
      description: "Explain numerical methods",
      indicator: "Student can use numerical techniques to solve equations"
    },
    {
      id: "obj_020",
      level: "hard",
      description: "Analyze applications of Further Mathematics",
      indicator: "Student can apply math to real-world problems"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Further Mathematics - Advanced Mathematical Concepts",
    duration: "30:00 - 40:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn advanced mathematics including calculus, trigonometry, sequences, and more."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Further Mathematics</h2>
      <p><strong>Further Mathematics</strong> extends the concepts learned in core mathematics, covering advanced topics in calculus, trigonometry, algebra, and statistics. It provides the mathematical foundation for science, engineering, and technology.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">📊 Key Topics</h3>
          <ul>
            <li>✓ Differentiation</li>
            <li>✓ Integration</li>
            <li>✓ Trigonometry</li>
            <li>✓ Sequences and Series</li>
            <li>✓ Vector Algebra</li>
            <li>✓ Complex Numbers</li>
            <li>✓ Matrix Algebra</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Why Further Mathematics?</h3>
          <ul>
            <li>• Essential for STEM careers</li>
            <li>• Builds problem-solving skills</li>
            <li>• Foundation for engineering</li>
            <li>• Required for advanced physics</li>
            <li>• Develops logical thinking</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Further Mathematics provides the tools needed for advanced studies in science, engineering, and technology.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "Differentiation",
        objective: "obj_002",
        text: `
          <h3>Differentiation</h3>
          <p>Differentiation is the process of finding the derivative of a function, which represents the rate of change.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Basic Differentiation Formulas:</h4>
            <ul>
              <li><strong>Power Rule:</strong> d/dx(xⁿ) = nxⁿ⁻¹</li>
              <li><strong>Constant Rule:</strong> d/dx(c) = 0</li>
              <li><strong>Sum Rule:</strong> d/dx(f(x) + g(x)) = f'(x) + g'(x)</li>
              <li><strong>Product Rule:</strong> d/dx(uv) = u'v + uv'</li>
              <li><strong>Quotient Rule:</strong> d/dx(u/v) = (u'v - uv')/v²</li>
              <li><strong>Chain Rule:</strong> d/dx[f(g(x))] = f'(g(x)) × g'(x)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Trigonometric Differentiation:</h4>
            <ul>
              <li>d/dx(sin x) = cos x</li>
              <li>d/dx(cos x) = -sin x</li>
              <li>d/dx(tan x) = sec² x</li>
              <li>d/dx(cot x) = -csc² x</li>
              <li>d/dx(sec x) = sec x tan x</li>
              <li>d/dx(csc x) = -csc x cot x</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Exponential and Logarithmic Differentiation:</h4>
            <ul>
              <li>d/dx(eˣ) = eˣ</li>
              <li>d/dx(aˣ) = aˣ ln a</li>
              <li>d/dx(ln x) = 1/x</li>
              <li>d/dx(logₐ x) = 1/(x ln a)</li>
              <li>d/dx(ln|u|) = u'/u</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <p>Find d/dx(x³ + 2x² - 5x + 7)</p>
            <ul>
              <li>Solution: d/dx = 3x² + 4x - 5</li>
              <li>Using power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5x) = -5</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <p>Find d/dx(sin x × cos x) using product rule</p>
            <ul>
              <li>Let u = sin x, v = cos x</li>
              <li>u' = cos x, v' = -sin x</li>
              <li>d/dx = u'v + uv' = cos x × cos x + sin x × (-sin x)</li>
              <li>d/dx = cos² x - sin² x = cos 2x</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Integration",
        objective: "obj_003",
        text: `
          <h3>Integration</h3>
          <p>Integration is the inverse process of differentiation. It finds the area under a curve.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Basic Integration Formulas:</h4>
            <ul>
              <li><strong>Power Rule:</strong> ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1</li>
              <li><strong>Constant Rule:</strong> ∫k dx = kx + C</li>
              <li><strong>Sum Rule:</strong> ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx</li>
              <li><strong>Integration by Parts:</strong> ∫u dv = uv - ∫v du</li>
              <li><strong>Substitution:</strong> ∫f(g(x))g'(x) dx = ∫f(u) du</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Trigonometric Integration:</h4>
            <ul>
              <li>∫sin x dx = -cos x + C</li>
              <li>∫cos x dx = sin x + C</li>
              <li>∫sec² x dx = tan x + C</li>
              <li>∫csc² x dx = -cot x + C</li>
              <li>∫sec x tan x dx = sec x + C</li>
              <li>∫csc x cot x dx = -csc x + C</li>
              <li>∫tan x dx = -ln|cos x| + C = ln|sec x| + C</li>
              <li>∫cot x dx = ln|sin x| + C</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Exponential and Logarithmic Integration:</h4>
            <ul>
              <li>∫eˣ dx = eˣ + C</li>
              <li>∫aˣ dx = aˣ/ln a + C</li>
              <li>∫1/x dx = ln|x| + C</li>
              <li>∫ln x dx = x ln x - x + C</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-purple-600">📌 Definite Integral:</h4>
            <ul>
              <li>∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)</li>
              <li>Where F(x) is the antiderivative of f(x)</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 1:</strong>
            <p>∫(3x² + 2x - 4) dx</p>
            <ul>
              <li>Solution: x³ + x² - 4x + C</li>
              <li>Using power rule: ∫3x² dx = x³, ∫2x dx = x², ∫(-4) dx = -4x</li>
            </ul>
          </div>
          
          <div class="example-box">
            <strong>📌 Example 2:</strong>
            <p>∫₀¹ (x² + 2x) dx</p>
            <ul>
              <li>Solution: [x³/3 + x²]₀¹ = (1/3 + 1) - (0) = 4/3</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Trigonometry",
        objective: "obj_006",
        text: `
          <h3>Trigonometry</h3>
          <p>Trigonometry deals with relationships between angles and sides of triangles.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Fundamental Identities:</h4>
            <ul>
              <li>sin² θ + cos² θ = 1</li>
              <li>1 + tan² θ = sec² θ</li>
              <li>1 + cot² θ = csc² θ</li>
              <li>sin θ = 1/csc θ</li>
              <li>cos θ = 1/sec θ</li>
              <li>tan θ = sin θ/cos θ</li>
              <li>cot θ = cos θ/sin θ</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Compound Angle Formulas:</h4>
            <ul>
              <li>sin(A + B) = sin A cos B + cos A sin B</li>
              <li>sin(A - B) = sin A cos B - cos A sin B</li>
              <li>cos(A + B) = cos A cos B - sin A sin B</li>
              <li>cos(A - B) = cos A cos B + sin A sin B</li>
              <li>tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</li>
              <li>tan(A - B) = (tan A - tan B)/(1 + tan A tan B)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Double Angle Formulas:</h4>
            <ul>
              <li>sin 2θ = 2 sin θ cos θ</li>
              <li>cos 2θ = cos² θ - sin² θ = 2cos² θ - 1 = 1 - 2sin² θ</li>
              <li>tan 2θ = 2tan θ/(1 - tan² θ)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-purple-600">📌 Half Angle Formulas:</h4>
            <ul>
              <li>sin(θ/2) = ±√((1 - cos θ)/2)</li>
              <li>cos(θ/2) = ±√((1 + cos θ)/2)</li>
              <li>tan(θ/2) = ±√((1 - cos θ)/(1 + cos θ))</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-orange-500">📌 Product-to-Sum Formulas:</h4>
            <ul>
              <li>2 sin A cos B = sin(A+B) + sin(A-B)</li>
              <li>2 cos A cos B = cos(A+B) + cos(A-B)</li>
              <li>2 sin A sin B = cos(A-B) - cos(A+B)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-indigo-500">📌 Sum-to-Product Formulas:</h4>
            <ul>
              <li>sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)</li>
              <li>sin A - sin B = 2 cos((A+B)/2) sin((A-B)/2)</li>
              <li>cos A + cos B = 2 cos((A+B)/2) cos((A-B)/2)</li>
              <li>cos A - cos B = -2 sin((A+B)/2) sin((A-B)/2)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Sequences and Series",
        objective: "obj_008",
        text: `
          <h3>Sequences and Series</h3>
          <p>Sequences and series are ordered lists of numbers with specific patterns.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Arithmetic Progression (AP):</h4>
            <ul>
              <li><strong>nth term:</strong> Tₙ = a + (n-1)d</li>
              <li><strong>Sum to n terms:</strong> Sₙ = n/2[2a + (n-1)d]</li>
              <li><strong>Alternative sum:</strong> Sₙ = n/2(a + l), where l is last term</li>
              <li>a = first term, d = common difference</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Geometric Progression (GP):</h4>
            <ul>
              <li><strong>nth term:</strong> Tₙ = arⁿ⁻¹</li>
              <li><strong>Sum to n terms:</strong> Sₙ = a(1 - rⁿ)/(1 - r), r ≠ 1</li>
              <li><strong>Infinite sum:</strong> S∞ = a/(1 - r), |r| < 1</li>
              <li>a = first term, r = common ratio</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Special Series:</h4>
            <ul>
              <li><strong>Sum of n natural numbers:</strong> 1 + 2 + 3 + ... + n = n(n+1)/2</li>
              <li><strong>Sum of squares:</strong> 1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6</li>
              <li><strong>Sum of cubes:</strong> 1³ + 2³ + 3³ + ... + n³ = [n(n+1)/2]²</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-purple-600">📌 Binomial Theorem:</h4>
            <ul>
              <li><strong>Expansion:</strong> (a + b)ⁿ = Σᵣ₌₀ⁿ C(n,r)aⁿ⁻ʳbʳ</li>
              <li><strong>General term:</strong> Tᵣ₊₁ = C(n,r)aⁿ⁻ʳbʳ</li>
              <li><strong>Binomial coefficient:</strong> C(n,r) = n!/(r!(n-r)!)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "Vector Algebra",
        objective: "obj_012",
        text: `
          <h3>Vector Algebra</h3>
          <p>Vectors represent quantities with both magnitude and direction.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Vector Operations:</h4>
            <ul>
              <li><strong>Vector addition:</strong> a + b = (a₁+b₁)i + (a₂+b₂)j + (a₃+b₃)k</li>
              <li><strong>Vector subtraction:</strong> a - b = (a₁-b₁)i + (a₂-b₂)j + (a₃-b₃)k</li>
              <li><strong>Scalar multiplication:</strong> λa = λa₁i + λa₂j + λa₃k</li>
              <li><strong>Magnitude:</strong> |a| = √(a₁² + a₂² + a₃²)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Dot Product (Scalar Product):</h4>
            <ul>
              <li><strong>Definition:</strong> a · b = |a||b|cos θ</li>
              <li><strong>Component form:</strong> a · b = a₁b₁ + a₂b₂ + a₃b₃</li>
              <li><strong>Angle between vectors:</strong> cos θ = (a · b)/(|a||b|)</li>
              <li><strong>Perpendicular condition:</strong> a · b = 0</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Cross Product (Vector Product):</h4>
            <ul>
              <li><strong>Definition:</strong> a × b = |a||b|sin θ n</li>
              <li><strong>Component form:</strong> a × b = |i  j  k; a₁ a₂ a₃; b₁ b₂ b₃|</li>
              <li><strong>Magnitude:</strong> |a × b| = |a||b|sin θ</li>
              <li><strong>Parallel condition:</strong> a × b = 0</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "Complex Numbers",
        objective: "obj_013",
        text: `
          <h3>Complex Numbers</h3>
          <p>Complex numbers extend the real number system to include i = √(-1).</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Basic Forms:</h4>
            <ul>
              <li><strong>Standard form:</strong> z = a + bi</li>
              <li><strong>Real part:</strong> a = Re(z)</li>
              <li><strong>Imaginary part:</strong> b = Im(z)</li>
              <li><strong>Modulus:</strong> |z| = √(a² + b²)</li>
              <li><strong>Conjugate:</strong> z̄ = a - bi</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Polar Form:</h4>
            <ul>
              <li>z = r(cos θ + i sin θ)</li>
              <li>r = |z| = √(a² + b²)</li>
              <li>θ = arg(z) = tan⁻¹(b/a)</li>
              <li><strong>Euler's form:</strong> z = re^(iθ)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Operations:</h4>
            <ul>
              <li><strong>Addition:</strong> (a+bi) + (c+di) = (a+c) + (b+d)i</li>
              <li><strong>Subtraction:</strong> (a+bi) - (c+di) = (a-c) + (b-d)i</li>
              <li><strong>Multiplication:</strong> (a+bi)(c+di) = (ac-bd) + (ad+bc)i</li>
              <li><strong>Division:</strong> (a+bi)/(c+di) = [(a+bi)(c-di)]/(c²+d²)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-purple-600">📌 De Moivre's Theorem:</h4>
            <ul>
              <li>(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)</li>
              <li>zⁿ = rⁿ(cos nθ + i sin nθ)</li>
              <li><strong>nth roots:</strong> z^(1/n) = r^(1/n)[cos((θ+2kπ)/n) + i sin((θ+2kπ)/n)]</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "Matrix Algebra",
        objective: "obj_014",
        text: `
          <h3>Matrix Algebra</h3>
          <p>Matrices are rectangular arrays of numbers used in linear algebra.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Matrix Operations:</h4>
            <ul>
              <li><strong>Addition:</strong> (A+B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ</li>
              <li><strong>Scalar multiplication:</strong> (kA)ᵢⱼ = kAᵢⱼ</li>
              <li><strong>Matrix multiplication:</strong> (AB)ᵢⱼ = Σ AᵢₖBₖⱼ</li>
              <li><strong>Transpose:</strong> (Aᵀ)ᵢⱼ = Aⱼᵢ</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Determinants:</h4>
            <ul>
              <li><strong>2×2:</strong> |a b; c d| = ad - bc</li>
              <li><strong>3×3:</strong> |a b c; d e f; g h i| = a(ei - fh) - b(di - fg) + c(dh - eg)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Inverse Matrix:</h4>
            <ul>
              <li><strong>2×2:</strong> A⁻¹ = 1/det(A) × |d -b; -c a|</li>
              <li><strong>Condition:</strong> det(A) ≠ 0</li>
              <li><strong>Property:</strong> AA⁻¹ = A⁻¹A = I</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "Differential Equations",
        objective: "obj_011",
        text: `
          <h3>Differential Equations</h3>
          <p>Differential equations involve derivatives of unknown functions.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 First-Order Differential Equations:</h4>
            <ul>
              <li><strong>Separable:</strong> dy/dx = f(x)g(y)</li>
              <li><strong>Solution:</strong> ∫dy/g(y) = ∫f(x)dx + C</li>
              <li><strong>Linear:</strong> dy/dx + P(x)y = Q(x)</li>
              <li><strong>Integrating factor:</strong> e^∫P(x)dx</li>
              <li><strong>Solution:</strong> y = (1/IF)∫IF·Q(x)dx + C</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Second-Order Linear DE:</h4>
            <ul>
              <li><strong>Standard form:</strong> a(d²y/dx²) + b(dy/dx) + cy = 0</li>
              <li><strong>Auxiliary equation:</strong> ar² + br + c = 0</li>
              <li><strong>Roots:</strong> r = (-b ± √(b²-4ac))/2a</li>
              <li><strong>General solution:</strong></li>
              <li>If r₁ ≠ r₂: y = C₁e^(r₁x) + C₂e^(r₂x)</li>
              <li>If r₁ = r₂: y = (C₁ + C₂x)e^(r₁x)</li>
              <li>If complex: y = e^(αx)(C₁cos βx + C₂sin βx)</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Coordinate Geometry",
        objective: "obj_015",
        text: `
          <h3>Coordinate Geometry</h3>
          <p>Coordinate geometry describes geometric shapes using coordinates.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Lines:</h4>
            <ul>
              <li><strong>Slope:</strong> m = (y₂-y₁)/(x₂-x₁)</li>
              <li><strong>Point-slope form:</strong> y - y₁ = m(x - x₁)</li>
              <li><strong>Slope-intercept:</strong> y = mx + b</li>
              <li><strong>General form:</strong> Ax + By + C = 0</li>
              <li><strong>Distance:</strong> d = |Ax₁ + By₁ + C|/√(A²+B²)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-green-600">📌 Circles:</h4>
            <ul>
              <li><strong>Standard form:</strong> (x-h)² + (y-k)² = r²</li>
              <li><strong>Center:</strong> (h,k)</li>
              <li><strong>Radius:</strong> r</li>
              <li><strong>General form:</strong> x² + y² + 2gx + 2fy + c = 0</li>
              <li><strong>Center:</strong> (-g,-f)</li>
              <li><strong>Radius:</strong> √(g²+f²-c)</li>
            </ul>
          </div>
          
          <div class="formula-box">
            <h4 class="text-red-500">📌 Conic Sections:</h4>
            <ul>
              <li><strong>Parabola:</strong> y² = 4ax</li>
              <li><strong>Ellipse:</strong> x²/a² + y²/b² = 1</li>
              <li><strong>Hyperbola:</strong> x²/a² - y²/b² = 1</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_010",
        title: "Mathematical Induction",
        objective: "obj_016",
        text: `
          <h3>Mathematical Induction</h3>
          <p>Mathematical induction is a method of proof for statements about natural numbers.</p>
          
          <div class="formula-box">
            <h4 class="text-blue-600">📌 Induction Steps:</h4>
            <ul>
              <li><strong>Base case:</strong> Show true for n = 1</li>
              <li><strong>Inductive step:</strong> Assume true for n = k</li>
              <li><strong>Inductive conclusion:</strong> Prove true for n = k+1</li>
              <li><strong>Conclusion:</strong> Therefore true for all n ∈ ℕ</li>
            </ul>
          </div>
        `
      }
    ],

    summary: `
      <h2>Key Takeaways</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4>📊 Further Mathematics</h4>
          <ul>
            <li>• Differentiation: Rate of change</li>
            <li>• Integration: Area under curve</li>
            <li>• Trigonometry: Angles and triangles</li>
            <li>• Sequences and Series: Patterns</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Topics</h4>
          <ul>
            <li>• Vector and Matrix Algebra</li>
            <li>• Complex Numbers</li>
            <li>• Differential Equations</li>
            <li>• Coordinate Geometry</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Further Mathematics provides the essential tools for advanced study in science, engineering, and technology.</p>
      </div>
    `,

    // ============================================================
    // KEY TERMS
    // ============================================================
    keyTerms: [
      { term: "Derivative", definition: "Rate of change of a function." },
      { term: "Integral", definition: "Area under a curve." },
      { term: "Trigonometry", definition: "Study of angles and triangles." },
      { term: "Vector", definition: "Quantity with magnitude and direction." },
      { term: "Complex Number", definition: "Number with real and imaginary parts." },
      { term: "Matrix", definition: "Rectangular array of numbers." },
      { term: "Sequence", definition: "Ordered list of numbers." },
      { term: "Series", definition: "Sum of terms in a sequence." },
      { term: "Binomial", definition: "Expression with two terms." },
      { term: "Calculus", definition: "Study of change." },
      { term: "Differential Equation", definition: "Equation with derivatives." },
      { term: "Coordinate Geometry", definition: "Geometry using coordinates." },
      { term: "Determinant", definition: "Value computed from a matrix." },
      { term: "Modulus", definition: "Magnitude of a complex number." },
      { term: "Conjugate", definition: "Complex number with sign of imaginary part changed." },
      { term: "Mathematical Induction", definition: "Proof method for natural numbers." },
      { term: "Conic Section", definition: "Curve from intersecting a cone." },
      { term: "Parabola", definition: "U-shaped curve." },
      { term: "Ellipse", definition: "Oval-shaped curve." },
      { term: "Hyperbola", definition: "Open curve." }
    ],

    // ============================================================
    // PRACTICE QUESTIONS
    // ============================================================
    practice: [
      // ===== EASY QUESTIONS =====
      {
        id: "prac_001",
        objective: "obj_002",
        difficulty: "easy",
        question: "What is d/dx(x³)?",
        type: "multiple_choice",
        options: ["3x²", "x²", "3x³", "2x²"],
        answer: "3x²",
        explanation: "Using power rule: d/dx(x³) = 3x²"
      },
      {
        id: "prac_002",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is ∫x² dx?",
        type: "multiple_choice",
        options: ["x³/3 + C", "x³ + C", "x² + C", "3x³ + C"],
        answer: "x³/3 + C",
        explanation: "Using power rule: ∫x² dx = x³/3 + C"
      },
      {
        id: "prac_003",
        objective: "obj_006",
        difficulty: "easy",
        question: "What is sin² θ + cos² θ equal to?",
        type: "multiple_choice",
        options: ["0", "1", "2", "sin 2θ"],
        answer: "1",
        explanation: "This is the fundamental Pythagorean identity."
      },
      // ===== MEDIUM QUESTIONS =====
      {
        id: "prac_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What is d/dx(sin x cos x)?",
        type: "multiple_choice",
        options: ["cos 2x", "sin 2x", "cos² x - sin² x", "Both A and C"],
        answer: "Both A and C",
        explanation: "Product rule gives cos² x - sin² x = cos 2x"
      },
      {
        id: "prac_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What is ∫sin x dx?",
        type: "multiple_choice",
        options: ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        answer: "-cos x + C",
        explanation: "∫sin x dx = -cos x + C"
      },
      {
        id: "prac_006",
        objective: "obj_008",
        difficulty: "medium",
        question: "What is the sum of the first 10 natural numbers?",
        type: "multiple_choice",
        options: ["45", "50", "55", "60"],
        answer: "55",
        explanation: "n(n+1)/2 = 10(11)/2 = 55"
      },
      // ===== HARD QUESTIONS =====
      {
        id: "prac_007",
        objective: "obj_004",
        difficulty: "hard",
        question: "What is d/dx(eˣ sin x)?",
        type: "multiple_choice",
        options: [
          "eˣ(cos x - sin x)",
          "eˣ(cos x + sin x)",
          "eˣ sin x",
          "eˣ cos x"
        ],
        answer: "eˣ(cos x + sin x)",
        explanation: "Using product rule: d/dx(eˣ sin x) = eˣ sin x + eˣ cos x = eˣ(cos x + sin x)"
      },
      {
        id: "prac_008",
        objective: "obj_011",
        difficulty: "hard",
        question: "What is the general solution of dy/dx = 2x?",
        type: "multiple_choice",
        options: ["y = x² + C", "y = 2x + C", "y = x³ + C", "y = x + C"],
        answer: "y = x² + C",
        explanation: "Integrating both sides: y = x² + C"
      },
      {
        id: "prac_009",
        objective: "obj_012",
        difficulty: "hard",
        question: "What is the dot product of a = (1,2,3) and b = (4,5,6)?",
        type: "multiple_choice",
        options: ["32", "30", "28", "34"],
        answer: "32",
        explanation: "a·b = 1×4 + 2×5 + 3×6 = 4 + 10 + 18 = 32"
      },
      {
        id: "prac_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is |3 + 4i|?",
        type: "multiple_choice",
        options: ["5", "6", "7", "8"],
        answer: "5",
        explanation: "|3 + 4i| = √(3² + 4²) = √25 = 5"
      }
    ],

    // ============================================================
    // ASSESSMENT
    // ============================================================
    assessment: {
      id: "assess_further_mathematics",
      title: "Further Mathematics Quiz",
      description: "Test your understanding of Further Mathematics",
      passing_score: 70,
      total_questions: 10,
      questions: [
        {
          id: "ass_001",
          objective: "obj_002",
          difficulty: "easy",
          question: "What is d/dx(x⁴)?",
          type: "short_answer",
          answer_key: "4x³",
          explanation: "Using power rule: d/dx(x⁴) = 4x³"
        },
        {
          id: "ass_002",
          objective: "obj_003",
          difficulty: "easy",
          question: "What is ∫x³ dx?",
          type: "short_answer",
          answer_key: "x⁴/4 + C",
          explanation: "Using power rule: ∫x³ dx = x⁴/4 + C"
        },
        {
          id: "ass_003",
          objective: "obj_006",
          difficulty: "easy",
          question: "What is tan θ in terms of sin θ and cos θ?",
          type: "short_answer",
          answer_key: "sin θ/cos θ",
          explanation: "tan θ = sin θ/cos θ"
        },
        {
          id: "ass_004",
          objective: "obj_008",
          difficulty: "medium",
          question: "What is the nth term of an AP with first term a and common difference d?",
          type: "short_answer",
          answer_key: "a + (n-1)d",
          explanation: "Tₙ = a + (n-1)d"
        },
        {
          id: "ass_005",
          objective: "obj_004",
          difficulty: "medium",
          question: "What is d/dx(ln x)?",
          type: "short_answer",
          answer_key: "1/x",
          explanation: "d/dx(ln x) = 1/x"
        },
        {
          id: "ass_006",
          objective: "obj_005",
          difficulty: "medium",
          question: "What is ∫1/x dx?",
          type: "short_answer",
          answer_key: "ln|x| + C",
          explanation: "∫1/x dx = ln|x| + C"
        },
        {
          id: "ass_007",
          objective: "obj_011",
          difficulty: "hard",
          question: "What is the general solution of dy/dx = 3x²?",
          type: "short_answer",
          answer_key: "y = x³ + C",
          explanation: "Integrating: y = x³ + C"
        },
        {
          id: "ass_008",
          objective: "obj_012",
          difficulty: "hard",
          question: "What is |a| for a = (3,4)?",
          type: "short_answer",
          answer_key: "5",
          explanation: "|a| = √(3² + 4²) = 5"
        },
        {
          id: "ass_009",
          objective: "obj_013",
          difficulty: "hard",
          question: "What is (2 + 3i) + (4 + 5i)?",
          type: "short_answer",
          answer_key: "6 + 8i",
          explanation: "Adding real and imaginary parts: (2+4) + (3+5)i = 6 + 8i"
        },
        {
          id: "ass_010",
          objective: "obj_014",
          difficulty: "hard",
          question: "What is the determinant of |2 3; 4 5|?",
          type: "short_answer",
          answer_key: "-2",
          explanation: "det = (2×5) - (3×4) = 10 - 12 = -2"
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
          "Understand differentiation and integration",
          "Apply trigonometric identities",
          "Work with sequences and series",
          "Solve vector and matrix problems"
        ],
        activities: [
          { time: "0-5 min", activity: "Introduction - What is Further Mathematics?" },
          { time: "5-10 min", activity: "Direct Instruction - Differentiation" },
          { time: "10-15 min", activity: "Direct Instruction - Integration" },
          { time: "15-20 min", activity: "Direct Instruction - Trigonometry" },
          { time: "20-25 min", activity: "Direct Instruction - Sequences and Series" },
          { time: "25-30 min", activity: "Direct Instruction - Vectors and Matrices" },
          { time: "30-35 min", activity: "Direct Instruction - Complex Numbers" },
          { time: "35-40 min", activity: "Guided Practice" },
          { time: "40-45 min", activity: "Assessment and Closure" }
        ]
      },
      answerKey: {
        practice: {
          prac_001: "3x²",
          prac_002: "x³/3 + C",
          prac_003: "1",
          prac_004: "Both A and C",
          prac_005: "-cos x + C",
          prac_006: "55",
          prac_007: "eˣ(cos x + sin x)",
          prac_008: "y = x² + C",
          prac_009: "32",
          prac_010: "5"
        },
        assessment: {
          ass_001: "4x³",
          ass_002: "x⁴/4 + C",
          ass_003: "sin θ/cos θ",
          ass_004: "a + (n-1)d",
          ass_005: "1/x",
          ass_006: "ln|x| + C",
          ass_007: "y = x³ + C",
          ass_008: "5",
          ass_009: "6 + 8i",
          ass_010: "-2"
        }
      },
      extensionActivities: [
        "Research applications of calculus",
        "Study Fourier series",
        "Research mathematical physics",
        "Study numerical methods"
      ],
      differentiation: {
        struggling: [
          "Focus on basic formulas",
          "Use simple examples",
          "Provide formula cards",
          "Use visual aids"
        ],
        advanced: [
          "Research multivariable calculus",
          "Study partial differential equations",
          "Research advanced linear algebra",
          "Study mathematical modeling"
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
        title: "Differentiation and Integration",
        description: "Diagram showing the relationship between differentiation and integration",
        url: "/diagrams/calculus-relationship.png",
        alt: "Calculus relationship diagram"
      },
      {
        id: "vis_002",
        type: "diagram",
        title: "Trigonometric Functions",
        description: "Diagram showing trigonometric functions",
        url: "/diagrams/trig-functions.png",
        alt: "Trigonometric functions diagram"
      },
      {
        id: "vis_003",
        type: "diagram",
        title: "Vector Operations",
        description: "Diagram showing vector operations",
        url: "/diagrams/vector-operations.png",
        alt: "Vector operations diagram"
      }
    ]
  }
};