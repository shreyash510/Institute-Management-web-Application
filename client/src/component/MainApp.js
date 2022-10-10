import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Content from './Content';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Home'
import MainNavbar from './MainNavbar';
// import Details from './Pages/Details';

const mainApp = () => {
  return (
    <>
      <MainNavbar />
      <div className="mainApp d-flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/details/*' element={<Content />} />

        </Routes>
      </div>

    </>
  )
}

export default mainApp