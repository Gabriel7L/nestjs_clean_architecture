import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import CreateEmployee from '@use-cases/employees/create-employee';
import UpdateEmployee from '@use-cases/employees/update-employee';

@Injectable()
export class EmployeesService {
  constructor(
    private createEmployee: CreateEmployee,
    private updateEmployee: UpdateEmployee,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.createEmployee.createEmployee(createEmployeeDto);
  }

  findAll() {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.updateEmployee.updateEmployee(updateEmployeeDto, id);
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
