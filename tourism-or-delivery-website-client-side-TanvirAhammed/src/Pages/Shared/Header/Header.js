import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tanvir's Tour & Travels (TTT)</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        {user?.email ?
                            <>
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                                <Nav.Link as={HashLink} to="/manageservices">Manage</Nav.Link>
                                <Nav.Link as={HashLink} to="/addService">Add Services</Nav.Link>


                            </>
                            :
                            <>
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                            </>
                        }





                        {user?.email ?

                            <Button onClick={logOut} variant="light">Logout</Button> :

                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }




                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                            <img className='image' src={user?.photoURL} alt="" />

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;