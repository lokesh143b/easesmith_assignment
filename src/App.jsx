import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddToCart from './pages/AddToCart/AddToCart'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <div className='home-top'>
        <p>Free Shipping on orders above 999/-</p>
        <p className='home-top-desc2'>Call us on: +91 98768 05120</p>
      </div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/add-to-cart' element={<AddToCart/>} />
      </Routes>
    </div>
    
  )
}

export default App