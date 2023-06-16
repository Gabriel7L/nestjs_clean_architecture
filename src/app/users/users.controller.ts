import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/login/jwt.guard';

@ApiTags('Users')
@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  Create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.Create(createUserDto);
  }

  @Get()
  FindAll() {
    return this.usersService.FindAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.usersService.FindOne(+id);
  }

  @Patch(':id')
  Update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.Update(updateUserDto);
  }

  @Delete(':id')
  Remove(@Param('id') id: number) {
    return this.usersService.Remove(+id);
  }
}
