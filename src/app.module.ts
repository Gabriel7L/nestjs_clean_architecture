import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './app/people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './@core/db/conn/data-source';
import { CompaniesModule } from './app/companies/companies.module';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './app/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './app/employees/employees.module';

@Module({
  imports: [
    PeopleModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    CompaniesModule,
    UsersModule,
    AuthModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
