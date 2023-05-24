import ValidatorRules from '@domain/utils/validations/validator-rules';
import { Basic } from '../basic/basic';
import People from '../people/people';
import {
  ConvertStringToEnum,
  states,
} from '../utils/convertions/convert-states';
import AddressesValidatorFactory from './addresses.validator';
import { HttpException } from '@nestjs/common';

export default class Addresses extends Basic {
  street: string;
  number: string;
  complement: string;
  zip_code: string;
  state: states;
  district: string;
  city: string;
  id_person: number;
  person: People;
  constructor(
    props: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >,
    id_person: number,
    id?: number,
  ) {
    super();
    if (!props) {
      return;
    }
    Addresses.Validate(props);
    this.street = props.street;
    this.number = props.number;
    this.complement = props.complement;
    this.zip_code = props.zip_code;
    this.id_person = id_person;
    this.city = props.city;
    this.district = props.district;
    this.state = ConvertStringToEnum(props.state);
    this.id = id;
  }
  static Create(
    props: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >,
    id_person?: number,
    id?: number,
  ) {
    return new Addresses(props, id_person, id);
  }
  static Validate(
    props: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >,
  ) {
    const validator = AddressesValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
