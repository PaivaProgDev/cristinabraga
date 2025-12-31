'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { RiMenu5Line } from "react-icons/ri";
import { X } from 'lucide-react';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    function menuAlternate() {
        setOpenMenu(!openMenu)
    }

    return (
        <header className={`flex items-center z-100 sticky sm:backdrop-blur-2xl top-0 w-full bg-[#fff9df6b]  p-4 font-modern`}>
            <nav className='flex justify-end w-full '>
                <ul className='h-full  hidden sm:flex  justify-center w-full  text-slate-700  items-center gap-8'>
                    <li className='hover:text-amber-700'>
                        <a href="#home">
                            Home
                        </a>
                    </li>
                    <li className='hover:text-amber-700'>
                        <a href="#services">
                            Serviços
                        </a>
                    </li>
                    <li className='hover:text-amber-700'>
                        <a href="about">
                            Sobre
                        </a>
                    </li>
                    <li className='hover:text-amber-700'>
                        <a href="#results">
                            Resultados
                        </a>
                    </li>
                    <li className='hover:text-amber-700'>
                        <a href="#benefits">
                            Benefícios
                        </a>
                    </li>
                    <li className='hover:text-amber-700'>
                        <a href="#support">
                            Apoio
                        </a>
                    </li>
                    <li>
                        <Button className='bg-green-500 hover:bg-green-600 px-5 cursor-pointer text-md py-1 rounded-3xl text-white font-medium'>
                            <a href="https://wa.me/5537999818901?text=Olá,+vim+pelo+site+e+gostaria+de+mais+informações!">
                                Chamar no WhastApp
                            </a>
                        </Button>
                    </li>
                </ul>
                <RiMenu5Line onClick={menuAlternate} className=' cursor-pointer sm:hidden bg-amber-200 size-6' />
                <div className={`${openMenu && 'right-0'} duration-300 ease-in-out bg-amber-50 border-l-2 shadow-lg z-100 fixed bottom-0 p-6 -right-full flex sm:hidden flex-col gap-8 max-w-[70%] w-full  top-0 `}>
                    <X onClick={menuAlternate} className=' sm:hidden bg-amber-200 p-0.5 rounded-sm size-6' />
                    <ul className='flex-col text-3xl flex text-slate-800  gap-3'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#services">
                                Serviços
                            </a>
                        </li>
                        <li>
                            <a href="about">
                                Sobre
                            </a>
                        </li>
                        <li className='hover:text-amber-700'>
                            <a href="#results">
                                Resultados
                            </a>
                        </li>
                        <li className='hover:text-amber-700'>
                            <a href="#benefits">
                                Benefícios
                            </a>
                        </li>
                        <li className='hover:text-amber-700'>
                            <a href="#support">
                                Apoio
                            </a>
                        </li>
                        <li>
                            <Button className='bg-green-500 w-full px-5 cursor-pointer text-md py-5.5 rounded-3xl text-white font-medium'>
                                <a href="https://wa.me/5537999818901?text=Olá,+vim+pelo+site+e+gostaria+de+mais+informações!">
                                    Contato
                                </a>
                            </Button>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
