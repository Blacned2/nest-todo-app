import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../model/user';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {

    constructor(
        private readonly userService: UserService) {}

    @Get()
    async getAllUsers() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getAUser(@Param('id') id: number){
        return await this.userService.findOne(id);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userService.remove(id);
    }

    @Post()
    async createUser(@Body() user:User){
        return await this.userService.create(user);
    }

}
