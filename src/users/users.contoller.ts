import {Controller, Get, Post, Put, Delete, Body, Param,} from "@nestjs/common";
import { UsersService } from './users.service';
import {dataCreate} from './users.data';

@Controller('/users')
export class UsersController{
    constructor(
        private dataBase: UsersService,
    ) {}

    @Get(":id")
    async getGetMethod(@Param('id') id: string){
        return await this.dataBase.getData(id);
    }

    @Post()
    getPostMethod(@Body() data: dataCreate){
        return this.dataBase.create(data);
    }

    @Put(':id')
    getUpdateMethod(@Param('id') id:string, @Body() data: dataCreate){
        return this.dataBase.updateData(id, data);
    }

    @Delete(':id')
    getDeleteMethod(@Param('id') id:string){
        return this.dataBase.getDeleteMethod(id);
    }
}

