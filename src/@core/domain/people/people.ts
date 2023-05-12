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
    id?: string,
  ) {
    super();
    if (!props) {
      return;
    }
    this.document = ValidateDocument(props.document);
    this.name = props.name;
    this.dt_birth = props.dt_birth;
    this.id = id ? id : crypto.randomUUID();
    this.addresses = addresses;
  }
  static async Create(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
    id?: string,
  ) {
    const addressesData = [];
    const _id = id ? id : crypto.randomUUID();
    for (let i = 0; i < addresses.length; i++) {
      addressesData.push(await Addresses.Create(addresses[i], _id));
    }
    return new People(props, addressesData, _id);
  }
}
