import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    username: String

    @Column()
    password: String
}
