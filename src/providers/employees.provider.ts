import Employees from '@domain/employees/employees';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';
import People from '@domain/people/people';
import { Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import CreateEmployee from '@use-cases/employees/create-employee';
import UpdateEmployee from '@use-cases/employees/update-employee';
import EmployeesTypeOrmRepository from 'src/@core/db/repositories/typeorm/employees/employees-typeorm.repository';
import { PeopleTypeOrmRepository } from 'src/@core/db/repositories/typeorm/people/people-typeorm.repository';
import { DataSource } from 'typeorm';

export const employeesProvider: Provider[] = [
  {
    provide: PeopleTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new PeopleTypeOrmRepository(dataSource.getRepository(People));
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: EmployeesTypeOrmRepository,
    useFactory: (dataSource: DataSource) => {
      return new EmployeesTypeOrmRepository(
        dataSource.getRepository(Employees),
        dataSource.getRepository(People),
      );
    },
    inject: [getDataSourceToken()],
  },
  {
    provide: CreateEmployee,
    useFactory: (employeeRepo: IEmployeesRepository) => {
      return new CreateEmployee(employeeRepo);
    },
    inject: [EmployeesTypeOrmRepository],
  },
  {
    provide: UpdateEmployee,
    useFactory: (employeeRepo: IEmployeesRepository) => {
      return new UpdateEmployee(employeeRepo);
    },
    inject: [EmployeesTypeOrmRepository],
  },
];
