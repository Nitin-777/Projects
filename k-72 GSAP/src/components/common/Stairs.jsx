
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'



const Stairs = (props) => {
      const pageref=useRef(null)
      const stairparentref=useRef(null)
      let tl=gsap.timeline()
      const currentpath= useLocation().pathname;

  useGSAP(function(){
        const tl=gsap.timeline()


       tl.to(stairparentref.current, {
        display: 'block'
       })
       
       tl.from('.stairs',{
        height: 0,
        stagger:{
          amount:-0.25
        }
       })
      
       tl.to('.stairs',{
        y:'100%',
        stagger:{
          amount:-0.25
        }
       })

       tl.to(stairparentref.current,{
            display:'none'
       })

       tl.to('.stairs',{
        y:'0%', 
       })
           
       gsap.from(pageref.current,{
        opacity:0,
        delay:1.2,
       })

      },[currentpath])

   
  return (

    <div>
     <div ref={stairparentref} className='h-screen w-full fixed z-20 top-0'>
          <div className='h-full w-full flex '>
            <div className='stairs h-full w-1/5  bg-black'> </div>
            <div className='stairs h-full w-1/5  bg-black'></div>
            <div className='stairs h-full w-1/5  bg-black'></div>
            <div className='stairs h-full w-1/5  bg-black'></div>
            <div className='stairs h-full w-1/5  bg-black'></div>
          </div>
          </div> 
          <div ref={pageref}>
            {props.children};
          </div>
      </div>
  )
}

export default Stairs
