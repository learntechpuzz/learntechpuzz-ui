import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from './../../../logo.png'

const Footer = () => {
  return (

    <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#home">
        <img
          alt="learntechpuzz"
          src={logo}
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Copyright © 2019, learntechpuzz. All rights reserved
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar >

  );
}

export default Footer;