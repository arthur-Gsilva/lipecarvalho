import Link from "next/link"
import { MirrorText } from "./MirrorText"
import { IoLogoInstagram } from "react-icons/io"
import { FaYoutube, FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return(
        <footer className="bg-primary">
            <div className="container px-6 md:px-0 mx-auto mt-10 py-4 md:py-10">
                <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
                    <div className="flex flex-col md:flex-row justify-between w-full flex-1 md:gap-12">
                        <div>
                            <MirrorText
                                main="Contact Me!"
                                mirror="Fale Comigo!"
                                bgwhite={false}
                            />
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="h-full w-[1px] rounded-md bg-white"></div>
                            <div className="text-white flex flex-col gap-5">
                                <Link href={"https://www.instagram.com/flpc.english/"} target="_blank"
                                className="flex items-center gap-3">
                                    <IoLogoInstagram className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl">Instagram</p>
                                </Link>
                                <Link href={"https://www.youtube.com/@filipecarvalhotutoriais"} target="_blank"
                                className="flex items-center gap-3">
                                    <FaYoutube className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl">Youtube</p>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/filipescmelo/"} target="_blank"
                                className="flex items-center gap-3">
                                    <FaLinkedin className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl">Linkedin</p>
                                </Link>
                                <Link href={"https://www.youtube.com/@filipecarvalhotutoriais"} target="_blank"
                                className="flex items-center gap-3">
                                    <FaGithub className="text-white text-3xl cursor-pointer"/>
                                    <p className="text-xl">Github</p>
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