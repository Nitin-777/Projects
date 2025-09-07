
import React from 'react'
import { Link } from 'react-router-dom';



const HomeBottomText = () => {
  return (
    <div className=' font-[font2] justify-center flex gap-2 items-center text-white'>
      <div className='uppercase leading-[5.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 lg:h-40 border-white px-10 pt-8 rounded-full'>
      <Link className='text-[6.5vw]' to='/Projects'>Projects</Link>
      </div>
      <div className='uppercase leading-[5.5vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 lg:h-40 border-white px-10 pt-8 rounded-full'>
      <Link className='text-[6.5vw]' to='/Agencies'>Agencies</Link>
      </div>
    </div>
  )
}

export default HomeBottomText;

