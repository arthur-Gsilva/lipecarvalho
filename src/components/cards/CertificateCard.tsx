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
        <div className="bg-secondary text-primary p-4 rounded-lg shadow-xl">
            <div className="flex flex-col justify-between h-full items-center gap-6 ">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-md"/>
                    
                <h3 className="text-sm md:text-md font-bold text-center uppercase">
                    {language === 'pt-br' ? data.portugueseTitle : data.englishTitle}
                </h3>

                <Link href={data.link} target="_blank" className="underline text-center text-sm sm:text-md">
                    {language === 'pt-br' &&
                        <>Clique aqui para acessar o certificado</>
                    }
                    {language === 'eng' &&
                        <>Click here to access the certificate</>
                    }
                    
                </Link>
            </div>
        </div>
    )
}