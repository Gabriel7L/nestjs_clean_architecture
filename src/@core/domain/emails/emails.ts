import People from '@domain/people/people';
import { Basic } from '../basic/basic';
import EmailsValidatorFactory from './emails.validator';
import { HttpException } from '@nestjs/common';

export default class Emails extends Basic {
  email: string;
  id_person: number;
  person: People;
  constructor(
    props: Omit<
      Emails,
      'id' | 'id_person' | 'created_at' | 'updated_at' | 'person'
    >,
    id_person: number,
    id?: number,
  ) {
    super();
    Emails.Validate(props);
    Object.assign(this, props);
    this.id = id;
    this.id_person = id_person;
  }
  static Create(
    props: Omit<
      Emails,
      'id' | 'id_person' | 'created_at' | 'updated_at' | 'person'
    >,
    id_person?: number,
    id?: number,
  ) {
    return new Emails(props, id_person, id);
  }
  static Validate(
    props: Omit<
      Emails,
      'id' | 'id_person' | 'created_at' | 'updated_at' | 'person'
    >,
  ) {
    const validator = EmailsValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 404);
    }
  }
}
