import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../leasr-brand-green.svg'

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home" className="bd-highlight">
                        <img
                            alt="LEASR"
                            src={Logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top rounded"
                        />
                    </Navbar.Brand>
                    <InputGroup inline className="mr-md-3">
                        <FormControl type="text" placeholder="Search"/>
                        <InputGroup.Append>
                            <Button variant="outline-success">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Account">
                                <NavDropdown.Item href="#">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default NavBar;
