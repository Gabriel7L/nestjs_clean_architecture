import { IUsersRepository } from '@domain/users/iusers.repository';
import Users from '@domain/users/users';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateUser from '@use-cases/users/create-user';
import { UsersTypeOrmRepository } from 'src/@core/db/repositories/typeorm/users/users-typeorm.repository';
import { DataSource } from 'typeorm';

export const usersProvider: Provider[] = [
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
];
