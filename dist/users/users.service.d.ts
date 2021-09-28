import { User } from "./users.entity";
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createAccount(data: any): Promise<void>;
    findAccount(data: any): Promise<User>;
}
