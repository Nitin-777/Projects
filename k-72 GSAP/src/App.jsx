import { Route,Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agencies'

function App() {
 

  return (
    <>
    <div className='text-black'>
     <Routes>
           <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Agencies' element={<Agence />} />

     </Routes>
     </div>
    </>
  )
}

export default App
