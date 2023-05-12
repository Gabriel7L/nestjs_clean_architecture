import { IPeopleRepository } from '@domain/people/ipeople.repository';
import crypto from 'crypto';
import People from '@domain/people/people';
import Addresses from '@domain/addresses/addresses';
export default class CreatePerson {
  constructor(private peopleRepo: IPeopleRepository) {}
  async createPerson(
    props: Omit<People, 'id' | 'created_at' | 'updated_at' | 'addresses'>,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
  ) {
    const personId = crypto.randomUUID();
    const data = await People.Create(props, addresses, personId);
    const person = await this.peopleRepo.savePerson(data);
    return person;
  }
}
