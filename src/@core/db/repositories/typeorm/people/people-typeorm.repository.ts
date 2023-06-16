import { HttpException } from '@nestjs/common';
import { IPeopleRepository } from 'src/@core/domain/people/repositories/ipeople.repository';
import People from 'src/@core/domain/people/people';
import { Repository } from 'typeorm';

export class PeopleTypeOrmRepository implements IPeopleRepository {
  constructor(private peopleRepo: Repository<People>) {}

  async Create(person: People): Promise<People> {
    const data = this.peopleRepo.create(person);
    return await this.peopleRepo.save(data);
  }
  async GetById(id: number): Promise<People> {
    const person = await this.peopleRepo.findOne({
      where: {
        id: id,
      },
    });
    if (person) return person;
    throw new HttpException('Person not found', 404);
  }
  async GetAll(
    page = 0,
    recordsPerPage = 10,
    id_company: number,
  ): Promise<{ total: number; data: People[] }> {
    if (page < 0) page = 0;
    const data = await this.peopleRepo.find({
      skip: page * recordsPerPage,
      take: recordsPerPage,
      where: {
        id_company: id_company,
      },
      order: {
        id: 'ASC',
      },
    });
    const count = await this.peopleRepo.count();
    const total = count;
    return { data, total };
  }
  async GetByDocument(document: string, id_company: number): Promise<People> {
    const person = await this.peopleRepo.findOne({
      where: {
        document: document,
        id_company: id_company,
      },
    });
    return person;
  }
  async Update(item: People): Promise<People> {
    const person = await this.peopleRepo.preload(item);
    return await this.peopleRepo.save(person);
  }
}
