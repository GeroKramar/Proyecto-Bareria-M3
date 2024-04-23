import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import ImgGallery from "./imgGallery";
import AboutUs from "./aboutUs";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("link-1");

  const handleSelection = (eventKey) => {
    console.log(eventKey);
    setActiveTab(eventKey);
  };


  const tabStyle = (key) => ({
    backgroundColor: activeTab === key ? "#394046" : "#bc9c22",
    color: activeTab === key ? "#bc9c22" : "#394046",
  });
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Nav
            justify
            variant="tabs"
            activeKey={activeTab}
            onSelect={handleSelection}
          >
            <Nav.Item>
              <Nav.Link style={tabStyle("link-1")} eventKey="link-1">
                Trabajos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={tabStyle("link-2")} eventKey="link-2">
                Sobre Nosotros
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "#394046", borderRadius: "10px" }}
        className="mb-4"
      >
        {activeTab === "link-1" && (
          <>
            <ImgGallery img="/corte1.jpg" />
            <ImgGallery img="/corte2.jpg" />
            <ImgGallery img="/corte3.jpg" />
            <ImgGallery img="/corte4.jpg" />
            <ImgGallery img="/corte5.jpg" />
            <ImgGallery img="/corte6.png" />

          </>
        )}
        {activeTab === "link-2" && <AboutUs img="/perfil2.jpg" />}
      </Row>
    </Container>
  );
};

export default Gallery;
