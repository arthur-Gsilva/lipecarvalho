'use client'

import { BadgeCard } from "@/components/cards/BadgeCard"
import { Title } from "@/components/Title"
import { useLanguage } from "@/context/LangContext"
import { Badges } from "@/data/badges"
import Link from "next/link"
import { CgArrowsHAlt } from "react-icons/cg";


const page = () => {

    const { language } = useLanguage()

    return(
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <Title 
                    english="Badges"
                    portuguese="Insígnias"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
                    {Badges.map((item) => (
                        <BadgeCard key={item.title} data={item}/>
                    ))}
                </div>

                <div className="mt-12 w-full ">
                    <div className="flex justify-between items-center w-1/2 mx-auto">
                        <Link href={'https://learn.microsoft.com/pt-br/users/filipescmelo/'} target="_blank">
                            <img 
                                src="microsoft-learn.png" 
                                alt="microsoft learn" 
                                className="rounded-xl border-3 border-primary w-44 h-44"
                            />
                        </Link>

                        <div className="relative">
                            <span 
                                className="text-xl font-bold absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >Ver mais</span>
                            <img 
                                src={'arrow.png'}
                                alt=""
                                className=""
                            />
                            
                        </div>

                        <Link href={'https://edudirectory.withgoogle.com/profiles/6039739744911360'} target="_blank">
                            <img 
                                src="google-education.jpg" 
                                alt="Google for education" 
                                className="rounded-xl border-3 border-primary w-44 h-44"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page