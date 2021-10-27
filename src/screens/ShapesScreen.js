import React from "react";
import Triangle from "../components/shapes/Triangle";
import Circle from "../components/shapes/Circle";
import Rectangle from "../components/shapes/Rectangle";
import Square from "../components/shapes/Square";
import { Col, Container, Row } from "react-bootstrap";

const ShapesScreen = () => {
  return (
    <Container fluid className="full-screen">
      <Row>
        <Row className="text-center">
          <h1 className="text-white">SHAPES TIME</h1>
        </Row>
        <Row>
          <Col>
            <Triangle />
          </Col>
          <Col>
            <Circle />
          </Col>
          <Col>
            <Rectangle />
          </Col>
          <Col>
            <Square />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ShapesScreen;
