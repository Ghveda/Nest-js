import { Module } from "@nestjs/common";
import { UsersController } from "./users.contoller";
import {UsersService} from "./users.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}}),
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