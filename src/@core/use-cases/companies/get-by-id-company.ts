import { ICompaniesRepository } from '@domain/companies/icompanies.repository';

export default class CreateCompany {
  constructor(private companiesRepo: ICompaniesRepository) {}
  async getCompanyById(id: number) {
    const company = await this.companiesRepo.GetById(id);
    return company;
  }
}
