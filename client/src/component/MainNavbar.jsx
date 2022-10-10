import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

const MainNavbar = () => {
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        getAuthStatus();
    }, [location]);

    function getAuthStatus() {
        let token = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    };


    const btnClick =()=>{
        const isAuth = getAuthStatus();
        if(isAuth){
            localStorage.clear()
            navigate('/login')
            console.log('btn click auth true');
        }else{
            
            console.log('btn click auth false');
        }
        
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Institute-Management</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to="home"><Nav.Link >Home</Nav.Link></LinkContainer>
                        <LinkContainer to="details/student"><Nav.Link >Details</Nav.Link></LinkContainer>
                        <LinkContainer to="about"><Nav.Link >About us</Nav.Link></LinkContainer>
                        <LinkContainer to="contact"><Nav.Link >Contact us</Nav.Link></LinkContainer>
                        <Button component="span" onClick={btnClick} className="btn btn-primary">{getAuthStatus()?"Logout":"Login"}</Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar