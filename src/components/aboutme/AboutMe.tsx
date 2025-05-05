'use client'

import ReactCardFlip from "react-card-flip"
import { MirrorText } from "../MirrorText"
import { useState } from "react"

export const AboutMe = () => {

    const [hovering, setHovering] = useState(false)

    const englishText = "English teacher and translator since 2015, with experience in teaching English as a foreign language using Cambridge and Cengage materials. I’ve also worked with international companies on translation, localization, editing, and creative campaigns for platforms like Taboola, Baidu, Outbrain, and Zemanta."

    const portugueseText = "Professor de inglês e tradutor desde 2015, com experiência no ensino de inglês como língua estrangeira em escolas renomadas, utilizando materiais da Cambridge e Cengage. Atuei também com tradução e localização para empresas internacionais, incluindo revisão, adaptação criativa e campanhas em plataformas como Taboola, Baidu, Outbrain e Zemanta."

    return(
        <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
            <MirrorText 
                main="About Me"
                mirror="Sobre Mim"
                bgwhite
            />

            <div className="flex flex-col md:flex-row gap-6 items-center">
                <img 
                    src="./me.jpg" 
                    alt="Foto minha working" 
                    className=" w-full md:w-[40%] h-auto border-8 border-primary rounded-sm"
                />

                <div className="flex-1">
                    <div className="text-center mb-6">
                        <ReactCardFlip isFlipped={hovering} flipDirection="horizontal">
                            <p key="front" className="text-md md:text-xl">
                                {englishText}
                            </p>
                            <p key="back" className="text-md md:text-xl">
                                {portugueseText}
                            </p>
                        </ReactCardFlip>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <div
                            className="bg-primary text-white p-5 rounded-sm cursor-pointer transition duration-400 hover:rotate-y-[30deg] shadow-lg"
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