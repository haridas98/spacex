import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CustomNavbar.scss";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
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
            <Nav.Link as={Link} to="/">
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/technologies">
              Технология
            </Nav.Link>
            <Nav.Link as={Link} to="/flight">
              График полётов
            </Nav.Link>
            <Nav.Link as={Link} to="/guarantee">
              Гарантии
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              О компании
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
