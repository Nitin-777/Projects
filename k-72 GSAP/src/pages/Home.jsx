import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../../components/home/HomeBottomtext'
import HomeHeroText from '../../components/home/HomeHerotext'
import Clock from '../components/common/Clock'
import NavBar from '../components/Navigation/NavBar'
const Home = () => {
  return (

         
      <div className=' h-screen w-screen fixed'>
    <div className='fixed'> <Video />
     </div>
         <div className='h-screen w-screen relative  mb-3 pb-3 overflow-hidden flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
           
         </div>
  
    </div>
  )
}

export default Home
