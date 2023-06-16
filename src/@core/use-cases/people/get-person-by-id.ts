import { IPeopleRepository } from 'src/@core/domain/people/repositories/ipeople.repository';

export default class GetPerson {
  constructor(private peopleRepo: IPeopleRepository) {}

  async GetPersonById(id: number) {
    const person = await this.peopleRepo.GetById(id);
    return person;
  }
}
