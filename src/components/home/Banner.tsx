import { JobWritter } from "./JobWritter"

import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Banner = () => {
    return(
        <div className="relative">
            <div className="container px-6 md:px-0 mt-8 flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Hi, my name is Filipe Carvalho</h1>

                    <JobWritter />

                    <p className="text-md sm:text-xl text-gray-700">professor de inglês e programação/tradutor/legendador <br /> amante de tecnologia/entusiasta de fones de ouvido louco por café e jogos</p>

                    <div className="flex flex-col items-start lg:flex-row lg:items-center gap-4 justify-between">
                        <div className="flex items-center gap-6">
                            <Link href={"https://www.instagram.com/flpc.english/"} target="_blank">
                                <IoLogoInstagram className="text-primary text-3xl cursor-pointer"/>
                            </Link>
                            <Link href={"https://www.youtube.com/@filipecarvalhotutoriais"} target="_blank">
                                <FaYoutube className="text-primary text-3xl cursor-pointer"/>
                            </Link>
                        </div>

                        <div className="flex gap-4">
                            <Link href={'https://edudirectory.withgoogle.com/profiles/6039739744911360'} target="_blank">
                                <img 
                                    src="./google-education.jpg" 
                                    alt="Google Education" 
                                    className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-secondary p-3 hover:bg-primary transition-all"
                                />
                            </Link>

                            <Link href={'https://learn.microsoft.com/pt-br/users/filipescmelo/'} target="_blank">
                                <img 
                                    src="./microsoft-learn.png" 
                                    alt="Microsoft Learn" 
                                    className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-secondary p-3 hover:bg-primary"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="./me.png" alt="foto minha" className="h-auto w-4/5 rounded-full border-5 border-primary" />
                </div>
            </div>


            <div>
                <img 
                    src="./bannerIcons/coffee.png" 
                    alt="ícone de café" 
                    className="w-8 h-8 md:h-14 md:w-auto absolute top-4 left-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dice.png" 
                    alt="Ícone de dado" 
                    className="w-8 h-8 md:h-14 md:w-auto absolute top-4 right-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dog.png" 
                    alt="Ícone de cachorro" 
                    className="w-8 h-8 md:h-14 md:w-auto absolute -bottom-6 left-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/game.png" 
                    alt="Ícone de console" 
                    className="w-8 h-8 md:h-14 md:w-auto absolute -bottom-6 right-10 animate-slide-down"
                />
            </div>
        </div>
    )
}