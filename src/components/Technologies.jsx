import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

import { animate, motion } from "framer-motion"

const iconVariants =(duration) =>({
  initial:{y:-10},
  animate :{
    y:[10, -10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },

})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap  items-center justify-center gap-4'>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div 
         variants={iconVariants(3.0)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <TbBrandNextjs  className='text-7xl text-amber-300'/>
        </motion.div>

        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-7xl text-green-500' />
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <SiRedis className='text-7xl text-red-600' />
        </motion.div>

        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <RiNodejsLine className='text-7xl bg-gradient-to-r from-orange-500 via-amber-400 to-slate-800' />
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className='rounded-2xl  border-4 border-neutral-800 p-4'>
        <BiLogoPostgresql className='text-7xl bg-gradient-to-r from-lime-400 via-slate-700' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
