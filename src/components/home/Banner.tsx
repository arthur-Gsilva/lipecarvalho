'use client'

import { JobWritter } from "./JobWritter"

import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { BigIcon } from "../BigIcon";
import { FaGoogle } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LangContext";

export const Banner = () => {

    const englishText = 'English and programming teacher/translator/subtitler <br /> tech lover/headphone enthusiast crazy about coffee and games'
    const portugueseText = `Professor de inglês e programação/tradutor/legendador <br /> amante de tecnologia/entusiasta de fones de ouvido louco por café e jogos`

    const { language } = useLanguage()

    return(
        <div className="relative">
            <div className="container px-6 md:px-0 mt-8 flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">{language === 'pt-br' ? 'Olá, meu nome é' : 'Hello, my name is'} Filipe Carvalho</h1>

                    <JobWritter />

                    <p className="text-md sm:text-xl text-gray-700">
                        <span
                        dangerouslySetInnerHTML={{
                            __html: language === 'pt-br' ? portugueseText : englishText
                        }}
                        />
                    </p>

                    <div className="flex flex-col items-start lg:flex-row lg:items-center gap-4 justify-between">
                        <div className="flex items-center gap-6">
                            
                            <BigIcon link="https://www.instagram.com/flpc.english/">
                                <IoLogoInstagram className="text-primary text-3xl cursor-pointer"/>
                            </BigIcon>

                            <BigIcon link="https://www.youtube.com/@filipecarvalhotutoriais">
                                <FaYoutube className="text-primary text-3xl cursor-pointer"/>
                            </BigIcon>

                            <BigIcon link='https://edudirectory.withgoogle.com/profiles/6039739744911360'>
                                <FaGoogle className="text-primary text-3xl cursor-pointer"/>
                            </BigIcon>
                            

                            <BigIcon link='https://learn.microsoft.com/pt-br/users/filipescmelo/'>
                                <FaWindows className="text-primary text-3xl cursor-pointer"/>
                            </BigIcon>

                            <BigIcon link='https://www.linkedin.com/in/filipescmelo/'>
                                <FaLinkedin className="text-primary text-3xl cursor-pointer"/>
                            </BigIcon>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-lg aspect-square">
                        <img 
                            src="./me.jpg" 
                            alt="foto minha" 
                            className="w-full h-full object-cover rounded-full border-4 border-primary"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-10">
                <img 
                    src="./bannerIcons/coffee.png" 
                    alt="ícone de café" 
                    className="w-8 h-8 md:h-14 md:w-auto  animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dice.png" 
                    alt="Ícone de dado" 
                    className="w-8 h-8 md:h-14 md:w-auto  animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dog.png" 
                    alt="Ícone de cachorro" 
                    className="w-8 h-8 md:h-14 md:w-auto  animate-slide-down"
                />
                <img 
                    src="./bannerIcons/game.png" 
                    alt="Ícone de console" 
                    className="w-8 h-8 md:h-14 md:w-auto animate-slide-down"
                />
            </div>
        </div>
    )
}