"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

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

                
                <nav className={` ${openMenu ? "block" : "hidden md:block"} `}>
                    <ul className="flex gap-10 font-bold">
                        <li className="cursor-pointer transition hover:text-primary">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer">Home</TooltipTrigger>
                                <TooltipContent>
                                <p>Início</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </li>
                        <li className="cursor-pointer transition hover:text-primary">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer">Certificates</TooltipTrigger>
                                <TooltipContent>
                                <p>Certificados</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </li>
                        <li className="cursor-pointer transition hover:text-primary">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer">Badges</TooltipTrigger>
                                <TooltipContent>
                                <p>Insígnias</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </li>
                        <li className="cursor-pointer transition hover:text-primary">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="cursor-pointer">Materials</TooltipTrigger>
                                <TooltipContent>
                                <p>Materiais</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </li>
                    </ul>
                </nav>
                
                
            </div>
        </header>
    )
}