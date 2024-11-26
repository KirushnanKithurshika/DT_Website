import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from './pages/HomePage/homepage';
import Product from './pages/products/product';
import Products from './components/products/products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/products' element={<Products/>}/>
         </Routes>
</BrowserRouter>
       
      
    
  )
}

export default App
