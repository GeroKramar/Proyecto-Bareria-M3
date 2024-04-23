import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./credential"
import { Appointment } from "./appointment"

@Entity(
    {
        name: "users"
    }
)

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string
    
    @Column()
    email: string
    
    @Column()
    birthdate: string
    
    @Column()
    nDni: number
   
    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany (()=> Appointment,(appointment)=> appointment.user)
    appointment : Appointment[]


}