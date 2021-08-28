import React from "react";
import Blue from "../components/colors/Blue";
import Green from "../components/colors/Green";
import { Col, Container, Row } from "react-bootstrap";
import Yellow from "../components/colors/Yellow";
import Red from "../components/colors/Red";

const ColorsScreen = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/colors/watercolor.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <h1 className="text-danger">COLOR TIME</h1>
        </Container>
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
      </Container>
    </>
  );
};

export default ColorsScreen;
