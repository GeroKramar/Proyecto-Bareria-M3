import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from 'react-bootstrap/Ratio'

const ImgGallery = ({img}) => {
  return (
    <Col md={4} className="mb-4 mt-4"> 
      <Ratio aspectRatio="1x1">
        <Card.Img variant="top" src={img} />
      </Ratio>
    </Col>
  );
};

export default ImgGallery;