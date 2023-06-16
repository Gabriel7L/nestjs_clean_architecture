import { IPeopleRepository } from '@domain/people/repositories/ipeople.repository';
import People from '@domain/people/people';

export default class PeopleInMemoryRepository implements IPeopleRepository {
  items: People[] = [];
  async Create(person: People): Promise<People> {
    this.items.push(person);
    return Promise.resolve(person);
  }
  async GetPersonById(id: number): Promise<People> {
    return Promise.resolve(this.items.find((person) => person.id === id));
  }
  async GetPeople(): Promise<People[]> {
    return Promise.resolve(this.items);
  }
  GetByDocument(document: string): Promise<People> {
    throw new Error('Method not implemented.' + document);
  }
  Update(item: People): Promise<People> {
    throw new Error('Method not implemented.' + item);
  }
  GetById(id: number): Promise<People> {
    throw new Error('Method not implemented.' + id);
  }
  GetAll(
    page: number,
    recordsPerPage: number,
    id_company: number,
  ): Promise<{ total: number; data: People[] }> {
    throw new Error(
      'Method not implemented.' + page + recordsPerPage + id_company,
    );
  }
}
