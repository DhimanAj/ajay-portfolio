export const personal = {
  name: "Ajay Dhiman",
  title: "Flutter & Android Developer",
  subtitle: "5+ Years of Experience",
  tagline: "Building high-performance, cross-platform mobile applications for fintech, healthcare, logistics & telecom.",
  email: "dhiman221195@gmail.com",
  phone: "+91-8684838182",
  linkedin: "https://linkedin.com/in/ajay-dhiman-90075919a",
  github: "https://github.com/ajaydhiman221195",
  location: "Mohali, India",
  availableForWork: true,
  initials: "AD",
};

export const about = `Flutter & Android Developer with 5+ years of hands-on experience delivering enterprise-grade mobile applications across fintech, healthcare, logistics, and telecom. I specialize in building scalable, high-performance apps using Flutter, Dart, Kotlin, and Java — with deep expertise in state management (Bloc, GetX), real-time data integration via Socket.IO and GraphQL, and clean architecture principles.

I've shipped 10+ applications to both Google Play Store and Apple App Store, contributed to platforms serving enterprise clients like EarthLink (US ISP) and Magnifi (US stock market), and consistently driven measurable performance improvements — including a 30% reduction in latency and a 30% improvement in app stability. I thrive in Agile teams, mentor junior developers, and care deeply about code quality and user experience.`;

export const skills: { category: string; items: string[] }[] = [
  { category: "Mobile Development", items: ["Flutter", "Android SDK", "Dart", "Kotlin", "Java"] },
  { category: "Architecture & Patterns", items: ["MVVM", "Clean Architecture", "MVC", "Bloc Pattern", "GetX"] },
  { category: "State Management", items: ["Bloc", "GetX", "Provider", "setState"] },
  { category: "Backend & APIs", items: ["RESTful APIs", "GraphQL", "Socket.IO", "Retrofit", "JSON Parsing"] },
  {
    category: "Cloud & Services",
    items: ["Firebase Auth", "Firestore", "Cloud Messaging", "Remote Config", "Google Maps API", "Stripe", "Razorpay", "In-App Purchases"],
  },
  { category: "UI/UX", items: ["Material Design", "Jetpack Components", "Custom Animations", "Responsive Layouts", "XML"] },
  { category: "Testing & Quality", items: ["Unit Testing", "Widget Testing", "Code Reviews", "Bug Fixing", "Performance Optimization"] },
  { category: "Tools & DevOps", items: ["Android Studio", "VS Code", "Git", "GitHub", "Jira", "Postman", "Google Play Console", "App Store Connect"] },
  { category: "Methodologies", items: ["Agile/Scrum", "SDLC", "CI/CD"] },
];

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Digi Mantra Labs",
    role: "Flutter & Android Developer",
    type: "Full-time",
    location: "Mohali, India",
    start: "November 2023",
    end: "Present",
    current: true,
    highlights: [
      "Spearheaded end-to-end development of high-performance cross-platform mobile applications using Flutter, serving thousands of active users across fintech and telecom sectors.",
      "Architected complex financial features for a US stock market investment application (Magnifi) leveraging GraphQL and Socket.IO for real-time data streaming with sub-second latency.",
      "Optimized application state management using Bloc pattern, reducing data processing latency by ~30% with smoother UI transitions and improved scalability.",
      "Collaborated with cross-functional backend teams to design and integrate secure REST APIs and Firebase services including authentication, push notifications, and Firestore.",
      "Contributed to code reviews, technical documentation, and mentored junior developers on Flutter best practices and clean architecture principles.",
      "Followed Agile/Scrum methodologies with sprint planning, stand-ups, and retrospectives using Jira for project tracking.",
    ],
    tech: ["Flutter", "Dart", "GraphQL", "Socket.IO", "Firebase", "Bloc", "REST APIs", "Jira"],
  },
  {
    company: "Appentus Technologies Pvt. Ltd.",
    role: "Flutter & Android Developer",
    type: "Full-time",
    location: "Jaipur, India",
    start: "February 2022",
    end: "October 2023",
    current: false,
    highlights: [
      "Developed comprehensive logistics and last-mile delivery solutions using Flutter and GetX, enabling real-time shipment tracking for thousands of users.",
      "Integrated Google Maps API for live driver tracking, dynamic route optimization, and geofencing capabilities, significantly improving delivery efficiency.",
      "Managed the complete app development lifecycle from design through deployment on Google Play Store and Apple App Store, adhering to platform-specific guidelines.",
      "Resolved critical production bugs and refactored legacy code, improving overall app stability by 30% and reducing crash rates significantly.",
      "Implemented digital invoicing, push notifications, and real-time order status updates to enhance user engagement and operational transparency.",
    ],
    tech: ["Flutter", "GetX", "Google Maps API", "Firebase", "REST APIs", "Google Play Store", "App Store"],
  },
  {
    company: "Mobiloitte Technologies Pvt. Ltd.",
    role: "Android Developer",
    type: "Full-time",
    location: "Delhi, India",
    start: "November 2020",
    end: "January 2022",
    current: false,
    highlights: [
      "Built native Android applications using Kotlin and Java, adhering strictly to MVVM architecture to ensure maintainability and scalability.",
      "Implemented real-time video and audio calling for a healthcare telemedicine platform using WebRTC SDKs, enabling seamless doctor-patient consultations.",
      "Utilized Jetpack Components (LiveData, ViewModel, Room) and Retrofit for robust networking, local data caching, and efficient data flow management.",
      "Integrated secure user authentication, session management, and role-based access control for healthcare data compliance.",
      "Participated in the complete SDLC including requirement analysis, design, development, testing, and production deployment.",
    ],
    tech: ["Kotlin", "Java", "Android SDK", "MVVM", "Jetpack", "WebRTC", "Retrofit", "LiveData", "Room"],
  },
];

