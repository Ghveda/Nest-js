import { UsersService } from './users.service';
import { dataCreate } from './users.data';
import { JwtService } from "@nestjs/jwt";
export declare class UsersController {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    getPostMethod(data: dataCreate): Promise<string>;
    getSignInMethod(username: string, password: string): Promise<string>;
    getAll(): Promise<import("./users.entity").User[]>;
}
