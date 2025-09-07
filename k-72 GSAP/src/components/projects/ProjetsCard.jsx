import React from 'react'
import { projetimgPairs } from '../../assets/projetsImg.jsx'

const ProjetsCard = (props) => {
  return (
              <>
               <div className=' group hover:rounded-[80px] relative transition-all rounded-none overflow-hidden w-1/2 h-full bg-green-600'>
               <img src={props.image1} alt="first" />
               <div
               className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                 <h2 className='uppercase font-[font1] text-5xl border-2 text-white rounded-full pt-2 px-4 '>Vior le Projets</h2>
               </div>
               </div>
                 <div className=' group hover:rounded-[80px] relative transition-all rounded-none overflow-hidden w-1/2 h-full bg-green-600'>
               <img src={props.image2} alt="first" />
               <div
               className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                 <h2 className='uppercase font-[font1] text-5xl border-2 text-white rounded-full pt-2 px-4 '>Vior le Projets</h2>
               </div>
               </div>
                   
             </>
  )
}

export default ProjetsCard
