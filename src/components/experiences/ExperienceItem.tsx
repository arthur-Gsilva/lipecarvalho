import { useLanguage } from "@/context/LangContext";
import { Experience } from "@/data/experiences";

type Props = {
    data: Experience
}

export const ExperienceItem  = ({ data }: Props) => {

    const { language } = useLanguage()

    const Icon = data.icon

    return(
        <div className="flex flex-col justify-between items-center gap-3 h-full">
            <div className="flex flex-col items-center gap-3">
                <Icon className="text-center text-primary text-4xl" />

                <h3 className="text-xl font-bold text-center">
                    {language === 'pt-br' ? data.portugueseTitle : data.englishTitle}
                </h3>

                <p className="text-lg text-center">
                    {language === 'pt-br' ? data.portugueseText : data.englishText}
                </p>
            </div>
        </div>
    )
}