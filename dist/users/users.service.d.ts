import { User } from "./users.entity";
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(data: any): Promise<User[]>;
    getData(data: any): Promise<User>;
    updateData(id: any, data: any): Promise<User>;
    getDeleteMethod(id: any): Promise<User>;
}
