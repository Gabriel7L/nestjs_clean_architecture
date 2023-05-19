import { IPeopleRepository } from '@domain/people/ipeople.repository';
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
    const data = await People.Create(props, addresses);
    const person = await this.peopleRepo.create(data);
    return person;
  }
}
