'use client'

import Link from "next/link"
import { Title } from "./Title"
import { IoLogoInstagram } from "react-icons/io"
import { FaYoutube, FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";
import { SiGmail } from 'react-icons/si'

export const Footer = () => {
    return(
        <footer className="bg-primary">
            <div className="container px-6 md:px-0 mx-auto mt-10 py-4 md:py-10">
                <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
                    <div className="flex items-center flex-col md:flex-row gap-6 w-full flex-1">

                        <div className="flex items-center justify-center w-1/2">
                            <img src="LOGO.png" alt="Logo principal" className="h-auto w-full"/>
                        </div>

                        <div className="flex justify-center items-center gap-5 h-full">
                            <div className="h-full w-[2px] rounded-md bg-white"></div>

                            <div className="text-white flex flex-col gap-5">
                                <Link href={"https://www.instagram.com/flpc.english/"} target="_blank"
                                className="flex items-center gap-3">
                                    <IoLogoInstagram className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl font-bold">Instagram</p>
                                </Link>
                                <Link href={"https://www.youtube.com/@filipecarvalhotutoriais"} target="_blank"
                                className="flex items-center gap-3">
                                    <FaYoutube className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl font-bold">Youtube</p>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/filipescmelo/"} target="_blank"
                                className="flex items-center gap-3">
                                    <FaLinkedin className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl font-bold">Linkedin</p>
                                </Link>
                                <Link href={"mailto:filipescmelo@gmail.com"} className="flex items-center gap-3">
                                    <SiGmail className="text-white text-3xl cursor-pointer" />
                                    <p className="text-xl font-bold">Gmail</p>
                                </Link>
                                <Link href={"http://lattes.cnpq.br/8967415690319745"} target="_blank" className="flex items-center gap-3">
                                    <img src="lattes.png" alt="Currículo lattes" className="h-8 w-8"/>
                                    <p className="text-xl font-bold">Lattes</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end items-center flex-1">
                        <img src="./footer-img.png" alt="" className="w-1/2 h-auto"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}