import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class RegisteredUser {
    @Generated()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}