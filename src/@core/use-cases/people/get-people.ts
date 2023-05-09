import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class GetPeople {
  peopleRepo: IPeopleRepository;
  constructor(peopleRepo: IPeopleRepository) {
    this.peopleRepo = peopleRepo;
  }
  async getPeople() {
    const people = await this.peopleRepo.getPeople();
    return people;
  }
}
