import { Basic } from '@domain/basic/basic';
import People from '@domain/people/people';
import UsersValidatorFactory from './users.validator';
import { HttpException } from '@nestjs/common';
import Companies from '@domain/companies/companies';
import * as bcrypt from 'bcrypt';

export default class Users extends Basic {
  email: string;
  password: string;
  id_person: number;
  id_companie: number;
  person: People;
  companie: Companies;
  private constructor(
    props: Omit<
      Users,
      'id' | 'created_at' | 'updated_at' | 'person' | 'companie'
    >,
    id?: number,
  ) {
    super();
    if (!props) {
      return;
    }
    Users.Validate(props);
    Object.assign(this, props);
    this.password = bcrypt.hashSync(this.password, 8);
    this.id = id;
  }

  static Create(
    props: Omit<
      Users,
      'id' | 'created_at' | 'updated_at' | 'person' | 'companie'
    >,
    id?: number,
  ) {
    return new Users(props, id);
  }
  static Validate(
    props: Omit<
      Users,
      'id' | 'created_at' | 'updated_at' | 'person' | 'companie'
    >,
  ) {
    const validator = UsersValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 404);
    }
  }
}
