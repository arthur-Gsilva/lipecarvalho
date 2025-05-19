'use client'

import { experiences } from "@/data/experiences"
import { Title } from "../Title"
import { ExperienceItem } from "./ExperienceItem"

export const Experience = () => {

    return(
        <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
            <Title 
                english="Experiences"
                portuguese="Experiências"
                bgwhite
            />

            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 md:gap-24 items-stretch">
                {experiences.map((item) => (
                    <ExperienceItem key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}