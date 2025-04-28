'use client'

import { experiences } from "@/data/experiences"
import { MirrorText } from "../MirrorText"
import { ExperienceItem } from "./ExperienceItem"

export const Experience = () => {

    return(
        <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
            <MirrorText main={'Experiences'} mirror={'Experiências'} bgwhite/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {experiences.map((item) => (
                    <ExperienceItem key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}