import { Card, Container } from "react-bootstrap";
import AnswerView from "../shared/AnswerView";
import { colorOptions } from "../../models/Structure";
import { ColorCard } from "../shared/cardConfigs";

const Red = () => {
  return (
    <Container>
      <Card
        style={{ backgroundColor: "#f7491e" }}
        className="mt-2 mb-2 box-with-shadow game-cards"
      >
        <Card.Body>
          <ColorCard titleColor="text-white" />
          <Container fluid>
            <AnswerView
              mainObject="red"
              objTitle="red"
              optionBtn={colorOptions}
              btnColor="light"
            />
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Red;
