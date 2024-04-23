import { Request, Response } from "express";
import {
  cancelAppointmentByIdService,
  createAppointmentWithUserIdService,
  getAllAppointmentServices,
  getAppointmentDetailsByIdService,
} from "../services/appointmentServices";

export const getAllAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const appoinment = await getAllAppointmentServices();
    res.status(200).json(appoinment);
  } catch (error: any) {
    res.status(404).json({ error: error.mesagge });
  }

  // Implementar una función que pueda retornar el arreglo completo de turnos.
};

export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const appoint = await getAppointmentDetailsByIdService(parseInt(id));
    res.status(200).json(appoint);
  } catch (error: any) {
    res.status(404).json({ error: error.mesagge });
  }

  //   Implementar una función que pueda obtener el detalle de un turno por ID.
};

export const createAppointmentIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { date, time, user_id } = req.body;
    const newAppoint = await createAppointmentWithUserIdService({
      date,
      time,
      status: "active",
      user_id,
    });
    res.status(201).json(newAppoint);
  } catch (error: any) {
    res.status(400).json({ error: error.mesagge });
  }

  //Implementar una función que pueda crear un nuevo turno, siempre guardando,
  // además, el ID del usuario que ha creado dicho turno.
  //NO PUEDE HABER UN TURNO SIN ID DE USUARIO.
};

export const cancelAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;
    const appoint = await cancelAppointmentByIdService(parseInt(id));
    res.status(200).json(appoint);
  } catch (error: any) {
    res.status(404).json({ error: error.mesagge });
  }
};


// Implementar una función que reciba el id de un turno específico
// y una vez identificado el turno correspondiente,
// cambiar su estado a “cancelled”.

// export const cancelAppointmentByIdController = async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const numericId = parseInt(id);

//       // Verifica que el ID es un número válido
//       if (isNaN(numericId)) {
//         return res.status(400).json({ error: "El ID proporcionado no es válido." });
//       }

//       const appointment = await cancelAppointmentByIdService(numericId);

//       if (appointment) {
//         res.status(200).json(appointment);
//       } else {
//         res.status(404).json({ error: "Cita no encontrada." });
//       }
//     } catch (error) {
//       // Manejar otros errores inesperados
//       res.status(500).json({ error: error.message || "Error interno del servidor." });
//     }
//   };
