import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeAccount } from "../redux/reducer";

const NavbarHome = () => {
  const userData = useSelector((state) => state.userActive);
  const dispatch = useDispatch();

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    fontStyle: "normal",
    backgroundColor: "transparent",
    border: "none",
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/home">
            <Image
              src="./logo.png"
              style={{ width: "auto", height: "3rem" }}
              rounded
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link style={linkStyle} to="/home">
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={linkStyle} to="/services">
                Servicios
              </Link>
            </Nav.Link>
            {userData.userid && (
              <Nav.Link>
                <Link style={linkStyle} to="/appointments">
                  Turnos
                </Link>
              </Nav.Link>
            )}

            <Nav.Link>
              <Link style={linkStyle} to="/appointments/schedule">
                Reservar turno
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="d-flex">
              {!userData.userid && (
                <Button className="me-2" variant="outline-secondary">
                  <Link style={linkStyle} to="/register">
                    Registrarse
                  </Link>
                </Button>
              )}
              {!userData.userid ? (
                <Button variant="outline-secondary">
                  <Link style={linkStyle} to="/login">
                    Iniciar sesion
                  </Link>
                </Button>
              ) : (
                <Button variant="outline-secondary">
                  <Link
                    style={linkStyle}
                    onClick={() => {
                      dispatch(closeAccount())
                    }}
                  >
                    Cerrar sesion
                  </Link>
                </Button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
