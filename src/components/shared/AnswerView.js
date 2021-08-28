import { Button, Alert, Col, Row, Spinner } from "react-bootstrap";
import { Structure } from "../../models/Structure";
import { useState } from "react";

const AnswerView = (props) => {
  let mainObject = props.mainObject;
  let objTitle = props.objTitle;
  let optionBtn = props.optionBtn;
  let btnColor = props.btnColor;

  mainObject = { mainObject };
  mainObject = new Structure(objTitle, optionBtn);
  console.log(mainObject.title);

  const [isAnswer, setIsAnswer] = useState("");
  console.log(mainObject.userSelections);

  const answerViewFunc = () => {
    if (isAnswer.toLowerCase() === mainObject.title.toLowerCase()) {
      return (
        <Col>
          <Alert variant="success">correct 🎉</Alert>
        </Col>
      );
    } else if (isAnswer === "") {
      return (
        <Col>
          <Alert variant="info">
            <Spinner
              as="span"
              variant="danger "
              animation="grow"
              aria-hidden="true"
              size="sm"
            />
            waiting..
          </Alert>
        </Col>
      );
    } else if (isAnswer.toLowerCase() !== mainObject.title.toLowerCase()) {
      return (
        <Col>
          <Alert variant="danger">try again 😔</Alert>
        </Col>
      );
    }
  };
  return (
    <>
      <Row>
        {answerViewFunc()}
        <Col>
          <div className="d-grid gap-2">
            {mainObject.userSelections.map((eachBtn) => (
              <Button
                key={eachBtn.id}
                className="mb-1 d-flex"
                variant={btnColor}
                size="sm"
                value={eachBtn.shape}
                onClick={() => setIsAnswer(eachBtn.shape)}
              >
                {eachBtn.id} {eachBtn.shape}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AnswerView;
