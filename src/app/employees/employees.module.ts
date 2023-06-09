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

@Module({
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    {
      provide: EmployeesTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new EmployeesTypeOrmRepository(
          dataSource.getRepository(Employees),
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
  ],
})
export class EmployeesModule {}
