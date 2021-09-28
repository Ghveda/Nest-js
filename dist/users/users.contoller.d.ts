import { UsersService } from './users.service';
import { dataCreate } from './users.data';
import { JwtService } from "@nestjs/jwt";
export declare class UsersController {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    getPostMethod(data: dataCreate): Promise<void>;
    getSignInMethod(username: string, password: string): Promise<string>;
}
