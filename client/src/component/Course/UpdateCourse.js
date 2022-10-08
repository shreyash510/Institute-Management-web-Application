import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateCourse } from '../../Redux/thunk/courseThunk';

const UpdateCourse = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState(props.data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const response = useSelector((state) => state.course);
    // console.log(response);

    const inputEvent = (e) => {
        setData((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        })
    }

    const btnClick = (e) => {
        dispatch(updateCourse(data));
        setShow(false);
    }
    return (
        <>
            <Button variant="primary p-0" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Course Name</label>
                            <input type="text" className="form-control" value={data.name} onChange={inputEvent} name="name" placeholder='Enter Course name..' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Fees</label>
                            <input type="number" className="form-control" value={data.fees} onChange={inputEvent} name="fees" placeholder='30000' />
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputAddress" className="form-label">Duration</label>
                            <input type="number" className="form-control" value={data.duration} onChange={inputEvent} name="duration" placeholder="2" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={btnClick}>
                        Update Course details
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateCourse;