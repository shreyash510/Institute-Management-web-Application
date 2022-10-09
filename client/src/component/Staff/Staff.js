import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateStudent from './CreateStaff';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaff, staffDelete } from '../../Redux/thunk/staffThunk';
import UpdateStaff from './UpdateStaff';
// import SideBar from '../Sidebdar'

const Student = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStaff());
    }, [dispatch])

    const delStaff = ((staffId) => {
        dispatch(staffDelete(staffId))
    })
    const staff = useSelector((state) => state.staff);
    return (
        <>
            {/* <SideBar /> */}
            <nav style={{ borderLeft: "1px solid" }} className="navbar bg-light me-auto ms-3 rounded">
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
                            staff.staffData.map((v, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v.name}</td>
                                    <td>{v.gender}</td>
                                    <td>{v.age}</td>
                                    <td>{v.courseId}</td>
                                    <td>
                                        <button className="btn btn-primary me-2">
                                            <UpdateStaff data={v}/>
                                        </button>
                                        <button className="btn btn-primary me-2" onClick={() => delStaff(v.staffId)}>
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