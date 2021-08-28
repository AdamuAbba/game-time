import { Card, Container } from "react-bootstrap";
import AnswerView from "../shared/AnswerView";
import { colorOptions } from "../../models/Structure";
import { ColorCard } from "../shared/cardConfigs";

const Blue = () => {
  return (
    <>
      <Container>
        <Card
          style={{ width: "18rem", backgroundColor: "#6897ed" }}
          className="mt-2 mb-2 shadow-lg"
        >
          <Card.Body>
            <ColorCard titleColor="text-white" />
            <Container fluid>
              <AnswerView
                mainObject="blue"
                objTitle="blue"
                optionBtn={colorOptions}
                btnColor="light"
              />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Blue;
