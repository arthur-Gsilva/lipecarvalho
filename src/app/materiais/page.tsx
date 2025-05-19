import { CertificateCard } from "@/components/cards/CertificateCard"
import { Title } from "@/components/Title"
import { materials } from "@/data/materials"

const page = () => {
    return(
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <Title 
                    english="Materials"
                    portuguese="Materiais"
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
                    {materials.map((item) => (
                        <CertificateCard key={item.englishTitle} certificate={false} data={item}/>
                    ))}
                </div>

                
            </div>
        </div>
    )
}

export default page