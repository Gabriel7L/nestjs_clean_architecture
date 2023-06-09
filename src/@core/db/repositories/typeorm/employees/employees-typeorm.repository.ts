import Employees from '@domain/employees/employees';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';
import { Repository } from 'typeorm';

export default class EmployeesTypeOrmRepository
  implements IEmployeesRepository
{
  constructor(private employeesRepo: Repository<Employees>) {}
  findByName(name: string): Promise<Employees[]> {
    throw new Error('Method not implemented.');
  }
  async create(item: Employees): Promise<Employees> {
    const data = this.employeesRepo.create(item);
    return await this.employeesRepo.save(data);
  }
  async update(item: Employees): Promise<Employees> {
    const data = await this.employeesRepo.preload(item);
    return await this.employeesRepo.save(data);
  }
  async getById(id: number): Promise<Employees> {
    return await this.employeesRepo.findOneBy({ id: id });
  }
  getAll(
    page: number,
    recordsPerPage: number,
    id_company: number,
  ): Promise<{ total: number; data: Employees[] }> {
    throw new Error('Method not implemented.');
  }
}
