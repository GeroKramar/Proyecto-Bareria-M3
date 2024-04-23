import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./carrouselImagen";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const CarrouselHome = () => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    fontStyle: "normal",
    backgroundColor: "transparent",
    border: "none",
  };
  return (
    <Carousel slide={true}>
      <Carousel.Item>
        <ExampleCarouselImage src="./img1.png" />
        <Carousel.Caption>
          <h3>Servicio de Barberia</h3>
          <p>Con diseños modernos y clasicos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="./img2.png" />
        <Carousel.Caption>
          <h3>Precios economicos</h3>
          <p>te ayudamos a que encuentres tu estilo sin dañar tu bolsillo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="./img3.png" text="Third slide" />
        <Carousel.Caption>
          <h3>¿Que estas esperando para agendar un turno?</h3>
          <p>
            <Button variant="dark">
              <Link style={linkStyle} to="/appointments/schedule" >Agendar turno</Link>
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouselHome;
