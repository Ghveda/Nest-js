import { User } from "./users.entity";
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getData(): Promise<User[]>;
    createAccount(data: any): Promise<void>;
}
