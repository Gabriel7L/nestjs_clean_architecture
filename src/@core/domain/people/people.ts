import crypto from 'crypto';
import Addresses from '../addresses/addresses';
import { Basic } from '../basic/basic';
import ValidateDocument from '../utils/validations/document-validations';

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
    this.document = ValidateDocument(props.document);
    this.name = props.name;
    this.dt_birth = props.dt_birth;
    this.id = id ? id : undefined;
    this.addresses = addresses;
  }
  static async Create(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
  ) {
    const addressesData = [];
    for (let i = 0; i < addresses.length; i++) {
      addressesData.push(await Addresses.Create(addresses[i]));
    }
    return new People(props, addressesData);
  }
}
