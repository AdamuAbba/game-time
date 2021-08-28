import { Card, Container } from "react-bootstrap";
import AnswerView from "../shared/AnswerView";
import { colorOptions } from "../../models/Structure";
import { ColorCard } from "../shared/cardConfigs";

const Yellow = () => {
  return (
    <>
      <Container>
        <Card
          style={{ width: "18rem", backgroundColor: "#e7f754" }}
          className="mt-2 mb-2 shadow-lg"
        >
          <Card.Body>
            <ColorCard />
            <Container fluid>
              <AnswerView
                mainObject="yellow"
                objTitle="yellow"
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

export default Yellow;
