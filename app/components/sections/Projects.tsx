'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

// Example project data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place project screenshots in public/project/ directory
// 3. Sort projects in reverse chronological order
// 4. Project descriptions should highlight core features and technical highlights
const projects: Project[] = [
  {
    id: 1,
    title: "Riyad Bank – Carpool App",
    description: "A secure ride-sharing app built for bank employees with SSO login, real-time ride matching, route optimization (Google Maps API), and periodic background sync for updated ride statuses.",
    period: "2024.9 - 2025.5",
    image: "/companyicon/riyad-home.png",
    skills: ["React Native", "SSO", "Google Maps API", "Firebase"],
    link: "https://riyadbank.com"
  },
  {
    id: 2,
    title: "Mashreq Bank – Web & Mobile Banking Platform",
    description: "High-performance digital banking platform with biometric login, session management, real-time alerts, and optimized architecture achieving 92% Lighthouse performance.",
    period: "2024.04 - 2024.9",
    image: "/companyicon/mashreq-home.png",
    skills: ["React", "React Native", "Firebase", "Redux"],
    link: "https://mashreqbank.com"
  },
  {
    id: 3,
    title: "Maruti Suzuki – Dealer Mobility App",
    description: "Mobile app for Maruti dealers with features like service booking, digital docs, and roadside assistance. Integrated REST APIs, real-time tracking, and 90%+ test coverage.",
    period: "2023.12 - 2024.3",
    image: "/companyicon/maruti-home.png",
    skills: ["React Native", "Firebase", "REST APIs", "Jest"],
    link: "https://marutisuzuki.com"
  },
  {
    id: 4,
    title: "Change Healthcare – Healthcare Management System",
    description: "Modernized a legacy healthcare system using React and Next.js, with dashboards for 10K+ users, real-time updates, CI/CD, and reduced staff workload.",
    period: "2022.08 - 2023.12",
    image: "/companyicon/chc1.jpg",
    skills: ["React", "Next.js", "Redux", "CI/CD"],
    link: "https://www.changehealthcare.com"
  },
  {
    id: 5,
    title: "NRT – Nicotine Replacement Therapy (CVS Pharmacy App – PWA)",
    description: "Progressive Web App for smoking cessation with milestone tracking, reminders, offline access, and increased therapy completion rates.",
    period: "2022.08 - 2023.12",
    image: "/companyicon/NRT.png",
    skills: ["React", "Redux", "Tailwind CSS", "PWA"],
    link: "https://www.cvshealth.com/"
  },
  // {
  //   id: 6,
  //   title: "Agri Allies – Farmer Community App",
  //   description: "Cross-platform app with multilingual ChatGPT chatbot, image-based queries, and real-time discussions for 5,000+ farmers.",
  //   period: "2022.08 - 2023.12",
  //   image: "/projects/agri/screenshot.png",
  //   skills: ["React Native", "Firebase", "OpenAI API"],
  //   link: "https://encora.com"
  // },
  {
    id: 6,
    title: "The Fan Lounge – OTT Platform",
    description: "Fan-focused OTT app with live scores, monetization via AdMob, Azure analytics, and App Store deployment for cross-platform engagement.",
    period: "2019.01 - 2022.08",
    image: "/companyicon/theFanLaunge.png",
    skills: ["React", "React Native", "Azure App Center", "AdMob"],
    link: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/atmecsinc1613502902599.atmecs_fanlounge?tab=overview"
  },
  {
    id: 7,
    title: "Northgate – UK Police Control Room UI",
    description: "Mission-critical app for emergency response with real-time UI, filters, and pagination. Supported <500ms actions for 5,000+ users.",
    period: "2019.01 - 2022.08",
    image: "/companyicon/northgate.png",
    skills: ["React", "REST APIs", "Redux"],
    link: "https://www.police.uk/pu/your-area/sussex-police/northgate/?yourlocalpolicingteam=about-us"
  }
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // Light rose
            end: '#BE123C'     // Deep rose
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-[#a7989833]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 dark:text-[#f96e91] mb-2">
                    {project.period}
                  </p>
                  
                  <p className="text-base text-gray-600 dark:text-white mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-[#8e73ba] dark:bg-[#8e73ba]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-white dark:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 