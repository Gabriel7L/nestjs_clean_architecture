import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import CreateCompany from '@use-cases/companies/create-company';

@Injectable()
export class CompaniesService {
  constructor(private createCompany: CreateCompany) {}
  Create(createCompanyDto: CreateCompanyDto) {
    return this.createCompany.CreateCompany(createCompanyDto);
  }

  FindAll() {
    return `This action returns all companies`;
  }

  FindOne(id: number) {
    return `This action returns a #${id} company`;
  }

  Update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  Remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
