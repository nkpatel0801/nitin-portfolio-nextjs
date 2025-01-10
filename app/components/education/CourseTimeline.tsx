'use client'

import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"
import GradientBackground from "../common/GradientBackground"

interface CourseItem {
  date: string
  title: string
  description: string
}

// 示例课程数据
const courses: CourseItem[] = [
  {
    date: "2023年秋季",
    title: "计算机科学导论",
    description: "编程基础 | 算法思维 | 计算机系统"
  },
  {
    date: "2024年春季",
    title: "数据结构与算法",
    description: "数组与链表 | 树与图 | 排序算法"
  },
  {
    date: "2024年秋季", 
    title: "Web开发基础",
    description: "HTML/CSS | JavaScript | React框架"
  }
]

export default function CourseTimeline() {
  return (
    <div className="w-full relative">
      <GradientBackground 
        sectionId="education"
        gradientColors={{
          start: '#34D399',  // 浅绿色
          end: '#10B981'     // 深绿色
        }}
      />
      
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-10" />
      
      {courses.map((course, index) => (
        <AnimatedText key={index}>
          <div className={`
            flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
            ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
            relative z-10
          `}>
            <div className="flex-1 text-center">
              <h3 className="
                text-base sm:text-lg md:text-xl  /* 移动端16px，sm:18px，md:20px */
                font-bold 
                mb-2
              ">
                {course.title}
              </h3>
              <p className="
                text-xs sm:text-sm              /* 移动端12px，sm及以上14px */
                text-foreground/60 
                mb-1
              ">
                {course.date}
              </p>
              <p className="
                text-xs sm:text-sm              /* 移动端12px，sm及以上14px */
                text-foreground/80
              ">
                {course.description}
              </p>
            </div>
            
            <div className="relative z-20">
              <motion.div 
                className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2
                }}
              />
            </div>
            
            <div className="flex-1" />
          </div>
        </AnimatedText>
      ))}
    </div>
  )
}