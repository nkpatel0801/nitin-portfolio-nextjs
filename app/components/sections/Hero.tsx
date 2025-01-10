'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
// import FloatingElements from "../common/FloatingElements" // 需要用户自己添加，主页背景动画

export default function Hero() {
  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <FloatingElements /> */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="个人头像"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold">你的名字</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            你的职位/身份
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
            在这里添加一句简短的个人介绍,例如:你的学校、专业、年级,以及你正在寻找的机会。
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    
              px-5                                   
              text-base                              
            "
            href="你的GitHub链接"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0 mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}                             
              height={20}
              sizes="20px"                          
            />
            GitHub
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              h-12                                   
              px-5                                   
              text-base                              
              min-w-44                              
            "
            href="/resume.pdf"
            target="_blank"
          >
            查看简历
          </a>
        </AnimatedText>
      </main>

      <AnimatedText 
        className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:你的邮箱"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/mail.svg"
            alt="Email"
            width={16}
            height={16}
          />
          联系我
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="你的LinkedIn链接"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/folder.svg"
            alt="Projects"
            width={16}
            height={16}
          />
          项目
        </a>
      </AnimatedText>
    </section>
  )
} 