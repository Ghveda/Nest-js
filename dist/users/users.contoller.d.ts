import { UsersService } from './users.service';
import { dataCreate } from './users.data';
export declare class UsersController {
    private dataBase;
    constructor(dataBase: UsersService);
    getGetMethod(): Promise<import("./users.entity").User[]>;
    getPostMethod(data: dataCreate): Promise<void>;
}
