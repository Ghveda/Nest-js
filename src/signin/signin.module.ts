import { Module } from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { SingIn } from "./signin.controller";
import { RegisteredUser } from "./signin.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([RegisteredUser])
    ],
    controllers: [SingIn],
    providers: [],
    exports: [
        TypeOrmModule
    ]
})

export class RegisteredModule{}