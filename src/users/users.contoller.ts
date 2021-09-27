import {Controller, Get, Post, Put, Delete, Body, Param,} from "@nestjs/common";
import { UsersService } from './users.service';
import {dataCreate} from './users.data';

@Controller('/users')
export class UsersController{  
    constructor(
        private dataBase: UsersService,
    ) {}

    @Get()
    async getGetMethod(){
        return await this.dataBase.getData();
    }

    @Post()
    getPostMethod(@Body() data: dataCreate){
        return this.dataBase.createAccount(data);
    }


    // @Put(':id')
    // getUpdateMethod(@Param('id') id:string, @Body() data: dataCreate){
    //     return this.dataBase.updateData(id, data);
    // }

    // @Delete(':id')
    // getDeleteMethod(@Param('id') id:string){
    //     return this.dataBase.getDeleteMethod(id);  
    // }
}

