import { HttpException, Injectable } from '@nestjs/common';
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
    const user = await this.getByEmailUser.getByEmail(email);
    if (!user) throw new HttpException('Invalid email or password', 400);
    if (bcrypt.compareSync(password, user.password)) {
      const payload = {
        sub: user.id,
        email: user.email,
        company: user.id_company,
      };

      const rt = this.jwtService.sign(
        { rsd: user.id },
        { secret: process.env.JWT_SECRET_REFRESH, expiresIn: '30d' },
      );

      const jwt = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET_ACCESS,
        expiresIn: '30d',
      });

      return { Token: 'Bearer ' + jwt, RefreshToken: rt };
    } else throw new HttpException('Invalid email or password', 400);
  }
}
