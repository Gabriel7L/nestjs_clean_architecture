import { HttpException } from '@nestjs/common';
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
    const person = await this.peopleRepo.findOne({
      where: {
        id: id,
      },
    });
    if (person) return person;
    throw new HttpException('Person not found', 404);
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
  async update(item: People): Promise<People> {
    const person = await this.peopleRepo.preload(item);
    return await this.peopleRepo.save(person);
  }
}
