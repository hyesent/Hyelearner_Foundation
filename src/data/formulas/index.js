export const FORMULA_DATA = [
  // ============================================================
  // MATHEMATICS - ULTIMATE EXTENDED (200+ Formulas)
  // ============================================================
  
  // --- ARITHMETIC & NUMBER THEORY (EXPANDED) ---
  {
    name: 'Prime Number Theorem',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: 'π(x) ~ x/ln(x)',
    formula: 'x / Math.log(x)',
    solveFor: {
      'π(x)': 'x / Math.log(x)',
      x: 'π(x) * Math.log(x)'
    },
    description: 'The number of primes less than x is approximately x divided by natural log of x.',
    variables: {
      'π(x)': 'Number of primes ≤ x',
      x: 'Upper bound',
      'ln(x)': 'Natural logarithm of x'
    },
    difficulty: 'hard',
    example: { x: 100 },
    evaluable: true
  },
  {
    name: 'Euler\'s Totient Function',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: 'φ(n) = n · ∏(1 - 1/p)',
    formula: 'n * (1 - 1/2) * (1 - 1/3)',
    solveFor: {
      'φ(n)': 'n * (1 - 1/2) * (1 - 1/3)',
      n: 'φ(n) / ((1 - 1/2) * (1 - 1/3))'
    },
    description: 'Counts positive integers up to n that are relatively prime to n (simplified for n=12).',
    variables: {
      n: 'Positive integer',
      p: 'Prime factors of n'
    },
    difficulty: 'medium',
    example: { n: 12 },
    evaluable: true
  },
  {
    name: 'Fibonacci Sequence (Binet)',
    subject: 'Mathematics',
    topic: 'Sequences',
    displayFormula: 'F(n) = (φⁿ - ψⁿ)/√5',
    formula: '((1 + Math.sqrt(5))**n - (1 - Math.sqrt(5))**n) / (2**n * Math.sqrt(5))',
    solveFor: {
      'F(n)': '((1 + Math.sqrt(5))**n - (1 - Math.sqrt(5))**n) / (2**n * Math.sqrt(5))'
    },
    description: 'Binet\'s formula for nth Fibonacci number.',
    variables: {
      'F(n)': 'nth Fibonacci number',
      φ: 'Golden ratio (1+√5)/2',
      ψ: 'Conjugate (1-√5)/2'
    },
    difficulty: 'hard',
    example: { n: 10 },
    evaluable: true
  },
  {
    name: 'Arithmetic Series Sum',
    subject: 'Mathematics',
    topic: 'Sequences',
    displayFormula: 'S_n = n(a₁ + a_n)/2',
    formula: 'n * (a1 + an) / 2',
    solveFor: {
      'S_n': 'n * (a1 + an) / 2',
      n: '2 * S_n / (a1 + an)',
      a1: '2 * S_n / n - an',
      an: '2 * S_n / n - a1'
    },
    description: 'Sum of an arithmetic sequence.',
    variables: {
      'S_n': 'Sum of n terms',
      n: 'Number of terms',
      'a₁': 'First term',
      'a_n': 'Last term'
    },
    difficulty: 'easy',
    example: { n: 5, a1: 2, an: 14 },
    evaluable: true
  },
  {
    name: 'Geometric Series Sum (Finite)',
    subject: 'Mathematics',
    topic: 'Sequences',
    displayFormula: 'S_n = a₁(1-rⁿ)/(1-r)',
    formula: 'a1 * (1 - Math.pow(r, n)) / (1 - r)',
    solveFor: {
      'S_n': 'a1 * (1 - Math.pow(r, n)) / (1 - r)',
      a1: 'S_n * (1 - r) / (1 - Math.pow(r, n))',
      r: '1 - a1 / S_n'
    },
    description: 'Sum of a geometric sequence where r ≠ 1.',
    variables: {
      'S_n': 'Sum of n terms',
      'a₁': 'First term',
      r: 'Common ratio',
      n: 'Number of terms'
    },
    difficulty: 'medium',
    example: { a1: 3, r: 2, n: 4 },
    evaluable: true
  },
  {
    name: 'Geometric Series Sum (Infinite)',
    subject: 'Mathematics',
    topic: 'Sequences',
    displayFormula: 'S = a/(1-r)',
    formula: 'a / (1 - r)',
    solveFor: {
      S: 'a / (1 - r)',
      a: 'S * (1 - r)',
      r: '1 - a / S'
    },
    description: 'Sum of infinite geometric series (|r|<1).',
    variables: {
      S: 'Infinite sum',
      a: 'First term',
      r: 'Common ratio (|r|<1)'
    },
    difficulty: 'medium',
    example: { a: 1, r: 0.5 },
    evaluable: true
  },
  {
    name: 'Binomial Theorem',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: '(a+b)ⁿ = Σ(n,k)aⁿ⁻ᵏbᵏ',
    formula: 'Math.pow(a + b, n)',
    solveFor: {
      n: 'Math.log(a + b) / Math.log(a + b)'
    },
    description: 'Expansion of a binomial raised to a power.',
    variables: {
      a: 'First term',
      b: 'Second term',
      n: 'Power',
      k: 'Summation index'
    },
    difficulty: 'hard',
    example: { a: 2, b: 3, n: 4 },
    evaluable: true
  },
  {
    name: 'Logarithm Change of Base',
    subject: 'Mathematics',
    topic: 'Logarithms',
    displayFormula: 'log_b(a) = log_c(a)/log_c(b)',
    formula: 'Math.log(a) / Math.log(b)',
    solveFor: {
      'log_b(a)': 'Math.log(a) / Math.log(b)',
      a: 'Math.exp(Math.log(b) * (Math.log(a) / Math.log(b)))',
      b: 'Math.exp(Math.log(a) / (Math.log(a) / Math.log(b)))'
    },
    description: 'Convert logarithms from one base to another.',
    variables: {
      'log_b(a)': 'Logarithm of a with base b',
      'log_c(a)': 'Logarithm of a with base c',
      'log_c(b)': 'Logarithm of b with base c'
    },
    difficulty: 'medium',
    example: { a: 8, b: 2 },
    evaluable: true
  },
  {
    name: 'Factorial (Exact)',
    subject: 'Mathematics',
    topic: 'Combinatorics',
    displayFormula: 'n! = n × (n-1) × ... × 1',
    formula: 'n <= 1 ? 1 : n * (n-1) * (n-2) * (n-3) * (n-4)',
    solveFor: {},
    description: 'Product of all positive integers up to n (simplified for n≤5).',
    variables: {
      n: 'Non-negative integer'
    },
    difficulty: 'easy',
    example: { n: 5 },
    evaluable: true
  },
  {
    name: 'Combinations (nCr)',
    subject: 'Mathematics',
    topic: 'Combinatorics',
    displayFormula: 'C(n,r) = n!/(r!(n-r)!)',
    formula: 'factorial(n) / (factorial(r) * factorial(n - r))',
    solveFor: {},
    description: 'Number of ways to choose r items from n without order.',
    variables: {
      n: 'Total items',
      r: 'Items to choose'
    },
    difficulty: 'medium',
    example: { n: 5, r: 2 },
    evaluable: false
  },
  {
    name: 'Permutations (nPr)',
    subject: 'Mathematics',
    topic: 'Combinatorics',
    displayFormula: 'P(n,r) = n!/(n-r)!',
    formula: 'factorial(n) / factorial(n - r)',
    solveFor: {},
    description: 'Number of ways to arrange r items from n with order.',
    variables: {
      n: 'Total items',
      r: 'Items to arrange'
    },
    difficulty: 'medium',
    example: { n: 5, r: 2 },
    evaluable: false
  },
  {
    name: 'Stirling\'s Approximation',
    subject: 'Mathematics',
    topic: 'Combinatorics',
    displayFormula: 'n! ~ √(2πn)(n/e)ⁿ',
    formula: 'Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n)',
    solveFor: {
      n: 'Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n)'
    },
    description: 'Approximation of factorial for large n.',
    variables: {
      n: 'Large integer'
    },
    difficulty: 'hard',
    example: { n: 10 },
    evaluable: true
  },

  // --- ADVANCED NUMBER THEORY ---
  {
    name: 'Fermat\'s Little Theorem',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: 'aᵖ ≡ a (mod p)',
    formula: 'Math.pow(a, p) % p',
    solveFor: {
      a: 'Math.pow(a, p) % p'
    },
    description: 'For prime p and integer a, a^p ≡ a (mod p).',
    variables: {
      a: 'Integer',
      p: 'Prime number'
    },
    difficulty: 'hard',
    example: { a: 2, p: 5 },
    evaluable: true
  },
  {
    name: 'Chinese Remainder Theorem',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: 'x ≡ a₁ (mod m₁), x ≡ a₂ (mod m₂)',
    formula: 'a1 + m1 * ((a2 - a1) * modInverse(m1, m2) % m2)',
    solveFor: {},
    description: 'Finds x satisfying simultaneous congruences.',
    variables: {
      x: 'Solution',
      a1: 'First remainder',
      m1: 'First modulus',
      a2: 'Second remainder',
      m2: 'Second modulus'
    },
    difficulty: 'hard',
    example: { a1: 2, m1: 3, a2: 3, m2: 5 },
    evaluable: false
  },
  {
    name: 'Goldbach\'s Conjecture (Verification)',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: '2n = p + q',
    formula: 'isPrime(2n)',
    solveFor: {},
    description: 'Every even integer > 2 is sum of two primes (not proven).',
    variables: {
      '2n': 'Even number',
      p: 'Prime 1',
      q: 'Prime 2'
    },
    difficulty: 'hard',
    example: { n: 10 },
    evaluable: false
  },
  {
    name: 'Euclidean Algorithm',
    subject: 'Mathematics',
    topic: 'Number Theory',
    displayFormula: 'gcd(a,b) = gcd(b, a mod b)',
    formula: 'gcd(a, b)',
    solveFor: {},
    description: 'Algorithm to find greatest common divisor.',
    variables: {
      a: 'First integer',
      b: 'Second integer'
    },
    difficulty: 'medium',
    example: { a: 48, b: 18 },
    evaluable: false
  },

  // --- GEOMETRY (2D & 3D) - MEGA EXTENDED ---
  {
    name: 'Area of Triangle (Heron\'s)',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = √(s(s-a)(s-b)(s-c))',
    formula: 'Math.sqrt(s * (s - a) * (s - b) * (s - c))',
    solveFor: {
      A: 'Math.sqrt(s * (s - a) * (s - b) * (s - c))'
    },
    description: 'Area of triangle given all three sides.',
    variables: {
      A: 'Area',
      s: 'Semi-perimeter (a+b+c)/2',
      a: 'Side a',
      b: 'Side b',
      c: 'Side c'
    },
    difficulty: 'medium',
    example: { a: 5, b: 6, c: 7 },
    preCalculate: (vars) => ({ ...vars, s: (vars.a + vars.b + vars.c) / 2 }),
    evaluable: true
  },
  {
    name: 'Area of Triangle (Base-Height)',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½ × b × h',
    formula: '0.5 * b * h',
    solveFor: {
      A: '0.5 * b * h',
      b: '2 * A / h',
      h: '2 * A / b'
    },
    description: 'Area of a triangle is half base times height.',
    variables: {
      A: 'Area',
      b: 'Base',
      h: 'Height'
    },
    difficulty: 'easy',
    example: { b: 10, h: 8 },
    evaluable: true
  },
  {
    name: 'Area of Triangle (SAS)',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½ab·sin(C)',
    formula: '0.5 * a * b * Math.sin(C * Math.PI / 180)',
    solveFor: {
      A: '0.5 * a * b * Math.sin(C * Math.PI / 180)',
      a: '2 * A / (b * Math.sin(C * Math.PI / 180))',
      b: '2 * A / (a * Math.sin(C * Math.PI / 180))',
      C: 'Math.asin(2 * A / (a * b)) * 180 / Math.PI'
    },
    description: 'Area with two sides and included angle.',
    variables: {
      A: 'Area',
      a: 'Side a',
      b: 'Side b',
      C: 'Included angle (degrees)'
    },
    difficulty: 'medium',
    example: { a: 5, b: 7, C: 60 },
    evaluable: true
  },
  {
    name: 'Area of Rectangle',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = l × w',
    formula: 'l * w',
    solveFor: {
      A: 'l * w',
      l: 'A / w',
      w: 'A / l'
    },
    description: 'Area is length times width.',
    variables: {
      A: 'Area',
      l: 'Length',
      w: 'Width'
    },
    difficulty: 'easy',
    example: { l: 5, w: 3 },
    evaluable: true
  },
  {
    name: 'Area of Parallelogram',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = b × h',
    formula: 'b * h',
    solveFor: {
      A: 'b * h',
      b: 'A / h',
      h: 'A / b'
    },
    description: 'Area is base times height.',
    variables: {
      A: 'Area',
      b: 'Base',
      h: 'Height'
    },
    difficulty: 'easy',
    example: { b: 8, h: 4 },
    evaluable: true
  },
  {
    name: 'Area of Trapezoid',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½(a+b)h',
    formula: '0.5 * (a + b) * h',
    solveFor: {
      A: '0.5 * (a + b) * h',
      a: '2 * A / h - b',
      b: '2 * A / h - a',
      h: '2 * A / (a + b)'
    },
    description: 'Area is average of parallel sides times height.',
    variables: {
      A: 'Area',
      a: 'Parallel side a',
      b: 'Parallel side b',
      h: 'Height'
    },
    difficulty: 'medium',
    example: { a: 6, b: 10, h: 5 },
    evaluable: true
  },
  {
    name: 'Area of Rhombus',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½(d₁ × d₂)',
    formula: '0.5 * d1 * d2',
    solveFor: {
      A: '0.5 * d1 * d2',
      d1: '2 * A / d2',
      d2: '2 * A / d1'
    },
    description: 'Area is half the product of diagonals.',
    variables: {
      A: 'Area',
      'd₁': 'Diagonal 1',
      'd₂': 'Diagonal 2'
    },
    difficulty: 'medium',
    example: { d1: 12, d2: 8 },
    evaluable: true
  },
  {
    name: 'Area of Kite',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½(d₁ × d₂)',
    formula: '0.5 * d1 * d2',
    solveFor: {
      A: '0.5 * d1 * d2',
      d1: '2 * A / d2',
      d2: '2 * A / d1'
    },
    description: 'Area of kite is half product of diagonals.',
    variables: {
      A: 'Area',
      'd₁': 'Diagonal 1',
      'd₂': 'Diagonal 2'
    },
    difficulty: 'medium',
    example: { d1: 10, d2: 6 },
    evaluable: true
  },
  {
    name: 'Area of Regular Polygon',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½ × n × s² × cot(π/n)',
    formula: '0.5 * n * s * s / Math.tan(Math.PI / n)',
    solveFor: {
      A: '0.5 * n * s * s / Math.tan(Math.PI / n)',
      s: 'Math.sqrt(2 * A * Math.tan(Math.PI / n) / n)',
      n: '0.5 * n * s * s / Math.tan(Math.PI / n)'
    },
    description: 'Area of a regular polygon.',
    variables: {
      A: 'Area',
      n: 'Number of sides',
      s: 'Side length'
    },
    difficulty: 'hard',
    example: { n: 6, s: 10 },
    evaluable: true
  },
  {
    name: 'Area of Circle Segment',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = r²/2(θ - sinθ)',
    formula: 'r * r / 2 * (theta - Math.sin(theta))',
    solveFor: {
      A: 'r * r / 2 * (theta - Math.sin(theta))',
      r: 'Math.sqrt(2 * A / (theta - Math.sin(theta)))'
    },
    description: 'Area of a circular segment.',
    variables: {
      A: 'Area',
      r: 'Radius',
      θ: 'Central angle (radians)'
    },
    difficulty: 'hard',
    example: { r: 5, theta: 1.5 },
    evaluable: true
  },
  {
    name: 'Area of Ellipse',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = πab',
    formula: 'Math.PI * a * b',
    solveFor: {
      A: 'Math.PI * a * b',
      a: 'A / (Math.PI * b)',
      b: 'A / (Math.PI * a)'
    },
    description: 'Area of ellipse with semi-major and semi-minor axes.',
    variables: {
      A: 'Area',
      a: 'Semi-major axis',
      b: 'Semi-minor axis'
    },
    difficulty: 'medium',
    example: { a: 5, b: 3 },
    evaluable: true
  },
  {
    name: 'Pythagorean Theorem',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'a² + b² = c²',
    formula: 'Math.sqrt(a*a + b*b)',
    solveFor: {
      c: 'Math.sqrt(a*a + b*b)',
      a: 'Math.sqrt(c*c - b*b)',
      b: 'Math.sqrt(c*c - a*a)'
    },
    description: 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.',
    variables: {
      a: 'Length of side a',
      b: 'Length of side b',
      c: 'Length of hypotenuse'
    },
    difficulty: 'easy',
    example: { a: 3, b: 4 },
    evaluable: true
  },
  {
    name: 'Distance Between Points (3D)',
    subject: 'Mathematics',
    topic: 'Coordinate Geometry',
    displayFormula: 'd = √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)',
    formula: 'Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1))',
    solveFor: {
      d: 'Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1))',
      x1: 'x2 - Math.sqrt(d*d - (y2-y1)*(y2-y1) - (z2-z1)*(z2-z1))',
      x2: 'x1 + Math.sqrt(d*d - (y2-y1)*(y2-y1) - (z2-z1)*(z2-z1))',
      y1: 'y2 - Math.sqrt(d*d - (x2-x1)*(x2-x1) - (z2-z1)*(z2-z1))',
      y2: 'y1 + Math.sqrt(d*d - (x2-x1)*(x2-x1) - (z2-z1)*(z2-z1))',
      z1: 'z2 - Math.sqrt(d*d - (x2-x1)*(x2-x1) - (y2-y1)*(y2-y1))',
      z2: 'z1 + Math.sqrt(d*d - (x2-x1)*(x2-x1) - (y2-y1)*(y2-y1))'
    },
    description: 'Distance between two points in 3D space.',
    variables: {
      d: 'Distance',
      'x₁': 'X1',
      'y₁': 'Y1',
      'z₁': 'Z1',
      'x₂': 'X2',
      'y₂': 'Y2',
      'z₂': 'Z2'
    },
    difficulty: 'medium',
    example: { x1: 0, y1: 0, z1: 0, x2: 1, y2: 2, z2: 3 },
    evaluable: true
  },
  {
    name: 'Area of a Circle',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = π · r²',
    formula: 'Math.PI * r * r',
    solveFor: {
      A: 'Math.PI * r * r',
      r: 'Math.sqrt(A / Math.PI)'
    },
    description: 'The area of a circle is pi times the radius squared.',
    variables: {
      A: 'Area',
      r: 'Radius of the circle'
    },
    difficulty: 'easy',
    example: { r: 5 },
    evaluable: true
  },
  {
    name: 'Circumference of a Circle',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'C = 2πr',
    formula: '2 * Math.PI * r',
    solveFor: {
      C: '2 * Math.PI * r',
      r: 'C / (2 * Math.PI)'
    },
    description: 'The circumference of a circle is 2 times pi times the radius.',
    variables: {
      C: 'Circumference',
      r: 'Radius of the circle'
    },
    difficulty: 'easy',
    example: { r: 7 },
    evaluable: true
  },
  {
    name: 'Arc Length',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'L = rθ',
    formula: 'r * theta',
    solveFor: {
      L: 'r * theta',
      r: 'L / theta',
      theta: 'L / r'
    },
    description: 'Length of an arc of a circle.',
    variables: {
      L: 'Arc length',
      r: 'Radius',
      θ: 'Central angle (radians)'
    },
    difficulty: 'medium',
    example: { r: 5, theta: 1.2 },
    evaluable: true
  },
  {
    name: 'Chord Length',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'c = 2r·sin(θ/2)',
    formula: '2 * r * Math.sin(theta / 2)',
    solveFor: {
      c: '2 * r * Math.sin(theta / 2)',
      r: 'c / (2 * Math.sin(theta / 2))',
      theta: '2 * Math.asin(c / (2 * r))'
    },
    description: 'Length of a chord in a circle.',
    variables: {
      c: 'Chord length',
      r: 'Radius',
      θ: 'Central angle (radians)'
    },
    difficulty: 'medium',
    example: { r: 5, theta: 1.2 },
    evaluable: true
  },
  {
    name: 'Sector Area',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'A = ½r²θ',
    formula: '0.5 * r * r * theta',
    solveFor: {
      A: '0.5 * r * r * theta',
      r: 'Math.sqrt(2 * A / theta)',
      theta: '2 * A / (r * r)'
    },
    description: 'Area of a circular sector.',
    variables: {
      A: 'Sector area',
      r: 'Radius',
      θ: 'Central angle (radians)'
    },
    difficulty: 'medium',
    example: { r: 5, theta: 1.2 },
    evaluable: true
  },
  {
    name: 'Quadratic Formula',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'x = (-b ± √(b²-4ac))/(2a)',
    formula: '(-b + Math.sqrt(b*b - 4*a*c)) / (2*a)',
    solveFor: {
      x: '(-b + Math.sqrt(b*b - 4*a*c)) / (2*a)',
      a: '(b*b) / (4*c + 4*x*x - 4*b*x)',
      b: '(2*a*x + 2*a*x) / 2',
      c: '(b*b - 4*a*a*x*x) / (4*a)'
    },
    description: 'The solutions to a quadratic equation ax² + bx + c = 0 (positive root).',
    variables: {
      a: 'Coefficient of x²',
      b: 'Coefficient of x',
      c: 'Constant term',
      x: 'Solution'
    },
    difficulty: 'medium',
    example: { a: 1, b: -3, c: 2 },
    evaluable: true
  },
  {
    name: 'Quadratic Formula (Negative Root)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'x = (-b - √(b²-4ac))/(2a)',
    formula: '(-b - Math.sqrt(b*b - 4*a*c)) / (2*a)',
    solveFor: {
      x: '(-b - Math.sqrt(b*b - 4*a*c)) / (2*a)'
    },
    description: 'Negative root of quadratic equation.',
    variables: {
      a: 'Coefficient of x²',
      b: 'Coefficient of x',
      c: 'Constant term',
      x: 'Solution'
    },
    difficulty: 'medium',
    example: { a: 1, b: -3, c: 2 },
    evaluable: true
  },
  {
    name: 'Discriminant',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'D = b² - 4ac',
    formula: 'b*b - 4*a*c',
    solveFor: {
      D: 'b*b - 4*a*c',
      a: '(b*b - D) / (4*c)',
      b: 'Math.sqrt(D + 4*a*c)',
      c: '(b*b - D) / (4*a)'
    },
    description: 'Determines nature of quadratic roots.',
    variables: {
      D: 'Discriminant',
      a: 'Coefficient of x²',
      b: 'Coefficient of x',
      c: 'Constant term'
    },
    difficulty: 'easy',
    example: { a: 1, b: -3, c: 2 },
    evaluable: true
  },
  {
    name: 'Slope Formula',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'm = (y₂ - y₁)/(x₂ - x₁)',
    formula: '(y2 - y1) / (x2 - x1)',
    solveFor: {
      m: '(y2 - y1) / (x2 - x1)',
      y1: 'y2 - m * (x2 - x1)',
      y2: 'y1 + m * (x2 - x1)',
      x1: 'x2 - (y2 - y1) / m',
      x2: 'x1 + (y2 - y1) / m'
    },
    description: 'The slope of a line passing through two points.',
    variables: {
      m: 'Slope',
      'y₂': 'Y-coordinate of second point',
      'y₁': 'Y-coordinate of first point',
      'x₂': 'X-coordinate of second point',
      'x₁': 'X-coordinate of first point'
    },
    difficulty: 'easy',
    example: { x1: 1, y1: 2, x2: 4, y2: 6 },
    evaluable: true
  },
  {
    name: 'Point-Slope Form',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'y - y₁ = m(x - x₁)',
    formula: 'y1 + m * (x - x1)',
    solveFor: {
      y: 'y1 + m * (x - x1)',
      y1: 'y - m * (x - x1)',
      m: '(y - y1) / (x - x1)',
      x: 'x1 + (y - y1) / m',
      x1: 'x - (y - y1) / m'
    },
    description: 'Equation of a line through point (x₁,y₁) with slope m.',
    variables: {
      'y': 'Y-coordinate',
      'y₁': 'Y-coordinate of point',
      m: 'Slope',
      x: 'X-coordinate',
      'x₁': 'X-coordinate of point'
    },
    difficulty: 'easy',
    example: { x1: 1, y1: 2, m: 3, x: 4 },
    evaluable: true
  },
  {
    name: 'Distance from Point to Line',
    subject: 'Mathematics',
    topic: 'Coordinate Geometry',
    displayFormula: 'd = |Ax₀ + By₀ + C|/√(A²+B²)',
    formula: 'Math.abs(A*x0 + B*y0 + C) / Math.sqrt(A*A + B*B)',
    solveFor: {
      d: 'Math.abs(A*x0 + B*y0 + C) / Math.sqrt(A*A + B*B)',
      A: '(d * Math.sqrt(A*A + B*B) - B*y0 - C) / x0',
      B: '(d * Math.sqrt(A*A + B*B) - A*x0 - C) / y0',
      C: 'd * Math.sqrt(A*A + B*B) - A*x0 - B*y0',
      x0: '(d * Math.sqrt(A*A + B*B) - B*y0 - C) / A',
      y0: '(d * Math.sqrt(A*A + B*B) - A*x0 - C) / B'
    },
    description: 'Perpendicular distance from point to line Ax + By + C = 0.',
    variables: {
      d: 'Distance',
      A: 'Coefficient of x',
      B: 'Coefficient of y',
      C: 'Constant term',
      'x₀': 'X-coordinate of point',
      'y₀': 'Y-coordinate of point'
    },
    difficulty: 'hard',
    example: { A: 3, B: 4, C: 5, x0: 1, y0: 2 },
    evaluable: true
  },
  {
    name: 'Midpoint Formula',
    subject: 'Mathematics',
    topic: 'Coordinate Geometry',
    displayFormula: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
    formula: '[(x1+x2)/2, (y1+y2)/2]',
    solveFor: {
      'M_x': '(x1 + x2) / 2',
      'M_y': '(y1 + y2) / 2',
      x1: '2 * M_x - x2',
      x2: '2 * M_x - x1',
      y1: '2 * M_y - y2',
      y2: '2 * M_y - y1'
    },
    description: 'Coordinates of the midpoint of two points.',
    variables: {
      'M_x': 'X-coordinate of midpoint',
      'M_y': 'Y-coordinate of midpoint',
      'x₁': 'X-coordinate of point 1',
      'y₁': 'Y-coordinate of point 1',
      'x₂': 'X-coordinate of point 2',
      'y₂': 'Y-coordinate of point 2'
    },
    difficulty: 'easy',
    example: { x1: 1, y1: 2, x2: 5, y2: 8 },
    evaluable: true
  },
  {
    name: 'Volume of a Sphere',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = ⁴⁄₃πr³',
    formula: '(4/3) * Math.PI * r * r * r',
    solveFor: {
      V: '(4/3) * Math.PI * r * r * r',
      r: 'Math.cbrt(3 * V / (4 * Math.PI))'
    },
    description: 'The volume of a sphere is four-thirds times pi times the radius cubed.',
    variables: {
      V: 'Volume',
      r: 'Radius of the sphere'
    },
    difficulty: 'medium',
    example: { r: 3 },
    evaluable: true
  },
  {
    name: 'Surface Area of Sphere',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = 4πr²',
    formula: '4 * Math.PI * r * r',
    solveFor: {
      SA: '4 * Math.PI * r * r',
      r: 'Math.sqrt(SA / (4 * Math.PI))'
    },
    description: 'Surface area is four pi times radius squared.',
    variables: {
      SA: 'Surface area',
      r: 'Radius'
    },
    difficulty: 'easy',
    example: { r: 5 },
    evaluable: true
  },
  {
    name: 'Surface Area of Cube',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = 6s²',
    formula: '6 * s * s',
    solveFor: {
      SA: '6 * s * s',
      s: 'Math.sqrt(SA / 6)'
    },
    description: 'Surface area is 6 times side length squared.',
    variables: {
      SA: 'Surface area',
      s: 'Side length'
    },
    difficulty: 'easy',
    example: { s: 4 },
    evaluable: true
  },
  {
    name: 'Surface Area of Rectangular Prism',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = 2(lw + lh + wh)',
    formula: '2 * (l*w + l*h + w*h)',
    solveFor: {
      SA: '2 * (l*w + l*h + w*h)',
      l: '(SA/2 - w*h) / (w + h)',
      w: '(SA/2 - l*h) / (l + h)',
      h: '(SA/2 - l*w) / (l + w)'
    },
    description: 'Sum of areas of all six faces.',
    variables: {
      SA: 'Surface area',
      l: 'Length',
      w: 'Width',
      h: 'Height'
    },
    difficulty: 'medium',
    example: { l: 4, w: 3, h: 2 },
    evaluable: true
  },
  {
    name: 'Surface Area of Cylinder',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = 2πr² + 2πrh',
    formula: '2 * Math.PI * r * r + 2 * Math.PI * r * h',
    solveFor: {
      SA: '2 * Math.PI * r * r + 2 * Math.PI * r * h',
      r: '(Math.sqrt(h*h + 2*SA/Math.PI) - h) / 2',
      h: '(SA - 2 * Math.PI * r * r) / (2 * Math.PI * r)'
    },
    description: 'Area of two circular bases plus lateral area.',
    variables: {
      SA: 'Surface area',
      r: 'Radius of base',
      h: 'Height'
    },
    difficulty: 'medium',
    example: { r: 3, h: 7 },
    evaluable: true
  },
  {
    name: 'Surface Area of Cone',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = πr² + πrs',
    formula: 'Math.PI * r * r + Math.PI * r * s',
    solveFor: {
      SA: 'Math.PI * r * r + Math.PI * r * s',
      r: '(Math.sqrt(s*s + 4*SA/Math.PI) - s) / 2',
      s: '(SA - Math.PI * r * r) / (Math.PI * r)'
    },
    description: 'Area of base plus lateral area.',
    variables: {
      SA: 'Surface area',
      r: 'Radius of base',
      s: 'Slant height'
    },
    difficulty: 'medium',
    example: { r: 4, s: 10 },
    evaluable: true
  },
  {
    name: 'Surface Area of Pyramid (Square Base)',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = s² + 2sl',
    formula: 's*s + 2*s*l',
    solveFor: {
      SA: 's*s + 2*s*l',
      s: 'SA / (s + 2*l)',
      l: '(SA - s*s) / (2*s)'
    },
    description: 'Surface area of square pyramid.',
    variables: {
      SA: 'Surface area',
      s: 'Side of base',
      l: 'Slant height'
    },
    difficulty: 'medium',
    example: { s: 6, l: 8 },
    evaluable: true
  },
  {
    name: 'Surface Area of Pyramid',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = B + ½Pl',
    formula: 'B + 0.5 * P * l',
    solveFor: {
      SA: 'B + 0.5 * P * l',
      B: 'SA - 0.5 * P * l',
      P: '(SA - B) / (0.5 * l)',
      l: '(SA - B) / (0.5 * P)'
    },
    description: 'Area of base plus lateral area.',
    variables: {
      SA: 'Surface area',
      B: 'Area of base',
      P: 'Perimeter of base',
      l: 'Slant height'
    },
    difficulty: 'hard',
    example: { B: 36, P: 24, l: 8 },
    evaluable: true
  },
  {
    name: 'Surface Area of Torus',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'SA = 4π²Rr',
    formula: '4 * Math.PI * Math.PI * R * r',
    solveFor: {
      SA: '4 * Math.PI * Math.PI * R * r',
      R: 'SA / (4 * Math.PI * Math.PI * r)',
      r: 'SA / (4 * Math.PI * Math.PI * R)'
    },
    description: 'Surface area of a torus.',
    variables: {
      SA: 'Surface area',
      R: 'Major radius',
      r: 'Minor radius'
    },
    difficulty: 'hard',
    example: { R: 5, r: 2 },
    evaluable: true
  },
  {
    name: 'Volume of Cylinder',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = πr²h',
    formula: 'Math.PI * r * r * h',
    solveFor: {
      V: 'Math.PI * r * r * h',
      r: 'Math.sqrt(V / (Math.PI * h))',
      h: 'V / (Math.PI * r * r)'
    },
    description: 'Area of base times height.',
    variables: {
      V: 'Volume',
      r: 'Radius of base',
      h: 'Height'
    },
    difficulty: 'easy',
    example: { r: 3, h: 8 },
    evaluable: true
  },
  {
    name: 'Volume of Cone',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = ⅓πr²h',
    formula: '(1/3) * Math.PI * r * r * h',
    solveFor: {
      V: '(1/3) * Math.PI * r * r * h',
      r: 'Math.sqrt(3 * V / (Math.PI * h))',
      h: '3 * V / (Math.PI * r * r)'
    },
    description: 'One-third of cylinder volume.',
    variables: {
      V: 'Volume',
      r: 'Radius of base',
      h: 'Height'
    },
    difficulty: 'medium',
    example: { r: 4, h: 9 },
    evaluable: true
  },
  {
    name: 'Volume of Pyramid',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = ⅓Bh',
    formula: '(1/3) * B * h',
    solveFor: {
      V: '(1/3) * B * h',
      B: '3 * V / h',
      h: '3 * V / B'
    },
    description: 'One-third of base area times height.',
    variables: {
      V: 'Volume',
      B: 'Area of base',
      h: 'Height'
    },
    difficulty: 'medium',
    example: { B: 36, h: 7 },
    evaluable: true
  },
  {
    name: 'Volume of Torus',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = 2π²Rr²',
    formula: '2 * Math.PI * Math.PI * R * r * r',
    solveFor: {
      V: '2 * Math.PI * Math.PI * R * r * r',
      R: 'V / (2 * Math.PI * Math.PI * r * r)',
      r: 'Math.sqrt(V / (2 * Math.PI * Math.PI * R))'
    },
    description: 'Volume of a torus.',
    variables: {
      V: 'Volume',
      R: 'Major radius',
      r: 'Minor radius'
    },
    difficulty: 'hard',
    example: { R: 5, r: 2 },
    evaluable: true
  },
  {
    name: 'Volume of Ellipsoid',
    subject: 'Mathematics',
    topic: 'Geometry',
    displayFormula: 'V = ⁴⁄₃πabc',
    formula: '(4/3) * Math.PI * a * b * c',
    solveFor: {
      V: '(4/3) * Math.PI * a * b * c',
      a: '3 * V / (4 * Math.PI * b * c)',
      b: '3 * V / (4 * Math.PI * a * c)',
      c: '3 * V / (4 * Math.PI * a * b)'
    },
    description: 'Volume of an ellipsoid.',
    variables: {
      V: 'Volume',
      a: 'Semi-axis a',
      b: 'Semi-axis b',
      c: 'Semi-axis c'
    },
    difficulty: 'hard',
    example: { a: 3, b: 4, c: 5 },
    evaluable: true
  },

  // --- STATISTICS & PROBABILITY - MEGA EXTENDED ---
  {
    name: 'Mean (Average)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'x̄ = Σx/n',
    formula: 'sum / n',
    solveFor: {
      'x̄': 'sum / n',
      sum: 'x̄ * n',
      n: 'sum / x̄'
    },
    description: 'The average of a set of numbers is the sum divided by the count.',
    variables: {
      'x̄': 'Mean',
      'Σx': 'Sum of all values',
      n: 'Number of values'
    },
    difficulty: 'easy',
    example: { sum: 50, n: 5 },
    evaluable: true
  },
  {
    name: 'Median (Odd n)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'median = x_{(n+1)/2}',
    formula: 'sorted[Math.floor(n/2)]',
    solveFor: {},
    description: 'Middle value of sorted data (odd count).',
    variables: {
      median: 'Middle value',
      n: 'Number of values',
      sorted: 'Sorted array'
    },
    difficulty: 'easy',
    example: { sorted: [1, 3, 5, 7, 9], n: 5 },
    evaluable: false
  },
  {
    name: 'Median (Even n)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'median = (x_{n/2} + x_{n/2+1})/2',
    formula: '(sorted[n/2 - 1] + sorted[n/2]) / 2',
    solveFor: {},
    description: 'Average of two middle values (even count).',
    variables: {
      median: 'Middle value',
      n: 'Number of values',
      sorted: 'Sorted array'
    },
    difficulty: 'easy',
    example: { sorted: [1, 3, 5, 7], n: 4 },
    evaluable: false
  },
  {
    name: 'Variance (Population)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'σ² = Σ(x - μ)²/N',
    formula: 'sumSquares / N',
    solveFor: {
      'σ²': 'sumSquares / N',
      sumSquares: 'σ² * N',
      N: 'sumSquares / σ²'
    },
    description: 'Average squared deviation from mean.',
    variables: {
      'σ²': 'Population variance',
      x: 'Individual value',
      μ: 'Population mean',
      N: 'Population size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, N: 5 },
    evaluable: true
  },
  {
    name: 'Standard Deviation (Population)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'σ = √(Σ(x - μ)²/N)',
    formula: 'Math.sqrt(sumSquares / N)',
    solveFor: {
      σ: 'Math.sqrt(sumSquares / N)',
      sumSquares: 'σ * σ * N',
      N: 'sumSquares / (σ * σ)'
    },
    description: 'Square root of population variance.',
    variables: {
      σ: 'Population standard deviation',
      x: 'Individual value',
      μ: 'Population mean',
      N: 'Population size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, N: 5 },
    evaluable: true
  },
  {
    name: 'Variance (Sample)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 's² = Σ(x - x̄)²/(n-1)',
    formula: 'sumSquares / (n - 1)',
    solveFor: {
      's²': 'sumSquares / (n - 1)',
      sumSquares: 's² * (n - 1)',
      n: 'sumSquares / s² + 1'
    },
    description: 'Sample variance (unbiased).',
    variables: {
      's²': 'Sample variance',
      x: 'Individual value',
      'x̄': 'Sample mean',
      n: 'Sample size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, n: 5 },
    evaluable: true
  },
  {
    name: 'Standard Deviation (Sample)',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 's = √(Σ(x - x̄)²/(n-1))',
    formula: 'Math.sqrt(sumSquares / (n - 1))',
    solveFor: {
      s: 'Math.sqrt(sumSquares / (n - 1))',
      sumSquares: 's * s * (n - 1)',
      n: 'sumSquares / (s * s) + 1'
    },
    description: 'Sample standard deviation.',
    variables: {
      s: 'Sample standard deviation',
      x: 'Individual value',
      'x̄': 'Sample mean',
      n: 'Sample size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, n: 5 },
    evaluable: true
  },
  {
    name: 'Probability of Independent Events',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(A∩B) = P(A)·P(B)',
    formula: 'P_A * P_B',
    solveFor: {
      'P(A∩B)': 'P_A * P_B',
      'P(A)': 'P(A∩B) / P_B',
      'P(B)': 'P(A∩B) / P_A'
    },
    description: 'Probability of both independent events occurring.',
    variables: {
      'P(A∩B)': 'Probability of A and B',
      'P(A)': 'Probability of A',
      'P(B)': 'Probability of B'
    },
    difficulty: 'easy',
    example: { P_A: 0.5, P_B: 0.3 },
    evaluable: true
  },
  {
    name: 'Probability of Mutually Exclusive Events',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(A∪B) = P(A) + P(B)',
    formula: 'P_A + P_B',
    solveFor: {
      'P(A∪B)': 'P_A + P_B',
      'P(A)': 'P(A∪B) - P_B',
      'P(B)': 'P(A∪B) - P_A'
    },
    description: 'Probability of either event occurring (mutually exclusive).',
    variables: {
      'P(A∪B)': 'Probability of A or B',
      'P(A)': 'Probability of A',
      'P(B)': 'Probability of B'
    },
    difficulty: 'easy',
    example: { P_A: 0.5, P_B: 0.3 },
    evaluable: true
  },
  {
    name: 'Conditional Probability',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(A|B) = P(A∩B)/P(B)',
    formula: 'P_AandB / P_B',
    solveFor: {
      'P(A|B)': 'P_AandB / P_B',
      'P(A∩B)': 'P(A|B) * P_B',
      'P(B)': 'P_AandB / P(A|B)'
    },
    description: 'Probability of A given B has occurred.',
    variables: {
      'P(A|B)': 'Conditional probability',
      'P(A∩B)': 'Joint probability',
      'P(B)': 'Probability of B'
    },
    difficulty: 'medium',
    example: { P_AandB: 0.15, P_B: 0.5 },
    evaluable: true
  },
  {
    name: 'Bayes\' Theorem',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(A|B) = P(B|A)·P(A)/P(B)',
    formula: 'P_B_given_A * P_A / P_B',
    solveFor: {
      'P(A|B)': 'P_B_given_A * P_A / P_B',
      'P(B|A)': 'P(A|B) * P_B / P_A',
      'P(A)': 'P(A|B) * P_B / P_B_given_A',
      'P(B)': 'P_B_given_A * P_A / P(A|B)'
    },
    description: 'Updates probability based on new evidence.',
    variables: {
      'P(A|B)': 'Posterior probability',
      'P(B|A)': 'Likelihood',
      'P(A)': 'Prior probability',
      'P(B)': 'Evidence probability'
    },
    difficulty: 'hard',
    example: { P_B_given_A: 0.8, P_A: 0.3, P_B: 0.5 },
    evaluable: true
  },
  {
    name: 'Binomial Probability',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(X=k) = C(n,k)pᵏ(1-p)ⁿ⁻ᵏ',
    formula: 'combinations(n, k) * Math.pow(p, k) * Math.pow(1-p, n-k)',
    solveFor: {},
    description: 'Probability of k successes in n trials.',
    variables: {
      'P(X=k)': 'Probability of k successes',
      n: 'Number of trials',
      k: 'Number of successes',
      p: 'Probability of success'
    },
    difficulty: 'hard',
    example: { n: 5, k: 3, p: 0.5 },
    evaluable: false
  },
  {
    name: 'Poisson Probability',
    subject: 'Mathematics',
    topic: 'Probability',
    displayFormula: 'P(X=k) = e⁻ᵏ·λᵏ/k!',
    formula: 'Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k)',
    solveFor: {
      'P(X=k)': 'Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k)',
      lambda: 'Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k)'
    },
    description: 'Probability of k events with average rate λ.',
    variables: {
      'P(X=k)': 'Probability of k events',
      k: 'Number of events',
      λ: 'Average rate'
    },
    difficulty: 'hard',
    example: { lambda: 2, k: 3 },
    evaluable: false
  },
  {
    name: 'Normal Distribution PDF',
    subject: 'Mathematics',
    topic: 'Statistics',
    displayFormula: 'f(x) = 1/(σ√(2π))·e^{-(x-μ)²/(2σ²)}',
    formula: '(1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-Math.pow(x-mu, 2)/(2*sigma*sigma))',
    solveFor: {
      'f(x)': '(1/(sigma*Math.sqrt(2*Math.PI))) * Math.exp(-Math.pow(x-mu, 2)/(2*sigma*sigma))',
      x: 'mu + sigma * Math.sqrt(-2 * Math.log(f * sigma * Math.sqrt(2 * Math.PI)))',
      mu: 'x - sigma * Math.sqrt(-2 * Math.log(f * sigma * Math.sqrt(2 * Math.PI)))',
      sigma: '1 / (f * Math.sqrt(2 * Math.PI) * Math.exp(-Math.pow(x-mu, 2)/(2*sigma*sigma)))'
    },
    description: 'Probability density function of normal distribution.',
    variables: {
      'f(x)': 'Probability density',
      x: 'Value',
      μ: 'Mean',
      σ: 'Standard deviation'
    },
    difficulty: 'hard',
    example: { x: 0, mu: 0, sigma: 1 },
    evaluable: true
  },

  // --- CALCULUS - MEGA EXTENDED ---
  {
    name: 'Derivative of x^n (Power Rule)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(xⁿ) = nxⁿ⁻¹',
    formula: 'n * Math.pow(x, n-1)',
    solveFor: {
      n: 'n * Math.pow(x, n-1)',
      x: 'Math.pow(n * Math.pow(x, n-1) / n, 1/(n-1))'
    },
    description: 'Power rule for differentiation.',
    variables: {
      n: 'Exponent',
      x: 'Variable value'
    },
    difficulty: 'medium',
    example: { n: 3, x: 2 },
    evaluable: true
  },
  {
    name: 'Derivative of e^x',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(eˣ) = eˣ',
    formula: 'Math.exp(x)',
    solveFor: {
      x: 'Math.log(Math.exp(x))'
    },
    description: 'Derivative of e^x is itself.',
    variables: {
      x: 'Variable value'
    },
    difficulty: 'easy',
    example: { x: 2 },
    evaluable: true
  },
  {
    name: 'Derivative of ln(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(ln x) = 1/x',
    formula: '1 / x',
    solveFor: {
      x: '1 / (1 / x)'
    },
    description: 'Derivative of natural log is 1/x.',
    variables: {
      x: 'Variable value (x>0)'
    },
    difficulty: 'easy',
    example: { x: 3 },
    evaluable: true
  },
  {
    name: 'Derivative of sin(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(sin x) = cos x',
    formula: 'Math.cos(x)',
    solveFor: {
      x: 'Math.acos(Math.cos(x))'
    },
    description: 'Derivative of sine is cosine.',
    variables: {
      x: 'Angle (radians)'
    },
    difficulty: 'medium',
    example: { x: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Derivative of cos(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(cos x) = -sin x',
    formula: '-Math.sin(x)',
    solveFor: {
      x: 'Math.asin(-(-Math.sin(x)))'
    },
    description: 'Derivative of cosine is negative sine.',
    variables: {
      x: 'Angle (radians)'
    },
    difficulty: 'medium',
    example: { x: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Derivative of tan(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(tan x) = sec²x',
    formula: '1 / Math.pow(Math.cos(x), 2)',
    solveFor: {
      x: 'Math.acos(Math.sqrt(1 / (1 / Math.pow(Math.cos(x), 2))))'
    },
    description: 'Derivative of tangent is secant squared.',
    variables: {
      x: 'Angle (radians)'
    },
    difficulty: 'hard',
    example: { x: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Product Rule',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(uv) = u\'v + uv\'',
    formula: 'u_prime * v + u * v_prime',
    solveFor: {
      u: '(u_prime * v + u * v_prime - u * v_prime) / u_prime',
      v: '(u_prime * v + u * v_prime - u_prime * v) / u_prime',
      u_prime: '(u_prime * v + u * v_prime - u * v_prime) / v',
      v_prime: '(u_prime * v + u * v_prime - u_prime * v) / u'
    },
    description: 'Derivative of product of two functions.',
    variables: {
      u: 'First function',
      v: 'Second function',
      'u\'': 'Derivative of u',
      'v\'': 'Derivative of v'
    },
    difficulty: 'hard',
    example: { u: 2, v: 3, u_prime: 1, v_prime: 2 },
    evaluable: true
  },
  {
    name: 'Quotient Rule',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx(u/v) = (u\'v - uv\')/v²',
    formula: '(u_prime * v - u * v_prime) / (v * v)',
    solveFor: {
      u: '(u_prime * v - u * v_prime - u_prime * v) / (-v_prime)',
      v: '(u_prime * v - u * v_prime) / (u_prime * (v * v) / v)',
      u_prime: '(u_prime * v - u * v_prime + u * v_prime) / v',
      v_prime: '(u_prime * v - u_prime * v + u * v_prime) / u'
    },
    description: 'Derivative of quotient of two functions.',
    variables: {
      u: 'Numerator function',
      v: 'Denominator function',
      'u\'': 'Derivative of u',
      'v\'': 'Derivative of v'
    },
    difficulty: 'hard',
    example: { u: 2, v: 3, u_prime: 1, v_prime: 2 },
    evaluable: true
  },
  {
    name: 'Chain Rule',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: 'd/dx[f(g(x))] = f\'(g(x))·g\'(x)',
    formula: 'f_prime_g * g_prime',
    solveFor: {
      f_prime_g: 'f_prime_g * g_prime / g_prime',
      g_prime: 'f_prime_g * g_prime / f_prime_g'
    },
    description: 'Derivative of composite function.',
    variables: {
      'f\'(g(x))': 'Derivative of outer function at inner',
      'g\'(x)': 'Derivative of inner function'
    },
    difficulty: 'hard',
    example: { f_prime_g: 3, g_prime: 2 },
    evaluable: true
  },
  {
    name: 'Integral of x^n (Power Rule)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
    formula: 'Math.pow(x, n+1) / (n + 1)',
    solveFor: {
      n: 'Math.log(n * x) / Math.log(x)',
      x: 'Math.pow(n * (n + 1), 1/(n+1))'
    },
    description: 'Power rule for integration (constant C omitted).',
    variables: {
      n: 'Exponent (n ≠ -1)',
      x: 'Variable value',
      C: 'Constant of integration'
    },
    difficulty: 'medium',
    example: { n: 2, x: 3 },
    evaluable: true
  },
  {
    name: 'Integral of 1/x',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫1/x dx = ln|x| + C',
    formula: 'Math.log(Math.abs(x))',
    solveFor: {
      x: 'Math.exp(Math.log(Math.abs(x)))'
    },
    description: 'Integral of 1/x is natural log of absolute value.',
    variables: {
      x: 'Variable value (x≠0)',
      C: 'Constant of integration'
    },
    difficulty: 'medium',
    example: { x: 2 },
    evaluable: true
  },
  {
    name: 'Integral of e^x',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫eˣ dx = eˣ + C',
    formula: 'Math.exp(x)',
    solveFor: {
      x: 'Math.log(Math.exp(x))'
    },
    description: 'Integral of e^x is itself.',
    variables: {
      x: 'Variable value',
      C: 'Constant of integration'
    },
    difficulty: 'easy',
    example: { x: 2 },
    evaluable: true
  },
  {
    name: 'Integral of sin(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫sin x dx = -cos x + C',
    formula: '-Math.cos(x)',
    solveFor: {
      x: 'Math.acos(-(-Math.cos(x)))'
    },
    description: 'Integral of sine is negative cosine.',
    variables: {
      x: 'Angle (radians)',
      C: 'Constant of integration'
    },
    difficulty: 'medium',
    example: { x: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Integral of cos(x)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫cos x dx = sin x + C',
    formula: 'Math.sin(x)',
    solveFor: {
      x: 'Math.asin(Math.sin(x))'
    },
    description: 'Integral of cosine is sine.',
    variables: {
      x: 'Angle (radians)',
      C: 'Constant of integration'
    },
    difficulty: 'medium',
    example: { x: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Definite Integral (Trapezoidal Rule)',
    subject: 'Mathematics',
    topic: 'Calculus',
    displayFormula: '∫ₐᵇ f(x) dx ≈ Δx/2[f(a) + 2Σf(xᵢ) + f(b)]',
    formula: 'h/2 * (f_a + 2*sum + f_b)',
    solveFor: {
      h: '2 * (h/2 * (f_a + 2*sum + f_b)) / (f_a + 2*sum + f_b)',
      f_a: '2 * (h/2 * (f_a + 2*sum + f_b)) / h - 2*sum - f_b',
      sum: '(2 * (h/2 * (f_a + 2*sum + f_b)) / h - f_a - f_b) / 2',
      f_b: '2 * (h/2 * (f_a + 2*sum + f_b)) / h - f_a - 2*sum'
    },
    description: 'Numerical integration using trapezoids.',
    variables: {
      a: 'Lower bound',
      b: 'Upper bound',
      h: 'Step size (b-a)/n',
      n: 'Number of subintervals',
      'f(x)': 'Function to integrate'
    },
    difficulty: 'hard',
    example: { a: 0, b: 1, h: 0.25, f_a: 1, sum: 2.5, f_b: 2 },
    evaluable: true
  },

  // --- TRIGONOMETRY - MEGA EXTENDED ---
  {
    name: 'Sine Identity',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'sin²θ + cos²θ = 1',
    formula: 'Math.pow(Math.sin(theta), 2) + Math.pow(Math.cos(theta), 2)',
    solveFor: {
      theta: 'Math.asin(Math.sqrt(1 - Math.pow(Math.cos(theta), 2)))'
    },
    description: 'Pythagorean identity for sine and cosine.',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'easy',
    example: { theta: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Double Angle (sin)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'sin(2θ) = 2sinθ·cosθ',
    formula: '2 * Math.sin(theta) * Math.cos(theta)',
    solveFor: {
      theta: 'Math.asin(2 * Math.sin(theta) * Math.cos(theta)) / 2'
    },
    description: 'Sine of double angle.',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'medium',
    example: { theta: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Double Angle (cos)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'cos(2θ) = cos²θ - sin²θ',
    formula: 'Math.pow(Math.cos(theta), 2) - Math.pow(Math.sin(theta), 2)',
    solveFor: {
      theta: 'Math.acos(Math.pow(Math.cos(theta), 2) - Math.pow(Math.sin(theta), 2)) / 2'
    },
    description: 'Cosine of double angle.',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'medium',
    example: { theta: Math.PI / 4 },
    evaluable: true
  },
  {
    name: 'Double Angle (tan)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'tan(2θ) = 2tanθ/(1-tan²θ)',
    formula: '2 * Math.tan(theta) / (1 - Math.pow(Math.tan(theta), 2))',
    solveFor: {
      theta: 'Math.atan(2 * Math.tan(theta) / (1 - Math.pow(Math.tan(theta), 2))) / 2'
    },
    description: 'Tangent of double angle.',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'hard',
    example: { theta: Math.PI / 6 },
    evaluable: true
  },
  {
    name: 'Half Angle (sin)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'sin(θ/2) = ±√((1-cosθ)/2)',
    formula: 'Math.sqrt((1 - Math.cos(theta)) / 2)',
    solveFor: {
      theta: '2 * Math.acos(1 - 2 * Math.pow(Math.sqrt((1 - Math.cos(theta)) / 2), 2))'
    },
    description: 'Sine of half angle (positive root).',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'hard',
    example: { theta: Math.PI / 2 },
    evaluable: true
  },
  {
    name: 'Half Angle (cos)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'cos(θ/2) = ±√((1+cosθ)/2)',
    formula: 'Math.sqrt((1 + Math.cos(theta)) / 2)',
    solveFor: {
      theta: '2 * Math.acos(2 * Math.pow(Math.sqrt((1 + Math.cos(theta)) / 2), 2) - 1)'
    },
    description: 'Cosine of half angle (positive root).',
    variables: {
      θ: 'Angle (radians)'
    },
    difficulty: 'hard',
    example: { theta: Math.PI / 2 },
    evaluable: true
  },
  {
    name: 'Sum-to-Product (sin+sin)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'sinA + sinB = 2sin((A+B)/2)cos((A-B)/2)',
    formula: '2 * Math.sin((A+B)/2) * Math.cos((A-B)/2)',
    solveFor: {
      A: '2 * Math.asin(2 * Math.sin((A+B)/2) * Math.cos((A-B)/2)) - B',
      B: 'A - 2 * Math.acos(2 * Math.sin((A+B)/2) * Math.cos((A-B)/2))'
    },
    description: 'Sum of sines as product.',
    variables: {
      A: 'Angle A (radians)',
      B: 'Angle B (radians)'
    },
    difficulty: 'hard',
    example: { A: Math.PI / 3, B: Math.PI / 6 },
    evaluable: true
  },
  {
    name: 'Sum-to-Product (cos+cos)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'cosA + cosB = 2cos((A+B)/2)cos((A-B)/2)',
    formula: '2 * Math.cos((A+B)/2) * Math.cos((A-B)/2)',
    solveFor: {
      A: '2 * Math.acos(2 * Math.cos((A+B)/2) * Math.cos((A-B)/2)) - B',
      B: 'A - 2 * Math.acos(2 * Math.cos((A+B)/2) * Math.cos((A-B)/2))'
    },
    description: 'Sum of cosines as product.',
    variables: {
      A: 'Angle A (radians)',
      B: 'Angle B (radians)'
    },
    difficulty: 'hard',
    example: { A: Math.PI / 3, B: Math.PI / 6 },
    evaluable: true
  },
  {
    name: 'Law of Sines',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'a/sin(A) = b/sin(B) = c/sin(C)',
    formula: 'a / Math.sin(A * Math.PI / 180)',
    solveFor: {
      a: 'a / Math.sin(A * Math.PI / 180) * Math.sin(A * Math.PI / 180)',
      A: 'Math.asin(a / (a / Math.sin(A * Math.PI / 180))) * 180 / Math.PI'
    },
    description: 'Relates sides and angles of any triangle.',
    variables: {
      a: 'Side opposite angle A',
      A: 'Angle A (degrees)'
    },
    difficulty: 'medium',
    example: { a: 5, A: 30 },
    evaluable: true
  },
  {
    name: 'Law of Cosines (Side)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'c² = a² + b² - 2ab·cos(C)',
    formula: 'Math.sqrt(a*a + b*b - 2*a*b*Math.cos(C * Math.PI / 180))',
    solveFor: {
      c: 'Math.sqrt(a*a + b*b - 2*a*b*Math.cos(C * Math.PI / 180))',
      a: 'b * Math.cos(C * Math.PI / 180) + Math.sqrt(c*c - b*b * Math.pow(Math.sin(C * Math.PI / 180), 2))',
      b: 'a * Math.cos(C * Math.PI / 180) + Math.sqrt(c*c - a*a * Math.pow(Math.sin(C * Math.PI / 180), 2))',
      C: 'Math.acos((a*a + b*b - c*c) / (2*a*b)) * 180 / Math.PI'
    },
    description: 'Find side c given sides a,b and angle C.',
    variables: {
      a: 'Side a',
      b: 'Side b',
      C: 'Angle C (degrees)'
    },
    difficulty: 'medium',
    example: { a: 5, b: 6, C: 60 },
    evaluable: true
  },
  {
    name: 'Law of Cosines (Angle)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'cos(C) = (a²+b²-c²)/(2ab)',
    formula: 'Math.acos((a*a + b*b - c*c) / (2*a*b)) * 180 / Math.PI',
    solveFor: {
      C: 'Math.acos((a*a + b*b - c*c) / (2*a*b)) * 180 / Math.PI',
      a: '(b*b + c*c - 2*b*c*Math.cos(C * Math.PI / 180))',
      b: '(a*a + c*c - 2*a*c*Math.cos(C * Math.PI / 180))',
      c: 'Math.sqrt(a*a + b*b - 2*a*b*Math.cos(C * Math.PI / 180))'
    },
    description: 'Find angle C given sides a,b,c.',
    variables: {
      a: 'Side a',
      b: 'Side b',
      c: 'Side c (opposite angle C)'
    },
    difficulty: 'medium',
    example: { a: 5, b: 6, c: 7 },
    evaluable: true
  },
  {
    name: 'Area of Triangle (SAS)',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    displayFormula: 'K = ½ab·sin(C)',
    formula: '0.5 * a * b * Math.sin(C * Math.PI / 180)',
    solveFor: {
      K: '0.5 * a * b * Math.sin(C * Math.PI / 180)',
      a: '2 * K / (b * Math.sin(C * Math.PI / 180))',
      b: '2 * K / (a * Math.sin(C * Math.PI / 180))',
      C: 'Math.asin(2 * K / (a * b)) * 180 / Math.PI'
    },
    description: 'Area with two sides and included angle.',
    variables: {
      K: 'Area',
      a: 'Side a',
      b: 'Side b',
      C: 'Included angle (degrees)'
    },
    difficulty: 'medium',
    example: { a: 5, b: 7, C: 60 },
    evaluable: true
  },
    // ============================================================
  // PHYSICS - ULTIMATE EXTENDED (150+ Formulas)
  // ============================================================

  // --- MECHANICS - MEGA EXTENDED ---
  {
    name: "Newton's First Law (Inertia)",
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'ΣF = 0 → v = constant',
    formula: '0',
    solveFor: {},
    description: 'Object at rest stays at rest, object in motion stays in motion unless acted upon by net force.',
    variables: {
      'ΣF': 'Sum of forces',
      v: 'Velocity'
    },
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: "Newton's Second Law (Force)",
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'F = ma',
    formula: 'm * a',
    solveFor: {
      F: 'm * a',
      m: 'F / a',
      a: 'F / m'
    },
    description: 'Force equals mass times acceleration.',
    variables: {
      F: 'Force (Newtons)',
      m: 'Mass (kg)',
      a: 'Acceleration (m/s²)'
    },
    difficulty: 'easy',
    example: { m: 10, a: 5 },
    evaluable: true
  },
  {
    name: "Newton's Third Law (Action-Reaction)",
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'F₁₂ = -F₂₁',
    formula: '-F21',
    solveFor: {
      'F₁₂': '-F21',
      'F₂₁': '-F₁₂'
    },
    description: 'For every action, there is an equal and opposite reaction.',
    variables: {
      'F₁₂': 'Force on object 1 from object 2',
      'F₂₁': 'Force on object 2 from object 1'
    },
    difficulty: 'easy',
    example: { F21: 10 },
    evaluable: true
  },
  {
    name: 'Kinetic Energy',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'KE = ½mv²',
    formula: '0.5 * m * v * v',
    solveFor: {
      KE: '0.5 * m * v * v',
      m: '2 * KE / (v * v)',
      v: 'Math.sqrt(2 * KE / m)'
    },
    description: 'Kinetic energy is half the mass times the velocity squared.',
    variables: {
      KE: 'Kinetic energy (J)',
      m: 'Mass (kg)',
      v: 'Velocity (m/s)'
    },
    difficulty: 'medium',
    example: { m: 2, v: 3 },
    evaluable: true
  },
  {
    name: 'Potential Energy (Gravitational)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'PE = mgh',
    formula: 'm * 9.8 * h',
    solveFor: {
      PE: 'm * 9.8 * h',
      m: 'PE / (9.8 * h)',
      h: 'PE / (m * 9.8)'
    },
    description: 'Potential energy is mass times gravity times height.',
    variables: {
      PE: 'Potential energy (J)',
      m: 'Mass (kg)',
      g: 'Gravity (9.8 m/s²)',
      h: 'Height (m)'
    },
    difficulty: 'easy',
    example: { m: 5, h: 10 },
    evaluable: true
  },
  {
    name: 'Elastic Potential Energy',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'PE = ½kx²',
    formula: '0.5 * k * x * x',
    solveFor: {
      PE: '0.5 * k * x * x',
      k: '2 * PE / (x * x)',
      x: 'Math.sqrt(2 * PE / k)'
    },
    description: 'Energy stored in a spring.',
    variables: {
      PE: 'Potential energy (J)',
      k: 'Spring constant (N/m)',
      x: 'Displacement from equilibrium (m)'
    },
    difficulty: 'medium',
    example: { k: 100, x: 0.1 },
    evaluable: true
  },
  {
    name: 'Work (General)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'W = Fd·cosθ',
    formula: 'F * d * Math.cos(theta * Math.PI / 180)',
    solveFor: {
      W: 'F * d * Math.cos(theta * Math.PI / 180)',
      F: 'W / (d * Math.cos(theta * Math.PI / 180))',
      d: 'W / (F * Math.cos(theta * Math.PI / 180))',
      theta: 'Math.acos(W / (F * d)) * 180 / Math.PI'
    },
    description: 'Work is force times displacement times cosine of angle.',
    variables: {
      W: 'Work (J)',
      F: 'Force (N)',
      d: 'Displacement (m)',
      θ: 'Angle between force and displacement (degrees)'
    },
    difficulty: 'medium',
    example: { F: 20, d: 5, theta: 0 },
    evaluable: true
  },
  {
    name: 'Work (Constant Force)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'W = Fd (parallel)',
    formula: 'F * d',
    solveFor: {
      W: 'F * d',
      F: 'W / d',
      d: 'W / F'
    },
    description: 'Work when force is parallel to displacement.',
    variables: {
      W: 'Work (J)',
      F: 'Force (N)',
      d: 'Displacement (m)'
    },
    difficulty: 'easy',
    example: { F: 20, d: 5 },
    evaluable: true
  },
  {
    name: 'Power (Mechanical)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'P = W/t',
    formula: 'W / t',
    solveFor: {
      P: 'W / t',
      W: 'P * t',
      t: 'W / P'
    },
    description: 'Power is work divided by time.',
    variables: {
      P: 'Power (W)',
      W: 'Work (J)',
      t: 'Time (s)'
    },
    difficulty: 'easy',
    example: { W: 100, t: 10 },
    evaluable: true
  },
  {
    name: 'Power (Force × Velocity)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'P = Fv',
    formula: 'F * v',
    solveFor: {
      P: 'F * v',
      F: 'P / v',
      v: 'P / F'
    },
    description: 'Power is force times velocity.',
    variables: {
      P: 'Power (W)',
      F: 'Force (N)',
      v: 'Velocity (m/s)'
    },
    difficulty: 'medium',
    example: { F: 20, v: 5 },
    evaluable: true
  },
  {
    name: 'Velocity (Average)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'v = Δx/Δt',
    formula: 'dx / dt',
    solveFor: {
      v: 'dx / dt',
      dx: 'v * dt',
      dt: 'dx / v'
    },
    description: 'Velocity is displacement divided by time.',
    variables: {
      v: 'Velocity (m/s)',
      'Δx': 'Change in position (m)',
      'Δt': 'Change in time (s)'
    },
    difficulty: 'easy',
    example: { dx: 100, dt: 5 },
    evaluable: true
  },
  {
    name: 'Acceleration (Average)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'a = Δv/Δt',
    formula: 'dv / dt',
    solveFor: {
      a: 'dv / dt',
      dv: 'a * dt',
      dt: 'dv / a'
    },
    description: 'Acceleration is change in velocity divided by time.',
    variables: {
      a: 'Acceleration (m/s²)',
      'Δv': 'Change in velocity (m/s)',
      'Δt': 'Change in time (s)'
    },
    difficulty: 'easy',
    example: { dv: 20, dt: 5 },
    evaluable: true
  },
  {
    name: 'Uniformly Accelerated Motion (v)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'v = u + at',
    formula: 'u + a * t',
    solveFor: {
      v: 'u + a * t',
      u: 'v - a * t',
      a: '(v - u) / t',
      t: '(v - u) / a'
    },
    description: 'Final velocity with constant acceleration.',
    variables: {
      v: 'Final velocity (m/s)',
      u: 'Initial velocity (m/s)',
      a: 'Acceleration (m/s²)',
      t: 'Time (s)'
    },
    difficulty: 'medium',
    example: { u: 10, a: 2, t: 5 },
    evaluable: true
  },
  {
    name: 'Uniformly Accelerated Motion (s)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 's = ut + ½at²',
    formula: 'u * t + 0.5 * a * t * t',
    solveFor: {
      s: 'u * t + 0.5 * a * t * t',
      u: '(s - 0.5 * a * t * t) / t',
      a: '2 * (s - u * t) / (t * t)',
      t: '(-u + Math.sqrt(u*u + 2*a*s)) / a'
    },
    description: 'Displacement with constant acceleration.',
    variables: {
      s: 'Displacement (m)',
      u: 'Initial velocity (m/s)',
      a: 'Acceleration (m/s²)',
      t: 'Time (s)'
    },
    difficulty: 'medium',
    example: { u: 10, a: 2, t: 5 },
    evaluable: true
  },
  {
    name: 'Uniformly Accelerated Motion (v²)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'v² = u² + 2as',
    formula: 'Math.sqrt(u*u + 2*a*s)',
    solveFor: {
      v: 'Math.sqrt(u*u + 2*a*s)',
      u: 'Math.sqrt(v*v - 2*a*s)',
      a: '(v*v - u*u) / (2*s)',
      s: '(v*v - u*u) / (2*a)'
    },
    description: 'Velocity without time.',
    variables: {
      v: 'Final velocity (m/s)',
      u: 'Initial velocity (m/s)',
      a: 'Acceleration (m/s²)',
      s: 'Displacement (m)'
    },
    difficulty: 'medium',
    example: { u: 10, a: 2, s: 50 },
    evaluable: true
  },
  {
    name: 'Momentum',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'p = mv',
    formula: 'm * v',
    solveFor: {
      p: 'm * v',
      m: 'p / v',
      v: 'p / m'
    },
    description: 'Momentum is mass times velocity.',
    variables: {
      p: 'Momentum (kg·m/s)',
      m: 'Mass (kg)',
      v: 'Velocity (m/s)'
    },
    difficulty: 'easy',
    example: { m: 10, v: 5 },
    evaluable: true
  },
  {
    name: 'Impulse',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'J = Ft = Δp',
    formula: 'F * t',
    solveFor: {
      J: 'F * t',
      F: 'J / t',
      t: 'J / F'
    },
    description: 'Impulse is force times time, equals change in momentum.',
    variables: {
      J: 'Impulse (N·s)',
      F: 'Force (N)',
      t: 'Time (s)',
      'Δp': 'Change in momentum'
    },
    difficulty: 'medium',
    example: { F: 50, t: 0.1 },
    evaluable: true
  },
  {
    name: 'Conservation of Momentum (Elastic)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'm₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',
    formula: 'm1*u1 + m2*u2',
    solveFor: {
      m1: '(m2*u2 - m2*v2) / (v1 - u1)',
      u1: '(m1*v1 + m2*v2 - m2*u2) / m1',
      m2: '(m1*u1 - m1*v1) / (v2 - u2)',
      u2: '(m1*v1 + m2*v2 - m1*u1) / m2'
    },
    description: 'Total momentum conserved in elastic collision.',
    variables: {
      'm₁': 'Mass 1',
      'u₁': 'Initial velocity 1',
      'm₂': 'Mass 2',
      'u₂': 'Initial velocity 2'
    },
    difficulty: 'hard',
    example: { m1: 2, u1: 3, m2: 3, u2: -2 },
    evaluable: true
  },
  {
    name: 'Torque (Moment of Force)',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'τ = Fr·sinθ',
    formula: 'F * r * Math.sin(theta * Math.PI / 180)',
    solveFor: {
      τ: 'F * r * Math.sin(theta * Math.PI / 180)',
      F: 'τ / (r * Math.sin(theta * Math.PI / 180))',
      r: 'τ / (F * Math.sin(theta * Math.PI / 180))',
      theta: 'Math.asin(τ / (F * r)) * 180 / Math.PI'
    },
    description: 'Torque is force times lever arm times sine of angle.',
    variables: {
      τ: 'Torque (N·m)',
      F: 'Force (N)',
      r: 'Distance from pivot (m)',
      θ: 'Angle between force and lever arm (degrees)'
    },
    difficulty: 'medium',
    example: { F: 25, r: 0.5, theta: 90 },
    evaluable: true
  },
  {
    name: 'Angular Velocity',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'ω = Δθ/Δt',
    formula: 'dtheta / dt',
    solveFor: {
      ω: 'dtheta / dt',
      dtheta: 'ω * dt',
      dt: 'dtheta / ω'
    },
    description: 'Angular velocity is change in angle divided by time.',
    variables: {
      ω: 'Angular velocity (rad/s)',
      'Δθ': 'Change in angle (rad)',
      'Δt': 'Change in time (s)'
    },
    difficulty: 'medium',
    example: { dtheta: Math.PI, dt: 2 },
    evaluable: true
  },
  {
    name: 'Centripetal Force',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'F_c = mv²/r',
    formula: 'm * v * v / r',
    solveFor: {
      'F_c': 'm * v * v / r',
      m: 'F_c * r / (v * v)',
      v: 'Math.sqrt(F_c * r / m)',
      r: 'm * v * v / F_c'
    },
    description: 'Force toward center for circular motion.',
    variables: {
      'F_c': 'Centripetal force (N)',
      m: 'Mass (kg)',
      v: 'Speed (m/s)',
      r: 'Radius (m)'
    },
    difficulty: 'medium',
    example: { m: 2, v: 3, r: 1.5 },
    evaluable: true
  },
  {
    name: 'Centripetal Acceleration',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'a_c = v²/r',
    formula: 'v * v / r',
    solveFor: {
      'a_c': 'v * v / r',
      v: 'Math.sqrt(a_c * r)',
      r: 'v * v / a_c'
    },
    description: 'Acceleration toward center for circular motion.',
    variables: {
      'a_c': 'Centripetal acceleration (m/s²)',
      v: 'Speed (m/s)',
      r: 'Radius (m)'
    },
    difficulty: 'medium',
    example: { v: 3, r: 1.5 },
    evaluable: true
  },
  {
    name: 'Gravitational Force',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'F_g = Gm₁m₂/r²',
    formula: '6.674e-11 * m1 * m2 / (r * r)',
    solveFor: {
      'F_g': '6.674e-11 * m1 * m2 / (r * r)',
      m1: 'F_g * r * r / (6.674e-11 * m2)',
      m2: 'F_g * r * r / (6.674e-11 * m1)',
      r: 'Math.sqrt(6.674e-11 * m1 * m2 / F_g)'
    },
    description: 'Force of gravity between two masses.',
    variables: {
      'F_g': 'Gravitational force (N)',
      G: 'Gravitational constant (6.674×10⁻¹¹)',
      'm₁': 'Mass 1 (kg)',
      'm₂': 'Mass 2 (kg)',
      r: 'Distance between masses (m)'
    },
    difficulty: 'hard',
    example: { m1: 5.972e24, m2: 7.342e22, r: 3.844e8 },
    evaluable: true
  },
  {
    name: 'Gravitational Potential Energy',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'PE = -Gm₁m₂/r',
    formula: '-6.674e-11 * m1 * m2 / r',
    solveFor: {
      PE: '-6.674e-11 * m1 * m2 / r',
      m1: '-PE * r / (6.674e-11 * m2)',
      m2: '-PE * r / (6.674e-11 * m1)',
      r: '-6.674e-11 * m1 * m2 / PE'
    },
    description: 'Gravitational potential energy between two masses.',
    variables: {
      PE: 'Potential energy (J)',
      G: 'Gravitational constant',
      'm₁': 'Mass 1 (kg)',
      'm₂': 'Mass 2 (kg)',
      r: 'Distance between masses (m)'
    },
    difficulty: 'hard',
    example: { m1: 5.972e24, m2: 7.342e22, r: 3.844e8 },
    evaluable: true
  },
  {
    name: 'Escape Velocity',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'v_esc = √(2GM/r)',
    formula: 'Math.sqrt(2 * 6.674e-11 * M / r)',
    solveFor: {
      'v_esc': 'Math.sqrt(2 * 6.674e-11 * M / r)',
      M: 'v_esc * v_esc * r / (2 * 6.674e-11)',
      r: '2 * 6.674e-11 * M / (v_esc * v_esc)'
    },
    description: 'Velocity needed to escape gravitational field.',
    variables: {
      'v_esc': 'Escape velocity (m/s)',
      G: 'Gravitational constant',
      M: 'Mass of celestial body (kg)',
      r: 'Distance from center (m)'
    },
    difficulty: 'hard',
    example: { M: 5.972e24, r: 6.371e6 },
    evaluable: true
  },
  {
    name: 'Orbital Velocity',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'v_orb = √(GM/r)',
    formula: 'Math.sqrt(6.674e-11 * M / r)',
    solveFor: {
      'v_orb': 'Math.sqrt(6.674e-11 * M / r)',
      M: 'v_orb * v_orb * r / 6.674e-11',
      r: '6.674e-11 * M / (v_orb * v_orb)'
    },
    description: 'Velocity for circular orbit.',
    variables: {
      'v_orb': 'Orbital velocity (m/s)',
      G: 'Gravitational constant',
      M: 'Mass of central body (kg)',
      r: 'Orbital radius (m)'
    },
    difficulty: 'hard',
    example: { M: 5.972e24, r: 6.371e6 },
    evaluable: true
  },
  {
    name: 'Kepler\'s Third Law',
    subject: 'Physics',
    topic: 'Mechanics',
    displayFormula: 'T² = 4π²a³/(GM)',
    formula: '2 * Math.PI * Math.sqrt(a*a*a / (6.674e-11 * M))',
    solveFor: {
      T: '2 * Math.PI * Math.sqrt(a*a*a / (6.674e-11 * M))',
      a: 'Math.cbrt(T * T * 6.674e-11 * M / (4 * Math.PI * Math.PI))',
      M: '4 * Math.PI * Math.PI * a*a*a / (6.674e-11 * T * T)'
    },
    description: 'Orbital period squared proportional to semi-major axis cubed.',
    variables: {
      T: 'Orbital period (s)',
      a: 'Semi-major axis (m)',
      G: 'Gravitational constant',
      M: 'Mass of central body (kg)'
    },
    difficulty: 'hard',
    example: { a: 1.496e11, M: 1.989e30 },
    evaluable: true
  },

  // --- FLUID MECHANICS ---
  {
    name: 'Pressure (Fluid)',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'P = F/A',
    formula: 'F / A',
    solveFor: {
      P: 'F / A',
      F: 'P * A',
      A: 'F / P'
    },
    description: 'Pressure is force divided by area.',
    variables: {
      P: 'Pressure (Pa)',
      F: 'Force (N)',
      A: 'Area (m²)'
    },
    difficulty: 'easy',
    example: { F: 100, A: 0.5 },
    evaluable: true
  },
  {
    name: 'Hydrostatic Pressure',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'P = ρgh',
    formula: 'rho * 9.8 * h',
    solveFor: {
      P: 'rho * 9.8 * h',
      rho: 'P / (9.8 * h)',
      h: 'P / (rho * 9.8)'
    },
    description: 'Pressure at depth in a fluid.',
    variables: {
      P: 'Pressure (Pa)',
      ρ: 'Fluid density (kg/m³)',
      g: 'Gravity (9.8 m/s²)',
      h: 'Depth (m)'
    },
    difficulty: 'medium',
    example: { rho: 1000, h: 10 },
    evaluable: true
  },
  {
    name: 'Buoyant Force (Archimedes)',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'F_b = ρ_fVg',
    formula: 'rho * V * 9.8',
    solveFor: {
      'F_b': 'rho * V * 9.8',
      rho: 'F_b / (V * 9.8)',
      V: 'F_b / (rho * 9.8)'
    },
    description: 'Upward force on submerged object.',
    variables: {
      'F_b': 'Buoyant force (N)',
      'ρ_f': 'Fluid density (kg/m³)',
      V: 'Volume displaced (m³)',
      g: 'Gravity (9.8 m/s²)'
    },
    difficulty: 'medium',
    example: { rho: 1000, V: 0.1 },
    evaluable: true
  },
  {
    name: 'Continuity Equation (Fluid Flow)',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'A₁v₁ = A₂v₂',
    formula: 'A1 * v1 / A2',
    solveFor: {
      A1: 'A2 * v2 / v1',
      v1: 'A2 * v2 / A1',
      A2: 'A1 * v1 / v2',
      v2: 'A1 * v1 / A2'
    },
    description: 'Mass conservation for incompressible fluid.',
    variables: {
      'A₁': 'Cross-sectional area 1 (m²)',
      'v₁': 'Velocity 1 (m/s)',
      'A₂': 'Cross-sectional area 2 (m²)',
      'v₂': 'Velocity 2 (m/s)'
    },
    difficulty: 'medium',
    example: { A1: 0.1, v1: 2, A2: 0.05 },
    evaluable: true
  },
  {
    name: 'Bernoulli\'s Equation',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'P + ½ρv² + ρgh = constant',
    formula: 'P + 0.5 * rho * v * v + rho * 9.8 * h',
    solveFor: {
      P: 'P + 0.5 * rho * v * v + rho * 9.8 * h',
      rho: 'P / (0.5 * v * v + 9.8 * h)',
      v: 'Math.sqrt(2 * (P / rho - 9.8 * h))',
      h: '(P / rho - 0.5 * v * v) / 9.8'
    },
    description: 'Energy conservation in fluid flow.',
    variables: {
      P: 'Pressure (Pa)',
      ρ: 'Density (kg/m³)',
      v: 'Velocity (m/s)',
      g: 'Gravity (9.8 m/s²)',
      h: 'Height (m)'
    },
    difficulty: 'hard',
    example: { P: 100000, rho: 1000, v: 2, h: 5 },
    evaluable: true
  },
  {
    name: 'Viscous Drag (Stokes\' Law)',
    subject: 'Physics',
    topic: 'Fluid Mechanics',
    displayFormula: 'F_d = 6πηrv',
    formula: '6 * Math.PI * eta * r * v',
    solveFor: {
      'F_d': '6 * Math.PI * eta * r * v',
      eta: 'F_d / (6 * Math.PI * r * v)',
      r: 'F_d / (6 * Math.PI * eta * v)',
      v: 'F_d / (6 * Math.PI * eta * r)'
    },
    description: 'Drag force on sphere in viscous fluid.',
    variables: {
      'F_d': 'Drag force (N)',
      η: 'Dynamic viscosity (Pa·s)',
      r: 'Radius (m)',
      v: 'Velocity (m/s)'
    },
    difficulty: 'hard',
    example: { eta: 0.001, r: 0.01, v: 0.1 },
    evaluable: true
  },

  // --- THERMODYNAMICS ---
  {
    name: 'Heat Energy',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'Q = mcΔT',
    formula: 'm * c * dT',
    solveFor: {
      Q: 'm * c * dT',
      m: 'Q / (c * dT)',
      c: 'Q / (m * dT)',
      dT: 'Q / (m * c)'
    },
    description: 'Heat energy required for temperature change.',
    variables: {
      Q: 'Heat energy (J)',
      m: 'Mass (kg)',
      c: 'Specific heat capacity (J/kg·K)',
      'ΔT': 'Temperature change (K)'
    },
    difficulty: 'medium',
    example: { m: 2, c: 4186, dT: 10 },
    evaluable: true
  },
  {
    name: 'Latent Heat (Fusion)',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'Q = mL_f',
    formula: 'm * Lf',
    solveFor: {
      Q: 'm * Lf',
      m: 'Q / Lf',
      Lf: 'Q / m'
    },
    description: 'Heat required for phase change (melting/freezing).',
    variables: {
      Q: 'Heat energy (J)',
      m: 'Mass (kg)',
      'L_f': 'Latent heat of fusion (J/kg)'
    },
    difficulty: 'medium',
    example: { m: 2, Lf: 334000 },
    evaluable: true
  },
  {
    name: 'Latent Heat (Vaporization)',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'Q = mL_v',
    formula: 'm * Lv',
    solveFor: {
      Q: 'm * Lv',
      m: 'Q / Lv',
      Lv: 'Q / m'
    },
    description: 'Heat required for phase change (boiling/condensation).',
    variables: {
      Q: 'Heat energy (J)',
      m: 'Mass (kg)',
      'L_v': 'Latent heat of vaporization (J/kg)'
    },
    difficulty: 'medium',
    example: { m: 2, Lv: 2260000 },
    evaluable: true
  },
  {
    name: 'First Law of Thermodynamics',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'ΔU = Q - W',
    formula: 'Q - W',
    solveFor: {
      dU: 'Q - W',
      Q: 'dU + W',
      W: 'Q - dU'
    },
    description: 'Change in internal energy equals heat added minus work done.',
    variables: {
      'ΔU': 'Change in internal energy (J)',
      Q: 'Heat added (J)',
      W: 'Work done by system (J)'
    },
    difficulty: 'hard',
    example: { Q: 500, W: 200 },
    evaluable: true
  },
  {
    name: 'Ideal Gas Law',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'PV = nRT',
    formula: 'n * 8.314 * T / P',
    solveFor: {
      P: 'n * 8.314 * T / V',
      V: 'n * 8.314 * T / P',
      n: 'P * V / (8.314 * T)',
      T: 'P * V / (n * 8.314)'
    },
    description: 'Volume of an ideal gas.',
    variables: {
      P: 'Pressure (Pa)',
      V: 'Volume (m³)',
      n: 'Number of moles (mol)',
      R: 'Gas constant (8.314 J/mol·K)',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { n: 1, T: 298, P: 101325 },
    evaluable: true
  },
  {
    name: 'Carnot Efficiency',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'η = 1 - T_C/T_H',
    formula: '1 - TC / TH',
    solveFor: {
      eta: '1 - TC / TH',
      TC: '(1 - eta) * TH',
      TH: 'TC / (1 - eta)'
    },
    description: 'Maximum efficiency of a heat engine.',
    variables: {
      η: 'Efficiency',
      'T_C': 'Cold reservoir temperature (K)',
      'T_H': 'Hot reservoir temperature (K)'
    },
    difficulty: 'hard',
    example: { TC: 300, TH: 600 },
    evaluable: true
  },
  {
    name: 'Entropy Change',
    subject: 'Physics',
    topic: 'Thermodynamics',
    displayFormula: 'ΔS = Q_rev/T',
    formula: 'Q_rev / T',
    solveFor: {
      dS: 'Q_rev / T',
      Q_rev: 'dS * T',
      T: 'Q_rev / dS'
    },
    description: 'Change in entropy for reversible process.',
    variables: {
      'ΔS': 'Entropy change (J/K)',
      'Q_rev': 'Heat (reversible) (J)',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { Q_rev: 1000, T: 300 },
    evaluable: true
  },

  // --- ELECTRICITY & MAGNETISM - MEGA EXTENDED ---
  {
    name: "Ohm's Law",
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'V = IR',
    formula: 'I * R',
    solveFor: {
      V: 'I * R',
      I: 'V / R',
      R: 'V / I'
    },
    description: 'Voltage equals current times resistance.',
    variables: {
      V: 'Voltage (Volts)',
      I: 'Current (Amperes)',
      R: 'Resistance (Ohms)'
    },
    difficulty: 'easy',
    example: { I: 2, R: 5 },
    evaluable: true
  },
  {
    name: 'Power (Electrical)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'P = VI',
    formula: 'V * I',
    solveFor: {
      P: 'V * I',
      V: 'P / I',
      I: 'P / V'
    },
    description: 'Power is voltage times current.',
    variables: {
      P: 'Power (Watts)',
      V: 'Voltage (Volts)',
      I: 'Current (Amperes)'
    },
    difficulty: 'easy',
    example: { V: 12, I: 3 },
    evaluable: true
  },
  {
    name: 'Power (Electrical - Alternative)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'P = I²R',
    formula: 'I * I * R',
    solveFor: {
      P: 'I * I * R',
      I: 'Math.sqrt(P / R)',
      R: 'P / (I * I)'
    },
    description: 'Power dissipated in a resistor.',
    variables: {
      P: 'Power (Watts)',
      I: 'Current (Amperes)',
      R: 'Resistance (Ohms)'
    },
    difficulty: 'easy',
    example: { I: 2, R: 5 },
    evaluable: true
  },
  {
    name: 'Power (Electrical - Alternative 2)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'P = V²/R',
    formula: 'V * V / R',
    solveFor: {
      P: 'V * V / R',
      V: 'Math.sqrt(P * R)',
      R: 'V * V / P'
    },
    description: 'Power dissipated in a resistor.',
    variables: {
      P: 'Power (Watts)',
      V: 'Voltage (Volts)',
      R: 'Resistance (Ohms)'
    },
    difficulty: 'easy',
    example: { V: 12, R: 6 },
    evaluable: true
  },
  {
    name: 'Resistance (Formula)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'R = V/I',
    formula: 'V / I',
    solveFor: {
      R: 'V / I',
      V: 'R * I',
      I: 'V / R'
    },
    description: 'Resistance is voltage divided by current.',
    variables: {
      R: 'Resistance (Ω)',
      V: 'Voltage (V)',
      I: 'Current (A)'
    },
    difficulty: 'easy',
    example: { V: 12, I: 3 },
    evaluable: true
  },
  {
    name: 'Resistance (Material)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'R = ρL/A',
    formula: 'rho * L / A',
    solveFor: {
      R: 'rho * L / A',
      rho: 'R * A / L',
      L: 'R * A / rho',
      A: 'rho * L / R'
    },
    description: 'Resistance depends on material and geometry.',
    variables: {
      R: 'Resistance (Ω)',
      ρ: 'Resistivity (Ω·m)',
      L: 'Length (m)',
      A: 'Cross-sectional area (m²)'
    },
    difficulty: 'medium',
    example: { rho: 1.68e-8, L: 1, A: 1e-6 },
    evaluable: true
  },
  {
    name: 'Resistors in Series',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'R_total = R₁ + R₂ + R₃',
    formula: 'R1 + R2 + R3',
    solveFor: {
      R_total: 'R1 + R2 + R3',
      R1: 'R_total - R2 - R3',
      R2: 'R_total - R1 - R3',
      R3: 'R_total - R1 - R2'
    },
    description: 'Total resistance of resistors in series.',
    variables: {
      'R_total': 'Total resistance (Ω)',
      'R₁': 'Resistor 1 (Ω)',
      'R₂': 'Resistor 2 (Ω)',
      'R₃': 'Resistor 3 (Ω)'
    },
    difficulty: 'easy',
    example: { R1: 10, R2: 20, R3: 30 },
    evaluable: true
  },
  {
    name: 'Resistors in Series (General)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'R_total = ΣR_i',
    formula: 'R_total',
    solveFor: {},
    description: 'Sum of all resistances in series.',
    variables: {
      'R_total': 'Total resistance (Ω)',
      'R_i': 'Individual resistances (Ω)'
    },
    difficulty: 'easy',
    example: { R_total: 60 },
    evaluable: false
  },
  {
    name: 'Resistors in Parallel (Two)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: '1/R_total = 1/R₁ + 1/R₂',
    formula: '1 / (1/R1 + 1/R2)',
    solveFor: {
      R_total: '1 / (1/R1 + 1/R2)',
      R1: '1 / (1/R_total - 1/R2)',
      R2: '1 / (1/R_total - 1/R1)'
    },
    description: 'Total resistance of two resistors in parallel.',
    variables: {
      'R_total': 'Total resistance (Ω)',
      'R₁': 'Resistor 1 (Ω)',
      'R₂': 'Resistor 2 (Ω)'
    },
    difficulty: 'medium',
    example: { R1: 10, R2: 20 },
    evaluable: true
  },
  {
    name: 'Resistors in Parallel (General)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: '1/R_total = Σ(1/R_i)',
    formula: '1/(1/R1 + 1/R2 + 1/R3)',
    solveFor: {
      R_total: '1/(1/R1 + 1/R2 + 1/R3)',
      R1: '1 / (1/R_total - 1/R2 - 1/R3)',
      R2: '1 / (1/R_total - 1/R1 - 1/R3)',
      R3: '1 / (1/R_total - 1/R1 - 1/R2)'
    },
    description: 'Total resistance of multiple parallel resistors.',
    variables: {
      'R_total': 'Total resistance (Ω)',
      'R_i': 'Individual resistances (Ω)'
    },
    difficulty: 'medium',
    example: { R1: 10, R2: 20, R3: 30 },
    evaluable: true
  },
  {
    name: 'Capacitance',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'C = Q/V',
    formula: 'Q / V',
    solveFor: {
      C: 'Q / V',
      Q: 'C * V',
      V: 'Q / C'
    },
    description: 'Capacitance is charge divided by voltage.',
    variables: {
      C: 'Capacitance (F)',
      Q: 'Charge (C)',
      V: 'Voltage (V)'
    },
    difficulty: 'medium',
    example: { Q: 10e-6, V: 5 },
    evaluable: true
  },
  {
    name: 'Energy in Capacitor',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'U = ½CV²',
    formula: '0.5 * C * V * V',
    solveFor: {
      U: '0.5 * C * V * V',
      C: '2 * U / (V * V)',
      V: 'Math.sqrt(2 * U / C)'
    },
    description: 'Energy stored in a capacitor.',
    variables: {
      U: 'Energy (J)',
      C: 'Capacitance (F)',
      V: 'Voltage (V)'
    },
    difficulty: 'medium',
    example: { C: 100e-6, V: 12 },
    evaluable: true
  },
  {
    name: 'Capacitors in Series',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: '1/C_total = 1/C₁ + 1/C₂',
    formula: '1 / (1/C1 + 1/C2)',
    solveFor: {
      C_total: '1 / (1/C1 + 1/C2)',
      C1: '1 / (1/C_total - 1/C2)',
      C2: '1 / (1/C_total - 1/C1)'
    },
    description: 'Total capacitance of two capacitors in series.',
    variables: {
      'C_total': 'Total capacitance (F)',
      'C₁': 'Capacitor 1 (F)',
      'C₂': 'Capacitor 2 (F)'
    },
    difficulty: 'medium',
    example: { C1: 10e-6, C2: 20e-6 },
    evaluable: true
  },
  {
    name: 'Capacitors in Parallel',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'C_total = C₁ + C₂',
    formula: 'C1 + C2',
    solveFor: {
      C_total: 'C1 + C2',
      C1: 'C_total - C2',
      C2: 'C_total - C1'
    },
    description: 'Total capacitance of two capacitors in parallel.',
    variables: {
      'C_total': 'Total capacitance (F)',
      'C₁': 'Capacitor 1 (F)',
      'C₂': 'Capacitor 2 (F)'
    },
    difficulty: 'easy',
    example: { C1: 10e-6, C2: 20e-6 },
    evaluable: true
  },
  {
    name: 'RC Time Constant',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'τ = RC',
    formula: 'R * C',
    solveFor: {
      tau: 'R * C',
      R: 'tau / C',
      C: 'tau / R'
    },
    description: 'Time constant for RC circuit.',
    variables: {
      τ: 'Time constant (s)',
      R: 'Resistance (Ω)',
      C: 'Capacitance (F)'
    },
    difficulty: 'medium',
    example: { R: 1000, C: 100e-6 },
    evaluable: true
  },
  {
    name: 'Coulomb\'s Law (Electric Force)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'F = kq₁q₂/r²',
    formula: '8.99e9 * q1 * q2 / (r * r)',
    solveFor: {
      F: '8.99e9 * q1 * q2 / (r * r)',
      q1: 'F * r * r / (8.99e9 * q2)',
      q2: 'F * r * r / (8.99e9 * q1)',
      r: 'Math.sqrt(8.99e9 * q1 * q2 / F)'
    },
    description: 'Force between two point charges.',
    variables: {
      F: 'Electric force (N)',
      k: 'Coulomb constant (8.99×10⁹)',
      'q₁': 'Charge 1 (C)',
      'q₂': 'Charge 2 (C)',
      r: 'Distance between charges (m)'
    },
    difficulty: 'hard',
    example: { q1: 1e-6, q2: 1e-6, r: 0.1 },
    evaluable: true
  },
  {
    name: 'Electric Field',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'E = F/q',
    formula: 'F / q',
    solveFor: {
      E: 'F / q',
      F: 'E * q',
      q: 'F / E'
    },
    description: 'Electric field is force per unit charge.',
    variables: {
      E: 'Electric field (N/C)',
      F: 'Force (N)',
      q: 'Test charge (C)'
    },
    difficulty: 'medium',
    example: { F: 0.1, q: 1e-6 },
    evaluable: true
  },
  {
    name: 'Electric Field (Point Charge)',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'E = kq/r²',
    formula: '8.99e9 * q / (r * r)',
    solveFor: {
      E: '8.99e9 * q / (r * r)',
      q: 'E * r * r / 8.99e9',
      r: 'Math.sqrt(8.99e9 * q / E)'
    },
    description: 'Electric field from a point charge.',
    variables: {
      E: 'Electric field (N/C)',
      k: 'Coulomb constant',
      q: 'Charge (C)',
      r: 'Distance from charge (m)'
    },
    difficulty: 'medium',
    example: { q: 1e-6, r: 0.1 },
    evaluable: true
  },
  {
    name: 'Electric Potential',
    subject: 'Physics',
    topic: 'Electricity',
    displayFormula: 'V = kq/r',
    formula: '8.99e9 * q / r',
    solveFor: {
      V: '8.99e9 * q / r',
      q: 'V * r / 8.99e9',
      r: '8.99e9 * q / V'
    },
    description: 'Electric potential from a point charge.',
    variables: {
      V: 'Electric potential (V)',
      k: 'Coulomb constant',
      q: 'Charge (C)',
      r: 'Distance from charge (m)'
    },
    difficulty: 'medium',
    example: { q: 1e-6, r: 0.1 },
    evaluable: true
  },
  {
    name: 'Magnetic Force on Moving Charge',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'F = qvB·sinθ',
    formula: 'q * v * B * Math.sin(theta * Math.PI / 180)',
    solveFor: {
      F: 'q * v * B * Math.sin(theta * Math.PI / 180)',
      q: 'F / (v * B * Math.sin(theta * Math.PI / 180))',
      v: 'F / (q * B * Math.sin(theta * Math.PI / 180))',
      B: 'F / (q * v * Math.sin(theta * Math.PI / 180))',
      theta: 'Math.asin(F / (q * v * B)) * 180 / Math.PI'
    },
    description: 'Force on charged particle in magnetic field.',
    variables: {
      F: 'Magnetic force (N)',
      q: 'Charge (C)',
      v: 'Velocity (m/s)',
      B: 'Magnetic field (T)',
      θ: 'Angle between v and B (degrees)'
    },
    difficulty: 'hard',
    example: { q: 1.6e-19, v: 3e6, B: 0.5, theta: 90 },
    evaluable: true
  },
  {
    name: 'Magnetic Force on Current-Carrying Wire',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'F = ILB·sinθ',
    formula: 'I * L * B * Math.sin(theta * Math.PI / 180)',
    solveFor: {
      F: 'I * L * B * Math.sin(theta * Math.PI / 180)',
      I: 'F / (L * B * Math.sin(theta * Math.PI / 180))',
      L: 'F / (I * B * Math.sin(theta * Math.PI / 180))',
      B: 'F / (I * L * Math.sin(theta * Math.PI / 180))',
      theta: 'Math.asin(F / (I * L * B)) * 180 / Math.PI'
    },
    description: 'Force on wire in magnetic field.',
    variables: {
      F: 'Magnetic force (N)',
      I: 'Current (A)',
      L: 'Length of wire (m)',
      B: 'Magnetic field (T)',
      θ: 'Angle between wire and B (degrees)'
    },
    difficulty: 'hard',
    example: { I: 5, L: 0.5, B: 0.2, theta: 90 },
    evaluable: true
  },
  {
    name: 'Magnetic Field (Long Straight Wire)',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'B = μ₀I/(2πr)',
    formula: '(4*Math.PI*1e-7) * I / (2 * Math.PI * r)',
    solveFor: {
      B: '(4*Math.PI*1e-7) * I / (2 * Math.PI * r)',
      I: 'B * 2 * Math.PI * r / (4*Math.PI*1e-7)',
      r: '(4*Math.PI*1e-7) * I / (2 * Math.PI * B)'
    },
    description: 'Magnetic field around a long straight wire.',
    variables: {
      B: 'Magnetic field (T)',
      'μ₀': 'Permeability of free space (4π×10⁻⁷)',
      I: 'Current (A)',
      r: 'Distance from wire (m)'
    },
    difficulty: 'hard',
    example: { I: 10, r: 0.05 },
    evaluable: true
  },
  {
    name: 'Magnetic Field (Solenoid)',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'B = μ₀nI',
    formula: '4*Math.PI*1e-7 * n * I',
    solveFor: {
      B: '4*Math.PI*1e-7 * n * I',
      n: 'B / (4*Math.PI*1e-7 * I)',
      I: 'B / (4*Math.PI*1e-7 * n)'
    },
    description: 'Magnetic field inside a solenoid.',
    variables: {
      B: 'Magnetic field (T)',
      'μ₀': 'Permeability of free space',
      n: 'Turns per unit length (turns/m)',
      I: 'Current (A)'
    },
    difficulty: 'hard',
    example: { n: 1000, I: 2 },
    evaluable: true
  },
  {
    name: 'Faraday\'s Law of Induction',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'ε = -dΦ_B/dt',
    formula: '-dPhi / dt',
    solveFor: {
      epsilon: '-dPhi / dt',
      dPhi: '-epsilon * dt',
      dt: '-dPhi / epsilon'
    },
    description: 'Induced EMF equals rate of change of magnetic flux.',
    variables: {
      ε: 'Induced EMF (V)',
      'Φ_B': 'Magnetic flux (Wb)',
      t: 'Time (s)'
    },
    difficulty: 'hard',
    example: { dPhi: 0.01, dt: 0.1 },
    evaluable: true
  },
  {
    name: 'Magnetic Flux',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'Φ = BA·cosθ',
    formula: 'B * A * Math.cos(theta * Math.PI / 180)',
    solveFor: {
      Phi: 'B * A * Math.cos(theta * Math.PI / 180)',
      B: 'Phi / (A * Math.cos(theta * Math.PI / 180))',
      A: 'Phi / (B * Math.cos(theta * Math.PI / 180))',
      theta: 'Math.acos(Phi / (B * A)) * 180 / Math.PI'
    },
    description: 'Magnetic flux through a surface.',
    variables: {
      'Φ': 'Magnetic flux (Wb)',
      B: 'Magnetic field (T)',
      A: 'Area (m²)',
      θ: 'Angle between B and normal (degrees)'
    },
    difficulty: 'medium',
    example: { B: 0.5, A: 0.1, theta: 0 },
    evaluable: true
  },
  {
    name: 'Inductance',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'L = NΦ/I',
    formula: 'N * Phi / I',
    solveFor: {
      L: 'N * Phi / I',
      N: 'L * I / Phi',
      Phi: 'L * I / N',
      I: 'N * Phi / L'
    },
    description: 'Inductance of a coil.',
    variables: {
      L: 'Inductance (H)',
      N: 'Number of turns',
      'Φ': 'Magnetic flux (Wb)',
      I: 'Current (A)'
    },
    difficulty: 'hard',
    example: { N: 100, Phi: 1e-3, I: 2 },
    evaluable: true
  },
  {
    name: 'Energy in Inductor',
    subject: 'Physics',
    topic: 'Magnetism',
    displayFormula: 'U = ½LI²',
    formula: '0.5 * L * I * I',
    solveFor: {
      U: '0.5 * L * I * I',
      L: '2 * U / (I * I)',
      I: 'Math.sqrt(2 * U / L)'
    },
    description: 'Energy stored in an inductor.',
    variables: {
      U: 'Energy (J)',
      L: 'Inductance (H)',
      I: 'Current (A)'
    },
    difficulty: 'medium',
    example: { L: 0.1, I: 5 },
    evaluable: true
  },

  // --- WAVES & OPTICS - MEGA EXTENDED ---
  {
    name: 'Wave Speed',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'v = fλ',
    formula: 'f * lambda',
    solveFor: {
      v: 'f * lambda',
      f: 'v / lambda',
      lambda: 'v / f'
    },
    description: 'Wave speed equals frequency times wavelength.',
    variables: {
      v: 'Wave speed (m/s)',
      f: 'Frequency (Hz)',
      λ: 'Wavelength (m)'
    },
    difficulty: 'easy',
    example: { f: 440, lambda: 0.78 },
    evaluable: true
  },
  {
    name: 'Frequency (Wave)',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'f = v/λ',
    formula: 'v / lambda',
    solveFor: {
      f: 'v / lambda',
      v: 'f * lambda',
      lambda: 'v / f'
    },
    description: 'Frequency from speed and wavelength.',
    variables: {
      f: 'Frequency (Hz)',
      v: 'Wave speed (m/s)',
      λ: 'Wavelength (m)'
    },
    difficulty: 'easy',
    example: { v: 343, lambda: 0.78 },
    evaluable: true
  },
  {
    name: 'Wavelength',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'λ = v/f',
    formula: 'v / f',
    solveFor: {
      lambda: 'v / f',
      v: 'lambda * f',
      f: 'v / lambda'
    },
    description: 'Wavelength from speed and frequency.',
    variables: {
      λ: 'Wavelength (m)',
      v: 'Wave speed (m/s)',
      f: 'Frequency (Hz)'
    },
    difficulty: 'easy',
    example: { v: 343, f: 440 },
    evaluable: true
  },
  {
    name: 'Period (Wave)',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'T = 1/f',
    formula: '1 / f',
    solveFor: {
      T: '1 / f',
      f: '1 / T'
    },
    description: 'Period is the reciprocal of frequency.',
    variables: {
      T: 'Period (s)',
      f: 'Frequency (Hz)'
    },
    difficulty: 'easy',
    example: { f: 440 },
    evaluable: true
  },
  {
    name: 'Wave Number',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'k = 2π/λ',
    formula: '2 * Math.PI / lambda',
    solveFor: {
      k: '2 * Math.PI / lambda',
      lambda: '2 * Math.PI / k'
    },
    description: 'Spatial frequency of a wave.',
    variables: {
      k: 'Wave number (rad/m)',
      λ: 'Wavelength (m)'
    },
    difficulty: 'medium',
    example: { lambda: 0.78 },
    evaluable: true
  },
  {
    name: 'Angular Frequency',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'ω = 2πf',
    formula: '2 * Math.PI * f',
    solveFor: {
      omega: '2 * Math.PI * f',
      f: 'omega / (2 * Math.PI)'
    },
    description: 'Angular frequency from frequency.',
    variables: {
      ω: 'Angular frequency (rad/s)',
      f: 'Frequency (Hz)'
    },
    difficulty: 'medium',
    example: { f: 440 },
    evaluable: true
  },
  {
    name: 'Intensity (Wave)',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'I = P/A',
    formula: 'P / A',
    solveFor: {
      I: 'P / A',
      P: 'I * A',
      A: 'P / I'
    },
    description: 'Intensity is power per unit area.',
    variables: {
      I: 'Intensity (W/m²)',
      P: 'Power (W)',
      A: 'Area (m²)'
    },
    difficulty: 'medium',
    example: { P: 100, A: 4 * Math.PI },
    evaluable: true
  },
  {
    name: 'Sound Level (dB)',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'β = 10log₁₀(I/I₀)',
    formula: '10 * Math.log10(I / 1e-12)',
    solveFor: {
      beta: '10 * Math.log10(I / 1e-12)',
      I: '1e-12 * Math.pow(10, beta / 10)'
    },
    description: 'Sound intensity level in decibels.',
    variables: {
      β: 'Sound level (dB)',
      I: 'Sound intensity (W/m²)',
      'I₀': 'Reference intensity (10⁻¹² W/m²)'
    },
    difficulty: 'medium',
    example: { I: 1e-6 },
    evaluable: true
  },
  {
    name: 'Doppler Effect (Moving Observer)',
    subject: 'Physics',
    topic: 'Waves',
    displayFormula: 'f\' = f(v ± v₀)/(v ∓ v_s)',
    formula: 'f * (v + vo) / (v - vs)',
    solveFor: {
      "f'": 'f * (v + vo) / (v - vs)',
      f: "f' * (v - vs) / (v + vo)",
      v: "f * vo / (f' - f)",
      vo: "f' * (v - vs) / f - v",
      vs: 'v - f * (v + vo) / f' + '0'
    },
    description: 'Observed frequency with moving observer and source.',
    variables: {
      'f\'': 'Observed frequency (Hz)',
      f: 'Source frequency (Hz)',
      v: 'Wave speed (m/s)',
      'v₀': 'Observer velocity (m/s)',
      'v_s': 'Source velocity (m/s)'
    },
    difficulty: 'hard',
    example: { f: 440, v: 343, vo: 10, vs: 0 },
    evaluable: true
  },
  {
    name: 'Snell\'s Law',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: 'n₁sinθ₁ = n₂sinθ₂',
    formula: 'Math.asin(n1 * Math.sin(theta1 * Math.PI / 180) / n2) * 180 / Math.PI',
    solveFor: {
      theta2: 'Math.asin(n1 * Math.sin(theta1 * Math.PI / 180) / n2) * 180 / Math.PI',
      theta1: 'Math.asin(n2 * Math.sin(theta2 * Math.PI / 180) / n1) * 180 / Math.PI',
      n1: 'n2 * Math.sin(theta2 * Math.PI / 180) / Math.sin(theta1 * Math.PI / 180)',
      n2: 'n1 * Math.sin(theta1 * Math.PI / 180) / Math.sin(theta2 * Math.PI / 180)'
    },
    description: 'Refraction of light between media.',
    variables: {
      'n₁': 'Refractive index 1',
      'θ₁': 'Angle of incidence (degrees)',
      'n₂': 'Refractive index 2',
      'θ₂': 'Angle of refraction (degrees)'
    },
    difficulty: 'hard',
    example: { n1: 1, theta1: 30, n2: 1.5 },
    evaluable: true
  },
  {
    name: 'Critical Angle',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: 'θ_c = arcsin(n₂/n₁)',
    formula: 'Math.asin(n2 / n1) * 180 / Math.PI',
    solveFor: {
      theta_c: 'Math.asin(n2 / n1) * 180 / Math.PI',
      n1: 'n2 / Math.sin(theta_c * Math.PI / 180)',
      n2: 'n1 * Math.sin(theta_c * Math.PI / 180)'
    },
    description: 'Angle for total internal reflection.',
    variables: {
      'θ_c': 'Critical angle (degrees)',
      'n₁': 'Refractive index of denser medium',
      'n₂': 'Refractive index of rarer medium'
    },
    difficulty: 'hard',
    example: { n1: 1.5, n2: 1 },
    evaluable: true
  },
  {
    name: 'Lens Maker\'s Equation',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: '1/f = (n-1)(1/R₁ - 1/R₂)',
    formula: '1 / ((n-1) * (1/R1 - 1/R2))',
    solveFor: {
      f: '1 / ((n-1) * (1/R1 - 1/R2))',
      n: '1 / (f * (1/R1 - 1/R2)) + 1',
      R1: '1 / (1/f / (n-1) + 1/R2)',
      R2: '1 / (1/R1 - 1/f / (n-1))'
    },
    description: 'Focal length of a lens.',
    variables: {
      f: 'Focal length (m)',
      n: 'Refractive index',
      'R₁': 'Radius of curvature of first surface (m)',
      'R₂': 'Radius of curvature of second surface (m)'
    },
    difficulty: 'hard',
    example: { n: 1.5, R1: 0.2, R2: -0.2 },
    evaluable: true
  },
  {
    name: 'Thin Lens Equation',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: '1/f = 1/d₀ + 1/dᵢ',
    formula: '1 / (1/do + 1/di)',
    solveFor: {
      f: '1 / (1/do + 1/di)',
      do: '1 / (1/f - 1/di)',
      di: '1 / (1/f - 1/do)'
    },
    description: 'Focal length from object and image distances.',
    variables: {
      f: 'Focal length (m)',
      'd₀': 'Object distance (m)',
      'dᵢ': 'Image distance (m)'
    },
    difficulty: 'medium',
    example: { do: 0.5, di: 1 },
    evaluable: true
  },
  {
    name: 'Magnification (Lens)',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: 'm = -dᵢ/d₀',
    formula: '-di / do',
    solveFor: {
      m: '-di / do',
      di: '-m * do',
      do: '-di / m'
    },
    description: 'Lateral magnification of a lens.',
    variables: {
      m: 'Magnification',
      'dᵢ': 'Image distance (m)',
      'd₀': 'Object distance (m)'
    },
    difficulty: 'medium',
    example: { di: 1, do: 0.5 },
    evaluable: true
  },
  {
    name: 'Magnification (Mirror)',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: 'm = hᵢ/h₀ = -dᵢ/d₀',
    formula: '-di / do',
    solveFor: {
      m: '-di / do',
      hi: 'm * ho',
      ho: 'hi / m',
      di: '-m * do',
      do: '-di / m'
    },
    description: 'Magnification of a mirror.',
    variables: {
      m: 'Magnification',
      'hᵢ': 'Image height (m)',
      'h₀': 'Object height (m)',
      'dᵢ': 'Image distance (m)',
      'd₀': 'Object distance (m)'
    },
    difficulty: 'medium',
    example: { di: 1, do: 0.5 },
    evaluable: true
  },
  {
    name: 'Mirror Equation',
    subject: 'Physics',
    topic: 'Optics',
    displayFormula: '1/f = 1/d₀ + 1/dᵢ',
    formula: '1 / (1/do + 1/di)',
    solveFor: {
      f: '1 / (1/do + 1/di)',
      do: '1 / (1/f - 1/di)',
      di: '1 / (1/f - 1/do)'
    },
    description: 'Focal length of a mirror.',
    variables: {
      f: 'Focal length (m)',
      'd₀': 'Object distance (m)',
      'dᵢ': 'Image distance (m)'
    },
    difficulty: 'medium',
    example: { do: 0.5, di: 1 },
    evaluable: true
  },

  // --- QUANTUM PHYSICS ---
  {
    name: 'Photon Energy',
    subject: 'Physics',
    topic: 'Quantum Physics',
    displayFormula: 'E = hf',
    formula: '6.626e-34 * f',
    solveFor: {
      E: '6.626e-34 * f',
      f: 'E / 6.626e-34'
    },
    description: 'Energy of a photon.',
    variables: {
      E: 'Energy (J)',
      h: 'Planck\'s constant (6.626×10⁻³⁴)',
      f: 'Frequency (Hz)'
    },
    difficulty: 'medium',
    example: { f: 5e14 },
    evaluable: true
  },
  {
    name: 'Photon Wavelength',
    subject: 'Physics',
    topic: 'Quantum Physics',
    displayFormula: 'λ = hc/E',
    formula: '6.626e-34 * 3e8 / E',
    solveFor: {
      lambda: '6.626e-34 * 3e8 / E',
      E: '6.626e-34 * 3e8 / lambda'
    },
    description: 'Wavelength of a photon from energy.',
    variables: {
      λ: 'Wavelength (m)',
      h: 'Planck\'s constant',
      c: 'Speed of light (3×10⁸ m/s)',
      E: 'Energy (J)'
    },
    difficulty: 'medium',
    example: { E: 3.3e-19 },
    evaluable: true
  },
  {
    name: 'Photoelectric Effect (Max KE)',
    subject: 'Physics',
    topic: 'Quantum Physics',
    displayFormula: 'KE_max = hf - φ',
    formula: '6.626e-34 * f - phi',
    solveFor: {
      KE_max: '6.626e-34 * f - phi',
      f: '(KE_max + phi) / 6.626e-34',
      phi: '6.626e-34 * f - KE_max'
    },
    description: 'Maximum kinetic energy of ejected electron.',
    variables: {
      'KE_max': 'Max kinetic energy (J)',
      h: 'Planck\'s constant',
      f: 'Frequency (Hz)',
      φ: 'Work function (J)'
    },
    difficulty: 'hard',
    example: { f: 6e14, phi: 3e-19 },
    evaluable: true
  },
  {
    name: 'de Broglie Wavelength',
    subject: 'Physics',
    topic: 'Quantum Physics',
    displayFormula: 'λ = h/p',
    formula: '6.626e-34 / (m * v)',
    solveFor: {
      lambda: '6.626e-34 / (m * v)',
      m: '6.626e-34 / (lambda * v)',
      v: '6.626e-34 / (m * lambda)'
    },
    description: 'Wavelength of matter particles.',
    variables: {
      λ: 'de Broglie wavelength (m)',
      h: 'Planck\'s constant',
      p: 'Momentum (kg·m/s)',
      m: 'Mass (kg)',
      v: 'Velocity (m/s)'
    },
    difficulty: 'hard',
    example: { m: 9.11e-31, v: 2e6 },
    evaluable: true
  },
  {
    name: 'Heisenberg Uncertainty Principle',
    subject: 'Physics',
    topic: 'Quantum Physics',
    displayFormula: 'Δx·Δp ≥ h/(4π)',
    formula: '6.626e-34 / (4 * Math.PI)',
    solveFor: {},
    description: 'Minimum uncertainty in position and momentum.',
    variables: {
      'Δx': 'Uncertainty in position (m)',
      'Δp': 'Uncertainty in momentum (kg·m/s)',
      h: 'Planck\'s constant'
    },
    difficulty: 'hard',
    example: {},
    evaluable: false
  },
  {
    name: "Einstein's Mass-Energy Equivalence",
    subject: 'Physics',
    topic: 'Modern Physics',
    displayFormula: 'E = mc²',
    formula: 'm * 3e8 * 3e8',
    solveFor: {
      E: 'm * 3e8 * 3e8',
      m: 'E / (3e8 * 3e8)'
    },
    description: 'Energy equals mass times speed of light squared.',
    variables: {
      E: 'Energy (J)',
      m: 'Mass (kg)',
      c: 'Speed of light (3×10⁸ m/s)'
    },
    difficulty: 'easy',
    example: { m: 1 },
    evaluable: true
  },
    // ============================================================
  // CHEMISTRY - ULTIMATE EXTENDED
  // ============================================================

  // --- STOICHIOMETRY ---
  {
    name: 'Mole Concept',
    subject: 'Chemistry',
    topic: 'Mole Concept',
    displayFormula: 'n = m/M',
    formula: 'm / M',
    solveFor: {
      n: 'm / M',
      m: 'n * M',
      M: 'm / n'
    },
    description: 'Number of moles equals mass divided by molar mass.',
    variables: {
      n: 'Number of moles (mol)',
      m: 'Mass (g)',
      M: 'Molar mass (g/mol)'
    },
    difficulty: 'easy',
    example: { m: 58.44, M: 58.44 },
    evaluable: true
  },
  {
    name: 'Mole (Avogadro\'s Number)',
    subject: 'Chemistry',
    topic: 'Mole Concept',
    displayFormula: 'n = N/N_A',
    formula: 'N / 6.022e23',
    solveFor: {
      n: 'N / 6.022e23',
      N: 'n * 6.022e23'
    },
    description: 'Number of moles from number of particles.',
    variables: {
      n: 'Number of moles (mol)',
      N: 'Number of particles',
      'N_A': 'Avogadro\'s number (6.022×10²³)'
    },
    difficulty: 'easy',
    example: { N: 1.2044e24 },
    evaluable: true
  },
  {
    name: 'Percent Composition',
    subject: 'Chemistry',
    topic: 'Mole Concept',
    displayFormula: '% = (mass_element/mass_compound) × 100',
    formula: '(mass_element / mass_compound) * 100',
    solveFor: {
      percent: '(mass_element / mass_compound) * 100',
      mass_element: 'percent * mass_compound / 100',
      mass_compound: 'mass_element * 100 / percent'
    },
    description: 'Percentage of element in a compound.',
    variables: {
      '%': 'Percent composition',
      'mass_element': 'Mass of element (g)',
      'mass_compound': 'Mass of compound (g)'
    },
    difficulty: 'easy',
    example: { mass_element: 32, mass_compound: 80 },
    evaluable: true
  },
  {
    name: 'Empirical Formula',
    subject: 'Chemistry',
    topic: 'Mole Concept',
    displayFormula: 'moles = mass/molar mass',
    formula: 'mass / molar_mass',
    solveFor: {
      moles: 'mass / molar_mass',
      mass: 'moles * molar_mass',
      molar_mass: 'mass / moles'
    },
    description: 'Moles from mass for empirical formula determination.',
    variables: {
      moles: 'Number of moles',
      mass: 'Mass (g)',
      molar_mass: 'Molar mass (g/mol)'
    },
    difficulty: 'medium',
    example: { mass: 12, molar_mass: 12 },
    evaluable: true
  },

  // --- GAS LAWS ---
  {
    name: 'Ideal Gas Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'PV = nRT',
    formula: 'n * 0.0821 * T / P',
    solveFor: {
      P: 'n * 0.0821 * T / V',
      V: 'n * 0.0821 * T / P',
      n: 'P * V / (0.0821 * T)',
      T: 'P * V / (n * 0.0821)'
    },
    description: 'Volume of an ideal gas (L).',
    variables: {
      P: 'Pressure (atm)',
      V: 'Volume (L)',
      n: 'Number of moles (mol)',
      R: 'Gas constant (0.0821 L·atm/mol·K)',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { n: 1, T: 298, P: 1 },
    evaluable: true
  },
  {
    name: 'Boyle\'s Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'P₁V₁ = P₂V₂',
    formula: 'P1 * V1 / P2',
    solveFor: {
      P1: 'P2 * V2 / V1',
      V1: 'P2 * V2 / P1',
      P2: 'P1 * V1 / V2',
      V2: 'P1 * V1 / P2'
    },
    description: 'Pressure-volume relationship at constant temperature.',
    variables: {
      'P₁': 'Initial pressure',
      'V₁': 'Initial volume',
      'P₂': 'Final pressure',
      'V₂': 'Final volume'
    },
    difficulty: 'easy',
    example: { P1: 1, V1: 10, P2: 2 },
    evaluable: true
  },
  {
    name: 'Charles\'s Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'V₁/T₁ = V₂/T₂',
    formula: 'V1 * T2 / T1',
    solveFor: {
      V1: 'V2 * T1 / T2',
      T1: 'V1 * T2 / V2',
      V2: 'V1 * T2 / T1',
      T2: 'V2 * T1 / V1'
    },
    description: 'Volume-temperature relationship at constant pressure.',
    variables: {
      'V₁': 'Initial volume',
      'T₁': 'Initial temperature (K)',
      'V₂': 'Final volume',
      'T₂': 'Final temperature (K)'
    },
    difficulty: 'easy',
    example: { V1: 10, T1: 300, T2: 400 },
    evaluable: true
  },
  {
    name: 'Gay-Lussac\'s Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'P₁/T₁ = P₂/T₂',
    formula: 'P1 * T2 / T1',
    solveFor: {
      P1: 'P2 * T1 / T2',
      T1: 'P1 * T2 / P2',
      P2: 'P1 * T2 / T1',
      T2: 'P2 * T1 / P1'
    },
    description: 'Pressure-temperature relationship at constant volume.',
    variables: {
      'P₁': 'Initial pressure',
      'T₁': 'Initial temperature (K)',
      'P₂': 'Final pressure',
      'T₂': 'Final temperature (K)'
    },
    difficulty: 'easy',
    example: { P1: 1, T1: 300, T2: 400 },
    evaluable: true
  },
  {
    name: 'Avogadro\'s Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'V₁/n₁ = V₂/n₂',
    formula: 'V1 * n2 / n1',
    solveFor: {
      V1: 'V2 * n1 / n2',
      n1: 'V1 * n2 / V2',
      V2: 'V1 * n2 / n1',
      n2: 'V2 * n1 / V1'
    },
    description: 'Volume-mole relationship at constant temperature and pressure.',
    variables: {
      'V₁': 'Initial volume',
      'n₁': 'Initial moles',
      'V₂': 'Final volume',
      'n₂': 'Final moles'
    },
    difficulty: 'easy',
    example: { V1: 10, n1: 2, n2: 4 },
    evaluable: true
  },
  {
    name: 'Combined Gas Law',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'P₁V₁/T₁ = P₂V₂/T₂',
    formula: 'P1 * V1 * T2 / (T1 * P2)',
    solveFor: {
      P1: 'P2 * V2 * T1 / (T2 * V1)',
      V1: 'P2 * V2 * T1 / (T2 * P1)',
      T1: 'P1 * V1 * T2 / (P2 * V2)',
      P2: 'P1 * V1 * T2 / (T1 * V2)',
      V2: 'P1 * V1 * T2 / (T1 * P2)',
      T2: 'P2 * V2 * T1 / (P1 * V1)'
    },
    description: 'Combines Boyle\'s, Charles\'s, and Gay-Lussac\'s laws.',
    variables: {
      'P₁': 'Initial pressure',
      'V₁': 'Initial volume',
      'T₁': 'Initial temperature (K)',
      'P₂': 'Final pressure',
      'V₂': 'Final volume',
      'T₂': 'Final temperature (K)'
    },
    difficulty: 'medium',
    example: { P1: 1, V1: 10, T1: 300, P2: 2, T2: 400 },
    evaluable: true
  },
  {
    name: 'Density of Gas (Ideal)',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'ρ = PM/RT',
    formula: 'P * M / (0.0821 * T)',
    solveFor: {
      rho: 'P * M / (0.0821 * T)',
      P: 'rho * 0.0821 * T / M',
      M: 'rho * 0.0821 * T / P',
      T: 'P * M / (0.0821 * rho)'
    },
    description: 'Density of an ideal gas.',
    variables: {
      ρ: 'Density (g/L)',
      P: 'Pressure (atm)',
      M: 'Molar mass (g/mol)',
      R: 'Gas constant',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { P: 1, M: 28.97, T: 298 },
    evaluable: true
  },
  {
    name: 'Dalton\'s Law (Partial Pressure)',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'P_total = P₁ + P₂ + P₃',
    formula: 'P1 + P2 + P3',
    solveFor: {
      P_total: 'P1 + P2 + P3',
      P1: 'P_total - P2 - P3',
      P2: 'P_total - P1 - P3',
      P3: 'P_total - P1 - P2'
    },
    description: 'Total pressure is sum of partial pressures.',
    variables: {
      'P_total': 'Total pressure (atm)',
      'P₁': 'Partial pressure 1 (atm)',
      'P₂': 'Partial pressure 2 (atm)',
      'P₃': 'Partial pressure 3 (atm)'
    },
    difficulty: 'easy',
    example: { P1: 0.5, P2: 0.3, P3: 0.2 },
    evaluable: true
  },
  {
    name: 'Graham\'s Law (Effusion)',
    subject: 'Chemistry',
    topic: 'Gas Laws',
    displayFormula: 'r₁/r₂ = √(M₂/M₁)',
    formula: 'Math.sqrt(M2 / M1)',
    solveFor: {
      r1_over_r2: 'Math.sqrt(M2 / M1)',
      M1: 'M2 / Math.pow(r1_over_r2, 2)',
      M2: 'M1 * Math.pow(r1_over_r2, 2)'
    },
    description: 'Rate of effusion proportional to inverse square root of molar mass.',
    variables: {
      'r₁': 'Rate of effusion 1',
      'r₂': 'Rate of effusion 2',
      'M₁': 'Molar mass 1 (g/mol)',
      'M₂': 'Molar mass 2 (g/mol)'
    },
    difficulty: 'hard',
    example: { M1: 2, M2: 32 },
    evaluable: true
  },

  // --- SOLUTIONS ---
  {
    name: 'Concentration (Molarity)',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'C = n/V',
    formula: 'n / V',
    solveFor: {
      C: 'n / V',
      n: 'C * V',
      V: 'n / C'
    },
    description: 'Molarity is moles of solute divided by volume of solution.',
    variables: {
      C: 'Concentration (M)',
      n: 'Moles of solute (mol)',
      V: 'Volume of solution (L)'
    },
    difficulty: 'medium',
    example: { n: 0.5, V: 2 },
    evaluable: true
  },
  {
    name: 'Dilution Formula',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'C₁V₁ = C₂V₂',
    formula: '(C1 * V1) / V2',
    solveFor: {
      C1: 'C2 * V2 / V1',
      V1: 'C2 * V2 / C1',
      C2: 'C1 * V1 / V2',
      V2: 'C1 * V1 / C2'
    },
    description: 'Final concentration after dilution.',
    variables: {
      'C₁': 'Initial concentration (M)',
      'V₁': 'Initial volume (L)',
      'C₂': 'Final concentration (M)',
      'V₂': 'Final volume (L)'
    },
    difficulty: 'easy',
    example: { C1: 6, V1: 0.5, V2: 1 },
    evaluable: true
  },
  {
    name: 'Molality',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'm = moles_solute/kg_solvent',
    formula: 'moles_solute / kg_solvent',
    solveFor: {
      m: 'moles_solute / kg_solvent',
      moles_solute: 'm * kg_solvent',
      kg_solvent: 'moles_solute / m'
    },
    description: 'Molality is moles of solute per kilogram of solvent.',
    variables: {
      m: 'Molality (mol/kg)',
      moles_solute: 'Moles of solute (mol)',
      kg_solvent: 'Mass of solvent (kg)'
    },
    difficulty: 'medium',
    example: { moles_solute: 0.5, kg_solvent: 2 },
    evaluable: true
  },
  {
    name: 'Mole Fraction',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'X_A = n_A/(n_A + n_B)',
    formula: 'nA / (nA + nB)',
    solveFor: {
      X_A: 'nA / (nA + nB)',
      nA: 'X_A * nB / (1 - X_A)',
      nB: 'nA * (1 - X_A) / X_A'
    },
    description: 'Mole fraction of component A.',
    variables: {
      'X_A': 'Mole fraction of A',
      'n_A': 'Moles of A',
      'n_B': 'Moles of B'
    },
    difficulty: 'easy',
    example: { nA: 2, nB: 3 },
    evaluable: true
  },
  {
    name: 'Raoult\'s Law',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'P_A = X_A·P°_A',
    formula: 'X_A * P0_A',
    solveFor: {
      P_A: 'X_A * P0_A',
      X_A: 'P_A / P0_A',
      P0_A: 'P_A / X_A'
    },
    description: 'Vapor pressure of component in solution.',
    variables: {
      'P_A': 'Vapor pressure of A',
      'X_A': 'Mole fraction of A',
      'P°_A': 'Vapor pressure of pure A'
    },
    difficulty: 'hard',
    example: { X_A: 0.5, P0_A: 100 },
    evaluable: true
  },
  {
    name: 'Boiling Point Elevation',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'ΔT_b = i·K_b·m',
    formula: 'i * Kb * m',
    solveFor: {
      dTb: 'i * Kb * m',
      i: 'dTb / (Kb * m)',
      Kb: 'dTb / (i * m)',
      m: 'dTb / (i * Kb)'
    },
    description: 'Change in boiling point from solute.',
    variables: {
      'ΔT_b': 'Boiling point elevation (K)',
      i: 'Van\'t Hoff factor',
      'K_b': 'Ebullioscopic constant (K·kg/mol)',
      m: 'Molality (mol/kg)'
    },
    difficulty: 'hard',
    example: { i: 2, Kb: 0.512, m: 1 },
    evaluable: true
  },
  {
    name: 'Freezing Point Depression',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'ΔT_f = i·K_f·m',
    formula: 'i * Kf * m',
    solveFor: {
      dTf: 'i * Kf * m',
      i: 'dTf / (Kf * m)',
      Kf: 'dTf / (i * m)',
      m: 'dTf / (i * Kf)'
    },
    description: 'Change in freezing point from solute.',
    variables: {
      'ΔT_f': 'Freezing point depression (K)',
      i: 'Van\'t Hoff factor',
      'K_f': 'Cryoscopic constant (K·kg/mol)',
      m: 'Molality (mol/kg)'
    },
    difficulty: 'hard',
    example: { i: 2, Kf: 1.86, m: 1 },
    evaluable: true
  },
  {
    name: 'Osmotic Pressure',
    subject: 'Chemistry',
    topic: 'Solutions',
    displayFormula: 'π = iCRT',
    formula: 'i * C * 0.0821 * T',
    solveFor: {
      pi: 'i * C * 0.0821 * T',
      i: 'pi / (C * 0.0821 * T)',
      C: 'pi / (i * 0.0821 * T)',
      T: 'pi / (i * C * 0.0821)'
    },
    description: 'Osmotic pressure of a solution.',
    variables: {
      π: 'Osmotic pressure (atm)',
      i: 'Van\'t Hoff factor',
      C: 'Molarity (M)',
      R: 'Gas constant',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { i: 1, C: 0.5, T: 298 },
    evaluable: true
  },

  // --- ACIDS & BASES ---
  {
    name: 'pH',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'pH = -log[H₃O⁺]',
    formula: '-Math.log10(H)',
    solveFor: {
      pH: '-Math.log10(H)',
      H: 'Math.pow(10, -pH)'
    },
    description: 'pH from hydronium ion concentration.',
    variables: {
      pH: 'pH value',
      'H₃O⁺': 'Hydronium ion concentration (M)'
    },
    difficulty: 'easy',
    example: { H: 1e-3 },
    evaluable: true
  },
  {
    name: 'pOH',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'pOH = -log[OH⁻]',
    formula: '-Math.log10(OH)',
    solveFor: {
      pOH: '-Math.log10(OH)',
      OH: 'Math.pow(10, -pOH)'
    },
    description: 'pOH from hydroxide ion concentration.',
    variables: {
      pOH: 'pOH value',
      'OH⁻': 'Hydroxide ion concentration (M)'
    },
    difficulty: 'easy',
    example: { OH: 1e-3 },
    evaluable: true
  },
  {
    name: 'pH + pOH = 14',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'pH + pOH = 14',
    formula: '14 - pOH',
    solveFor: {
      pH: '14 - pOH',
      pOH: '14 - pH'
    },
    description: 'Relationship between pH and pOH at 25°C.',
    variables: {
      pH: 'pH value',
      pOH: 'pOH value'
    },
    difficulty: 'easy',
    example: { pOH: 11 },
    evaluable: true
  },
  {
    name: 'Hydronium from pH',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: '[H₃O⁺] = 10⁻ᵖᴴ',
    formula: 'Math.pow(10, -pH)',
    solveFor: {
      H: 'Math.pow(10, -pH)',
      pH: '-Math.log10(H)'
    },
    description: 'Hydronium concentration from pH.',
    variables: {
      'H₃O⁺': 'Hydronium concentration (M)',
      pH: 'pH value'
    },
    difficulty: 'easy',
    example: { pH: 3 },
    evaluable: true
  },
  {
    name: 'Hydroxide from pOH',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: '[OH⁻] = 10⁻ᵖᴼᴴ',
    formula: 'Math.pow(10, -pOH)',
    solveFor: {
      OH: 'Math.pow(10, -pOH)',
      pOH: '-Math.log10(OH)'
    },
    description: 'Hydroxide concentration from pOH.',
    variables: {
      'OH⁻': 'Hydroxide concentration (M)',
      pOH: 'pOH value'
    },
    difficulty: 'easy',
    example: { pOH: 11 },
    evaluable: true
  },
  {
    name: 'Acid Dissociation Constant (Ka)',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'K_a = [H₃O⁺][A⁻]/[HA]',
    formula: '(H * A_minus) / HA',
    solveFor: {
      Ka: '(H * A_minus) / HA',
      H: 'Ka * HA / A_minus',
      A_minus: 'Ka * HA / H',
      HA: 'H * A_minus / Ka'
    },
    description: 'Equilibrium constant for acid dissociation.',
    variables: {
      'K_a': 'Acid dissociation constant',
      'H₃O⁺': 'Hydronium concentration (M)',
      'A⁻': 'Conjugate base concentration (M)',
      'HA': 'Undissociated acid concentration (M)'
    },
    difficulty: 'hard',
    example: { H: 1e-3, A_minus: 1e-3, HA: 0.1 },
    evaluable: true
  },
  {
    name: 'pKa',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'pKa = -log(Ka)',
    formula: '-Math.log10(Ka)',
    solveFor: {
      pKa: '-Math.log10(Ka)',
      Ka: 'Math.pow(10, -pKa)'
    },
    description: 'pKa from acid dissociation constant.',
    variables: {
      pKa: 'pKa value',
      'K_a': 'Acid dissociation constant'
    },
    difficulty: 'easy',
    example: { Ka: 1.8e-5 },
    evaluable: true
  },
  {
    name: 'Henderson-Hasselbalch Equation',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'pH = pKa + log([A⁻]/[HA])',
    formula: 'pKa + Math.log10(A_minus / HA)',
    solveFor: {
      pH: 'pKa + Math.log10(A_minus / HA)',
      pKa: 'pH - Math.log10(A_minus / HA)',
      A_minus: 'HA * Math.pow(10, pH - pKa)',
      HA: 'A_minus / Math.pow(10, pH - pKa)'
    },
    description: 'pH of a buffer solution.',
    variables: {
      pH: 'pH value',
      pKa: 'pKa value',
      'A⁻': 'Concentration of conjugate base',
      'HA': 'Concentration of weak acid'
    },
    difficulty: 'hard',
    example: { pKa: 4.74, A_minus: 0.1, HA: 0.1 },
    evaluable: true
  },
  {
    name: 'Base Dissociation Constant (Kb)',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'K_b = [BH⁺][OH⁻]/[B]',
    formula: '(BH * OH) / B',
    solveFor: {
      Kb: '(BH * OH) / B',
      BH: 'Kb * B / OH',
      OH: 'Kb * B / BH',
      B: 'BH * OH / Kb'
    },
    description: 'Equilibrium constant for base dissociation.',
    variables: {
      'K_b': 'Base dissociation constant',
      'BH⁺': 'Conjugate acid concentration (M)',
      'OH⁻': 'Hydroxide concentration (M)',
      'B': 'Undissociated base concentration (M)'
    },
    difficulty: 'hard',
    example: { BH: 1e-3, OH: 1e-3, B: 0.1 },
    evaluable: true
  },
  {
    name: 'Ka × Kb = Kw',
    subject: 'Chemistry',
    topic: 'Acids & Bases',
    displayFormula: 'K_a × K_b = K_w',
    formula: '1e-14 / Ka',
    solveFor: {
      Kb: '1e-14 / Ka',
      Ka: '1e-14 / Kb'
    },
    description: 'Relationship between acid and base constants.',
    variables: {
      'K_a': 'Acid dissociation constant',
      'K_b': 'Base dissociation constant',
      'K_w': 'Ion product of water (1.0×10⁻¹⁴)'
    },
    difficulty: 'hard',
    example: { Ka: 1.8e-5 },
    evaluable: true
  },

  // --- THERMOCHEMISTRY ---
  {
    name: 'Enthalpy Change',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'ΔH = H_products - H_reactants',
    formula: 'H_products - H_reactants',
    solveFor: {
      dH: 'H_products - H_reactants',
      H_products: 'dH + H_reactants',
      H_reactants: 'H_products - dH'
    },
    description: 'Change in enthalpy for a reaction.',
    variables: {
      'ΔH': 'Enthalpy change (kJ)',
      'H_products': 'Enthalpy of products (kJ)',
      'H_reactants': 'Enthalpy of reactants (kJ)'
    },
    difficulty: 'medium',
    example: { H_products: 50, H_reactants: 100 },
    evaluable: true
  },
  {
    name: 'Heat of Reaction (q)',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'q = mcΔT',
    formula: 'm * c * dT',
    solveFor: {
      q: 'm * c * dT',
      m: 'q / (c * dT)',
      c: 'q / (m * dT)',
      dT: 'q / (m * c)'
    },
    description: 'Heat absorbed or released in a reaction.',
    variables: {
      q: 'Heat (J)',
      m: 'Mass (g)',
      c: 'Specific heat capacity (J/g·K)',
      'ΔT': 'Temperature change (K)'
    },
    difficulty: 'medium',
    example: { m: 100, c: 4.18, dT: 10 },
    evaluable: true
  },
  {
    name: 'Gibbs Free Energy',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'ΔG = ΔH - TΔS',
    formula: 'dH - T * dS',
    solveFor: {
      dG: 'dH - T * dS',
      dH: 'dG + T * dS',
      T: '(dH - dG) / dS',
      dS: '(dH - dG) / T'
    },
    description: 'Gibbs free energy equals enthalpy change minus temperature times entropy change.',
    variables: {
      'ΔG': 'Change in Gibbs free energy (kJ)',
      'ΔH': 'Change in enthalpy (kJ)',
      T: 'Temperature (K)',
      'ΔS': 'Change in entropy (kJ/K)'
    },
    difficulty: 'hard',
    example: { dH: -100, T: 298, dS: 0.05 },
    evaluable: true
  },
  {
    name: 'Gibbs Free Energy (Standard)',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'ΔG° = -RTlnK',
    formula: '-8.314 * T * Math.log(K)',
    solveFor: {
      dG0: '-8.314 * T * Math.log(K)',
      T: '-dG0 / (8.314 * Math.log(K))',
      K: 'Math.exp(-dG0 / (8.314 * T))'
    },
    description: 'Standard Gibbs free energy from equilibrium constant.',
    variables: {
      'ΔG°': 'Standard Gibbs free energy (J/mol)',
      R: 'Gas constant (8.314 J/mol·K)',
      T: 'Temperature (K)',
      K: 'Equilibrium constant'
    },
    difficulty: 'hard',
    example: { T: 298, K: 1e-5 },
    evaluable: true
  },
  {
    name: 'Entropy Change (Reaction)',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'ΔS = ΣS_products - ΣS_reactants',
    formula: 'S_products - S_reactants',
    solveFor: {
      dS: 'S_products - S_reactants',
      S_products: 'dS + S_reactants',
      S_reactants: 'S_products - dS'
    },
    description: 'Change in entropy for a reaction.',
    variables: {
      'ΔS': 'Entropy change (J/K)',
      'S_products': 'Entropy of products (J/K)',
      'S_reactants': 'Entropy of reactants (J/K)'
    },
    difficulty: 'hard',
    example: { S_products: 300, S_reactants: 200 },
    evaluable: true
  },
  {
    name: 'Hess\'s Law (Enthalpy)',
    subject: 'Chemistry',
    topic: 'Thermochemistry',
    displayFormula: 'ΔH = ΣΔH_f(products) - ΣΔH_f(reactants)',
    formula: 'sum_Hf_products - sum_Hf_reactants',
    solveFor: {
      dH: 'sum_Hf_products - sum_Hf_reactants',
      sum_Hf_products: 'dH + sum_Hf_reactants',
      sum_Hf_reactants: 'sum_Hf_products - dH'
    },
    description: 'Enthalpy change from formation enthalpies.',
    variables: {
      'ΔH': 'Reaction enthalpy (kJ)',
      'ΔH_f': 'Standard formation enthalpy (kJ/mol)',
      products: 'Product side',
      reactants: 'Reactant side'
    },
    difficulty: 'hard',
    example: { sum_Hf_products: -200, sum_Hf_reactants: -100 },
    evaluable: true
  },

  // --- KINETICS ---
  {
    name: 'Rate Law (General)',
    subject: 'Chemistry',
    topic: 'Kinetics',
    displayFormula: 'rate = k[A]^m[B]^n',
    formula: 'k * Math.pow(A, m) * Math.pow(B, n)',
    solveFor: {
      rate: 'k * Math.pow(A, m) * Math.pow(B, n)',
      k: 'rate / (Math.pow(A, m) * Math.pow(B, n))',
      A: 'Math.pow(rate / (k * Math.pow(B, n)), 1/m)',
      B: 'Math.pow(rate / (k * Math.pow(A, m)), 1/n)'
    },
    description: 'Rate of reaction from concentrations.',
    variables: {
      rate: 'Reaction rate (M/s)',
      k: 'Rate constant',
      A: 'Concentration of A (M)',
      B: 'Concentration of B (M)',
      m: 'Order with respect to A',
      n: 'Order with respect to B'
    },
    difficulty: 'hard',
    example: { k: 0.1, A: 0.5, B: 0.3, m: 2, n: 1 },
    evaluable: true
  },
  {
    name: 'Arrhenius Equation',
    subject: 'Chemistry',
    topic: 'Kinetics',
    displayFormula: 'k = Ae^{-E_a/RT}',
    formula: 'A * Math.exp(-Ea / (8.314 * T))',
    solveFor: {
      k: 'A * Math.exp(-Ea / (8.314 * T))',
      A: 'k / Math.exp(-Ea / (8.314 * T))',
      Ea: '-8.314 * T * Math.log(k / A)',
      T: '-Ea / (8.314 * Math.log(k / A))'
    },
    description: 'Temperature dependence of rate constant.',
    variables: {
      k: 'Rate constant',
      A: 'Frequency factor',
      'E_a': 'Activation energy (J/mol)',
      R: 'Gas constant (8.314 J/mol·K)',
      T: 'Temperature (K)'
    },
    difficulty: 'hard',
    example: { A: 1e12, Ea: 50000, T: 298 },
    evaluable: true
  },
  {
    name: 'Half-life (First Order)',
    subject: 'Chemistry',
    topic: 'Kinetics',
    displayFormula: 't₁/₂ = ln(2)/k',
    formula: 'Math.log(2) / k',
    solveFor: {
      t_half: 'Math.log(2) / k',
      k: 'Math.log(2) / t_half'
    },
    description: 'Half-life of a first-order reaction.',
    variables: {
      't₁/₂': 'Half-life (s)',
      k: 'Rate constant (s⁻¹)'
    },
    difficulty: 'medium',
    example: { k: 0.1 },
    evaluable: true
  },
  {
    name: 'Half-life (Second Order)',
    subject: 'Chemistry',
    topic: 'Kinetics',
    displayFormula: 't₁/₂ = 1/(k[A]₀)',
    formula: '1 / (k * A0)',
    solveFor: {
      t_half: '1 / (k * A0)',
      k: '1 / (t_half * A0)',
      A0: '1 / (k * t_half)'
    },
    description: 'Half-life of a second-order reaction.',
    variables: {
      't₁/₂': 'Half-life (s)',
      k: 'Rate constant (M⁻¹s⁻¹)',
      'A₀': 'Initial concentration (M)'
    },
    difficulty: 'hard',
    example: { k: 0.1, A0: 0.5 },
    evaluable: true
  },

  // --- EQUILIBRIUM ---
  {
    name: 'Equilibrium Constant (Kc)',
    subject: 'Chemistry',
    topic: 'Equilibrium',
    displayFormula: 'K_c = [C]^c[D]^d/[A]^a[B]^b',
    formula: 'Math.pow(C, c) * Math.pow(D, d) / (Math.pow(A, a) * Math.pow(B, b))',
    solveFor: {
      Kc: 'Math.pow(C, c) * Math.pow(D, d) / (Math.pow(A, a) * Math.pow(B, b))',
      A: 'Math.pow(Math.pow(C, c) * Math.pow(D, d) / (Kc * Math.pow(B, b)), 1/a)',
      B: 'Math.pow(Math.pow(C, c) * Math.pow(D, d) / (Kc * Math.pow(A, a)), 1/b)',
      C: 'Math.pow(Kc * Math.pow(A, a) * Math.pow(B, b) / Math.pow(D, d), 1/c)',
      D: 'Math.pow(Kc * Math.pow(A, a) * Math.pow(B, b) / Math.pow(C, c), 1/d)'
    },
    description: 'Equilibrium constant for aA + bB ⇌ cC + dD.',
    variables: {
      'K_c': 'Equilibrium constant',
      A: 'Concentration of A (M)',
      B: 'Concentration of B (M)',
      C: 'Concentration of C (M)',
      D: 'Concentration of D (M)',
      a: 'Stoichiometric coefficient of A',
      b: 'Stoichiometric coefficient of B',
      c: 'Stoichiometric coefficient of C',
      d: 'Stoichiometric coefficient of D'
    },
    difficulty: 'hard',
    example: { A: 0.1, B: 0.2, C: 0.3, D: 0.4, a: 1, b: 1, c: 1, d: 1 },
    evaluable: true
  },
  {
    name: 'Kp from Kc',
    subject: 'Chemistry',
    topic: 'Equilibrium',
    displayFormula: 'K_p = K_c(RT)^{Δn}',
    formula: 'Kc * Math.pow(0.0821 * T, dn)',
    solveFor: {
      Kp: 'Kc * Math.pow(0.0821 * T, dn)',
      Kc: 'Kp / Math.pow(0.0821 * T, dn)',
      T: 'Math.pow(Kp / Kc, 1/dn) / 0.0821',
      dn: 'Math.log(Kp / Kc) / Math.log(0.0821 * T)'
    },
    description: 'Relationship between Kp and Kc.',
    variables: {
      'K_p': 'Equilibrium constant (pressure)',
      'K_c': 'Equilibrium constant (concentration)',
      R: 'Gas constant',
      T: 'Temperature (K)',
      'Δn': 'Change in moles of gas'
    },
    difficulty: 'hard',
    example: { Kc: 1, T: 298, dn: 1 },
    evaluable: true
  },
  {
    name: 'Reaction Quotient (Q)',
    subject: 'Chemistry',
    topic: 'Equilibrium',
    displayFormula: 'Q = [C]^c[D]^d/[A]^a[B]^b',
    formula: 'Math.pow(C, c) * Math.pow(D, d) / (Math.pow(A, a) * Math.pow(B, b))',
    solveFor: {
      Q: 'Math.pow(C, c) * Math.pow(D, d) / (Math.pow(A, a) * Math.pow(B, b))',
      A: 'Math.pow(Math.pow(C, c) * Math.pow(D, d) / (Q * Math.pow(B, b)), 1/a)',
      B: 'Math.pow(Math.pow(C, c) * Math.pow(D, d) / (Q * Math.pow(A, a)), 1/b)',
      C: 'Math.pow(Q * Math.pow(A, a) * Math.pow(B, b) / Math.pow(D, d), 1/c)',
      D: 'Math.pow(Q * Math.pow(A, a) * Math.pow(B, b) / Math.pow(C, c), 1/d)'
    },
    description: 'Reaction quotient to predict direction.',
    variables: {
      Q: 'Reaction quotient',
      A: 'Concentration of A (M)',
      B: 'Concentration of B (M)',
      C: 'Concentration of C (M)',
      D: 'Concentration of D (M)',
      a: 'Stoichiometric coefficient of A',
      b: 'Stoichiometric coefficient of B',
      c: 'Stoichiometric coefficient of C',
      d: 'Stoichiometric coefficient of D'
    },
    difficulty: 'hard',
    example: { A: 0.1, B: 0.2, C: 0.3, D: 0.4, a: 1, b: 1, c: 1, d: 1 },
    evaluable: true
  },

  // ============================================================
  // BIOLOGY - ULTIMATE EXTENDED
  // ============================================================

  // --- GENETICS ---
  {
    name: 'Hardy-Weinberg Equilibrium (Alleles)',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'p + q = 1',
    formula: 'p + q',
    solveFor: {
      p: '1 - q',
      q: '1 - p'
    },
    description: 'Sum of allele frequencies equals 1.',
    variables: {
      p: 'Frequency of dominant allele',
      q: 'Frequency of recessive allele'
    },
    difficulty: 'easy',
    example: { p: 0.7, q: 0.3 },
    evaluable: true
  },
  {
    name: 'Hardy-Weinberg Equilibrium (Genotypes)',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'p² + 2pq + q² = 1',
    formula: 'p*p + 2*p*q + q*q',
    solveFor: {
      p: '1 - q',
      q: '1 - p'
    },
    description: 'Genotype frequencies in a population.',
    variables: {
      p: 'Frequency of dominant allele',
      q: 'Frequency of recessive allele'
    },
    difficulty: 'medium',
    example: { p: 0.7, q: 0.3 },
    evaluable: true
  },
  {
    name: 'Expected Frequency (Homozygous Dominant)',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'f(AA) = p²',
    formula: 'p * p',
    solveFor: {
      fAA: 'p * p',
      p: 'Math.sqrt(fAA)'
    },
    description: 'Frequency of homozygous dominant genotype.',
    variables: {
      'f(AA)': 'Frequency of AA genotype',
      p: 'Frequency of dominant allele'
    },
    difficulty: 'easy',
    example: { p: 0.7 },
    evaluable: true
  },
  {
    name: 'Expected Frequency (Heterozygous)',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'f(Aa) = 2pq',
    formula: '2 * p * q',
    solveFor: {
      fAa: '2 * p * q',
      p: 'fAa / (2 * q)',
      q: 'fAa / (2 * p)'
    },
    description: 'Frequency of heterozygous genotype.',
    variables: {
      'f(Aa)': 'Frequency of Aa genotype',
      p: 'Frequency of dominant allele',
      q: 'Frequency of recessive allele'
    },
    difficulty: 'easy',
    example: { p: 0.7, q: 0.3 },
    evaluable: true
  },
  {
    name: 'Expected Frequency (Homozygous Recessive)',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'f(aa) = q²',
    formula: 'q * q',
    solveFor: {
      faa: 'q * q',
      q: 'Math.sqrt(faa)'
    },
    description: 'Frequency of homozygous recessive genotype.',
    variables: {
      'f(aa)': 'Frequency of aa genotype',
      q: 'Frequency of recessive allele'
    },
    difficulty: 'easy',
    example: { q: 0.3 },
    evaluable: true
  },
  {
    name: 'Coefficient of Inbreeding',
    subject: 'Biology',
    topic: 'Genetics',
    displayFormula: 'F = 1 - (H_observed/H_expected)',
    formula: '1 - (H_obs / H_exp)',
    solveFor: {
      F: '1 - (H_obs / H_exp)',
      H_obs: '(1 - F) * H_exp',
      H_exp: 'H_obs / (1 - F)'
    },
    description: 'Measure of inbreeding in a population.',
    variables: {
      F: 'Coefficient of inbreeding',
      'H_obs': 'Observed heterozygosity',
      'H_exp': 'Expected heterozygosity (2pq)'
    },
    difficulty: 'hard',
    example: { H_obs: 0.3, H_exp: 0.42 },
    evaluable: true
  },

  // --- POPULATION ECOLOGY ---
  {
    name: 'Population Growth (Exponential)',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'N(t) = N₀e^{rt}',
    formula: 'N0 * Math.exp(r * t)',
    solveFor: {
      Nt: 'N0 * Math.exp(r * t)',
      N0: 'Nt / Math.exp(r * t)',
      r: 'Math.log(Nt / N0) / t',
      t: 'Math.log(Nt / N0) / r'
    },
    description: 'Exponential population growth.',
    variables: {
      'N(t)': 'Population at time t',
      'N₀': 'Initial population',
      r: 'Per capita growth rate',
      t: 'Time'
    },
    difficulty: 'medium',
    example: { N0: 100, r: 0.1, t: 10 },
    evaluable: true
  },
  {
    name: 'Population Growth (Logistic)',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'N(t) = K/(1 + ((K-N₀)/N₀)e^{-rt})',
    formula: 'K / (1 + ((K-N0)/N0) * Math.exp(-r * t))',
    solveFor: {
      Nt: 'K / (1 + ((K-N0)/N0) * Math.exp(-r * t))',
      N0: 'K / (1 + (K/Nt - 1) * Math.exp(r * t))',
      K: 'Nt * (1 - Math.exp(-r * t)) / (1 - Nt / N0 * Math.exp(-r * t))',
      r: '-Math.log((K/Nt - 1) / (K/N0 - 1)) / t',
      t: '-Math.log((K/Nt - 1) / (K/N0 - 1)) / r'
    },
    description: 'Logistic population growth with carrying capacity.',
    variables: {
      'N(t)': 'Population at time t',
      K: 'Carrying capacity',
      'N₀': 'Initial population',
      r: 'Per capita growth rate',
      t: 'Time'
    },
    difficulty: 'hard',
    example: { N0: 100, K: 1000, r: 0.1, t: 20 },
    evaluable: true
  },
  {
    name: 'Species Richness',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'S = number of species',
    formula: 'S',
    solveFor: {},
    description: 'Number of different species in a community.',
    variables: {
      S: 'Species richness',
      species: 'List of species'
    },
    difficulty: 'easy',
    example: { S: 25 },
    evaluable: false
  },
  {
    name: 'Shannon Diversity Index',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'H = -Σ(p_i·ln p_i)',
    formula: '-sum(p_i * Math.log(p_i))',
    solveFor: {
      H: '-sum(p_i * Math.log(p_i))'
    },
    description: 'Measures species diversity.',
    variables: {
      H: 'Shannon diversity index',
      'p_i': 'Proportion of species i'
    },
    difficulty: 'hard',
    example: { p_i: [0.5, 0.3, 0.2] },
    evaluable: false
  },
  {
    name: 'Simpson\'s Diversity Index',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'D = Σp_i²',
    formula: 'sum(p_i * p_i)',
    solveFor: {
      D: 'sum(p_i * p_i)'
    },
    description: 'Probability that two individuals are same species.',
    variables: {
      D: 'Simpson\'s index',
      'p_i': 'Proportion of species i'
    },
    difficulty: 'hard',
    example: { p_i: [0.5, 0.3, 0.2] },
    evaluable: false
  },
  {
    name: 'Biomass Energy Transfer (10% Rule)',
    subject: 'Biology',
    topic: 'Ecology',
    displayFormula: 'Energy_transfer = 0.1 × Energy_in',
    formula: '0.1 * Energy_in',
    solveFor: {
      Energy_transfer: '0.1 * Energy_in',
      Energy_in: 'Energy_transfer / 0.1'
    },
    description: 'Only about 10% of energy transfers between trophic levels.',
    variables: {
      'Energy_transfer': 'Energy transferred (J)',
      'Energy_in': 'Energy at lower trophic level (J)'
    },
    difficulty: 'easy',
    example: { Energy_in: 10000 },
    evaluable: true
  },

  // --- ENZYMES ---
  {
    name: 'Michaelis-Menten Equation',
    subject: 'Biology',
    topic: 'Enzymes',
    displayFormula: 'v = V_max[S]/(K_m + [S])',
    formula: 'Vmax * S / (Km + S)',
    solveFor: {
      v: 'Vmax * S / (Km + S)',
      Vmax: 'v * (Km + S) / S',
      S: 'v * Km / (Vmax - v)',
      Km: 'S * (Vmax - v) / v'
    },
    description: 'Reaction velocity as function of substrate concentration.',
    variables: {
      v: 'Reaction velocity',
      'V_max': 'Maximum velocity',
      '[S]': 'Substrate concentration',
      'K_m': 'Michaelis constant'
    },
    difficulty: 'hard',
    example: { Vmax: 100, S: 20, Km: 10 },
    evaluable: true
  },
  {
    name: 'Lineweaver-Burk (Double Reciprocal)',
    subject: 'Biology',
    topic: 'Enzymes',
    displayFormula: '1/v = (K_m/V_max)(1/[S]) + 1/V_max',
    formula: '(Km/Vmax) * (1/S) + 1/Vmax',
    solveFor: {
      inv_v: '(Km/Vmax) * (1/S) + 1/Vmax',
      Km: '(inv_v - 1/Vmax) * Vmax * S',
      Vmax: '1 / (inv_v - Km / (Vmax * S) + Km / (Vmax * S))',
      S: 'Km / (Vmax * (inv_v - 1/Vmax))'
    },
    description: 'Linear form of Michaelis-Menten equation.',
    variables: {
      v: 'Reaction velocity',
      'V_max': 'Maximum velocity',
      '[S]': 'Substrate concentration',
      'K_m': 'Michaelis constant'
    },
    difficulty: 'hard',
    example: { Km: 10, Vmax: 100, S: 20 },
    evaluable: true
  },
  {
    name: 'Catalytic Efficiency',
    subject: 'Biology',
    topic: 'Enzymes',
    displayFormula: 'k_cat/K_m = V_max/([E]·K_m)',
    formula: 'kcat / Km',
    solveFor: {
      efficiency: 'kcat / Km',
      kcat: 'efficiency * Km',
      Km: 'kcat / efficiency'
    },
    description: 'Measure of enzyme efficiency.',
    variables: {
      'k_cat': 'Turnover number (s⁻¹)',
      'K_m': 'Michaelis constant (M)'
    },
    difficulty: 'hard',
    example: { kcat: 1000, Km: 1e-6 },
    evaluable: true
  },

  // --- CELL BIOLOGY ---
  {
    name: 'Surface Area to Volume Ratio (Sphere)',
    subject: 'Biology',
    topic: 'Cell Biology',
    displayFormula: 'SA/V = 3/r',
    formula: '3 / r',
    solveFor: {
      SAV: '3 / r',
      r: '3 / SAV'
    },
    description: 'Surface area to volume ratio of a sphere.',
    variables: {
      'SA/V': 'Surface area to volume ratio (1/m)',
      r: 'Radius (m)'
    },
    difficulty: 'easy',
    example: { r: 1e-6 },
    evaluable: true
  },
  {
    name: 'Cell Cycle (Mitotic Index)',
    subject: 'Biology',
    topic: 'Cell Biology',
    displayFormula: 'MI = (cells_in_mitosis/total_cells) × 100',
    formula: '(mitotic_cells / total_cells) * 100',
    solveFor: {
      MI: '(mitotic_cells / total_cells) * 100',
      mitotic_cells: 'MI * total_cells / 100',
      total_cells: 'mitotic_cells * 100 / MI'
    },
    description: 'Percentage of cells undergoing mitosis.',
    variables: {
      MI: 'Mitotic index (%)',
      mitotic_cells: 'Cells in mitosis',
      total_cells: 'Total cells counted'
    },
    difficulty: 'easy',
    example: { mitotic_cells: 25, total_cells: 100 },
    evaluable: true
  },

  // --- PHOTOSYNTHESIS ---
  {
    name: 'Photosynthesis Rate (Light Intensity)',
    subject: 'Biology',
    topic: 'Photosynthesis',
    displayFormula: 'P = P_max(1 - e^{-kI})',
    formula: 'Pmax * (1 - Math.exp(-k * I))',
    solveFor: {
      P: 'Pmax * (1 - Math.exp(-k * I))',
      Pmax: 'P / (1 - Math.exp(-k * I))',
      k: '-Math.log(1 - P / Pmax) / I',
      I: '-Math.log(1 - P / Pmax) / k'
    },
    description: 'Photosynthesis rate as function of light intensity.',
    variables: {
      P: 'Photosynthesis rate',
      'P_max': 'Maximum photosynthesis rate',
      k: 'Light saturation constant',
      I: 'Light intensity'
    },
    difficulty: 'hard',
    example: { Pmax: 10, k: 0.5, I: 5 },
    evaluable: true
  },
    // ============================================================
  // MEDICINE - ULTIMATE EXTENDED
  // ============================================================

  // --- ANTHROPOMETRY ---
  {
    name: 'Body Mass Index (BMI)',
    subject: 'Medicine',
    topic: 'Anthropometry',
    displayFormula: 'BMI = weight(kg)/height²(m²)',
    formula: 'weight / (height * height)',
    solveFor: {
      BMI: 'weight / (height * height)',
      weight: 'BMI * height * height',
      height: 'Math.sqrt(weight / BMI)'
    },
    description: 'Body mass index for obesity classification.',
    variables: {
      BMI: 'Body mass index (kg/m²)',
      weight: 'Weight (kg)',
      height: 'Height (m)'
    },
    difficulty: 'easy',
    example: { weight: 70, height: 1.75 },
    evaluable: true
  },
  {
    name: 'Body Surface Area (Du Bois)',
    subject: 'Medicine',
    topic: 'Anthropometry',
    displayFormula: 'BSA = 0.007184 × W^0.425 × H^0.725',
    formula: '0.007184 * Math.pow(W, 0.425) * Math.pow(H, 0.725)',
    solveFor: {
      BSA: '0.007184 * Math.pow(W, 0.425) * Math.pow(H, 0.725)',
      W: 'Math.pow(BSA / (0.007184 * Math.pow(H, 0.725)), 1/0.425)',
      H: 'Math.pow(BSA / (0.007184 * Math.pow(W, 0.425)), 1/0.725)'
    },
    description: 'Body surface area using Du Bois formula.',
    variables: {
      BSA: 'Body surface area (m²)',
      W: 'Weight (kg)',
      H: 'Height (cm)'
    },
    difficulty: 'medium',
    example: { W: 70, H: 175 },
    evaluable: true
  },
  {
    name: 'Body Surface Area (Mosteller)',
    subject: 'Medicine',
    topic: 'Anthropometry',
    displayFormula: 'BSA = √(W×H/3600)',
    formula: 'Math.sqrt(W * H / 3600)',
    solveFor: {
      BSA: 'Math.sqrt(W * H / 3600)',
      W: 'BSA * BSA * 3600 / H',
      H: 'BSA * BSA * 3600 / W'
    },
    description: 'Body surface area using Mosteller formula.',
    variables: {
      BSA: 'Body surface area (m²)',
      W: 'Weight (kg)',
      H: 'Height (cm)'
    },
    difficulty: 'easy',
    example: { W: 70, H: 175 },
    evaluable: true
  },

  // --- CARDIOLOGY ---
  {
    name: 'Cardiac Output',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'CO = HR × SV',
    formula: 'HR * SV',
    solveFor: {
      CO: 'HR * SV',
      HR: 'CO / SV',
      SV: 'CO / HR'
    },
    description: 'Volume of blood pumped by heart per minute.',
    variables: {
      CO: 'Cardiac output (L/min)',
      HR: 'Heart rate (beats/min)',
      SV: 'Stroke volume (L/beat)'
    },
    difficulty: 'easy',
    example: { HR: 70, SV: 0.07 },
    evaluable: true
  },
  {
    name: 'Stroke Volume (Echocardiography)',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'SV = π × r² × VTI',
    formula: 'Math.PI * r * r * VTI',
    solveFor: {
      SV: 'Math.PI * r * r * VTI',
      r: 'Math.sqrt(SV / (Math.PI * VTI))',
      VTI: 'SV / (Math.PI * r * r)'
    },
    description: 'Stroke volume from LVOT diameter and VTI.',
    variables: {
      SV: 'Stroke volume (mL)',
      r: 'LVOT radius (cm)',
      VTI: 'Velocity-time integral (cm)'
    },
    difficulty: 'hard',
    example: { r: 1, VTI: 20 },
    evaluable: true
  },
  {
    name: 'Mean Arterial Pressure (MAP)',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'MAP = (2×DBP + SBP)/3',
    formula: '(2 * DBP + SBP) / 3',
    solveFor: {
      MAP: '(2 * DBP + SBP) / 3',
      DBP: '(3 * MAP - SBP) / 2',
      SBP: '3 * MAP - 2 * DBP'
    },
    description: 'Average arterial pressure during cardiac cycle.',
    variables: {
      MAP: 'Mean arterial pressure (mmHg)',
      DBP: 'Diastolic blood pressure (mmHg)',
      SBP: 'Systolic blood pressure (mmHg)'
    },
    difficulty: 'easy',
    example: { DBP: 80, SBP: 120 },
    evaluable: true
  },
  {
    name: 'Pulse Pressure',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'PP = SBP - DBP',
    formula: 'SBP - DBP',
    solveFor: {
      PP: 'SBP - DBP',
      SBP: 'PP + DBP',
      DBP: 'SBP - PP'
    },
    description: 'Difference between systolic and diastolic pressure.',
    variables: {
      PP: 'Pulse pressure (mmHg)',
      SBP: 'Systolic blood pressure (mmHg)',
      DBP: 'Diastolic blood pressure (mmHg)'
    },
    difficulty: 'easy',
    example: { SBP: 120, DBP: 80 },
    evaluable: true
  },
  {
    name: 'Systemic Vascular Resistance',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'SVR = (MAP - CVP)/CO × 80',
    formula: '(MAP - CVP) / CO * 80',
    solveFor: {
      SVR: '(MAP - CVP) / CO * 80',
      MAP: 'SVR * CO / 80 + CVP',
      CVP: 'MAP - SVR * CO / 80',
      CO: '(MAP - CVP) * 80 / SVR'
    },
    description: 'Resistance of systemic circulation.',
    variables: {
      SVR: 'Systemic vascular resistance (dyn·s·cm⁻⁵)',
      MAP: 'Mean arterial pressure (mmHg)',
      CVP: 'Central venous pressure (mmHg)',
      CO: 'Cardiac output (L/min)'
    },
    difficulty: 'hard',
    example: { MAP: 93, CVP: 5, CO: 5 },
    evaluable: true
  },
  {
    name: 'Cardiac Index',
    subject: 'Medicine',
    topic: 'Cardiology',
    displayFormula: 'CI = CO/BSA',
    formula: 'CO / BSA',
    solveFor: {
      CI: 'CO / BSA',
      CO: 'CI * BSA',
      BSA: 'CO / CI'
    },
    description: 'Cardiac output normalized to body surface area.',
    variables: {
      CI: 'Cardiac index (L/min/m²)',
      CO: 'Cardiac output (L/min)',
      BSA: 'Body surface area (m²)'
    },
    difficulty: 'medium',
    example: { CO: 5, BSA: 1.8 },
    evaluable: true
  },

  // --- PULMONARY ---
  {
    name: 'Alveolar Ventilation',
    subject: 'Medicine',
    topic: 'Pulmonary',
    displayFormula: 'VA = (TV - DS) × RR',
    formula: '(TV - DS) * RR',
    solveFor: {
      VA: '(TV - DS) * RR',
      TV: 'VA / RR + DS',
      DS: 'TV - VA / RR',
      RR: 'VA / (TV - DS)'
    },
    description: 'Volume of air reaching alveoli per minute.',
    variables: {
      VA: 'Alveolar ventilation (L/min)',
      TV: 'Tidal volume (L)',
      DS: 'Dead space (L)',
      RR: 'Respiratory rate (breaths/min)'
    },
    difficulty: 'medium',
    example: { TV: 0.5, DS: 0.15, RR: 12 },
    evaluable: true
  },
  {
    name: 'Alveolar Gas Equation',
    subject: 'Medicine',
    topic: 'Pulmonary',
    displayFormula: 'P_AO₂ = P_IO₂ - (P_AO₂ - P_ACO₂/RQ)',
    formula: 'PIO2 - (PIO2 - PACO2 / RQ)',
    solveFor: {
      PAO2: 'PIO2 - (PIO2 - PACO2 / RQ)',
      PIO2: 'PAO2 - PACO2 / RQ',
      PACO2: '(PIO2 - PAO2) * RQ',
      RQ: 'PACO2 / (PIO2 - PAO2)'
    },
    description: 'Alveolar partial pressure of oxygen.',
    variables: {
      'P_AO₂': 'Alveolar PO₂ (mmHg)',
      'P_IO₂': 'Inspired PO₂ (mmHg)',
      'P_ACO₂': 'Alveolar PCO₂ (mmHg)',
      RQ: 'Respiratory quotient'
    },
    difficulty: 'hard',
    example: { PIO2: 150, PACO2: 40, RQ: 0.8 },
    evaluable: true
  },
  {
    name: 'A-a Gradient',
    subject: 'Medicine',
    topic: 'Pulmonary',
    displayFormula: 'A-a = P_AO₂ - P_aO₂',
    formula: 'PAO2 - PaO2',
    solveFor: {
      Aa: 'PAO2 - PaO2',
      PAO2: 'Aa + PaO2',
      PaO2: 'PAO2 - Aa'
    },
    description: 'Difference between alveolar and arterial oxygen.',
    variables: {
      'A-a': 'A-a gradient (mmHg)',
      'P_AO₂': 'Alveolar PO₂ (mmHg)',
      'P_aO₂': 'Arterial PO₂ (mmHg)'
    },
    difficulty: 'medium',
    example: { PAO2: 100, PaO2: 80 },
    evaluable: true
  },

  // --- RENAL ---
  {
    name: 'Creatinine Clearance (Cockcroft-Gault)',
    subject: 'Medicine',
    topic: 'Renal',
    displayFormula: 'CrCl = ((140-age)×weight)/(72×Cr) × 0.85(female)',
    formula: '((140 - age) * weight) / (72 * Cr)',
    solveFor: {
      CrCl: '((140 - age) * weight) / (72 * Cr)',
      age: '140 - CrCl * 72 * Cr / weight',
      weight: 'CrCl * 72 * Cr / (140 - age)',
      Cr: '((140 - age) * weight) / (72 * CrCl)'
    },
    description: 'Estimation of glomerular filtration rate.',
    variables: {
      CrCl: 'Creatinine clearance (mL/min)',
      age: 'Age (years)',
      weight: 'Weight (kg)',
      Cr: 'Serum creatinine (mg/dL)'
    },
    difficulty: 'hard',
    example: { age: 50, weight: 70, Cr: 1.0 },
    evaluable: true
  },
  {
    name: 'eGFR (MDRD)',
    subject: 'Medicine',
    topic: 'Renal',
    displayFormula: 'eGFR = 175 × (Cr)^-1.154 × (age)^-0.203 × 0.742(female)',
    formula: '175 * Math.pow(Cr, -1.154) * Math.pow(age, -0.203)',
    solveFor: {
      eGFR: '175 * Math.pow(Cr, -1.154) * Math.pow(age, -0.203)',
      Cr: 'Math.pow(eGFR / (175 * Math.pow(age, -0.203)), 1/-1.154)',
      age: 'Math.pow(eGFR / (175 * Math.pow(Cr, -1.154)), 1/-0.203)'
    },
    description: 'Estimated glomerular filtration rate.',
    variables: {
      eGFR: 'eGFR (mL/min/1.73m²)',
      Cr: 'Serum creatinine (mg/dL)',
      age: 'Age (years)'
    },
    difficulty: 'hard',
    example: { Cr: 1.0, age: 50 },
    evaluable: true
  },
  {
    name: 'Fractional Excretion of Sodium (FENa)',
    subject: 'Medicine',
    topic: 'Renal',
    displayFormula: 'FENa = (U_Na/P_Na)/(U_Cr/P_Cr) × 100',
    formula: '(UNa / PNa) / (UCr / PCr) * 100',
    solveFor: {
      FENa: '(UNa / PNa) / (UCr / PCr) * 100',
      UNa: 'FENa * PNa * UCr / (PCr * 100)',
      PNa: 'UNa * PCr * 100 / (FENa * UCr)',
      UCr: 'UNa * PCr * 100 / (FENa * PNa)',
      PCr: 'FENa * PNa * UCr / (UNa * 100)'
    },
    description: 'Differentiates prerenal from intrinsic acute kidney injury.',
    variables: {
      FENa: 'Fractional excretion of sodium (%)',
      'U_Na': 'Urine sodium (mEq/L)',
      'P_Na': 'Plasma sodium (mEq/L)',
      'U_Cr': 'Urine creatinine (mg/dL)',
      'P_Cr': 'Plasma creatinine (mg/dL)'
    },
    difficulty: 'hard',
    example: { UNa: 20, PNa: 140, UCr: 100, PCr: 1 },
    evaluable: true
  },

  // --- ENDOCRINOLOGY ---
  {
    name: 'Free T4 Index',
    subject: 'Medicine',
    topic: 'Endocrinology',
    displayFormula: 'FT4I = T4 × T3RU',
    formula: 'T4 * T3RU',
    solveFor: {
      FT4I: 'T4 * T3RU',
      T4: 'FT4I / T3RU',
      T3RU: 'FT4I / T4'
    },
    description: 'Estimate of free T4.',
    variables: {
      FT4I: 'Free T4 index',
      T4: 'Total T4 (µg/dL)',
      T3RU: 'T3 resin uptake (%)'
    },
    difficulty: 'medium',
    example: { T4: 8, T3RU: 30 },
    evaluable: true
  },
  {
    name: 'HOMA-IR (Insulin Resistance)',
    subject: 'Medicine',
    topic: 'Endocrinology',
    displayFormula: 'HOMA-IR = (fasting_glucose × fasting_insulin)/405',
    formula: '(glucose * insulin) / 405',
    solveFor: {
      HOMAIR: '(glucose * insulin) / 405',
      glucose: 'HOMAIR * 405 / insulin',
      insulin: 'HOMAIR * 405 / glucose'
    },
    description: 'Homeostatic model assessment of insulin resistance.',
    variables: {
      'HOMA-IR': 'Insulin resistance index',
      'fasting_glucose': 'Fasting glucose (mg/dL)',
      'fasting_insulin': 'Fasting insulin (µU/mL)'
    },
    difficulty: 'hard',
    example: { glucose: 100, insulin: 10 },
    evaluable: true
  },

  // --- NEUROLOGY ---
  {
    name: 'Glasgow Coma Scale (GCS)',
    subject: 'Medicine',
    topic: 'Neurology',
    displayFormula: 'GCS = Eye + Motor + Verbal',
    formula: 'Eye + Motor + Verbal',
    solveFor: {
      GCS: 'Eye + Motor + Verbal',
      Eye: 'GCS - Motor - Verbal',
      Motor: 'GCS - Eye - Verbal',
      Verbal: 'GCS - Eye - Motor'
    },
    description: 'Assessment of level of consciousness.',
    variables: {
      GCS: 'Glasgow Coma Scale (3-15)',
      Eye: 'Eye opening (1-4)',
      Motor: 'Motor response (1-6)',
      Verbal: 'Verbal response (1-5)'
    },
    difficulty: 'easy',
    example: { Eye: 4, Motor: 6, Verbal: 5 },
    evaluable: true
  },

  // --- PHARMACOLOGY ---
  {
    name: 'Loading Dose',
    subject: 'Medicine',
    topic: 'Pharmacology',
    displayFormula: 'LD = C_target × V_d / F',
    formula: 'Ctarget * Vd / F',
    solveFor: {
      LD: 'Ctarget * Vd / F',
      Ctarget: 'LD * F / Vd',
      Vd: 'LD * F / Ctarget',
      F: 'Ctarget * Vd / LD'
    },
    description: 'Dose to achieve target concentration.',
    variables: {
      LD: 'Loading dose (mg)',
      'C_target': 'Target concentration (mg/L)',
      'V_d': 'Volume of distribution (L)',
      F: 'Bioavailability'
    },
    difficulty: 'hard',
    example: { Ctarget: 10, Vd: 50, F: 1 },
    evaluable: true
  },
  {
    name: 'Maintenance Dose',
    subject: 'Medicine',
    topic: 'Pharmacology',
    displayFormula: 'MD = C_target × CL / F',
    formula: 'Ctarget * CL / F',
    solveFor: {
      MD: 'Ctarget * CL / F',
      Ctarget: 'MD * F / CL',
      CL: 'MD * F / Ctarget',
      F: 'Ctarget * CL / MD'
    },
    description: 'Dose to maintain steady-state concentration.',
    variables: {
      MD: 'Maintenance dose (mg/time)',
      'C_target': 'Target concentration (mg/L)',
      CL: 'Clearance (L/time)',
      F: 'Bioavailability'
    },
    difficulty: 'hard',
    example: { Ctarget: 10, CL: 5, F: 1 },
    evaluable: true
  },
  {
    name: 'Half-life (Drug)',
    subject: 'Medicine',
    topic: 'Pharmacology',
    displayFormula: 't₁/₂ = 0.693 × V_d/CL',
    formula: '0.693 * Vd / CL',
    solveFor: {
      t_half: '0.693 * Vd / CL',
      Vd: 't_half * CL / 0.693',
      CL: '0.693 * Vd / t_half'
    },
    description: 'Time for drug concentration to halve.',
    variables: {
      't₁/₂': 'Half-life (time)',
      'V_d': 'Volume of distribution (L)',
      CL: 'Clearance (L/time)'
    },
    difficulty: 'hard',
    example: { Vd: 50, CL: 5 },
    evaluable: true
  },

  // ============================================================
  // STATISTICS - ULTIMATE EXTENDED
  // ============================================================

  // --- DESCRIPTIVE STATISTICS ---
  {
    name: 'Mean (Population)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'μ = Σx/N',
    formula: 'sum / N',
    solveFor: {
      mu: 'sum / N',
      sum: 'mu * N',
      N: 'sum / mu'
    },
    description: 'Population mean.',
    variables: {
      μ: 'Population mean',
      'Σx': 'Sum of all values',
      N: 'Population size'
    },
    difficulty: 'easy',
    example: { sum: 50, N: 5 },
    evaluable: true
  },
  {
    name: 'Median (Odd)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'x̄ = x_{(n+1)/2}',
    formula: 'sorted[Math.floor(n/2)]',
    solveFor: {},
    description: 'Median for odd number of observations.',
    variables: {
      'x̄': 'Median',
      n: 'Number of values',
      sorted: 'Sorted array'
    },
    difficulty: 'easy',
    example: { sorted: [1, 3, 5, 7, 9], n: 5 },
    evaluable: false
  },
  {
    name: 'Median (Even)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'x̄ = (x_{n/2} + x_{n/2+1})/2',
    formula: '(sorted[n/2 - 1] + sorted[n/2]) / 2',
    solveFor: {},
    description: 'Median for even number of observations.',
    variables: {
      'x̄': 'Median',
      n: 'Number of values',
      sorted: 'Sorted array'
    },
    difficulty: 'easy',
    example: { sorted: [1, 3, 5, 7], n: 4 },
    evaluable: false
  },
  {
    name: 'Variance (Population)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'σ² = Σ(x-μ)²/N',
    formula: 'sumSquares / N',
    solveFor: {
      sigma2: 'sumSquares / N',
      sumSquares: 'sigma2 * N',
      N: 'sumSquares / sigma2'
    },
    description: 'Population variance.',
    variables: {
      'σ²': 'Population variance',
      x: 'Individual value',
      μ: 'Population mean',
      N: 'Population size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, N: 5 },
    evaluable: true
  },
  {
    name: 'Variance (Sample)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 's² = Σ(x-x̄)²/(n-1)',
    formula: 'sumSquares / (n - 1)',
    solveFor: {
      s2: 'sumSquares / (n - 1)',
      sumSquares: 's2 * (n - 1)',
      n: 'sumSquares / s2 + 1'
    },
    description: 'Sample variance (unbiased).',
    variables: {
      's²': 'Sample variance',
      x: 'Individual value',
      'x̄': 'Sample mean',
      n: 'Sample size'
    },
    difficulty: 'medium',
    example: { sumSquares: 50, n: 5 },
    evaluable: true
  },
  {
    name: 'Standard Deviation (Population)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'σ = √σ²',
    formula: 'Math.sqrt(sigma2)',
    solveFor: {
      sigma: 'Math.sqrt(sigma2)',
      sigma2: 'sigma * sigma'
    },
    description: 'Population standard deviation.',
    variables: {
      σ: 'Population standard deviation',
      'σ²': 'Population variance'
    },
    difficulty: 'easy',
    example: { sigma2: 10 },
    evaluable: true
  },
  {
    name: 'Standard Deviation (Sample)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 's = √s²',
    formula: 'Math.sqrt(s2)',
    solveFor: {
      s: 'Math.sqrt(s2)',
      s2: 's * s'
    },
    description: 'Sample standard deviation.',
    variables: {
      s: 'Sample standard deviation',
      's²': 'Sample variance'
    },
    difficulty: 'easy',
    example: { s2: 10 },
    evaluable: true
  },
  {
    name: 'Coefficient of Variation',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'CV = (σ/μ) × 100',
    formula: '(sigma / mu) * 100',
    solveFor: {
      CV: '(sigma / mu) * 100',
      sigma: 'CV * mu / 100',
      mu: 'sigma * 100 / CV'
    },
    description: 'Relative measure of dispersion.',
    variables: {
      CV: 'Coefficient of variation (%)',
      σ: 'Standard deviation',
      μ: 'Mean'
    },
    difficulty: 'medium',
    example: { sigma: 5, mu: 20 },
    evaluable: true
  },
  {
    name: 'Range',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'R = max - min',
    formula: 'max - min',
    solveFor: {
      R: 'max - min',
      max: 'R + min',
      min: 'max - R'
    },
    description: 'Difference between maximum and minimum values.',
    variables: {
      R: 'Range',
      max: 'Maximum value',
      min: 'Minimum value'
    },
    difficulty: 'easy',
    example: { max: 10, min: 2 },
    evaluable: true
  },
  {
    name: 'Interquartile Range (IQR)',
    subject: 'Statistics',
    topic: 'Descriptive',
    displayFormula: 'IQR = Q₃ - Q₁',
    formula: 'Q3 - Q1',
    solveFor: {
      IQR: 'Q3 - Q1',
      Q3: 'IQR + Q1',
      Q1: 'Q3 - IQR'
    },
    description: 'Range of middle 50% of data.',
    variables: {
      IQR: 'Interquartile range',
      'Q₃': 'Third quartile',
      'Q₁': 'First quartile'
    },
    difficulty: 'medium',
    example: { Q3: 8, Q1: 3 },
    evaluable: true
  },

  // --- INFERENTIAL STATISTICS ---
  {
    name: 'Z-Score (Standard Normal)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'z = (x - μ)/σ',
    formula: '(x - mu) / sigma',
    solveFor: {
      z: '(x - mu) / sigma',
      x: 'z * sigma + mu',
      mu: 'x - z * sigma',
      sigma: '(x - mu) / z'
    },
    description: 'Number of standard deviations from mean.',
    variables: {
      z: 'Z-score',
      x: 'Value',
      μ: 'Mean',
      σ: 'Standard deviation'
    },
    difficulty: 'medium',
    example: { x: 70, mu: 50, sigma: 10 },
    evaluable: true
  },
  {
    name: 'T-Score (Sample)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 't = (x̄ - μ)/(s/√n)',
    formula: '(xbar - mu) / (s / Math.sqrt(n))',
    solveFor: {
      t: '(xbar - mu) / (s / Math.sqrt(n))',
      xbar: 't * s / Math.sqrt(n) + mu',
      mu: 'xbar - t * s / Math.sqrt(n)',
      s: '(xbar - mu) * Math.sqrt(n) / t',
      n: 'Math.pow((xbar - mu) / (t * s), -2)'
    },
    description: 'T-statistic for sample mean.',
    variables: {
      t: 'T-score',
      'x̄': 'Sample mean',
      μ: 'Population mean',
      s: 'Sample standard deviation',
      n: 'Sample size'
    },
    difficulty: 'hard',
    example: { xbar: 70, mu: 50, s: 10, n: 25 },
    evaluable: true
  },
  {
    name: 'Confidence Interval (Mean)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'CI = x̄ ± z*(σ/√n)',
    formula: 'xbar + z * (sigma / Math.sqrt(n))',
    solveFor: {
      CI_upper: 'xbar + z * (sigma / Math.sqrt(n))',
      xbar: 'CI_upper - z * (sigma / Math.sqrt(n))',
      z: '(CI_upper - xbar) * Math.sqrt(n) / sigma',
      sigma: '(CI_upper - xbar) * Math.sqrt(n) / z',
      n: 'Math.pow(z * sigma / (CI_upper - xbar), 2)'
    },
    description: 'Upper bound of confidence interval for mean.',
    variables: {
      CI: 'Confidence interval upper bound',
      'x̄': 'Sample mean',
      z: 'Z-critical value',
      σ: 'Population standard deviation',
      n: 'Sample size'
    },
    difficulty: 'hard',
    example: { xbar: 50, z: 1.96, sigma: 10, n: 100 },
    evaluable: true
  },
  {
    name: 'Margin of Error',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'ME = z*(σ/√n)',
    formula: 'z * (sigma / Math.sqrt(n))',
    solveFor: {
      ME: 'z * (sigma / Math.sqrt(n))',
      z: 'ME * Math.sqrt(n) / sigma',
      sigma: 'ME * Math.sqrt(n) / z',
      n: 'Math.pow(z * sigma / ME, 2)'
    },
    description: 'Margin of error for confidence interval.',
    variables: {
      ME: 'Margin of error',
      z: 'Z-critical value',
      σ: 'Population standard deviation',
      n: 'Sample size'
    },
    difficulty: 'hard',
    example: { z: 1.96, sigma: 10, n: 100 },
    evaluable: true
  },
  {
    name: 'Sample Size (Mean)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'n = (z*σ/ME)²',
    formula: 'Math.pow(z * sigma / ME, 2)',
    solveFor: {
      n: 'Math.pow(z * sigma / ME, 2)',
      z: 'ME * Math.sqrt(n) / sigma',
      sigma: 'ME * Math.sqrt(n) / z',
      ME: 'z * sigma / Math.sqrt(n)'
    },
    description: 'Sample size for desired margin of error.',
    variables: {
      n: 'Sample size',
      z: 'Z-critical value',
      σ: 'Standard deviation',
      ME: 'Margin of error'
    },
    difficulty: 'hard',
    example: { z: 1.96, sigma: 10, ME: 2 },
    evaluable: true
  },
  {
    name: 'Chi-Square (Goodness of Fit)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'χ² = Σ(O-E)²/E',
    formula: 'sum((O - E) * (O - E) / E)',
    solveFor: {
      chi2: 'sum((O - E) * (O - E) / E)'
    },
    description: 'Chi-square statistic for categorical data.',
    variables: {
      'χ²': 'Chi-square statistic',
      O: 'Observed frequency',
      E: 'Expected frequency'
    },
    difficulty: 'hard',
    example: { O: [10, 15, 25], E: [10, 15, 25] },
    evaluable: false
  },
  {
    name: 'Pearson Correlation (r)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'r = Σ(x-x̄)(y-ȳ)/√(Σ(x-x̄)²Σ(y-ȳ)²)',
    formula: 'sum_xy / Math.sqrt(sum_x2 * sum_y2)',
    solveFor: {
      r: 'sum_xy / Math.sqrt(sum_x2 * sum_y2)',
      sum_xy: 'r * Math.sqrt(sum_x2 * sum_y2)',
      sum_x2: 'Math.pow(sum_xy / r, 2) / sum_y2',
      sum_y2: 'Math.pow(sum_xy / r, 2) / sum_x2'
    },
    description: 'Correlation between two variables.',
    variables: {
      r: 'Correlation coefficient',
      x: 'X values',
      y: 'Y values',
      'x̄': 'Mean of X',
      'ȳ': 'Mean of Y'
    },
    difficulty: 'hard',
    example: { sum_xy: 20, sum_x2: 100, sum_y2: 100 },
    evaluable: true
  },
  {
    name: 'Coefficient of Determination (R²)',
    subject: 'Statistics',
    topic: 'Inferential',
    displayFormula: 'R² = r²',
    formula: 'r * r',
    solveFor: {
      R2: 'r * r',
      r: 'Math.sqrt(R2)'
    },
    description: 'Proportion of variance explained.',
    variables: {
      'R²': 'Coefficient of determination',
      r: 'Correlation coefficient'
    },
    difficulty: 'easy',
    example: { r: 0.8 },
    evaluable: true
  },

  // --- REGRESSION ---
  {
    name: 'Linear Regression (Slope)',
    subject: 'Statistics',
    topic: 'Regression',
    displayFormula: 'b = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)²',
    formula: 'sum_xy / sum_x2',
    solveFor: {
      b: 'sum_xy / sum_x2',
      sum_xy: 'b * sum_x2',
      sum_x2: 'sum_xy / b'
    },
    description: 'Slope of best-fit line.',
    variables: {
      b: 'Slope',
      x: 'X values',
      y: 'Y values',
      'x̄': 'Mean of X',
      'ȳ': 'Mean of Y'
    },
    difficulty: 'hard',
    example: { sum_xy: 20, sum_x2: 100 },
    evaluable: true
  },
  {
    name: 'Linear Regression (Intercept)',
    subject: 'Statistics',
    topic: 'Regression',
    displayFormula: 'a = ȳ - b·x̄',
    formula: 'ybar - b * xbar',
    solveFor: {
      a: 'ybar - b * xbar',
      ybar: 'a + b * xbar',
      b: '(ybar - a) / xbar',
      xbar: '(ybar - a) / b'
    },
    description: 'Intercept of best-fit line.',
    variables: {
      a: 'Intercept',
      b: 'Slope',
      'x̄': 'Mean of X',
      'ȳ': 'Mean of Y'
    },
    difficulty: 'hard',
    example: { b: 0.2, xbar: 10, ybar: 5 },
    evaluable: true
  },
  {
    name: 'Predicted Value (Regression)',
    subject: 'Statistics',
    topic: 'Regression',
    displayFormula: 'ŷ = a + bx',
    formula: 'a + b * x',
    solveFor: {
      yhat: 'a + b * x',
      a: 'yhat - b * x',
      b: '(yhat - a) / x',
      x: '(yhat - a) / b'
    },
    description: 'Predicted y from linear regression.',
    variables: {
      'ŷ': 'Predicted value',
      a: 'Intercept',
      b: 'Slope',
      x: 'X value'
    },
    difficulty: 'easy',
    example: { a: 3, b: 0.2, x: 10 },
    evaluable: true
  },

  // ============================================================
  // ECONOMICS - ULTIMATE EXTENDED
  // ============================================================

  // --- FINANCE ---
  {
    name: 'Compound Interest',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'A = P(1 + r/n)ⁿᵗ',
    formula: 'P * Math.pow(1 + r/n, n * t)',
    solveFor: {
      A: 'P * Math.pow(1 + r/n, n * t)',
      P: 'A / Math.pow(1 + r/n, n * t)',
      r: 'n * (Math.pow(A / P, 1/(n * t)) - 1)',
      n: 'Math.log(A / P) / (t * Math.log(1 + r/n))',
      t: 'Math.log(A / P) / (n * Math.log(1 + r/n))'
    },
    description: 'Amount with compound interest.',
    variables: {
      A: 'Final amount',
      P: 'Principal',
      r: 'Annual interest rate',
      n: 'Compounding periods per year',
      t: 'Number of years'
    },
    difficulty: 'medium',
    example: { P: 1000, r: 0.05, n: 12, t: 10 },
    evaluable: true
  },
  {
    name: 'Continuous Compounding',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'A = Pe^{rt}',
    formula: 'P * Math.exp(r * t)',
    solveFor: {
      A: 'P * Math.exp(r * t)',
      P: 'A / Math.exp(r * t)',
      r: 'Math.log(A / P) / t',
      t: 'Math.log(A / P) / r'
    },
    description: 'Amount with continuous compounding.',
    variables: {
      A: 'Final amount',
      P: 'Principal',
      r: 'Annual interest rate',
      t: 'Time (years)'
    },
    difficulty: 'medium',
    example: { P: 1000, r: 0.05, t: 10 },
    evaluable: true
  },
  {
    name: 'Simple Interest',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'A = P(1 + rt)',
    formula: 'P * (1 + r * t)',
    solveFor: {
      A: 'P * (1 + r * t)',
      P: 'A / (1 + r * t)',
      r: '(A / P - 1) / t',
      t: '(A / P - 1) / r'
    },
    description: 'Amount with simple interest.',
    variables: {
      A: 'Final amount',
      P: 'Principal',
      r: 'Annual interest rate',
      t: 'Time in years'
    },
    difficulty: 'easy',
    example: { P: 1000, r: 0.05, t: 3 },
    evaluable: true
  },
  {
    name: 'Present Value (PV)',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'PV = FV/(1 + r)ᵗ',
    formula: 'FV / Math.pow(1 + r, t)',
    solveFor: {
      PV: 'FV / Math.pow(1 + r, t)',
      FV: 'PV * Math.pow(1 + r, t)',
      r: 'Math.pow(FV / PV, 1/t) - 1',
      t: 'Math.log(FV / PV) / Math.log(1 + r)'
    },
    description: 'Current value of future amount.',
    variables: {
      PV: 'Present value',
      FV: 'Future value',
      r: 'Discount rate',
      t: 'Number of periods'
    },
    difficulty: 'medium',
    example: { FV: 1000, r: 0.05, t: 5 },
    evaluable: true
  },
  {
    name: 'Net Present Value (NPV)',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'NPV = ΣCF_t/(1+r)^t - Investment',
    formula: 'sum(CF / Math.pow(1 + r, t)) - Investment',
    solveFor: {
      NPV: 'sum(CF / Math.pow(1 + r, t)) - Investment',
      Investment: 'sum(CF / Math.pow(1 + r, t)) - NPV'
    },
    description: 'Sum of discounted cash flows minus investment.',
    variables: {
      NPV: 'Net present value',
      'CF_t': 'Cash flow at time t',
      r: 'Discount rate',
      t: 'Time period',
      Investment: 'Initial investment'
    },
    difficulty: 'hard',
    example: { CF: [100, 100, 100], r: 0.05, t: [1, 2, 3], Investment: 250 },
    evaluable: false
  },
  {
    name: 'Internal Rate of Return (IRR)',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: '0 = ΣCF_t/(1+IRR)^t - Investment',
    formula: 'IRR',
    solveFor: {},
    description: 'Discount rate that makes NPV = 0.',
    variables: {
      IRR: 'Internal rate of return',
      'CF_t': 'Cash flows',
      t: 'Time periods',
      Investment: 'Initial investment'
    },
    difficulty: 'hard',
    example: { Investment: 1000, CF: [300, 400, 500] },
    evaluable: false
  },
  {
    name: 'Future Value of Annuity',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'FVA = PMT × ((1+r)ⁿ - 1)/r',
    formula: 'PMT * (Math.pow(1 + r, n) - 1) / r',
    solveFor: {
      FVA: 'PMT * (Math.pow(1 + r, n) - 1) / r',
      PMT: 'FVA * r / (Math.pow(1 + r, n) - 1)',
      r: 'FVA * r / (PMT * (Math.pow(1 + r, n) - 1))',
      n: 'Math.log(FVA * r / PMT + 1) / Math.log(1 + r)'
    },
    description: 'Future value of a series of payments.',
    variables: {
      FVA: 'Future value of annuity',
      PMT: 'Payment per period',
      r: 'Interest rate per period',
      n: 'Number of periods'
    },
    difficulty: 'hard',
    example: { PMT: 100, r: 0.05, n: 5 },
    evaluable: true
  },
  {
    name: 'Present Value of Annuity',
    subject: 'Economics',
    topic: 'Finance',
    displayFormula: 'PVA = PMT × (1 - (1+r)⁻ⁿ)/r',
    formula: 'PMT * (1 - Math.pow(1 + r, -n)) / r',
    solveFor: {
      PVA: 'PMT * (1 - Math.pow(1 + r, -n)) / r',
      PMT: 'PVA * r / (1 - Math.pow(1 + r, -n))',
      n: '-Math.log(1 - PVA * r / PMT) / Math.log(1 + r)'
    },
    description: 'Present value of a series of payments.',
    variables: {
      PVA: 'Present value of annuity',
      PMT: 'Payment per period',
      r: 'Interest rate per period',
      n: 'Number of periods'
    },
    difficulty: 'hard',
    example: { PMT: 100, r: 0.05, n: 5 },
    evaluable: true
  },

  // --- MACROECONOMICS ---
  {
    name: 'GDP (Expenditure Approach)',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'GDP = C + I + G + (X - M)',
    formula: 'C + I + G + (X - M)',
    solveFor: {
      GDP: 'C + I + G + (X - M)',
      C: 'GDP - I - G - (X - M)',
      I: 'GDP - C - G - (X - M)',
      G: 'GDP - C - I - (X - M)',
      X: 'GDP - C - I - G + M',
      M: 'C + I + G + X - GDP'
    },
    description: 'Gross Domestic Product by expenditure.',
    variables: {
      GDP: 'Gross Domestic Product',
      C: 'Consumption',
      I: 'Investment',
      G: 'Government spending',
      X: 'Exports',
      M: 'Imports'
    },
    difficulty: 'easy',
    example: { C: 1000, I: 500, G: 300, X: 200, M: 150 },
    evaluable: true
  },
  {
    name: 'GDP per Capita',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'GDP_pc = GDP/Population',
    formula: 'GDP / Population',
    solveFor: {
      GDP_pc: 'GDP / Population',
      GDP: 'GDP_pc * Population',
      Population: 'GDP / GDP_pc'
    },
    description: 'GDP divided by population.',
    variables: {
      'GDP_pc': 'GDP per capita',
      GDP: 'Gross Domestic Product',
      Population: 'Total population'
    },
    difficulty: 'easy',
    example: { GDP: 1000000, Population: 10000 },
    evaluable: true
  },
  {
    name: 'Inflation Rate (CPI)',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'π = (CPI_new - CPI_old)/CPI_old × 100',
    formula: '(CPI_new - CPI_old) / CPI_old * 100',
    solveFor: {
      pi: '(CPI_new - CPI_old) / CPI_old * 100',
      CPI_new: 'CPI_old * (1 + pi / 100)',
      CPI_old: 'CPI_new / (1 + pi / 100)'
    },
    description: 'Inflation rate from Consumer Price Index.',
    variables: {
      π: 'Inflation rate (%)',
      'CPI_new': 'Current CPI',
      'CPI_old': 'Previous CPI'
    },
    difficulty: 'easy',
    example: { CPI_new: 105, CPI_old: 100 },
    evaluable: true
  },
  {
    name: 'Unemployment Rate',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'UR = (Unemployed/Labor_Force) × 100',
    formula: '(Unemployed / Labor_Force) * 100',
    solveFor: {
      UR: '(Unemployed / Labor_Force) * 100',
      Unemployed: 'UR * Labor_Force / 100',
      Labor_Force: 'Unemployed * 100 / UR'
    },
    description: 'Percentage of labor force that is unemployed.',
    variables: {
      UR: 'Unemployment rate (%)',
      Unemployed: 'Number of unemployed persons',
      'Labor_Force': 'Total labor force'
    },
    difficulty: 'easy',
    example: { Unemployed: 5000, Labor_Force: 100000 },
    evaluable: true
  },
  {
    name: 'Labor Force Participation Rate',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'LFPR = (Labor_Force/Working_Age_Pop) × 100',
    formula: '(Labor_Force / Working_Age_Pop) * 100',
    solveFor: {
      LFPR: '(Labor_Force / Working_Age_Pop) * 100',
      Labor_Force: 'LFPR * Working_Age_Pop / 100',
      Working_Age_Pop: 'Labor_Force * 100 / LFPR'
    },
    description: 'Percentage of working-age population in labor force.',
    variables: {
      LFPR: 'Labor force participation rate (%)',
      'Labor_Force': 'Total labor force',
      'Working_Age_Pop': 'Working age population'
    },
    difficulty: 'easy',
    example: { Labor_Force: 100000, Working_Age_Pop: 150000 },
    evaluable: true
  },
  {
    name: 'Money Multiplier',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'm = 1/RR',
    formula: '1 / RR',
    solveFor: {
      m: '1 / RR',
      RR: '1 / m'
    },
    description: 'Maximum amount of money created by banks.',
    variables: {
      m: 'Money multiplier',
      RR: 'Reserve requirement (fraction)'
    },
    difficulty: 'medium',
    example: { RR: 0.1 },
    evaluable: true
  },
  {
    name: 'Quantity Theory of Money',
    subject: 'Economics',
    topic: 'Macroeconomics',
    displayFormula: 'MV = PY',
    formula: 'M * V',
    solveFor: {
      M: 'P * Y / V',
      V: 'P * Y / M',
      P: 'M * V / Y',
      Y: 'M * V / P'
    },
    description: 'Equation of exchange.',
    variables: {
      M: 'Money supply',
      V: 'Velocity of money',
      P: 'Price level',
      Y: 'Real GDP'
    },
    difficulty: 'hard',
    example: { M: 1000, V: 2 },
    evaluable: true
  },

  // --- MICROECONOMICS ---
  {
    name: 'Price Elasticity of Demand',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'E_d = (%ΔQ)/(%ΔP)',
    formula: '((Q1 - Q0) / Q0) / ((P1 - P0) / P0)',
    solveFor: {
      Ed: '((Q1 - Q0) / Q0) / ((P1 - P0) / P0)',
      Q0: 'Q1 / (Ed * (P1 - P0) / P0 + 1)',
      Q1: 'Q0 * (1 + Ed * (P1 - P0) / P0)',
      P0: 'P1 / (1 + (Q1 - Q0) / (Q0 * Ed))',
      P1: 'P0 * (1 + (Q1 - Q0) / (Q0 * Ed))'
    },
    description: 'Responsiveness of demand to price changes.',
    variables: {
      'E_d': 'Price elasticity of demand',
      'Q₀': 'Initial quantity',
      'Q₁': 'New quantity',
      'P₀': 'Initial price',
      'P₁': 'New price'
    },
    difficulty: 'hard',
    example: { Q0: 100, Q1: 80, P0: 10, P1: 12 },
    evaluable: true
  },
  {
    name: 'Cross-Price Elasticity of Demand',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'E_xy = (%ΔQ_x)/(%ΔP_y)',
    formula: '((Qx1 - Qx0) / Qx0) / ((Py1 - Py0) / Py0)',
    solveFor: {
      Exy: '((Qx1 - Qx0) / Qx0) / ((Py1 - Py0) / Py0)',
      Qx0: 'Qx1 / (Exy * (Py1 - Py0) / Py0 + 1)',
      Qx1: 'Qx0 * (1 + Exy * (Py1 - Py0) / Py0)',
      Py0: 'Py1 / (1 + (Qx1 - Qx0) / (Qx0 * Exy))',
      Py1: 'Py0 * (1 + (Qx1 - Qx0) / (Qx0 * Exy))'
    },
    description: 'Responsiveness of demand for good X to price of good Y.',
    variables: {
      'E_xy': 'Cross-price elasticity',
      'Qx₀': 'Initial quantity of X',
      'Qx₁': 'New quantity of X',
      'Py₀': 'Initial price of Y',
      'Py₁': 'New price of Y'
    },
    difficulty: 'hard',
    example: { Qx0: 100, Qx1: 120, Py0: 10, Py1: 12 },
    evaluable: true
  },
  {
    name: 'Income Elasticity of Demand',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'E_I = (%ΔQ)/(%ΔI)',
    formula: '((Q1 - Q0) / Q0) / ((I1 - I0) / I0)',
    solveFor: {
      EI: '((Q1 - Q0) / Q0) / ((I1 - I0) / I0)',
      Q0: 'Q1 / (EI * (I1 - I0) / I0 + 1)',
      Q1: 'Q0 * (1 + EI * (I1 - I0) / I0)',
      I0: 'I1 / (1 + (Q1 - Q0) / (Q0 * EI))',
      I1: 'I0 * (1 + (Q1 - Q0) / (Q0 * EI))'
    },
    description: 'Responsiveness of demand to income changes.',
    variables: {
      'E_I': 'Income elasticity of demand',
      'Q₀': 'Initial quantity',
      'Q₁': 'New quantity',
      'I₀': 'Initial income',
      'I₁': 'New income'
    },
    difficulty: 'hard',
    example: { Q0: 100, Q1: 110, I0: 50000, I1: 55000 },
    evaluable: true
  },
  {
    name: 'Profit Maximization (MR = MC)',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'MR = MC',
    formula: 'MR',
    solveFor: {
      MR: 'MR',
      MC: 'MR'
    },
    description: 'Condition for profit maximization.',
    variables: {
      MR: 'Marginal revenue',
      MC: 'Marginal cost'
    },
    difficulty: 'medium',
    example: { MR: 10 },
    evaluable: false
  },
  {
    name: 'Total Revenue',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'TR = P × Q',
    formula: 'P * Q',
    solveFor: {
      TR: 'P * Q',
      P: 'TR / Q',
      Q: 'TR / P'
    },
    description: 'Revenue from selling Q units at price P.',
    variables: {
      TR: 'Total revenue',
      P: 'Price',
      Q: 'Quantity'
    },
    difficulty: 'easy',
    example: { P: 10, Q: 100 },
    evaluable: true
  },
  {
    name: 'Average Revenue',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'AR = TR/Q = P',
    formula: 'P',
    solveFor: {
      AR: 'P',
      P: 'AR'
    },
    description: 'Revenue per unit sold.',
    variables: {
      AR: 'Average revenue',
      TR: 'Total revenue',
      Q: 'Quantity',
      P: 'Price'
    },
    difficulty: 'easy',
    example: { P: 10 },
    evaluable: true
  },
  {
    name: 'Marginal Revenue',
    subject: 'Economics',
    topic: 'Microeconomics',
    displayFormula: 'MR = ΔTR/ΔQ',
    formula: 'dTR / dQ',
    solveFor: {
      MR: 'dTR / dQ',
      dTR: 'MR * dQ',
      dQ: 'dTR / MR'
    },
    description: 'Change in revenue from selling one more unit.',
    variables: {
      MR: 'Marginal revenue',
      'ΔTR': 'Change in total revenue',
      'ΔQ': 'Change in quantity'
    },
    difficulty: 'medium',
    example: { dTR: 50, dQ: 5 },
    evaluable: true
  },

  // ============================================================
  // ENGINEERING - ULTIMATE EXTENDED
  // ============================================================

  // --- MATERIALS SCIENCE ---
  {
    name: 'Young\'s Modulus (Stress-Strain)',
    subject: 'Engineering',
    topic: 'Materials Science',
    displayFormula: 'E = σ/ε = (F/A)/(ΔL/L)',
    formula: '(F/A) / (dL/L)',
    solveFor: {
      E: '(F/A) / (dL/L)',
      F: 'E * A * dL / L',
      A: 'F * L / (E * dL)',
      dL: 'F * L / (E * A)',
      L: 'E * A * dL / F'
    },
    description: 'Elastic modulus of a material.',
    variables: {
      E: 'Young\'s modulus (Pa)',
      F: 'Force (N)',
      A: 'Cross-sectional area (m²)',
      'ΔL': 'Change in length (m)',
      L: 'Original length (m)'
    },
    difficulty: 'medium',
    example: { F: 1000, A: 1e-4, dL: 0.001, L: 1 },
    evaluable: true
  },
  {
    name: 'Shear Modulus',
    subject: 'Engineering',
    topic: 'Materials Science',
    displayFormula: 'G = τ/γ',
    formula: 'tau / gamma',
    solveFor: {
      G: 'tau / gamma',
      tau: 'G * gamma',
      gamma: 'tau / G'
    },
    description: 'Ratio of shear stress to shear strain.',
    variables: {
      G: 'Shear modulus (Pa)',
      τ: 'Shear stress (Pa)',
      γ: 'Shear strain'
    },
    difficulty: 'medium',
    example: { tau: 100, gamma: 0.01 },
    evaluable: true
  },
  {
    name: 'Bulk Modulus',
    subject: 'Engineering',
    topic: 'Materials Science',
    displayFormula: 'B = -ΔP/(ΔV/V)',
    formula: '-dP / (dV/V)',
    solveFor: {
      B: '-dP / (dV/V)',
      dP: '-B * dV / V',
      dV: '-dP * V / B',
      V: '-B * dV / dP'
    },
    description: 'Resistance to uniform compression.',
    variables: {
      B: 'Bulk modulus (Pa)',
      'ΔP': 'Change in pressure',
      'ΔV': 'Change in volume',
      V: 'Original volume'
    },
    difficulty: 'hard',
    example: { dP: 100, dV: 0.01, V: 1 },
    evaluable: true
  },
  {
    name: 'Poisson\'s Ratio',
    subject: 'Engineering',
    topic: 'Materials Science',
    displayFormula: 'ν = -ε_lateral/ε_axial',
    formula: '-epsilon_lateral / epsilon_axial',
    solveFor: {
      nu: '-epsilon_lateral / epsilon_axial',
      epsilon_lateral: '-nu * epsilon_axial',
      epsilon_axial: '-epsilon_lateral / nu'
    },
    description: 'Ratio of transverse to axial strain.',
    variables: {
      ν: 'Poisson\'s ratio',
      'ε_lateral': 'Lateral strain',
      'ε_axial': 'Axial strain'
    },
    difficulty: 'medium',
    example: { epsilon_lateral: -0.003, epsilon_axial: 0.01 },
    evaluable: true
  },

  // --- MECHANICAL ENGINEERING ---
  {
    name: 'Thermal Expansion',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'ΔL = αL₀ΔT',
    formula: 'alpha * L0 * dT',
    solveFor: {
      dL: 'alpha * L0 * dT',
      alpha: 'dL / (L0 * dT)',
      L0: 'dL / (alpha * dT)',
      dT: 'dL / (alpha * L0)'
    },
    description: 'Change in length due to temperature change.',
    variables: {
      'ΔL': 'Change in length (m)',
      α: 'Thermal expansion coefficient (1/K)',
      'L₀': 'Original length (m)',
      'ΔT': 'Temperature change (K)'
    },
    difficulty: 'easy',
    example: { alpha: 12e-6, L0: 1, dT: 50 },
    evaluable: true
  },
  {
    name: 'Stress (Normal)',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'σ = F/A',
    formula: 'F / A',
    solveFor: {
      sigma: 'F / A',
      F: 'sigma * A',
      A: 'F / sigma'
    },
    description: 'Normal stress on a cross-section.',
    variables: {
      σ: 'Stress (Pa)',
      F: 'Force (N)',
      A: 'Area (m²)'
    },
    difficulty: 'easy',
    example: { F: 1000, A: 0.01 },
    evaluable: true
  },
  {
    name: 'Strain (Normal)',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'ε = ΔL/L₀',
    formula: 'dL / L0',
    solveFor: {
      epsilon: 'dL / L0',
      dL: 'epsilon * L0',
      L0: 'dL / epsilon'
    },
    description: 'Normal strain relative to original length.',
    variables: {
      ε: 'Strain',
      'ΔL': 'Change in length',
      'L₀': 'Original length'
    },
    difficulty: 'easy',
    example: { dL: 0.001, L0: 1 },
    evaluable: true
  },
  {
    name: 'Bending Moment',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'M = F × d',
    formula: 'F * d',
    solveFor: {
      M: 'F * d',
      F: 'M / d',
      d: 'M / F'
    },
    description: 'Moment causing bending.',
    variables: {
      M: 'Bending moment (N·m)',
      F: 'Force (N)',
      d: 'Perpendicular distance (m)'
    },
    difficulty: 'easy',
    example: { F: 100, d: 0.5 },
    evaluable: true
  },
  {
    name: 'Shear Stress',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'τ = V/A',
    formula: 'V / A',
    solveFor: {
      tau: 'V / A',
      V: 'tau * A',
      A: 'V / tau'
    },
    description: 'Shear stress on a cross-section.',
    variables: {
      τ: 'Shear stress (Pa)',
      V: 'Shear force (N)',
      A: 'Area (m²)'
    },
    difficulty: 'easy',
    example: { V: 1000, A: 0.01 },
    evaluable: true
  },
  {
    name: 'Euler\'s Buckling Load',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'P_cr = π²EI/(KL)²',
    formula: 'Math.PI * Math.PI * E * I / Math.pow(K * L, 2)',
    solveFor: {
      P_cr: 'Math.PI * Math.PI * E * I / Math.pow(K * L, 2)',
      E: 'P_cr * Math.pow(K * L, 2) / (Math.PI * Math.PI * I)',
      I: 'P_cr * Math.pow(K * L, 2) / (Math.PI * Math.PI * E)',
      K: 'Math.sqrt(Math.PI * Math.PI * E * I / P_cr) / L',
      L: 'Math.sqrt(Math.PI * Math.PI * E * I / P_cr) / K'
    },
    description: 'Critical load for column buckling.',
    variables: {
      'P_cr': 'Critical buckling load (N)',
      E: 'Young\'s modulus (Pa)',
      I: 'Moment of inertia (m⁴)',
      K: 'Effective length factor',
      L: 'Column length (m)'
    },
    difficulty: 'hard',
    example: { E: 200e9, I: 5e-6, K: 1, L: 3 },
    evaluable: true
  },
  {
    name: 'Power (Rotational)',
    subject: 'Engineering',
    topic: 'Mechanical Engineering',
    displayFormula: 'P = τ × ω',
    formula: 'tau * omega',
    solveFor: {
      P: 'tau * omega',
      tau: 'P / omega',
      omega: 'P / tau'
    },
    description: 'Power from torque and angular velocity.',
    variables: {
      P: 'Power (W)',
      τ: 'Torque (N·m)',
      ω: 'Angular velocity (rad/s)'
    },
    difficulty: 'medium',
    example: { tau: 50, omega: 100 },
    evaluable: true
  },

  // --- CIVIL ENGINEERING ---
  {
    name: 'Hydraulic Head',
    subject: 'Engineering',
    topic: 'Civil Engineering',
    displayFormula: 'h = z + P/(ρg)',
    formula: 'z + P / (rho * 9.8)',
    solveFor: {
      h: 'z + P / (rho * 9.8)',
      z: 'h - P / (rho * 9.8)',
      P: '(h - z) * rho * 9.8',
      rho: 'P / ((h - z) * 9.8)'
    },
    description: 'Total hydraulic head in a fluid.',
    variables: {
      h: 'Hydraulic head (m)',
      z: 'Elevation head (m)',
      P: 'Pressure (Pa)',
      ρ: 'Fluid density (kg/m³)',
      g: 'Gravity (9.8 m/s²)'
    },
    difficulty: 'medium',
    example: { z: 5, P: 10000, rho: 1000 },
    evaluable: true
  },
  {
    name: 'Manning\'s Equation (Open Channel)',
    subject: 'Engineering',
    topic: 'Civil Engineering',
    displayFormula: 'v = (1/n)R^{2/3}S^{1/2}',
    formula: '(1/n) * Math.pow(R, 2/3) * Math.sqrt(S)',
    solveFor: {
      v: '(1/n) * Math.pow(R, 2/3) * Math.sqrt(S)',
      n: 'Math.pow(R, 2/3) * Math.sqrt(S) / v',
      R: 'Math.pow(v * n / Math.sqrt(S), 3/2)',
      S: 'Math.pow(v * n / Math.pow(R, 2/3), 2)'
    },
    description: 'Velocity in an open channel.',
    variables: {
      v: 'Velocity (m/s)',
      n: 'Manning\'s roughness coefficient',
      R: 'Hydraulic radius (m)',
      S: 'Slope of energy grade line'
    },
    difficulty: 'hard',
    example: { n: 0.013, R: 2, S: 0.001 },
    evaluable: true
  },
  {
    name: 'Darcy\'s Law (Flow in Porous Media)',
    subject: 'Engineering',
    topic: 'Civil Engineering',
    displayFormula: 'Q = -kA(dh/dl)',
    formula: '-k * A * (dh/dl)',
    solveFor: {
      Q: '-k * A * (dh/dl)',
      k: '-Q / (A * (dh/dl))',
      A: '-Q / (k * (dh/dl))'
    },
    description: 'Groundwater flow through porous media.',
    variables: {
      Q: 'Flow rate (m³/s)',
      k: 'Hydraulic conductivity (m/s)',
      A: 'Cross-sectional area (m²)',
      'dh/dl': 'Hydraulic gradient'
    },
    difficulty: 'hard',
    example: { k: 1e-4, A: 10, dh_dl: 0.01 },
    evaluable: true
  },

  // --- ELECTRICAL ENGINEERING ---
  {
    name: 'Three-Phase Power',
    subject: 'Engineering',
    topic: 'Electrical Engineering',
    displayFormula: 'P = √3 × V_L × I_L × PF',
    formula: '1.732 * V_L * I_L * PF',
    solveFor: {
      P: '1.732 * V_L * I_L * PF',
      V_L: 'P / (1.732 * I_L * PF)',
      I_L: 'P / (1.732 * V_L * PF)',
      PF: 'P / (1.732 * V_L * I_L)'
    },
    description: 'Power in balanced three-phase system.',
    variables: {
      P: 'Power (W)',
      'V_L': 'Line voltage (V)',
      'I_L': 'Line current (A)',
      PF: 'Power factor'
    },
    difficulty: 'hard',
    example: { V_L: 400, I_L: 10, PF: 0.85 },
    evaluable: true
  },
  {
    name: 'Power Factor Correction (Capacitor)',
    subject: 'Engineering',
    topic: 'Electrical Engineering',
    displayFormula: 'C = P/(ωV²) × (tanθ₁ - tanθ₂)',
    formula: 'P / (omega * V * V) * (Math.tan(theta1) - Math.tan(theta2))',
    solveFor: {
      C: 'P / (omega * V * V) * (Math.tan(theta1) - Math.tan(theta2))',
      P: 'C * omega * V * V / (Math.tan(theta1) - Math.tan(theta2))',
      omega: 'P / (C * V * V * (Math.tan(theta1) - Math.tan(theta2)))',
      V: 'Math.sqrt(P / (C * omega * (Math.tan(theta1) - Math.tan(theta2))))',
      theta1: 'Math.atan(C * omega * V * V / P + Math.tan(theta2))',
      theta2: 'Math.atan(Math.tan(theta1) - C * omega * V * V / P)'
    },
    description: 'Capacitance needed for power factor correction.',
    variables: {
      C: 'Capacitance (F)',
      P: 'Power (W)',
      ω: 'Angular frequency (rad/s)',
      V: 'Voltage (V)',
      'θ₁': 'Initial angle',
      'θ₂': 'Desired angle'
    },
    difficulty: 'hard',
    example: { P: 1000, omega: 314, V: 120, theta1: 0.8, theta2: 0.5 },
    evaluable: true
  },
  {
    name: 'Transformer Turns Ratio',
    subject: 'Engineering',
    topic: 'Electrical Engineering',
    displayFormula: 'V_p/V_s = N_p/N_s = I_s/I_p',
    formula: 'Vp / Vs',
    solveFor: {
      ratio: 'Vp / Vs',
      Vp: 'Vs * ratio',
      Vs: 'Vp / ratio'
    },
    description: 'Relationship between voltage, turns, and current in transformer.',
    variables: {
      'V_p': 'Primary voltage',
      'V_s': 'Secondary voltage',
      'N_p': 'Primary turns',
      'N_s': 'Secondary turns',
      'I_p': 'Primary current',
      'I_s': 'Secondary current'
    },
    difficulty: 'medium',
    example: { Vp: 120, Vs: 12 },
    evaluable: true
  },

  // --- AEROSPACE ENGINEERING ---
  {
    name: 'Reynolds Number',
    subject: 'Engineering',
    topic: 'Aerospace Engineering',
    displayFormula: 'Re = ρvL/μ',
    formula: 'rho * v * L / mu',
    solveFor: {
      Re: 'rho * v * L / mu',
      rho: 'Re * mu / (v * L)',
      v: 'Re * mu / (rho * L)',
      L: 'Re * mu / (rho * v)',
      mu: 'rho * v * L / Re'
    },
    description: 'Ratio of inertial to viscous forces.',
    variables: {
      Re: 'Reynolds number',
      ρ: 'Fluid density (kg/m³)',
      v: 'Velocity (m/s)',
      L: 'Characteristic length (m)',
      μ: 'Dynamic viscosity (Pa·s)'
    },
    difficulty: 'medium',
    example: { rho: 1.225, v: 100, L: 1, mu: 1.8e-5 },
    evaluable: true
  },
  {
    name: 'Lift Coefficient',
    subject: 'Engineering',
    topic: 'Aerospace Engineering',
    displayFormula: 'C_L = L/(½ρv²A)',
    formula: 'L / (0.5 * rho * v * v * A)',
    solveFor: {
      CL: 'L / (0.5 * rho * v * v * A)',
      L: 'CL * 0.5 * rho * v * v * A',
      rho: 'L / (CL * 0.5 * v * v * A)',
      v: 'Math.sqrt(L / (CL * 0.5 * rho * A))',
      A: 'L / (CL * 0.5 * rho * v * v)'
    },
    description: 'Coefficient of lift for an airfoil.',
    variables: {
      'C_L': 'Lift coefficient',
      L: 'Lift force (N)',
      ρ: 'Air density (kg/m³)',
      v: 'Velocity (m/s)',
      A: 'Wing area (m²)'
    },
    difficulty: 'hard',
    example: { L: 5000, rho: 1.225, v: 100, A: 10 },
    evaluable: true
  },
  {
    name: 'Drag Coefficient',
    subject: 'Engineering',
    topic: 'Aerospace Engineering',
    displayFormula: 'C_D = D/(½ρv²A)',
    formula: 'D / (0.5 * rho * v * v * A)',
    solveFor: {
      CD: 'D / (0.5 * rho * v * v * A)',
      D: 'CD * 0.5 * rho * v * v * A',
      rho: 'D / (CD * 0.5 * v * v * A)',
      v: 'Math.sqrt(D / (CD * 0.5 * rho * A))',
      A: 'D / (CD * 0.5 * rho * v * v)'
    },
    description: 'Coefficient of drag for an airfoil.',
    variables: {
      'C_D': 'Drag coefficient',
      D: 'Drag force (N)',
      ρ: 'Air density (kg/m³)',
      v: 'Velocity (m/s)',
      A: 'Wing area (m²)'
    },
    difficulty: 'hard',
    example: { D: 500, rho: 1.225, v: 100, A: 10 },
    evaluable: true
  },
  {
    name: 'Lift-to-Drag Ratio',
    subject: 'Engineering',
    topic: 'Aerospace Engineering',
    displayFormula: 'L/D = C_L/C_D',
    formula: 'CL / CD',
    solveFor: {
      LD: 'CL / CD',
      CL: 'LD * CD',
      CD: 'CL / LD'
    },
    description: 'Efficiency measure of an airfoil.',
    variables: {
      'L/D': 'Lift-to-drag ratio',
      'C_L': 'Lift coefficient',
      'C_D': 'Drag coefficient'
    },
    difficulty: 'medium',
    example: { CL: 1.0, CD: 0.1 },
    evaluable: true
  },
  {
    name: 'Mach Number',
    subject: 'Engineering',
    topic: 'Aerospace Engineering',
    displayFormula: 'M = v/c',
    formula: 'v / c',
    solveFor: {
      M: 'v / c',
      v: 'M * c',
      c: 'v / M'
    },
    description: 'Ratio of speed to speed of sound.',
    variables: {
      M: 'Mach number',
      v: 'Aircraft speed (m/s)',
      c: 'Speed of sound (m/s)'
    },
    difficulty: 'easy',
    example: { v: 343, c: 343 },
    evaluable: true
  },

  // ============================================================
  // COMPUTER SCIENCE - ULTIMATE EXTENDED
  // ============================================================

  // --- ALGORITHMS ---
  {
    name: 'Big O (Constant)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(1)',
    formula: '1',
    solveFor: {},
    description: 'Constant time complexity.',
    variables: {},
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: 'Big O (Logarithmic)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(log n)',
    formula: 'Math.log2(n)',
    solveFor: {
      complexity: 'Math.log2(n)',
      n: 'Math.pow(2, complexity)'
    },
    description: 'Logarithmic time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'medium',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Big O (Linear)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(n)',
    formula: 'n',
    solveFor: {
      complexity: 'n',
      n: 'complexity'
    },
    description: 'Linear time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'easy',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Big O (n log n)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(n log n)',
    formula: 'n * Math.log2(n)',
    solveFor: {
      complexity: 'n * Math.log2(n)'
    },
    description: 'Linearithmic time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'medium',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Big O (Quadratic)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(n²)',
    formula: 'n * n',
    solveFor: {
      complexity: 'n * n',
      n: 'Math.sqrt(complexity)'
    },
    description: 'Quadratic time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'medium',
    example: { n: 10 },
    evaluable: true
  },
  {
    name: 'Big O (Cubic)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(n³)',
    formula: 'n * n * n',
    solveFor: {
      complexity: 'n * n * n',
      n: 'Math.cbrt(complexity)'
    },
    description: 'Cubic time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'hard',
    example: { n: 10 },
    evaluable: true
  },
  {
    name: 'Big O (Exponential)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(2ⁿ)',
    formula: 'Math.pow(2, n)',
    solveFor: {
      complexity: 'Math.pow(2, n)',
      n: 'Math.log2(complexity)'
    },
    description: 'Exponential time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'hard',
    example: { n: 10 },
    evaluable: true
  },
  {
    name: 'Big O (Factorial)',
    subject: 'Computer Science',
    topic: 'Algorithms',
    displayFormula: 'O(n!)',
    formula: 'n <= 1 ? 1 : n * (n-1) * (n-2) * (n-3) * (n-4)',
    solveFor: {},
    description: 'Factorial time complexity.',
    variables: {
      n: 'Input size'
    },
    difficulty: 'hard',
    example: { n: 5 },
    evaluable: true
  },

  // --- DATA STRUCTURES ---
  {
    name: 'Binary Search',
    subject: 'Computer Science',
    topic: 'Data Structures',
    displayFormula: 'T(n) = T(n/2) + O(1)',
    formula: 'Math.log2(n)',
    solveFor: {
      T: 'Math.log2(n)',
      n: 'Math.pow(2, T)'
    },
    description: 'Time complexity of binary search.',
    variables: {
      n: 'Array size'
    },
    difficulty: 'medium',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Hash Table Average Lookup',
    subject: 'Computer Science',
    topic: 'Data Structures',
    displayFormula: 'O(1)',
    formula: '1',
    solveFor: {},
    description: 'Average case time complexity for hash table lookup.',
    variables: {},
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: 'Merge Sort Complexity',
    subject: 'Computer Science',
    topic: 'Data Structures',
    displayFormula: 'T(n) = 2T(n/2) + O(n)',
    formula: 'n * Math.log2(n)',
    solveFor: {
      T: 'n * Math.log2(n)'
    },
    description: 'Time complexity of merge sort.',
    variables: {
      n: 'Array size'
    },
    difficulty: 'medium',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Quick Sort (Average)',
    subject: 'Computer Science',
    topic: 'Data Structures',
    displayFormula: 'O(n log n)',
    formula: 'n * Math.log2(n)',
    solveFor: {
      complexity: 'n * Math.log2(n)'
    },
    description: 'Average case time complexity of quicksort.',
    variables: {
      n: 'Array size'
    },
    difficulty: 'medium',
    example: { n: 100 },
    evaluable: true
  },
  {
    name: 'Quick Sort (Worst)',
    subject: 'Computer Science',
    topic: 'Data Structures',
    displayFormula: 'O(n²)',
    formula: 'n * n',
    solveFor: {
      complexity: 'n * n',
      n: 'Math.sqrt(complexity)'
    },
    description: 'Worst case time complexity of quicksort.',
    variables: {
      n: 'Array size'
    },
    difficulty: 'medium',
    example: { n: 10 },
    evaluable: true
  },

  // --- NETWORKING ---
  {
    name: 'Bandwidth-Delay Product',
    subject: 'Computer Science',
    topic: 'Networking',
    displayFormula: 'BDP = bandwidth × RTT',
    formula: 'bandwidth * RTT',
    solveFor: {
      BDP: 'bandwidth * RTT',
      bandwidth: 'BDP / RTT',
      RTT: 'BDP / bandwidth'
    },
    description: 'Amount of data in transit.',
    variables: {
      BDP: 'Bandwidth-delay product (bits)',
      bandwidth: 'Bandwidth (bits/s)',
      RTT: 'Round-trip time (s)'
    },
    difficulty: 'medium',
    example: { bandwidth: 1e6, RTT: 0.1 },
    evaluable: true
  },
  {
    name: 'Ethernet Frame Size',
    subject: 'Computer Science',
    topic: 'Networking',
    displayFormula: 'MTU = 1500 bytes',
    formula: '1500',
    solveFor: {},
    description: 'Maximum Transmission Unit for Ethernet.',
    variables: {},
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: 'TCP Throughput',
    subject: 'Computer Science',
    topic: 'Networking',
    displayFormula: 'Throughput = window_size/RTT',
    formula: 'window_size / RTT',
    solveFor: {
      Throughput: 'window_size / RTT',
      window_size: 'Throughput * RTT',
      RTT: 'window_size / Throughput'
    },
    description: 'Maximum TCP throughput.',
    variables: {
      'Throughput': 'TCP throughput (bytes/s)',
      'window_size': 'Window size (bytes)',
      RTT: 'Round-trip time (s)'
    },
    difficulty: 'hard',
    example: { window_size: 65535, RTT: 0.1 },
    evaluable: true
  },

  // --- THEORY OF COMPUTATION ---
  {
    name: 'Turing Machine (Halting Problem)',
    subject: 'Computer Science',
    topic: 'Theory of Computation',
    displayFormula: 'HALT = undecidable',
    formula: 'undecidable',
    solveFor: {},
    description: 'The halting problem is undecidable.',
    variables: {},
    difficulty: 'hard',
    example: {},
    evaluable: false
  },
  {
    name: 'P vs NP',
    subject: 'Computer Science',
    topic: 'Theory of Computation',
    displayFormula: 'P = NP? (Unknown)',
    formula: 'unknown',
    solveFor: {},
    description: 'Unresolved problem in computer science.',
    variables: {},
    difficulty: 'hard',
    example: {},
    evaluable: false
  },

  // ============================================================
  // ASTRONOMY - ULTIMATE EXTENDED
  // ============================================================

  // --- CELESTIAL MECHANICS ---
  {
    name: 'Newton\'s Law of Universal Gravitation',
    subject: 'Astronomy',
    topic: 'Celestial Mechanics',
    displayFormula: 'F = Gm₁m₂/r²',
    formula: '6.674e-11 * m1 * m2 / (r * r)',
    solveFor: {
      F: '6.674e-11 * m1 * m2 / (r * r)',
      m1: 'F * r * r / (6.674e-11 * m2)',
      m2: 'F * r * r / (6.674e-11 * m1)',
      r: 'Math.sqrt(6.674e-11 * m1 * m2 / F)'
    },
    description: 'Gravitational force between two objects.',
    variables: {
      F: 'Force (N)',
      G: 'Gravitational constant (6.674×10⁻¹¹)',
      'm₁': 'Mass 1 (kg)',
      'm₂': 'Mass 2 (kg)',
      r: 'Distance between objects (m)'
    },
    difficulty: 'hard',
    example: { m1: 5.972e24, m2: 7.342e22, r: 3.844e8 },
    evaluable: true
  },
  {
    name: 'Kepler\'s Third Law (General)',
    subject: 'Astronomy',
    topic: 'Celestial Mechanics',
    displayFormula: 'P² = 4π²a³/(G(M₁+M₂))',
    formula: '2 * Math.PI * Math.sqrt(a*a*a / (6.674e-11 * (M1 + M2)))',
    solveFor: {
      P: '2 * Math.PI * Math.sqrt(a*a*a / (6.674e-11 * (M1 + M2)))',
      a: 'Math.cbrt(P * P * 6.674e-11 * (M1 + M2) / (4 * Math.PI * Math.PI))',
      M1: '4 * Math.PI * Math.PI * a*a*a / (6.674e-11 * P * P) - M2',
      M2: '4 * Math.PI * Math.PI * a*a*a / (6.674e-11 * P * P) - M1'
    },
    description: 'Orbital period relationship for binary systems.',
    variables: {
      P: 'Orbital period (s)',
      a: 'Semi-major axis (m)',
      G: 'Gravitational constant',
      'M₁': 'Mass of primary (kg)',
      'M₂': 'Mass of secondary (kg)'
    },
    difficulty: 'hard',
    example: { a: 1.496e11, M1: 1.989e30, M2: 0 },
    evaluable: true
  },
  {
    name: 'Escape Velocity (Astronomy)',
    subject: 'Astronomy',
    topic: 'Celestial Mechanics',
    displayFormula: 'v_esc = √(2GM/R)',
    formula: 'Math.sqrt(2 * 6.674e-11 * M / R)',
    solveFor: {
      v_esc: 'Math.sqrt(2 * 6.674e-11 * M / R)',
      M: 'v_esc * v_esc * R / (2 * 6.674e-11)',
      R: '2 * 6.674e-11 * M / (v_esc * v_esc)'
    },
    description: 'Velocity needed to escape a celestial body.',
    variables: {
      'v_esc': 'Escape velocity (m/s)',
      G: 'Gravitational constant',
      M: 'Mass of body (kg)',
      R: 'Radius of body (m)'
    },
    difficulty: 'hard',
    example: { M: 5.972e24, R: 6.371e6 },
    evaluable: true
  },
  {
    name: 'Orbital Velocity (Circular)',
    subject: 'Astronomy',
    topic: 'Celestial Mechanics',
    displayFormula: 'v = √(GM/r)',
    formula: 'Math.sqrt(6.674e-11 * M / r)',
    solveFor: {
      v: 'Math.sqrt(6.674e-11 * M / r)',
      M: 'v * v * r / 6.674e-11',
      r: '6.674e-11 * M / (v * v)'
    },
    description: 'Velocity for a circular orbit.',
    variables: {
      v: 'Orbital velocity (m/s)',
      G: 'Gravitational constant',
      M: 'Mass of central body (kg)',
      r: 'Orbital radius (m)'
    },
    difficulty: 'hard',
    example: { M: 5.972e24, r: 6.371e6 },
    evaluable: true
  },

  // --- STELLAR ASTROPHYSICS ---
  {
    name: 'Stefan-Boltzmann Law',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'L = 4πR²σT⁴',
    formula: '4 * Math.PI * R * R * 5.67e-8 * Math.pow(T, 4)',
    solveFor: {
      L: '4 * Math.PI * R * R * 5.67e-8 * Math.pow(T, 4)',
      R: 'Math.sqrt(L / (4 * Math.PI * 5.67e-8 * Math.pow(T, 4)))',
      T: 'Math.pow(L / (4 * Math.PI * R * R * 5.67e-8), 1/4)'
    },
    description: 'Luminosity of a blackbody.',
    variables: {
      L: 'Luminosity (W)',
      R: 'Radius (m)',
      σ: 'Stefan-Boltzmann constant (5.67×10⁻⁸)',
      T: 'Effective temperature (K)'
    },
    difficulty: 'hard',
    example: { R: 6.96e8, T: 5778 },
    evaluable: true
  },
  {
    name: 'Wien\'s Displacement Law',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'λ_max = b/T',
    formula: '2.898e-3 / T',
    solveFor: {
      lambda_max: '2.898e-3 / T',
      T: '2.898e-3 / lambda_max'
    },
    description: 'Peak wavelength of blackbody radiation.',
    variables: {
      'λ_max': 'Peak wavelength (m)',
      b: 'Wien\'s constant (2.898×10⁻³ m·K)',
      T: 'Temperature (K)'
    },
    difficulty: 'medium',
    example: { T: 5778 },
    evaluable: true
  },
  {
    name: 'Inverse Square Law (Brightness)',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'b = L/(4πd²)',
    formula: 'L / (4 * Math.PI * d * d)',
    solveFor: {
      b: 'L / (4 * Math.PI * d * d)',
      L: 'b * 4 * Math.PI * d * d',
      d: 'Math.sqrt(L / (4 * Math.PI * b))'
    },
    description: 'Apparent brightness vs distance.',
    variables: {
      b: 'Apparent brightness (W/m²)',
      L: 'Luminosity (W)',
      d: 'Distance (m)'
    },
    difficulty: 'medium',
    example: { L: 3.828e26, d: 1.496e11 },
    evaluable: true
  },
  {
    name: 'Parallax Distance',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'd = 1/p (parsecs)',
    formula: '1 / p',
    solveFor: {
      d: '1 / p',
      p: '1 / d'
    },
    description: 'Distance from parallax angle.',
    variables: {
      d: 'Distance (parsecs)',
      p: 'Parallax angle (arcseconds)'
    },
    difficulty: 'easy',
    example: { p: 0.1 },
    evaluable: true
  },
  {
    name: 'Absolute Magnitude',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'M = m - 5log₁₀(d/10)',
    formula: 'm - 5 * Math.log10(d / 10)',
    solveFor: {
      M: 'm - 5 * Math.log10(d / 10)',
      m: 'M + 5 * Math.log10(d / 10)',
      d: '10 * Math.pow(10, (m - M) / 5)'
    },
    description: 'Absolute magnitude from apparent magnitude and distance.',
    variables: {
      M: 'Absolute magnitude',
      m: 'Apparent magnitude',
      d: 'Distance (parsecs)'
    },
    difficulty: 'hard',
    example: { m: 0, d: 10 },
    evaluable: true
  },
  {
    name: 'Distance Modulus',
    subject: 'Astronomy',
    topic: 'Stellar Astrophysics',
    displayFormula: 'm - M = 5log₁₀(d) - 5',
    formula: '5 * Math.log10(d) - 5',
    solveFor: {
      distance_modulus: '5 * Math.log10(d) - 5',
      d: 'Math.pow(10, (distance_modulus + 5) / 5)'
    },
    description: 'Relationship between apparent and absolute magnitude.',
    variables: {
      'm - M': 'Distance modulus',
      m: 'Apparent magnitude',
      M: 'Absolute magnitude',
      d: 'Distance (parsecs)'
    },
    difficulty: 'hard',
    example: { d: 10 },
    evaluable: true
  },

  // --- COSMOLOGY ---
  {
    name: 'Hubble\'s Law',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'v = H₀d',
    formula: '70 * d',
    solveFor: {
      v: '70 * d',
      d: 'v / 70'
    },
    description: 'Recessional velocity of galaxies.',
    variables: {
      v: 'Recessional velocity (km/s)',
      'H₀': 'Hubble constant (70 km/s/Mpc)',
      d: 'Distance (Mpc)'
    },
    difficulty: 'medium',
    example: { d: 100 },
    evaluable: true
  },
  {
    name: 'Hubble Distance',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'd_H = c/H₀',
    formula: '3e5 / 70',
    solveFor: {},
    description: 'Distance at which expansion rate equals speed of light.',
    variables: {
      'd_H': 'Hubble distance (Mpc)',
      c: 'Speed of light (km/s)',
      'H₀': 'Hubble constant (km/s/Mpc)'
    },
    difficulty: 'hard',
    example: {},
    evaluable: true
  },
  {
    name: 'Redshift',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'z = (λ_obs - λ_emit)/λ_emit',
    formula: '(lambda_obs - lambda_emit) / lambda_emit',
    solveFor: {
      z: '(lambda_obs - lambda_emit) / lambda_emit',
      lambda_obs: 'lambda_emit * (1 + z)',
      lambda_emit: 'lambda_obs / (1 + z)'
    },
    description: 'Cosmological redshift.',
    variables: {
      z: 'Redshift',
      'λ_obs': 'Observed wavelength',
      'λ_emit': 'Emitted wavelength'
    },
    difficulty: 'medium',
    example: { lambda_obs: 656.3, lambda_emit: 656.3 },
    evaluable: true
  },
  {
    name: 'Cosmic Microwave Background Temperature',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'T_CMB = 2.725 K',
    formula: '2.725',
    solveFor: {},
    description: 'Temperature of the cosmic microwave background.',
    variables: {},
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: 'Olbers\' Paradox',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'Dark sky = finite universe age',
    formula: 'finite',
    solveFor: {},
    description: 'The night sky is dark because the universe has finite age.',
    variables: {},
    difficulty: 'easy',
    example: {},
    evaluable: false
  },
  {
    name: 'Friedmann Equation',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'H² = (8πG/3)ρ - kc²/a²',
    formula: 'H2',
    solveFor: {},
    description: 'Fundamental equation of cosmology.',
    variables: {
      H: 'Hubble parameter',
      G: 'Gravitational constant',
      ρ: 'Density',
      k: 'Curvature parameter',
      c: 'Speed of light',
      a: 'Scale factor'
    },
    difficulty: 'hard',
    example: {},
    evaluable: false
  },
  {
    name: 'Critical Density',
    subject: 'Astronomy',
    topic: 'Cosmology',
    displayFormula: 'ρ_c = 3H²/(8πG)',
    formula: '3 * H * H / (8 * Math.PI * 6.674e-11)',
    solveFor: {
      rho_c: '3 * H * H / (8 * Math.PI * 6.674e-11)',
      H: 'Math.sqrt(rho_c * 8 * Math.PI * 6.674e-11 / 3)'
    },
    description: 'Density for flat universe.',
    variables: {
      'ρ_c': 'Critical density (kg/m³)',
      H: 'Hubble parameter (s⁻¹)',
      G: 'Gravitational constant'
    },
    difficulty: 'hard',
    example: { H: 2.27e-18 },
    evaluable: true
  },

  // --- SIMULTANEOUS EQUATIONS (NEW SECTION) ---
  {
    name: 'Simultaneous Equations (2 Variables - Elimination)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'a₁x + b₁y = c₁, a₂x + b₂y = c₂',
    formula: '(c1*b2 - b1*c2) / (a1*b2 - b1*a2)',
    solveFor: {
      x: '(c1*b2 - b1*c2) / (a1*b2 - b1*a2)',
      y: '(a1*c2 - c1*a2) / (a1*b2 - b1*a2)',
      a1: '(c1*b2 - b1*c2 + b1*a2*x) / (x*b2)',
      a2: '(a1*b2*x - c1*b2 + b1*c2) / (b2*x)',
      b1: '(c1*b2 - a1*b2*x + b1*a2*x) / (c2)',
      b2: '(a1*b2*x - c1*b2 + b1*c2) / (a1*x)',
      c1: 'x * (a1*b2 - b1*a2) / b2 + b1*c2 / b2',
      c2: 'y * (a1*b2 - b1*a2) / a2 + c1*a2 / a2'
    },
    description: 'Solve for x in a system of two linear equations using elimination method.',
    variables: {
      'a₁': 'Coefficient of x in equation 1',
      'b₁': 'Coefficient of y in equation 1',
      'c₁': 'Constant term in equation 1',
      'a₂': 'Coefficient of x in equation 2',
      'b₂': 'Coefficient of y in equation 2',
      'c₂': 'Constant term in equation 2',
      x: 'Solution for x',
      y: 'Solution for y'
    },
    difficulty: 'medium',
    example: { a1: 2, b1: 3, c1: 8, a2: 3, b2: 2, c2: 7 },
    evaluable: true,
    preCalculate: (vars) => {
      const det = vars.a1 * vars.b2 - vars.b1 * vars.a2;
      if (det === 0) return { ...vars, x: 'No unique solution', y: 'No unique solution' };
      const x = (vars.c1 * vars.b2 - vars.b1 * vars.c2) / det;
      const y = (vars.a1 * vars.c2 - vars.c1 * vars.a2) / det;
      return { ...vars, x, y };
    }
  },
  {
    name: 'Simultaneous Equations (2 Variables - Substitution)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'y = mx + b, ax + by = c',
    formula: '(c - b2*b1) / (a2 + b2*m)',
    solveFor: {
      x: '(c2 - b2*b) / (a2 + b2*m)',
      y: 'm * ((c2 - b2*b) / (a2 + b2*m)) + b',
      m: '((c2 - a2*x) / b2 - b) / x',
      b: '(c2 - a2*x) / b2 - m*x',
      a2: '(c2 - b2*y) / x',
      b2: '(c2 - a2*x) / y',
      c2: 'a2*x + b2*y'
    },
    description: 'Solve using substitution method where first equation is y = mx + b.',
    variables: {
      m: 'Slope from first equation',
      b: 'Y-intercept from first equation',
      'a₂': 'Coefficient of x in equation 2',
      'b₂': 'Coefficient of y in equation 2',
      'c₂': 'Constant term in equation 2',
      x: 'Solution for x',
      y: 'Solution for y'
    },
    difficulty: 'medium',
    example: { m: 2, b: 3, a2: 3, b2: 2, c2: 7 },
    evaluable: true,
    preCalculate: (vars) => {
      const denom = vars.a2 + vars.b2 * vars.m;
      if (denom === 0) return { ...vars, x: 'No unique solution', y: 'No unique solution' };
      const x = (vars.c2 - vars.b2 * vars.b) / denom;
      const y = vars.m * x + vars.b;
      return { ...vars, x, y };
    }
  },
  {
    name: 'Simultaneous Equations (3 Variables)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'a₁x+b₁y+c₁z=d₁, a₂x+b₂y+c₂z=d₂, a₃x+b₃y+c₃z=d₃',
    formula: 'Cramer\'s Rule: x = det(A₁)/det(A), y = det(A₂)/det(A), z = det(A₃)/det(A)',
    solveFor: {},
    description: 'Solve a 3x3 system using Cramer\'s Rule.',
    variables: {
      'a₁,b₁,c₁': 'Coefficients in equation 1',
      'd₁': 'Constant in equation 1',
      'a₂,b₂,c₂': 'Coefficients in equation 2',
      'd₂': 'Constant in equation 2',
      'a₃,b₃,c₃': 'Coefficients in equation 3',
      'd₃': 'Constant in equation 3'
    },
    difficulty: 'hard',
    example: { a1: 1, b1: 2, c1: 3, d1: 14, a2: 2, b2: 3, c2: 4, d2: 20, a3: 3, b3: 4, c3: 5, d3: 26 },
    evaluable: false
  },
  {
    name: 'Consistency Check (Simultaneous Equations)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'det ≠ 0 → unique solution',
    formula: '(a1*b2 - b1*a2)',
    solveFor: {
      det: '(a1*b2 - b1*a2)'
    },
    description: 'Check if system has a unique solution by calculating determinant.',
    variables: {
      'a₁': 'Coefficient of x in equation 1',
      'b₁': 'Coefficient of y in equation 1',
      'a₂': 'Coefficient of x in equation 2',
      'b₂': 'Coefficient of y in equation 2',
      det: 'Determinant'
    },
    difficulty: 'medium',
    example: { a1: 2, b1: 3, a2: 4, b2: 6 },
    evaluable: true,
    preCalculate: (vars) => {
      const det = vars.a1 * vars.b2 - vars.b1 * vars.a2;
      const status = det === 0 ? 'No unique solution' : 'Unique solution exists';
      return { ...vars, det, status };
    }
  },
  {
    name: 'Simultaneous Equations (Graphing Method)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'y = m₁x + b₁, y = m₂x + b₂',
    formula: '(b2 - b1) / (m1 - m2)',
    solveFor: {
      x: '(b2 - b1) / (m1 - m2)',
      y: 'm1 * ((b2 - b1) / (m1 - m2)) + b1',
      m1: '(y - b1) / x',
      m2: '(y - b2) / x',
      b1: 'y - m1*x',
      b2: 'y - m2*x'
    },
    description: 'Find intersection point of two lines by graphing.',
    variables: {
      'm₁': 'Slope of line 1',
      'b₁': 'Y-intercept of line 1',
      'm₂': 'Slope of line 2',
      'b₂': 'Y-intercept of line 2',
      x: 'X-coordinate of intersection',
      y: 'Y-coordinate of intersection'
    },
    difficulty: 'medium',
    example: { m1: 2, b1: 3, m2: -1, b2: 6 },
    evaluable: true,
    preCalculate: (vars) => {
      const denom = vars.m1 - vars.m2;
      if (denom === 0) return { ...vars, x: 'Parallel lines - no intersection', y: 'No unique solution' };
      const x = (vars.b2 - vars.b1) / denom;
      const y = vars.m1 * x + vars.b1;
      return { ...vars, x, y };
    }
  },
  {
    name: 'Simultaneous Equations (Inconsistent Systems)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
    formula: '(a1/a2) === (b1/b2) && (b1/b2) !== (c1/c2)',
    solveFor: {},
    description: 'Check if system has no solution (parallel lines).',
    variables: {
      'a₁': 'Coefficient of x in equation 1',
      'b₁': 'Coefficient of y in equation 1',
      'c₁': 'Constant in equation 1',
      'a₂': 'Coefficient of x in equation 2',
      'b₂': 'Coefficient of y in equation 2',
      'c₂': 'Constant in equation 2'
    },
    difficulty: 'medium',
    example: { a1: 2, b1: 3, c1: 8, a2: 4, b2: 6, c2: 10 },
    evaluable: true,
    preCalculate: (vars) => {
      const ratio1 = vars.a1 / vars.a2;
      const ratio2 = vars.b1 / vars.b2;
      const ratio3 = vars.c1 / vars.c2;
      const inconsistent = ratio1 === ratio2 && ratio2 !== ratio3;
      return { ...vars, inconsistent, ratio1, ratio2, ratio3 };
    }
  },
  {
    name: 'Simultaneous Equations (Dependent Systems)',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'a₁/a₂ = b₁/b₂ = c₁/c₂',
    formula: '(a1/a2) === (b1/b2) && (b1/b2) === (c1/c2)',
    solveFor: {},
    description: 'Check if system has infinite solutions (coincident lines).',
    variables: {
      'a₁': 'Coefficient of x in equation 1',
      'b₁': 'Coefficient of y in equation 1',
      'c₁': 'Constant in equation 1',
      'a₂': 'Coefficient of x in equation 2',
      'b₂': 'Coefficient of y in equation 2',
      'c₂': 'Constant in equation 2'
    },
    difficulty: 'medium',
    example: { a1: 2, b1: 3, c1: 8, a2: 4, b2: 6, c2: 16 },
    evaluable: true,
    preCalculate: (vars) => {
      const ratio1 = vars.a1 / vars.a2;
      const ratio2 = vars.b1 / vars.b2;
      const ratio3 = vars.c1 / vars.c2;
      const dependent = ratio1 === ratio2 && ratio2 === ratio3;
      return { ...vars, dependent, ratio1, ratio2, ratio3 };
    }
  },
  {
    name: 'Simultaneous Equations - Word Problem',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: '2x + 3y = 14, 4x - y = 6',
    formula: '(c1*b2 - b1*c2) / (a1*b2 - b1*a2)',
    solveFor: {
      x: '(c1*b2 - b1*c2) / (a1*b2 - b1*a2)',
      y: '(a1*c2 - c1*a2) / (a1*b2 - b1*a2)'
    },
    description: 'Solve a real-world simultaneous equation problem.',
    variables: {
      x: 'First unknown',
      y: 'Second unknown',
      'a₁,b₁,c₁': 'Coefficients from first condition',
      'a₂,b₂,c₂': 'Coefficients from second condition'
    },
    difficulty: 'medium',
    example: { a1: 2, b1: 3, c1: 14, a2: 4, b2: -1, c2: 6 },
    evaluable: true,
    preCalculate: (vars) => {
      const det = vars.a1 * vars.b2 - vars.b1 * vars.a2;
      if (det === 0) return { ...vars, x: 'No unique solution', y: 'No unique solution' };
      const x = (vars.c1 * vars.b2 - vars.b1 * vars.c2) / det;
      const y = (vars.a1 * vars.c2 - vars.c1 * vars.a2) / det;
      return { ...vars, x, y };
    }
  },
  {
    name: 'Simultaneous Equations - Matrix Form',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'AX = B',
    formula: 'X = A⁻¹B',
    solveFor: {},
    description: 'Representation of simultaneous equations as matrix equation.',
    variables: {
      A: 'Coefficient matrix',
      X: 'Variable vector [x, y]',
      B: 'Constant vector [c₁, c₂]',
      'A⁻¹': 'Inverse of matrix A'
    },
    difficulty: 'hard',
    example: { a1: 2, b1: 3, a2: 4, b2: 5 },
    evaluable: false
  },
  {
    name: 'Gaussian Elimination',
    subject: 'Mathematics',
    topic: 'Algebra',
    displayFormula: 'Row operations to solve AX = B',
    formula: 'Elimination process',
    solveFor: {},
    description: 'Systematic method to solve linear equations.',
    variables: {
      'Row₁': 'First equation row',
      'Row₂': 'Second equation row',
      'Pivot': 'Leading coefficient'
    },
    difficulty: 'hard',
    example: { a1: 2, b1: 3, c1: 8, a2: 3, b2: 2, c2: 7 },
    evaluable: false
  }
];
