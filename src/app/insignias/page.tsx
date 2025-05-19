import { BadgeCard } from "@/components/cards/BadgeCard"
import { Title } from "@/components/Title"
import { Badges } from "@/data/badges"
import Link from "next/link"

const page = () => {
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

                <div className="mt-12 text-center sm:text-left">
                    <h4 className="text-xl">Ver mais:</h4>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full items-center sm:items-baseline">
                        <Link href={'https://edudirectory.withgoogle.com/profiles/6039739744911360'} target="_blank">
                                <img 
                                    src="./google-education.jpg" 
                                    alt="Google Education" 
                                    className="w-44 h-44 rounded-full bg-secondary p-4 hover:bg-primary transition-all"
                                />
                            </Link>

                            <Link href={'https://learn.microsoft.com/pt-br/users/filipescmelo/'} target="_blank">
                                <img 
                                    src="./microsoft-learn.png" 
                                    alt="Microsoft Learn" 
                                    className="w-44 h-44 rounded-full bg-secondary p-4 hover:bg-primary"
                                />
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page