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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_data_1 = require("./users.data");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let UsersController = class UsersController {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async getPostMethod(data) {
        await this.userService.createAccount(data);
        const user = await this.userService.findAccount({ username: data.username });
        const jwt = await this.jwtService.signAsync({ data: user.username });
        return jwt;
    }
    async getSignInMethod(username, password) {
        const user = await this.userService.findAccount({ username: username });
        if (!user) {
            throw new common_1.BadRequestException('invalid credentials');
        }
        if (await bcrypt.compare(password, user.password)) {
            throw new common_1.BadRequestException('password is a problem');
        }
        const jwt = await this.jwtService.signAsync({ data: user.username });
        return jwt;
    }
    getAll() {
        const users = this.userService.getAllUsers();
        return users;
    }
};
__decorate([
    (0, common_1.Post)('/registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_data_1.dataCreate]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPostMethod", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSignInMethod", null);
__decorate([
    (0, common_1.Post)('/allUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
UsersController = __decorate([
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.contoller.js.map