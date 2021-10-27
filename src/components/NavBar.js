import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand className="ps-2">
        <span className=" nav-bar-icon">GAME TIME</span>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto nav-bar-items d-flex align-items-center justify-content-center">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link activeClassName="text-success" as={NavLink} to="/colors">
            Colors
          </Nav.Link>
          <Nav.Link activeClassName="text-success" as={NavLink} to="/shapes">
            Shapes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
