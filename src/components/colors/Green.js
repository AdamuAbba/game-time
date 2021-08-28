import { Card, Container } from "react-bootstrap";
import AnswerView from "../shared/AnswerView";
import { colorOptions } from "../../models/Structure";
import { ColorCard } from "../shared/cardConfigs";

const Green = () => {
  return (
    <>
      <Container>
        <Card
          style={{ width: "18rem", backgroundColor: "#39e366" }}
          className="mt-2 mb-2 shadow-lg"
        >
          <Card.Body>
            <ColorCard titleColor="text-white" />
            <Container fluid>
              <AnswerView
                mainObject="green"
                objTitle="green"
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

export default Green;
