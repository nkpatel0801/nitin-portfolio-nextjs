'use client'

import AnimatedText from '../common/AnimatedText'
import ResearchModal from './ResearchModal'
import { useState } from 'react'
import Image from 'next/image'

type Publication = {
  id: number
  title: string
  authors: string
  year: string
  journal?: string
  type: 'publication' | 'working'
  pdf?: string
  ssrn?: string
  description?: string
  citations?: string[]
  bulletPoints?: string[]
  overview?: string
  publishDate?: string
  chartImage?: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "论文标题",
    authors: "作者名字",
    year: "2024",
    journal: "期刊名称",
    type: "publication",
    pdf: "#",
    ssrn: "#",
    description: "论文简介",
    overview: "论文详细介绍",
    publishDate: "2024年1月",
    chartImage: "/research/paper-chart.png"
  },
  {
    id: 2,
    title: "另一篇论文标题",
    authors: "作者名字",
    year: "2023",
    journal: "期刊名称",
    type: "publication",
    ssrn: "#",
    citations: [
      "引用示例"
    ]
  },
  {
    id: 3,
    title: "工作论文标题",
    authors: "作者名字",
    year: "2024",
    type: "working",
    pdf: "#",
    bulletPoints: [
      "论文要点1",
      "论文要点2",
      "论文要点3"
    ]
  }
]

export default function Research() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null)

  const handleOpenModal = (paper: Publication) => {
    setSelectedPaper(paper)
    setModalOpen(true)
  }

  return (
    <section id="research" className="
      min-h-screen w-full 
      flex items-center justify-center 
      py-16 px-4 sm:px-8 md:px-16
    ">

      <div className="container max-w-4xl mx-auto relative z-10">
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            研究成果
          </h1>
        </AnimatedText>

        <div className="space-y-16">
          {['publication', 'working'].map((type) => (
            <div key={type} className="space-y-8">
              <AnimatedText>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {type === 'working' ? '工作论文' : '已发表论文'}
                </h2>
              </AnimatedText>

              {publications
                .filter(paper => paper.type === type)
                .map((paper) => (
                  <AnimatedText key={paper.id}>
                    <div className="
                      flex items-center justify-between
                      pb-6 border-b border-black/10 dark:border-white/10
                    ">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg">
                          <span className="font-medium">{paper.title}</span>
                          {paper.authors && (
                            <span className="opacity-70">({paper.authors})</span>
                          )}
                          <span className="opacity-70">{paper.year}.</span>
                          {paper.pdf && (
                            <a 
                              href={paper.pdf}
                              className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              [PDF]
                            </a>
                          )}
                          {paper.ssrn && (
                            <a 
                              href={paper.ssrn}
                              className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                            >
                              [SSRN]
                            </a>
                          )}
                        </div>

                        {paper.journal && (
                          <p className="opacity-80 text-sm sm:text-base italic">
                            {paper.journal}
                          </p>
                        )}

                        {paper.description && (
                          <p className="opacity-70 text-sm sm:text-base">
                            {paper.description}
                          </p>
                        )}

                        {paper.citations && (
                          <div className="mt-4">
                            <p className="font-medium text-sm sm:text-base mb-2">
                              引用列表:
                            </p>
                            {paper.citations.map((citation, index) => (
                              <p key={index} className="opacity-70 text-sm sm:text-base">
                                {citation}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => handleOpenModal(paper)}
                        className="
                          rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
                          transition-all flex items-center justify-center 
                          hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
                          hover:border-transparent 
                          hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                          dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                          h-10                                   
                          px-4                                   
                          text-sm
                          whitespace-nowrap                    
                          min-w-[120px] sm:min-w-[140px]      
                          ml-4 sm:ml-6                        
                          flex-shrink-0
                          group                               
                        "
                      >
                        <span className="
                          mr-2
                          group-hover:translate-x-0.5
                          transition-transform duration-300
                        ">
                          查看详情
                        </span>
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="
                            group-hover:translate-x-0.5
                            transition-transform duration-300
                            stroke-black dark:stroke-white
                          "
                        >
                          <path 
                            d="M3 8H13M13 8L8 3M13 8L8 13" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </AnimatedText>
                ))}
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedPaper && (
        <ResearchModal
          paper={selectedPaper}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  )
} 