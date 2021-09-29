import { Injectable, BadRequestException } from "@nestjs/common";
import { User } from "./users.entity";
import { getManager, Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>) {
    }

    async createAccount(data){
        const user =  new User();
        const addData = async () =>{
            user.username = data.username;
            user.password = data.password;
            await getManager().save(user);
        }

        return addData();
    }

    async findAccount(data){
        const user = await this.usersRepository.findOne(data)
    return user;
    }

    async getAllUsers(){
        const users = await this.usersRepository.find()
        return users
    }

}