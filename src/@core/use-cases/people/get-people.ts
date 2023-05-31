import { IPeopleRepository } from 'src/@core/domain/people/repositories/ipeople.repository';

export default class GetPeople {
  constructor(private peopleRepo: IPeopleRepository) {}
  async getPeople(page: number, recordsPerPage: number, id_company: number) {
    const people = await this.peopleRepo.getAll(
      page,
      recordsPerPage,
      id_company,
    );
    return people;
  }
}
