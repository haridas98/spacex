import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CustomNavbar.scss";
import { Link } from "react-router-dom";

const CustomNavbar = ({ navbarItems }) => {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./img/лого.png" alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            {navbarItems.map((navbarItem, id) => (
              <Nav.Link key={id} as={Link} to={navbarItem.url}>
                {navbarItem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
