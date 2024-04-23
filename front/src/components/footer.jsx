import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Row className="w-100">
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
            <Nav>
              <Nav.Link href="https://www.youtube.com/watch?v=35XFAkwmU4c&ab_channel=JavierAbancens">Políticas de privacidad</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mb-2 mb-md-0">
            <Nav>
              <Nav.Link href="https://www.youtube.com/watch?v=35XFAkwmU4c&ab_channel=JavierAbancens">Contacto</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
            <Nav>
              <Nav.Link href="https://www.instagram.com/pipostyle___/?hl=es-la">Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;