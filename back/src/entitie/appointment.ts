import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

@Entity({ name: "appointments"})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    time: string;
    @Column({ default: 'active' })
    status: string
    @ManyToOne(() => User, (user)=> user.appointment )
    user: User
}


