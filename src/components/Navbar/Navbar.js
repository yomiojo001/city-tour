import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import logo from "../../logo.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.scss";




const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      <Navbar dark>
        <NavbarBrand href="/" className="mr-auto"><img src={logo} alt="city tours company" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 text-right" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar onSelect={!toggleNavbar}>
            <NavItem>
              <NavLink className="nav-link" to="/"  exact>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/hotellist">Hotel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/restaurantlist">Restaurant</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/tourlist">Tours</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;

