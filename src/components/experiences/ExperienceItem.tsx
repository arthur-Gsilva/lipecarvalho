import { Experience } from "@/data/experiences";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FaEnvelopeOpenText } from "react-icons/fa6";

type Props = {
    data: Experience
}

export const ExperienceItem  = ({ data }: Props) => {

    const [hovering, setHovering] = useState(false)

    const Icon = data.icon

    return(
        <div className="flex flex-col justify-between items-center gap-3 h-full">
            <div className="flex flex-col items-center gap-3">
                <Icon className="text-center text-primary text-4xl" />
                <h3 className="text-xl font-bold text-center">{data.englishTitle}</h3>

                <ReactCardFlip isFlipped={hovering} flipDirection="horizontal">
                    <p key="front" className="text-lg text-center">
                        {data.englishText}
                    </p>
                    <p key="back" className="text-lg text-center">
                        {data.portugueseText}
                    </p>
                </ReactCardFlip>
            </div>

            <div
                className="bg-primary text-white p-2 rounded-lg cursor-pointer transition duration-400 shadow-lg mt-4"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                {hovering ? 'Translate' : 'Traduzir'}
            </div>
        </div>
    )
}