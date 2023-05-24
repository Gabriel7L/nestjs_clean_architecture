import { HttpException } from '@nestjs/common';
import Addresses from '../addresses/addresses';
import { Basic } from '../basic/basic';
import PeopleValidatorFactory from './people.validator';

export default class People extends Basic {
  document: string;
  name: string;
  dt_birth: Date;
  addresses: Addresses[];
  private constructor(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
    addresses: Addresses[],
    id?: number,
  ) {
    super();
    if (!props) {
      return;
    }
    People.validate(props);
    this.document = props.document;
    this.name = props.name;
    this.dt_birth = props.dt_birth;
    this.id = id;
    this.addresses = addresses;
  }
  static async Create(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
  ) {
    People.validate(props);
    const addressesData = [];
    for (let i = 0; i < addresses.length; i++) {
      addressesData.push(await Addresses.Create(addresses[i]));
    }
    return new People(props, addressesData);
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
  static validate(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
  ) {
    const validator = PeopleValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
