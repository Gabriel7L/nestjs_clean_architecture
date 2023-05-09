import People from 'src/@core/domain/people/people';

export interface IPeopleRepository {
  savePerson(person: People): Promise<People>;
  getPersonById(id: string): Promise<People>;
  getPeople(): Promise<People[]>;
}
