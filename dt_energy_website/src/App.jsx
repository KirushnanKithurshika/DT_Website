import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import './App.css'
import Navbar from './components/Navbar/navbar';
import Navsubarmobileview from './components/Navbar/navsubbar_vertical';
import Homepage from './pages/HomePage/homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
