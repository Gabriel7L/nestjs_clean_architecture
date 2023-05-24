import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import GetByEmailUser from '@use-cases/users/get-by-email-user';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private getByEmailUser: GetByEmailUser,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string) {
    const user = await this.getByEmailUser.getByEmail(email);
    if (!bcrypt.compareSync(password, user.password)) {
      throw new HttpException('Invalid email or password', 401);
    }
    const payload = { sub: user.id, email: email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
