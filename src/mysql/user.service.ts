import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/user';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<boolean> {
        var user;
        this.userRepository.findOneBy({ id }).then(result => {
            if (result === null) {
                return false;
            } else {
                result.isActive = false;
                this.userRepository.save(result);
                return true;
            }
        });
        return false;
    };

    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}
