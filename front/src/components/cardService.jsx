import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from 'react-bootstrap/Ratio'

const CardService = ({ img, title, body, price }) => {
  return (
    <Col md={4} className="mb-4 mt-4"> 
      <Card className="h-100"> 
      <Ratio aspectRatio="1x1">
        <Card.Img variant="top" src={img} />
      </Ratio>
        <Card.Body className="d-flex flex-column"> 
          <Card.Title>{title}</Card.Title>
          <Card.Text className="flex-grow-1">{body}</Card.Text> 
          <Card.Title>{price}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardService;