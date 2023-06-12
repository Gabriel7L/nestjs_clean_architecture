import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { CompaniesTypeOrmRepository } from 'src/@core/db/repositories/typeorm/companies/companies-typeorm.repository';
import { DataSource } from 'typeorm';
import Companies from '@domain/companies/companies';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateCompany from '@use-cases/companies/create-company';
import { ICompaniesRepository } from '@domain/companies/icompanies.repository';
import { companiesProvider } from 'src/providers/companies.provider';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, ...Object.values(companiesProvider)],
})
export class CompaniesModule {}
