import { Injectable } from "@nestjs/common";
import { Repository} from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import { RegisteredUser } from './signin.entity';


@Injectable()
export class SingInService{
    constructor(@InjectRepository(RegisteredUser) private usersRepository: Repository<RegisteredUser>) {
    }

    // async create(data){
    //     const user = this.usersRepository.create(data);
    //     await this.usersRepository.save(data);

    //     return user;
    // }

    // async getData(){
    //     return await this.usersRepository.find();
    // }

    // async updateData(id, data){
    //     await this.usersRepository.update({id},data );
    //     return this.usersRepository.findOne({where: {id: id}})
    // }

    // async getDeleteMethod(id){
    //     await this.usersRepository.delete({id})
    //     return this.usersRepository.findOne({where: {id: id}})
    // }

}