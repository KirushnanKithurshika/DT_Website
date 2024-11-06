import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import './App.css'
import Navbar from './components/Navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
