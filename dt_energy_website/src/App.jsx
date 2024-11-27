import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from './pages/HomePage/homepage';
import Product from './pages/products/product';
import Products from './components/products/products';
import Contact from './components/Contact/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
