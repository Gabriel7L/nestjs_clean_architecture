import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProvider } from 'src/providers/companies.provider';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, ...Object.values(companiesProvider)],
})
export class CompaniesModule {}
