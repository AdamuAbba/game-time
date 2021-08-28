import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ColorsScreen from "./ColorsScreen";
import ShapesScreen from "./ShapesScreen";
import "./WelcomeScreen.css";

const WelcomeScreen = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand className="text-danger">GAME TIME</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/colors">
                  Colors Game
                </Nav.Link>
                <Nav.Link as={Link} to="/Shapes">
                  Shapes Game
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/colors">
              <ColorsScreen />
            </Route>
            <Route path="/shapes">
              <ShapesScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default WelcomeScreen;
