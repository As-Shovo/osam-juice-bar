import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Nav className="mx-auto">
                        <div className='navbar-menu'> <Link to="/home">Home</Link> </div>    
                        <div className='navbar-menu'> <Link to="/juicyBar">Juicy Bar</Link> </div>    
                        <div className='navbar-menu'> <Link to="/about">About</Link> </div>  
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;