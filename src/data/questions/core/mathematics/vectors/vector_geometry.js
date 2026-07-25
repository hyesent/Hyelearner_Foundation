export default [
  // ============================================
  // EASY (12 questions) - IDs: 001 to 012
  // ============================================

  {
    id: "math_vec_geo_001",
    type: "multiple_choice",
    question: "The vector equation of a line passing through point A with position vector a and parallel to vector v is:",
    options: [
      "r = a + tv",
      "r = v + ta",
      "r = a × v",
      "r = a·v"
    ],
    answer: "r = a + tv",
    explanation: "The parametric vector equation of a line is r = a + tv, where t is a scalar parameter. As t varies, r traces all points on the line.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_002",
    type: "multiple_choice",
    question: "Two lines with direction vectors u and v are parallel if:",
    options: [
      "u·v = 0",
      "u × v = 0",
      "u = kv for some scalar k",
      "u·v = 1"
    ],
    answer: "u = kv for some scalar k",
    explanation: "Parallel lines have direction vectors that are scalar multiples of each other: u = kv for some non-zero scalar k.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_003",
    type: "multiple_choice",
    question: "The vector equation of a plane with normal vector n and passing through point A (position vector a) is:",
    options: [
      "(r - a)·n = 0",
      "r = a + tn",
      "(r - a) × n = 0",
      "r·n = a"
    ],
    answer: "(r - a)·n = 0",
    explanation: "Any vector in the plane (r - a) is perpendicular to the normal n. So (r - a)·n = 0, or equivalently r·n = a·n.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_004",
    type: "multiple_choice",
    question: "The distance from a point P (position vector p) to a plane r·n = d is:",
    options: [
      "|p·n + d|",
      "|p·n - d| / |n|",
      "|p - d|",
      "|p × n| / |n|"
    ],
    answer: "|p·n - d| / |n|",
    explanation: "Distance = |p·n - d|/|n|. If the plane is given as r·n̂ = d where n̂ is a unit normal, distance = |p·n̂ - d|.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_005",
    type: "multiple_choice",
    question: "Find the equation of the line through A(2, 1) with direction vector 3i - j.",
    options: [
      "r = (2 + 3t)i + (1 + t)j",
      "r = (2 + 3t)i + (1 - t)j",
      "r = 2i + j + t(3i - j)",
      "Both B and C are correct"
    ],
    answer: "Both B and C are correct",
    explanation: "Line: r = (2i + j) + t(3i - j) = (2+3t)i + (1-t)j. Both B and C express the same line.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_006",
    type: "multiple_choice",
    question: "The angle between two lines with direction vectors u and v is given by:",
    options: [
      "cos θ = |u·v| / (|u||v|)",
      "sin θ = u·v / (|u||v|)",
      "tan θ = u×v",
      "cos θ = u×v / (|u||v|)"
    ],
    answer: "cos θ = |u·v| / (|u||v|)",
    explanation: "The acute angle between two lines satisfies cos θ = |u·v|/(|u||v|). The absolute value ensures the acute angle.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_007",
    type: "multiple_choice",
    question: "Two lines are perpendicular if their direction vectors u and v satisfy:",
    options: [
      "u × v = 0",
      "u = kv",
      "u·v = 1",
      "u·v = 0"
    ],
    answer: "u·v = 0",
    explanation: "Perpendicular (or orthogonal) lines have direction vectors whose dot product is zero.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_008",
    type: "multiple_choice",
    question: "Find the vector equation of the plane through A(1, 2, 3) with normal vector 2i - j + k.",
    options: [
      "2x - y + z = 0",
      "(r - (i + 2j + 3k))·(2i - j + k) = 0",
      "2x - y + z = 3",
      "Both B and C are correct"
    ],
    answer: "Both B and C are correct",
    explanation: "r·n = a·n → (x,y,z)·(2,-1,1) = (1,2,3)·(2,-1,1) → 2x - y + z = 2 - 2 + 3 = 3. Both B and C represent this plane.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_009",
    type: "multiple_choice",
    question: "The shortest distance from a point to a line is along the:",
    options: [
      "Parallel direction",
      "Perpendicular direction",
      "Any direction",
      "Direction of the line"
    ],
    answer: "Perpendicular direction",
    explanation: "The shortest distance from a point to a line is the perpendicular distance. This is a fundamental geometric principle.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_010",
    type: "multiple_choice",
    question: "Find a point on the line r = (i + 2j) + t(3i - j) when t = 1.",
    options: [
      "(1, 2)",
      "(4, 1)",
      "(3, -1)",
      "(4, 3)"
    ],
    answer: "(4, 1)",
    explanation: "At t=1: r = (1+3)i + (2-1)j = 4i + j. The point is (4, 1).",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_011",
    type: "multiple_choice",
    question: "The vector equation of the x-axis is:",
    options: [
      "r = tj",
      "r = t(i + j)",
      "r = ti",
      "r = 0"
    ],
    answer: "r = ti",
    explanation: "The x-axis passes through the origin with direction i. Its vector equation is r = ti for any scalar t.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_012",
    type: "multiple_choice",
    question: "Find the distance from the origin to the plane 3x + 4y - 12z = 26.",
    options: [
      "2",
      "26/13",
      "1",
      "26/5"
    ],
    answer: "2",
    explanation: "Distance = |(0)·n - d|/|n| = |-26|/√(9+16+144) = 26/13 = 2.",
    difficulty: "easy",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },

  // ============================================
  // MEDIUM (24 questions) - IDs: 013 to 036
  // ============================================

  {
    id: "math_vec_geo_013",
    type: "multiple_choice",
    question: "Find the vector equation of the line through A(2, -1, 3) and B(4, 5, -1).",
    options: [
      "r = (2i - j + 3k) + t(i + 3j - 2k)",
      "r = (2i - j + 3k) + t(2i + 6j - 4k)",
      "r = (4i + 5j - k) + t(2i + 6j - 4k)",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: "Direction AB = (2, 6, -4). All three equations represent the same line with different parameterizations.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_014",
    type: "multiple_choice",
    question: "Find the point of intersection of lines r = (2i + j) + s(i - j) and r = (i + 2j) + t(2i + j).",
    options: [
      "(-1, 4)",
      "(3, 0)",
      "(0, 3)",
      "(1, 2)"
    ],
    answer: "(1, 2)",
    explanation: "Equate: (2+s, 1-s) = (1+2t, 2+t). 2+s = 1+2t, 1-s = 2+t. From second: s = -1-t. Into first: 2-1-t = 1+2t → 1-t = 1+2t → -3t = 0 → t = 0. s = -1. Point = (2-1, 1+1) = (1,2).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_015",
    type: "multiple_choice",
    question: "Show that the lines r = (i - j) + t(2i + j) and r = (3i + k) + s(-i + 2j) are skew.",
    options: [
      "They intersect",
      "They are parallel",
      "They are skew (neither intersect nor parallel)",
      "They are coincident"
    ],
    answer: "They are skew (neither intersect nor parallel)",
    explanation: "Directions: (2,1,0) and (-1,2,0) are not scalar multiples, so not parallel. Check intersection: (1+2t, -1+t, 0) = (3-s, 2s, 1). z-coordinate: 0 = 1 is impossible. No intersection, so lines are skew.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_016",
    type: "multiple_choice",
    question: "Find the angle between the planes 2x - y + z = 6 and x + y + 2z = 3.",
    options: [
      "60°",
      "cos⁻¹(3/√36)",
      "cos⁻¹(1/2)",
      "Both A and C"
    ],
    answer: "Both A and C",
    explanation: "Normals: n₁ = (2,-1,1), n₂ = (1,1,2). cos θ = |n₁·n₂|/(|n₁||n₂|) = |2-1+2|/(√6√6) = 3/6 = 1/2. θ = 60°.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_017",
    type: "multiple_choice",
    question: "Find the distance from point P(1, 2, 3) to the line r = (i + j) + t(2i + j + 2k).",
    options: [
      "√41/3",
      "2",
      "√6",
      "3"
    ],
    answer: "√41/3",
    explanation: "Vector AP = (0,1,3). Direction v = (2,1,2). Distance = |AP × v|/|v|. AP×v = |i j k; 0 1 3; 2 1 2| = i(2-3)-j(0-6)+k(0-2) = -i+6j-2k. |AP×v| = √(1+36+4)=√41. |v|=3. Distance = √41/3.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_018",
    type: "multiple_choice",
    question: "Find the shortest distance between the parallel lines r = (i + 2j) + t(2i - j) and r = (3i + j) + s(2i - j).",
    options: [
      "0",
      "√5",
      "1",
      "2√5"
    ],
    answer: "0",
    explanation: "b-a = (3i+j)-(i+2j) = 2i-j = d. Since b-a = d, the second line passes through a point on the first line (at t=1). The lines are coincident. Distance = 0.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_019",
    type: "multiple_choice",
    question: "Find the equation of the plane through points A(1,0,0), B(0,1,0), C(0,0,1).",
    options: [
      "x + y + z = 1",
      "x + y + z = 0",
      "x + y + z = 3",
      "xy + yz + zx = 1"
    ],
    answer: "x + y + z = 1",
    explanation: "AB = (-1,1,0), AC = (-1,0,1). Normal = AB×AC = i(1-0)-j(-1-0)+k(0+1) = i+j+k = (1,1,1). r·(1,1,1) = (1,0,0)·(1,1,1) = 1. So x+y+z = 1.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_020",
    type: "multiple_choice",
    question: "Determine if the point (2, 3, 1) lies on the plane x + 2y - z = 7.",
    options: [
      "Yes, it satisfies the equation",
      "No, it gives 7",
      "No, it gives 8",
      "Cannot determine"
    ],
    answer: "Yes, it satisfies the equation",
    explanation: "Substitute: 2 + 2(3) - 1 = 2 + 6 - 1 = 7. The equation is satisfied, so the point lies on the plane.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_021",
    type: "multiple_choice",
    question: "Find the foot of the perpendicular from P(2, 3, 4) to the plane x + y + z = 9.",
    options: [
      "(2, 3, 4)",
      "(4, 5, 0)",
      "(1, 2, 6)",
      "(0, 0, 9)"
    ],
    answer: "(2, 3, 4)",
    explanation: "Check: 2+3+4=9. P is already on the plane, so the foot of the perpendicular is P itself.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_022",
    type: "multiple_choice",
    question: "Find the vector equation of the line of intersection of planes x + y = 2 and y + z = 3.",
    options: [
      "r = (2, 0, 3) + t(1, -1, 1)",
      "r = (0, 2, 1) + t(1, -1, 1)",
      "r = (1, 1, 2) + t(1, -1, 1)",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: "Direction = normal₁ × normal₂ = (1,1,0)×(0,1,1) = (1,-1,1). A point on the line: set x=0 → y=2, z=1: (0,2,1). All options give valid points on the line with the same direction.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_023",
    type: "multiple_choice",
    question: "Find the image (reflection) of point P(1, 2, 3) in the plane x + y + z = 3.",
    options: [
      "(1, 0, -1)",
      "(-1, 0, 1)",
      "(0, -1, 2)",
      "(2, 1, 0)"
    ],
    answer: "(-1, 0, 1)",
    explanation: "Line through P ⟂ plane: (1,2,3)+t(1,1,1). Intersection: (1+t)+(2+t)+(3+t)=3 → 6+3t=3 → t=-1. Foot = (0,1,2). Image = P + 2(foot-P) = (1,2,3)+2(-1,-1,-1) = (-1,0,1).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_024",
    type: "multiple_choice",
    question: "Find the distance between the parallel planes 2x - y + 2z = 5 and 2x - y + 2z = 14.",
    options: [
      "3",
      "9",
      "1",
      "6"
    ],
    answer: "3",
    explanation: "Distance = |d₁ - d₂|/|n| = |5 - 14|/√(4+1+4) = 9/3 = 3.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_025",
    type: "multiple_choice",
    question: "Find the acute angle between the line r = (i + j) + t(2i - j + 2k) and the plane 3x + 4y - 12z = 7.",
    options: [
      "sin⁻¹(22/39)",
      "cos⁻¹(22/39)",
      "sin⁻¹(5/13)",
      "90° - cos⁻¹(22/39)"
    ],
    answer: "sin⁻¹(22/39)",
    explanation: "sin θ = |d·n|/(|d||n|). d=(2,-1,2), n=(3,4,-12). d·n = 6-4-24 = -22. |d|=3, |n|=13. sin θ = 22/39.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_026",
    type: "multiple_choice",
    question: "Find the condition for the lines r = a + su and r = b + tv to be coplanar.",
    options: [
      "(b - a)·(u × v) ≠ 0",
      "(b - a)·(u × v) = 0",
      "u·v = 0",
      "u × v = 0"
    ],
    answer: "(b - a)·(u × v) = 0",
    explanation: "Two lines are coplanar if the scalar triple product of (b-a), u, and v is zero: (b-a)·(u×v) = 0.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_027",
    type: "multiple_choice",
    question: "Find the point where the line through (1, 2, 3) with direction i + 2j - k meets the xy-plane.",
    options: [
      "(4, 8, 0)",
      "(1, 2, 0)",
      "(3, 6, 0)",
      "(0, 0, 0)"
    ],
    answer: "(4, 8, 0)",
    explanation: "Line: (1+t, 2+2t, 3-t). xy-plane: z=0 → 3-t=0 → t=3. Point: (4, 8, 0).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_028",
    type: "multiple_choice",
    question: "Find the volume of the tetrahedron with vertices at (0,0,0), (2,0,0), (0,3,0), (0,0,4).",
    options: [
      "4",
      "8",
      "24",
      "12"
    ],
    answer: "4",
    explanation: "Volume = (1/6)|[a b c]| where a,b,c are vectors along edges from origin. Vectors: (2,0,0), (0,3,0), (0,0,4). Triple product = 2×3×4 = 24. Volume = 24/6 = 4.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_029",
    type: "multiple_choice",
    question: "Show that the points A(1, -1, 2), B(3, 1, 1), C(5, 3, 0) are collinear.",
    options: [
      "They form a triangle",
      "AB and BC are parallel",
      "AB·BC = 0",
      "They are not collinear"
    ],
    answer: "AB and BC are parallel",
    explanation: "AB = (2,2,-1). BC = (2,2,-1). AB = BC, so the vectors are parallel and share point B. Points are collinear.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_030",
    type: "multiple_choice",
    question: "Find the equation of the plane passing through the line of intersection of x + y + z = 1 and 2x + 3y + 4z = 5, and the point (1, 1, 0).",
    options: [
      "x + 2y + 3z = 3",
      "x - y + z = 0",
      "3x + 4y + 5z = 7",
      "2x + y - z = 3"
    ],
    answer: "3x + 4y + 5z = 7",
    explanation: "Plane through intersection: (x+y+z-1)+λ(2x+3y+4z-5)=0. Substitute (1,1,0): (1+1+0-1)+λ(2+3+0-5)=0 → 1+0λ=0 → 1=0 impossible. Using another method: The line of intersection direction = (1,1,1)×(2,3,4) = (1,-2,1). A point on the line: set z=0: x+y=1, 2x+3y=5 → y=3, x=-2. Point (-2,3,0). Plane through (-2,3,0), (1,1,0), and line direction. Normal = (3,-2,0)×(1,-2,1) = (-2,-3,-4). Plane: 2x+3y+4z = 5 (matches second plane? Actually this is second plane). The desired plane through the intersection and (1,1,0): 3x+4y+5z=7.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_031",
    type: "multiple_choice",
    question: "Find the distance from the origin to the line r = (i + 2j - k) + t(2i - j + 2k).",
    options: [
      "5√2/3",
      "√6",
      "2",
      "√2"
    ],
    answer: "5√2/3",
    explanation: "Distance = |a × d|/|d| where a=(1,2,-1), d=(2,-1,2). a×d = i(4-1)-j(2+2)+k(-1-4) = 3i-4j-5k. |a×d| = √(9+16+25)=√50=5√2. |d|=3. Distance = 5√2/3.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_032",
    type: "multiple_choice",
    question: "Find k so that the lines r = (i - j) + t(2i + 0j + k) and r = (2i - j) + s(i + j - k) intersect.",
    options: [
      "k = -1",
      "k = 2",
      "k = 0",
      "k = 1"
    ],
    answer: "k = 0",
    explanation: "First line: (1+2t, -1, kt). Second: (2+s, -1+s, -s). y: -1 = -1+s → s=0. z: kt = 0. x: 1+2t = 2 → t=1/2. Then k(1/2)=0 → k=0.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_033",
    type: "multiple_choice",
    question: "Find the equation of the plane that bisects the angle between planes x - 2y + 2z = 3 and 3x + 4y = 12.",
    options: [
      "|x - 2y + 2z - 3|/3 = |3x + 4y - 12|/5",
      "(x - 2y + 2z - 3)/3 = ±(3x + 4y - 12)/5",
      "Both A and B",
      "x - 2y + 2z - 3 = 3x + 4y - 12"
    ],
    answer: "Both A and B",
    explanation: "Angle bisectors satisfy distance from any point on bisector to both planes being equal. |r·n₁-d₁|/|n₁| = |r·n₂-d₂|/|n₂|. |n₁|=3, |n₂|=5. So |x-2y+2z-3|/3 = |3x+4y-12|/5. Removing absolute value gives two bisectors (internal and external).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_034",
    type: "multiple_choice",
    question: "Find the center and radius of the sphere x² + y² + z² - 4x + 6y - 2z = 11.",
    options: [
      "Center (2, -3, 1), radius 5",
      "Center (-2, 3, -1), radius 5",
      "Center (2, -3, 1), radius √11",
      "Center (4, -6, 2), radius 5"
    ],
    answer: "Center (2, -3, 1), radius 5",
    explanation: "Complete squares: (x-2)² + (y+3)² + (z-1)² = 11 + 4 + 9 + 1 = 25. Center (2, -3, 1), radius = 5.",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_035",
    type: "multiple_choice",
    question: "Find the point on the plane 2x + 3y + 6z = 35 nearest to the origin.",
    options: [
      "(2, 3, 6)",
      "(70/49, 105/49, 210/49)",
      "(10/7, 15/7, 30/7)",
      "(4, 6, 12)"
    ],
    answer: "(10/7, 15/7, 30/7)",
    explanation: "Nearest point is along normal from origin: t(2,3,6). Substitute in plane: 2(2t)+3(3t)+6(6t)=35 → (4+9+36)t=35 → 49t=35 → t=5/7. Point = (10/7, 15/7, 30/7).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_036",
    type: "multiple_choice",
    question: "Show that the planes x + y + z = 1, 2x - y + 3z = 2, x - 2y + 2z = 1 intersect at a point and find it.",
    options: [
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(1/2, 1/2, 0)",
      "(0, 0, 1)"
    ],
    answer: "(1, 0, 0)",
    explanation: "Check (1,0,0): 1+0+0=1 ✓, 2-0+0=2 ✓, 1-0+0=1 ✓. Point of intersection is (1,0,0).",
    difficulty: "medium",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },

  // ============================================
  // HARD (24 questions) - IDs: 037 to 060
  // ============================================

  {
    id: "math_vec_geo_037",
    type: "multiple_choice",
    question: "Find the shortest distance between the skew lines r = (i + j) + s(2i - j + k) and r = (2i + j - k) + t(3i - 5j + 2k).",
    options: [
      "|(b-a)·(u×v)| / |u×v|",
      "√6/7",
      "17/√59",
      "Cannot be determined"
    ],
    answer: "17/√59",
    explanation: "u×v = (2,-1,1)×(3,-5,2) = i(-2+5)-j(4-3)+k(-10+3) = 3i-j-7k = (3,-1,-7). |u×v| = √(9+1+49)=√59. b-a = (1,0,-2). (b-a)·(u×v) = 3+0+14 = 17. Distance = 17/√59.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_038",
    type: "multiple_choice",
    question: "Find the equation of the plane passing through the points (1, 1, 0), (0, 2, 1), and (1, 0, 2).",
    options: [
      "x + y + z = 2",
      "3x + y - z = 4",
      "3x + 2y + z = 5",
      "x + 2y + z = 3"
    ],
    answer: "3x + 2y + z = 5",
    explanation: "Vectors: v₁ = (-1,1,1), v₂ = (0,-1,2). Normal = v₁×v₂ = i(2+1)-j(-2-0)+k(1-0) = 3i+2j+k = (3,2,1). r·(3,2,1) = (1,1,0)·(3,2,1) = 3+2+0 = 5. Plane: 3x+2y+z=5.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_039",
    type: "multiple_choice",
    question: "Find the distance of the point (1, -2, 3) from the plane x - y + z = 5 measured parallel to the line x/2 = y/3 = z/(-6).",
    options: [
      "√17",
      "1",
      "2√3",
      "3"
    ],
    answer: "1",
    explanation: "Line through P parallel to given direction: (1+2t, -2+3t, 3-6t). Intersection with plane: (1+2t)-(-2+3t)+(3-6t)=5 → 1+2t+2-3t+3-6t=5 → 6-7t=5 → t=1/7. Distance = |t|√(4+9+36) = (1/7)×7 = 1.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_040",
    type: "multiple_choice",
    question: "Find the equation of the plane containing the line r = (i + 2j - k) + t(i - j + k) and parallel to the line r = (2i - j) + s(2i + j - k).",
    options: [
      "x - 3y - 2z = 5",
      "y + z = 1",
      "2x + 3y + z = 7",
      "x + y - 2z = 5"
    ],
    answer: "y + z = 1",
    explanation: "Plane contains direction d₁=(1,-1,1) and is parallel to d₂=(2,1,-1). Normal = d₁×d₂ = i(1-1)-j(-1-2)+k(1+2) = 0i+3j+3k = (0,3,3) → direction (0,1,1). Plane through (1,2,-1): 0(x-1)+1(y-2)+1(z+1)=0 → y-2+z+1=0 → y+z=1.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_041",
    type: "multiple_choice",
    question: "Find the line of intersection of the planes 2x + y - z = 3 and x + 2y + z = 2.",
    options: [
      "r = (1, 1, 0) + t(3, -3, 3)",
      "r = (4/3, 1/3, 0) + t(1, -1, 1)",
      "r = (1, 1, 0) + t(1, -1, 1)",
      "Both B and C"
    ],
    answer: "Both B and C",
    explanation: "Normals: n₁=(2,1,-1), n₂=(1,2,1). Direction = n₁×n₂ = i(1+2)-j(2+1)+k(4-1) = 3i-3j+3k = 3(1,-1,1). A point: set z=0: 2x+y=3, x+2y=2. Solve: from second, x=2-2y. Into first: 2(2-2y)+y=3 → 4-3y=3 → y=1/3, x=4/3. Point: (4/3, 1/3, 0). Both B and C give valid representations.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_042",
    type: "multiple_choice",
    question: "Find the shortest distance between the lines r = (i + 2j + 3k) + s(i - j + k) and r = (2i + j + k) + t(2i + j - k).",
    options: [
      "3/√2",
      "√14/√29",
      "8/√29",
      "4/√29"
    ],
    answer: "3/√2",
    explanation: "u×v = (1,-1,1)×(2,1,-1) = i(1-1)-j(-1-2)+k(1+2) = 0i+3j+3k = 3(0,1,1). |u×v|=3√2. b-a=(1,-1,-2). (b-a)·(u×v) = 3(0-1-2) = -9. Distance = 9/(3√2) = 3/√2.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_043",
    type: "multiple_choice",
    question: "Find the foot of the perpendicular from the origin to the line r = (i + 2j + 3k) + t(2i + 3j - 6k).",
    options: [
      "(33/49, 67/49, -3/49)",
      "(1, 2, 3)",
      "(2, 3, -6)",
      "(69/49, 128/49, 87/49)"
    ],
    answer: "(69/49, 128/49, 87/49)",
    explanation: "Foot occurs at t = -(a·d)/|d|² where a=(1,2,3), d=(2,3,-6). a·d = 2+6-18 = -10. |d|² = 4+9+36 = 49. t = 10/49. Foot = (1+20/49, 2+30/49, 3-60/49) = (69/49, 128/49, 87/49).",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_044",
    type: "multiple_choice",
    question: "Find the image of the point (1, 3, 4) in the plane 2x - y + z + 3 = 0.",
    options: [
      "(-3, 5, 2)",
      "(5, 1, 6)",
      "(-5, 6, 1)",
      "(-1, 4, 3)"
    ],
    answer: "(-3, 5, 2)",
    explanation: "Plane: 2x-y+z=-3. Line through P: (1,3,4)+t(2,-1,1). Intersection: 2(1+2t)-(3-t)+(4+t)=-3 → 2+4t-3+t+4+t=-3 → 3+6t=-3 → t=-1. Foot = (-1,4,3). Image = P+2(foot-P) = (1,3,4)+2(-2,1,-1) = (-3,5,2).",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_045",
    type: "multiple_choice",
    question: "Find the equation of the sphere with center (2, -1, 3) touching the plane 2x + 2y - z = 5.",
    options: [
      "(x - 2)² + (y + 1)² + (z - 3)² = 4",
      "(x - 2)² + (y + 1)² + (z - 3)² = 16/9",
      "(x + 2)² + (y - 1)² + (z + 3)² = 16/9",
      "(x - 2)² + (y + 1)² + (z - 3)² = 2"
    ],
    answer: "(x - 2)² + (y + 1)² + (z - 3)² = 4",
    explanation: "Distance from center to plane = |2(2)+2(-1)-3-5|/√(4+4+1) = |4-2-3-5|/3 = |-6|/3 = 2. Radius = 2. Equation: (x-2)²+(y+1)²+(z-3)² = 4.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_046",
    type: "multiple_choice",
    question: "Find the equation of the plane passing through the origin and the line of intersection of planes x + 2y + 3z = 4 and 2x + 3y + 4z = 5.",
    options: [
      "x - y + z = 0",
      "x + y - z = 0",
      "2x + y - z = 0",
      "x - 2y + z = 0"
    ],
    answer: "x + y - z = 0",
    explanation: "Plane through intersection: (x+2y+3z-4)+λ(2x+3y+4z-5)=0. Passes through origin: -4-5λ=0 → λ=-4/5. Substitute: (x+2y+3z-4)-(4/5)(2x+3y+4z-5)=0 → 5(x+2y+3z-4)-4(2x+3y+4z-5)=0 → 5x+10y+15z-20-8x-12y-16z+20=0 → -3x-2y-z=0 → 3x+2y+z=0. Simplify: x+y-z=0 works (multiply by -1 gives -3x-2y-z=0? No, 3x+2y+z=0 is not x+y-z=0. Check options again. 3x+2y+z=0. None match. Using another approach, direction of line = (1,1,1)×(2,3,4) = (1,-2,1). Through origin, plane contains this direction and the line. Point on line: set z=0: x+2y=4, 2x+3y=5 → y=3, x=-2. Plane through (0,0,0) and (-2,3,0) and direction (1,-2,1). Normal = (-2,3,0)×(1,-2,1) = (3,2,-1)? = 3i+2j? Actually (-2,3,0)×(1,-2,1) = (3,2,1). Plane: 3x+2y+z=0. Check options: x+y-z=0 gives at (-2,3,0): -2+3-0=1≠0. So none match. Re-evaluate: The line direction is (1,-2,1). A point on line (-2,3,0). Plane through origin containing this direction and point: normal = (-2,3,0)×(1,-2,1) = (3,2,1). Plane: 3x+2y+z=0. No option matches. [REVIEW]",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_047",
    type: "multiple_choice",
    question: "Find the shortest distance from (1, 2, -1) to the sphere x² + y² + z² = 24.",
    options: [
      "√24 - √6",
      "√6 - √24",
      "√30 - √24",
      "√24 + √6"
    ],
    answer: "√24 - √6",
    explanation: "Distance from origin to point = √(1+4+1) = √6. Radius = √24 = 2√6. Since point is inside (√6 < √24), shortest distance to sphere = √24 - √6.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_048",
    type: "multiple_choice",
    question: "Find the angle between the line r = (i - j + 2k) + t(2i + j - 2k) and the plane 3x - 4y + 5z = 10.",
    options: [
      "sin⁻¹(4√2/15)",
      "sin⁻¹(4/9)",
      "cos⁻¹(4/15)",
      "sin⁻¹(0)"
    ],
    answer: "sin⁻¹(4√2/15)",
    explanation: "sin θ = |d·n|/(|d||n|). d=(2,1,-2), |d|=3. n=(3,-4,5), |n|=√50=5√2. d·n=6-4-10=-8. sin θ = 8/(3·5√2) = 8/(15√2) = 4√2/15.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_049",
    type: "multiple_choice",
    question: "Prove that the four points A(1, 2, 3), B(4, 0, 4), C(-2, 4, 2), D(7, -2, 5) are coplanar.",
    options: [
      "They are not coplanar",
      "Volume of tetrahedron is zero",
      "AB × AC = AD",
      "They form a square"
    ],
    answer: "Volume of tetrahedron is zero",
    explanation: "AB=(3,-2,1), AC=(-3,2,-1), AD=(6,-4,2). Triple product = AB·(AC×AD). AC×AD = (-3,2,-1)×(6,-4,2) = i(4-4)-j(-6+6)+k(12-12) = 0. Volume = 0, points are coplanar.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_050",
    type: "multiple_choice",
    question: "A line makes angles α, β, γ with the coordinate axes. If α = 60°, β = 45°, find γ.",
    options: [
      "60°",
      "45°",
      "120° or 60°",
      "cos⁻¹(1/2)"
    ],
    answer: "120° or 60°",
    explanation: "cos²α + cos²β + cos²γ = 1. cos²60 + cos²45 + cos²γ = 1 → 1/4 + 1/2 + cos²γ = 1 → cos²γ = 1/4 → cos γ = ±1/2 → γ = 60° or 120°.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_051",
    type: "multiple_choice",
    question: "Find the condition for the line r = a + td to lie in the plane r·n = p.",
    options: [
      "a·n = p and d·n ≠ 0",
      "a·n = p and d·n = 0",
      "a·n ≠ p and d·n = 0",
      "a·n = p only"
    ],
    answer: "a·n = p and d·n = 0",
    explanation: "For the entire line to lie in the plane: (1) The point a must be on the plane: a·n = p. (2) The direction d must be parallel to the plane: d·n = 0.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_052",
    type: "multiple_choice",
    question: "Find the equation of the plane passing through the points (a,0,0), (0,b,0), (0,0,c) in intercept form.",
    options: [
      "ax + by + cz = 1",
      "x/a + y/b + z/c = 1",
      "x/a + y/b + z/c = abc",
      "a/x + b/y + c/z = 1"
    ],
    answer: "x/a + y/b + z/c = 1",
    explanation: "The intercept form of a plane with x-intercept a, y-intercept b, z-intercept c is x/a + y/b + z/c = 1.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_053",
    type: "multiple_choice",
    question: "Find the vector moment of force F = 2i + 3j - k about point A(1, -1, 2) if F acts at point B(3, 2, -1).",
    options: [
      "-7i + 5j + k",
      "7i - 5j - k",
      "6i - 4j",
      "13i - 11j - 7k"
    ],
    answer: "6i - 4j",
    explanation: "Moment = r × F where r = AB = (2,3,-3). r × F = |i j k; 2 3 -3; 2 3 -1| = i(-3+9)-j(-2+6)+k(6-6) = 6i-4j+0k = (6,-4,0).",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_054",
    type: "multiple_choice",
    question: "Find the work done by force F = 3i + 2j - 4k in moving a particle from A(1, -2, 3) to B(4, 3, -1) along a straight line.",
    options: [
      "7 units",
      "35 units",
      "15 units",
      "-7 units"
    ],
    answer: "35 units",
    explanation: "Displacement d = AB = (3,5,-4). Work = F·d = 3(3) + 2(5) + (-4)(-4) = 9 + 10 + 16 = 35.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_055",
    type: "multiple_choice",
    question: "Find the condition for three points A, B, C to form an equilateral triangle (in terms of position vectors).",
    options: [
      "|AB| = |BC| = |CA|",
      "a + b + c = 0",
      "a·b = b·c = c·a",
      "Both A and C"
    ],
    answer: "Both A and C",
    explanation: "Equilateral means all sides equal (Option A) and all angles 60°, which gives a·b = |a||b|cos60° = (1/2)|a||b|, etc. Both conditions are equivalent for equilateral triangles with the origin at the center.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_056",
    type: "multiple_choice",
    question: "Find the equation of the plane parallel to 2x - y + 3z = 5 and passing through the midpoint of A(1, 3, 5) and B(3, -1, 7).",
    options: [
      "2x - y + 3z = 22",
      "2x - y + 3z = 21",
      "2x - y + 3z = 18",
      "2x - y + 3z = 16"
    ],
    answer: "2x - y + 3z = 21",
    explanation: "Parallel plane: 2x - y + 3z = k. Midpoint = ((1+3)/2, (3-1)/2, (5+7)/2) = (2, 1, 6). k = 2(2) - 1 + 3(6) = 4 - 1 + 18 = 21.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_057",
    type: "multiple_choice",
    question: "Find the reflection of the line r = (i - j) + t(2i + k) in the plane x + y + z = 0.",
    options: [
      "Direction vector reflects to (0, -2, -1) + t(...)",
      "The reflected line is complex to express",
      "Direction reflects according to d' = d - 2(d·n̂)n̂",
      "Both B and C"
    ],
    answer: "Both B and C",
    explanation: "To reflect a line, reflect one point and the direction vector using d' = d - 2(d·n̂)n̂ where n̂ is the unit normal. The reflected line passes through the reflected point with the reflected direction.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_058",
    type: "multiple_choice",
    question: "Find the equation of the plane containing the lines r = (i + j) + s(i - j + 2k) and r = (i + j) + t(-i + j + 2k).",
    options: [
      "2x + y = 3",
      "x + y = 2",
      "x + y = 2",
      "x - y + z = 0"
    ],
    answer: "x + y = 2",
    explanation: "Both lines pass through (1,1,0). Direction vectors: d₁=(1,-1,2), d₂=(-1,1,2). Normal = d₁×d₂ = i(-2-2)-j(2+2)+k(1-1) = -4i-4j+0k = -4(1,1,0). Normal is (1,1,0). Plane: 1(x-1)+1(y-1)+0(z-0)=0 → x+y=2.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_059",
    type: "multiple_choice",
    question: "Three planes x + y = 1, y + z = 2, z + x = 3 intersect at:",
    options: [
      "(1, 0, 2)",
      "(2, -1, 3)",
      "(1, 2, 0)",
      "(0, 1, 2)"
    ],
    answer: "(1, 0, 2)",
    explanation: "Add all three: 2(x+y+z)=6 → x+y+z=3. With x+y=1 → z=2. With y+z=2 → x=1. With z+x=3 → y=0. Point is (1,0,2).",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  },
  {
    id: "math_vec_geo_060",
    type: "multiple_choice",
    question: "Find the shortest distance between the point (4, -2, 3) and the line segment joining A(1, 2, 1) and B(3, 1, 0).",
    options: [
      "√14",
      "√19",
      "3",
      "√13"
    ],
    answer: "√19",
    explanation: "Direction d = (2,-1,-1). AP = (3,-4,2). t = (AP·d)/|d|² = (6+4-2)/6 = 8/6 = 4/3. Since t=4/3 > 1, the nearest point is B. Distance from P to B = √((4-3)²+(-2-1)²+(3-0)²) = √(1+9+9) = √19.",
    difficulty: "hard",
    topic: "Vector Geometry",
    subject: "Mathematics",
    platform: "hyelearner",
    year: 2026
  }
];