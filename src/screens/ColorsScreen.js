import React from "react";
import Blue from "../components/colors/Blue";
import Green from "../components/colors/Green";
import { Col, Container, Row } from "react-bootstrap";
import Yellow from "../components/colors/Yellow";
import Red from "../components/colors/Red";

const ColorsScreen = () => {
  return (
    <Container fluid className="full-screen ">
      <Row>
        <Row className="text-center">
          <h1 className="text-white">COLOR TIME</h1>
        </Row>
        <Row>
          <Col>
            <Blue />
          </Col>
          <Col>
            <Green />
          </Col>
          <Col>
            <Yellow />
          </Col>
          <Col>
            <Red />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ColorsScreen;
