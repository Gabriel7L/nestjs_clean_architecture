import { Basic } from '@domain/basic/basic';
import CompaniesValidatorFactory from './companies.validator';
import { HttpException } from '@nestjs/common';

export default class Companies extends Basic {
  document: string;
  social_name: string;
  fantasy_name: string;
  private constructor(
    props: Omit<Companies, 'id' | 'created_at' | 'updated_at'>,
    id?: number,
  ) {
    super();
    if (!props) {
      return;
    }
    Companies.Validate(props);
    Object.assign(this, props);
    this.id = id;
  }
  static Create(props: Omit<Companies, 'id' | 'created_at' | 'updated_at'>) {
    return new Companies(props);
  }

  static Validate(props: Omit<Companies, 'id' | 'created_at' | 'updated_at'>) {
    const validator = CompaniesValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
