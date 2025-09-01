import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slogan from './components/Slogan'
import Time from './components/Time'
import Bclock from './components/Bclock'

function App() {
 

  return (
   <center>
     <Bclock />
    <Slogan></Slogan>
    <Time></Time>
   </center>
      
  )
}

export default App;
