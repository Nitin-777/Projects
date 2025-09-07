import { Route,Routes } from 'react-router-dom'
import './index.css'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agencies'
import NavBar from './components/Navigation/NavBar'


function App() {
 

  

  return (
           
    <div className='text-black overflow-hidden'>
           <NavBar></NavBar>
            <FullScreenNav></FullScreenNav> 
       
     <Routes>
           <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Agencies' element={<Agence />} />

     </Routes>

     </div>
    
  )
}

export default App
