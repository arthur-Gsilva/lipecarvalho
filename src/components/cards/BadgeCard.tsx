import { Badge } from "@/data/badges"

type Props = {
    data: Badge
}

export const BadgeCard = ({ data }: Props) => {
    return(
        <div className="bg-secondary text-primary p-4 rounded-lg shadow-xl">
            <div className="flex flex-col items-center gap-3">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-md"/>

                <h3 className="text-lg font-bold text-center uppercase">{data.title}</h3>

                <h4 className="text-center">{data.year}</h4>
            </div>
        </div>
    )
}