export interface Project {
  name: string;
  domain: string;
  description: string;
  highlights: string[];
  tech: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Magnifi",
    domain: "AI Fintech",
    description: "An AI-powered investment co-pilot for the US stock market delivering personalized portfolio insights, real-time analytics, and transactional features meeting US financial compliance standards.",
    highlights: [
      "Engineered real-time stock data feeds using Socket.IO with complex state orchestration via Bloc, ensuring accurate live market data delivery.",
      "Implemented secure JWT-based authentication and portfolio management features meeting US financial compliance standards.",
    ],
    tech: ["Flutter", "Bloc", "GraphQL", "Socket.IO", "JWT"],
    featured: true,
  },
  {
    name: "EarthLink",
    domain: "Telecom & ISP",
    description: "A comprehensive digital platform for a leading U.S. Internet Service Provider enabling users to manage Fiber, 5G, and Satellite internet subscriptions from a single mobile interface.",
    highlights: [
      "Integrated EarthLink Business modules for enterprise connectivity management, supporting high-speed plan upgrades up to 5 Gbps.",
      "Optimized state management using GetX for high responsiveness across complex account management workflows.",
    ],
    tech: ["Flutter", "GetX", "GraphQL", "REST APIs"],
    featured: true,
  },
  {
    name: "Ph7 Doctor & User Suite",
    domain: "Healthcare",
    description: "A full-featured telemedicine platform enabling real-time video/audio consultations between doctors and patients, with appointment booking, prescription management, and HIPAA-aligned data security.",
    highlights: [
      "Implemented end-to-end encryption and HIPAA-aligned security for patient records and consultation data.",
    ],
    tech: ["Kotlin", "MVVM", "Jetpack", "Retrofit", "WebRTC"],
    featured: true,
  },
  {
    name: "Mobile Petrol Station",
    domain: "On-Demand Services",
    description: "A petrol and diesel management ecosystem with separate Pilot and Customer applications enabling seamless fuel ordering, live delivery tracking, and turn-by-turn route navigation.",
    highlights: [
      "Implemented live order tracking, delivery status updates, and real-time synchronization.",
      "Integrated turn-by-turn navigation and route optimization for pilots across various vehicle types.",
    ],
    tech: ["Flutter", "Bloc", "Google Maps", "Real-time"],
    featured: true,
  },
  {
    name: "Courier-Market",
    domain: "Logistics",
    description: "A bidding and load-tracking marketplace for the logistics industry with live map tracking for shipments, automated digital invoicing, and role-specific interfaces for carriers and shippers.",
    highlights: [],
    tech: ["Flutter", "GetX", "Google Maps API"],
    featured: false,
  },
  {
    name: "Ramatou Express",
    domain: "Delivery",
    description: "A courier management ecosystem with separate Driver and User interfaces featuring live order tracking, turn-by-turn route navigation, and delivery status updates.",
    highlights: [],
    tech: ["Flutter", "GetX", "Google Maps"],
    featured: false,
  },
  {
    name: "Be You+",
    domain: "Social Media",
    description: "A full-featured social media application with feed, stories, and real-time messaging for Android.",
    highlights: [],
    tech: ["Kotlin", "Android", "MVVM"],
    featured: false,
  },
  {
    name: "Mister Clean",
    domain: "On-Demand Services",
    description: "An on-demand laundry service application with driver integration, real-time order tracking, and scheduling features.",
    highlights: [],
    tech: ["Flutter"],
    featured: false,
  },
  {
    name: "RealEnglish",
    domain: "EdTech",
    description: "An educational platform for language learning with interactive modules and structured lesson flows.",
    highlights: [],
    tech: ["Flutter"],
    featured: false,
  },
  {
    name: "Crypto Mining & Spare Coin",
    domain: "Fintech",
    description: "Cryptocurrency management and mining dashboards for tracking digital assets and monitoring mining operations.",
    highlights: [],
    tech: ["Java", "Kotlin"],
    featured: false,
  },
];

