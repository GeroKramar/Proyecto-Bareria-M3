// import IUser from "../interfaces/IUser"

import { AppDataSource } from "../config/data-source"
import { User } from "../entitie/user"
import UserDto from "../dtos/UserDto"
import { createCredentialService } from "./credentialServices"
import { Credential } from "../entitie/credential"



export const getAllUsersService = async ()=>{
    //Implementar una función que pueda retornar el arreglo completo de usuarios..
    const users = await AppDataSource.getRepository(User).find({relations:{appointment:true}})
    return users;

}

   
export const getUserByIdService = async (id: number) =>{
    // Implementar una función que pueda retornar un elemento del arreglo que haya 
    //sido identificado por id.
    const user = await AppDataSource.getRepository(User).findOne({where:{id}, relations:{appointment:true}});
    return user;
}

export const createUserService = async (userData: UserDto) => {
    const { username, password, name, email, birthdate, nDni } = userData;

    // Crear credenciales y obtener el objeto de credenciales completo
    const credentialId = await createCredentialService({ username, password });
    const credentialRepository = AppDataSource.getRepository(Credential);
    const credential = await credentialRepository.findOneBy({ id: credentialId });

    if (!credential) {
        throw new Error("Error al recuperar las credenciales creadas.");
    }

    // Crear usuario y asociar las credenciales
    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create({
        name,
        email,
        birthdate,
        nDni,
        credential  // Asocia el objeto Credential directamente
    });

    // Guardar el usuario en la base de datos
    const savedUser = await userRepository.save(user);
    return savedUser;
};

export const getUserCredential = async (id: number) =>{
    // Implementar una función que pueda retornar un elemento del arreglo que haya 
    //sido identificado por id.
    const user = await AppDataSource.getRepository(User).findOne({where:{id}, relations:{credential:true}});
    return user;
}



///////////////////////////////////////////////////////////////////////////

// let users:IUser[] = []
// let id:number = 1;


// export const createUserService = async (userData:UserDto): Promise<IUser> =>{
// const newUser: IUser = {
//     id,
//     name : userData.name,
//     email : userData.email,
//     birthdate: userData.birthdate,
//     nDni: userData.nDni,
//     credentialsId: userData.credentialsId
// }
// users.push(newUser)
// id++
// return newUser


// }
// export const getUserService = async (): Promise<IUser[]> =>{
//     return users
// }
// export const deleteUserService = async (id: number) : Promise<void> =>{
//     users = users.filter((user:IUser)=>{
//         return user.id !== id
//     })
// }
  
