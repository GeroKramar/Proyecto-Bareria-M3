import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dtos/AppointmentDto";
import { Appointment } from "../entitie/appointment";
import { User } from "../entitie/user";

export const getAllAppointmentServices = async () => {
  // Implementar una función que pueda retornar el arreglo completo de turnos.
  const appointment = await AppDataSource.getRepository(Appointment).find();
  return appointment;
};

export const getAppointmentDetailsByIdService = async (id: number) => {
  //   Implementar una función que pueda obtener el detalle de un turno por ID.
  const user = await AppDataSource.getRepository(Appointment).findOneBy({ id });
  return user;
};

export const createAppointmentWithUserIdService = async (
  userData: AppointmentDto
) => {
  const { date, time, user_id } = userData;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: user_id });
  if (!user) {
    throw new Error("User not found");
  }
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  const appointment = appointmentRepository.create({
    date,
    time,
    user: user 
  });
  await appointmentRepository.save(appointment);
  return appointment;
};

export const cancelAppointmentByIdService = async (id: number) => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const appointmentToUpdate = await appointmentRepository.findOneBy({ id });
  if (appointmentToUpdate) {
    appointmentToUpdate.status = "cancelled";
    const updatedAppointment = await appointmentRepository.save(
      appointmentToUpdate
    );
    return updatedAppointment;
  } else {
    throw new Error("Appointment not found");
  }
};
