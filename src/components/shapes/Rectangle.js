import { Card, Container } from "react-bootstrap";
import AnswerView from "../shared/AnswerView";
import { shapeOptions } from "../../models/Structure";
import { ShapeCard } from "../shared/cardConfigs";

const Rectangle = () => {
  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }} className="mt-2 mb-2 shadow-lg">
          <Card.Img variant="top" src="./assets/shapes/rectangle.png" />
          <Card.Body>
            <ShapeCard titleColor="text-white" />
            <Container fluid>
              <AnswerView
                mainObject="rectangle"
                objTitle="rectangle"
                optionBtn={shapeOptions}
                btnColor="outline-success"
              />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Rectangle;