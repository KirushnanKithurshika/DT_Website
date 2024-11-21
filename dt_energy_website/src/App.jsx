import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import './App.css'
import Navbar from './components/Navbar/navbar';
import Navsubarmobileview from './components/Navbar/navsubbar_vertical';
import Homepage from './pages/HomePage/homepage';
import Services from './components/Services/services';
import Partners from './components/Partners/partners';
import Getaquote from './components/getaquote/getaquote';
import BankPartners from './components/Bankingpartens/bankingpartners';
import Contact from './components/Contact/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/partner' element={<Partners/>}/>
      <Route path='/getaquote' element={<Getaquote/>}/>
      <Route path='/bankpartner' element={<BankPartners/>}/>
      <Route path='/contactfooter' element={<Contact/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
