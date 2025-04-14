'use client'
import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p
               className="text-lg text-foreground/80 leading-relaxed">
              Hi, I'm Nitin Baghel, a Frontend Developer with a Bachelor of Engineering in IT from Acropolis Institute of Technology & Research. With over 6 years of industry experience, I specialize in building high-performance, scalable web and mobile applications using React.js, React Native, and Next.js.
            </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              My work spans fintech, healthcare, automotive, and OTT platforms—delivering real-time features, push notifications, and user-centric solutions with strong performance and accessibility. I'm well-versed in modern tools and frameworks including TypeScript, Redux, Firebase, GraphQL, and AWS, and have led development teams to bring enterprise-level apps to life.  
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#80deea]">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I enjoy exploring the latest in AI tools, experimenting with new frontend stacks, and continuously learning ways to make products faster, cleaner, and more intuitive.              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#80deea]">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I'm currently seeking opportunities where I can continue to grow as a Senior Frontend Engineer—contributing to innovative products, leading frontend architecture, and working with cross-functional teams to deliver impactful digital experiences.              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}