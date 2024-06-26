import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({data,referance}) => {
  return (
    <>
        <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.2}} dragElastic={.5} dragTransition={{bounceStiffness: 100, bounceDamping: 10}} className='relative w-60 h-72 bg-zinc-700 rounded-3xl text-zinc-100 flex flex-col  overflow-hidden flex-shrink-0'>


            <div className='top h-[70%] w-full  flex flex-col gap-5 px-8 py-8'>
            <FaFileAlt />
            <p className='text-sm leading-tight font-semibold'>{data.desc}</p>
            </div>


            <div className='BOTTOM relative h-[30%] w-full flex-col flex items-center justify-between'>

                <div className='MB w-full mt-3 flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-32'>
                        <h5>{data.filesize}</h5> 
                        {data.close ? <IoClose />: <LuDownload />}                    
                    </div>
                </div>

                {data.tag.isOpen && (
                    <div className={`tag w-full ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} h-10 flex items-center justify-center`}>
                    <h1 className='font-semibold'> {data.tag.tagtitle} </h1>
                </div>
                )}
                

            </div>


        </motion.div>
    </>
  )
}

export default Card