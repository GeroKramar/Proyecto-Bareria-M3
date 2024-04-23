import { Request, Response } from "express";
import {createUserService,  getAllUsersService,  getUserByIdService,  getUserCredential,} from "../services/userServices";
import { validateCredentialService } from "../services/credentialServices";
import { AppDataSource } from "../config/data-source";
import { User } from "../entitie/user";

export const getAllUsersController = async (req: Request, res: Response) => {
  //Implementar una función que pueda retornar el arreglo completo de usuarios..
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
} catch (error: any) {
    res.status(400).json({error: error.mesagge})
}
};

export const getUserByIdController = async (req: Request, res: Response) => {
  // Implementar una función que pueda retornar un elemento del arreglo que haya
  //sido identificado por id.
  try {
    const id = req.params.id;
    const users = await getUserByIdService(parseInt(id));
    res.status(200).json(users);
} catch (error: any) {
    res.status(404).json({error: error.mesagge})
}
};

export const createUserController = async (req: Request, res: Response) => {

  try {
    const { name, email, birthdate, nDni, username, password } = req.body;

    const newUser = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
} catch (error: any) {
    res.status(400).json({error: error.mesagge})
}
 // Implementar una función que pueda crear un nuevo usuario dentro del arreglo
  // PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente
  // par de credenciales llamando a la función correspondiente del servicio de credenciales.
  // Al recibir de esta función el id de las credenciales,
  // debe guardar el dato en la propiedad credentialsId.
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const id = await validateCredentialService({ username, password });
    const userid = await AppDataSource.getRepository(User).findOneBy({ id });
    res.status(200).json({ login: true, userid });
} catch (error: any) {
    res.status(400).json({error: error.mesagge})
}
};

export const getUserCredentialController = async (req: Request,res: Response)=> {

  try {
    const id = req.params.id;
    const users = await getUserCredential(parseInt(id));
    res.status(200).json(users);
} catch (error: any) {
    res.status(404).json({error: error.mesagge})
}
// Implementar una función que pueda retornar un elemento del arreglo que haya
 //sido identificado por id.
};

///////////////////////////////////////////////////////////
//export const createUserController = async (req: Request , res : Response)=>{

// const {name , email,  birthdate, nDni,credentialsId } = req.body;
// const newUser: IUser = await createUserService({name,email,birthdate,nDni,credentialsId})
// res.status(201).json(newUser)

//}
// export const getUserController = async (req: Request , res : Response)=>{
//         const users:IUser[] = await getUserService()
//         res.status(200).json(users)
// }
// export const deleteUserController = async (req: Request, res : Response) =>{
//         const {id} = req.body;
//         await deleteUserService(id);
//         res.status(200).json({mesagge:"User delete"})
// }
