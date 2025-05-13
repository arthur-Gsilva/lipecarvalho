'use client'

import { Certificado } from "@/data/certificates"
import { Material } from "@/data/materials"
import Link from "next/link"

type Props = {
    data: Certificado | Material,
    certificate: boolean
}

export const CertificateCard = ({ data, certificate }: Props) => {

    return(
        <div className="bg-secondary text-primary p-4 rounded-lg shadow-xl">
            <div className="flex flex-col justify-between h-full items-center gap-6 ">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-md"/>
                    
                <h3 className="text-sm md:text-md font-bold text-center">
                    {data.portugueseTitle}
                </h3>

                <Link href={data.link} target="_blank" className="underline text-center text-sm sm:text-md">
                    {certificate &&
                        <>Clique aqui para acessar o certificado</>
                    }
                    {!certificate &&
                        <>Clique aqui para jogar</>
                    }
                    
                </Link>
            </div>
        </div>
    )
}