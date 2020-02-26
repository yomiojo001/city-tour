import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="nav-links">
                <NavLink className="nav-link" to="/hotellist">
                    <li>hotel</li>
                </NavLink>
                <NavLink className="nav-link" to="/restaurantlist">
                    <li>restuarant</li>
                </NavLink>
                <NavLink className="nav-link" to="/tourlist">
                    <li>tours</li>
                </NavLink>
            </ul> 
        </nav>
    )
}

