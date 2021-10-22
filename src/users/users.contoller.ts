import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { UsersService } from './users.service';
import { userData } from './users.data';
import * as bcrypt from 'bcryptjs';


@Controller('/users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) { }

    @Post('/registration')
    async registration(@Body() data: userData) {
        const register = this.userService.createAccount({
            username: data.username,
            password: await bcrypt.hash(data.password, 10)
        })

        return register;
    }


    @Post('/signin')
    async login(@Body() data: userData
    ) {
        const user = await this.userService.findAccount(
            {
                username: data.username,
                password: data.password
            })

        return user;
    }


    @Post('/allUsers')
    getAll() {
        const users = this.userService.getAllUsers();
        return users;
    }


    @Post('/token')
    getToken(@Body('token') token: string) {
        const match = this.userService.getTokenMethod(token);
        return match;
    }
}

