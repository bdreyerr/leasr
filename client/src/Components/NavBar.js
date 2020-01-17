import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from '../leasr-brand-green.svg';
import ProfileIcon from './img/user-circle-solid.svg';

class NavBar extends React.Component {    
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand  className="bd-highlight">
                        <Link to="/home">
                            <img
                                alt="LEASR"
                                src={Logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top rounded"
                            />
                        </Link>
                    </Navbar.Brand>
                    <InputGroup inline className="mr-md-2 w-50">
                        <FormControl type="text" placeholder="Search"/>
                        <InputGroup.Append>
                            <Button variant="outline-success">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="w-50 mx-auto" id="basic-navbar-nav">
                        <Nav className="ml-auto p-2">
                            <Button variant="outline-success">Create a Listing</Button>
                        </Nav>
                        <Nav className="">
                            <NavDropdown title={
                                    <img className="thumbnail-image" 
                                        src={ProfileIcon}
                                        width="30"
                                        height="30"
                                        alt="account pic"
                                    />
                            }>
                                <NavDropdown.Item><Link to="/login">Login</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/register">Register</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default NavBar;
