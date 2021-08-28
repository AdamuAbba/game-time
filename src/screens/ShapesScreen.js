import React from "react";
import Triangle from "../components/shapes/Triangle";
import Circle from "../components/shapes/Circle";
import Rectangle from "../components/shapes/Rectangle";
import Square from "../components/shapes/Square";
import { Col, Container, Row } from "react-bootstrap";

const ShapesScreen = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/shapes/colorbackground.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <h1 className="text-danger">SHAPES TIME</h1>
        </Container>
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
      </Container>
    </>
  );
};

export default ShapesScreen;
