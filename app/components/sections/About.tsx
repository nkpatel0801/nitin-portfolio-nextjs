'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">关于我</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                在这里添加你的个人简介。例如:你的名字、学校、专业、年级等基本信息。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                描述你的专业技能和经验。例如:你擅长的编程语言、框架、工具等,以及相关的项目经验。
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">个人兴趣</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                分享你的个人兴趣爱好。可以包括运动、音乐、艺术、阅读等各个方面。
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">职业目标</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                描述你的职业规划和目标。例如:你想从事的工作方向、正在寻找的实习机会等。
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}