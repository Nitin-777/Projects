import React from 'react'
import {  projetimgPairs } from '../assets/projetsImg.jsx'
import ProjetsCard from '../components/projects/ProjetsCard.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clock from '../components/common/Clock.jsx'

const Projects = () => {
   
  gsap.registerPlugin(ScrollTrigger)

  useGSAP (()=>{
      gsap.from('.hero',{
            height: '50px',
            stagger:{
              amount:0.2,
            },
            scrollTrigger:{
              trigger:'.lol',
              start: 'top 100%',
              end:'top -150%' ,
              scrub: true
        }
      })
  })

  
  return (
    <div className='p-3 bg-black text-white'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font2] text-[9vw]  uppercase'>Projets </h2>
      </div>
      <div className='-mt-12 lol '>
        {
             projetimgPairs.map((elem,idx)=>{
              return   <div key={idx} className=' hero w-full h-[500px] mb-4 flex gap-3 bg-black '>
              <ProjetsCard image1={elem.left}  image2={elem.right}></ProjetsCard>
              </div>
             })
        }   
        
          <Clock city="Delhi" timezone="Asia/Kolkata" />
    
      </div>
    </div>
  )
}

export default Projects
