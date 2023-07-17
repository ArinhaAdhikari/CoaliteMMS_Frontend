import React, { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './components/Login/Login';
import Userlogin from './components/UserLogin/Userlogin';
import Navbar from './components/navbar/Navbar';
import { UserContext } from './components/Context/Context';
import Requisitions from './components/Requisitions/Requisitions';
import Products from './components/Products/Products';
import ReviewRequisitions from './components/Requisitions/ReviewRequisitions';
import Addproduct from './components/Products/Addproduct';
import Adminproduct from './components/Products/Adminproduct';
import Userpage from './components/UserPage/Userpage';
import { About } from './components/About/About';
import Footer from './components/footer/Footer';
const App = () => {

  const[login,setlogin]=useState(null);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{login,setlogin}}>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Userlogin' element={<Userlogin/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/requisitions/:userid' element={<Requisitions/>}/>
      <Route path='/reviewrequisitions' element={<ReviewRequisitions/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/adminproducts' element={<Adminproduct/>}/>
      <Route path='/userpage' element={<Userpage/>}/>
      <Route path='/about' element={<About/>}/>
      
    </Routes>
    <Footer/>
    </UserContext.Provider>
    </BrowserRouter>
    
  )
}

export default App
