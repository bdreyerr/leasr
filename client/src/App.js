import React, { useState } from "react";
import './App.css';
import Routes from "./Routes";
import {Link} from 'react-router-dom';
import { Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Logo from './leasr-brand-green.svg';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  
  function handleLogout() {
    userHasAuthenticated(false);
  }
  
  return (
    <div className="App">
      <Navbar expand="lg">
          <Nav className="mr-auto w-25">
              <Link className="text-success pr-4" to="/">Manage Leases</Link>
              <Link className="text-success pr-4" to="/">Help</Link>
              <Link className="text-success pr-4" to="/about">About</Link>
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
          <Nav className="ml-auto w-25">
              <Link className="pl-4 text-success">Create Listing</Link>
              {isAuthenticated
                ? <Link className="pl-4 text-success" to="/login"><NavItem onClick={handleLogout}>Logout</NavItem></Link>
                : <>
                    <Link className="pl-4 text-success" to="/login"><NavItem>Login</NavItem></Link>
                    <Link className="pl-4 text-success" to="/register"><NavItem>Register</NavItem></Link>
                  </>
              }
          </Nav>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default App;
