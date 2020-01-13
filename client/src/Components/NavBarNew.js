import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import Logo from './img/logo.png'

class NavBarNew extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className = "menu">
                    <div className="table">
                        <ul className="hor_lst">
                            <li><NavLink to="/"exact>Home</NavLink></li>
                            <li><NavLink to="/Listing">Create/Manage Listings</NavLink></li>
                            <li><NavLink to ="/Room">Find a Room</NavLink></li>
                            <li>
                                <Navbar.Brand href="#home" className="bd-highlight">
                                    <img
                                        alt="LEASR"
                                        src={Logo}
                                        width="60"
                                        height="60"
                                        className="d-inline-block align-top rounded"
                                    />
                                </Navbar.Brand>
                            </li>
                            <li><NavLink to="/Favorites">Favorited Listings</NavLink></li>
                            <li><NavLink to="/Messages">Messages</NavLink></li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Signup">Signup/Signin</NavLink></li>
                        </ul>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default NavBarNew