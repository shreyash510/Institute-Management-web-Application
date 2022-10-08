import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Home'
// import Details from './Pages/Details';

const mainApp = () => {
  // console.log(window.location.pathname)
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <div className="mainApp d-flex">
        {/* <Route path="/details" element={<Details/>} /> */}
        <Sidebar />
        <Content />
      </div>

    </>
  )
}

export default mainApp