import Companies from '@domain/companies/companies';
import { ICompaniesRepository } from '@domain/companies/icompanies.repository';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

export class CompaniesTypeOrmRepository implements ICompaniesRepository {
  constructor(private companiesRepo: Repository<Companies>) {}

  async Create(item: Companies): Promise<Companies> {
    const data = this.companiesRepo.create(item);
    return await this.companiesRepo.save(data);
  }
  Update(item: Companies): Promise<Companies> {
    throw new Error('Method not implemented.');
  }
  async GetById(id: number): Promise<Companies> {
    const company = await this.companiesRepo.findOne({
      where: {
        id: id,
      },
    });
    if (company) return company;
    throw new HttpException('Company not found', 404);
  }
  async GetAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: Companies[] }> {
    const data = await this.companiesRepo.find({
      skip: page,
      take: recordsPerPage,
    });
    const count = await this.companiesRepo.count();
    const total = Math.ceil(count / recordsPerPage);
    return { data, total };
  }
}
