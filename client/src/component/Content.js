import React from 'react'
import Student from './Student/Student'
import Staff from './Staff/Staff'
import Course from './Course/Course';
import { Routes, Route } from 'react-router-dom'
// import Sidebar from './Sidebar';
// import Home from './Home';

const Content = () => {
    return (
        <>
            <div className="container">
                {/* <Student/> */}
                {/* <Staff/> */}
                {/* <Course /> */}
                {/* <Sidebar/> */}
                <Routes>
                    <Route path="/student" element={<Student />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/course" element={<Course />} />                    
                </Routes>
            </div>
        </>
    )
}

export default Content;