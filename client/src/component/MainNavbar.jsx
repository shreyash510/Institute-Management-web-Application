import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const MainNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Institute-Management</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
                        <LinkContainer to="details/student"><Nav.Link >Details</Nav.Link></LinkContainer>
                        <LinkContainer to="/about"><Nav.Link >About us</Nav.Link></LinkContainer>
                        <LinkContainer to="/contact"><Nav.Link >Contact us</Nav.Link></LinkContainer>
                        <button className="btn btn-primary">Login</button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar