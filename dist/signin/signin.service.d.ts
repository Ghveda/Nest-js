import { Repository } from 'typeorm';
import { RegisteredUser } from './signin.entity';
export declare class SingInService {
    private usersRepository;
    constructor(usersRepository: Repository<RegisteredUser>);
}
