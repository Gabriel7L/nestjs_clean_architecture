import Companies from '@domain/companies/companies';
import { ICompaniesRepository } from '@domain/companies/icompanies.repository';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateCompany from '@use-cases/companies/create-company';
import { CompaniesTypeOrmRepository } from 'src/@core/db/repositories/typeorm/companies/companies-typeorm.repository';
import { DataSource } from 'typeorm';

export const companiesProvider: Provider[] = [
  {
    provide: CompaniesTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new CompaniesTypeOrmRepository(
        dataSource.getRepository(Companies),
      );
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: CreateCompany,
    useFactory: (companiesRepo: ICompaniesRepository) => {
      return new CreateCompany(companiesRepo);
    },
    inject: [CompaniesTypeOrmRepository],
  },
];
