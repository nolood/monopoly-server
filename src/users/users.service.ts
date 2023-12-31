import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }
  async getUserByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = this.userRepository.findOne({ where: { email } });
    return user;
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
}
