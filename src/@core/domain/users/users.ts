import { Basic } from '@domain/basic/basic';
import People from '@domain/people/people';
import UsersValidatorFactory from './users.validator';
import { HttpException } from '@nestjs/common';
import Companies from '@domain/companies/companies';
import * as bcrypt from 'bcrypt';
import { UsersInput } from 'src/@core/application/users/users-input';

export default class Users extends Basic {
  email: string;
  password: string;
  id_person: number;
  id_company: number;
  person: People;
  company: Companies;
  private constructor(props: UsersInput, id?: number) {
    super();
    if (!props) {
      return;
    }
    Users.Validate(props);
    Object.assign(this, props);
    this.password = bcrypt.hashSync(this.password, 8);
    this.id = id;
  }

  static Create(props: UsersInput, id?: number) {
    return new Users(props, id);
  }
  static Validate(props: UsersInput) {
    const validator = UsersValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 404);
    }
  }
}
