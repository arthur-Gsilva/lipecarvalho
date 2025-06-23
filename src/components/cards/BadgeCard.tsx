import { Badge } from "@/data/badges"

type Props = {
    data: Badge
}

export const BadgeCard = ({ data }: Props) => {
    return(
        <div className="text-primary p-4 rounded-lg">
            <div className="flex flex-col items-center gap-3">
                <img src={data.image} alt="imagem do certificado" className="h-auto w-full rounded-xl border-3 border-primary"/>

                <h3 className="text-sm md:text-lg font-bold text-center uppercase">{data.title}</h3>
            </div>
        </div>
    )
}