import React from 'react'
import { PiTreeStructureFill } from "react-icons/pi";
import { FaUsersLine } from "react-icons/fa6";
import { FaAngleDoubleUp, FaClipboardList, FaStar, FaWhatsapp } from 'react-icons/fa';
import { VscGraph } from "react-icons/vsc";
import { IoDiamond } from "react-icons/io5";
import { Button } from '../ui/button';
import ScrollFloat from '@/components/animation/ScrollFloat';

const Solutions = () => {

    const solutions = [
        {
            icon: <PiTreeStructureFill className='size-8 text-amber-500' />,
            title: "Estruturação completa do RH"
        },
        {
            icon: <FaUsersLine className='size-8 text-amber-500' />,
            title: "Treinamentos de Liderança e Equipes de Vendas"
        },
        {
            icon: <FaClipboardList className='size-8 text-amber-500' />,
            title: "Pesquisas de Clima Organizacional"
        },
        {
            icon: <VscGraph className='size-8 text-amber-500' />,
            title: "Avaliação de Desempenho"
        },
        {
            icon: <FaAngleDoubleUp className='size-8 text-amber-500' />,
            title: "Plano de Cargos e Salários"
        },
        {
            icon: <FaStar className='size-8 text-amber-500' />,
            title: "Recrutamento e Seleção sob medida"
        },
        {
            icon: <IoDiamond className='size-8 text-amber-500' />,
            title: "Consultoria para certificação ISO 9001"
        },
    ]

    return (
        <section className='flex bg-[zinc-50] flex-col w-full  items-center px-6 py-14 '>
            <div className='justify-center items-center w-full flex flex-col'>
                <header className='text-5xl max-w-180 font-semibold text-slate-700 text-center italic font-modern'>Podemos te ajudar a<span className='text-[#F89000]'> evoluir</span> com as nossas soluções</header>
            </div>
            <div className='flex relative flex-col font-clean lg:flex-row gap-8 lg:gap-14 mt-20'>
                <ul className='grid grid-cols-2  gap-7'>
                    {
                        solutions.map((sol, index) => (
                            <li key={index} className='flex max-w-45 w-full text-slate-700 font-medium text-center flex-col items-center gap-3'>
                                <span>{sol.icon}</span>
                                <p>{sol.title}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className='w-[40%] h-1 rounded-full absolute -bottom-5 bg-amber-600'></div>
            </div>
            <div className='mt-30 space-y-4 flex md:items-center flex-col gap-5 text-transparent bg-linear-to-b md:bg-linear-to-r bg-clip-text italic to-slate-700 to-60% from-amber-600 font-bold font-'>
                <h3 className='md:text-4xl text-6xl'>Pronto para alavancar sua empresa?</h3>
                <Button className={'bg-green-500 w-fit font-clean not-italic hover:bg-green-600 px-5 cursor-pointer text-lg py-5 rounded-3xl text-white font-medium'}>
                    <a href="https://wa.me/5537999818901?text=Olá,+vim+pelo+site+e+gostaria+de+mais+informações!" className='flex items-center gap-3'>
                        <FaWhatsapp />
                        Entrar em contato
                    </a>
                </Button>

            </div>
        </section>
    )
}

export default Solutions
