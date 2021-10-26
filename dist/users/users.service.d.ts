import { User } from "./users.entity";
import { Repository } from 'typeorm';
import { JwtService } from "@nestjs/jwt";
export declare class UsersService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    createAccount(data: any): Promise<{
        msg: string;
        token: string;
        username: string;
    }>;
    findAccount(data: any): Promise<{
        msg: string;
        token: string;
        username: string;
    }>;
    getAllUsers(): Promise<User[]>;
    getTokenMethod(token: any): Promise<{
        username: string | {
            [key: string]: any;
        };
    }>;
}
