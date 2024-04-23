import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImgHome = ({ imgSrc, buttonText, tooltipText }) => {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    fontStyle: "normal",
    backgroundColor: "transparent",
    border: "none",
  };
  const ratioContainerStyle = {
    position: "relative",
    width: "100%",
    margin: "auto",
    height: "60%",
    paddingTop: "40%",
  };

  // Estilo para la imagen
  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Estilos para el botón
  const buttonStyle = {
    position: "absolute",
    zIndex: 10,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={ratioContainerStyle} className="mb-2">
      <img src={imgSrc} alt="Contenido" style={imageStyle} />

      <Button size="lg" variant="dark" style={buttonStyle}>
        <Link style={linkStyle} to="/appointments/schedule">Reservar turno</Link>
      </Button>
    </div>
  );
};
export default ImgHome;
