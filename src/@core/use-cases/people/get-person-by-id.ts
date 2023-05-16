import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class GetPerson {
  constructor(private peopleRepo: IPeopleRepository) {}

  async getPersonById(id: number) {
    const person = await this.peopleRepo.getPersonById(id);
    return person;
  }
}
