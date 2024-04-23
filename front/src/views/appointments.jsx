import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardAppointments from "../components/cardAppointment";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserAppointment } from "../redux/reducer";

const Appointments = () => {
  const appointmentCardText = useSelector((state) => state.userAppointmen);
  const userData = useSelector((state) => state.userActive);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.userid) {
      navigate("/login");
    }
  }, [userData, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userData.userid.id}`);
        const appointments = response.data.appointment;
        // Suponiendo que cada 'appointment' tiene una propiedad 'date' que es una cadena de fecha
        const sortedAppointments = appointments.sort((a, b) => new Date(b.date) - new Date(a.date));
        dispatch(setUserAppointment(sortedAppointments));
        console.log(sortedAppointments);

      } catch (error) {
        console.log("no entró", error);
      }
    };
    if (userData.userid) {
      fetchData();
    }
  }, [userData, dispatch]);

  return (
    <>
      <h2 className="text-center mb-3 mt-3">MIS TURNOS DISPONIBLES</h2>
      <Container>
        <Row>
          {appointmentCardText.map((appointment) => (
            <CardAppointments
              key={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              id={appointment.id}
            />
          ))}
        </Row>
      </Container>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
    </>
  );
};

export default Appointments;