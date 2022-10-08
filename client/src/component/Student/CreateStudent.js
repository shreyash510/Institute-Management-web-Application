import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../../Redux/thunk/studentThunk';

const CreateStudent = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const response = useSelector((state) => state.student);
    console.log(response);

    const inputEvent = (e) => {
        setData((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
    }

    const btnClick = (e) => {
        dispatch(addStudent(data));
        setShow(false);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Full Name</label>
                            <input type="text" className="form-control" onChange={inputEvent} name="name" placeholder='Enter full name..' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Email</label>
                            <input type="text" className="form-control" onChange={inputEvent} name="email" placeholder='Enter email..' />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputAddress" className="form-label">Age</label>
                            <input type="number" className="form-control" onChange={inputEvent} name="age" placeholder="23" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputAddress" className="form-label">CourseId</label>
                            <input type="number" className="form-control" onChange={inputEvent} name="courseId" placeholder="1" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputAddress" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={inputEvent} name="password" placeholder="xxxxxxxxxx " />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={btnClick}>
                        Save student details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateStudent;