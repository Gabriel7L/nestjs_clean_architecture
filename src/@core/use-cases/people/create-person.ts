import { IPeopleRepository } from '@domain/people/ipeople.repository';
import People from '@domain/people/people';
import { PeopleInput } from 'src/@core/application/people/people-input';
import { AddressesInput } from 'src/@core/application/addresses/addresses-input';
import { EmailsInput } from 'src/@core/application/emails/emails-input';
export default class CreatePerson {
  constructor(private peopleRepo: IPeopleRepository) {}
  async createPerson(
    props: PeopleInput,
    addresses?: AddressesInput[],
    emails?: EmailsInput[],
  ) {
    const person = People.Create(props);
    if (addresses) {
      addresses.forEach((address) => {
        person.AddAddress(address);
      });
    }
    if (emails) {
      emails.forEach((email) => {
        person.AddEmail(email);
      });
    }
    const data = await this.peopleRepo.create(person);
    return data;
  }
}
