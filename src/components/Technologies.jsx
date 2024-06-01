import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap  items-center justify-center gap-4'>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-6xl text-cyan-400' />
        </div>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <TbBrandNextjs  className='text-6xl text-amber-300'/>
        </div>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-6xl text-green-500' />
        </div>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <SiRedis className='text-6xl text-red-600' />
        </div>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <RiNodejsLine className='text-6xl bg-gradient-to-r from-orange-500 via-amber-400 to-slate-800' />
        </div>

        <div className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <BiLogoPostgresql className='text-6xl bg-gradient-to-r from-lime-400 via-slate-700' />
        </div>
      </div>
    </div>
  )
}

export default Technologies
