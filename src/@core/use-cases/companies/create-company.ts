import Companies from '@domain/companies/companies';
import { ICompaniesRepository } from '@domain/companies/icompanies.repository';

export default class CreateCompany {
  constructor(private companiesRepo: ICompaniesRepository) {}
  async createCompany(
    props: Omit<Companies, 'id' | 'updated_at' | 'created_at'>,
  ) {
    const data = Companies.Create(props);
    const company = await this.companiesRepo.create(data);
    return company;
  }
}
