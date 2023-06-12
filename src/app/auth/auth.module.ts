import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { JwtStrategyService } from './jwt_strategy/jwt-strategy.service';
import { RefreshStrategyService } from './jwt_strategy/refreshToken-strategy.service';
import { authProvider } from 'src/providers/auth.provider';

@Module({
  imports: [UsersModule, JwtModule.register({})],
  controllers: [LoginController],
  providers: [
    AuthService,
    LoginService,
    JwtStrategyService,
    RefreshStrategyService,
    ...Object.values(authProvider),
  ],
})
export class AuthModule {}
