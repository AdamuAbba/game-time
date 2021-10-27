import React from "react";
import { Container } from "react-bootstrap";
import "./WelcomeScreen.css";
const WelcomeScreen = () => {
  return (
    <Container
      style={{ height: "100vh" }}
      fluid
      className="bg-dark text-white d-flex justify-content-center align-items-center"
    >
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1>
          Hello, Welcome to <span className="text-danger">Game Time</span>
        </h1>
        <h1>Please pick a game from the navigation bar above</h1>
      </div>
    </Container>
  );
};

export default WelcomeScreen;
