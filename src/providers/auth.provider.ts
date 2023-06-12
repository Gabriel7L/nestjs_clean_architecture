import Users from '@domain/users/users';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import GetByEmailUser from '@use-cases/users/get-by-email-user';
import { UsersTypeOrmRepository } from 'src/@core/db/repositories/typeorm/users/users-typeorm.repository';
import { DataSource } from 'typeorm';

export const authProvider: Provider[] = [
  {
    provide: UsersTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new UsersTypeOrmRepository(dataSource.getRepository(Users));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: GetByEmailUser,
    useFactory: (usersRepository: UsersTypeOrmRepository) => {
      return new GetByEmailUser(usersRepository);
    },
    inject: [UsersTypeOrmRepository],
  },
];
