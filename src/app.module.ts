import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './app/people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './@core/db/conn/data-source';
import { CompaniesModule } from './app/companies/companies.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [PeopleModule, TypeOrmModule.forRoot(dataSourceOptions), CompaniesModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
