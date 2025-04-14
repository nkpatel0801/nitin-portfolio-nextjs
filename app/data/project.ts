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

// todo: Project data mapping object - add for every new project modal details
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
      { metric: "Improved Matching Accuracy", value: "40%", change: 40 },
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
      { metric: "Improved Dealer Accessibility", value: "25%", change: 100 },
      {
        metric: "Cross-platform Compatibility",
        value: "100%",
        change: 100,
      },
    ],
  },
  4: {
    id: 4,
    title: "Change Healthcare – Health Management System",
    company: "Encora Digital LLC",
    overview:
      "A healthcare dashboard and scheduling system for hospitals with modern UI, improved responsiveness, and real-time updates.",
    mainImage: "/companyicon/chc1.jpg",
    link: "https://www.changehealthcare.com/",
    features: [
      {
        title: "Modern UI & Dashboards",
        description:
          "Rebuilt the legacy system into a modern responsive React app, improving load times and usability.",
        image: "/companyicon/chc1.jpg",
      },
      {
        title: "Task Automation & Notifications",
        description:
          "Implemented workflows and push notifications to automate scheduling and reduce staff workload.",
        image: "/companyicon/chc1.jpg",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "Redux", "Jest"] },
      { category: "Backend", items: ["PostgresSQL"] },
      { category: "Tools", items: ["VS Code", "Postman", "Git"] },
      { category: "infrastructure", items: ["aws"] },
    ],
    achievements: [
      { metric: "Improved User Engagement", value: "35%", change: 35 },
      { metric: "Reduced Load Time", value: "40%", change: 40 },
      { metric: "Daily Active Users", value: "10K+", change: 100 },
    ],
  },
  5: {
    id: 5,
    title: "CVS – Nicotine Replacement Therapy (NRT)",
    company: "Encora Digital LLC",
    overview:
      "A PWA-enabled smoking cessation app that helps users track progress and receive milestone reminders with offline support.",
    mainImage: "/companyicon/nrt1.png",
    link: "https://www.cvs.com/",
    features: [
      {
        title: "Milestone Tracking & Reminders",
        description:
          "Users receive motivational alerts and can track progress offline.",
        image: "/companyicon/nrt4.png",
      },
      {
        title: "PWA & Offline Support",
        description:
          "Built as a PWA to provide access and functionality without internet connection.",
        image: "/companyicon/nrt2.png",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Redux", "Jest"] },
      { category: "Backend", items: ["Firebase"] },
      { category: "Tools", items: ["VS Code", "Postman", "Git"] },
      { category: "infrastructure", items: ["GitHub Actions"] },
    ],
    achievements: [
      { metric: "Increased Therapy Completion", value: "30%", change: 30 },
      { metric: "Offline Access", value: "100%", change: 100 },
      { metric: "Increased User Retention", value: "20%", change: 20 },
    ],
  },
  // 6: {
  //   id: 6,
  //   title: "Agri Allies – Farmer Community App",
  //   company: "Encora Digital LLC",
  //   overview:
  //     "A community mobile app that connects 5,000+ farmers for support, shared resources, and AI-driven chatbot assistance.",
  //   mainImage: "/companyicon/agri-allies.png",
  //   link: "https://agri-allies.org/",
  //   features: [
  //     {
  //       title: "Multilingual AI Chatbot",
  //       description:
  //         "Integrated OpenAI APIs to offer 24/7 automated support in 5 regional languages.",
  //       image: "/companyicon/agri-chatbot.png",
  //     },
  //     {
  //       title: "Community Support & Posts",
  //       description:
  //         "Farmers can share queries, images, and participate in topic discussions.",
  //       image: "/companyicon/agri-community.png",
  //     },
  //   ],
  //   techStack: [
  //     { category: "Frontend", items: ["React Native", "React", "Firebase"] },
  //     { category: "Backend", items: ["Firebase Functions"] },
  //     { category: "Tools", items: ["VS Code", "GitHub", "Git"] },
  //     { category: "infrastructure", items: ["Firebase", "OpenAI"] },
  //   ],
  //   achievements: [
  //     { metric: "Farmer Reach", value: "5,000+", change: 100 },
  //     { metric: "Support Queries", value: "Reduced by 50%", change: 50 },
  //     { metric: "Engagement", value: "High Community Involvement", change: 80 },
  //   ],
  // },
  6: {
    id: 6,
    title: "The Fan Lounge – OTT Sports Platform",
    company: "ATMECS Technologies",
    overview:
      "A scalable OTT platform providing sports content, live scores, and personalized fan experiences with monetization.",
    mainImage: "/companyicon/theFanLaunge.png",
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/atmecsinc1613502902599.atmecs_fanlounge?tab=overview",
    features: [
      {
        title: "Live Scores & Streaming",
        description:
          "Delivered real-time sports content with live updates and personalized feeds.",
        image: "/companyicon/theFanLaunge.png",
      },
      {
        title: "AdMonetization & Analytics",
        description:
          "Integrated Google AdMob and analytics for revenue tracking and user retention insights.",
        image: "/companyicon/theFanLaunge.png",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React Native", "React", "Redux"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Tools", items: ["VS Code", "Postman", "Git"] },
      { category: "infrastructure", items: ["Azure"] },
    ],
    achievements: [
      { metric: "Monthly Revenue Growth", value: "+15%", change: 15 },
      { metric: "Boosted User Engagement", value: "40%", change: 40 },
      { metric: "Cross-Platform Users", value: "50K+", change: 100 },
    ],
  },
  7: {
    id: 7,
    title: "Northgate – UK Police Control Room Application",
    company: "ATMECS Technologies",
    overview:
      "A mission-critical control room interface for UK police operations enabling real-time actions, rapid emergency response, and secure access workflows.",
    mainImage: "/companyicon/northgate.png",
    link: "https://www.police.uk/pu/your-area/sussex-police/northgate/?yourlocalpolicingteam=about-us&tab=stopandsearch",
    features: [
      {
        title: "Real-Time Operations UI",
        description:
          "Built responsive UI components to handle critical emergency actions under 500ms latency.",
        image: "/companyicon/north1.png",
      },
      {
        title: "Filtered Views & Authentication",
        description:
          "Implemented filterable views, secure login, and data pagination for efficient officer access.",
        image: "/companyicon/north2.png",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Redux", "SASS"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Tools", items: ["VS Code", "Git", "Postman"] },
      { category: "infrastructure", items: ["Azure"] },
    ],
    achievements: [
      { metric: "Response Time", value: "<500ms", change: 100 },
      { metric: "Active Users", value: "5,000+", change: 100 },
      { metric: "System Uptime", value: "99.99%", change: 99.99 },
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