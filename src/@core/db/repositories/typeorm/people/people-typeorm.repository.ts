import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';
import People from 'src/@core/domain/people/people';
import { Repository } from 'typeorm';

export class PeopleTypeOrmRepository implements IPeopleRepository {
  constructor(private peopleRepo: Repository<People>) {}

  async create(person: People): Promise<People> {
    const data = this.peopleRepo.create(person);
    return await this.peopleRepo.save(data);
  }
  async getById(id: number): Promise<People> {
    return await this.peopleRepo.findOne({
      where: {
        id: id,
      },
    });
  }
  async getAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: People[] }> {
    const data = await this.peopleRepo.find({
      skip: page,
      take: recordsPerPage,
    });
    const count = await this.peopleRepo.count();
    const total = Math.ceil(count / recordsPerPage);
    return { data, total };
  }
  async getByDocument(document: string): Promise<People> {
    return await this.peopleRepo.findOne({
      where: {
        document: document,
      },
    });
  }
  async update(id: number, item: People): Promise<People> {
    const person = await this.peopleRepo.preload({ ...item, id: id });
    return await this.peopleRepo.save(person);
  }
}
