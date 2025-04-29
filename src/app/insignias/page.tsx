import { BadgeCard } from "@/components/cards/BadgeCard"
import { MirrorText } from "@/components/MirrorText"
import { Badges } from "@/data/badges"

const page = () => {
    return(
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <MirrorText 
                    main="Badges"
                    mirror="Insígnias"
                    bgwhite
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Badges.map((item) => (
                        <BadgeCard key={item.title} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page