import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../views/Client/Home.jsx'
import Catalog from '../views/Client/Catalog.jsx'
import Cart from '../views/Client/Cart.jsx'
import Login from '../views/Client/Login.jsx'
import Register from '../views/Client/Register.jsx'



function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
    </Routes>
  )
}

export default AppRoutes;