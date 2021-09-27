import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Generated } from 'typeorm';

@Entity()
export class User {
    @Generated()
    id: number;

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

}