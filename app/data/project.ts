// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Riyad Bank – Carpool App",
    company: "Nagarro",
    overview:
      "A secure ride-sharing app for bank employees with SSO-based login, live tracking, and real-time updates.",
    mainImage: "/companyicon/riyad-home.png",
    link: "https://www.riyadbank.com/",
    features: [
      {
        title: "SSO Login & Verified Access",
        description:
          "Enabled secure authentication for employees using SSO integration.",
        image: "/companyicon/riyad1.jpg",
      },
      {
        title: "Live Tracking & Route Optimization",
        description:
          "Integrated Google Maps API for optimized commute matching and real-time tracking.",
        image: "/companyicon/riyad2.png",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React Native", "TypeScript", "Redux", "Jest"],
      },
      { category: "Backend", items: ["Node.js", "PostgresSQL"] },
      { category: "Tools", items: ["VS Code", "Android Studio", "Git"] },
      { category: "infrastructure", items: ["aws"] },
  ],
    achievements: [
      { metric: "Employee Adoption Rate", value: "95%+", change: 95 },
      { metric: "Matching Accuracy", value: "Improved by 40%", change: 40 },
      { metric: "Sync Latency", value: "<1.2s", change: 100 },
    ],
  },
  2: {
    id: 2,
    title: "Mashreq Bank – Banking Platform",
    company: "Nagarro",
    overview:
      "A mobile-first digital banking platform with biometric login and push notifications for real-time alerts.",
    mainImage: "/companyicon/mashreq.png",
    link: "https://www.mashreq.com/en/uae/neo/",
    features: [
      {
        title: "Biometric Authentication",
        description:
          "Implemented secure login using fingerprint and face recognition.",
        image: "/companyicon/mashreq1.png",
      },
      {
        title: "Real-Time Notifications",
        description:
          "Added push alerts for transactions, improving engagement.",
        image: "/companyicon/mashreq2.png",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "NextJs", "Redux", "Jest"],
      },
      { category: "Backend", items: ["Node.js", "PostgresSQL"] },
      { category: "Tools", items: ["VS Code", "Postman", "Git"] },
      { category: "infrastructure", items: ["aws"] },
    ],
    achievements: [
      { metric: "Lighthouse Performance Score", value: "92%", change: 92 },
      { metric: "Session Reliability", value: "99.9%", change: 99.9 },
      { metric: "User Engagement", value: ">60%", change: 60 },
    ],
  },
  3: {
    id: 3,
    title: "Maruti Suzuki – Mobility & Service App",
    company: "Nagarro",
    overview:
      "A mobile app designed for Maruti Suzuki dealers enabling service bookings, document storage, and 24/7 roadside assistance to enhance customer experience.",
    mainImage: "/companyicon/maruti-home.png",
    link: "https://play.google.com/store/apps/details?id=com.marutisuzuki.rewards&hl=en_IN",
    features: [
      {
        title: "Service Booking Module",
        description:
          "Dealers can schedule vehicle services with real-time status tracking and instant customer notifications.",
        image: "/companyicon/maruti2.png",
      },
      {
        title: "Digital Document Vault",
        description:
          "Secure digital storage for vehicle documents such as registration and insurance.",
        image: "/companyicon/doc-maruti.png",
      },
      {
        title: "Emergency Roadside Help",
        description:
          "24/7 support for breakdowns with live location sharing and direct dispatch alerts.",
        image: "/companyicon/maruti3.png",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React Native", "Redux", "Styled Components","Jest"] },
      { category: "Backend", items: ["NodeJs", "Express", "mongodb"] },
      { category: "Tools", items: ["VS Code", "Postman", "Git"] },
      { category: "infrastructure", items: ["aws"] },
    ],
    achievements: [
      { metric: "Unit Test Coverage", value: "90%+", change: 90 },
      { metric: "Dealer Accessibility", value: "Improved by 25%", change: 100 },
      {
        metric: "Cross-platform Compatibility",
        value: "100%",
        change: 100,
      },
    ],
  },
};

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}