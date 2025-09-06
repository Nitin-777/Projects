import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { images } from '../assets/images.jsx'

const Agence = () => {
        gsap.registerPlugin(ScrollTrigger)

        const imageDivref= useRef(null)
        const imageref= useRef(null)

       

      useGSAP(function(){
        gsap.to(imageDivref.current,{
         scrollTrigger:{
          trigger:imageDivref.current,
          start:'top 30%',
          end:'top -100%',
          scrub:true,
          pin: true,
          onUpdate: (elem) => {
              let imageindex;
              if(elem.progress < 1){
                imageindex=Math.floor(elem.progress * 14)
              }
              else{
                imageindex=images.length - 1;
              }
              imageref.current.src=images[imageindex];
          } 
         }
        })
      })

  return (


<div>
     <div className='Section1'> 

    <div ref={ imageDivref }className=' absolute h-[20vw] w-[15vw] rounded-[2rem] top-56 left-[30vw] bg-red-500 overflow-hidden' >
      <img ref={ imageref } src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt=""  className='w-full h-full object-cover rounded-[2rem]'/>
    </div>
     <div className='font-[font2] relative'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] leading-[19vw] uppercase text-center' >Soixan7e Douze</h1>
        <div className='pl-[40%] mt-40vw'>
          <p className='text-4xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
      </div>
    </div>
   </div>
   <div className='Section2 h-screen '></div>
</div>
  )
}

export default Agence
