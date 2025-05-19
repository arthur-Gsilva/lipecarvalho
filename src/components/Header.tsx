"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Home', tooltip: 'Início' },
        { href: '/certificados', label: 'Certificates', tooltip: 'Certificados' },
        { href: '/insignias', label: 'Badges', tooltip: 'Insígnias' },
        { href: '/materiais', label: 'Materials', tooltip: 'Materiais' },
    ]

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <header className={`fixed top-0 w-full z-50  pb-4 transition-all duration-300 ${
            scrolled ? 'bg-secondary shadow-md' : 'bg-transparent'
          }`}>
            <div className="flex items-center container mx-auto justify-between mt-3 px-6 md:px-0">
                <Link href={'/'}>
                    <div className="flex items-center gap-3">
                        
                        <div className="bg-primary h-10 w-10 rounded-full flex justify-center items-center text-white font-bold text-xl">FC</div>
                        <h3 className="font-bold">Filipe Carvalho</h3>
                    </div>
                </Link>

                {!openMenu &&
                    <GiHamburgerMenu 
                        className="text-xl cursor-pointer block md:hidden"
                        onClick={() => setOpenMenu(true)}
                    />
                }

                
                    <ul className={`flex items-center gap-10 font-bold transition-all duration-500 ${openMenu ? "nav right-0" : "nav right-[-300%]"}`}>

                        <div 
                            className="md:hidden absolute top-4 right-4 text-xl text-primary cursor-pointer"
                            onClick={() => setOpenMenu(false)}
                        >
                            X
                        </div>
                        {links.map(({ href, label, tooltip }) => {
                            const isActive = pathname === href

                            return (
                                <li 
                                    key={href} 
                                    className={`cursor-pointer transition hover:text-primary ${isActive ? 'text-primary' : ''}`}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {/* <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link href={href}>{label}</Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider> */}

                                    <Link href={href}>{tooltip}</Link>
                                </li>
                            )
                        })}

                        <li className="cursor-pointer">
                            <Select defaultValue={'pt-br'}>
                                <SelectTrigger >
                                    <SelectValue placeholder="Lang" />
                                </SelectTrigger>
                                <SelectContent className="cursor-pointer">
                                    <SelectItem value="pt-br" className="cursor-pointer">
                                        <img src="./brasil.png" alt="bandeira do Brasil" className="w-7 h-7"/>
                                    </SelectItem>
                                    <SelectItem value="eng" className="cursor-pointer">
                                        <img src="./eua.png" alt="bandeira dos Estados Unidos" className="w-7 h-7"/>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </li>
                    </ul>
                
            </div>
        </header>
    )
}