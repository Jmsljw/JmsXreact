import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//* Image source
import aiaLogo from '../../Assets/AIA-header-logo.png';

//* CSS
import './css/Nav-Desktop.css';

function NavGen(props) {

    return (
        <div className='nav-bar-container'>
            <Navbar id='header-1' bg="primary" expand='md'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Brand><img className='aia-logo' src={aiaLogo} alt='AIA' /></Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as='div'>
                            <Link to='/SampleForm'>Form</Link>
                        </Nav.Link>
                        <Nav.Link as='div'>
                            <Link to='/SampleTable'>Table</Link>
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item as='div'>
                                <Link to='/SampleTable'>Table</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as='div'>
                                <Link to='/SampleForm'>Form</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item as='div'>
                                <Link to='/Empty'>Empty</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as='div'>
                                <Link to='/Empty'>Empty</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as='div'>
                            <Link to='/Notification'>Notification</Link>
                        </Nav.Link>
                        <Nav.Link as='div'>
                            <Link to='/Profile'>Profile</Link>
                        </Nav.Link>
                        <Nav.Link as='div'>
                            <Link to='/Logout'>Logout</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar id='header-2' bg="secondary">
                <Nav.Link as='div'>
                    <Link to='/back'>Back</Link>
                </Nav.Link>
            </Navbar>
        </div>
    );
}

export default NavGen;
