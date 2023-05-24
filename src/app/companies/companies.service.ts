import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import CreateCompany from '@use-cases/companies/create-company';

@Injectable()
export class CompaniesService {
  constructor(private createCompany: CreateCompany) {}
  create(createCompanyDto: CreateCompanyDto) {
    return this.createCompany.createCompany(createCompanyDto);
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
