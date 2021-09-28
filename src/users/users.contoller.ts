import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { UsersService } from './users.service';
import { dataCreate } from './users.data';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';


@Controller('/users')
export class UsersController{  
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    @Post('/registration')
    getPostMethod(@Body() data: dataCreate){
        return this.userService.createAccount(data)
    }

    @Post('/signin')
    async getSignInMethod(@Body('username') username: string,
                    @Body('password') password: string
    ){

        const user = await this.userService.findAccount({username: username})
        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('password is a problem');
        }

        const jwt = await this.jwtService.signAsync({data: user.username});

        // response.cookie('jwt', jwt, {httpOnly: true});
    return jwt
    }

}

