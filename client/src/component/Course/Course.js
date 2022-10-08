import React from 'react';
import { course } from '../tempData';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCourse from './CreateCourse';
// import SideBar from '../Sidebar'



const Student = () => {
    return (
        <>
            {/* <SideBar /> */}
            <nav style={{ borderLeft: "1px solid" }} className="navbar bg-light me-auto ms-3 rounded">
                <div className="container-fluid d-flex justify-content-end">
                    <CreateCourse />
                </div>
            </nav>
            <div className="container ms-1">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>CourseId</th>
                            <th>Name</th>
                            <th>Fees</th>
                            <th>Duration</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course.map((v, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.fees}</td>
                                    <td>{v.duration}</td>
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