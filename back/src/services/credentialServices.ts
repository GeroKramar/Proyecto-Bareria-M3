import { AppDataSource } from "../config/data-source"
import { Credential } from "../entitie/credential"
import CredentialDto from "../dtos/CredentialDto"

export const createCredentialService = async (userData: CredentialDto): Promise<number> => {
  try {
      // Crear la instancia de Credential usando el repositorio
      const credentialRepository = AppDataSource.getRepository(Credential);
      const credential = credentialRepository.create(userData);

      // Guardar la instancia en la base de datos
      const savedCredential = await credentialRepository.save(credential);

      // Retorna el ID del par de credenciales creado
      return savedCredential.id;
  } catch (error:any) {
      throw new Error('Error al crear las credenciales: ' + error.message);
  }
}

export const validateCredentialService = async (userData:CredentialDto) =>{
  //Implementar una función que recibirá username y password,
  // y deberá chequear si el nombre de usuario existe entre los datos disponibles
  // y, si es así, si el password es correcto. En caso de que la validación sea exitosa, 
  //deberá retornar el ID de las credenciales.  

    const { username, password } = userData;
    
    
    const credentialUser = await AppDataSource.getRepository(Credential).findOneBy({ username, password });
  

    if (!credentialUser) {
      throw new Error("Credenciales incorrectas");
    }

    return credentialUser.id;
  
  
}

