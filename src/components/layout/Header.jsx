import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className='p-5'>
            <nav className='flex max-w-7xl items-center justify-between'>
                <h1 className='text-2xl text-yellow-600'>Cristina Braga</h1>
                <ul className='flex text-slate-700 items-center gap-4'>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Sobre mim</li>
                    <li>Contato</li>
                    <Button className='bg-green-500 px-5 cursor-pointer text-md py-1 rounded-3xl text-white font-medium'>Chamar no WhastApp</Button>
                </ul>
            </nav>
        </header>
    )
}

export default Header
