import { User } from "./user"
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, } from "typeorm"

@Entity(
    {
        name: "credentials"
    }
)

export class Credential{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username : string
    
    @Column()
    password: string
    
    @OneToOne(() => User)
    @JoinColumn()
    user_id: User
   
}


