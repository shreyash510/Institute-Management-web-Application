import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateStudent = () => {
    const [data, setData] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputEvent = (e) => {
        setData((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
    }

    const btnClick = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Staff
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="name" onChange={inputEvent} placeholder='Enter full name..' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Gender</label>
                            <input type="text" className="form-control" name="gender" onChange={inputEvent} placeholder='eg. male' />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label">Age</label>
                            <input type="number" className="form-control" id="inputAddress" name="age" onChange={inputEvent} placeholder="23" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label">CourseId</label>
                            <input type="number" className="form-control" id="inputAddress" name="courseId" onChange={inputEvent} placeholder="1" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={btnClick}>
                        Save Staff details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<CreateStudent />);

export default CreateStudent;