"use client"
import React from 'react'
import { Button } from '../ui/button'

const NewsLetters = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      };

  return (
    <section className='newsletter flex flex-col justify-center items-center text-center relative z-10  max-w-lg mx-auto my-24 '>
        <div className="newsletter-watermark">
             Newsletter
        </div>
        <h1 className=' mb-4 tracking-wider font-bold text-[2rem] leading-10 text-primary '>Subscribe Our Newsletter</h1>
        <p className='mb-8 tracking-wider leading-loose text-justify text-base font-light  '> Get the latest information promo directly </p>
        <form action="" onSubmit={handleSubmit}>
            <input className='border text-sm px-[20px] py-[10px] pr-[120px] bg-[#fcfcfc] border-gray-400' placeholder='Input email address'/>
            <Button className=' rounded-none text-[0.9rem] leading-4 bg-[#000] font-semibold text-white ml-2.5 sm:mt-auto mt-2 '>Get Started</Button>
        </form>
    </section>
  )
}
export default NewsLetters
