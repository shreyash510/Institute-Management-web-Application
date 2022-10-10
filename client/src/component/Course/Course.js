import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, getAllCourse } from '../../Redux/thunk/courseThunk';


const Student = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCourse());
    }, [dispatch])

    const data = useSelector((state) => state.course);

    const delCourse = (courseId) => {
        dispatch(deleteCourse(courseId))
    }

    return (
        <>
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
                            data.courseData.map((v, i) => {
                                return <tr key={i}>
                                    <td>{v.courseId}</td>
                                    <td>{v.name}</td>
                                    <td>{v.fees}</td>
                                    <td>{v.duration}</td>
                                    <td>
                                        <span className="btn btn-primary me-2">
                                            <UpdateCourse data={v}/>
                                        </span>
                                        <span className="btn btn-primary me-2" onClick={() => delCourse(v.courseId)}>
                                            Delete
                                        </span>
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