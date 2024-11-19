import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import './App.css'
import Navbar from './components/Navbar/navbar';
import Navsubarmobileview from './components/Navbar/navsubbar_vertical';
import Homepage from './pages/HomePage/homepage';
import Services from './components/Services/services';
import Partners from './components/Partners/partners';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/partner' element={<Partners/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
