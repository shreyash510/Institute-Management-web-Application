import React from 'react';
import {staff} from '../tempData';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './CreateStaff';
// import SideBar from '../Sidebdar'



const Student = () => {
    return (
        <>
          {/* <SideBar /> */}
            <nav style={{borderLeft:"1px solid"}} className="navbar bg-light me-auto ms-3 rounded">
                <div className="container-fluid d-flex justify-content-end">
                    <CreateStudent />
                </div>
            </nav>
            <div className="container ms-1">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>StaffId</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>CourseId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staff.map((v, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.gender}</td>
                                    <td>{v.age}</td>
                                    <td>{v.courseId}</td>
                                    <td>
                                        <button className="btn btn-primary me-2">
                                            Edit
                                        </button>
                                        <button className="btn btn-primary me-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Student