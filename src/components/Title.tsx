'use client'

import { useLanguage } from "@/context/LangContext"

type MirrorTextProps = {
    portuguese: string
    english: string,
    bgwhite?: boolean
}
  
export const Title = ({ portuguese, english }: MirrorTextProps) => {

    const { language } = useLanguage()

    return (
        <div className="relative w-fit mx-auto mt-20 mb-10">

            <h1 className="relative text-4xl md:text-6xl font-bold text-primary whitespace-nowrap">{
                language === 'pt-br' ? portuguese : english
            }</h1>
        </div>
    )
}