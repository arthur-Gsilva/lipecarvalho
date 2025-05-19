'use client'

import { useLanguage } from "@/context/LangContext"
import { Title } from "../Title"

export const AboutMe = () => {

    const { language } = useLanguage()

    const englishText = "English teacher and translator since 2015, with experience in teaching English as a foreign language using Cambridge and Cengage materials. I’ve also worked with international companies on translation, localization, editing, and creative campaigns for platforms like Taboola, Baidu, Outbrain, and Zemanta."

    const portugueseText = "Professor de inglês e tradutor desde 2015, com experiência no ensino de inglês como língua estrangeira em escolas renomadas, utilizando materiais da Cambridge e Cengage. Atuei também com tradução e localização para empresas internacionais, incluindo revisão, adaptação criativa e campanhas em plataformas como Taboola, Baidu, Outbrain e Zemanta."

    return(
        <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
            <Title 
                english="About Me"
                portuguese="Sobre Mim"
                bgwhite
            />

            <div className="flex flex-col md:flex-row gap-6 items-center">
                <img 
                    src="./nochico.jpg" 
                    alt="Foto minha working" 
                    className=" w-[80%] md:w-[35%]  border-8 border-primary rounded-sm"
                />

                <div className="flex-1">
                    <div className="text-center mb-6">
                        <p className="text-md md:text-xl">
                            {language === 'pt-br' ? portugueseText : englishText}
                        </p>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    )
}