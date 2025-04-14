'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define experience entry type
type Experience = {
  id: number          // Unique identifier
  title: string       // Position title
  company: string     // Company name
  period: string      // Work period
  logo: string        // Company logo path (stored in public/companyicon/)
  skills: string[]    // Skills list (corresponding icons stored in public/skills/, filename in lowercase)
  description: string // Work description
}

// Example data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place logo images in public/companyicon/ directory
// 3. Skills icons will be automatically fetched from public/skills/ directory
//    Example: "JavaScript" -> public/skills/javascript.png
// 4. Recommended to sort experience entries in reverse chronological order
const experiences: Experience[] = [
  {
    id: 1,
    title: "React.js & React Native Developer",
    company: "Nagarro",
    period: "December 2023 – Present",
    logo: "/companyicon/nagarro.png",
    skills: ["React", "React Native", "Next.js", "Firebase", "Jest", "Google Maps API", "SSO", "Push Notifications"],
    description: `Built secure mobile/web apps for Riyad Bank (Carpool), Mashreq Bank (Banking Platform), and Maruti Suzuki (Mobility App). 
Integrated SSO login, live tracking, background sync, and biometric authentication. 
Achieved 92% Lighthouse score and 90%+ unit test coverage with Jest for real-time data integrity and accessibility.`
  },
  {
    id: 2,
    title: "React.js Developer & Team Lead",
    company: "Encora Digital LLC",
    period: "August 2022 – December 2023",
    logo: "/companyicon/encora.png",
    skills: ["React", "React Native", "Redux", "Firebase", "OpenAI API", "CI/CD", "Next.js"],
    description: `Led development of CHC Healthcare Dashboard, CVS NRT PWA, and Agri Allies Farmer App.
Enabled offline storage, multilingual AI chatbot, push notifications, and Git-based workflows.
Boosted user engagement, automated workflows, and improved therapy completion rates with PWA rollout.`
  },
  {
    id: 3,
    title: "React.js Developer & Scrum Master",
    company: "ATMECS Technologies",
    period: "January 2019 – August 2022",
    logo: "/companyicon/atmecs.jpg",
    skills: ["React", "React Native", "Azure App Center", "REST APIs", "Google AdMob"],
    description: `Delivered OTT Platform (The Fan Lounge) and UK Police Control Room System.
Led a 9-member team across SDLC, deployed to app stores, and integrated analytics, ads, and real-time UIs.
Improved emergency response time (<500ms) and achieved 15% revenue growth through AdMob monetization.`
  }
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        {/* Optional gradient background component */}
        {/* You can adjust background colors by modifying gradientColors */}
        {/* Examples:
          Blue theme: start:'#3B82F6' end:'#1E40AF'
          Green theme: start:'#10B981' end:'#047857'
          Pink theme: start:'#EC4899' end:'#BE185D'
        */}
        <GradientBackground 
          sectionId="experience"
          gradientColors={{
            start: '#7C3AED',  // Light violet
            end: '#5B21B6'     // Deep violet
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">
            Experience
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    // setSelectedExperience(experience.id)
                    // setModalOpen(true)
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
                    h-full
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="
                        text-base sm:text-lg md:text-xl  /* Mobile: 16px, sm:18px, md:20px */
                        font-bold 
                        mb-1
                      ">
                        {experience.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 dark:text-white">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#299396] text-base dark:text-[#FCCB91] mb-4">
                    {experience.period}
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-white mb-6">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-[#299396] backdrop-blur-[8px]
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
        experienceId={selectedExperience ?? 1}
      />
    </section>
  )
}
