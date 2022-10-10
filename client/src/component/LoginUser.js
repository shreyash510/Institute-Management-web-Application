import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../Redux/thunk/authThunk';
import { Outlet, useNavigate } from 'react-router-dom';

const initialAuth = {
    authEmail: 'yogesh@gmail.com',
    authPassword: "Admin@123"
}

const LoginUser = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [data, setData] = useState(initialAuth);

    const response = useSelector((state) => state.auth.authData);
    console.log(response)
    const inputEvent = (e) => {
        setData((preV) => {
            return {
                ...preV,
                [e.target.name]: e.target.value
            }
        });
    }

    const btnClick = async () => {
        await dispatch(authLogin(data));
        navigator('/details/student');
    }
        return (
            <>

                <div className="container mt-5 w-50">
                    {/* <form> */}
                    <h1>Authentification</h1>
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={data.authEmail} name='authEmail' onChange={inputEvent} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='authPassword' value={data.authPassword} onChange={inputEvent} />
                    </div>
                    <button onClick={btnClick} className="btn btn-primary" >Submit</button>
                    {/* </form> */}
                </div>
                {/* <Outlet /> */}
            </>
        )
    }

    export default LoginUser