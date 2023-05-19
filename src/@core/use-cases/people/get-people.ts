import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class GetPeople {
  constructor(private peopleRepo: IPeopleRepository) {}
  async getPeople(page: number, recordsPerPage: number) {
    const people = await this.peopleRepo.getAll(page, recordsPerPage);
    return people;
  }
}
