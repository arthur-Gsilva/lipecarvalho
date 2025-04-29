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
            <div className="flex flex-col items-center gap-3 ">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-md"/>

                <ReactCardFlip isFlipped={hovering} flipDirection="horizontal">
                    <h3 key="front" className="text-xl font-bold text-center">
                        {data.englishTitle}
                    </h3>
                    <h3 key="back" className="text-xl font-bold text-center">
                        {data.portugueseTitle}
                    </h3>
                </ReactCardFlip>

                <div 
                    className="px-4 py-2 rounded-md bg-primary text-secondary cursor-pointer"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                >
                    {hovering ? 'Translate' : 'Traduzir'}
                </div>

                <Link href={data.link} target="_blank" className="underline">Clique aqui para acessar o certificado</Link>
            </div>
        </div>
    )
}