import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersTypeOrmRepository } from 'src/@core/db/repositories/typeorm/users/users-typeorm.repository';
import { DataSource } from 'typeorm';
import Users from '@domain/users/users';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateUser from '@use-cases/users/create-user';
import { IUsersRepository } from '@domain/users/iusers.repository';
import { usersProvider } from 'src/providers/users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...Object.values(usersProvider)],
})
export class UsersModule {}
