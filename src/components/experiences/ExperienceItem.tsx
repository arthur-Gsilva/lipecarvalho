import { Experience } from "@/data/experiences";

type Props = {
    data: Experience
}

export const ExperienceItem  = ({ data }: Props) => {


    const Icon = data.icon

    return(
        <div className="flex flex-col justify-between items-center gap-3 h-full">
            <div className="flex flex-col items-center gap-3">
                <Icon className="text-center text-primary text-4xl" />

                
                <h3 className="text-xl font-bold text-center">{data.portugueseTitle}</h3>

                
                    <p key="back" className="text-lg text-center">
                        {data.portugueseText}
                    </p>
                
            </div>
        </div>
    )
}