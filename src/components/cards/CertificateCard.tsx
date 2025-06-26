'use client'

import { useLanguage } from "@/context/LangContext"
import { Certificado } from "@/data/certificates"
import { Material } from "@/data/materials"
import Link from "next/link"

type Props = {
    data: Certificado | Material,
    certificate: boolean
}

export const CertificateCard = ({ data }: Props) => {

    const { language } = useLanguage()

    return(
        <Link href={data.link} target="_blank">
            <div className=" text-primary p-4 rounded-lg">
                <div className="flex flex-col h-full items-center gap-2 ">
                    <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-xl border-3 border-primary"/>
            
                    <h3 className="text-sm md:text-lg font-bold text-center uppercase">
                        {language === 'pt-br' ? data.portugueseTitle : data.englishTitle}
                    </h3>
                </div>
            </div>
        </Link>
    )
}