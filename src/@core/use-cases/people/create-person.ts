import { IPeopleRepository } from '@domain/people/repositories/ipeople.repository';
import People from '@domain/people/people';
import { PeopleInput } from 'src/@core/application/people/people-input';
import { AddressesInput } from 'src/@core/application/addresses/addresses-input';
import { EmailsInput } from 'src/@core/application/emails/emails-input';
export default class CreatePerson {
  constructor(private peopleRepo: IPeopleRepository) {}
  async CreatePerson(
    props: PeopleInput,
    addresses?: AddressesInput[],
    emails?: EmailsInput[],
    id_company?: number,
  ) {
    const person = People.Create(props, id_company);
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
    const data = await this.peopleRepo.Create(person);
    return data;
  }
}
