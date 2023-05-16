import * as crypto from 'crypto';
import { Basic } from '../basic/basic';
import People from '../people/people';
export default class Budget extends Basic {
  value: number;
  id_client: number;
  description: string;
  client?: People;
  constructor(
    value: number,
    id_client: number,
    description: string,
    id?: number,
  ) {
    super();
    this.value = value;
    this.id_client = id_client;
    this.description = description;
    this.id = id ? id : undefined;
  }
}
