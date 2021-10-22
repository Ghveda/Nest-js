"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_entity_1 = require("./users.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createAccount(data) {
        const user = await this.usersRepository.findOne({ username: data.username });
        if (user) {
            throw new common_1.HttpException('Username is taken', 422);
        }
        const createUser = new users_entity_1.User();
        async () => {
            createUser.username = data.username;
            createUser.password = data.password;
            await this.usersRepository.save(createUser);
        };
        const findUser = await this.usersRepository.findOne({ username: data.username });
        const jwt = await this.jwtService.signAsync({ data: findUser.username });
        return {
            msg: 'Acount is created',
            token: jwt
        };
    }
    async findAccount(data) {
        const user = await this.usersRepository.findOne(data.username);
        if (!user) {
            throw new common_1.HttpException('Username or password incorrect', 401);
        }
        const password = await bcrypt.compare(data.password, user.password);
        if (!password) {
            throw new common_1.HttpException('Username or password incorrect', 401);
        }
        const jwt = await this.jwtService.signAsync({ data: user.username });
        return {
            msg: "successful login",
            token: jwt
        };
    }
    async getAllUsers() {
        const users = await this.usersRepository.find();
        return users;
    }
    async getTokenMethod(token) {
        const resToken = this.jwtService.decode(token);
        return {
            username: resToken
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map