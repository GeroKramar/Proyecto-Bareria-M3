import { DataSource } from "typeorm"
import { User } from "../entitie/user"

import { Credential } from "../entitie/credential"
import { Appointment } from "../entitie/appointment"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "dbmodulo3",
    //  dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})