import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import "./navbar.css";

const MyNavbar = () => {
  return (
    <>
    <Navbar fixed="top" expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between ">
    <Navbar.Brand href="#form"><h1 className="logo"  >INVOICE APP</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className=" ml-auto px-2">
      <Nav.Link className="link"  href="#form">Add New Invoice</Nav.Link>
      <Nav.Link  className="link" href="#invoices">View all Invoice</Nav.Link>
      <Nav.Link  className="link" href="#about">About this app</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default MyNavbar;