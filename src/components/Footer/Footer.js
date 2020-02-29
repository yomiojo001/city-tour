import React from 'react'
import { Navbar } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';




const Footer = () => {

  return (
    <div>
      <Navbar dark className="fixed-bottom ">
        <p className="text-white m-auto">Copyright &copy;2020, CityTours </p>
      </Navbar>
    </div>
  );
}

export default Footer;

