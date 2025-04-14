'use client'

import { useState } from "react"
import { MirrorText } from "../MirrorText"

export const AboutMe = () => {

    const [hovering, setHovering] = useState(false)

    const englishText = "English teacher and professional translator since 2015. I have experience in teaching English as a foreign language in renowned language schools and professional courses using book collections such as Interchange (Cambridge Press), evolve (Cambridge Press), ventures (Cambridge Press), world class (Cengage), and World English (Cengage). my experiences with translation involve services for international companies, focused on content production, proofreading, localization, and creative campaigns development in platforms such as Taboola, Baidu, outbrain, and Zemanta."

    const portugueseText = "Professor de língua inglesa e tradutor profissional desde 2015. possuo experiência com o ensino de inglês como língua estrangeira em respeitadas escolas de idiomas e cursos profissionalizantes usando coleções de livros como Interchange (Cambridge press), evolve (Cambridge Press), ventures (Cambridge press), world class (Cengage) e world English (Cengage). minhas experiências com tradução envolvem serviços para empresas internacionais, com foco em produção de conteúdo, correção de tradução, localização e desenvolvimento de campanhas criativas em plataformas como taboola, baidu, outbrain e zemanta."

    return(
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <MirrorText main="About Me" mirror="Sobre Mim"/>

                <div>
                    <p>
                    {hovering ? portugueseText : englishText}
                    </p>

                    <div className="flex items-center justify-center mt-4">
                        <div 
                            className="bg-primary text-white p-2 rounded-sm cursor-pointer transition duration-300 hover:rotate-y-[30deg] shadow-lg"
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                        >
                            {hovering ? 'Translate' : 'Traduzir'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}