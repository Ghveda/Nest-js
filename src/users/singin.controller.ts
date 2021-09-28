import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from './users.service';
import { dataCreate } from './users.data';
import {getManager} from "typeorm";


@Controller('/signin')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) {
    }

    @Post()
    getPostMethod(@Body() data: dataCreate) {
        const checkData = async () =>{
            // user.username = data.username;
            // user.password = data.password;
            // await getManager().save(user);
            //
            // return checkData()
        }

    }
}