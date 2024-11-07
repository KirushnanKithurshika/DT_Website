import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import './App.css'
import Navbar from './components/Navbar/navbar';
import Navsubarmobileview from './components/Navbar/navsubbar_vertical';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/navbar' element={<Navsubarmobileview/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
