import React from 'react';
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (

    <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        © 2019, LEARN TECH PUZZ. All rights reserved
        </Navbar.Text>
        </Navbar.Collapse>
    </Navbar >

  );
}

export default Footer;