"use client";

import Image from "next/image";
import AnimatedText from "../common/AnimatedText";
import FloatingElements from "../common/FloatingElements";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="border-2 border-white rounded-lg"
            src="/Nitin-Profile.jpg" // Replace with your avatar image path in public folder
            alt="Profile Picture"
            width={210}
            height={210}
            priority
          />
          <h1 className="text-4xl font-bold">Nitin Baghel</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Front-End Developer
          </p>
        </AnimatedText>

        <AnimatedText className="max-w-2xl text-center sm:text-left">
          <p className="text-foreground/80 leading-relaxed">
            B.E. in Information Technology | 6+ YOE building high-performance
            Web & Mobile Apps using React, React Native & Next.js
          </p>
        </AnimatedText>

        <AnimatedText className="flex flex-wrap gap-4 items-center justify-center sm:flex-row">
          <a
            className="
      relative z-20 rounded-full border border-black/[.08] dark:border-white/[.145] 
      transition-colors flex items-center justify-center 
      bg-[#4CAF50] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
      h-12 px-5 text-base min-w-[160px] sm:min-w-fit"
            href="https://github.com/baghel-nitin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span className="relative z-20">GitHub</span>
          </a>

          <a
            className="
      rounded-full border border-black/[.08] dark:border-white/[.145] 
      transition-colors flex items-center justify-center 
      bg-[#1E90FF] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
      h-12 px-5 text-base min-w-[160px] sm:min-w-fit"
            href="/Nitin_Baghel_Resume_2025.pdf"
            target="_blank"
          >
            <Image
              className="dark:invert mr-2"
              src="/resume.svg"
              alt="Resume"
              width={20}
              height={20}
            />
            View Resume
          </a>

          <a
            className="
      relative z-20 rounded-full border border-black/[.08] dark:border-white/[.145] 
      transition-colors flex items-center justify-center 
      bg-[#D93025] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
      h-12 px-5 text-base min-w-[160px] sm:min-w-fit"
            href="mailto:baghelnitin1995@gmail.com"
          >
            <Image
              aria-hidden
              className="dark:invert mr-2"
              src="/mail.svg"
              alt="Email"
              width={16}
              height={16}
            />
            Send Email
          </a>

          <a
            className="
      relative z-20 rounded-full border border-black/[.08] dark:border-white/[.145] 
      transition-colors flex items-center justify-center 
      bg-[#9C27B0] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
      h-12 px-5 text-base min-w-[160px] sm:min-w-fit"
            href="https://www.linkedin.com/in/nitin-b-82415b97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="dark:invert mr-2"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
        </AnimatedText>
      </main>
    </section>
  );
}
