import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserActive } from "../redux/reducer";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const InitialState = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const [userData, setUserData] = useState(InitialState);
  const dispath = useDispatch();
  const navegate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        userData
      );
      dispath(setUserActive(response.data));
      console.log(response.data);
      alert("usuario logueado con Exito");
      navegate("/home")
    } catch (error) {
      alert("No se pudo loguaer correctamente");
    }
  };

  return (
    <>
      <Container className="m-4 mb-5">
      <Row className="mb-4 mt-2">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h1 className="">Iniciar sesion</h1>
        </Col>
      </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu Usurio"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar mi contraseña" />
              </Form.Group>
              <Button
                className="mb-4"
                variant="outline-secondary"
                type="submit"
              >
                INGRESAR!
              </Button>
            </Form>
            <h4>No tienes una cuenta? <span><Link to="/register">registrate ahora</Link></span></h4>
          </Col>
        </Row>
      </Container>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
    </>
  );
};

export default Login;
