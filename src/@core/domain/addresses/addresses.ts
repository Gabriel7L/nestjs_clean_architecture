import { Basic } from '../basic/basic';
import People from '../people/people';
import {
  ConvertStringToEnum,
  states,
} from '../utils/convertions/convert-states';
import { ValidateZipCode } from '../utils/validations/zipcode-validations';

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
    this.street = props.street;
    this.number = props.number;
    this.complement = props.complement;
    this.zip_code = props.zip_code;
    this.id_person = id_person;
    this.city = props.city;
    this.district = props.district;
    this.state = ConvertStringToEnum(props.state);
    this.id = id ? id : undefined;
  }
  static async Create(
    props: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >,
    id_person?: number,
    id?: number,
  ) {
    if (await ValidateZipCode(props.zip_code)) {
      return new Addresses(props, id_person, id);
    }
  }
}
