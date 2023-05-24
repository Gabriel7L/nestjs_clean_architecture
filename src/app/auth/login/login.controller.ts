import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';
import { Body, Controller, Post } from '@nestjs/common';

class LoginBody {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
class SwaggerLoginBody {
  @ApiProperty()
  Token: string;

  @ApiProperty()
  RefreshToken: string;
}

class SwaggerRefreshBody {
  @ApiProperty()
  Token: string;
}
@ApiTags('Authentication')
@Controller('login')
export class LoginController {
  constructor(private ls: LoginService) {}
  @ApiResponse({
    status: 201,
    description: 'Criado com sucesso',
    type: SwaggerLoginBody,
  })
  @Post()
  async login(@Body() loginBody: LoginBody) {
    const tokenized = await this.ls.login(loginBody.email, loginBody.password);

    return tokenized;
  }
  // @ApiResponse({
  //   status: 201,
  //   description: 'Criado com sucesso',
  //   type: SwaggerRefreshBody,
  // })
  // @Post('refresh')
  // async refreshToken(@Body() body) {
  //   const tokenized = await this.ls.refreshToken(body.refreshToken);
  //   return tokenized;
  // }
}
