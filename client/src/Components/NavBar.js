import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../leasr-brand-green.svg';

class NavBar extends React.Component {    
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg">
                    <Nav className="mr-auto w-50">
                        <Link className="text-success pr-4" to="/">Manage Subletters</Link>
                        <Link className="text-success pr-4" to="/">Help</Link>
                        <Link className="text-success pr-4" to="/">About</Link>
                    </Nav>

                    <Navbar.Brand  className="mx-auto w-50 bd-highlight">
                        <Link exact to="/">
                            <img
                                alt="LEASR"
                                src={Logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top rounded"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="ml-auto w-50">
                        <Link className="ml-auto text-success">Create Listing</Link>
                        <Link className="pl-4 text-success" to="/login">Login</Link>
                        <Link className="pl-4 text-success" to="/register">Register</Link>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default NavBar;
