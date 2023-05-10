import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class GetPeople {
  constructor(private peopleRepo: IPeopleRepository) {}
  async getPeople() {
    const people = await this.peopleRepo.getPeople();
    return people;
  }
}
