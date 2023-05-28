import Emails from '@domain/emails/emails';
import Addresses from '../addresses/addresses';
import { Basic } from '../basic/basic';
import PeopleValidatorFactory from './people.validator';
import { HttpException } from '@nestjs/common';
import { PeopleInput } from 'src/@core/application/people/people-input';
import { AddressesInput } from 'src/@core/application/addresses/addresses-input';
import { EmailsInput } from 'src/@core/application/emails/emails-input';

export default class People extends Basic {
  document: string;
  name: string;
  dt_birth: Date;
  addresses: Addresses[];
  emails: Emails[];
  private constructor(props: PeopleInput, id?: number) {
    super();
    if (!props) {
      return;
    }
    People.Validate(props);
    this.document = props.document;
    this.name = props.name;
    this.dt_birth = props.dt_birth;
    this.addresses = [];
    this.emails = [];
    this.id = id;
  }
  static Create(props: PeopleInput) {
    return new People(props);
  }
  AddAddress(addressInput: AddressesInput, id_person?: number): void {
    this.addresses.push(new Addresses(addressInput, id_person));
  }
  AddEmail(email: EmailsInput, id_person?: number): void {
    this.emails.push(new Emails(email, id_person));
  }
  static Validate(props: PeopleInput) {
    const validator = PeopleValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
