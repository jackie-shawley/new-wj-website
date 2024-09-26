import React from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';



function NavBar() {
    return (  
        <div>
            <Navbar sticky='top' className='navbar'>
                <Row style={{width: '100%'}}>
                    <Col sm={12} md={6}>
                        <Navbar.Brand className="nav-brand" href="/home" style={{ fontFamily:'Fredericka The Great', fontSize: '3rem', color: '#A3956D' }}>Walt &amp; Jackie</Navbar.Brand>
                    </Col>
                    <Col sm={12} md={6} className='nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/home' class='nav-link' style={{ color: '#ffffffb9', paddingRight: 20, fontSize: '2rem' }}>Home</Nav.Link>
                            <Nav.Link href='/music' className='nav-link' style={{ color: '#ffffffb9', paddingRight: 85, fontSize: '2rem' }}>Music</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Navbar>
        </div>
    );
}

export default NavBar;