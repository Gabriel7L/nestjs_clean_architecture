import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';
import crypto from 'crypto';
import { IAddressesRepository } from 'src/@core/domain/addresses/iaddresses.repository';
import People from 'src/@core/domain/people/people';
export default class CreatePerson {
  peopleRepo: IPeopleRepository;
  addressesRepo: IAddressesRepository;
  constructor(
    peopleRepo: IPeopleRepository,
    addressesRepo: IAddressesRepository,
  ) {
    this.peopleRepo = peopleRepo;
    this.addressesRepo = addressesRepo;
  }
  async createPerson(
    props: Omit<
      People,
      'id' | 'validate_document' | 'created_at' | 'updated_at'
    >,
  ) {
    const personId = crypto.randomUUID();
    const data = People.create(props, personId);
    console.log(data);
    const person = await this.peopleRepo.savePerson(data);
    return person;
  }
}
