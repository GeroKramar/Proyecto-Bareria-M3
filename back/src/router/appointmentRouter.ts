import { Router } from "express";
import { cancelAppointmentByIdController, createAppointmentIdController, getAllAppointmentController, getAppointmentByIdController } from "../controllers/appointmentController";
const turnRouter = Router();

turnRouter.get("/", getAllAppointmentController)
turnRouter.get("/:id", getAppointmentByIdController)
turnRouter.post("/schedule" , createAppointmentIdController)
turnRouter.put("/cancel/:id", cancelAppointmentByIdController)
export default turnRouter;
