import { UsersService } from './users.service';
import { dataCreate } from './users.data';
export declare class UsersController {
    private dataBase;
    constructor(dataBase: UsersService);
    getGetMethod(id: string): Promise<import("./users.entity").User>;
    getPostMethod(data: dataCreate): Promise<import("./users.entity").User[]>;
    getUpdateMethod(id: string, data: dataCreate): Promise<import("./users.entity").User>;
    getDeleteMethod(id: string): Promise<import("./users.entity").User>;
}
