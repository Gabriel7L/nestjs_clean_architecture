import { IPeopleRepository } from '@domain/people/ipeople.repository';
import People from '@domain/people/people';

export default class PeopleInMemoryRepository implements IPeopleRepository {
  items: People[] = [];
  async create(person: People): Promise<People> {
    this.items.push(person);
    return Promise.resolve(person);
  }
  async getPersonById(id: number): Promise<People> {
    return Promise.resolve(this.items.find((person) => person.id === id));
  }
  async getPeople(): Promise<People[]> {
    return Promise.resolve(this.items);
  }
  getByDocument(document: string): Promise<People> {
    throw new Error('Method not implemented.' + document);
  }
  update(item: People): Promise<People> {
    throw new Error('Method not implemented.' + item);
  }
  getById(id: number): Promise<People> {
    throw new Error('Method not implemented.' + id);
  }
  getAll(
    page: number,
    recordsPerPage: number,
    id_company: number,
  ): Promise<{ total: number; data: People[] }> {
    throw new Error(
      'Method not implemented.' + page + recordsPerPage + id_company,
    );
  }
}
