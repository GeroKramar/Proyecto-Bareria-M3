import { Router } from "express";
// import { createUserController, getUserController, deleteUserController } from "../controllers/userController";
// import auth from "../middlewares/authentication";
import { createUserController, getAllUsersController, getUserByIdController, getUserCredentialController, loginUserController,  } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", getAllUsersController)
userRouter.get("/:id", getUserByIdController)
// userRouter.get("/credential/:id",  getUserCredentialController) // testear credencial con su usuario
userRouter.post("/register", createUserController)
userRouter.post("/login", loginUserController) // todavia no esta implementado porque no se especifico bien como hacerlo



export default userRouter;