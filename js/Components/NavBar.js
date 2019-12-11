import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () =>{
    return(
        <div className = "menu">
            <div className="table">
                <ul className="hor_lst">
                    <li><NavLink to="/"exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/signup">Signup</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar