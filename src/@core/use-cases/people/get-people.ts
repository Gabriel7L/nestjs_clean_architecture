import { IPeopleRepository } from 'src/@core/domain/people/repositories/ipeople.repository';

export default class GetPeople {
  constructor(private peopleRepo: IPeopleRepository) {}
  async GetPeople(page: number, recordsPerPage: number, id_company: number) {
    const people = await this.peopleRepo.GetAll(
      page,
      recordsPerPage,
      id_company,
    );
    return people;
  }
}
