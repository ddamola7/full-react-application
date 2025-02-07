import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Product from './pages/Product'
import Mainlayout from './component/Mainlayout'
import Home from './pages/Home'
import "./App.css"
import ProductDetail from './pages/ProductDetail'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Mainlayout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </>


  )
}

export default App
