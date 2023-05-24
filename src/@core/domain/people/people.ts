import Emails from '@domain/emails/emails';
import Addresses from '../addresses/addresses';
import { Basic } from '../basic/basic';
import PeopleValidatorFactory from './people.validator';
import { HttpException } from '@nestjs/common';

export default class People extends Basic {
  document: string;
  name: string;
  dt_birth: Date;
  addresses: Addresses[];
  emails: Emails[];
  private constructor(
    props: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
    addresses: Addresses[],
    emails: Emails[],
    id?: number,
  ) {
    super();
    if (!props) {
      return;
    }
    People.Validate(props);
    Object.assign(this, props);
    this.addresses = addresses;
    this.emails = emails;
    this.id = id;
  }
  static Create(
    props: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
    emails: Omit<
      Emails,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
  ) {
    const addressesData = [];
    const emailsData = [];
    for (let i = 0; i < addresses.length; i++) {
      addressesData.push(Addresses.Create(addresses[i]));
    }
    for (let i = 0; i < emails.length; i++) {
      emailsData.push(Emails.Create(emails[i]));
    }
    return new People(props, addressesData, emailsData);
  }
  // static validate(
  //   props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
  // ) {
  //   ValidatorRules.SetRuleFor(props.name, 'name')
  //     .Required()
  //     .String()
  //     .MaxLength(255);
  //   ValidatorRules.SetRuleFor(props.dt_birth, 'dt_birth').Required();
  //   ValidatorRules.SetRuleFor(props.document, 'document')
  //     .Required()
  //     .ValidDocument(props.document);
  // }
  static Validate(
    props: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
  ) {
    const validator = PeopleValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
