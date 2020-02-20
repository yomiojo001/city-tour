import React from 'react'
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="nav-links">
                <li><a href="/" className="nav-link">
                    hotel
                </a></li>
                <li><a href="/" className="nav-link">
                    restuarant
                </a></li>
                <li><a href="/" className="nav-link active">
                tours
                </a></li>
            </ul>
        </nav>
    )
}

