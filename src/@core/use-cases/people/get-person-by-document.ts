import { IPeopleRepository } from 'src/@core/domain/people/repositories/ipeople.repository';

export default class GetPersonByDocument {
  constructor(private peopleRepo: IPeopleRepository) {}
  async GetPersonByDocument(document: string, id_company: number) {
    const person = await this.peopleRepo.GetByDocument(document, id_company);
    return person;
  }
}
