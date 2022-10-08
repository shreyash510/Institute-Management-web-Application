import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './CreateStudent';
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, getAll } from '../../Redux/thunk/studentThunk';
import UpdateStudent from './UpdateStudent';


const Student = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch])

    const student = useSelector((state) => state.student)
    // console.log(student)

    const deleteData = (studentId) => {
        dispatch(deleteStudent(studentId));
        dispatch(getAll());
    }

    return (
        <>
            <nav style={{ borderLeft: "1px solid" }} className="navbar bg-light me-auto ms-3 rounded">
                <div className="container-fluid d-flex justify-content-end">
                    <CreateStudent />
                </div>
            </nav>
            <div className="container ms-1">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>StudentId</th>
                            <th>Name</th>
                            <th>CourseId</th>
                            <th>age</th>
                            <th>emailId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.studentData && student.studentData[0] && student.studentData.map((v, i) => {
                                return <tr key={i}>
                                    <td>{v.studentId}</td>
                                    <td>{v.name}</td>
                                    <td>{v.courseId}</td>
                                    <td>{v.age}</td>
                                    <td>{v.email}</td>
                                    <td>
                                        <button className="btn btn-primary me-2">
                                            <UpdateStudent data={v} />
                                        </button>
                                        <button className="btn btn-primary me-2" onClick={() => deleteData(v.studentId)}>
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