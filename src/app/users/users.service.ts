import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import CreateUser from '@use-cases/users/create-user';

@Injectable()
export class UsersService {
  constructor(private createUser: CreateUser) {}
  create(createUserDto: CreateUserDto) {
    return this.createUser.createUser(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(updateUserDto: UpdateUserDto) {
    return `This action updates a #${updateUserDto.id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
