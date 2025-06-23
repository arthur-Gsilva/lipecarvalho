'use client'

import { useLanguage } from "@/context/LangContext"
import { Title } from "../Title"

export const AboutMe = () => {

    const { language } = useLanguage()

    const englishText = "English and Programming teacher with extensive experience in teaching English as a foreign language at renowned institutions, using Cambridge and Cengage materials. I also work with translation and localization for international companies, focusing on editing, creative adaptation, and digital campaigns on platforms such as Taboola, Baidu, Outbrain, and Zemanta. <br /> <br /> In recent years, I have been developing projects focused on game programming and immersive experiences, with an emphasis on VR (virtual reality) and hands-on teaching of C# and Unity. I coordinate educational projects using active learning methodologies, such as Project-Based Learning, integrating language, technology, and creativity in the teaching-learning process. Currently, I lead innovative initiatives that combine game design, gamification, and storytelling as tools for education and creative expression."

    const portugueseText = "Professor de Inglês e Programação com ampla experiência no ensino de inglês como língua estrangeira em instituições renomadas, utilizando materiais da Cambridge e Cengage. Atuo também com tradução e localização para empresas internacionais, com foco em revisão, adaptação criativa e campanhas em plataformas como Taboola, Baidu, Outbrain e Zemanta. <br /> <br /> Nos últimos anos, venho desenvolvendo projetos voltados à programação de jogos digitais e experiências imersivas, com foco em VR (realidade virtual) e ensino prático de C# e Unity. Coordeno projetos educacionais com metodologias ativas, como Aprendizagem Baseada em Projetos, unindo linguagem, tecnologia e criatividade no processo de ensino-aprendizagem. Atualmente, lidero iniciativas inovadoras que combinam design de jogos, gamificação e storytelling como ferramentas de educação e expressão."

    return(
        <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
            <Title 
                english="About Me"
                portuguese="Sobre Mim"
                bgwhite
            />

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <img 
                    src="./about-me.jpg" 
                    alt="Foto minha working" 
                    className=" w-[80%] md:w-[27%] border-4 border-primary rounded-sm"
                />

                <div className="">
                    <div className="text-center font-bold">
                        <p className="text-md md:text-xl max-w-2xl text-justify">
                            <span
                        dangerouslySetInnerHTML={{
                            __html: language === 'pt-br' ? portugueseText : englishText
                        }}
                        />
                        </p>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    )
}