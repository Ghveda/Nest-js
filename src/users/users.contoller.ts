import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { UsersService } from './users.service';
import { dataCreate } from './users.data';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';


@Controller('/users')
export class UsersController{  
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    @Post('/registration')
    async getPostMethod(@Body() data: dataCreate){
        await this.userService.createAccount(data)
        const user = await this.userService.findAccount({username: data.username})

        const jwt = await this.jwtService.signAsync({data: user.username})
        return jwt
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

    return jwt
    }

    @Post('/allUsers')
    getAll(){
        const users = this.userService.getAllUsers();
        return users
    }
}

