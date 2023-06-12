import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import EmployeesTypeOrmRepository from 'src/@core/db/repositories/typeorm/employees/employees-typeorm.repository';
import { DataSource } from 'typeorm';
import Employees from '@domain/employees/employees';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateEmployee from '@use-cases/employees/create-employee';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';
import UpdateEmployee from '@use-cases/employees/update-employee';
import { PeopleTypeOrmRepository } from 'src/@core/db/repositories/typeorm/people/people-typeorm.repository';
import People from '@domain/people/people';
import { employeesProvider } from 'src/providers/employees.provider';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, ...Object.values(employeesProvider)],
})
export class EmployeesModule {}
