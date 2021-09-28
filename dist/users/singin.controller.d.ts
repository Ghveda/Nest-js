import { UsersService } from './users.service';
import { dataCreate } from './users.data';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getPostMethod(data: dataCreate): void;
}
