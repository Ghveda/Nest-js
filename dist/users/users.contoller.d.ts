import { UsersService } from './users.service';
import { userData } from './users.data';
import { JwtService } from "@nestjs/jwt";
export declare class UsersController {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    registration(data: userData): Promise<string>;
    login(data: userData): Promise<string>;
    getAll(): Promise<import("./users.entity").User[]>;
}
