import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import Services from './component/Services'
import Contactus from './component/ContactUs'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App