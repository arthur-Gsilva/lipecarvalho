import { JobWritter } from "./JobWritter"

import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Banner = () => {
    return(
        <div className="relative">
            <div className="container px-6 md:px-0 mt-8 flex flex-col-reverse md:flex-row mx-auto justify-between items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Hi, my name is Filipe Carvalho</h1>
                    <JobWritter />
                    <p className="text-xl text-gray-700">professor de inglês e programação/tradutor/legendador <br /> amante de tecnologia/entusiasta de fones de ouvido louco por café e jogos</p>
                    <div className="flex items-center gap-5">
                        <Link href={"https://www.instagram.com/flpc.english/"} target="_blank">
                            <IoLogoInstagram className="text-primary text-3xl cursor-pointer"/>
                        </Link>
                        <Link href={"https://www.youtube.com/@filipecarvalhotutoriais"} target="_blank">
                            <FaYoutube className="text-primary text-3xl cursor-pointer"/>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="./me.png" alt="foto minha" className="h-auto w-4/5 rounded-full border-4 border-primary" />
                </div>
            </div>


            <div>
                <img 
                    src="./bannerIcons/coffee.png" 
                    alt="" 
                    className="w-auto h-14 absolute top-4 left-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dice.png" 
                    alt="" 
                    className="w-auto h-14 absolute top-4 right-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/dog.png" 
                    alt="" 
                    className="w-auto h-14 absolute bottom-4 left-10 animate-slide-down"
                />
                <img 
                    src="./bannerIcons/game.png" 
                    alt="" 
                    className="w-auto h-14 absolute bottom-4 right-10 animate-slide-down"
                />
            </div>
        </div>
    )
}