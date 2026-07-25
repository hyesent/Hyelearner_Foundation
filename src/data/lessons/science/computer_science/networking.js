// Location: src/data/lessons/science/computer_science/networking.js

export default {
  // ============================================================
  // METADATA
  // ============================================================
  id: "cs_lesson_networking",
  subject: "Computer Science",
  topic: "Networking",
  name: "Networking",
  icon: "🌐",
  grade_level: "SS1 - SS3",
  estimated_duration: "45 minutes",

  // ============================================================
  // PROGRESS & TRACKING
  // ============================================================
  progress: {
    totalObjectives: 16,
    totalPracticeQuestions: 24,
    totalAssessmentQuestions: 10,
    requiredPracticeCorrect: 19,
    passingScore: 70
  },

  // ============================================================
  // PREREQUISITES
  // ============================================================
  prerequisites: [
    "Understanding of computer basics",
    "Knowledge of computer hardware",
    "Basic understanding of the internet"
  ],

  // ============================================================
  // NEXT LESSONS
  // ============================================================
  nextLessons: [
    {
      name: "Databases",
      file: "science/computer_science/databases.js"
    },
    {
      name: "Programming",
      file: "science/computer_science/programming.js"
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
      description: "Define computer networking and explain its importance",
      indicator: "Student can explain what networking is and why it matters"
    },
    {
      id: "obj_002",
      level: "easy",
      description: "Identify types of computer networks",
      indicator: "Student can distinguish between LAN, WAN, MAN, and PAN"
    },
    {
      id: "obj_003",
      level: "easy",
      description: "Explain the difference between the internet and the World Wide Web",
      indicator: "Student can distinguish between the internet and the web"
    },
    // MEDIUM LEVEL
    {
      id: "obj_004",
      level: "medium",
      description: "Explain network topologies",
      indicator: "Student can describe bus, star, ring, and mesh topologies"
    },
    {
      id: "obj_005",
      level: "medium",
      description: "Describe network hardware components",
      indicator: "Student can identify routers, switches, hubs, and modems"
    },
    {
      id: "obj_006",
      level: "medium",
      description: "Explain the OSI model",
      indicator: "Student can describe the 7 layers of the OSI model"
    },
    {
      id: "obj_007",
      level: "medium",
      description: "Explain the TCP/IP model",
      indicator: "Student can describe the TCP/IP protocol suite"
    },
    {
      id: "obj_008",
      level: "medium",
      description: "Describe common network protocols",
      indicator: "Student can explain HTTP, HTTPS, FTP, SMTP, DNS"
    },
    {
      id: "obj_009",
      level: "medium",
      description: "Explain IP addressing and subnetting",
      indicator: "Student can explain IPv4 and IPv6 addresses"
    },
    // HARD LEVEL
    {
      id: "obj_010",
      level: "hard",
      description: "Explain how data is transmitted over networks",
      indicator: "Student can describe packet switching and data transmission"
    },
    {
      id: "obj_011",
      level: "hard",
      description: "Explain network security concepts",
      indicator: "Student can describe firewalls, encryption, and authentication"
    },
    {
      id: "obj_012",
      level: "hard",
      description: "Explain wireless networking technologies",
      indicator: "Student can describe Wi-Fi, Bluetooth, and cellular networks"
    },
    {
      id: "obj_013",
      level: "hard",
      description: "Explain the role of DNS in networking",
      indicator: "Student can describe how domain names are resolved"
    },
    {
      id: "obj_014",
      level: "hard",
      description: "Describe network types based on scale",
      indicator: "Student can explain LAN, WAN, and their differences"
    },
    {
      id: "obj_015",
      level: "hard",
      description: "Analyze the impact of networking on society",
      indicator: "Student can discuss the social and economic impact of networks"
    },
    {
      id: "obj_016",
      level: "hard",
      description: "Explain emerging networking technologies",
      indicator: "Student can describe 5G, IoT, and cloud computing"
    }
  ],

  // ============================================================
  // VIDEO PLACEHOLDER
  // ============================================================
  video: {
    id: "vid_001",
    title: "Computer Networking - Connecting the World",
    duration: "25:00 - 35:00",
    url: "YOUR_VIDEO_URL_HERE",
    thumbnail: "YOUR_THUMBNAIL_URL_HERE",
    description: "Learn about computer networks, protocols, and how the internet works."
  },

  // ============================================================
  // LESSON CONTENT
  // ============================================================
  content: {
    introduction: `
      <h2>Introduction to Computer Networking</h2>
      <p><strong>Computer networking</strong> is the practice of connecting computers and other devices to share resources and communicate with each other. Networks form the backbone of modern communication, enabling everything from email and web browsing to cloud computing and social media.</p>
      
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="text-blue-600">🌐 Key Concepts</h3>
          <ul>
            <li>✓ Types of Networks</li>
            <li>✓ Network Topologies</li>
            <li>✓ Network Hardware</li>
            <li>✓ Protocols (TCP/IP, HTTP, etc.)</li>
            <li>✓ IP Addressing</li>
            <li>✓ Network Security</li>
            <li>✓ Wireless Networking</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h3 class="text-green-600">📌 Did You Know?</h3>
          <ul>
            <li>• The internet connects over 5 billion users</li>
            <li>• The first network was ARPANET in 1969</li>
            <li>• Over 1 billion websites exist</li>
            <li>• 95% of mobile traffic is wireless</li>
            <li>• The internet carries 1.1 trillion GB of data yearly</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Why Networking Matters</h4>
        <p>Networking connects the world. It enables communication, commerce, education, and entertainment on a global scale.</p>
      </div>
    `,

    sections: [
      {
        id: "sec_001",
        title: "What is a Network?",
        objective: "obj_001",
        text: `
          <h3>Understanding Networks</h3>
          <p>A <strong>computer network</strong> is a collection of interconnected devices that can communicate and share resources.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Key Components</h4>
              <ul>
                <li>• <strong>Nodes:</strong> Devices on the network</li>
                <li>• <strong>Links:</strong> Connections between nodes</li>
                <li>• <strong>Protocols:</strong> Rules for communication</li>
                <li>• <strong>Bandwidth:</strong> Data transfer capacity</li>
                <li>• <strong>Latency:</strong> Delay in transmission</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Benefits of Networking</h4>
              <ul>
                <li>• <strong>Resource sharing:</strong> Printers, files</li>
                <li>• <strong>Communication:</strong> Email, messaging, video calls</li>
                <li>• <strong>Collaboration:</strong> Shared workspaces</li>
                <li>• <strong>Remote access:</strong> Work from anywhere</li>
                <li>• <strong>Centralized management:</strong> Easy administration</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_002",
        title: "Types of Networks",
        objective: "obj_002",
        text: `
          <h3>Network Types by Size</h3>
          <p>Networks are classified by their geographic scope.</p>
          
          <div class="grid grid-cols-4 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 PAN</h4>
              <ul>
                <li><strong>Personal Area Network</strong></li>
                <li>• Smallest network</li>
                <li>• Personal devices</li>
                <li>• Range: ~10 meters</li>
                <li>• Example: Bluetooth</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 LAN</h4>
              <ul>
                <li><strong>Local Area Network</strong></li>
                <li>• Single building</li>
                <li>• High speed</li>
                <li>• Range: ~100-1000 meters</li>
                <li>• Example: Office network</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 MAN</h4>
              <ul>
                <li><strong>Metropolitan Area Network</strong></li>
                <li>• City-wide</li>
                <li>• Medium speed</li>
                <li>• Range: ~5-50 km</li>
                <li>• Example: City network</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 WAN</h4>
              <ul>
                <li><strong>Wide Area Network</strong></li>
                <li>• Country/World</li>
                <li>• Lower speed</li>
                <li>• Range: Unlimited</li>
                <li>• Example: The Internet</li>
              </ul>
            </div>
          </div>
          
          <div class="example-box mt-4">
            <strong>📌 Key Differences:</strong>
            <ul>
              <li>• <strong>LAN:</strong> Private, fast, cheap</li>
              <li>• <strong>WAN:</strong> Public/Private, slower, expensive</li>
              <li>• <strong>MAN:</strong> Intermediate, city scale</li>
              <li>• <strong>PAN:</strong> Personal, short range</li>
            </ul>
          </div>
        `
      },
      {
        id: "sec_003",
        title: "Network Topologies",
        objective: "obj_004",
        text: `
          <h3>Network Topologies</h3>
          <p><strong>Network topology</strong> is the arrangement of nodes and links in a network.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Bus Topology</h4>
              <ul>
                <li>• Single cable backbone</li>
                <li>• All devices connected to the bus</li>
                <li>• Easy to set up</li>
                <li>• One break brings down the network</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Star Topology</h4>
              <ul>
                <li>• Central hub/switch</li>
                <li>• All devices connect to the hub</li>
                <li>• Most common</li>
                <li>• If hub fails, network fails</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <h4>📌 Ring Topology</h4>
              <ul>
                <li>• Devices in a circle</li>
                <li>• Data travels in one direction</li>
                <li>• Predictable performance</li>
                <li>• One break affects all</li>
              </ul>
            </div>
            <div class="bg-red-50 p-3 rounded">
              <h4>📌 Mesh Topology</h4>
              <ul>
                <li>• Every device connected</li>
                <li>• Most reliable</li>
                <li>• Redundant paths</li>
                <li>• Expensive</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_004",
        title: "Network Hardware",
        objective: "obj_005",
        text: `
          <h3>Network Hardware Components</h3>
          <p>Various devices are used to build and manage networks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Networking Devices</h4>
              <ul>
                <li>• <strong>Router:</strong> Connects networks, routes data</li>
                <li>• <strong>Switch:</strong> Connects devices within a network</li>
                <li>• <strong>Hub:</strong> Broadcasts data to all devices</li>
                <li>• <strong>Modem:</strong> Connects to the internet</li>
                <li>• <strong>Access Point:</strong> Provides Wi-Fi</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Media (Cables)</h4>
              <ul>
                <li>• <strong>Twisted Pair:</strong> Ethernet (RJ45)</li>
                <li>• <strong>Coaxial:</strong> Cable TV, internet</li>
                <li>• <strong>Fiber Optic:</strong> High speed, long distance</li>
                <li>• <strong>Wireless:</strong> Wi-Fi, cellular, satellite</li>
              </ul>
            </div>
          </div>
          
          <div class="svgs">
            <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              <!-- Background -->
              <rect width="600" height="300" fill="#f0f8ff" rx="10"/>
              
              <!-- Title -->
              <text x="300" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#1565c0">Star Topology</text>
              
              <!-- Central Hub -->
              <circle cx="300" cy="150" r="35" fill="#4a90d9" stroke="#1565c0" stroke-width="3"/>
              <text x="300" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Hub/</text>
              <text x="300" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Switch</text>
              
              <!-- Nodes -->
              <circle cx="100" cy="60" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="100" y="65" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <circle cx="500" cy="60" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="500" y="65" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <circle cx="100" cy="240" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="100" y="245" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <circle cx="500" cy="240" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="500" y="245" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <circle cx="200" cy="100" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="200" y="105" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <circle cx="400" cy="200" r="20" fill="#4caf50" stroke="#2e7d32" stroke-width="2"/>
              <text x="400" y="205" text-anchor="middle" font-size="10" fill="white">Node</text>
              
              <!-- Connections -->
              <line x1="300" y1="150" x2="100" y2="60" stroke="#1565c0" stroke-width="2"/>
              <line x1="300" y1="150" x2="500" y2="60" stroke="#1565c0" stroke-width="2"/>
              <line x1="300" y1="150" x2="100" y2="240" stroke="#1565c0" stroke-width="2"/>
              <line x1="300" y1="150" x2="500" y2="240" stroke="#1565c0" stroke-width="2"/>
              <line x1="300" y1="150" x2="200" y2="100" stroke="#1565c0" stroke-width="2"/>
              <line x1="300" y1="150" x2="400" y2="200" stroke="#1565c0" stroke-width="2"/>
            </svg>
          </div>
        `
      },
      {
        id: "sec_005",
        title: "The OSI Model",
        objective: "obj_006",
        text: `
          <h3>The OSI Model</h3>
          <p>The <strong>OSI (Open Systems Interconnection) model</strong> is a conceptual framework that standardizes network communication into 7 layers.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 The 7 Layers</h4>
              <ul>
                <li><strong>7. Application:</strong> User interface</li>
                <li><strong>6. Presentation:</strong> Data formatting</li>
                <li><strong>5. Session:</strong> Connection management</li>
                <li><strong>4. Transport:</strong> Data transfer</li>
                <li><strong>3. Network:</strong> Addressing and routing</li>
                <li><strong>2. Data Link:</strong> Physical addressing</li>
                <li><strong>1. Physical:</strong> Raw data transmission</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Mnemonic</h4>
              <p><strong>Please Do Not Throw Sausage Pizza Away</strong></p>
              <ul>
                <li>• <strong>P</strong>hysical</li>
                <li>• <strong>D</strong>ata Link</li>
                <li>• <strong>N</strong>etwork</li>
                <li>• <strong>T</strong>ransport</li>
                <li>• <strong>S</strong>ession</li>
                <li>• <strong>P</strong>resentation</li>
                <li>• <strong>A</strong>pplication</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_006",
        title: "TCP/IP Model",
        objective: "obj_007",
        text: `
          <h3>TCP/IP Model</h3>
          <p>The <strong>TCP/IP model</strong> is the practical implementation used on the internet.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Layers</h4>
              <ul>
                <li>• <strong>4. Application:</strong> HTTP, FTP, SMTP</li>
                <li>• <strong>3. Transport:</strong> TCP, UDP</li>
                <li>• <strong>2. Internet:</strong> IP</li>
                <li>• <strong>1. Link:</strong> Ethernet</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Key Protocols</h4>
              <ul>
                <li>• <strong>TCP:</strong> Transmission Control Protocol</li>
                <li>• Reliable, connection-based</li>
                <li>• <strong>IP:</strong> Internet Protocol</li>
                <li>• Addressing and routing</li>
                <li>• <strong>UDP:</strong> User Datagram Protocol</li>
                <li>• Fast, connectionless</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_007",
        title: "IP Addressing",
        objective: "obj_009",
        text: `
          <h3>IP Addressing</h3>
          <p><strong>IP addresses</strong> are unique identifiers for devices on a network.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 IPv4</h4>
              <ul>
                <li>• 32-bit address</li>
                <li>• 4 octets (e.g., 192.168.1.1)</li>
                <li>• ~4.3 billion addresses</li>
                <li>• Exhausted</li>
                <li>• Classes: A, B, C, D, E</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 IPv6</h4>
              <ul>
                <li>• 128-bit address</li>
                <li>• 8 groups of 4 hex digits</li>
                <li>• ~340 undecillion addresses</li>
                <li>• Future-proof</li>
                <li>• Example: 2001:0db8::1</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_008",
        title: "DNS - Domain Name System",
        objective: "obj_013",
        text: `
          <h3>Domain Name System (DNS)</h3>
          <p><strong>DNS</strong> translates human-readable domain names (like google.com) to IP addresses.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 How DNS Works</h4>
              <ul>
                <li>1. User types domain name</li>
                <li>2. DNS query sent</li>
                <li>3. DNS servers resolve</li>
                <li>4. IP address returned</li>
                <li>5. Connection established</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 DNS Servers</h4>
              <ul>
                <li>• <strong>Recursive:</strong> Answers queries</li>
                <li>• <strong>Root:</strong> Top-level domains</li>
                <li>• <strong>TLD:</strong> .com, .org, .ng</li>
                <li>• <strong>Authoritative:</strong> Final answer</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_009",
        title: "Common Protocols",
        objective: "obj_008",
        text: `
          <h3>Common Network Protocols</h3>
          <p>Protocols are rules for communication between devices.</p>
          
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="bg-gray-200">
                <th class="border p-2">Protocol</th>
                <th class="border p-2">Port</th>
                <th class="border p-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border p-2">HTTP</td>
                <td class="border p-2">80</td>
                <td class="border p-2">Web browsing (not secure)</td>
              </tr>
              <tr>
                <td class="border p-2">HTTPS</td>
                <td class="border p-2">443</td>
                <td class="border p-2">Secure web browsing</td>
              </tr>
              <tr>
                <td class="border p-2">FTP</td>
                <td class="border p-2">21</td>
                <td class="border p-2">File transfer</td>
              </tr>
              <tr>
                <td class="border p-2">SMTP</td>
                <td class="border p-2">25</td>
                <td class="border p-2">Email sending</td>
              </tr>
              <tr>
                <td class="border p-2">POP3</td>
                <td class="border p-2">110</td>
                <td class="border p-2">Email receiving</td>
              </tr>
              <tr>
                <td class="border p-2">DNS</td>
                <td class="border p-2">53</td>
                <td class="border p-2">Domain name resolution</td>
              </tr>
              <tr>
                <td class="border p-2">SSH</td>
                <td class="border p-2">22</td>
                <td class="border p-2">Secure remote access</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "sec_010",
        title: "Network Security",
        objective: "obj_011",
        text: `
          <h3>Network Security</h3>
          <p>Protecting networks from unauthorized access and attacks.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Security Measures</h4>
              <ul>
                <li>• <strong>Firewall:</strong> Blocks unauthorized access</li>
                <li>• <strong>Encryption:</strong> Protects data in transit</li>
                <li>• <strong>Authentication:</strong> Verifies identity</li>
                <li>• <strong>VPN:</strong> Secure private tunnel</li>
                <li>• <strong>Antivirus:</strong> Protects from malware</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Common Threats</h4>
              <ul>
                <li>• <strong>Viruses:</strong> Malicious code</li>
                <li>• <strong>Phishing:</strong> Fake emails</li>
                <li>• <strong>DDoS:</strong> Overload attacks</li>
                <li>• <strong>Man-in-the-middle:</strong> Eavesdropping</li>
                <li>• <strong>Ransomware:</strong> Data encryption</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "sec_011",
        title: "Wireless Networking",
        objective: "obj_012",
        text: `
          <h3>Wireless Networking</h3>
          <p>Wireless technologies enable network connections without cables.</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded">
              <h4>📌 Technologies</h4>
              <ul>
                <li>• <strong>Wi-Fi (IEEE 802.11):</strong> Local wireless</li>
                <li>• <strong>Bluetooth:</strong> Personal area (PAN)</li>
                <li>• <strong>Cellular:</strong> 4G, 5G mobile</li>
                <li>• <strong>Satellite:</strong> Global coverage</li>
              </ul>
            </div>
            <div class="bg-green-50 p-3 rounded">
              <h4>📌 Security</h4>
              <ul>
                <li>• <strong>WPA2:</strong> Wi-Fi Protected Access 2</li>
                <li>• <strong>WPA3:</strong> Latest standard</li>
                <li>• <strong>SSID:</strong> Network name</li>
                <li>• <strong>Password:</strong> Security key</li>
                <li>• <strong>MAC filtering:</strong> Device whitelist</li>
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
          <h4>🌐 Networking</h4>
          <ul>
            <li>• Networks connect devices for communication</li>
            <li>• LAN, WAN, MAN, PAN - different scales</li>
            <li>• Topologies: star, bus, ring, mesh</li>
            <li>• Protocols: TCP/IP, HTTP, FTP, SMTP</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4>📌 Key Concepts</h4>
          <ul>
            <li>• IP addresses identify devices</li>
            <li>• DNS translates domain names</li>
            <li>• Security: firewalls, encryption</li>
            <li>• Wireless: Wi-Fi, Bluetooth, 5G</li>
          </ul>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded mt-4">
        <h4>💡 Remember:</h4>
        <p>Networking is the foundation of the modern world. It connects people, devices, and information globally.</p>
      </div>
    `,

    // ============================================================
    // COMMON MISCONCEPTIONS
    // ============================================================
    misconceptions: [
      {
        id: "mis_001",
        misconception: "The internet and the World Wide Web are the same",
        correction: "The internet is the infrastructure; the web is a service on it",
        explanation: "The internet is the network; the web is websites and pages."
      },
      {
        id: "mis_002",
        misconception: "Wi-Fi and internet are the same",
        correction: "Wi-Fi is a wireless connection; the internet is the global network",
        explanation: "Wi-Fi connects to a network; the internet is the network itself."
      },
      {
        id: "mis_003",
        misconception: "All networks are wireless",
        correction: "Networks can be wired or wireless",
        explanation: "Ethernet cables are still widely used."
      },
      {
        id: "mis_004",
        misconception: "IP addresses are permanent",
        correction: "IP addresses can be static or dynamic",
        explanation: "DHCP assigns dynamic IPs automatically."
      }
    ],

    // ============================================================
    // REAL-WORLD APPLICATIONS
    // ============================================================
    applications: [
      {
        id: "app_001",
        title: "Communication",
        description: "Networks enable global communication.",
        example: "Email, video calls, messaging"
      },
      {
        id: "app_002",
        title: "E-commerce",
        description: "Networks power online shopping.",
        example: "Amazon, online banking"
      },
      {
        id: "app_003",
        title: "Education",
        description: "Networks enable online learning.",
        example: "E-learning platforms, virtual classrooms"
      },
      {
        id: "app_004",
        title: "Healthcare",
        description: "Networks support telemedicine.",
        example: "Remote consultations, patient records"
      }
    ]
  },

  // ============================================================
  // KEY TERMS
  // ============================================================
  keyTerms: [
    { term: "Network", definition: "A collection of interconnected devices." },
    { term: "LAN", definition: "Local Area Network - small geographic area." },
    { term: "WAN", definition: "Wide Area Network - large geographic area." },
    { term: "Topology", definition: "The physical arrangement of a network." },
    { term: "Router", definition: "Device that routes data between networks." },
    { term: "Switch", definition: "Device that connects devices on a LAN." },
    { term: "Protocol", definition: "A set of rules for communication." },
    { term: "TCP/IP", definition: "Transmission Control Protocol/Internet Protocol." },
    { term: "IP Address", definition: "A unique identifier for a device on a network." },
    { term: "DNS", definition: "Domain Name System - translates names to IPs." },
    { term: "HTTP", definition: "Hypertext Transfer Protocol - for web." },
    { term: "HTTPS", definition: "HTTP Secure - encrypted web." },
    { term: "FTP", definition: "File Transfer Protocol - for files." },
    { term: "SMTP", definition: "Simple Mail Transfer Protocol - for email." },
    { term: "Firewall", definition: "Device or software that blocks unauthorized access." },
    { term: "Encryption", definition: "Encoding data to prevent unauthorized access." },
    { term: "Wi-Fi", definition: "Wireless networking standard." },
    { term: "Bandwidth", definition: "Data transfer capacity of a network." },
    { term: "Latency", definition: "Delay in data transmission." },
    { term: "Packet", definition: "A unit of data transmitted over a network." }
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
      question: "What is a computer network?",
      type: "multiple_choice",
      options: [
        "A single computer",
        "A collection of connected devices",
        "A type of software",
        "A programming language"
      ],
      answer: "A collection of connected devices",
      explanation: "A network is a collection of interconnected devices."
    },
    {
      id: "prac_002",
      objective: "obj_002",
      difficulty: "easy",
      question: "What does LAN stand for?",
      type: "multiple_choice",
      options: [
        "Large Area Network",
        "Local Area Network",
        "Long Area Network",
        "Low Area Network"
      ],
      answer: "Local Area Network",
      explanation: "LAN stands for Local Area Network."
    },
    {
      id: "prac_003",
      objective: "obj_003",
      difficulty: "easy",
      question: "What is the difference between the internet and the web?",
      type: "multiple_choice",
      options: [
        "They are the same thing",
        "The internet is the infrastructure; the web is a service",
        "The web is the infrastructure; the internet is a service",
        "There is no difference"
      ],
      answer: "The internet is the infrastructure; the web is a service",
      explanation: "The internet is the network infrastructure; the web is a service on it."
    },
    // ===== MEDIUM QUESTIONS =====
    {
      id: "prac_004",
      objective: "obj_004",
      difficulty: "medium",
      question: "Which topology has a central hub?",
      type: "multiple_choice",
      options: ["Bus", "Star", "Ring", "Mesh"],
      answer: "Star",
      explanation: "Star topology has a central hub or switch."
    },
    {
      id: "prac_005",
      objective: "obj_005",
      difficulty: "medium",
      question: "What device connects devices within a LAN?",
      type: "multiple_choice",
      options: ["Router", "Switch", "Modem", "Hub"],
      answer: "Switch",
      explanation: "A switch connects devices within a LAN."
    },
    {
      id: "prac_006",
      objective: "obj_006",
      difficulty: "medium",
      question: "What is the OSI model?",
      type: "multiple_choice",
      options: [
        "A programming language",
        "A network security protocol",
        "A model for network communication with 7 layers",
        "A type of topology"
      ],
      answer: "A model for network communication with 7 layers",
      explanation: "The OSI model has 7 layers for network communication."
    },
    {
      id: "prac_007",
      objective: "obj_007",
      difficulty: "medium",
      question: "What does TCP stand for?",
      type: "multiple_choice",
      options: [
        "Transmission Control Protocol",
        "Transfer Control Protocol",
        "Transport Communication Protocol",
        "Transfer Communication Protocol"
      ],
      answer: "Transmission Control Protocol",
      explanation: "TCP stands for Transmission Control Protocol."
    },
    // ===== HARD QUESTIONS =====
    {
      id: "prac_008",
      objective: "obj_008",
      difficulty: "hard",
      question: "Which protocol is used for secure web browsing?",
      type: "multiple_choice",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS",
      explanation: "HTTPS is HTTP Secure, used for secure web browsing."
    },
    {
      id: "prac_009",
      objective: "obj_009",
      difficulty: "hard",
      question: "What is the maximum number of IPv4 addresses?",
      type: "multiple_choice",
      options: ["~4.3 billion", "~4.3 million", "~340 undecillion", "~65,000"],
      answer: "~4.3 billion",
      explanation: "IPv4 has ~4.3 billion addresses."
    },
    {
      id: "prac_010",
      objective: "obj_010",
      difficulty: "hard",
      question: "What is packet switching?",
      type: "multiple_choice",
      options: [
        "A method of data transmission where data is split into packets",
        "A type of hardware",
        "A type of topology",
        "A security protocol"
      ],
      answer: "A method of data transmission where data is split into packets",
      explanation: "Packet switching splits data into packets for transmission."
    },
    {
      id: "prac_011",
      objective: "obj_011",
      difficulty: "hard",
      question: "What does a firewall do?",
      type: "multiple_choice",
      options: [
        "Encrypts data",
        "Blocks unauthorized access",
        "Routes data between networks",
        "Assigns IP addresses"
      ],
      answer: "Blocks unauthorized access",
      explanation: "A firewall blocks unauthorized access to a network."
    },
    {
      id: "prac_012",
      objective: "obj_012",
      difficulty: "hard",
      question: "What does Wi-Fi stand for?",
      type: "multiple_choice",
      options: [
        "Wireless Fidelity",
        "Wide Fidelity",
        "Wireless Frequency",
        "Wide Frequency"
      ],
      answer: "Wireless Fidelity",
      explanation: "Wi-Fi stands for Wireless Fidelity."
    },
    {
      id: "prac_013",
      objective: "obj_013",
      difficulty: "hard",
      question: "What is the function of DNS?",
      type: "multiple_choice",
      options: [
        "To assign IP addresses",
        "To translate domain names to IP addresses",
        "To encrypt data",
        "To route data"
      ],
      answer: "To translate domain names to IP addresses",
      explanation: "DNS translates domain names to IP addresses."
    },
    {
      id: "prac_014",
      objective: "obj_014",
      difficulty: "hard",
      question: "What is the difference between LAN and WAN?",
      type: "multiple_choice",
      options: [
        "LAN is large; WAN is small",
        "LAN is small; WAN is large",
        "LAN is wireless; WAN is wired",
        "LAN is public; WAN is private"
      ],
      answer: "LAN is small; WAN is large",
      explanation: "LAN covers a small area; WAN covers a large area."
    },
    {
      id: "prac_015",
      objective: "obj_015",
      difficulty: "hard",
      question: "How has networking impacted society?",
      type: "multiple_choice",
      options: [
        "No significant impact",
        "Revolutionized communication and business",
        "Only affected entertainment",
        "Made things more complicated"
      ],
      answer: "Revolutionized communication and business",
      explanation: "Networking has revolutionized communication and business."
    }
  ],

  // ============================================================
  // ASSESSMENT (FINAL QUIZ)
  // ============================================================
  assessment: {
    id: "assess_networking",
    title: "Networking Quiz",
    description: "Test your understanding of computer networking",
    passing_score: 70,
    total_questions: 10,
    questions: [
      {
        id: "ass_001",
        objective: "obj_001",
        difficulty: "easy",
        question: "What is a computer network?",
        type: "short_answer",
        answer_key: "A collection of connected devices",
        explanation: "A network is a collection of interconnected devices."
      },
      {
        id: "ass_002",
        objective: "obj_002",
        difficulty: "easy",
        question: "What does LAN stand for?",
        type: "short_answer",
        answer_key: "Local Area Network",
        explanation: "LAN stands for Local Area Network."
      },
      {
        id: "ass_003",
        objective: "obj_003",
        difficulty: "easy",
        question: "What is the difference between the internet and the web?",
        type: "short_answer",
        answer_key: "The internet is infrastructure; the web is a service",
        explanation: "The internet is the network; the web is websites and pages."
      },
      {
        id: "ass_004",
        objective: "obj_004",
        difficulty: "medium",
        question: "What topology has a central hub?",
        type: "short_answer",
        answer_key: "Star",
        explanation: "Star topology has a central hub or switch."
      },
      {
        id: "ass_005",
        objective: "obj_005",
        difficulty: "medium",
        question: "What device connects devices within a LAN?",
        type: "short_answer",
        answer_key: "Switch",
        explanation: "A switch connects devices within a LAN."
      },
      {
        id: "ass_006",
        objective: "obj_006",
        difficulty: "medium",
        question: "What is the OSI model?",
        type: "short_answer",
        answer_key: "A model for network communication with 7 layers",
        explanation: "The OSI model has 7 layers."
      },
      {
        id: "ass_007",
        objective: "obj_008",
        difficulty: "hard",
        question: "Which protocol is used for secure web browsing?",
        type: "short_answer",
        answer_key: "HTTPS",
        explanation: "HTTPS is used for secure web browsing."
      },
      {
        id: "ass_008",
        objective: "obj_009",
        difficulty: "hard",
        question: "What is the maximum number of IPv4 addresses?",
        type: "short_answer",
        answer_key: "~4.3 billion",
        explanation: "IPv4 has ~4.3 billion addresses."
      },
      {
        id: "ass_009",
        objective: "obj_011",
        difficulty: "hard",
        question: "What does a firewall do?",
        type: "short_answer",
        answer_key: "Blocks unauthorized access",
        explanation: "A firewall blocks unauthorized access."
      },
      {
        id: "ass_010",
        objective: "obj_013",
        difficulty: "hard",
        question: "What is the function of DNS?",
        type: "short_answer",
        answer_key: "To translate domain names to IP addresses",
        explanation: "DNS translates domain names to IP addresses."
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
        "Understand computer networks and their types",
        "Explain network topologies and hardware",
        "Describe protocols and IP addressing",
        "Understand network security"
      ],
      activities: [
        { time: "0-5 min", activity: "Introduction - What is networking?" },
        { time: "5-10 min", activity: "Direct Instruction - Types of Networks" },
        { time: "10-15 min", activity: "Direct Instruction - Topologies and Hardware" },
        { time: "15-20 min", activity: "Direct Instruction - OSI and TCP/IP Models" },
        { time: "20-25 min", activity: "Direct Instruction - IP Addressing and DNS" },
        { time: "25-30 min", activity: "Direct Instruction - Protocols" },
        { time: "30-35 min", activity: "Direct Instruction - Network Security" },
        { time: "35-40 min", activity: "Guided Practice" },
        { time: "40-45 min", activity: "Assessment and Closure" }
      ]
    },
    answerKey: {
      practice: {
        prac_001: "A collection of connected devices",
        prac_002: "Local Area Network",
        prac_003: "The internet is the infrastructure; the web is a service",
        prac_004: "Star",
        prac_005: "Switch",
        prac_006: "A model for network communication with 7 layers",
        prac_007: "Transmission Control Protocol",
        prac_008: "HTTPS",
        prac_009: "~4.3 billion",
        prac_010: "A method of data transmission where data is split into packets",
        prac_011: "Blocks unauthorized access",
        prac_012: "Wireless Fidelity",
        prac_013: "To translate domain names to IP addresses",
        prac_014: "LAN is small; WAN is large",
        prac_015: "Revolutionized communication and business"
      },
      assessment: {
        ass_001: "A collection of connected devices",
        ass_002: "Local Area Network",
        ass_003: "The internet is infrastructure; the web is a service",
        ass_004: "Star",
        ass_005: "Switch",
        ass_006: "A model for network communication with 7 layers",
        ass_007: "HTTPS",
        ass_008: "~4.3 billion",
        ass_009: "Blocks unauthorized access",
        ass_010: "To translate domain names to IP addresses"
      }
    },
    extensionActivities: [
      "Research how the internet works",
      "Set up a simple home network",
      "Explore network security tools",
      "Learn about emerging networking technologies"
    ],
    differentiation: {
      struggling: [
        "Focus on basic concepts",
        "Use simple examples",
        "Use visual aids",
        "Provide a summary table"
      ],
      advanced: [
        "Research networking protocols",
        "Study network design",
        "Research cybersecurity",
        "Study the internet of things"
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
      title: "Star Topology",
      description: "Diagram of star network topology",
      url: "/diagrams/star-topology.png",
      alt: "Star topology diagram"
    },
    {
      id: "vis_002",
      type: "diagram",
      title: "OSI Model",
      description: "Diagram of the OSI model layers",
      url: "/diagrams/osi-model.png",
      alt: "OSI model diagram"
    },
    {
      id: "vis_003",
      type: "diagram",
      title: "TCP/IP Model",
      description: "Diagram of TCP/IP model layers",
      url: "/diagrams/tcpip-model.png",
      alt: "TCP/IP model diagram"
    }
  ]
};