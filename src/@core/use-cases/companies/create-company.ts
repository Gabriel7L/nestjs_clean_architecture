import { CompaniesInput } from '@application/companies/companies-input';
import Companies from '@domain/companies/companies';
import { ICompaniesRepository } from '@domain/companies/icompanies.repository';

export default class CreateCompany {
  constructor(private companiesRepo: ICompaniesRepository) {}
  async CreateCompany(props: CompaniesInput) {
    const data = Companies.Create(props);
    const company = await this.companiesRepo.Create(data);
    return company;
  }
}
