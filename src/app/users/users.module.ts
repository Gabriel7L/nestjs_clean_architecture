import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProvider } from 'src/providers/users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...Object.values(usersProvider)],
})
export class UsersModule {}
