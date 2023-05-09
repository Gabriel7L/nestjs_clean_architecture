import * as crypto from 'crypto';
import { Basic } from '../basic/basic';
import People from '../people/people';
import { HttpException } from '@nestjs/common';

export default class Addresses extends Basic {
  street: string;
  number: string;
  complement: string;
  zip_code: string;
  state: states;
  district: string;
  city: string;
  id_person: string;
  person: People;
  constructor(
    props: Omit<
      Addresses,
      | 'id_person'
      | 'id'
      | 'created_at'
      | 'updated_at'
      | 'person'
      | 'convertStringToEnum'
    >,
    id_person: string,
    id?: string,
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
    this.state = this.convertStringToEnum(props.state);
    this.id = id ? id : crypto.randomUUID();
  }
  convertStringToEnum(state: string): states {
    if (states[state]) {
      return states[state];
    } else {
      throw new HttpException(
        'Invalid state. ' +
          state +
          ' is not one of the following values: [' +
          Object.values(states) +
          ']',
        400,
      );
    }
  }
}
export enum states {
  AL = 'AL',
  AC = 'AC',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  RR = 'RR',
  RO = 'RO',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO',
}
