import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    post: string;

}