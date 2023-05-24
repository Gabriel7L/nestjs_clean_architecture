import { IPeopleRepository } from '@domain/people/ipeople.repository';
import People from '@domain/people/people';
import Addresses from '@domain/addresses/addresses';
import Emails from '@domain/emails/emails';
export default class CreatePerson {
  constructor(private peopleRepo: IPeopleRepository) {}
  async createPerson(
    props: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
    addresses: Omit<
      Addresses,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
    emails: Omit<
      Emails,
      'id_person' | 'id' | 'created_at' | 'updated_at' | 'person'
    >[],
  ) {
    const data = People.Create(props, addresses, emails);
    const person = await this.peopleRepo.create(data);
    return person;
  }
}
