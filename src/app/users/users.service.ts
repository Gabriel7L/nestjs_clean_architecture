import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import CreateUser from '@use-cases/users/create-user';

@Injectable()
export class UsersService {
  constructor(private createUser: CreateUser) {}
  Create(createUserDto: CreateUserDto) {
    return this.createUser.createUser(createUserDto);
  }

  FindAll() {
    return `This action returns all users`;
  }

  FindOne(id: number) {
    return `This action returns a #${id} user`;
  }

  Update(updateUserDto: UpdateUserDto) {
    return `This action updates a #${updateUserDto.id} user`;
  }

  Remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
