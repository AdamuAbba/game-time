import React from "react";
import { Card } from "react-bootstrap";

export const ColorCard = (props) => {
  let titleColor = props.titleColor;
  return (
    <>
      <Card.Title className={titleColor}>what's this color called ?</Card.Title>
      <Card.Subtitle className={titleColor}>pick from (A-D)</Card.Subtitle>
    </>
  );
};

export const ShapeCard = () => {
  return (
    <>
      <Card.Title>Pick corresponding shape</Card.Title>
    </>
  );
};
