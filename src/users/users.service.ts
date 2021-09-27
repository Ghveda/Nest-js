import { Injectable } from "@nestjs/common";
import {User} from "./users.entity";
import { Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class UsersService{
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
    }

    // async create(data){
    //     const user = this.usersRepository.create(data);
    //     await this.usersRepository.save(data);

    //     return user;
    // }

    async getData(){
        return await this.usersRepository.find();
    }

    // async updateData(id, data){
    //     await this.usersRepository.update({id},data );
    //     return this.usersRepository.findOne({where: {id: id}})
    // }

    // async getDeleteMethod(id){
    //     await this.usersRepository.delete({id})
    //     return this.usersRepository.findOne({where: {id: id}})
    // }

    async createAccount(data){
        await this.usersRepository.create(data)
    }

}