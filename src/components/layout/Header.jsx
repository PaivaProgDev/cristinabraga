'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { RiMenu5Line } from "react-icons/ri";
import { X } from 'lucide-react';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [scrollEvent, setScrollEvent] = useState('')

    function menuAlternate() {
        setOpenMenu(!openMenu)
    }

    function scroll() {
        const scroll = window.scrollY
        setScrollEvent(scroll)
    }
    useEffect(() => {
        openMenu ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
        window.addEventListener('scroll', scroll)

        return () => removeEventListener('scroll', scroll)
    }, [])



    return (
        <header className={`flex ${scrollEvent > 50 && 'border-b border-t-2 shadow border-zinc-200'}   bg-white items-center z-100 fixed top-0 w-full font-modern`}>
            <nav className='flex justify-center w-full '>
                <ul className='h-full hidden justify-center px-6 py-3.5 md:flex bg-[rgba(255,255,255,0.17)] backdrop-blur-md w-full text-slate-700 items-center gap-7'>
                    <li className='hover:text-amber-700'>
                        <a href="#home">
                            Início
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
                <div className='bg-white md:hidden px-6 backdrop-blur-md py-3.5 w-full flex justify-end'>
                    <RiMenu5Line onClick={menuAlternate} className=' cursor-pointer   size-7' />
                </div>

                <div className={`${openMenu && 'right-0  border-t-2 '}  duration-300 ease-in-out bg-amber-50 border-l-2 shadow-lg z-100 fixed bottom-0 p-6 -right-full flex md:hidden flex-col gap-8 max-w-[70%] w-full  top-0 `}>
                    <X onClick={menuAlternate} className=' md:hidden  p-0.5 place-self-end rounded-sm size-8' />
                    <ul className='flex-col text-3xl flex text-slate-800  gap-3'>
                        <li>
                            <a href="#home">Início</a>
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
