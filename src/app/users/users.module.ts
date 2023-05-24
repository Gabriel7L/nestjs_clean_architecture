import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersTypeOrmRepository } from 'src/@core/db/repositories/typeorm/users/users-typeorm.repository';
import { DataSource } from 'typeorm';
import Users from '@domain/users/users';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateUser from '@use-cases/users/create-user';
import { IUsersRepository } from '@domain/users/iusers.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UsersTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new UsersTypeOrmRepository(dataSource.getRepository(Users));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateUser,
      useFactory: (userRepo: IUsersRepository) => {
        return new CreateUser(userRepo);
      },
      inject: [UsersTypeOrmRepository],
    },
  ],
})
export class UsersModule {}
