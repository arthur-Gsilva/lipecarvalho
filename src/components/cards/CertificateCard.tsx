'use client'

import { Certificado } from "@/data/certificates"
import Link from "next/link"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"

type Props = {
    data: Certificado
}

export const CertificateCard = ({ data }: Props) => {

    const [hovering, setHovering] = useState(false)

    return(
        <div className="bg-secondary text-primary p-4 rounded-lg shadow-xl">
            <div className="flex flex-col justify-between h-full items-center gap-6 ">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-md"/>

                <ReactCardFlip isFlipped={hovering} flipDirection="horizontal">
                    <h3 key="front" className="text-sm md:text-md font-bold text-center">
                        {data.englishTitle}
                    </h3>
                    <h3 key="back" className="text-sm md:text-md font-bold text-center">
                        {data.portugueseTitle}
                    </h3>
                </ReactCardFlip>

                <div 
                    className="px-2 py-1 sm:px-4 sm:py-2  rounded-md bg-primary text-secondary cursor-pointer"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    {hovering ? 'Translate' : 'Traduzir'}
                </div>

                <Link href={data.link} target="_blank" className="underline text-center text-sm sm:text-md">Clique aqui para acessar o certificado</Link>
            </div>
        </div>
    )
}