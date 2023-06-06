import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import GetByEmailUser from '@use-cases/users/get-by-email-user';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private getByEmailUser: GetByEmailUser,
  ) {}

  async login(email: string, password: string) {
    const users = await this.getByEmailUser.getByEmail(email);
    if (bcrypt.compareSync(password, users.password)) {
      const payload = {
        sub: users.id,
        email: users.email,
        company: users.id_company,
      };

      const rt = this.jwtService.sign(
        { rsd: users.id },
        { secret: process.env.JWT_SECRET_REFRESH, expiresIn: '30d' },
      );

      const jwt = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET_ACCESS,
        expiresIn: '30d',
      });

      return { Token: 'Bearer ' + jwt, RefreshToken: rt };
    } else return null;
  }
}
