'use client'

import { useState } from "react"
import ReactCardFlip from 'react-card-flip'
import { MirrorText } from "./Title"

type Props = {
    english: string,
    portuguese: string,
    main: string,
    mirror: string
}

export const Section = ({ english, portuguese, main, mirror }: Props) => {
    const [hovering, setHovering] = useState(false)
    
    const englishText = english
    const portugueseText = portuguese

    return (
        <div>
            <div className="container px-6 md:px-0 mx-auto mt-10 pb-10">
                <MirrorText main={main} mirror={mirror} bgwhite/>

                <div>
                    <div className="text-center mb-6">
                        <ReactCardFlip isFlipped={hovering} flipDirection="horizontal">
                            <p key="front" className="text-md md:text-xl lg:h-[130px]">
                                {englishText}
                            </p>
                            <p key="back" className="text-md md:text-xl lg:h-[130px]">
                                {portugueseText}
                            </p>
                        </ReactCardFlip>
                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <div
                            className="bg-primary text-white p-5 rounded-sm cursor-pointer transition duration-400 hover:rotate-y-[30deg] shadow-lg"
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                        >
                            {hovering ? 'Translate' : 'Traduzir'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
