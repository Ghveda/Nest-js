import { HttpException, Injectable } from "@nestjs/common";
import { User } from "./users.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) {
    }

    async createAccount(data) {

        const user = await this.usersRepository.findOne({ username: data.username })

        if (user) {
            throw new HttpException('Username is taken', 422);
        }

        const createUser = new User();

        async () => {
            createUser.username = data.username;
            createUser.password = data.password;
            await this.usersRepository.save(createUser);
        }
        const findUser = await this.usersRepository.findOne({ username: data.username })
        const jwt = await this.jwtService.signAsync({ data: findUser.username })

        return {
            msg: 'Acount is created',
            token: jwt,
            username: findUser.username
        }
    }


    async findAccount(data) {
        const user = await this.usersRepository.findOne(data.username)

        if (!user) {
            throw new HttpException('Username or password incorrect', 401);
        }

        const password = await bcrypt.compare(data.password, user.password);

        if (!password) {
            throw new HttpException('Username or password incorrect', 401);
        }
        
        const jwt = await this.jwtService.signAsync({ data: user.username });

        return {
            msg: "successful login",
            token: jwt,
            username: user.username
        }
    }

    async getAllUsers() {
        const users = await this.usersRepository.find()
        return users
    }

    async getTokenMethod(token) {
        const resToken = this.jwtService.decode(token);
        return{
            username: resToken
        }
        
    }

}