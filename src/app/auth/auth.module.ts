import { Inject, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersTypeOrmRepository } from 'src/@core/db/repositories/typeorm/users/users-typeorm.repository';
import { DataSource } from 'typeorm';
import Users from '@domain/users/users';
import { getDataSourceToken } from '@nestjs/typeorm';
import GetByEmailUser from '@use-cases/users/get-by-email-user';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { JwtStrategyService } from './jwt_strategy/jwt-strategy.service';
import { RefreshStrategyService } from './jwt_strategy/refreshToken-strategy.service';

@Module({
  imports: [UsersModule, JwtModule.register({})],
  controllers: [LoginController],
  providers: [
    AuthService,
    LoginService,
    JwtStrategyService,
    RefreshStrategyService,
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
  ],
})
export class AuthModule {}
