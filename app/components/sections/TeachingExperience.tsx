'use client'

import AnimatedText from '../common/AnimatedText'

type Course = {
  id: number
  code: string
  name: string
  level: string
  professor: string
  term: string
  reviews?: string[]
}

// 示例课程数据
const courses: Course[] = [
  {
    id: 1,
    code: "课程代码",
    name: "课程名称",
    level: "课程等级",
    professor: "教授姓名",
    term: "学期"
  },
  {
    id: 2,
    code: "ECON 170", 
    name: "环境经济学",
    level: "本科",
    professor: "Jeremy West 教授",
    term: "2025年冬季",
    reviews: [
      "学生评价示例1",
      "学生评价示例2"
    ]
  }
]

export default function TeachingExperience() {
  return (
    <section id="teaching" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">
      <div className="container max-w-4xl mx-auto">
        <AnimatedText>
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              教学经历
            </h1>
            <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              @ 你的学校
            </span>
          </div>
        </AnimatedText>

        <div className="space-y-12">
          {courses.map((course) => (
            <AnimatedText key={course.id}>
              <div className="space-y-4 pb-8 border-b border-black/10 dark:border-white/10">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    {course.code}: {course.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    ({course.level})
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base sm:text-lg">
                    助教 - {course.professor}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {course.term}
                  </p>
                </div>

                {course.reviews && course.reviews.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium">
                      学生评价精选:
                    </h3>
                    {course.reviews.map((review, index) => (
                      <blockquote 
                        key={index}
                        className="
                          pl-4 
                          border-l-2 border-gray-300 dark:border-gray-700
                          italic
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        "{review}"
                      </blockquote>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 