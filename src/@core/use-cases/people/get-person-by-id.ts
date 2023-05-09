import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class GetPerson {
  peopleRepo: IPeopleRepository;
  constructor(peopleRepo: IPeopleRepository) {
    this.peopleRepo = peopleRepo;
  }

  async getPersonById(id: string) {
    const person = await this.peopleRepo.getPersonById(id);
    return person;
  }
}
