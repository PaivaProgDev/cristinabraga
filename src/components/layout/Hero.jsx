import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigDown, ArrowBigDownDash, ArrowBigRightDash, ArrowRight, LucideArrowRightCircle } from 'lucide-react'
import { FaAngleDoubleUp } from "react-icons/fa";

const Hero = () => {
    return (
        <main id='home' className='bg-[#eddc8f0a] relative overflow-hidden min-h-130 pt-18 pb-16 flex justify-center'>
            <img
                src="/images/ondas-hero.png"
                alt=""
                className="absolute opacity-30 blur-md object-cover h-full -z-5 w-full"
            />
            <div className='max-w-7xl flex-col md:flex-row mt-5 px-6 mx-auto flex relative justify-evenly w-full items-center gap-10'>
                <div className='font-modern font-medium'>
                    <h1 className={`text-7xl   text-slate-700`}>Cristina Braga</h1>
                    <h2 className='text-3xl text-slate-800 italic'>Consultoria <span className='text-[#C49D00]'>Estratégica</span> em RH</h2>
                    <p className='font-clean mt-5 font-normal text-zinc-700'>Transformando pessoas, potencializando negócios</p>
                    <div className='space-y-3 sm:space-x-3 w-full   flex flex-col sm:flex-row font-clean mt-3'>
                        <Button className={'bg-amber-600  hover:bg-amber-700 text-md'}>
                            <a href="https://wa.me/5537999818901?text=Olá,+vim+pelo+site+e+gostaria+de+mais+informações!" className='w-full flex items-center gap-3'>
                                <span>Agendar seção</span>
                                <ArrowBigRightDash />
                            </a>
                        </Button>
                        <Button variant='outline' className={'border-amber-600 hover:bg-amber-600 hover:text-white text-amber-600'}>
                            <span>Conheça meu trabalho</span>
                            <ArrowBigDownDash />
                        </Button>
                    </div>
                </div>
                <div className='max-w-100 mt-40 w-full relative'>
                    <img className='relative z-10 w-full' src="/images/cristina-img.png" alt="Foto da profissional Coach Cristina Braga" />
                    <div className='bg-[#eddc8f8c] h-100 w-full max-w-80 p-3 rounded-2xl absolute -top-30 right-3'>
                        <div className='bg-white font-modern italic border-2 flex items-center gap-3 rounded-xl px-4 py-2'>
                            <div className='bg-amber-600 w-fit p-1.5 rounded-full'>
                                <FaAngleDoubleUp className='size-5 text-white' />
                            </div>
                            <div className='-space-y-0.5'>
                                <h3 className='font-semibold text-slate-700'>Palestrante do Congresso</h3>
                                <h4 className='text-stone-600 text-sm'>Nacional de Liderança</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
