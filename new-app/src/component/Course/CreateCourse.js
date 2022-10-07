import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateStudent = () => {
    const [data, setData] = useState({})
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

    const btnClick = (e) =>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Course
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Course Name</label>
                            <input type="text" className="form-control" name="name" onChange={inputEvent} placeholder='Enter course name..' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Fees</label>
                            <input type="number" className="form-control" name="fees" onChange={inputEvent} placeholder='Enter fees..' />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputAddress" className="form-label">Duration</label>
                            <input type="number" className="form-control" id="inputAddress" name="duration" onChange={inputEvent} placeholder="3" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={btnClick}>
                        Save Course details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<CreateStudent />);

export default CreateStudent;