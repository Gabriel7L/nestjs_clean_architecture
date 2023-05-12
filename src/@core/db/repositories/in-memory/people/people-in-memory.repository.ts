import { IPeopleRepository } from '@domain/people/ipeople.repository';
import People from '@domain/people/people';

export default class PeopleInMemoryRepository implements IPeopleRepository {
  items: People[] = [];
  async savePerson(person: People): Promise<People> {
    this.items.push(person);
    return Promise.resolve(person);
  }
  async getPersonById(id: string): Promise<People> {
    return Promise.resolve(this.items.find((person) => person.id === id));
  }
  async getPeople(): Promise<People[]> {
    return Promise.resolve(this.items);
  }
}
