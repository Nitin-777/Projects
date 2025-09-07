
import React from 'react'
import Clock from '../common/Clock';
import { Link } from 'react-router-dom';



const HomeBottomText = () => {
  return (
<div className="relative font-[font2] text-white">
     <p className='absolute lg:w-[14vw] w-64 lg:right-8 right-0 bottom-28  lg:bottom-34 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>



  <div className="flex justify-center gap-2 items-center">
    <div className="uppercase leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 lg:h-40 z-1050 border-white px-10 pt-8 rounded-full">
      <Link className="text-[6.5vw]" to="/Projects">Projets</Link>
    </div>
    <div className="uppercase leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 lg:h-40 border-white px-10 pt-8 rounded-full">
      <Link className="text-[6.5vw]" to="/Agencies">Agencies</Link>
    </div>
  </div>
</div>

  )
}

export default HomeBottomText;

