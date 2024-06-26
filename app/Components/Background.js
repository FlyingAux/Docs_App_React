import React from 'react'

const Background = () => {
  return (
   <>
        <div className='h-screen w-full fixed z-10'>
            <div className='w-full h-screen bg-zinc-800 relative'>
                <h1 className='text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-500 font-bold absolute'>Docs.</h1>
            </div>
        </div>
   </>
  )
}

export default Background