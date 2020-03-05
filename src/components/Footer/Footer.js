import React from 'react'
import { Navbar } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';




const Footer = () => {

  return (
    <div>
      <Navbar dark className="fixed-bottom">
        <p className="text-white m-auto">Copyright &copy;2020, City<span style={{color: "#82b240"}}>Tours</span> </p>
      </Navbar>
    </div>
  );
}

export default Footer;