export const education = [
  {
    degree: "Post Graduate Program in Java (PGP Java)",
    institution: "NIIT Limited, Connaught Place",
    location: "New Delhi, India",
    year: "",
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    institution: "Maharshi Dayanand University (MDU)",
    location: "Rohtak, Haryana",
    year: "",
  },
  {
    degree: "Intermediate — 12th Standard",
    institution: "H.B.S.E Board",
    location: "Haryana",
    year: "",
  },
];

export const achievements = [
  {
    title: "30% Latency Reduction",
    description: "Reduced data processing latency by ~30% at Digi Mantra Labs through Bloc pattern optimization, resulting in smoother UI transitions and improved application scalability.",
    icon: "⚡",
  },
  {
    title: "30% App Stability Boost",
    description: "Systematically resolved critical production bugs and refactored legacy code at Appentus Technologies, improving overall app stability by 30% and significantly reducing crash rates.",
    icon: "🛡️",
  },
  {
    title: "10+ Apps Shipped",
    description: "Successfully designed, developed, and deployed 10+ cross-platform applications on both Google Play Store and Apple App Store across diverse industry verticals.",
    icon: "🚀",
  },
  {
    title: "Enterprise-Grade Clients",
    description: "Contributed to platforms serving enterprise clients including EarthLink (a leading U.S. ISP supporting up to 5 Gbps) and Magnifi (US stock market investment tools).",
    icon: "🏢",
  },
  {
    title: "Multi-Domain Expertise",
    description: "Delivered production-grade applications across six domains: Fintech, Healthcare, Logistics, Telecom, Social Media, and E-commerce.",
    icon: "🌐",
  },
  {
    title: "Real-Time Systems",
    description: "Specialized in financial-grade real-time data applications using Socket.IO and GraphQL, achieving sub-second latency for US stock market live data feeds.",
    icon: "📡",
  },
];

export const seo = {
  title: "Ajay Dhiman — Flutter & Android Developer",
  description:
    "Flutter & Android Developer with 5+ years of experience building high-performance cross-platform mobile apps for fintech, healthcare, logistics, and telecom. Expert in Dart, Kotlin, Bloc, GetX, Firebase, GraphQL, and Socket.IO.",
  keywords: [
    "Flutter Developer",
    "Android Developer",
    "Mobile App Developer",
    "Dart",
    "Kotlin",
    "Java",
    "Bloc",
    "GetX",
    "Firebase",
    "GraphQL",
    "Socket.IO",
    "Fintech",
    "Healthcare",
    "Logistics",
    "Telecom",
    "Ajay Dhiman",
    "Cross-platform Developer",
    "India",
  ],
  ogImage: "/og-image.png",
  twitterHandle: "@ajaydhiman",
};
