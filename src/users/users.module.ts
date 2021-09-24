import { Module } from "@nestjs/common";
import { UsersController } from "./users.contoller";
import {UsersService} from "./users.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersController],
    providers: [
        UsersService
    ],
    exports: [
        TypeOrmModule
    ]
})

export class UsersModule{}