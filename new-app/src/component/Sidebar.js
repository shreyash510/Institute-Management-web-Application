import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="sidebar ">
        <div style={{ color: 'white', background: 'black' }} className="content border ms-3 shadow-sm rounded-pill mt-2">
          <p style={{ fontFamily: 'cursive' }} className='text-center fw-bolder mt-2'>Institute-Manegement</p>
        </div>
        <hr className='ms-3' />
        <Nav className="mr-auto">
          <ul style={{ color: 'black', fontWeight: 500 }}>
            <li style={{cursor:"pointer"}} className='list-unstyled py-2' onClick={() => navigate('/details/student')}>Student</li>
            <li style={{cursor:"pointer"}} className='list-unstyled py-2' onClick={() => navigate('/details/staff')}>Staff</li>
            <li style={{cursor:"pointer"}} className='list-unstyled py-2' onClick={() => navigate('/details/course')}>Course</li>
            {/* <li className='list-unstyled py-2'><Link to="detail/staff">Staff</Link></li>
          <li className='list-unstyled py-2'><Link to="detail/course">Course</Link></li> */}
          </ul>

        </Nav>

      </div>
    </>
  )
}

export default Sidebar