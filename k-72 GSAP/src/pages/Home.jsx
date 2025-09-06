import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomtext'
import HomeHeroText from '../components/home/Homeherotext'
const Home = () => {
  return (
      <div>
    <div className='h-screen w-screen fixed bg-red-600'> <Video />
     </div>
         <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
         </div>
    </div>
  )
}

export default Home
