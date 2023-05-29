import { Basic } from '@domain/basic/basic';
import CompaniesValidatorFactory from './companies.validator';
import { HttpException } from '@nestjs/common';
import { CompaniesInput } from 'src/@core/application/companies/companies-input';

export default class Companies extends Basic {
  document: string;
  social_name: string;
  fantasy_name: string;
  private constructor(props: CompaniesInput, id?: number) {
    super();
    if (!props) {
      return;
    }
    Companies.Validate(props);
    Object.assign(this, props);
    this.id = id;
  }
  static Create(props: CompaniesInput) {
    return new Companies(props);
  }

  static Validate(props: CompaniesInput) {
    const validator = CompaniesValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
