import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { UsersService } from './users.service';
import { userData } from './users.data';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';


@Controller('/users')
export class UsersController{  
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    @Post('/registration')
    async registration(@Body() data: userData){
        await this.userService.createAccount({
            username: data.username,
            password: await bcrypt.hash(data.password, 10)
        })

        const user = await this.userService.findAccount({username: data.username})
        const jwt = await this.jwtService.signAsync({data: user.username})

        return jwt
    }


    @Post('/signin')
    async login(@Body() data: userData
    ){
        const user = await this.userService.findAccount({username: data.username})
        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (await bcrypt.compare(await bcrypt.hash(data.password,10), user.password)) {
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

