import { cnpj, cpf } from 'cpf-cnpj-validator';
import crypto from 'crypto';
import Addresses from '../addresses/addresses';
import { Basic } from '../basic/basic';
import { HttpException } from '@nestjs/common';
export default class People extends Basic {
  document: string;
  name: string;
  dt_birth: Date;
  addresses: Omit<
    Addresses,
    | 'id_person'
    | 'id'
    | 'created_at'
    | 'updated_at'
    | 'person'
    | 'convertStringToEnum'
  >[];
  private constructor(
    props: Omit<
      People,
      'id' | 'validate_document' | 'created_at' | 'updated_at'
    >,
    id?: string,
  ) {
    super();
    if (!props) {
      return;
    }
    this.document = this.validate_document(props.document);
    this.name = props.name;
    this.dt_birth = props.dt_birth;
    this.id = id ? id : crypto.randomUUID();
    const addressesData = props.addresses.map((address) => {
      return new Addresses(address, this.id);
    });
    this.addresses = addressesData;
  }
  static create(
    props: Omit<
      People,
      'id' | 'validate_document' | 'created_at' | 'updated_at'
    >,
    id?: string,
  ) {
    return new People(props, id);
  }
  validate_document(document: string): string {
    if (cpf.isValid(document) || cnpj.isValid(document)) {
      return document;
    } else {
      throw new HttpException('Invalid document', 404);
    }
  }
}
