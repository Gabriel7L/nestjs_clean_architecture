import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import CreateEmployee from '@use-cases/employees/create-employee';
import UpdateEmployee from '@use-cases/employees/update-employee';

@Injectable()
export class EmployeesService {
  constructor(
    private createEmployee: CreateEmployee,
    private updateEmployee: UpdateEmployee,
  ) {}

  async Create(createEmployeeDto: CreateEmployeeDto) {
    return await this.createEmployee.CreateEmployee(createEmployeeDto);
  }

  FindAll() {
    return `This action returns all employees`;
  }

  FindOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async Update(id: number, updateEmployeeDto: CreateEmployeeDto) {
    return await this.updateEmployee.UpdateEmployee(updateEmployeeDto, id);
  }

  Remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
