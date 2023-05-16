import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';
import People from 'src/@core/domain/people/people';
import { Repository } from 'typeorm';

export class PeopleTypeOrmRepository implements IPeopleRepository {
  constructor(private peopleRepo: Repository<People>) {}
  async savePerson(person: People): Promise<People> {
    const data = this.peopleRepo.create(person);
    return await this.peopleRepo.save(data);
  }
  async getPersonById(id: number): Promise<People> {
    return await this.peopleRepo.findOne({
      where: {
        id: id,
      },
    });
  }
  async getPeople(): Promise<People[]> {
    console.log('chegou aqui');
    return await this.peopleRepo.find();
  }
}
