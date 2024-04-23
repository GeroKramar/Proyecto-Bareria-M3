import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import { cancelAppointmentAction } from "../redux/reducer";
import { parseISO, isBefore, subDays } from 'date-fns';

const CardAppointments = ({ date, time, status, id }) => {
  const dispatch = useDispatch();

  const cancelAppointment = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/appointment/cancel/${id}`
      );
      if (response.status === 200) {
        console.log("Cancelación exitosa:", response.data);
        dispatch(cancelAppointmentAction(id));
      } else {
        console.log("Respuesta no exitosa:", response);
      }
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  const handleCancel = () => {
    cancelAppointment();
  };

  const appointmentDate = parseISO(date);
  const today = new Date();
  const dayBeforeAppointment = subDays(appointmentDate, 1);

  const canCancel = isBefore(today, dayBeforeAppointment) && status !== "cancelled";

  return (
    <>
      <Col sm className="mb-4">
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Header>TURNO</Card.Header>
          <Card.Body>
            <Card.Title>TURNO RESERVADO</Card.Title>
            <Card.Text>
              El turno ha sido reservado para el día {date} a la hora {time}.
              Por favor mantener la puntualidad.
              Recuerda que cercano a la fecha del turno no podras cancelarlo.
            </Card.Text>
            <Card.Text>El estado de su turno se encuentra {status}.</Card.Text>
            <Button
              onClick={handleCancel}
              variant="primary"
              disabled={!canCancel}
            >
              Cancelar turno
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardAppointments;