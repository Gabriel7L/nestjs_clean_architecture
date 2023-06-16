import Employees from '@domain/employees/employees';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';
import People from '@domain/people/people';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

export default class EmployeesTypeOrmRepository
  implements IEmployeesRepository
{
  constructor(
    private employeesRepo: Repository<Employees>,
    private peopleRepo: Repository<People>,
  ) {}
  FindByName(name: string): Promise<Employees[]> {
    throw new Error('Method not implemented.');
  }
  async Create(item: Employees): Promise<Employees> {
    if (!(await this.peopleRepo.findOneBy({ id: item.id_person })))
      throw new HttpException('Person not found.', 400);
    const data = this.employeesRepo.create(item);
    return await this.employeesRepo.save(data);
  }
  async Update(item: Employees): Promise<Employees> {
    if (!(await this.peopleRepo.findOneBy({ id: item.id_person })))
      throw new HttpException('Person not found.', 400);
    const data = await this.employeesRepo.preload(item);
    return await this.employeesRepo.save(data);
  }
  async GetById(id: number): Promise<Employees> {
    return await this.employeesRepo.findOneBy({ id: id });
  }
  async GetAll(
    page = 0,
    recordsPerPage = 10,
    id_company: number,
  ): Promise<{ total: number; data: Employees[] }> {
    if (page < 0) page = 0;
    const data = await this.employeesRepo.find({
      skip: page * recordsPerPage,
      take: recordsPerPage,
      where: {
        person: {
          id_company: id_company,
        },
      },
      order: {
        id: 'ASC',
      },
    });
    const count = await this.peopleRepo.count();
    const total = count;
    return { data, total };
  }
}
