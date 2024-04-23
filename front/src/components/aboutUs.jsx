import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AboutUs = ({ img }) => {
  return (
    <Container>
      <Row>
        <Col md={4} className="mb-4 mt-5">
          <Ratio aspectRatio="1x1">
            <Card.Img variant="top" className="position-absolute top-50 start-50 translate-middle" src={img} />
          </Ratio>
        </Col>
        <Col md={8} className="mb-4 mt-4">
          <h2 className="text-center" style={{color:"white"}}><strong>Pipo Style</strong></h2>
            <p>
            Bienvenidos a Pipo Style, la barbería de Villa Luzuriaga donde la
            tradición y la modernidad se entrelazan para brindarle a cada
            cliente una experiencia única.
            </p>
            <p>
            Situados en el corazón de Buenos
            Aires, llevamos más de una década perfeccionando el arte del
            estilismo masculino.
            </p>
            <p>
            Nuestra misión es más que ofrecer cortes de
            pelo y afeitados; es crear un espacio donde cada hombre pueda
            relajarse, disfrutar y salir sintiéndose como la mejor versión de sí
            mismo. Con maestros barberos que combinan técnicas clásicas con las
            últimas tendencias, garantizamos un servicio personalizado que
            atiende a los detalles más finos. 
            </p>
            <p>
            Desde el momento en que entras por
            nuestras puertas, te sumerges en un ambiente que rinde homenaje a la
            época dorada de las barberías, con un toque contemporáneo. Nuestro
            salón está diseñado para ser tu refugio urbano, un lugar donde
            puedes tomar un respiro de la rutina y disfrutar de una bebida
            refrescante mientras te cuidamos. Estamos orgullosos de ser un punto
            de encuentro en la comunidad de Villa Luzuriaga, donde amigos y
            vecinos se reúnen y comparten historias. No solo cortamos cabello,
            forjamos relaciones y construimos recuerdos.
            </p>


        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
