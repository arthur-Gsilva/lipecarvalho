"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Home', tooltip: 'Início' },
        { href: '/certificados', label: 'Certificates', tooltip: 'Certificados' },
        { href: '/insignias', label: 'Badges', tooltip: 'Insígnias' },
        { href: '/materiais', label: 'Materials', tooltip: 'Materiais' },
    ]

    return(
        <header>
            <div className="flex items-center container mx-auto justify-between mt-3 px-6 md:px-0">
                <div className="flex items-center gap-3">
                    <div className="bg-primary h-10 w-10 rounded-full flex justify-center items-center text-white font-bold text-xl">FC</div>
                    <h3 className="font-bold">Filipe Carvalho</h3>
                </div>

                {!openMenu &&
                    <GiHamburgerMenu 
                        className="text-xl cursor-pointer block md:hidden"
                        onClick={() => setOpenMenu(true)}
                    />
                }

                
                <nav className={`${openMenu ? "block" : "hidden md:block"}`}>
                    <ul className="flex gap-10 font-bold">
                        {links.map(({ href, label, tooltip }) => {
                            const isActive = pathname === href

                            return (
                                <li 
                                    key={href} 
                                    className={`cursor-pointer transition hover:text-primary ${isActive ? 'text-primary' : ''}`}
                                >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link href={href}>{label}</Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}