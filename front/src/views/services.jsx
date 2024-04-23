import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import CardService from "../components/cardService";

const Services = () => {

  const [activeTab, setActiveTab] = useState("link-1");

  const handleSelection = (eventKey) => {
    console.log(eventKey);
    setActiveTab(eventKey); 
  };

  return (
    <Container>
      <Row className="mb-4 mt-2">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h1 className="">Nuestros principales servicios</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Nav
            justify
            variant="tabs"
            activeKey={activeTab} 
            onSelect={handleSelection}
          >
            <Nav.Item>
              <Nav.Link
                style={
                  activeTab === "link-1"
                    ? { backgroundColor: "#2b3035", color: "#bc9c22" }
                    : { backgroundColor: "#394046", color: "#bc9c22" }
                }
                eventKey="link-1"
              >
                Barbería
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={
                  activeTab === "link-2"
                    ? { backgroundColor: "#2b3035", color: "#bc9c22" }
                    : { backgroundColor: "#394046", color: "#bc9c22" }
                }
                eventKey="link-2"
              >
                Consumibles
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: "#2b3035", borderRadius: "10px" }}
        className="mb-4"
      >
        {activeTab === "link-1" ? (
          <>
            <CardService
              img="./cortepelo1.jpg"
              title="Corte y Barba Estilizado"
              body="Experimenta nuestro servicio exclusivo que 
  incluye un corte de cabello personalizado y un perfilado de barba detallado, 
  adaptado a tus preferencias y estilo facial. Utilizamos técnicas modernas y 
  productos de alta calidad para asegurar un acabado perfecto."
              price="$3000"
            />
            <CardService
              img="./cortebarba.png"
              title="Estilizado de Barba"
              body="Nuestro servicio de perfilado de barba es perfecto para mantener
   un look impecable y definido. Cuidamos cada detalle para modelar tu barba según las últimas 
   tendencias o tu estilo personal,empleando productos suavizantes para una experiencia placentera 
   y un resultado duradero."
              price="$2500"
            />
            <CardService
              img="/testurizador.png"
              title="Polvo Texturizador para Peinarr"
              body="Transforma tu rutina de peinado con nuestro polvo texturizador.
   Este producto ligero proporciona un volumen instantáneo y una textura 
   matificante sin apelmazar el cabello. Ideal para todo tipo de cabello, 
   te permite crear estilos audaces y duraderos con facilidad. "
              price="$8500"
            />
          </>
        ) : activeTab === "link-2" ? (
          <>
            <CardService
              img="/latacocacola.jpg"
              title="Coca-Cola en lata"
              body="Disfruta del refrescante sabor de Coca-Cola, perfecta para compartir en cualquier momento"
              price="$1000"
            />
            <CardService
              img="./sprite.jpg"
              title="Sprite Refresco"
              body="Refrescante y burbujeante, Sprite ofrece una explosión de limón y lima para revitalizar tu día a cualquier hora."
              price="$1000"
            />
            <CardService
              img="./moster2.png"
              title="Monster Energy Original"
              body="Energía imparable con el sabor clásico de Monster, revitaliza cuerpo y mente."
              price="$1500"
            />
            <CardService
              img="./moster1.jpg"
              title="Monster Ultra"
              body="Sabor cítrico y refrescante sin azúcares añadidos, ideal para un empuje sin culpas."
              price="$1500"
            />
            <CardService
              img="./moster3.jpg"
              title="Monster Mango Loco"
              body="Una combinación exótica de mango y otras frutas tropicales, perfecta para cualquier hora del día."
              price="$1500"
            />
            <CardService
              img="./quilmes.png"
              title="Cerveza Quilmes Clásica"
              body="La cerveza más famosa de Argentina, ideal para disfrutar con amigos."
              price="$2500"
            />
            <CardService
              img="./Andes.png"
              title="Cerveza Andes Roja"
              body="Sabor intenso con toques de caramelo y maltas tostadas, perfecta para los amantes de las cervezas rojas."
              price="$2500"
            />
            <CardService
              img="./pat.png"
              title="Cerveza Patagonia Amber Lager"
              body="Refinada y balanceada, con un sutil toque a lúpulo y un color ámbar distintivo."
              price="$2500"
            />
            <CardService
              img="./cerveza1.png"
              title="Cerveza Brahma Chopp"
              body="Ligera y refrescante, Brahma Chopp es la opción perfecta para refrescar tus días con el verdadero sabor de una cerveza suave."
              price="$2500"
            />
          </>
        ) : null}
      </Row>
    </Container>
  );
};

export default Services;
