import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { employeesProvider } from 'src/providers/employees.provider';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, ...Object.values(employeesProvider)],
})
export class EmployeesModule {}
