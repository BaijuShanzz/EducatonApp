import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Components/pages/Home/Home';
import Header from '../Components/Header/Header';
import Plans from '../Components/pages/Plans/Plans';
import Footer from '../Components/Footer/Footer';
import Course from '../Components/pages/Course/Course';
import About from "../Components/pages/About/About";
import Contact from '../Components/pages/Contact/Contact';
import SupportUs from '../Components/pages/SupportUs/SupportUs';
function LayoutRoutes() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/services' element={<Plans/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/supportus' element={<SupportUs/>}/>
    </Routes>
    <Footer />
    </>

  )
}

export default LayoutRoutes;