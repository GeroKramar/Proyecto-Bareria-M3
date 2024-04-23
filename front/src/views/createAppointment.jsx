import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateAppointments = () => {
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
  });
  const userData = useSelector((state) => state.userActive);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.userid || !userData.userid.id) {
      navigate("/login");
    }
  }, [userData, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      const selectedDate = new Date(value + "T00:00:00");
      const dayOfWeek = selectedDate.getUTCDay(); 
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (dayOfWeek === 0 || dayOfWeek === 1) {
        // 0 es domingo y 1 es lunes en UTC.
        alert("No se pueden reservar turnos los domingos ni los lunes.");
        return; // No actualizar el estado para 'date' si es domingo o lunes.
      }
      if (selectedDate < today || selectedDate.getTime() === today.getTime()) {
        alert("No se pueden reservar turnos para días pasados o el mismo día.");
        return; // No actualiza el estado si es una fecha pasada o el día actual.
      }
    }

    setAppointmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (!appointmentData.date || !appointmentData.time) {
      alert("Por favor, selecciona una fecha y un horario.");
      return;
    }

    const appointmentDetails = {
      date: appointmentData.date,
      time: appointmentData.time,
      userId: userData.userid.id,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/appointment/schedule",
        appointmentDetails
      );
      alert("Turno creado con éxito");
    } catch (error) {
      alert(`No se ha podido crear el turno: ${error}`);
    }
  };

  const generateTimeSlots = (startHour, endHour, intervalMinutes) => {
    const times = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += intervalMinutes) {
        const time = `${hour % 24}:${minute < 10 ? "0" + minute : minute}`;
        const displayTime = `${hour % 12 === 0 ? 12 : hour % 12}:${
          minute < 10 ? "0" + minute : minute
        } ${hour < 12 ? "AM" : "PM"}`;
        times.push({ value: time, display: displayTime });
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots(10, 21, 30);

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Selecciona la fecha del turno</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={appointmentData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Selecciona el horario</Form.Label>
              <Form.Select
                name="time"
                value={appointmentData.time}
                onChange={handleInputChange}
              >
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot.value}>
                    {slot.display}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="outline-secondary" type="submit">
              Crear turno
            </Button>
          </Form>

          <h5 className="mt-3">
            {" "}
            Nuestro horario de atencion es de martes a sabados de 10hs a 21hs
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAppointments;
