import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    link: string,
    children: ReactNode
}


export const BigIcon = ({ link, children }: Props) => {
    return(
        <Link 
            href={link} 
            target="_blank"
            className="w-12 h-12 lg:w-24 lg:h-24 rounded-full border-8 border-secondary hover:border-primary p-1 flex items-center justify-center"
        >
            {children}
        </Link>

    )
}