import { CertificateCard } from "@/components/cards/CertificateCard"
import { MirrorText } from "@/components/MirrorText"
import { certificates } from "@/data/certificates"

const page = () => {
    return(
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <MirrorText 
                    main="Certificates"
                    mirror="Certificados"
                    bgwhite
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
                    {certificates.map((item) => (
                        <CertificateCard key={item.englishTitle} data={item}/>
                    ))}
                </div>

                
            </div>
        </div>
    )
}

export default page