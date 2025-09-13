import React from 'react'
import Dropdown from '../Dropdown'
const Generator = () => {
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'>
          <div className=' bg-amber-500 h-[24vw] w-[50vw] border-amber-100 border-2 '> 
               <h1 className='uppercase text-4xl text-white pl-[15vw] pt-[2vw] font-serif'> Predict-Next Day</h1>
           

               <Dropdown></Dropdown>
          </div>
    </div>
  )
}

export default Generator
