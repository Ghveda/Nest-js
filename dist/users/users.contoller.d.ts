import { UsersService } from './users.service';
import { userData } from './users.data';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    registration(data: userData): Promise<{
        msg: string;
        token: string;
        username: string;
    }>;
    login(data: userData): Promise<{
        msg: string;
        token: string;
        username: string;
    }>;
    getAll(): Promise<import("./users.entity").User[]>;
    getToken(token: string): Promise<{
        username: string | {
            [key: string]: any;
        };
    }>;
}
