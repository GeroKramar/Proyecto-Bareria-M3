import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validateUsername,
  validateDNI,
  validatePassword,
  validatePasswordMatch,
} from "../helpers/validationHelpers";

const Register = () => {
  const navegate = useNavigate();
  const [errors, setErrors] = useState({});
  const [userDataRegister, setUserDataRegister] = useState({
    email: "",
    name: "",
    nDni: "",
    password: "",
    username: "",
    birthdate: "",
    password2: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserDataRegister((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      validateForm(newState);
      return newState;
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (validateForm(userDataRegister)) {
      await axios
        .post("http://localhost:3000/users/register", userDataRegister)
        .then(() => {
          alert("Usuario registrado con éxito");
          navegate("/login");
        })
        .catch((error) => {
          alert("Error al registrar el usuario: " + error);
          console.error(
            "Detalles del error:",
            error.response ? error.response.data : "No response data"
          );
        });
    } else {
      console.log("Errores en el formulario: ", errors);
    }
  };

  const validateForm = (formData) => {
    let newErrors = {};
    let formIsValid = true;

    newErrors["email"] = validateEmail(formData.email);
    newErrors["name"] = validateName(formData.name);
    newErrors["username"] = validateUsername(formData.username);
    newErrors["nDni"] = validateDNI(formData.nDni);
    newErrors["password"] = validatePassword(formData.password);
    newErrors["password2"] = validatePasswordMatch(
      formData.password,
      formData.password2
    );

    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key] !== "") formIsValid = false;
    });

    setErrors(newErrors);
    return formIsValid;
  };

  return (
    <Container className="mt-4 mb-5">
      <Row className="mb-4 mt-2">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <h1 className="">Registro</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={userDataRegister.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Ingresa tu nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre completo"
                name="name"
                value={userDataRegister.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                name="username"
                value={userDataRegister.username}
                onChange={handleInputChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="number"
                    name="nDni"
                    value={userDataRegister.nDni}
                    onChange={handleInputChange}
                    isInvalid={!!errors.nDni}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nDni}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBirthdate">
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control
                    type="Date"
                    name="birthdate"
                    value={userDataRegister.birthdate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                value={userDataRegister.password}
                onChange={handleInputChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword2">
              <Form.Control
                type="password"
                placeholder="Repetir Contraseña"
                name="password2"
                value={userDataRegister.password2}
                onChange={handleInputChange}
                isInvalid={!!errors.password2}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password2}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="m-3"
              variant="outline-secondary"
              type="submit"
              disabled={Object.values(errors).some((error) => error !== "")}
            >
              REGISTRAR
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
